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
};
