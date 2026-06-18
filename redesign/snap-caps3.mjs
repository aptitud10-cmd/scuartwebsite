import { chromium } from '@playwright/test';

const viewports = [
  { w: 390, h: 844, tag: '390' },
  { w: 768, h: 1024, tag: '768' },
  { w: 1280, h: 800, tag: '1280' },
];
const langs = ['es', 'en'];

const browser = await chromium.launch();
for (const lang of langs) {
  for (const vp of viewports) {
    const page = await browser.newPage({ viewport: { width: vp.w, height: vp.h } });
    await page.goto(`http://localhost:4321/${lang}/`, { waitUntil: 'networkidle' });
    await page.addStyleTag({ content: 'nav, header, astro-dev-toolbar { display: none !important; }' });
    const cap = page.locator('#capabilities');
    await cap.scrollIntoViewIfNeeded();
    await page.waitForTimeout(700);
    await cap.screenshot({ path: `c:/Users/willi/scuartwebsite/redesign/shots/caps3-${lang}-${vp.tag}.png` });
    await page.close();
    console.log(`caps3-${lang}-${vp.tag}.png OK`);
  }
}
await browser.close();
