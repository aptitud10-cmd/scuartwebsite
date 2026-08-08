/**
 * crop-casos.mjs — recorta las capturas de caso al CONTENIDO real.
 *
 * PROBLEMA (William 2026-08-04): 8 de 13 imágenes tenían ratio 2.0–2.19
 * (capturas de pantalla completa con mucho aire vacío alrededor del contenido).
 * En mobile a 346px de ancho eso daba ~158px de alto y el contenido era ilegible.
 *
 * SOLUCIÓN: recortar cada una a la caja donde vive el contenido, subiendo el
 * ratio a ~1.5-1.7. Mismo ancho en pantalla → contenido notablemente más grande.
 *
 * Los valores son fracciones (0-1) del original, medidos mirando cada imagen.
 * Genera archivos *-tight.webp; NO pisa los originales.
 */
import sharp from 'sharp';
import path from 'path';

const DIR = 'public/images/casos';

/** left, top, width, height como fracción del original */
const CROPS = [
  // ── JAMÓN — capturas del sitio, contenido centrado con bandas oscuras
  { src: 'jamon-hero-crop',  box: [0.00, 0.06, 1.00, 0.88] },
  { src: 'jamon-producto',   box: [0.00, 0.04, 1.00, 0.92] },
  { src: 'jamon-detalle',    box: [0.13, 0.06, 0.74, 0.86] },

  // ── MENIUS — mucho negro arriba/abajo y a los lados
  { src: 'menius-hero-crop', box: [0.21, 0.11, 0.52, 0.70] },
  // precios: SOLO la columna "Pro" (la destacada). La tabla de 3 columnas es
  // ilegible a 346px; la columna Pro comunica lo mismo y se lee.
  { src: 'menius-precios-crop', box: [0.42, 0.28, 0.17, 0.70], suffix: 'pro' },

  // ── ETNIA — contenido centrado, negro alrededor
  { src: 'etnia-hero-crop',  box: [0.00, 0.04, 1.00, 0.92] },
  { src: 'etnia-servicios',  box: [0.23, 0.14, 0.54, 0.78] },
  { src: 'etnia-reserva',    box: [0.23, 0.14, 0.54, 0.78] },
];

for (const { src, box, suffix } of CROPS) {
  const inPath = path.join(DIR, `${src}.webp`);
  const outPath = path.join(DIR, `${src}-${suffix ?? 'tight'}.webp`);
  const m = await sharp(inPath).metadata();
  const [fl, ft, fw, fh] = box;
  const left = Math.round(m.width * fl);
  const top = Math.round(m.height * ft);
  const width = Math.round(m.width * fw);
  const height = Math.round(m.height * fh);
  await sharp(inPath).extract({ left, top, width, height }).webp({ quality: 88 }).toFile(outPath);
  const m2 = await sharp(outPath).metadata();
  console.log(
    `${src.padEnd(22)} ${(m.width + 'x' + m.height).padEnd(11)} r${(m.width / m.height).toFixed(2)}` +
    `  →  ${(m2.width + 'x' + m2.height).padEnd(11)} r${(m2.width / m2.height).toFixed(2)}`
  );
}
console.log('\nlisto');
