/**
 * en.ts — Diccionario de copy EN (English)
 * Copy nativo, NO traduccion literal. SCUART bilingue USA + LATAM.
 * Hero copy: Concepto B "Design + Technology como sistema" (aprobado 2026-06-07).
 *
 * NOTA de tipos: se usa una interfaz explícita (no "typeof en" con as const)
 * para que es.ts pueda implementar la misma forma sin colision de literales.
 */

export interface HeroToken {
  word: string;
  isRed: boolean;
  /** Si true: esta palabra se renderiza en Fraunces itálica terracota (gesto de marca V3) */
  isItalicAccent?: boolean;
}

export interface CapabilityItem {
  num: string;
  label: string;
}

/**
 * CapabilityService — un ítem de la sección CAPABILITIES.
 * Se diferencia de CapabilityItem (hero) en que agrega `resolves`:
 * la línea editorial de "qué problema resuelve" esta capability.
 * num: "01"-"06" (2 dígitos, distinto al "001"-"004" del hero/método).
 * name: término técnico en inglés en ambos idiomas (coherente con el sistema).
 * resolves: copy por idioma — directo, comercial, sin claims.
 */
export interface CapabilityService {
  /** Número editorial: "01" – "06". Igual en ambos idiomas. */
  num: string;
  /** Nombre de la capability — técnico, inglés en ambos idiomas. */
  name: string;
  /** Declaración principal de Studio Parte 1 — voz primera persona. */
  statement: string;
  /** Una línea que explica qué problema resuelve — nativo por idioma. */
  resolves: string;
}

export interface PortfolioProject {
  /** Nombre real del proyecto — NO cambiar */
  name: string;
  /** Número de orden editorial, ej "001" */
  num: string;
  /**
   * Categoría del proyecto.
   * PLACEHOLDER — William completa con el tipo real de cada proyecto.
   * NO inventar: web, SaaS, branding, etc. Dejar marcado.
   */
  category: string;
  /**
   * Año del proyecto.
   * PLACEHOLDER — William completa con el año real.
   * NO inventar. Dejar marcado.
   */
  year: string;
  /** Ruta de imagen desde /public — ej "/images/portfolio-jamon-casero.webp" */
  image: string;
  /** Alt text descriptivo — usa el nombre real (no es invento, es el nombre propio) */
  alt: string;
  /** URL de la página de caso — /es/trabajo/slug o /en/work/slug */
  href: string;
}

export interface MethodStep {
  /** Número editorial: "001" — "004". Igual en ambos idiomas. */
  num: string;
  /** Título del paso — por idioma (DISCOVER / DIAGNÓSTICO, etc.) */
  title: string;
  /** Párrafo corto — copy nativo por idioma. ES es textual de William. */
  body: string;
  /**
   * Capacidades técnicas relacionadas a ESTE paso específico.
   * Subconjunto de las globales + términos relevantes.
   * Términos técnicos en inglés en ambos idiomas (coherente con el sistema).
   */
  stepCapabilities: string[];
  /**
   * Qué cambia para el negocio al completar este paso — 1 línea mono.
   * Cambio CUALITATIVO. Sin métricas, sin revenue, sin claims. C1/P4.
   * Por idioma.
   */
  whatChanges: string;
}

export interface ContactTranslations {
  /** Statement de cierre grande — Archivo 900 */
  statement: string;
  /** Subcopy debajo del statement — DM Sans taupe */
  subcopy: string;
  /** Kicker de sección — mono uppercase */
  kicker: string;
  /* Labels de campos */
  labelName: string;
  labelBusiness: string;
  labelEmail: string;
  labelCountry: string;
  labelWhatDoYouNeed: string;
  labelBudget: string;
  labelTimeline: string;
  labelMessage: string;
  /* Placeholders */
  placeholderName: string;
  placeholderBusiness: string;
  placeholderEmail: string;
  placeholderCountry: string;
  placeholderMessage: string;
  /* Opciones del select "What do you need" */
  needOptions: { value: string; label: string }[];
  /* Opciones del select de presupuesto */
  budgetOptions: { value: string; label: string }[];
  /* Opciones del select de timeline */
  timelineOptions: { value: string; label: string }[];
  /* Botón de envío */
  submitLabel: string;
  submitLoadingLabel: string;
  /* Mensajes de estado */
  successHeading: string;
  successBody: string;
  errorMessage: string;
  /* Bloque secundario WhatsApp/email */
  alternativeLabel: string;
  whatsappLabel: string;
  emailLabel: string;
  /** Número de WhatsApp — placeholder hasta que William lo confirme */
  whatsappHref: string;
  /** Email de contacto público */
  emailHref: string;
}

