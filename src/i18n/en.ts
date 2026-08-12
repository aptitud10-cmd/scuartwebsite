/**
 * en.ts — Diccionario de copy EN (English)
 * Copy nativo, NO traduccion literal. SCUART bilingue USA + LATAM.
 * Hero copy: Concepto B "Design + Technology como sistema" (aprobado 2026-06-07).
 *
 * NOTA de tipos: se usa una interfaz explícita (no "typeof en" con as const)
 * para que es.ts pueda implementar la misma forma sin colision de literales.
 */

/**
 * CapabilityService — un ítem de la sección CAPABILITIES.
 * num: "01"-"06" (2 dígitos, distinto al "001"-"004" del método).
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
  /** Página dedicada del servicio (opcional) — ruta con prefijo de idioma. */
  href?: string;
}

export interface PortfolioProject {
  /** Nombre real del proyecto — NO cambiar */
  name: string;
  /** Número de orden editorial, ej "001" */
  num: string;
  /** Categoría del proyecto — real, confirmada por William (2026-07-22). */
  category: string;
  /** Año del proyecto — real, confirmado por William (2026-07-22). */
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
  /** Statement de cierre grande — serif Light */
  statement: string;
  /** Nota de respuesta — mono uppercase al pie */
  subcopy: string;
  /** Kicker de sección — mono uppercase */
  kicker: string;
  /** CTA mailto — "Empezar un proyecto" (rediseño sobrio 2026-07-17) */
  ctaStart: string;
  /* ── Keys de formulario — NO SE USAN. El sitio es contacto-directo (email +
     WhatsApp), sin formulario (decisión William 2026-07-28: las agencias top-tier
     usan solo email, no forms). Se conservan por si se reactiva el form; el
     endpoint /api/contact sigue en el repo pero no se ejerce desde la UI. ── */
  formName: string;
  formEmail: string;
  formNeed: string;
  /** Opciones del select "qué necesitás" — value + label */
  formNeedOptions: { value: string; label: string }[];
  formMessage: string;
  formSubmit: string;
  formSubmitting: string;
  formSuccess: string;
  formError: string;
  /** Alternativa: email + WhatsApp */
  altLabel: string;
  whatsappLabel: string;
  /** URL wa.me con el número real de SCUART */
  whatsappHref: string;
}

