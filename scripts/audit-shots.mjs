import { chromium } from '@playwright/test';
import { mkdirSync } from 'node:fs';

const OUT = 'test-results/audit-prod';
mkdirSync(OUT, { recursive: true });

const viewports = [
  { name: 'mobile-375', width: 375, height: 812 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'desktop-1440', width: 1440, height: 900 },
];

const browser = await chromium.launch();
for (const vp of viewports) {
  const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
  await page.goto('https://scuart.com/en', { waitUntil: 'networkidle', timeout: 60000 });
  // dejar que cargue todo y forzar triggers de scroll-reveal
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let total = 0;
      const step = () => {
        window.scrollBy(0, 600);
        total += 600;
        if (total < document.body.scrollHeight + 1200) setTimeout(step, 120);
        else resolve();
      };
      step();
    });
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(1500);
  // hero above-the-fold
  await page.screenshot({ path: `${OUT}/${vp.name}-hero.png` });
  // full page
  await page.screenshot({ path: `${OUT}/${vp.name}-full.png`, fullPage: true });
  await page.close();
}
await browser.close();
console.log('done');
