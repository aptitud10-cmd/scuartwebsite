/**
 * shot.mjs — Screenshots de secciones para review visual.
 * Uso: node scripts/shot.mjs <selector|full> <nombre> [puerto]
 * Ej:  node scripts/shot.mjs "#method" method
 * Captura /en y /es en 1280, 768, 375 → redesign/shots/<nombre>-{en,es}-{w}.png
 */
import { chromium } from '@playwright/test';

const target = process.argv[2] || 'full';   // selector CSS o "full"
const name = process.argv[3] || 'shot';
const port = process.argv[4] || '4321';
const widths = [1280, 768, 375];
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
