/**
 * es.ts — Diccionario de copy ES (Español)
 * Copy nativo neutro LATAM, sin voseo. SCUART bilingue USA + LATAM.
 * Hero copy: Concepto B "Diseño + Tecnología como sistema" (aprobado 2026-06-07).
 */

import type { Translations } from "./en";

export const es: Translations = {
  /* ── SEO / metadata ─────────────────────────────────────── */
  meta: {
    title: "SCUART — Estudio Bilingüe de Diseño y Tecnología",
    description:
      "Estudio bilingüe que construye webs premium, plataformas y sistemas digitales para negocios ambiciosos en USA y LATAM.",
    ogTitle: "SCUART — Estudio Bilingüe de Diseño y Tecnología",
    ogDescription:
      "Diseño web premium y sistemas digitales para negocios en USA y LATAM.",
  },

  /* ── Nav ──────────────────────────────────────────────────
   * Labels alineados a investigación de navs de agencias de élite 2026
   * (Work/Studio/Services es el patrón dominante; "Método" descartado —
   * 0/10 agencias top lo usan). Las KEYS no cambian (las usan Nav.astro y
   * Footer); solo el texto visible. Los hrefs siguen apuntando a secciones reales.
   *   portfolio → "Trabajo"  (ancla #portfolio — sección real)
   *   method    → "Servicios" (ancla #method — describe los servicios)
   *   contact   → "Contacto"  (ancla #contact — sección real)
   */
  nav: {
    portfolio: "Trabajo",
    method: "Servicios",
    contact: "Contacto",
    /* Ver nota en en.ts — el servicio GEO estaba a dos clics de la home. */
    geo: "AI Visibility",
    geoHref: "/es/servicios/ai-visibility",
    langLabel: "EN",
    langHref: "/en",
  },

  /* ── Hero — solo ariaLabel; el copy visible vive en HeroSection.astro ── */
  hero: {
    ariaLabel: "Diseño que se ve. Tecnología que trabaja.",
  },

  /* ── Manifesto — Sección 1.5 (entre hero y portfolio) ───── */
  /*
   * Kicker: MANIFESTO en ambos idiomas — coherencia del sistema técnico.
   *
   * REESCRITO 2026-08-10 (aprobado por William tras la auditoría de copy).
   * El anterior era "No hacemos webs. / Construimos ventajas competitivas."
   * y lo contradecían CINCO lugares del propio sitio —uno de ellos ARRIBA
   * del manifiesto—: el subhead del hero ("Webs premium…"), la meta
   * description, el descriptor del footer ("Estudio de diseño web"), el
   * statement de Studio ("…con webs que transmiten confianza") y el método
   * entero, que solo describe construir un sitio. El manifiesto perdía 5 a 1.
   *
   * Además era el cliché fundacional del rubro ("we don't build websites,
   * we build businesses"), o sea que fallaba el test del competidor.
   *
   * La versión nueva conserva la MISMA estructura tipográfica (dos líneas,
   * un solo acento en la segunda) y es cierta: es exactamente lo que prueban
   * Etnia Braids (reservas + depósito) y Menius (SaaS completo).
   */
  manifesto: {
    kicker: "N°·01 / MANIFESTO",
    line1: "No entregamos una web.",
    line2a: "Entregamos el ",
    line2red: "sistema que la hace funcionar.",
    ariaLabel:
      "Manifiesto — No entregamos una web. Entregamos el sistema que la hace funcionar.",
  },

  /* ── Statement dark — scroll-reveal por palabra (portfolio → servicios) ── */
  statement: {
    kicker: "SCUART — ESTUDIO",
    body: "Diseño y tecnología que trabajan juntos, no por separado.",
    noteLeft: "ESTUDIO INDEPENDIENTE · BILINGÜE · LATAM + USA",
    noteRight: "Un solo equipo, de principio a fin.",
    ariaLabel: "Diseño y tecnología que trabajan juntos, no por separado.",
  },

  /* ── Servicios — kicker (los 7 items viven en capabilities.items) ── */
  servicesKicker: "SERVICIOS",

  /* ── Studio — Sección fusionada (capabilities + method) ── */
  studio: {
    kicker: "ESTUDIO",
    whatWeDoLabel: "QUÉ HACEMOS",
    howWeWorkLabel: "CÓMO TRABAJAMOS",
    aboutStatement:
      /* Sincronizado 2026-08-11 con StatementSection.astro, que es donde vive
         el copy que SÍ se renderiza. Esta clave no la consume ningún componente
         (verificado), pero dejarla con el texto viejo hacía que el diccionario
         contradijera a la pantalla. */
      "Diseñamos la marca y construimos el sistema que la sostiene.",
  },

  /* ── Capabilities — datos conservados (reutilizados por StudioSection) ── */
  capabilities: {
    kicker: "CAPACIDADES",
    ariaLabel:
      "Capacidades — qué construye SCUART y qué problema resuelve cada una.",
    items: [
      {
        num: "01",
        name: "WEB PLATFORMS",
        statement: "",
        resolves:
          "Sitios que cargan rápido, posicionan en búsqueda y convierten visitantes en clientes.",
        href: "/es/servicios/web-platforms",
      },
      {
        num: "02",
        name: "AI VISIBILITY · GEO",
        statement: "",
        resolves:
          "Tus clientes ya le preguntan a ChatGPT. Auditamos qué dice la IA de tu negocio y hacemos que te recomiende.",
        href: "/es/servicios/ai-visibility",
      },
      {
        num: "03",
        name: "SAAS + SYSTEMS",
        statement: "",
        resolves:
          "Productos completos — login, pagos, paneles, APIs. De cero a producción.",
        href: "/es/servicios/saas-systems",
      },
      {
        num: "04",
        name: "AI AUTOMATION",
        statement: "",
        /* Reescrito 2026-08-11: el anterior ("automatizamos lo repetitivo para
           que el equipo se enfoque en lo que importa") pasaba el test del
           competidor — cualquier agencia podía firmarlo. El nuevo nombra la
           capacidad concreta que está construida en Menius. */
        resolves:
          "Una foto de un menú impreso se vuelve catálogo digital. Asistentes que ejecutan, no que conversan.",
        href: "/es/servicios/ai-automation",
      },
      {
        num: "05",
        name: "E-COMMERCE",
        statement: "",
        /* Reescrito 2026-08-11: el anterior era genérico. El nuevo nombra el
           argumento real —sin comisión— y las pasarelas que están integradas. */
        resolves:
          "Tienda propia sin comisión por venta. Stripe, MercadoPago y Wompi ya integrados.",
        href: "/es/servicios/ecommerce",
      },
      {
        num: "06",
        name: "ORDERING · BOOKING · WORKFLOWS",
        statement: "",
        resolves: "Pedidos, reservas y operación sin el desorden manual.",
        href: "/es/servicios/ordering-booking",
      },
      {
        num: "07",
        name: "BRAND IDENTITY",
        statement: "",
        /* Reescrito 2026-08-11: el anterior pasaba el test del competidor. */
        resolves:
          "Un logo no es una marca. Tipografía, color, fotografía y voz como sistema aplicable.",
        href: "/es/servicios/brand-identity",
      },
    ],
  },

  /* ── Portfolio — Sección 2 ──────────────────────────────── */
  /*
   * C1/P4 — ANTI-INVENCIÓN:
   * Nombres de proyecto: reales, iguales en ambos idiomas (nombres propios).
   * Categorías y años: PLACEHOLDER marcados — William los completa.
   * sectionLabel y viewCase: traducidos al español.
   */
  portfolio: {
    sectionLabel: "TRABAJO SELECCIONADO",
    /**
     * NOTA DE IMPLEMENTACIÓN:
     * Las páginas de caso individuales NO existen todavía (hito futuro).
     * El enlace "VER CASO ↓" se renderiza como elemento visual pero
     * no navega a ningún lado. Ver PortfolioSection.astro para el manejo JS.
     */
    viewCase: "VER CASO ↓",
    /* Portfolio 2026-07-28: 3 casos PREMIUM con página dedicada + link al sitio
       vivo (decisión William). Se sacaron Healthy Choice y Arriba Gold: material
       viejo que bajaba el promedio. Un estudio que arranca vende más con 3 casos
       impecables que con 5 desparejos. Las imágenes -trim son PLACEHOLDER hasta
       que lleguen los screenshots reales (ver LISTA_SCREENSHOTS_PORTFOLIO). */
    projects: [
      {
        name: "Jamón Casero",
        num: "001",
        category: "WEB · MARCA GASTRO",
        year: "2025",
        image: "/images/portfolio-jamon-casero-trim.webp",
        alt: "Sitio web de Jamón Casero — web editorial para una marca de charcutería artesanal por SCUART",
        href: "/es/trabajo/jamon-casero",
      },
      {
        name: "Menius",
        num: "002",
        category: "SAAS · PRODUCTO PROPIO",
        year: "2025",
        image: "/images/portfolio-menius-real-trim.webp",
        alt: "Menius — SaaS de menú digital y pedidos online para restaurantes por SCUART",
        href: "/es/trabajo/menius",
      },
      {
        name: "Etnia Braids",
        num: "003",
        category: "WEB A MEDIDA · RESERVAS",
        year: "2025",
        /* thumbnail real: hero del sitio de Etnia en browser-mockup macOS
           (generado 2026-07-28 con el mismo chrome que Jamón/Menius) */
        image: "/images/portfolio-etnia-braids-trim.webp",
        alt: "Etnia Braids — sitio a medida con sistema de reservas para un salón de trenzas en Nueva York por SCUART",
        href: "/es/trabajo/etnia-braids",
      },
    ],
  },

  /* ── Method — Sección 3 ─────────────────────────────────── */
  /*
   * C1/P4 — ANTI-INVENCIÓN:
   * Los párrafos ES son TEXTUAL de William — no se modificó ninguna palabra.
   * Capacidades técnicas: iguales en ambos idiomas (términos técnicos).
   */
  method: {
    kicker: "MÉTODO",
    indexLabel: "TRABAJAMOS CON:",
    capabilities: [
      "WEB PLATFORMS",
      "AI VISIBILITY",
      "SAAS + SYSTEMS",
      "AI AUTOMATION",
      "E-COMMERCE",
      "WORKFLOWS",
      "BRAND IDENTITY",
    ],
    capabilitiesLabel: "CAPACIDADES",
    whatChangesLabel: "QUÉ CAMBIA",
    /* Rediseño 2026-07-17: verbos-acción (patrón Wild, research 2026).
       Servicios ACOTADOS a sitios web — sin la lista SaaS/AI/e-commerce. */
    steps: [
      {
        num: "01",
        title: "Escuchamos.",
        body: "Entendemos el negocio, el cliente y el mercado — y qué está frenando la confianza o la conversión.",
        stepCapabilities: ["RESEARCH", "POSITIONING", "BRAND IDENTITY"],
        whatChanges:
          "El negocio gana claridad sobre lo que realmente debe cambiar.",
      },
      {
        num: "02",
        title: "Definimos.",
        body: "Posicionamiento, estructura y dirección visual, antes de diseñar nada. Cada decisión apunta al mismo lado.",
        stepCapabilities: ["BRAND IDENTITY", "COPY", "UX"],
        whatChanges: "Cada decisión a partir de acá apunta al mismo lugar.",
      },
      {
        num: "03",
        title: "Construimos.",
        body: "Diseñamos y desarrollamos el sitio. Rápido, responsive y listo para buscadores — no solo para verse bien.",
        stepCapabilities: ["WEB", "PERFORMANCE"],
        whatChanges:
          "El negocio obtiene algo que funciona, no solo algo que se ve bien.",
      },
      {
        num: "04",
        title: "Lanzamos.",
        body: "Probamos rendimiento, SEO y accesibilidad, y lo publicamos listo para funcionar, no solo para existir.",
        stepCapabilities: ["PERFORMANCE", "SEO", "QA"],
        whatChanges: "Sale en vivo listo para rendir, no solo para existir.",
      },
    ],
  },

  /* ── Contacto — Sección 4 ───────────────────────────────── */
  contact: {
    kicker: "CONTACTO",
    statement: "Cuéntanos qué estás construyendo.",
    subcopy: "Una conversación, no una cotización. Respondemos en 24 horas.",
    ctaStart: "Empezar un proyecto",
    formName: "Tu nombre",
    formEmail: "Tu email",
    formNeed: "¿Qué necesitas?",
    formNeedOptions: [
      { value: "", label: "¿Qué necesitas?" },
      { value: "web", label: "Un sitio web" },
      { value: "saas", label: "Una plataforma / SaaS" },
      { value: "ecommerce", label: "Una tienda online" },
      { value: "branding", label: "Identidad de marca" },
      { value: "otro", label: "Otra cosa / no estoy seguro" },
    ],
    formMessage: "Cuéntanos un poco del proyecto",
    formSubmit: "Enviar",
    formSubmitting: "Enviando…",
    formSuccess: "¡Recibido! Te respondemos en menos de 24 horas.",
    formError: "Algo falló. Escríbenos directo a info@scuart.com.",
    altLabel: "O escríbenos directo",
    whatsappLabel: "WhatsApp",
    whatsappHref: "https://wa.me/13478489720",
  },

  /* ── Footer — cierre de marca ───────────────────────────── */
  footer: {
    navLabel: "NAVEGACIÓN",
    langSwitchLabel: "IDIOMA",
    markets: "Bilingüe · LATAM + USA",
    descriptor:
      "SCUART es un estudio de diseño y desarrollo web independiente y bilingüe, con base en Queens, Nueva York. Trabajamos con negocios en USA y LATAM, en español e inglés.",
    builtBy: "© 2026 SCUART",
    tagline: "No decoramos. Decidimos.",
    ariaLabel: "SCUART — Pie de página del estudio",
    legal: {
      privacyLabel: "Privacidad",
      privacyHref: "/es/privacidad",
      termsLabel: "Términos",
      termsHref: "/es/terminos",
    },
  },
};
