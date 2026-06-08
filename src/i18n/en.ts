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
}

export interface CapabilityItem {
  num: string;
  label: string;
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
}

export const en: Translations = {
  /* ── SEO / metadata ─────────────────────────────────────── */
  meta: {
    title: 'SCUART — Bilingual Design & Tech Studio',
    description:
      'A bilingual studio building premium websites, platforms and digital systems for ambitious businesses across the US and LATAM.',
    ogTitle: 'SCUART — Bilingual Design & Tech Studio',
    ogDescription:
      'Premium web design and digital systems for businesses in the US and LATAM.',
  },

  /* ── Nav ────────────────────────────────────────────────── */
  nav: {
    portfolio: 'PORTFOLIO',
    method: 'METHOD',
    contact: 'CONTACT',
    langLabel: 'ES',
    langHref: '/es',
  },

  /* ── Hero — Concepto B ──────────────────────────────────── */
  hero: {
    /** Kicker: linea editorial arriba-izquierda, mono uppercase */
    kicker: 'SCUART — DESIGN & TECHNOLOGY STUDIO',

    /**
     * line1: "DESIGN [+] TECHNOLOGY"
     * El "+" es el UNICO elemento rojo del headline.
     * Mismo peso/tamaño/baseline que las palabras — signo tipografico, no icono.
     */
    line1: [
      { word: 'DESIGN', isRed: false },
      { word: '+', isRed: true },
      { word: 'TECHNOLOGY', isRed: false },
    ],

    /** line2: "FOR BUSINESSES THAT NEED TO" */
    line2: [
      { word: 'FOR', isRed: false },
      { word: 'BUSINESSES', isRed: false },
      { word: 'THAT', isRed: false },
      { word: 'NEED', isRed: false },
      { word: 'TO', isRed: false },
    ],

    /** line3: "LOOK SHARP AND WORK BETTER." */
    line3: [
      { word: 'LOOK', isRed: false },
      { word: 'SHARP', isRed: false },
      { word: 'AND', isRed: false },
      { word: 'WORK', isRed: false },
      { word: 'BETTER.', isRed: false },
    ],

    /**
     * Indice de capacidades: col 9-12 desktop, lista mono debajo en mobile.
     * Terminos tecnicos se mantienen en ingles en ambos idiomas (como PORTFOLIO).
     */
    capabilities: [
      { num: '001', label: 'WEB PLATFORMS' },
      { num: '002', label: 'SAAS + SYSTEMS' },
      { num: '003', label: 'AI AUTOMATION' },
      { num: '004', label: 'ORDERING · BOOKING · WORKFLOWS' },
    ],

    ariaLabel:
      'Design and Technology for businesses that need to look sharp and work better.',
    subhead:
      'A studio building premium websites, platforms and digital systems for ambitious businesses across the US and LATAM.',
    cta: 'START A PROJECT',

    /* Campo conservado para compatibilidad — no se renderiza en el hero */
    index: 'SCUART / DESIGN & TECH STUDIO · US·LATAM · 2026',
  },

  /* ── Meta columna derecha (campo conservado, no renderizado en hero) ── */
  meta_col: {
    number: 'N°·01',
    label: 'STATEMENT',
    coords: 'GASTRO · WEB',
    type: 'DIGITAL DESIGN',
  },

  /* ── Portfolio — Sección 2 ──────────────────────────────── */
  /*
   * C1/P4 — ANTI-INVENCIÓN:
   * Los nombres de proyecto son reales y definitivos.
   * Las categorías y años son PLACEHOLDER marcados — William los completa.
   * NO se inventó: stack, resultados, descripción, tipo de proyecto, fecha.
   */
  portfolio: {
    sectionLabel: 'SELECTED WORK',
    /**
     * NOTA DE IMPLEMENTACIÓN:
     * Las páginas de caso individuales NO existen todavía (hito futuro).
     * El enlace "VIEW CASE ↓" se renderiza como elemento visual pero
     * no navega a ningún lado. Ver PortfolioSection.astro para el manejo JS.
     */
    viewCase: 'VIEW CASE ↓',
    projects: [
      {
        name: 'JAMÓN CASERO',
        num: '001',
        category: '[CATEGORÍA — PENDIENTE]',
        year: '[AÑO — PENDIENTE]',
        image: '/images/portfolio-jamon-casero.webp',
        alt: 'JAMÓN CASERO — proyecto SCUART',
      },
      {
        name: 'MENIUS',
        num: '002',
        category: '[CATEGORÍA — PENDIENTE]',
        year: '[AÑO — PENDIENTE]',
        image: '/images/portfolio-menius-real.webp',
        alt: 'MENIUS — proyecto SCUART',
      },
      {
        name: 'HEALTHY CHOICE NY',
        num: '003',
        category: '[CATEGORÍA — PENDIENTE]',
        year: '[AÑO — PENDIENTE]',
        image: '/images/portfolio-healthy-choice-real.webp',
        alt: 'HEALTHY CHOICE NY — proyecto SCUART',
      },
      {
        name: 'ARRIBA GOLD',
        num: '004',
        category: '[CATEGORÍA — PENDIENTE]',
        year: '[AÑO — PENDIENTE]',
        image: '/images/portfolio-arriba-gold-real.webp',
        alt: 'ARRIBA GOLD — proyecto SCUART',
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
    kicker: 'METHOD',
    indexLabel: 'WE WORK WITH:',
    capabilities: [
      'WEB PLATFORMS',
      'SAAS + SYSTEMS',
      'AI AUTOMATION',
      'E-COMMERCE',
      'WORKFLOWS',
      'BRAND IDENTITY',
    ],
    capabilitiesLabel: 'CAPABILITIES',
    whatChangesLabel: 'WHAT CHANGES',
    steps: [
      {
        num: '001',
        title: 'DISCOVER',
        body: 'We start with the business — the market, the customer, the real problem, the digital opportunity. Not aesthetics first. We start with what has to change in perception, trust and conversion.',
        stepCapabilities: ['RESEARCH', 'POSITIONING', 'BRAND IDENTITY'],
        whatChanges: 'The business gets clarity on what actually needs to change.',
      },
      {
        num: '002',
        title: 'DIRECTION',
        body: 'We define positioning, copy, visual direction, bilingual EN/ES structure and the editorial system before designing or building. The website doesn\'t come from a template. It comes from a decision.',
        stepCapabilities: ['BRAND IDENTITY', 'COPY', 'UX'],
        whatChanges: 'Every decision after this points the same way.',
      },
      {
        num: '003',
        title: 'SYSTEM',
        body: 'We design and build the right solution: web platforms, SaaS, AI automation, e-commerce, ordering / booking / workflows, or a high-performance website if that\'s what the business actually needs. This is where the technology side of the work gets demonstrated.',
        stepCapabilities: ['WEB PLATFORMS', 'SAAS + SYSTEMS', 'AI AUTOMATION', 'E-COMMERCE', 'WORKFLOWS'],
        whatChanges: 'The business gets something that works, not just something that looks good.',
      },
      {
        num: '004',
        title: 'LAUNCH',
        body: 'We test responsive, performance, SEO, accessibility, tracking, conversion paths and final details before publishing. We launch something that looks premium and works in production.',
        stepCapabilities: ['PERFORMANCE', 'SEO', 'QA'],
        whatChanges: 'It goes live ready to perform, not just to exist.',
      },
    ],
  },
};
