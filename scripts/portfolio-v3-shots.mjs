import { chromium } from '@playwright/test';
import { mkdirSync } from 'node:fs';

const OUT = 'test-results/portfolio-v3';
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();

// Desktop: reposo + hover sobre cada fila
const desktop = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await desktop.goto('http://localhost:4336/en', { waitUntil: 'networkidle', timeout: 60000 });
await desktop.waitForTimeout(1000);
await desktop.locator('#portfolio').scrollIntoViewIfNeeded();
await desktop.waitForTimeout(1500);
await desktop.screenshot({ path: `${OUT}/desktop-reposo.png` });

for (const [name, file] of [
  ['JAMÓN', 'hover-jamon'],
  ['MENIUS', 'hover-menius'],
  ['HEALTHY', 'hover-healthy'],
  ['ARRIBA', 'hover-arriba'],
]) {
  const row = desktop.locator('.pf-row', { hasText: name }).first();
  await row.scrollIntoViewIfNeeded();
  await desktop.waitForTimeout(400);
  await row.hover();
  await desktop.waitForTimeout(500);
  await desktop.screenshot({ path: `${OUT}/desktop-${file}.png` });
}
await desktop.close();

// Mobile y tablet: reposo (imagenes siempre visibles)
for (const vp of [
  { name: 'mobile-375', width: 375, height: 812 },
  { name: 'tablet-768', width: 768, height: 1024 },
]) {
  const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
  await page.goto('http://localhost:4336/es', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(1000);
  await page.locator('#portfolio').scrollIntoViewIfNeeded();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `${OUT}/${vp.name}-top.png` });
  await page.evaluate(() => window.scrollBy(0, window.innerHeight * 1.2));
  await page.waitForTimeout(1200);
  await page.screenshot({ path: `${OUT}/${vp.name}-mid.png` });
  await page.close();
}

await browser.close();
console.log('done');
