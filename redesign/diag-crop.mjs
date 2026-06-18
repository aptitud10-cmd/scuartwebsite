import { chromium } from '@playwright/test';
const OUT = 'c:/Users/willi/scuartwebsite/redesign/shots';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1280, height: 832 } });
await p.goto('http://localhost:4321/en/', { waitUntil: 'networkidle' });
await p.addStyleTag({ content: 'astro-dev-toolbar{display:none!important}' });
await p.waitForTimeout(2800);
// portfolio: scroll y captura viewport
await p.evaluate(() => { const el = document.querySelector('#portfolio,[id*="portfolio"],[class*="ortfolio"]'); if(el) el.scrollIntoView(); });
await p.waitForTimeout(1200);
await p.screenshot({ path: `${OUT}/diag-portfolio-1280.png` });
console.log('portfolio cap OK');
await b.close();