export interface FooterTranslations {
  /** Etiqueta de navegación interna — mono uppercase */
  navLabel: string;
  /** Label selector de idioma — "EN / ES" */
  langSwitchLabel: string;
  /** Mercados del estudio — mono taupe, banda de créditos */
  markets: string;
  /** Texto de créditos + año — mono taupe */
  builtBy: string;
  /** Statement final corto (opcional) — se muestra como tagline bajo SCUART+ */
  tagline: string;
  /** Aria-label del elemento <footer> */
  ariaLabel: string;
  /** Links a páginas legales */
  legal: {
    privacyLabel: string;
    privacyHref: string;
    termsLabel: string;
    termsHref: string;
  };
}

export interface ManifestoTranslations {
  /** Kicker mono arriba-izquierda — igual en ambos idiomas */
  kicker: string;
  /** Primera línea — crema */
  line1: string;
  /** Segunda línea, parte crema (antes del acento) */
  line2a: string;
  /** Segunda línea, parte roja (el acento — 1 instancia) */
  line2red: string;
  /** Aria-label del elemento <section> */
  ariaLabel: string;
}

export interface Translations {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    portfolio: string;
    method: string;
    contact: string;
    langLabel: string;
    langHref: string;
  };
  /** Sección fusionada Estudio/Studio (reemplaza capabilities + method separados) */
  studio: {
    /** Kicker de sección — "ESTUDIO" / "STUDIO" */
    kicker: string;
    /** Label de la Parte 1 — "QUÉ HACEMOS" / "WHAT WE DO" */
    whatWeDoLabel: string;
    /** Label de la Parte 2 — "CÓMO TRABAJAMOS" / "HOW WE WORK" */
    howWeWorkLabel: string;
    /** Frase editorial fusionada de la Parte 1 (About estilo Trionn) — un solo string largo por idioma. */
    aboutStatement: string;
  };
  hero: {
    kicker: string;
    line1: HeroToken[];
    line2: HeroToken[];
    line3: HeroToken[];
    capabilities: CapabilityItem[];
    ariaLabel: string;
    subhead: string;
    cta: string;
    index: string;
  };
  meta_col: {
    number: string;
    label: string;
    coords: string;
    type: string;
  };
  /** Sección 1.5 — Manifesto (entre hero y portfolio) */
  manifesto: ManifestoTranslations;
  /**
   * Sección CAPABILITIES — entre portfolio y método.
   * Expande las 6 capabilities con su "qué resuelve".
   * NO duplica el índice del hero (4 items, sin resolves)
   * ni el stepCapabilities del método (por paso, técnico).
   */
  capabilities: {
    /** Kicker mono arriba — "CAPABILITIES" / "CAPACIDADES" */
    kicker: string;
    /** Aria-label del elemento <section> */
    ariaLabel: string;
    /** Los 6 servicios con número + nombre + línea editorial */
    items: CapabilityService[];
  };
  portfolio: {
    /** Kicker de sección — mono uppercase, arriba-izquierda */
    sectionLabel: string;
    /**
     * Texto del enlace "ver caso".
     * NOTA: las páginas de caso individuales NO existen aún (hito futuro).
     * El enlace es elemento visual; href="#" con preventDefault en JS.
     */
    viewCase: string;
    /** Los 4 proyectos reales. Nombres definitivos; category/year son placeholders. */
    projects: PortfolioProject[];
  };
  method: {
    /** Kicker mono — "METHOD" / "MÉTODO" */
    kicker: string;
    /** Label del índice técnico — "WE WORK WITH:" / "TRABAJAMOS CON:" */
    indexLabel: string;
    /**
     * Las 6 capacidades técnicas globales — conservadas en el diccionario.
     * En MethodSection.astro se usan las stepCapabilities por paso.
     */
    capabilities: string[];
    /**
     * Label de la sub-sección capabilities del panel derecho.
     * EN "CAPABILITIES" / ES "CAPACIDADES"
     */
    capabilitiesLabel: string;
    /**
     * Label de la sub-sección whatChanges del panel derecho.
     * EN "WHAT CHANGES" / ES "QUÉ CAMBIA"
     */
    whatChangesLabel: string;
    /** Los 4 pasos del método. title y body son por idioma; num es igual en ambos. */
    steps: MethodStep[];
  };
  /** Sección 4 — CTA / Contacto */
  contact: ContactTranslations;
  /** Footer — cierre editorial de marca */
  footer: FooterTranslations;
}

