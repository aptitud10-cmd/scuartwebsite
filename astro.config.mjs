import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  output: 'static',

  /**
   * i18n nativo Astro v5.
   * defaultLocale: 'en' — el idioma base es ingles.
   * prefixDefaultLocale: true — fuerza el prefijo /en en la URL del idioma default.
   * Resultado: /en (principal) y /es (español). La raiz / se maneja via redirect.
   * hreflang y canonicals se declaran manualmente en Layout.astro.
   */
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
