import { chromium } from '@playwright/test';

const BASE = 'http://localhost:4321/en/';
const OUT = 'c:/Users/willi/scuartwebsite/redesign/shots';
const viewports = [
  { name: '375',  width: 375,  height: 812 },
  { name: '768',  width: 768,  height: 1024 },
  { name: '1280', width: 1280, height: 832 },
];

// Secciones por selector (orden del index.astro)
const sections = [
  { key: 'hero',    sel: '.hero-v3' },
  { key: 'manif',   sel: 'section:nth-of-type(2)' },
  { key: 'portf',   sel: '#portfolio, [id*="portfolio"]' },
  { key: 'caps',    sel: '#capabilities, [class*="capabilit" i], [class*="capabilities" i]' },
  { key: 'method',  sel: '#method, [class*="method" i]' },
  { key: 'contact', sel: '#contact, [class*="contact" i]' },
  { key: 'footer',  sel: '.site-footer' },
];

const b = await chromium.launch();
for (const vp of viewports) {
  const p = await b.newPage({ viewport: { width: vp.width, height: vp.height } });
  await p.goto(BASE, { waitUntil: 'networkidle' });
  await p.addStyleTag({ content: 'astro-dev-toolbar{display:none!important}' });
  await p.waitForTimeout(2800);
  // full page para ver el flujo completo
  await p.screenshot({ path: `${OUT}/diag-full-${vp.name}.png`, fullPage: true });
  await p.close();
  console.log(`full ${vp.name} OK`);
}
await b.close();
console.log('DIAG OK');
