import { chromium } from '@playwright/test';
import { mkdirSync } from 'node:fs';

const OUT = 'test-results/hero-v3';
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
  // esperar a que el motion del hero termine
  await page.waitForTimeout(2500);
  await page.screenshot({ path: `${OUT}/${vp.name}-hero-en.png` });
  await page.goto('http://localhost:4336/es', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(2500);
  await page.screenshot({ path: `${OUT}/${vp.name}-hero-es.png` });
  await page.close();
}
await browser.close();
console.log('done');

