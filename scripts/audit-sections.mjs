import { chromium } from '@playwright/test';
import { mkdirSync } from 'node:fs';

const OUT = 'test-results/audit-prod';
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('https://scuart.com/en', { waitUntil: 'networkidle', timeout: 60000 });

const totalH = await page.evaluate(() => document.body.scrollHeight);
const steps = Math.ceil(totalH / 900);
for (let i = 0; i < steps; i++) {
  await page.evaluate((y) => window.scrollTo(0, y), i * 900);
  await page.waitForTimeout(900);
  await page.screenshot({ path: `${OUT}/desktop-sec-${String(i).padStart(2, '0')}.png` });
}

// hover sobre un item del portfolio para ver el estado hover
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(500);
const work = page.locator('text=JAMÓN CASERO').first();
try {
  await work.scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  await work.hover();
  await page.waitForTimeout(800);
  await page.screenshot({ path: `${OUT}/desktop-portfolio-hover.png` });
} catch (e) {
  console.log('hover fail:', e.message);
}

await browser.close();
console.log('steps:', steps, 'totalH:', totalH);
