import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [react()],
  /*
   * output: 'static' — páginas prerendered por defecto (comportamiento anterior preservado).
   * En Astro 5.x, 'hybrid' fue eliminado: 'static' es ahora el modo híbrido.
   * Los endpoints que declaran `export const prerender = false` optan por SSR.
   * Esto mantiene hero/portfolio/método 100% prerendered sin tocarlos.
   * El adaptador Vercel convierte el endpoint /api/contact en una Serverless Function.
   */
  output: 'static',
  adapter: vercel(),

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
