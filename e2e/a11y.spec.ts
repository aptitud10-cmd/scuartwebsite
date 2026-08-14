import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

/**
 * a11y.spec.ts — accesibilidad WCAG 2.1 nivel AA, automatizada.
 *
 * QUÉ PRUEBA: contraste de texto, alt en imágenes, labels de formulario, orden
 * de encabezados, roles ARIA, idioma declarado, y foco visible. Todo lo que
 * axe-core puede decidir sin criterio humano.
 *
 * QUÉ NO PRUEBA: que el sitio se entienda. Eso es UX y no lo detecta ninguna
 * herramienta — sigue siendo trabajo de mirar la pantalla.
 *
 * PÁGINAS ELEGIDAS: una por PLANTILLA, no una por página. El sitio tiene 27
 * páginas pero solo 4 layouts (home, servicio, caso, legal); una violación de
 * contraste o de heading vive en el layout, así que probar las 27 encontraría
 * los mismos hallazgos 27 veces. Se cubren los dos idiomas porque el copy
 * cambia el largo del texto y con él los quiebres de línea.
 *
 * Corre en los 3 viewports declarados en playwright.config.ts.
 */

const PAGINAS = [
  { ruta: "/es", nombre: "home ES" },
  { ruta: "/en", nombre: "home EN" },
  { ruta: "/es/servicios/web-platforms", nombre: "servicio ES" },
  { ruta: "/en/services/ai-visibility", nombre: "servicio EN (con checker)" },
  { ruta: "/es/trabajo/menius", nombre: "caso ES" },
  { ruta: "/es/privacidad", nombre: "legal ES" },
];

/* WCAG 2.1 AA = las cuatro etiquetas que axe mapea a ese estándar. */
const NIVEL_AA = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"];

for (const { ruta, nombre } of PAGINAS) {
  test(`${nombre} — sin violaciones WCAG AA`, async ({ page }) => {
    await page.goto(ruta, { waitUntil: "networkidle" });

    /* El sitio revela contenido con GSAP al entrar en viewport. Sin recorrerlo,
       axe evaluaría elementos todavía en opacity:0 y se perdería violaciones
       reales de contraste. Se scrollea entero y se vuelve arriba. */
    await page.evaluate(async () => {
      /* En ≤767px el scroller es el <body>, no el <html> (ver CLAUDE.md:
         "body scroll container"). Leer el equivocado deja la página quieta. */
      const enBody = getComputedStyle(document.body).overflowY === "auto";
      const scroller = enBody ? document.body : document.scrollingElement!;
      const alto = scroller.scrollHeight;
      /* Salto = una pantalla completa, no 300px fijos. Con 300px una home de
         5.400px daba 18 pasos × 60ms solo en mobile y el test se pasaba de los
         30s de timeout. Un viewport por paso alcanza para que cada
         IntersectionObserver dispare, y son 6-7 pasos. */
      const paso = window.innerHeight;
      for (let y = 0; y < alto; y += paso) {
        scroller.scrollTo(0, y);
        await new Promise(r => setTimeout(r, 90));
      }
      scroller.scrollTo(0, 0);
    });

    /* Esperar a que el banner de cookies vuelva a su estado pleno.

       POR QUÉ: al pasar medio viewport, el banner se ATENÚA a propósito
       (data-faded / data-dimmed en CookieBanner.astro) para no competir con el
       contenido. Si axe corre justo después del scroll, mide ese estado
       transitorio —tinta al ~18%, 1.43:1— y reporta una violación que en
       reposo no existe (el texto está al 72%, 6.76:1). El estado que hay que
       auditar es el de reposo, con la página arriba, que es como el usuario lo
       lee para decidir.

       Se espera a que la opacidad llegue a 1 en vez de dormir un número
       mágico; el .catch cubre el caso de que ya se haya aceptado la cookie. */
    await page
      .waitForFunction(
        () => {
          const b = document.querySelector(".cookie");
          if (!b || (b as HTMLElement).hidden) return true; // ya fue aceptado
          return parseFloat(getComputedStyle(b).opacity) === 1;
        },
        { timeout: 5000 }
      )
      .catch(() => {
        /* Si no vuelve a opacidad plena, no es motivo para fallar el test. */
      });

    await page.waitForTimeout(800);

    const { violations } = await new AxeBuilder({ page })
      .withTags(NIVEL_AA)
      .analyze();

    /* Mensaje legible: sin esto el fallo sale como un volcado de JSON y no se
       entiende qué arreglar. */
    const detalle = violations
      .map(v => {
        const nodos = v.nodes
          .slice(0, 3)
          .map(n => `      ${n.target.join(" ")}`);
        return [
          `  [${v.impact}] ${v.id} — ${v.help}`,
          ...nodos,
          v.nodes.length > 3 ? `      (+${v.nodes.length - 3} más)` : "",
          `      ${v.helpUrl}`,
        ]
          .filter(Boolean)
          .join("\n");
      })
      .join("\n\n");

    expect(
      violations.length,
      `${violations.length} violación(es) en ${ruta}:\n\n${detalle}\n`
    ).toBe(0);
  });
}

