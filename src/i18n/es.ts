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
    langLabel: "EN",
    langHref: "/en",
  },

  /* ── Hero — B1 "Arquitecto" (aprobado 2026-06-14) ─────────── */
  hero: {
    /** Kicker: índice editorial arriba-izquierda, Geist 500 uppercase */
    kicker: "SCUART — ESTUDIO DE DISEÑO Y TECNOLOGÍA",

    /**
     * line1: "Diseño que se ve."
     * "ve" en Fraunces 400 itálica verde — el gesto de marca.
     * Copy elegido por William (ART_DIRECTION.md §6 sección 1).
     */
    line1: [
      { word: "Diseño", isRed: false },
      { word: "que", isRed: false },
      { word: "se", isRed: false },
      { word: "ve.", isRed: false, isItalicAccent: true },
    ],

    /**
     * line2: "Tecnología que trabaja."
     * "trabaja" en Fraunces 400 itálica verde — firma del estudio.
     */
    line2: [
      { word: "Tecnología", isRed: false },
      { word: "que", isRed: false },
      { word: "trabaja.", isRed: false, isItalicAccent: true },
    ],

    /** line3: vacía — el hero nuevo tiene 2 líneas, no 3 */
    line3: [],

    /**
     * Índice de capacidades: col 10-12 desktop, lista mono debajo en mobile.
     * Términos técnicos en inglés en ambos idiomas (coherente con el sistema).
     */
    capabilities: [
      { num: "001", label: "WEB PLATFORMS" },
      { num: "002", label: "SAAS + SYSTEMS" },
      { num: "003", label: "AI AUTOMATION" },
      { num: "004", label: "ORDERING · BOOKING · WORKFLOWS" },
    ],

    ariaLabel: "Diseño que se ve. Tecnología que trabaja.",
    subhead:
      "Estudio que construye webs premium, plataformas y sistemas digitales para negocios ambiciosos en USA y LATAM.",
    cta: "EMPEZAR UN PROYECTO",

    /* Campo conservado para compatibilidad — no se renderiza en el hero */
    index: "SCUART / ESTUDIO DE DISEÑO Y TECNOLOGÍA · BOGOTÁ · 2026",
  },

  /* ── Meta columna derecha (campo conservado, no renderizado en hero) ── */
  meta_col: {
    number: "N°·01",
    label: "DECLARACIÓN",
    coords: "GASTRO · WEB",
    type: "DISEÑO DIGITAL",
  },

  /* ── Manifesto — Sección 1.5 (entre hero y portfolio) ───── */
  /*
   * Copy aprobado por William. NO modificar.
   * Kicker: MANIFESTO en ambos idiomas — coherencia del sistema técnico.
   */
  manifesto: {
    kicker: "N°·01 / MANIFESTO",
    line1: "No hacemos webs.",
    line2a: "Construimos ",
    line2red: "ventajas competitivas.",
    ariaLabel:
      "Manifiesto — No hacemos webs. Construimos ventajas competitivas.",
  },

  /* ── Capabilities — Sección entre portfolio y método ───── */
  /*
   * C1/P4 — ANTI-INVENCIÓN:
   * Copy "resolves" nativo ES, neutro LATAM — sin claims, sin métricas.
   * Nombres de capability en inglés (términos técnicos, coherente con el sistema).
   */
  capabilities: {
    kicker: "CAPACIDADES",
    ariaLabel:
      "Capacidades — qué construye SCUART y qué problema resuelve cada una.",
    items: [
      {
        num: "01",
        name: "WEB PLATFORMS",
        resolves:
          "Sitios que cargan rápido, posicionan en búsqueda y convierten visitantes en clientes.",
      },
      {
        num: "02",
        name: "SAAS + SYSTEMS",
        resolves:
          "Productos completos — login, pagos, paneles, APIs. De cero a producción.",
      },
      {
        num: "03",
        name: "AI AUTOMATION",
        resolves:
          "Automatizamos lo repetitivo para que el equipo se enfoque en lo que importa.",
      },
      {
        num: "04",
        name: "E-COMMERCE",
        resolves:
          "Tiendas hechas para vender — checkout rápido, inventario, listas para crecer.",
      },
      {
        num: "05",
        name: "ORDERING · BOOKING · WORKFLOWS",
        resolves: "Pedidos, reservas y operación sin el desorden manual.",
      },
      {
        num: "06",
        name: "BRAND IDENTITY",
        resolves:
          "Un sistema visual coherente en todo — no armado por accidente.",
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
    projects: [
      {
        name: "Jamón Casero",
        num: "001",
        category: "WEB · MARCA GASTRO",
        year: "2017",
        image: "/images/portfolio-jamon-casero-trim.webp",
        alt: "JAMÓN CASERO — proyecto SCUART",
      },
      {
        name: "Menius",
        num: "002",
        category: "SAAS · PRODUCTO PROPIO",
        year: "2025",
        image: "/images/portfolio-menius-real-trim.webp",
        alt: "MENIUS — proyecto SCUART",
      },
      {
        name: "Healthy Choice NY",
        num: "003",
        category: "WEB · RESTAURANTE",
        year: "2019",
        image: "/images/portfolio-healthy-choice-real-trim.webp",
        alt: "HEALTHY CHOICE NY — proyecto SCUART",
      },
      {
        name: "Arriba Gold",
        num: "004",
        category: "E-COMMERCE",
        year: "2021",
        image: "/images/portfolio-arriba-gold-real-trim.webp",
        alt: "ARRIBA GOLD — proyecto SCUART",
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
      "SAAS + SYSTEMS",
      "AI AUTOMATION",
      "E-COMMERCE",
      "WORKFLOWS",
      "BRAND IDENTITY",
    ],
    capabilitiesLabel: "CAPACIDADES",
    whatChangesLabel: "QUÉ CAMBIA",
    steps: [
      {
        num: "001",
        title: "DIAGNÓSTICO",
        body: "Entendemos el negocio, el cliente, el mercado y qué está frenando confianza, conversión o operación.",
        stepCapabilities: ["RESEARCH", "POSITIONING", "BRAND IDENTITY"],
        whatChanges:
          "El negocio gana claridad sobre lo que realmente debe cambiar.",
      },
      {
        num: "002",
        title: "DIRECCIÓN",
        body: "Definimos posicionamiento, copy, dirección visual, estructura bilingüe EN/ES y sistema editorial antes de diseñar.",
        stepCapabilities: ["BRAND IDENTITY", "COPY", "UX"],
        whatChanges: "Cada decisión a partir de acá apunta al mismo lugar.",
      },
      {
        num: "003",
        title: "SISTEMA",
        body: "Construimos la solución correcta: web platform, SaaS, AI automation, e-commerce, ordering, booking, workflows o una web de alto rendimiento.",
        stepCapabilities: [
          "WEB PLATFORMS",
          "SAAS + SYSTEMS",
          "AI AUTOMATION",
          "E-COMMERCE",
          "WORKFLOWS",
        ],
        whatChanges:
          "El negocio obtiene algo que funciona, no solo algo que se ve bien.",
      },
      {
        num: "004",
        title: "LANZAMIENTO",
        body: "Probamos responsive, performance, SEO, accesibilidad, tracking y conversión antes de publicar.",
        stepCapabilities: ["PERFORMANCE", "SEO", "QA"],
        whatChanges: "Sale en vivo listo para rendir, no solo para existir.",
      },
    ],
  },

  /* ── Contacto — Sección 4 ───────────────────────────────── */
  contact: {
    kicker: "EMPEZAR UN PROYECTO",
    statement: "EMPECEMOS.",
    subcopy: "Contanos el proyecto. Respondemos en menos de 24 horas.",
    labelName: "Nombre",
    labelBusiness: "Negocio o marca",
    labelEmail: "Email",
    labelCountry: "País o mercado",
    labelWhatDoYouNeed: "¿Qué necesitas?",
    labelBudget: "Rango de presupuesto",
    labelTimeline: "Tiempo ideal",
    labelMessage: "Mensaje",
    placeholderName: "Tu nombre",
    placeholderBusiness: "Nombre de la empresa o marca",
    placeholderEmail: "tu@ejemplo.com",
    placeholderCountry: "México, Argentina, USA…",
    placeholderMessage:
      "Descripción breve del proyecto — cuanto más contexto, mejor.",
    needOptions: [
      { value: "", label: "Seleccionar" },
      { value: "website", label: "Sitio web" },
      { value: "saas", label: "SaaS / Plataforma web" },
      { value: "ecommerce", label: "E-commerce" },
      { value: "ordering", label: "Sistema de pedidos / reservas" },
      { value: "automation", label: "IA / Automatización" },
      { value: "branding", label: "Branding + Web" },
      { value: "other", label: "Otro / Todavía no estoy seguro" },
    ],
    budgetOptions: [
      { value: "", label: "Seleccionar rango" },
      { value: "under5k", label: "< $5.000" },
      { value: "5k-15k", label: "$5.000 – $15.000" },
      { value: "15k-50k", label: "$15.000 – $50.000" },
      { value: "over50k", label: "$50.000+" },
      { value: "notsure", label: "No estoy seguro" },
    ],
    timelineOptions: [
      { value: "", label: "Seleccionar tiempo" },
      { value: "asap", label: "Lo antes posible" },
      { value: "1-3mo", label: "1 – 3 meses" },
      { value: "3-6mo", label: "3 – 6 meses" },
      { value: "flexible", label: "Flexible" },
    ],
    submitLabel: "ENVIAR BRIEF →",
    submitLoadingLabel: "ENVIANDO…",
    successHeading: "Brief recibido.",
    successBody: "Lo revisamos y te respondemos en menos de 24 horas.",
    errorMessage: "Algo salió mal. Intentá de nuevo o escribinos directo.",
    alternativeLabel: "¿Preferís un mensaje rápido?",
    whatsappLabel: "WhatsApp",
    /* PLACEHOLDER — William reemplaza con su número real en formato internacional */
    whatsappHref: "https://wa.me/[WHATSAPP_NUMBER]",
    emailLabel: "Email",
    emailHref: "mailto:hello@scuart.com",
  },

  /* ── Footer — cierre de marca ───────────────────────────── */
  footer: {
    navLabel: "NAVEGACIÓN",
    langSwitchLabel: "IDIOMA",
    markets: "Bogotá · US · LATAM",
    builtBy: "© 2026 SCUART",
    tagline: "No decoramos. Decidimos.",
    ariaLabel: "SCUART — Pie de página del estudio",
  },
};
