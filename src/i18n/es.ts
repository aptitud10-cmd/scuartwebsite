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
};
