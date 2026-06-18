import { chromium } from '@playwright/test';

const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });

await p.goto('https://locomotive.ca/en', { waitUntil: 'networkidle', timeout: 60000 });
await p.waitForTimeout(3000);

// Recolectar TODO el texto visible del hero con sus computed styles + posición
const data = await p.evaluate(() => {
  const out = [];
  const vh = window.innerHeight;
  // Recorrer todos los nodos de texto del primer viewport (el hero)
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
  const seen = new Set();
  let node;
  while ((node = walker.nextNode())) {
    const rect = node.getBoundingClientRect();
    // Solo elementos visibles dentro del primer viewport
    if (rect.width === 0 || rect.height === 0) continue;
    if (rect.top > vh || rect.bottom < 0) continue;
    // Solo elementos que tienen texto propio directo
    const directText = Array.from(node.childNodes)
      .filter((n) => n.nodeType === 3)
      .map((n) => n.textContent.trim())
      .join('');
    if (!directText) continue;
    const key = directText + rect.top + rect.left;
    if (seen.has(key)) continue;
    seen.add(key);
    const cs = getComputedStyle(node);
    out.push({
      text: directText.slice(0, 60),
      tag: node.tagName,
      fontFamily: cs.fontFamily,
      fontSize: cs.fontSize,
      fontWeight: cs.fontWeight,
      fontStyle: cs.fontStyle,
      lineHeight: cs.lineHeight,
      letterSpacing: cs.letterSpacing,
      textTransform: cs.textTransform,
      color: cs.color,
      pos: { top: Math.round(rect.top), left: Math.round(rect.left), w: Math.round(rect.width), h: Math.round(rect.height) },
    });
  }
  return { vw: window.innerWidth, vh, bodyBg: getComputedStyle(document.body).backgroundColor, items: out };
});

console.log(JSON.stringify(data, null, 2));

// También listar las fuentes cargadas (woff/woff2)
const fonts = await p.evaluate(() => {
  const set = new Set();
  document.fonts.forEach((f) => set.add(`${f.family} | ${f.weight} | ${f.style}`));
  return Array.from(set);
});
console.log('\n=== FONTS LOADED ===');
console.log(JSON.stringify(fonts, null, 2));

await b.close();