export interface FooterTranslations {
  /** Etiqueta de navegación interna — mono uppercase */
  navLabel: string;
  /** Label selector de idioma — "EN / ES" */
  langSwitchLabel: string;
  /** Mercados del estudio — mono, banda de créditos */
  markets: string;
  /** Línea descriptor del estudio — los HECHOS viven acá, no en el hero (2026-07-17) */
  descriptor: string;
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
    /** Etiqueta del enlace a la página de servicio GEO / AI Visibility */
    geo: string;
    /** Ruta de la página GEO — localizada (/es/servicios/… vs /en/services/…) */
    geoHref: string;
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
  /** Hero — el componente actual solo consume ariaLabel; el copy visible
   *  vive hardcodeado en HeroSection.astro (wordmark). */
  hero: {
    ariaLabel: string;
  };
  /** Sección 1.5 — Manifesto (entre hero y portfolio) */
  manifesto: ManifestoTranslations;
  /** Sección dark — statement con scroll-reveal por palabra (entre portfolio y servicios) */
  statement: {
    /** Kicker mono arriba-izquierda */
    kicker: string;
    /** Statement grande — cada palabra se aclara con el scroll */
    body: string;
    /** Nota inferior izquierda — mono uppercase */
    noteLeft: string;
    /** Nota inferior derecha — cuerpo */
    noteRight: string;
    /** Aria-label de la sección */
    ariaLabel: string;
  };
  /** Kicker de la sección Servicios (los 6 items viven en capabilities) */
  servicesKicker: string;
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
    /** Los 4 proyectos reales. Nombres, categoría y año confirmados por William. */
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
    /* Enlace a la página GEO (auditoría 2026-08-10). Existía, tenía contenido
       propio y estaba en el sitemap, pero solo se llegaba por el ítem 02 de la
       lista de servicios: el servicio diferenciador enterrado a dos clics. */
    geo: "AI Visibility",
    geoHref: "/en/services/ai-visibility",
    langLabel: "ES",
    langHref: "/es",
  },

  /* ── Hero — solo ariaLabel; el copy visible vive en HeroSection.astro ── */
  hero: {
    ariaLabel: "Design you notice. Technology that works.",
  },

  /* ── Manifesto — Sección 1.5 (entre hero y portfolio) ───── */
  /*
   * Copy aprobado por William. NO modificar.
   * Presupuesto rojo: 1 instancia (line2red). Coherente con el sistema.
   * Kicker: MANIFESTO en ambos idiomas — coherencia del sistema técnico.
   */
  manifesto: {
    kicker: "N°·01 / MANIFESTO",
    /* REWRITTEN 2026-08-10 — see the ES file for the full rationale. The old
       line ("We don't build websites. / We build competitive advantages.") was
       contradicted five times by the site itself, including the hero subhead
       right above it, and was the category's founding cliché. Same typographic
       structure (two lines, single accent on the second). */
    line1: "We don't just ship a website.",
    line2a: "We ship the ",
    line2red: "system that makes it work.",
    ariaLabel:
      "Manifesto — We don't just ship a website. We ship the system that makes it work.",
  },

  /* ── Statement dark — scroll-reveal por palabra (portfolio → servicios) ── */
  statement: {
    kicker: "SCUART — STUDIO",
    body: "Design and technology that work together, not apart.",
    noteLeft: "INDEPENDENT STUDIO · BILINGUAL · LATAM + USA",
    noteRight: "One team, start to finish.",
    ariaLabel: "Design and technology that work together, not apart.",
  },

  /* ── Servicios — kicker (los 7 items viven en capabilities.items) ── */
  servicesKicker: "SERVICES",

  /* ── Studio — Sección fusionada (capabilities + method) ── */
  studio: {
    kicker: "STUDIO",
    whatWeDoLabel: "WHAT WE DO",
    howWeWorkLabel: "HOW WE WORK",
    aboutStatement:
      /* Synced 2026-08-11 with StatementSection.astro — see the ES file. */
      "We design the brand and build the system that holds it up.",
  },

  /* ── Servicios — los 6 reales, sincronizados con es.ts (fix auditoría
     2026-07-22: en.ts tenía solo 3 items distintos → la sección Servicios en
     inglés mostraba algo diferente al español). `resolves` en inglés nativo. */
  capabilities: {
    kicker: "SERVICES",
    ariaLabel:
      "Services — what SCUART builds and what problem each one solves.",
    items: [
      {
        num: "01",
        name: "WEB PLATFORMS",
        statement: "",
        resolves:
          "Sites that load fast, rank on search and turn visitors into clients.",
        href: "/en/services/web-platforms",
      },
      {
        num: "02",
        name: "AI VISIBILITY · GEO",
        statement: "",
        resolves:
          "Your clients already ask ChatGPT. We audit what AI says about your business and make it recommend you.",
        href: "/en/services/ai-visibility",
      },
      {
        num: "03",
        name: "SAAS + SYSTEMS",
        statement: "",
        resolves:
          "Full products — login, payments, dashboards, APIs. From zero to production.",
        href: "/en/services/saas-systems",
      },
      {
        num: "04",
        name: "AI AUTOMATION",
        statement: "",
        /* Rewritten 2026-08-11 — see the ES file. The old line failed the
           competitor test; this one names what is actually built in Menius. */
        resolves:
          "A photo of a printed menu becomes a digital catalogue. Assistants that execute, not that chat.",
        href: "/en/services/ai-automation",
      },
      {
        num: "05",
        name: "E-COMMERCE",
        statement: "",
        /* Rewritten 2026-08-11 — names the real argument (no commission) and the
           gateways that are actually integrated. */
        resolves:
          "Your own store, no commission per sale. Stripe, MercadoPago and Wompi already integrated.",
        href: "/en/services/ecommerce",
      },
      {
        num: "06",
        name: "ORDERING · BOOKING · WORKFLOWS",
        statement: "",
        resolves: "Orders, bookings and operations without the manual mess.",
        href: "/en/services/ordering-booking",
      },
      {
        num: "07",
        name: "BRAND IDENTITY",
        statement: "",
        /* Rewritten 2026-08-11 — the old line failed the competitor test. */
        resolves:
          "A logo is not a brand. Type, colour, photography and voice as an applicable system.",
        href: "/en/services/brand-identity",
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
        year: "2025",
        image: "/images/portfolio-jamon-casero-trim.webp",
        alt: "Jamón Casero website — editorial site for an artisanal charcuterie brand by SCUART",
        href: "/en/work/jamon-casero",
      },
      {
        name: "Menius",
        num: "002",
        category: "SAAS · OWN PRODUCT",
        year: "2025",
        image: "/images/portfolio-menius-real-trim.webp",
        alt: "Menius — digital menu and online ordering SaaS for restaurants by SCUART",
        href: "/en/work/menius",
      },
      {
        name: "Etnia Braids",
        num: "003",
        category: "CUSTOM WEB · BOOKINGS",
        year: "2025",
        /* thumbnail real: hero del sitio de Etnia en browser-mockup macOS
           (generado 2026-07-28 con el mismo chrome que Jamón/Menius) */
        image: "/images/portfolio-etnia-braids-trim.webp",
        alt: "Etnia Braids — custom booking website for a braiding salon in New York by SCUART",
        href: "/en/work/etnia-braids",
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
      "AI VISIBILITY",
      "SAAS + SYSTEMS",
      "AI AUTOMATION",
      "E-COMMERCE",
      "WORKFLOWS",
      "BRAND IDENTITY",
    ],
    capabilitiesLabel: "CAPABILITIES",
    whatChangesLabel: "WHAT CHANGES",
    /* Redesign 2026-07-17: action verbs (Wild pattern, 2026 research).
       Services SCOPED to websites — no SaaS/AI/e-commerce list. */
    steps: [
      {
        num: "01",
        title: "We listen.",
        body: "We understand the business, the customer and the market — and what's holding back trust or conversion.",
        stepCapabilities: ["RESEARCH", "POSITIONING", "BRAND IDENTITY"],
        whatChanges:
          "The business gets clarity on what actually needs to change.",
      },
      {
        num: "02",
        title: "We define.",
        body: "Positioning, structure and visual direction, before designing anything. Every decision points the same way.",
        stepCapabilities: ["BRAND IDENTITY", "COPY", "UX"],
        whatChanges: "Every decision after this points the same way.",
      },
      {
        num: "03",
        title: "We build.",
        body: "We design and develop the site. Fast, responsive and search-ready — not just good-looking.",
        stepCapabilities: ["WEB", "PERFORMANCE"],
        whatChanges:
          "The business gets something that works, not just something that looks good.",
      },
      {
        num: "04",
        title: "We launch.",
        body: "We test performance, SEO and accessibility, and ship it ready to work — not just to exist.",
        stepCapabilities: ["PERFORMANCE", "SEO", "QA"],
        whatChanges: "It goes live ready to perform, not just to exist.",
      },
    ],
  },

  /* ── Footer — cierre editorial de marca ─────────────────── */
  /*
   * C1/P4 — ANTI-INVENCIÓN:
   * Email: info@scuart.com — extraído del contacto (emailHref).
   * WhatsApp: placeholder wa.me/[WHATSAPP_NUMBER] — igual que el contacto.
   * Mercados: US · LATAM — de la identidad del estudio (hero index).
   * Base: Queens, New York (decisión 2026-07-28, commit base-NY). El descriptor
   *   afirma la ubicación en texto plano y citable para desambiguación GEO —
   *   la IA describía a SCUART como "agencia de Bogotá" por falta de esta frase.
   * Año: 2026 — año actual.
   */

  /* ── Contact — Sección 4 ────────────────────────────────── */
  contact: {
    kicker: "CONTACT",
    statement: "Tell us what you're building.",
    subcopy: "A conversation, not a quote. We reply within 24 hours.",
    ctaStart: "Start a project",
    formName: "Your name",
    formEmail: "Your email",
    formNeed: "What do you need?",
    formNeedOptions: [
      { value: "", label: "What do you need?" },
      { value: "web", label: "A website" },
      { value: "saas", label: "A platform / SaaS" },
      { value: "ecommerce", label: "An online store" },
      { value: "branding", label: "Brand identity" },
      { value: "otro", label: "Something else / not sure" },
    ],
    formMessage: "Tell us a bit about the project",
    formSubmit: "Send",
    formSubmitting: "Sending…",
    formSuccess: "Got it! We'll get back to you within 24 hours.",
    formError: "Something went wrong. Email us directly at info@scuart.com.",
    altLabel: "Or reach us directly",
    whatsappLabel: "WhatsApp",
    whatsappHref: "https://wa.me/13478489720",
  },

  /* ── Footer — cierre de marca ───────────────────────────── */
  footer: {
    navLabel: "NAVIGATION",
    langSwitchLabel: "LANGUAGE",
    markets: "Bilingual · LATAM + USA",
    descriptor:
      "SCUART is an independent, bilingual web design and development studio based in Queens, New York. We work with businesses across the US and LATAM, in English and Spanish.",
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
