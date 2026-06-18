import { chromium } from '@playwright/test';

const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto('https://locomotive.ca/en', { waitUntil: 'networkidle', timeout: 60000 });
await p.waitForTimeout(3000);

const data = await p.evaluate(() => {
  const result = {};

  // H1 wordmark + cadena de ancestros (buscar mix-blend-mode, filter, etc.)
  const h1 = document.querySelector('h1');
  if (h1) {
    const chain = [];
    let el = h1;
    let depth = 0;
    while (el && depth < 6) {
      const cs = getComputedStyle(el);
      chain.push({
        tag: el.tagName,
        cls: (el.className || '').toString().slice(0, 60),
        mixBlendMode: cs.mixBlendMode,
        isolation: cs.isolation,
        color: cs.color,
        backgroundClip: cs.webkitBackgroundClip || cs.backgroundClip,
        webkitTextFillColor: cs.webkitTextFillColor,
        filter: cs.filter,
        position: cs.position,
        zIndex: cs.zIndex,
        opacity: cs.opacity,
      });
      el = el.parentElement;
      depth++;
    }
    result.h1Chain = chain;
  }

  // Nav: un link y sus ancestros
  const navLink = Array.from(document.querySelectorAll('a')).find((a) => a.textContent.trim() === 'Work');
  if (navLink) {
    const cs = getComputedStyle(navLink);
    result.navLink = {
      mixBlendMode: cs.mixBlendMode,
      color: cs.color,
      webkitTextFillColor: cs.webkitTextFillColor,
    };
    // ancestro con blend
    let el = navLink;
    let d = 0;
    const chain = [];
    while (el && d < 6) {
      const c = getComputedStyle(el);
      chain.push({ tag: el.tagName, cls: (el.className||'').toString().slice(0,50), mixBlendMode: c.mixBlendMode, isolation: c.isolation });
      el = el.parentElement; d++;
    }
    result.navChain = chain;
  }

  // El contenedor del video/fondo y su posición en el stacking
  const video = document.querySelector('video');
  if (video) {
    const cs = getComputedStyle(video);
    result.video = { position: cs.position, zIndex: cs.zIndex, mixBlendMode: cs.mixBlendMode, filter: cs.filter };
  }

  return result;
});

console.log(JSON.stringify(data, null, 2));
await b.close();
