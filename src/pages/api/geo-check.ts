/**
 * src/pages/api/geo-check.ts — Chequeo GEO automático de una URL.
 *
 * QUÉ HACE (y qué NO):
 * Descarga el HTML de la URL que manda el visitante y corre checks TÉCNICOS
 * verificables — los que determinan si un motor generativo (ChatGPT, Perplexity,
 * Google AI Overviews) puede leer, entender y citar ese sitio.
 *
 * NO consulta a ningún LLM preguntando "qué dicen de este negocio": eso cuesta
 * tokens por uso y es spameable. Esa parte queda como gancho para la
 * conversación por WhatsApp — el copy de la página lo dice explícitamente.
 *
 * CHECKS (todos verificables leyendo el sitio, cero invención — P4):
 *   1. robots.txt no bloquea a los crawlers de IA  ← la palanca #1 de GEO
 *   2. Schema markup (JSON-LD) presente
 *   3. <title> presente y de largo razonable
 *   4. meta description presente y de largo razonable
 *   5. Un solo <h1> y jerarquía de headings
 *   6. sitemap.xml accesible
 *   7. Contenido en formato answer-first (preguntas como headings)
 *   8. Imágenes con alt
 *
 * SEGURIDAD:
 * - Solo acepta http/https. Bloquea IPs privadas/localhost (anti-SSRF).
 * - Timeout duro por fetch; corta el body a 1.5 MB.
 * - Rate limit en memoria por IP (best-effort en serverless).
 * - No persiste nada: el análisis es efímero.
 */

import type { APIRoute } from "astro";

export const prerender = false;

/* ── Límites ────────────────────────────────────────────────── */
const FETCH_TIMEOUT_MS = 8000;
const MAX_HTML_BYTES = 1_500_000;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;

/* Rate limit best-effort: en serverless la instancia puede reciclarse, así que
   esto frena ráfagas obvias, no un ataque decidido. Suficiente para un lead
   magnet público sin login. */
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const prev = (hits.get(ip) ?? []).filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  prev.push(now);
  hits.set(ip, prev);
  if (hits.size > 500) {
    for (const [k, v] of hits)
      if (!v.some(t => now - t < RATE_LIMIT_WINDOW_MS)) hits.delete(k);
  }
  return prev.length > RATE_LIMIT_MAX;
}

import { lookup } from "node:dns/promises";

/* ── Anti-SSRF ──────────────────────────────────────────────────
   Este endpoint es público y sin auth: un atacante podría intentar que el
   servidor haga fetch de direcciones INTERNAS (metadata de la nube 169.254.169.254,
   127.0.0.1, redes privadas). La defensa tiene tres capas — las tres necesarias:
     1. normalizeUrl: rechaza el hostname literal si YA es una IP privada/loopback.
     2. isPrivateIp + resolución DNS: bloquea DNS-rebinding (un dominio público
        cuyo registro A apunta a una IP interna pasaría la capa 1). Se resuelve
        el DNS y se valida CADA IP antes de conectar.
     3. redirect: "manual" en fetchText: un dominio público que responde
        302 → http://169.254.169.254 evadiría todo si siguiéramos redirects.
        Cada salto se re-valida por normalizeUrl + DNS. */

/* ¿La IP (v4 o v6) cae en un rango privado/reservado que no debe alcanzarse? */
function isPrivateIp(ip: string): boolean {
  const a = ip.toLowerCase();
  // IPv6
  if (a.includes(":")) {
    if (a === "::1" || a === "::") return true;
    if (a.startsWith("fe80")) return true; // link-local
    if (a.startsWith("fc") || a.startsWith("fd")) return true; // ULA fc00::/7
    // IPv4 mapeada en IPv6 (::ffff:10.x.x.x) → validar la parte v4
    const m = a.match(/::ffff:(\d+\.\d+\.\d+\.\d+)$/);
    if (m) return isPrivateIp(m[1]);
    return false;
  }
  // IPv4
  const p = a.split(".").map(Number);
  if (p.length !== 4 || p.some((n) => Number.isNaN(n) || n < 0 || n > 255))
    return true; // malformada → bloquear por las dudas
  const [x, y] = p;
  return (
    x === 0 || // 0.0.0.0/8
    x === 127 || // loopback
    x === 10 || // privada
    (x === 172 && y >= 16 && y <= 31) || // privada
    (x === 192 && y === 168) || // privada
    (x === 169 && y === 254) || // link-local / metadata cloud
    (x === 100 && y >= 64 && y <= 127) || // CGNAT 100.64.0.0/10
    x >= 224 // multicast/reservado 224.0.0.0/4 en adelante
  );
}