/* ── Áreas táctiles ───────────────────────────────────────────────────────
   Aparte de axe: WCAG 2.1 AA pide 24×24px (criterio 2.5.8), pero el sitio se
   fijó 44px como norma propia — el mínimo de Apple, y el que evita el error de
   dedo en un teléfono. axe no chequea el objetivo de 44px, y además NO VE las
   áreas ampliadas con pseudo-elementos, que es la técnica que usa este sitio
   cuando el subrayado es parte del diseño (Nav, footer, CTAs de servicio).
   Por eso se mide acá la caja real: elemento ∪ ::before ∪ ::after. */
test("áreas táctiles de 44px en toda la navegación", async ({ page }) => {
  await page.goto("/es", { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);

  const chicos = await page.evaluate(() => {
    const fallas: { sel: string; txt: string; w: number; h: number }[] = [];

    for (const el of document.querySelectorAll('a, button, [role="button"]')) {
      const cs = getComputedStyle(el);
      if (cs.display === "none" || cs.visibility === "hidden") continue;

      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) continue;

      /* WCAG exime los enlaces dentro de texto corrido: en un párrafo el
         objetivo lo define la línea, no el autor. */
      if (el.closest("p")) continue;

      let { top, bottom, left, right } = r;
      for (const pseudo of ["::before", "::after"]) {
        const p = getComputedStyle(el, pseudo);
        if (p.content === "none" || p.display === "none") continue;
        const ph = parseFloat(p.height);
        const pw = parseFloat(p.width);
        if (!ph || !pw || p.position !== "absolute") continue;
        const pt = parseFloat(p.top);
        const pl = parseFloat(p.left);
        if (!isNaN(pt)) {
          top = Math.min(top, r.top + pt);
          bottom = Math.max(bottom, r.top + pt + ph);
        }
        if (!isNaN(pl)) {
          left = Math.min(left, r.left + pl);
          right = Math.max(right, r.left + pl + pw);
        }
      }

      const w = Math.round(right - left);
      const h = Math.round(bottom - top);
      if (w < 44 || h < 44) {
        fallas.push({
          sel:
            el.tagName.toLowerCase() +
            (typeof el.className === "string" && el.className
              ? `.${el.className.trim().split(/\s+/)[0]}`
              : ""),
          txt: (el.textContent ?? "").trim().slice(0, 24),
          w,
          h,
        });
      }
    }
    return fallas;
  });

  const detalle = chicos
    .map(c => `  ${c.sel} — ${c.w}×${c.h}px  "${c.txt}"`)
    .join("\n");
  expect(
    chicos.length,
    `${chicos.length} destino(s) por debajo de 44px:\n${detalle}\n`
  ).toBe(0);
});
