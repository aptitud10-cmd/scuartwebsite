/**
 * i18n/index.ts — Helpers de internacionalizacion
 * Uso simple: importar el diccionario segun lang.
 * No hay magia — solo un switch limpio (P6: solucion minima).
 */

import { en } from './en';
import { es } from './es';

export type Lang = 'en' | 'es';

export const SITE_URL = 'https://scuart.com';

export const locales: Lang[] = ['en', 'es'];
export const defaultLang: Lang = 'en';

export function getTranslations(lang: Lang) {
  return lang === 'es' ? es : en;
}

/**
 * Devuelve las URLs canonicas para hreflang dado el path base.
 * Para las paginas de index ('/en', '/es') el path seria ''.
 */
export function getAlternates(basePath: string = '') {
  return {
    en: `${SITE_URL}/en${basePath}`,
    es: `${SITE_URL}/es${basePath}`,
    xDefault: `${SITE_URL}/en${basePath}`,
  };
}
