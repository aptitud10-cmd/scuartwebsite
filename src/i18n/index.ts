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
 * x-default: a donde va un visitante cuyo idioma Google no puede resolver.
 *
 * ES, no EN (2026-08-18). Apuntaba a /en, lo que mandaba a ingles a todo
 * visitante ambiguo — incluidos Mexico, Colombia y el resto de LATAM, que son
 * tres de los cuatro mercados del sitio, y el publico hispano de EE.UU. que es
 * el cliente objetivo real (53% de los adultos hispanos en EE.UU. buscan sitios
 * con opcion en espanol al comprar — ThinkNow, marzo 2025).
 *
 * El ingles sigue sirviendose por hreflang="en" a quien lo tenga configurado;
 * lo que cambia es solo el caso ambiguo, que ahora cae del lado mayoritario.
 */
const X_DEFAULT_LANG: Lang = "es";

/**
 * Devuelve las URLs canonicas para hreflang dado el path base.
 * Para las paginas de index ('/en', '/es') el path seria ''.
 */
export function getAlternates(basePath: string = "") {
  return {
    en: `${SITE_URL}/en${basePath}`,
    es: `${SITE_URL}/es${basePath}`,
    xDefault: `${SITE_URL}/${X_DEFAULT_LANG}${basePath}`,
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
  const en_ = `${SITE_URL}/en/${clean(enPath)}`;
  const es_ = `${SITE_URL}/es/${clean(esPath)}`;
  return {
    en: en_,
    es: es_,
    /* Ver la nota de X_DEFAULT_LANG arriba: el caso ambiguo cae en espanol. */
    xDefault: X_DEFAULT_LANG === "es" ? es_ : en_,
  };
}
