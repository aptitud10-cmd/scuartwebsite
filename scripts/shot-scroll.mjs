/**
 * shot-scroll.mjs — Screenshot full-page que SCROLLEA primero (dispara scroll-reveal GSAP).
 * Uso: node scripts/shot-scroll.mjs <nombre> <puerto> <anchos coma>
 * Ej:  node scripts/shot-scroll.mjs method 4322 390,820,1280
 * Captura /en y /es full-page tras scrollear hasta el fondo → redesign/shots/<nombre>-{lang}-{w}-full.png
 */
import { chromium } from '@playwright/test';

const name = process.argv[2] || 'shot';
const port = process.argv[3] || '4322';
const widths = (process.argv[4] || '390,820,1280').split(',').map(Number).filter(Boolean);
const langs = ['en', 'es'];

const browser = await chromium.launch();
for (const lang of langs) {
  for (const w of widths) {
    const page = await browser.newPage({ viewport: { width: w, height: 800 } });
    await page.goto(`http://localhost:${port}/${lang}`, { waitUntil: 'networkidle' });
    // scroll progresivo para disparar todos los ScrollTrigger reveals
    await page.evaluate(async () => {
      const step = 300;
      for (let y = 0; y <= document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 120));
      }
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 300));
    });
    await page.waitForTimeout(500);
    const out = `redesign/shots/${name}-${lang}-${w}-full.png`;
    await page.screenshot({ path: out, fullPage: true });
    console.log(out);
    await page.close();
  }
}
await browser.close();
