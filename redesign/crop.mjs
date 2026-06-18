import { chromium } from '@playwright/test';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1280, height: 832 } });
await p.goto('http://localhost:4322/en/', { waitUntil: 'networkidle' });
await p.addStyleTag({ content: 'astro-dev-toolbar{display:none!important}' });
await p.waitForTimeout(2600);
await p.screenshot({ path: 'c:/Users/willi/scuartwebsite/redesign/shots/crop-nav.png', clip: { x: 0, y: 0, width: 1280, height: 70 } });
await p.screenshot({ path: 'c:/Users/willi/scuartwebsite/redesign/shots/crop-wordmark.png', clip: { x: 0, y: 590, width: 1280, height: 242 } });
// Crop CERRADO solo del recuadro, sin comprimir
const disc = await p.locator('.hero-disc').boundingBox();
if (disc) {
  await p.screenshot({ path: 'c:/Users/willi/scuartwebsite/redesign/shots/crop-disc.png',
    clip: { x: Math.max(0, disc.x - 10), y: Math.max(0, disc.y - 10), width: disc.width + 320, height: disc.height + 20 } });
}
await b.close();
console.log('crops OK');
