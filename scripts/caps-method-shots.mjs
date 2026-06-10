import { chromium } from '@playwright/test';
import { mkdirSync } from 'node:fs';

const OUT = 'test-results/caps-method-v3';
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

  // capabilities: anclar en el primer servicio
  await page.locator('text=WEB PLATFORMS').last().scrollIntoViewIfNeeded();
  await page.waitForTimeout(1400);
  await page.screenshot({ path: `${OUT}/${vp.name}-caps-top.png` });
  await page.evaluate(() => window.scrollBy(0, window.innerHeight * 0.9));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${OUT}/${vp.name}-caps-mid.png` });

  // method: primer paso
  await page.locator('text=DISCOVER').first().scrollIntoViewIfNeeded();
  await page.waitForTimeout(1400);
  await page.screenshot({ path: `${OUT}/${vp.name}-method-1.png` });
  // scrollear dentro del method para ver el cambio de numeral activo
  await page.evaluate(() => window.scrollBy(0, window.innerHeight * 1.5));
  await page.waitForTimeout(1200);
  await page.screenshot({ path: `${OUT}/${vp.name}-method-2.png` });

  // hover dim en capabilities (solo desktop)
  if (vp.width >= 1280) {
    await page.locator('text=AI AUTOMATION').last().scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    await page.locator('text=AI AUTOMATION').last().hover();
    await page.waitForTimeout(600);
    await page.screenshot({ path: `${OUT}/${vp.name}-caps-hover.png` });
  }
  await page.close();
}
await browser.close();
console.log('done');
