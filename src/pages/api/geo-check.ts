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
 *   6. Sitemap (declarado en robots.txt o en las rutas convencionales)
 *   7. Contenido en formato answer-first (headings, <summary> o FAQPage)
 *   8. Imágenes con alt (alt="" cuenta como correcto: es decorativa)
 *   9. Identidad verificable: tipo de negocio + ubicación + contacto en schema
 *  10. Contenido con fecha (dateModified / datePublished / OpenGraph)
 *
 * TRES ESTADOS, no dos: un check puede pasar, fallar, o quedar SIN DATOS
 * (`skipped`) cuando la evidencia no alcanza para decidir — por ejemplo un
 * sitio que inyecta las imágenes con JavaScript. Los `skipped` salen del
 * denominador del score: inventar un veredicto sin evidencia es peor que
 * admitir que no se pudo medir.
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
  if (p.length !== 4 || p.some(n => Number.isNaN(n) || n < 0 || n > 255))
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
    (!h.includes(".") && !h.includes(":")) // sin punto ni ':' = no es hostname/IP válido público
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
    return results.every(r => !isPrivateIp(r.address));
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
  /* true = no se pudo medir con la información disponible. No entra en el
     score (ni suma ni resta) y se muestra como "sin datos", no como falla.
     Inventar un veredicto donde no hay evidencia es exactamente lo que hace
     inútil a un checker. */
  skipped?: boolean;
  /* Severidad para agrupar el informe: qué tan caro es NO tener esto. */
  nivel?: "critico" | "importante" | "menor";
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

  /* ── Descargar home y robots.txt en paralelo ───────────────────
     El sitemap va DESPUÉS porque su ubicación puede estar declarada dentro
     del robots.txt (ver check 6). */
  const origin = target.origin;
  const [home, robots] = await Promise.all([
    fetchText(target.href),
    fetchText(`${origin}/robots.txt`),
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

  /* 6 — Sitemap
     CORREGIDO 2026-08-14: antes solo probaba /sitemap.xml. Eso reprobaba a
     sitios BIEN configurados por dos razones distintas:
       · La forma canónica de declarar un sitemap es la línea `Sitemap:` del
         robots.txt, y el archivo puede llamarse como sea y vivir donde sea.
       · Astro con @astrojs/sitemap genera /sitemap-index.xml, NO /sitemap.xml
         — o sea, el propio scuart.com se reprobaba a sí mismo.
     Ahora se prueba en orden: lo declarado en robots.txt primero (es la
     fuente de verdad), y si no hay declaración, las dos rutas convencionales. */
  const declarados = [...robotsTxt.matchAll(/^\s*sitemap:\s*(\S+)/gim)]
    .map(m => m[1].trim())
    .slice(0, 3); // no seguir una lista infinita que nos mande un sitio hostil

  const candidatos = declarados.length
    ? declarados
    : [`${origin}/sitemap-index.xml`, `${origin}/sitemap.xml`];

  let sitemapUrl = "";
  for (const c of candidatos) {
    const r = await fetchText(c);
    if (r.ok && /<(urlset|sitemapindex)/i.test(r.text)) {
      sitemapUrl = c;
      break;
    }
  }
  const haySitemap = Boolean(sitemapUrl);
  /* La ruta que se muestra, no la URL entera: en el resultado se lee mejor
     "/sitemap-index.xml" que "https://sitio.com/sitemap-index.xml". */
  const sitemapPath = (() => {
    try {
      return new URL(sitemapUrl).pathname;
    } catch {
      return sitemapUrl;
    }
  })();
  checks.push({
    id: "sitemap",
    label: "Sitemap",
    pass: haySitemap,
    detail: haySitemap
      ? declarados.length
        ? `Declarado en robots.txt y accesible en ${sitemapPath}.`
        : `Accesible en ${sitemapPath}. Conviene además declararlo con una línea "Sitemap:" en robots.txt.`
      : "No encontramos sitemap ni en robots.txt ni en las rutas habituales — los crawlers tienen que descubrir tus páginas a mano.",
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

  /* 8 — Imágenes con alt
     MATIZADO 2026-08-14: este check lee el HTML que devuelve el servidor, no
     el DOM ya renderizado. Cuando no hay ni un <img>, hay dos causas posibles
     y opuestas: el sitio no usa imágenes (scuart.com: todo CSS y SVG inline),
     o las inyecta con JavaScript y no las vemos. Dar "✓ Las imágenes tienen
     alt" en ese caso es un aprobado que no midió nada. Ahora ese caso se
     marca aparte —no suma ni resta al score— en vez de mentir un aprobado. */
  const imgs = html.match(/<img[^>]*>/gi) ?? [];
  /* alt="" NO es un alt faltante: es la forma CORRECTA de marcar una imagen
     decorativa para que un lector de pantalla la ignore (WAI: "null alt").
     El patrón típico es una imagen que se repite en dos variantes responsive
     — una lleva el alt real y la duplicada lleva alt="" a propósito.
     Contarla como falla, como se hacía antes, reprobaba justamente al sitio
     que hizo bien las cosas: el propio scuart.com daba "3 de 6 sin alt".
     Lo que sí es falla es NO tener el atributo. */
  const decorativas = imgs.filter(i =>
    /\salt\s*=\s*(["'])\s*\1/i.test(i)
  ).length;
  const sinAlt = imgs.filter(i => !/\salt\s*=/i.test(i)).length;
  const sinImagenes = imgs.length === 0;
  checks.push({
    id: "alt",
    label: "Imágenes descritas (alt)",
    pass: sinAlt === 0,
    /* Sin <img> en el HTML no hay nada que medir: se saca del score para que
       ni premie ni castigue (ver cálculo del score más abajo). */
    skipped: sinImagenes,
    detail: sinImagenes
      ? "No hay etiquetas <img> en el HTML del servidor. Si tu sitio muestra imágenes cargadas con JavaScript, este punto hay que revisarlo a mano."
      : sinAlt === 0
        ? decorativas
          ? `Las ${imgs.length} imágenes tienen alt (${decorativas} marcada${decorativas > 1 ? "s" : ""} como decorativa con alt="", que es lo correcto).`
          : `Las ${imgs.length} imágenes tienen alt.`
        : `${sinAlt} de ${imgs.length} imágenes sin atributo alt. Un motor generativo no ve la foto: lee el alt.`,
    weight: 1,
  });

  /* 9 — Identidad verificable: ¿la IA puede saber QUIÉN sos y DÓNDE estás?
     AGREGADO 2026-08-14. Es la diferencia real entre "el sitio está bien
     hecho" y "el sitio está preparado para GEO". Cuando alguien le pregunta a
     un motor "¿quién hace X en mi zona?", lo que se cita no es el sitio con el
     <title> más lindo: es aquel del que el motor puede extraer entidad,
     ubicación y forma de contacto sin inferir nada. Un schema de tipo
     Organization/LocalBusiness con dirección y teléfono es exactamente eso.
     Este check mira el JSON-LD que ya se parseó, no vuelve a descargar nada. */
  const ldRaw = ldMatches.map(b => b.replace(/<[^>]+>/g, "")).join(" ");
  const TIPOS_ENTIDAD = [
    "Organization",
    "LocalBusiness",
    "ProfessionalService",
    "Person",
    "Restaurant",
    "HairSalon",
    "Store",
  ];
  const tieneEntidad = [...tipos].some(t => TIPOS_ENTIDAD.includes(t));
  const tieneDireccion = /"(address|PostalAddress|areaServed)"/i.test(ldRaw);
  const tieneContacto = /"(telephone|email|contactPoint|sameAs)"/i.test(ldRaw);
  const señales = [tieneEntidad, tieneDireccion, tieneContacto].filter(
    Boolean
  ).length;
  const faltan = [
    !tieneEntidad && "el tipo de negocio",
    !tieneDireccion && "la dirección o zona de servicio",
    !tieneContacto && "un contacto (teléfono, email o perfiles)",
  ].filter(Boolean);
  checks.push({
    id: "entidad",
    label: "La IA sabe quién sos y dónde estás",
    /* Con 2 de 3 alcanza: hay negocios legítimamente sin dirección física
       (un estudio remoto) y exigir las tres reprobaría a quien no tiene local. */
    pass: tieneEntidad && señales >= 2,
    detail: tieneEntidad
      ? señales === 3
        ? "Tu schema declara qué tipo de negocio sos, dónde operás y cómo contactarte. Es lo que un motor necesita para citarte en una respuesta local."
        : `Tu schema te identifica, pero le falta ${faltan.join(" y ")}. Sin eso, la IA no te propone cuando alguien pregunta por tu zona.`
      : "No hay un schema de negocio (Organization, LocalBusiness o similar). La IA puede leer tu sitio pero no sabe qué entidad sos.",
    weight: 2,
  });

  /* 10 — Contenido fechado
     AGREGADO 2026-08-14. Los motores generativos priorizan lo que pueden datar:
     ante dos fuentes que dicen lo mismo, citan la que declara cuándo se escribió.
     Se acepta dateModified/datePublished en JSON-LD o el meta de OpenGraph.
     Peso 1: importa, pero no arruina a un sitio institucional sin blog. */
  const tieneFecha =
    /"(dateModified|datePublished)"\s*:/i.test(ldRaw) ||
    /<meta[^>]+property=["']article:(published|modified)_time["']/i.test(html);
  checks.push({
    id: "frescura",
    label: "Contenido con fecha",
    pass: tieneFecha,
    detail: tieneFecha
      ? "Tu contenido declara cuándo se publicó o actualizó — los motores prefieren citar fuentes que pueden datar."
      : "Ninguna página declara fecha de publicación o actualización. Ante dos fuentes que dicen lo mismo, la IA cita la que puede fechar.",
    weight: 1,
  });

  /* ── Severidad por check ──────────────────────────────────────
     El peso decide cuánto mueve el score; el nivel decide cómo se AGRUPA en
     el informe. Son cosas distintas: "no tenés schema" pesa 2 y es importante,
     pero "robots.txt bloquea a GPTBot" invalida todo lo demás — por eso es
     crítico aunque la diferencia de peso sea de solo un punto. */
  const NIVELES: Record<string, Check["nivel"]> = {
    "ai-bots": "critico",
    entidad: "critico",
    schema: "importante",
    "answer-first": "importante",
    title: "importante",
    description: "menor",
    h1: "menor",
    sitemap: "menor",
    alt: "menor",
    frescura: "menor",
  };
  for (const c of checks) c.nivel = NIVELES[c.id] ?? "menor";

  /* ── Score ponderado ──────────────────────────────────────────
     Los checks `skipped` salen del denominador: si no se pudo medir, no puede
     contar ni a favor ni en contra. Antes un sitio sin <img> sumaba un punto
     gratis por un check que nunca corrió. */
  const medibles = checks.filter(c => !c.skipped);
  const totalPeso = medibles.reduce((a, c) => a + c.weight, 0);
  const logrado = medibles.reduce((a, c) => a + (c.pass ? c.weight : 0), 0);
  const score = totalPeso ? Math.round((logrado / totalPeso) * 100) : 0;

  /* Prioridades: primero por severidad, después por peso. Un crítico va arriba
     de un importante aunque pesen parecido. Se manda el detalle además del
     label — el front lo necesita para que la lista diga QUÉ hacer, no solo
     repita el nombre del check. */
  const ORDEN = { critico: 0, importante: 1, menor: 2 } as const;
  const prioridades = checks
    .filter(c => !c.pass && !c.skipped)
    .sort(
      (a, b) =>
        ORDEN[a.nivel ?? "menor"] - ORDEN[b.nivel ?? "menor"] ||
        b.weight - a.weight
    )
    .slice(0, 3)
    .map(c => ({ label: c.label, detail: c.detail, nivel: c.nivel }));

  /* Resumen contado, para que el encabezado del informe diga algo concreto
     en vez de solo un número suelto. */
  const resumen = {
    pasan: medibles.filter(c => c.pass).length,
    fallan: medibles.filter(c => !c.pass).length,
    sinDatos: checks.length - medibles.length,
    total: checks.length,
  };

  return json({
    ok: true,
    url: target.href,
    host: target.hostname,
    score,
    resumen,
    checks: checks.map(({ id, label, pass, detail, skipped, nivel }) => ({
      id,
      label,
      pass,
      detail,
      skipped: Boolean(skipped),
      nivel,
    })),
    prioridades,
  });
};