function normalizeUrl(raw: string): URL | null {
  let s = raw.trim();
  if (!s) return null;
  if (!/^https?:\/\//i.test(s)) s = `https://${s}`;
  let u: URL;
  try {
    u = new URL(s);
  } catch {
    return null;
  }
  if (u.protocol !== "http:" && u.protocol !== "https:") return null;
  // Solo puertos web estándar (bloquea 6379/Redis, 22/SSH, etc.).
  if (u.port && u.port !== "80" && u.port !== "443") return null;
  const h = u.hostname.toLowerCase().replace(/^\[|\]$/g, ""); // quita brackets IPv6
  if (
    h === "localhost" ||
    h.endsWith(".localhost") ||
    h.endsWith(".internal") ||
    !h.includes(".") && !h.includes(":") // sin punto ni ':' = no es hostname/IP válido público
  ) {
    return null;
  }
  // Si el hostname YA es una IP literal, validarla directo.
  if (/^[\d.]+$/.test(h) || h.includes(":")) {
    if (isPrivateIp(h)) return null;
  }
  return u;
}

/* Resuelve el DNS del host y rechaza si ALGUNA IP resuelta es privada (anti-rebinding). */
async function hostResolvesToPublicIp(hostname: string): Promise<boolean> {
  // Si ya es IP literal, normalizeUrl la validó; no hay DNS que resolver.
  if (/^[\d.]+$/.test(hostname) || hostname.includes(":")) return true;
  try {
    const results = await lookup(hostname, { all: true });
    if (!results.length) return false;
    return results.every((r) => !isPrivateIp(r.address));
  } catch {
    return false; // no resuelve → no conectar
  }
}

async function fetchText(
  url: string
): Promise<{ ok: boolean; status: number; text: string }> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), FETCH_TIMEOUT_MS);
  try {
    let current = url;
    // Seguimos redirects a mano, re-validando cada destino (anti-SSRF por redirect).
    for (let hop = 0; hop < 4; hop++) {
      const target = normalizeUrl(current);
      if (!target) return { ok: false, status: 0, text: "" };
      if (!(await hostResolvesToPublicIp(target.hostname)))
        return { ok: false, status: 0, text: "" };

      const res = await fetch(target.href, {
        signal: ctrl.signal,
        redirect: "manual",
        headers: {
          "User-Agent": "SCUART-GEO-Checker/1.0 (+https://scuart.com)",
          Accept: "text/html,application/xhtml+xml,text/plain,*/*",
        },
      });
      // 3xx con Location → re-validar el destino en la próxima vuelta.
      if (res.status >= 300 && res.status < 400) {
        const loc = res.headers.get("location");
        if (!loc) return { ok: false, status: res.status, text: "" };
        current = new URL(loc, target.href).href; // resuelve relativas
        continue;
      }
      const buf = await res.arrayBuffer();
      const slice =
        buf.byteLength > MAX_HTML_BYTES ? buf.slice(0, MAX_HTML_BYTES) : buf;
      return {
        ok: res.ok,
        status: res.status,
        text: new TextDecoder("utf-8").decode(slice),
      };
    }
    return { ok: false, status: 0, text: "" }; // demasiados redirects
  } catch {
    return { ok: false, status: 0, text: "" };
  } finally {
    clearTimeout(timer);
  }
}

/* Decodifica entidades HTML del sitio analizado. Sin esto, un <title> con
   "Design &amp; Tech" se mostraba literalmente como "Design &amp; Tech" en el
   resultado (el JS del front vuelve a escapar por seguridad → doble escape). */
function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(Number(d)));
}

/* ── Los crawlers que importan para GEO ─────────────────────── */
const AI_BOTS = [
  "GPTBot",
  "ClaudeBot",
  "PerplexityBot",
  "Google-Extended",
  "OAI-SearchBot",
];

