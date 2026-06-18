import { chromium } from '@playwright/test';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 1200 } });
await p.goto('https://pangrampangram.com/products/editorial-new', { waitUntil: 'networkidle', timeout: 60000 });
await p.waitForTimeout(4000);
const text = await p.evaluate(() => document.body.innerText);
console.log(text.slice(0, 3500));
await b.close();
