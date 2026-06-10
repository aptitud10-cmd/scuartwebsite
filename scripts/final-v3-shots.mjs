import { chromium } from '@playwright/test';
import { mkdirSync } from 'node:fs';

const OUT = 'test-results/final-v3';
mkdirSync(OUT, { recursive: true });

const viewports = [
  { name: 'mobile-375', width: 375, height: 812 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'desktop-1280', width: 1280, height: 800 },
];

const browser = await chromium.launch();
for (const vp of viewports) {
  const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
  await page.goto('http://localhost:4336/en', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(1000);

  // contacto
  await page.locator('form').first().scrollIntoViewIfNeeded();
  await page.waitForTimeout(1400);
  await page.screenshot({ path: `${OUT}/${vp.name}-contact.png` });

  // focus en un input (estado terracota)
  if (vp.width >= 1280) {
    await page.locator('input[name="name"]').focus();
    await page.waitForTimeout(400);
    await page.screenshot({ path: `${OUT}/${vp.name}-contact-focus.png` });
  }

  // footer
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `${OUT}/${vp.name}-footer.png` });

  // full page completa
  await page.evaluate(async () => {
    window.scrollTo(0, 0);
    await new Promise((r) => {
      let y = 0;
      const step = () => {
        window.scrollBy(0, 600);
        y += 600;
        if (y < document.body.scrollHeight + 1200) setTimeout(step, 90);
        else r();
      };
      step();
    });
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: `${OUT}/${vp.name}-fullpage.png`, fullPage: true });

  await page.close();
}
await browser.close();
console.log('done');
