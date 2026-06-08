/**
 * es.ts — Diccionario de copy ES (Español)
 * Copy nativo neutro LATAM, sin voseo. SCUART bilingue USA + LATAM.
 * Hero copy: Concepto B "Diseño + Tecnología como sistema" (aprobado 2026-06-07).
 */

import type { Translations } from './en';

export const es: Translations = {
  /* ── SEO / metadata ─────────────────────────────────────── */
  meta: {
    title: 'SCUART — Estudio Bilingüe de Diseño y Tecnología',
    description:
      'Estudio bilingüe que construye webs premium, plataformas y sistemas digitales para negocios ambiciosos en USA y LATAM.',
    ogTitle: 'SCUART — Estudio Bilingüe de Diseño y Tecnología',
    ogDescription:
      'Diseño web premium y sistemas digitales para negocios en USA y LATAM.',
  },

  /* ── Nav ────────────────────────────────────────────────── */
  nav: {
    portfolio: 'PORTFOLIO',
    method: 'MÉTODO',
    contact: 'CONTACTO',
    langLabel: 'EN',
    langHref: '/en',
  },

  /* ── Hero — Concepto B ──────────────────────────────────── */
  hero: {
    /** Kicker: linea editorial arriba-izquierda, mono uppercase */
    kicker: 'SCUART — ESTUDIO DE DISEÑO Y TECNOLOGÍA',

    /**
     * line1: "DISEÑO [+] TECNOLOGÍA"
     * El "+" es el UNICO elemento rojo del headline.
     * Mismo peso/tamaño/baseline que las palabras — signo tipografico, no icono.
     */
    line1: [
      { word: 'DISEÑO', isRed: false },
      { word: '+', isRed: true },
      { word: 'TECNOLOGÍA', isRed: false },
    ],

    /** line2: "PARA NEGOCIOS QUE NECESITAN" */
    line2: [
      { word: 'PARA', isRed: false },
      { word: 'NEGOCIOS', isRed: false },
      { word: 'QUE', isRed: false },
      { word: 'NECESITAN', isRed: false },
    ],

    /** line3: "VERSE MEJOR Y FUNCIONAR MEJOR." */
    line3: [
      { word: 'VERSE', isRed: false },
      { word: 'MEJOR', isRed: false },
      { word: 'Y', isRed: false },
      { word: 'FUNCIONAR', isRed: false },
      { word: 'MEJOR.', isRed: false },
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
      'Diseño y Tecnología para negocios que necesitan verse mejor y funcionar mejor.',
    subhead:
      'Estudio que construye webs premium, plataformas y sistemas digitales para negocios ambiciosos en USA y LATAM.',
    cta: 'EMPEZAR UN PROYECTO',

    /* Campo conservado para compatibilidad — no se renderiza en el hero */
    index: 'SCUART / ESTUDIO DE DISEÑO Y TECNOLOGÍA · MX·AR·US · 2026',
  },

  /* ── Meta columna derecha (campo conservado, no renderizado en hero) ── */
  meta_col: {
    number: 'N°·01',
    label: 'DECLARACIÓN',
    coords: 'GASTRO · WEB',
    type: 'DISEÑO DIGITAL',
  },

  /* ── Portfolio — Sección 2 ──────────────────────────────── */
  /*
   * C1/P4 — ANTI-INVENCIÓN:
   * Nombres de proyecto: reales, iguales en ambos idiomas (nombres propios).
   * Categorías y años: PLACEHOLDER marcados — William los completa.
   * sectionLabel y viewCase: traducidos al español.
   */
  portfolio: {
    sectionLabel: 'TRABAJO SELECCIONADO',
    /**
     * NOTA DE IMPLEMENTACIÓN:
     * Las páginas de caso individuales NO existen todavía (hito futuro).
     * El enlace "VER CASO ↓" se renderiza como elemento visual pero
     * no navega a ningún lado. Ver PortfolioSection.astro para el manejo JS.
     */
    viewCase: 'VER CASO ↓',
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
   * Los párrafos ES son TEXTUAL de William — no se modificó ninguna palabra.
   * Capacidades técnicas: iguales en ambos idiomas (términos técnicos).
   */
  method: {
    kicker: 'MÉTODO',
    indexLabel: 'TRABAJAMOS CON:',
    capabilities: [
      'WEB PLATFORMS',
      'SAAS + SYSTEMS',
      'AI AUTOMATION',
      'E-COMMERCE',
      'WORKFLOWS',
      'BRAND IDENTITY',
    ],
    capabilitiesLabel: 'CAPACIDADES',
    whatChangesLabel: 'QUÉ CAMBIA',
    steps: [
      {
        num: '001',
        title: 'DIAGNÓSTICO',
        body: 'Entendemos el negocio, el mercado, el cliente, el problema actual y la oportunidad digital. No empezamos por estética; empezamos por lo que debe cambiar en percepción, confianza y conversión.',
        stepCapabilities: ['RESEARCH', 'POSITIONING', 'BRAND IDENTITY'],
        whatChanges: 'El negocio gana claridad sobre lo que realmente debe cambiar.',
      },
      {
        num: '002',
        title: 'DIRECCIÓN',
        body: 'Definimos posicionamiento, copy, dirección visual, estructura bilingüe EN/ES y sistema editorial antes de diseñar o construir. La web no nace de una plantilla; nace de una decisión.',
        stepCapabilities: ['BRAND IDENTITY', 'COPY', 'UX'],
        whatChanges: 'Cada decisión a partir de acá apunta al mismo lugar.',
      },
      {
        num: '003',
        title: 'SISTEMA',
        body: 'Diseñamos y construimos la solución correcta: web platforms, SaaS, AI automation, e-commerce, ordering / booking / workflows, o una web de alto rendimiento si eso es lo que el negocio necesita. Aquí se demuestra la parte de tecnología.',
        stepCapabilities: ['WEB PLATFORMS', 'SAAS + SYSTEMS', 'AI AUTOMATION', 'E-COMMERCE', 'WORKFLOWS'],
        whatChanges: 'El negocio obtiene algo que funciona, no solo algo que se ve bien.',
      },
      {
        num: '004',
        title: 'LANZAMIENTO',
        body: 'Probamos responsive, performance, SEO, accesibilidad, tracking, conversion paths y detalles finales antes de publicar. Lanzamos algo que se ve premium y funciona en producción.',
        stepCapabilities: ['PERFORMANCE', 'SEO', 'QA'],
        whatChanges: 'Sale en vivo listo para rendir, no solo para existir.',
      },
    ],
  },
};
