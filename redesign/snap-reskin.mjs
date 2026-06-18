import { chromium } from '@playwright/test';

const viewports = [
  { w: 390, h: 844, tag: '390' },
  { w: 1280, h: 800, tag: '1280' },
];
const sections = ['.manifesto', '#capabilities', '#method'];
const sectionTags = { '.manifesto': 'manif', '#capabilities': 'caps', '#method': 'method' };
const langs = ['es'];

const browser = await chromium.launch();
for (const lang of langs) {
  for (const vp of viewports) {
    const page = await browser.newPage({ viewport: { width: vp.w, height: vp.h } });
    await page.goto(`http://localhost:4321/${lang}/`, { waitUntil: 'networkidle' });
    await page.addStyleTag({ content: 'nav, header, astro-dev-toolbar { display: none !important; }' });
    // Scroll progresivo para disparar reveals
    const total = await page.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y < total; y += 400) {
      await page.evaluate((yy) => window.scrollTo(0, yy), y);
      await page.waitForTimeout(50);
    }
    for (const sel of sections) {
      const el = page.locator(sel);
      const count = await el.count();
      if (count === 0) { console.log(`${sel} NO encontrado`); continue; }
      await el.first().scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      await el.first().screenshot({ path: `c:/Users/willi/scuartwebsite/redesign/shots/reskin-${sectionTags[sel]}-${lang}-${vp.tag}.png` });
      console.log(`reskin-${sectionTags[sel]}-${lang}-${vp.tag}.png OK`);
    }
    await page.close();
  }
}
await browser.close();
