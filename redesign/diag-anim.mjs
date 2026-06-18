import { chromium } from '@playwright/test';
const OUT = 'c:/Users/willi/scuartwebsite/redesign/shots';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1280, height: 832 } });
await p.goto('http://localhost:4321/en/', { waitUntil: 'networkidle' });
await p.addStyleTag({ content: 'astro-dev-toolbar{display:none!important}' });
await p.waitForTimeout(1000);

// Diagnostico: existe el fallback? que computa? hay video con fuente?
const info = await p.evaluate(() => {
  const fb = document.querySelector('.hero-fallback');
  const vid = document.querySelector('.hero-video');
  const cs = fb ? getComputedStyle(fb) : null;
  return {
    fallbackExists: !!fb,
    animationName: cs?.animationName,
    animationDuration: cs?.animationDuration,
    bg: cs?.backgroundColor,
    fbZ: cs?.zIndex,
    videoOpacity: vid ? getComputedStyle(vid).opacity : 'no-video',
    videoZ: vid ? getComputedStyle(vid).zIndex : 'no-video',
    videoReadyState: vid ? vid.readyState : 'no-video',
    videoCurrentSrc: vid ? (vid.currentSrc || '(vacio)') : 'no-video',
    prefersReduced: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  };
});
console.log(JSON.stringify(info, null, 2));

// Dos frames separados 4s para ver si el transform cambia
const t1 = await p.evaluate(() => getComputedStyle(document.querySelector('.hero-fallback')).transform);
await p.waitForTimeout(4000);
const t2 = await p.evaluate(() => getComputedStyle(document.querySelector('.hero-fallback')).transform);
console.log('transform t1:', t1);
console.log('transform t2:', t2);
console.log('CAMBIO:', t1 !== t2 ? 'SI hay animacion' : 'NO se mueve');
await b.close();
