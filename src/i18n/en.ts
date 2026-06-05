/**
 * en.ts — Diccionario de copy EN (English)
 * Copy nativo, NO traduccion literal. SCUART bilingue USA + LATAM.
 * Hero copy aprobado por William (sesion 2026-06-05).
 *
 * NOTA de tipos: se usa una interfaz explícita (no "typeof en" con as const)
 * para que es.ts pueda implementar la misma forma sin colision de literales.
 */

export interface HeroToken {
  word: string;
  isRed: boolean;
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
    line1: HeroToken[];
    line2: HeroToken[];
    ariaLabel: string;
    subhead: string;
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
    title: 'SCUART — Bilingual Design Studio',
    description:
      "We don't make pretty websites. We make your business look as good as it tastes. Design with intent, not templates.",
    ogTitle: 'SCUART — Bilingual Design Studio',
    ogDescription:
      'Premium web design for restaurants, food brands, and local businesses. US · LATAM.',
  },

  /* ── Nav ────────────────────────────────────────────────── */
  nav: {
    portfolio: 'PORTFOLIO',
    method: 'METHOD',
    contact: 'CONTACT',
    langLabel: 'ES',
    langHref: '/es',
  },

  /* ── Hero ────────────────────────────────────────────────── */
  hero: {
    /**
     * line1: "YOUR FOOD HAS CHARACTER." — solo "CHARACTER." es roja.
     * El punto va pegado al token.
     */
    line1: [
      { word: 'YOUR', isRed: false },
      { word: 'FOOD', isRed: false },
      { word: 'HAS', isRed: false },
      { word: 'CHARACTER.', isRed: true },
    ],
    /** line2: ninguna palabra roja */
    line2: [
      { word: 'YOUR', isRed: false },
      { word: 'WEBSITE', isRed: false },
      { word: 'SHOULD', isRed: false },
      { word: 'TOO.', isRed: false },
    ],
    ariaLabel: 'Your food has character. Your website should too.',
    subhead:
      "We don't make pretty websites. We make your business look as good as it tastes. Design with intent, not templates.",
    index: 'SCUART / DESIGN STUDIO · US·LATAM · 2026',
  },

  /* ── Meta columna derecha (solo desktop, aria-hidden) ────── */
  meta_col: {
    number: 'N°·01',
    label: 'STATEMENT',
    coords: 'GASTRO · WEB',
    type: 'DIGITAL DESIGN',
  },
};
