import { chromium } from '@playwright/test';

const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto('https://locomotive.ca/en', { waitUntil: 'networkidle', timeout: 60000 });
await p.waitForTimeout(3000);

const data = await p.evaluate(() => {
  // El recuadro OPS/DES/DEV — buscar el SVG o el contenedor. Locomotive lo llama c-header_icon
  const out = {};

  // Buscar por texto OPS
  const all = Array.from(document.querySelectorAll('*'));
  const opsEl = all.find((e) => {
    const t = Array.from(e.childNodes).filter(n => n.nodeType === 3).map(n => n.textContent.trim()).join('');
    return t === 'OPS';
  });

  if (opsEl) {
    const cs = getComputedStyle(opsEl);
    out.opsCell = {
      tag: opsEl.tagName, cls: (opsEl.className||'').toString(),
      fontFamily: cs.fontFamily, fontSize: cs.fontSize, fontWeight: cs.fontWeight,
      letterSpacing: cs.letterSpacing, padding: cs.padding, border: cs.border,
      rect: opsEl.getBoundingClientRect(),
    };
    // contenedor padre (el recuadro completo)
    let box = opsEl;
    for (let i=0;i<4;i++){
      box = box.parentElement;
      if (!box) break;
      const c = getComputedStyle(box);
      const r = box.getBoundingClientRect();
      out['ancestor'+i] = {
        tag: box.tagName, cls: (box.className||'').toString().slice(0,40),
        border: c.border, borderWidth: c.borderWidth, display: c.display,
        w: Math.round(r.width), h: Math.round(r.height),
        fontSize: c.fontSize, fontFamily: c.fontFamily.split(',')[0],
      };
    }
  } else {
    // Quizá es un SVG (imagen vectorial), no texto
    const icon = document.querySelector('.c-header_icon, [class*="header_icon"]');
    if (icon) {
      out.iconIsElement = { tag: icon.tagName, html: icon.outerHTML.slice(0, 400) };
    }
    out.note = 'No se encontró texto OPS — probablemente es un SVG/imagen';
  }

  return out;
});

console.log(JSON.stringify(data, null, 2));
await b.close();
