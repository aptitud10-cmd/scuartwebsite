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

  /* ── Hero — solo ariaLabel; el copy visible vive en HeroSection.astro ── */
  hero: {
    ariaLabel: "Diseño que se ve. Tecnología que trabaja.",
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

  /* ── Statement dark — scroll-reveal por palabra (portfolio → servicios) ── */
  statement: {
    kicker: "SCUART — ESTUDIO",
    body: "Diseño y tecnología que trabajan juntos, no por separado.",
    noteLeft: "ESTUDIO INDEPENDIENTE · BILINGÜE · LATAM + USA",
    noteRight: "Un solo equipo, de la idea al deploy.",
    ariaLabel: "Diseño y tecnología que trabajan juntos, no por separado.",
  },

  /* ── Servicios — kicker (los 6 items viven en capabilities.items) ── */
  servicesKicker: "SERVICIOS",

  /* ── Studio — Sección fusionada (capabilities + method) ── */
  studio: {
    kicker: "ESTUDIO",
    whatWeDoLabel: "QUÉ HACEMOS",
    howWeWorkLabel: "CÓMO TRABAJAMOS",
    aboutStatement:
      "Hacemos que tu marca se sienta memorable, con webs que transmiten confianza, no solo diseño — diseñadas con criterio, no por tendencia.",
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
      },
      {
        num: "02",
        name: "SAAS + SYSTEMS",
        statement: "",
        resolves:
          "Productos completos — login, pagos, paneles, APIs. De cero a producción.",
      },
      {
        num: "03",
        name: "AI AUTOMATION",
        statement: "",
        resolves:
          "Automatizamos lo repetitivo para que el equipo se enfoque en lo que importa.",
      },
      {
        num: "04",
        name: "E-COMMERCE",
        statement: "",
        resolves:
          "Tiendas hechas para vender — checkout rápido, inventario, listas para crecer.",
      },
      {
        num: "05",
        name: "ORDERING · BOOKING · WORKFLOWS",
        statement: "",
        resolves: "Pedidos, reservas y operación sin el desorden manual.",
      },
      {
        num: "06",
        name: "BRAND IDENTITY",
        statement: "",
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
        href: "/es/trabajo/jamon-casero",
      },
      {
        name: "Menius",
        num: "002",
        category: "SAAS · PRODUCTO PROPIO",
        year: "2025",
        image: "/images/portfolio-menius-real-trim.webp",
        alt: "MENIUS — proyecto SCUART",
        href: "/es/trabajo/menius",
      },
      {
        name: "Healthy Choice",
        num: "003",
        category: "WEB · RESTAURANTE",
        year: "2019",
        image: "/images/portfolio-healthy-choice-real-trim.webp",
        alt: "HEALTHY CHOICE NY — proyecto SCUART",
        href: "/es/trabajo/healthy-choice",
      },
      {
        name: "Arriba Gold",
        num: "004",
        category: "E-COMMERCE",
        year: "2021",
        image: "/images/portfolio-arriba-gold-real-trim.webp",
        alt: "ARRIBA GOLD — proyecto SCUART",
        href: "/es/trabajo/arriba-gold",
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
    statement: "Contanos qué estás construyendo.",
    subcopy: "Una conversación, no una cotización. Respondemos en 24 horas.",
    ctaStart: "Empezar un proyecto",
    formName: "Tu nombre",
    formEmail: "Tu email",
    formNeed: "¿Qué necesitás?",
    formNeedOptions: [
      { value: "", label: "¿Qué necesitás?" },
      { value: "web", label: "Un sitio web" },
      { value: "saas", label: "Una plataforma / SaaS" },
      { value: "ecommerce", label: "Una tienda online" },
      { value: "branding", label: "Identidad de marca" },
      { value: "otro", label: "Otra cosa / no estoy seguro" },
    ],
    formMessage: "Contanos un poco del proyecto",
    formSubmit: "Enviar",
    formSubmitting: "Enviando…",
    formSuccess: "¡Recibido! Te respondemos en menos de 24 horas.",
    formError: "Algo falló. Escribinos directo a info@scuart.com.",
    altLabel: "O escribinos directo",
    whatsappLabel: "WhatsApp",
    whatsappHref: "https://wa.me/13478489720",
  },

  /* ── Footer — cierre de marca ───────────────────────────── */
  footer: {
    navLabel: "NAVEGACIÓN",
    langSwitchLabel: "IDIOMA",
    markets: "Bilingüe · LATAM + USA",
    descriptor:
      "Estudio de diseño web independiente y bilingüe. Trabajamos con negocios en LATAM y USA, en español e inglés.",
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
