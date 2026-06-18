import { chromium } from '@playwright/test';

const viewports = [
  { w: 1280, h: 832, tag: '1280' },
  { w: 768, h: 1024, tag: '768' },
  { w: 390, h: 844, tag: '390' },
];
const langs = ['es', 'en'];

const browser = await chromium.launch();
for (const lang of langs) {
  for (const vp of viewports) {
    const page = await browser.newPage({ viewport: { width: vp.w, height: vp.h } });
    await page.goto(`http://localhost:4321/${lang}/`, { waitUntil: 'networkidle' });
    await page.addStyleTag({ content: 'astro-dev-toolbar { display: none !important; }' });
    // Esperar a que termine el reveal de motion del hero
    await page.waitForTimeout(2500);
    await page.screenshot({ path: `c:/Users/willi/scuartwebsite/redesign/shots/hero-new-${lang}-${vp.tag}.png` });
    console.log(`hero-new-${lang}-${vp.tag}.png OK`);
    await page.close();
  }
}
await browser.close();