interface Check {
  id: string;
  label: string;
  pass: boolean;
  detail: string;
  weight: number;
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { "Content-Type": "application/json" },
    });

  // clientAddress viene del `x-forwarded-for` (Vercel), que puede llegar como
  // lista "ip_real, proxy1, proxy2". Tomar SOLO la primera (la del cliente) para
  // que el atacante no evada el rate-limit rotando IPs falsas en el resto de la
  // lista. Sigue siendo best-effort (el Map es per-instance en serverless), pero
  // deja de ser trivialmente evadible.
  const clientIp = (clientAddress ?? "unknown").split(",")[0].trim();
  if (rateLimited(clientIp)) {
    return json(
      {
        error: "rate_limited",
        message: "Demasiadas consultas. Probá en un minuto.",
      },
      429
    );
  }

  let raw = "";
  try {
    const body = await request.json();
    raw = typeof body?.url === "string" ? body.url : "";
  } catch {
    return json(
      { error: "bad_request", message: "Falta la dirección del sitio." },
      400
    );
  }

  const target = normalizeUrl(raw);
  if (!target) {
    return json(
      {
        error: "invalid_url",
        message: "Esa dirección no parece válida. Ej: tusitio.com",
      },
      400
    );
  }

  /* ── Descargar home, robots.txt y sitemap en paralelo ───────── */
  const origin = target.origin;
  const [home, robots, sitemap] = await Promise.all([
    fetchText(target.href),
    fetchText(`${origin}/robots.txt`),
    fetchText(`${origin}/sitemap.xml`),
  ]);

  if (!home.ok || !home.text) {
    return json(
      {
        error: "unreachable",
        message:
          "No pudimos leer ese sitio (puede estar caído o bloquear robots). Escribinos y lo revisamos a mano.",
      },
      422
    );
  }

  const html = home.text;
  const lower = html.toLowerCase();
  const checks: Check[] = [];

  /* 1 — robots.txt no bloquea a los bots de IA (la palanca #1) */
  const robotsTxt = robots.ok ? robots.text : "";
  const bloqueados: string[] = [];
  if (robotsTxt) {
    for (const bot of AI_BOTS) {
      const re = new RegExp(
        `user-agent:\\s*${bot}[\\s\\S]*?(?=user-agent:|$)`,
        "i"
      );
      const bloque = robotsTxt.match(re)?.[0] ?? "";
      if (/disallow:\s*\/\s*$/im.test(bloque)) bloqueados.push(bot);
    }
    const global =
      robotsTxt.match(/user-agent:\s*\*[\s\S]*?(?=user-agent:|$)/i)?.[0] ?? "";
    if (/disallow:\s*\/\s*$/im.test(global))
      bloqueados.push("todos (User-agent: *)");
  }
  checks.push({
    id: "ai-bots",
    label: "Los motores de IA pueden leer tu sitio",
    pass: bloqueados.length === 0,
    detail: bloqueados.length
      ? `Tu robots.txt bloquea: ${bloqueados.join(", ")}. Si un motor no puede leerte, no puede citarte.`
      : robotsTxt
        ? "Ningún crawler de IA está bloqueado en robots.txt."
        : "No hay robots.txt — por defecto todos los crawlers pueden entrar.",
    weight: 3,
  });

  /* 2 — Schema markup JSON-LD */
  const ldMatches =
    html.match(
      /<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi
    ) ?? [];
  const tipos = new Set<string>();
  for (const block of ldMatches) {
    const inner = block.replace(/<[^>]+>/g, "");
    for (const m of inner.matchAll(/"@type"\s*:\s*"([^"]+)"/g)) tipos.add(m[1]);
  }
  checks.push({
    id: "schema",
    label: "Schema markup (le dice a la IA qué sos)",
    pass: tipos.size > 0,
    detail: tipos.size
      ? `Encontramos: ${[...tipos].slice(0, 5).join(", ")}.`
      : "No hay JSON-LD. Sin schema, la IA tiene que adivinar a qué se dedica tu negocio.",
    weight: 2,
  });

  /* 3 — <title> */
  const title = decodeEntities(
    html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? ""
  );
  checks.push({
    id: "title",
    label: "Título de página",
    pass: title.length >= 15 && title.length <= 65,
    detail: title
      ? `"${title.slice(0, 60)}" (${title.length} caracteres${title.length > 65 ? " — se corta en resultados" : title.length < 15 ? " — muy corto" : ""}).`
      : "No tiene <title>.",
    weight: 1,
  });

  /* 4 — meta description */
  const desc = decodeEntities(
    html
      .match(
        /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i
      )?.[1]
      ?.trim() ??
      html
        .match(
          /<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i
        )?.[1]
        ?.trim() ??
      ""
  );
  checks.push({
    id: "description",
    label: "Meta description",
    pass: desc.length >= 50 && desc.length <= 165,
    detail: desc
      ? `${desc.length} caracteres${desc.length > 165 ? " — se corta" : desc.length < 50 ? " — muy corta para resumir tu propuesta" : ""}.`
      : "No tiene meta description.",
    weight: 1,
  });

  /* 5 — Un solo H1 */
  const h1s = (html.match(/<h1[\s>]/gi) ?? []).length;
  checks.push({
    id: "h1",
    label: "Un titular principal claro",
    pass: h1s === 1,
    detail:
      h1s === 1
        ? "Un solo <h1>, como corresponde."
        : h1s === 0
          ? "No hay <h1>."
          : `Hay ${h1s} <h1> — la IA no sabe cuál es el tema principal.`,
    weight: 1,
  });

  /* 6 — sitemap.xml */
  const haySitemap = sitemap.ok && /<(urlset|sitemapindex)/i.test(sitemap.text);
  checks.push({
    id: "sitemap",
    label: "Sitemap.xml",
    pass: haySitemap,
    detail: haySitemap
      ? "Accesible en /sitemap.xml."
      : "No encontramos /sitemap.xml — los crawlers tienen que descubrir tus páginas a mano.",
    weight: 1,
  });

  /* 7 — Formato answer-first: contenido pregunta-respuesta. Se busca en TRES
     lugares, porque un FAQ moderno puede vivir en cualquiera y un checker que
     solo miraba <h2>/<h3> daba falso negativo a sitios que SÍ tienen FAQ:
       · <h2>/<h3> con forma de pregunta (FAQ clásico con headings)
       · <summary> (FAQ en acordeón <details>/<summary> — el patrón más común)
       · schema FAQPage en JSON-LD (el formato que los motores generativos
         realmente consumen — si está, cuenta aunque el HTML no tenga headings). */
  const answerNodes = [
    ...html.matchAll(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/gi),
    ...html.matchAll(/<summary[^>]*>([\s\S]*?)<\/summary>/gi),
  ].map(m => decodeEntities(m[1].replace(/<[^>]+>/g, "").trim()));
  const preguntasEnHtml = answerNodes.filter(h =>
    /\?|^(cómo|qué|por qué|cuánto|cuándo|dónde|quién|how|what|why|when|where|who)\b/i.test(
      h
    )
  ).length;
  // FAQPage en JSON-LD cuenta como formato answer-first presente (los motores lo
  // leen directo). `tipos` se computó en el check de schema (arriba).
  const tieneFaqSchema = tipos.has("FAQPage") || tipos.has("QAPage");
  const preguntas = tieneFaqSchema
    ? Math.max(preguntasEnHtml, 2) // schema FAQPage ⇒ el check pasa
    : preguntasEnHtml;
  checks.push({
    id: "answer-first",
    label: "Contenido que responde preguntas",
    pass: preguntas >= 2,
    detail: tieneFaqSchema
      ? "Tenés un FAQ en schema (FAQPage) — el formato que los motores citan directo."
      : preguntas > 0
        ? `${preguntas} secciones con formato pregunta-respuesta.`
        : "Ningún subtítulo plantea una pregunta. Los motores generativos citan contenido que responde preguntas concretas.",
    weight: 2,
  });

  /* 8 — Imágenes con alt */
  const imgs = html.match(/<img[^>]*>/gi) ?? [];
  const sinAlt = imgs.filter(
    i => !/\salt\s*=\s*["'][^"']+["']/i.test(i)
  ).length;
  checks.push({
    id: "alt",
    label: "Imágenes descritas (alt)",
    pass: imgs.length === 0 || sinAlt === 0,
    detail:
      imgs.length === 0
        ? "No hay imágenes en el home."
        : sinAlt === 0
          ? `Las ${imgs.length} imágenes tienen alt.`
          : `${sinAlt} de ${imgs.length} imágenes sin alt.`,
    weight: 1,
  });

  /* ── Score ponderado ────────────────────────────────────────── */
  const totalPeso = checks.reduce((a, c) => a + c.weight, 0);
  const logrado = checks.reduce((a, c) => a + (c.pass ? c.weight : 0), 0);
  const score = Math.round((logrado / totalPeso) * 100);

  /* Las 3 fallas de mayor peso — "lo que movería la aguja primero" */
  const prioridades = checks
    .filter(c => !c.pass)
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 3)
    .map(c => ({ label: c.label, detail: c.detail }));

  return json({
    ok: true,
    url: target.href,
    host: target.hostname,
    score,
    checks: checks.map(({ id, label, pass, detail }) => ({
      id,
      label,
      pass,
      detail,
    })),
    prioridades,
  });
};
