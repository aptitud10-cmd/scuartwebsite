import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://scuart.com',

  /*
   * Redirect HTTP real de / → /en.
   * Con el adaptador Vercel, Astro emite esto como una route de redirect
   * en .vercel/output/config.json (status 308) — NO como meta-refresh.
   * Reemplaza el src/pages/index.astro que generaba el meta-refresh con delay.
   */
  redirects: {
    '/': '/en',
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es',
        },
      },
    }),
  ],
  /*
   * output: 'static' — páginas prerendered por defecto (comportamiento anterior preservado).
   * En Astro 5.x, 'hybrid' fue eliminado: 'static' es ahora el modo híbrido.
   * Los endpoints que declaran `export const prerender = false` optan por SSR.
   * Esto mantiene hero/portfolio/método 100% prerendered sin tocarlos.
   * El adaptador Vercel convierte el endpoint /api/geo-check en una Serverless Function.
   */
  output: 'static',
  adapter: vercel(),

  /*
   * trailingSlash: 'never' — alinea canonical + hreflang (emitidos SIN slash por
   * getAlternatesFor) con el sitemap (@astrojs/sitemap emitía CON slash por
   * default). Sin esto, Google veía /work/menius y /work/menius/ como distintas.
   * Fijado en auditoría pre-launch 2026-07-28.
   */
  trailingSlash: 'never',

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

  /* Sin plugins de Vite: Tailwind se quitó en la auditoría 2026-08-12 (el sitio
     no usaba ni una clase utility — todo el markup es BEM propio). */
});
