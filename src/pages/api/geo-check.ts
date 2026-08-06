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

/* ── Normalizar y validar la URL (anti-SSRF) ────────────────── */
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
  const h = u.hostname.toLowerCase();
  /* Bloquear loopback, redes privadas y metadata de cloud */
  if (
    h === "localhost" ||
    h.endsWith(".localhost") ||
    h.endsWith(".internal") ||
    h === "169.254.169.254" ||
    /^127\./.test(h) ||
    /^10\./.test(h) ||
    /^192\.168\./.test(h) ||
    /^172\.(1[6-9]|2\d|3[01])\./.test(h) ||
    /^\[?::1\]?$/.test(h) ||
    !h.includes(".")
  ) {
    return null;
  }
  return u;
}

async function fetchText(
  url: string
): Promise<{ ok: boolean; status: number; text: string }> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      redirect: "follow",
      headers: {
        "User-Agent": "SCUART-GEO-Checker/1.0 (+https://scuart.com)",
        Accept: "text/html,application/xhtml+xml,text/plain,*/*",
      },
    });
    const buf = await res.arrayBuffer();
    const slice =
      buf.byteLength > MAX_HTML_BYTES ? buf.slice(0, MAX_HTML_BYTES) : buf;
    return {
      ok: res.ok,
      status: res.status,
      text: new TextDecoder("utf-8").decode(slice),
    };
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

  if (rateLimited(clientAddress ?? "unknown")) {
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

  /* 7 — Formato answer-first: headings que son preguntas */
  const headings = [...html.matchAll(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/gi)].map(
    m => decodeEntities(m[1].replace(/<[^>]+>/g, "").trim())
  );
  const preguntas = headings.filter(h =>
    /\?|^(cómo|qué|por qué|cuánto|cuándo|dónde|quién|how|what|why|when|where|who)\b/i.test(
      h
    )
  );
  checks.push({
    id: "answer-first",
    label: "Contenido que responde preguntas",
    pass: preguntas.length >= 2,
    detail: preguntas.length
      ? `${preguntas.length} secciones con formato pregunta-respuesta.`
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
