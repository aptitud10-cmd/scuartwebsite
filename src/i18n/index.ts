/**
 * i18n/index.ts — Helpers de internacionalizacion
 * Uso simple: importar el diccionario segun lang.
 * No hay magia — solo un switch limpio (P6: solucion minima).
 */

import { en } from "./en";
import { es } from "./es";

export type Lang = "en" | "es";

export const SITE_URL = "https://scuart.com";

export const locales: Lang[] = ["en", "es"];
export const defaultLang: Lang = "en";

export function getTranslations(lang: Lang) {
  return lang === "es" ? es : en;
}

/**
 * Devuelve las URLs canonicas para hreflang dado el path base.
 * Para las paginas de index ('/en', '/es') el path seria ''.
 */
export function getAlternates(basePath: string = "") {
  return {
    en: `${SITE_URL}/en${basePath}`,
    es: `${SITE_URL}/es${basePath}`,
    xDefault: `${SITE_URL}/en${basePath}`,
  };
}

/**
 * Igual que getAlternates, pero para paginas cuyo slug cambia entre idiomas
 * ('/en/work/menius' vs '/es/trabajo/menius', '/en/terms' vs '/es/terminos').
 * getAlternates asume el mismo path en ambos idiomas, asi que no sirve para
 * declarar el hreflang de esas paginas.
 *
 * Los paths van sin el prefijo de idioma: 'work/menius', no '/en/work/menius'.
 */
export function getAlternatesFor(enPath: string, esPath: string) {
  const clean = (p: string) => p.replace(/^\/+/, "");
  return {
    en: `${SITE_URL}/en/${clean(enPath)}`,
    es: `${SITE_URL}/es/${clean(esPath)}`,
    xDefault: `${SITE_URL}/en/${clean(enPath)}`,
  };
}