export const en: Translations = {
  /* ── SEO / metadata ─────────────────────────────────────── */
  meta: {
    title: "SCUART — Bilingual Design & Tech Studio",
    description:
      "A bilingual studio building premium websites, platforms and digital systems for ambitious businesses across the US and LATAM.",
    ogTitle: "SCUART — Bilingual Design & Tech Studio",
    ogDescription:
      "Premium web design and digital systems for businesses in the US and LATAM.",
  },

  /* ── Nav ──────────────────────────────────────────────────
   * Labels alineados a investigación de navs de agencias de élite 2026
   * (Work/Studio/Services es el patrón dominante; "Method" descartado —
   * 0/10 agencias top lo usan). Las KEYS no cambian (las usan Nav.astro y
   * Footer); solo el texto visible. Los hrefs siguen apuntando a secciones reales.
   *   portfolio → "Work"     (ancla #portfolio — sección real)
   *   method    → "Services" (ancla #method — describe los servicios)
   *   contact   → "Contact"  (ancla #contact — sección real)
   */
  nav: {
    portfolio: "Work",
    method: "Services",
    contact: "Contact",
    langLabel: "ES",
    langHref: "/es",
  },

  /* ── Hero — B1 "Arquitecto" (aprobado 2026-06-14) ─────────── */
  hero: {
    /** Kicker: índice editorial arriba-izquierda, Geist 500 uppercase */
    kicker: "SCUART — DESIGN + TECHNOLOGY STUDIO",

    /**
     * line1: "Design you notice."
     * "notice" en Fraunces 400 itálica verde — el gesto de marca.
     * Copy elegido por William (ART_DIRECTION.md §6 sección 1).
     */
    line1: [
      { word: "Design", isRed: false },
      { word: "you", isRed: false },
      { word: "notice.", isRed: false, isItalicAccent: true },
    ],

    /**
     * line2: "Technology that works."
     * "works" en Fraunces 400 itálica verde — firma del estudio.
     */
    line2: [
      { word: "Technology", isRed: false },
      { word: "that", isRed: false },
      { word: "works.", isRed: false, isItalicAccent: true },
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

    ariaLabel: "Design you notice. Technology that works.",
    subhead:
      "A studio building premium websites, platforms and digital systems for ambitious businesses across the US and LATAM.",
    cta: "START A PROJECT",

    /* Campo conservado para compatibilidad — no se renderiza en el hero */
    index: "SCUART / DESIGN + TECHNOLOGY STUDIO · BOGOTÁ · 2026",
  },

  /* ── Meta columna derecha (campo conservado, no renderizado en hero) ── */
  meta_col: {
    number: "N°·01",
    label: "STATEMENT",
    coords: "GASTRO · WEB",
    type: "DIGITAL DESIGN",
  },

  /* ── Manifesto — Sección 1.5 (entre hero y portfolio) ───── */
  /*
   * Copy aprobado por William. NO modificar.
   * Presupuesto rojo: 1 instancia (line2red). Coherente con el sistema.
   * Kicker: MANIFESTO en ambos idiomas — coherencia del sistema técnico.
   */
  manifesto: {
    kicker: "N°·01 / MANIFESTO",
    line1: "We don't build websites.",
    line2a: "We build ",
    line2red: "competitive advantages.",
    ariaLabel:
      "Manifesto — We don't build websites. We build competitive advantages.",
  },

  /* ── Studio — Sección fusionada (capabilities + method) ── */
  studio: {
    kicker: "STUDIO",
    whatWeDoLabel: "WHAT WE DO",
    howWeWorkLabel: "HOW WE WORK",
    aboutStatement:
      "We make your brand feel unforgettable, with websites that earn trust, not just attention — designed with intent, not trend.",
  },

  /* ── Capabilities — datos conservados (reutilizados por StudioSection) ──
     NOTA: tras el rediseño "About" (2026-06-24), las 3 `statement` se fusionaron
     en `studio.aboutStatement`. Acá `statement` quedó SIN USO (deuda documentada).
     `name` SÍ se sigue usando: alimenta el marquee divisor. No borrar items. */
  capabilities: {
    kicker: "CAPABILITIES",
    ariaLabel:
      "Capabilities — what SCUART builds and what problems each one solves.",
    items: [
      {
        num: "01",
        name: "DESIGN+BRAND",
        statement: "We make your brand feel unforgettable.",
        resolves: "",
      },
      {
        num: "02",
        name: "WEB/PRODUCT",
        statement: "Websites that earn trust, not just attention.",
        resolves: "",
      },
      {
        num: "03",
        name: "METHOD",
        statement: "Design with intent, not trend.",
        resolves: "",
      },
    ],
  },

  /* ── Portfolio — Sección 2 ──────────────────────────────── */
  /*
   * C1/P4 — ANTI-INVENCIÓN:
   * Los nombres de proyecto son reales y definitivos.
   * Las categorías y años son PLACEHOLDER marcados — William los completa.
   * NO se inventó: stack, resultados, descripción, tipo de proyecto, fecha.
   */
  portfolio: {
    sectionLabel: "SELECTED WORK",
    /**
     * NOTA DE IMPLEMENTACIÓN:
     * Las páginas de caso individuales NO existen todavía (hito futuro).
     * El enlace "VIEW CASE ↓" se renderiza como elemento visual pero
     * no navega a ningún lado. Ver PortfolioSection.astro para el manejo JS.
     */
    viewCase: "VIEW CASE ↓",
    projects: [
      {
        name: "Jamón Casero",
        num: "001",
        category: "WEB · GASTRO BRAND",
        year: "2017",
        image: "/images/portfolio-jamon-casero-trim.webp",
        alt: "JAMÓN CASERO — proyecto SCUART",
        href: "/en/work/jamon-casero",
      },
      {
        name: "Menius",
        num: "002",
        category: "SAAS · OWN PRODUCT",
        year: "2025",
        image: "/images/portfolio-menius-real-trim.webp",
        alt: "MENIUS — proyecto SCUART",
        href: "/en/work/menius",
      },
      {
        name: "Healthy Choice",
        num: "003",
        category: "WEB · RESTAURANT",
        year: "2019",
        image: "/images/portfolio-healthy-choice-real-trim.webp",
        alt: "HEALTHY CHOICE NY — proyecto SCUART",
        href: "/en/work/healthy-choice",
      },
      {
        name: "Arriba Gold",
        num: "004",
        category: "E-COMMERCE",
        year: "2021",
        image: "/images/portfolio-arriba-gold-real-trim.webp",
        alt: "ARRIBA GOLD — proyecto SCUART",
        href: "/en/work/arriba-gold",
      },
    ],
  },

  /* ── Method — Sección 3 ─────────────────────────────────── */
  /*
   * C1/P4 — ANTI-INVENCIÓN:
   * Los párrafos ES son textual de William. Los EN son copy nativo profesional
   * que expresan el mismo sentido — no traducción literal.
   * Capacidades técnicas: iguales en ambos idiomas (términos técnicos).
   */
  method: {
    kicker: "METHOD",
    indexLabel: "WE WORK WITH:",
    capabilities: [
      "WEB PLATFORMS",
      "SAAS + SYSTEMS",
      "AI AUTOMATION",
      "E-COMMERCE",
      "WORKFLOWS",
      "BRAND IDENTITY",
    ],
    capabilitiesLabel: "CAPABILITIES",
    whatChangesLabel: "WHAT CHANGES",
    steps: [
      {
        num: "001",
        title: "DISCOVER",
        body: "We understand the business, the customer, the market — and what's holding back trust, conversion or operations.",
        stepCapabilities: ["RESEARCH", "POSITIONING", "BRAND IDENTITY"],
        whatChanges:
          "The business gets clarity on what actually needs to change.",
      },
      {
        num: "002",
        title: "DIRECTION",
        body: "We define positioning, copy, visual direction, bilingual EN/ES structure and the editorial system before designing.",
        stepCapabilities: ["BRAND IDENTITY", "COPY", "UX"],
        whatChanges: "Every decision after this points the same way.",
      },
      {
        num: "003",
        title: "SYSTEM",
        body: "We build the right solution: web platform, SaaS, AI automation, e-commerce, ordering, booking, workflows — or a high-performance website.",
        stepCapabilities: [
          "WEB PLATFORMS",
          "SAAS + SYSTEMS",
          "AI AUTOMATION",
          "E-COMMERCE",
          "WORKFLOWS",
        ],
        whatChanges:
          "The business gets something that works, not just something that looks good.",
      },
      {
        num: "004",
        title: "LAUNCH",
        body: "We test responsive, performance, SEO, accessibility, tracking and conversion before going live.",
        stepCapabilities: ["PERFORMANCE", "SEO", "QA"],
        whatChanges: "It goes live ready to perform, not just to exist.",
      },
    ],
  },

  /* ── Footer — cierre editorial de marca ─────────────────── */
  /*
   * C1/P4 — ANTI-INVENCIÓN:
   * Email: hello@scuart.com — extraído del contacto (emailHref).
   * WhatsApp: placeholder wa.me/[WHATSAPP_NUMBER] — igual que el contacto.
   * Mercados: US · LATAM — de la identidad del estudio (hero index).
   * Bogotá: ciudad del estudio (de project_scuart.md). Sin dirección exacta.
   * Año: 2026 — año actual.
   */

  /* ── Contact — Sección 4 ────────────────────────────────── */
  contact: {
    kicker: "START A PROJECT",
    statement: "LET'S\nBUILD\nSOMETHING.",
    subcopy: "Tell us about the project. We'll respond within 24 hours.",
    labelName: "Name",
    labelBusiness: "Business or brand",
    labelEmail: "Email",
    labelCountry: "Country / Market",
    labelWhatDoYouNeed: "What do you need?",
    labelBudget: "Budget range",
    labelTimeline: "Timeline",
    labelMessage: "Message",
    placeholderName: "Your name",
    placeholderBusiness: "Company or brand name",
    placeholderEmail: "you@example.com",
    placeholderCountry: "US, Mexico, Argentina…",
    placeholderMessage:
      "Brief description of the project — the more context, the better.",
    needOptions: [
      { value: "", label: "Select one" },
      { value: "website", label: "Website" },
      { value: "saas", label: "SaaS / Web platform" },
      { value: "ecommerce", label: "E-commerce" },
      { value: "ordering", label: "Ordering / Booking system" },
      { value: "automation", label: "AI / Automation" },
      { value: "branding", label: "Branding + Web" },
      { value: "other", label: "Other / Not sure yet" },
    ],
    budgetOptions: [
      { value: "", label: "Select range" },
      { value: "under5k", label: "< $5,000" },
      { value: "5k-15k", label: "$5,000 – $15,000" },
      { value: "15k-50k", label: "$15,000 – $50,000" },
      { value: "over50k", label: "$50,000+" },
      { value: "notsure", label: "Not sure" },
    ],
    timelineOptions: [
      { value: "", label: "Select timeline" },
      { value: "asap", label: "ASAP" },
      { value: "1-3mo", label: "1 – 3 months" },
      { value: "3-6mo", label: "3 – 6 months" },
      { value: "flexible", label: "Flexible" },
    ],
    submitLabel: "SEND PROJECT BRIEF →",
    submitLoadingLabel: "SENDING…",
    successHeading: "Brief received.",
    successBody: "We'll review it and get back to you within 24 hours.",
    errorMessage: "Something went wrong. Try again or write us directly.",
    alternativeLabel: "Prefer a quick message?",
    whatsappLabel: "WhatsApp",
    /* PLACEHOLDER — William reemplaza con su número real en formato internacional */
    whatsappHref: "https://wa.me/[WHATSAPP_NUMBER]",
    emailLabel: "Email",
    emailHref: "mailto:hello@scuart.com",
  },

  /* ── Footer — cierre de marca ───────────────────────────── */
  footer: {
    navLabel: "NAVIGATION",
    langSwitchLabel: "LANGUAGE",
    markets: "Bogotá · US · LATAM",
    builtBy: "© 2026 SCUART",
    tagline: "We don't decorate. We decide.",
    ariaLabel: "SCUART — Studio footer",
    legal: {
      privacyLabel: "Privacy",
      privacyHref: "/en/privacy",
      termsLabel: "Terms",
      termsHref: "/en/terms",
    },
  },
};
