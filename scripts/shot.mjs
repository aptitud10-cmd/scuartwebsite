/**
 * shot.mjs — Screenshots de secciones para review visual.
 * Uso: node scripts/shot.mjs <selector|full> <nombre> [puerto] [anchos separados por coma]
 * Ej:  node scripts/shot.mjs "#method" method
 * Ej:  node scripts/shot.mjs "#method" method 4322 1280,820,390
 * Captura /en y /es en los anchos indicados → redesign/shots/<nombre>-{en,es}-{w}.png
 * Anchos por defecto: 1280, 820, 390
 */
import { chromium } from '@playwright/test';

const target = process.argv[2] || 'full';   // selector CSS o "full"
const name = process.argv[3] || 'shot';
const port = process.argv[4] || '4321';
const widthsArg = process.argv[5];
const widths = widthsArg
  ? widthsArg.split(',').map(Number).filter(Boolean)
  : [1280, 820, 390];
const langs = ['en', 'es'];

const browser = await chromium.launch();
for (const lang of langs) {
  for (const w of widths) {
    const page = await browser.newPage({ viewport: { width: w, height: Math.round(w * 1.4) } });
    await page.goto(`http://localhost:${port}/${lang}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1200); // dejar correr GSAP/scroll-reveal
    const out = `redesign/shots/${name}-${lang}-${w}.png`;
    if (target === 'full') {
      await page.screenshot({ path: out, fullPage: true });
    } else {
      const el = await page.$(target);
      if (el) {
        await el.scrollIntoViewIfNeeded();
        await page.waitForTimeout(900);
        await el.screenshot({ path: out });
      } else {
        await page.screenshot({ path: out, fullPage: true }); // fallback
      }
    }
    console.log(out);
    await page.close();
  }
}
await browser.close();
