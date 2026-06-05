/**
 * es.ts — Diccionario de copy ES (Español)
 * Copy nativo neutro LATAM, sin voseo. SCUART bilingue USA + LATAM.
 * Hero copy aprobado por William (sesion 2026-06-05).
 */

import type { Translations } from './en';

export const es: Translations = {
  /* ── SEO / metadata ─────────────────────────────────────── */
  meta: {
    title: 'SCUART — Estudio de Diseño Bilingüe',
    description:
      'No hacemos webs lindas. Hacemos que tu negocio se vea tan bien como sabe tu comida. Diseño con criterio, no plantillas.',
    ogTitle: 'SCUART — Estudio de Diseño Bilingüe',
    ogDescription:
      'Diseño web premium para restaurantes, marcas de comida y negocios locales. MX · AR · US.',
  },

  /* ── Nav ────────────────────────────────────────────────── */
  nav: {
    portfolio: 'PORTFOLIO',
    method: 'MÉTODO',
    contact: 'CONTACTO',
    langLabel: 'EN',
    langHref: '/en',
  },

  /* ── Hero ────────────────────────────────────────────────── */
  hero: {
    /**
     * line1: "TU COMIDA TIENE CARÁCTER." — solo "CARÁCTER." es roja.
     * El punto va pegado al token. Á (U+00C1) presente en el woff2.
     */
    line1: [
      { word: 'TU', isRed: false },
      { word: 'COMIDA', isRed: false },
      { word: 'TIENE', isRed: false },
      { word: 'CARÁCTER.', isRed: true },
    ],
    /** line2: "TU WEB TAMBIÉN DEBERÍA." — sin rojo */
    line2: [
      { word: 'TU', isRed: false },
      { word: 'WEB', isRed: false },
      { word: 'TAMBIÉN', isRed: false },
      { word: 'DEBERÍA.', isRed: false },
    ],
    ariaLabel: 'Tu comida tiene carácter. Tu web también debería.',
    subhead:
      'No hacemos webs lindas. Hacemos que tu negocio se vea tan bien como sabe tu comida. Diseño con criterio, no plantillas.',
    index: 'SCUART / ESTUDIO DE DISEÑO · MX·AR·US · 2026',
  },

  /* ── Meta columna derecha (solo desktop, aria-hidden) ────── */
  meta_col: {
    number: 'N°·01',
    label: 'DECLARACIÓN',
    coords: 'GASTRO · WEB',
    type: 'DISEÑO DIGITAL',
  },
};
