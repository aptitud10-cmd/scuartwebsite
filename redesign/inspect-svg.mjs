import { chromium } from '@playwright/test';

const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto('https://locomotive.ca/en', { waitUntil: 'networkidle', timeout: 60000 });
await p.waitForTimeout(3000);

const data = await p.evaluate(() => {
  const out = {};
  // El recuadro grande del wordmark (no el del header). Buscar SVGs en el hero content.
  const heroContent = document.querySelector('.c-home-hero_content') || document.querySelector('h1')?.parentElement;
  const svgs = heroContent ? Array.from(heroContent.querySelectorAll('svg')) : [];
  out.svgCount = svgs.length;
  out.svgs = svgs.map((s) => {
    const r = s.getBoundingClientRect();
    const cs = getComputedStyle(s);
    return {
      viewBox: s.getAttribute('viewBox'),
      w: Math.round(r.width), h: Math.round(r.height),
      strokeWidth: s.querySelector('[stroke-width]')?.getAttribute('stroke-width'),
      stroke: cs.stroke,
      html: s.outerHTML.slice(0, 900),
    };
  });

  // También buscar texto OPS/DES/DEV/LOCO en el hero (por si son texto en el wordmark grande)
  const allHero = heroContent ? Array.from(heroContent.querySelectorAll('*')) : [];
  out.heroTexts = allHero
    .map((e) => Array.from(e.childNodes).filter(n=>n.nodeType===3).map(n=>n.textContent.trim()).join(''))
    .filter((t) => ['OPS','DES','DEV','LOCO'].includes(t));

  return out;
});

console.log(JSON.stringify(data, null, 2));
await b.close();
