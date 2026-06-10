# Research: Portfolio/Work Index — Agencias Premium (junio 2026)

**Fecha:** 2026-06-10
**Scope:** Patrones de work index en sitios premiados — cómo presentan portfolios HOY
**Investigador:** investigador-tendencias

---

## Contexto

William rechazó lista con imágenes laterales. Referencia: locomotive.ca work index —
nombres de proyecto en serif gigante centrados, hairlines, imagen chica incrustada
INLINE dentro del nombre en hover. Restricción dura: imagen visible en reposo en mobile.

---

## Patron 0: Locomotive.ca — la referencia directa

URL: https://locomotive.ca/en/work
Awwwards: Site of the Month (múltiples, más reciente 2024-2025)
Tipografía: PP Locomotive New (Editorial New base + iconografía, Pangram Pangram Foundry)

Work index: títulos de proyecto en serif extra-large centrados, hairlines finas
borde-a-borde. El inline image hover: al pasar el cursor, imagen incrustada
dentro del texto del título como si fuera un glifo. Técnica: `<span display:inline-block>`
dentro del flujo de texto, con scale + opacity. No es imagen flotante — es inline flow.

---

## Patron 1: Inline Image en Título (patrón pedido) — RECOMENDADO

Awwwards category: "list image hover" — awwwards.com/inspiration/list-image-hover
Variante de Roche Musique en Awwwards (hover/typography/minimal)

Cómo funciona:
- Lista vertical, serif display grande, centered
- Hairlines 1px full-width entre ítems
- Hover: imagen pequeña (~200px alto, 16:9) insertada inline entre palabras del título
- Split del título en dos <span>; imagen entra con scale(0,1)→scale(1,1) + opacity, 280ms GSAP

Pros para SCUART (4 proyectos, paleta cálida):
- Es exactamente el patrón pedido por William
- 4 ítems con Fraunces grande + padding generoso = curado, no escaso
- GSAP ya instalado — implementación directa
- Fraunces + hueso/barro = identidad propia, no copia de Locomotive

Contras:
- Requiere fallback para mobile (sin hover nativo)
- Títulos de una sola palabra (MENIUS): la imagen no puede ir "entre palabras"
  → solución: imagen va ANTES del título como prefijo visual

Mobile fix (restricción dura cumplida):
Stack — título arriba + imagen 100vw siempre visible + hairline entre ítems.
Sin tap, sin interacción requerida. Ver sección mobile.

---

## Patron 2: Cursor-Follow Image sobre lista tipográfica

Awwwards: "agency-portfolio-hover-interaction-wonderland",
           "portfolio-hover-preview-karma-digital-agency"
Usado por: Wonderland (Amsterdam), múltiples SOTD 2024-2025

Cómo funciona:
- Lista vertical de proyectos en tipografía grande
- Hover: imagen del proyecto aparece flotante siguiendo al cursor (GSAP lerp)
- Imagen es absolute/fixed, no inline

Pros para SCUART:
- Más simple que inline (no requiere split de texto)
- Funciona bien con títulos de una sola palabra
- GSAP listo

Contras:
- Menos editorial/premium que el inline
- Mobile: mismo problema de no-hover
- Con 4 ítems, poca densidad de cursor-follow

---

## Patron 3: Lista 50/50 imagen fija a la derecha

Ejemplos: Studio375 (Awwwards SOTD), studios europeos con portfolio corto

Cómo funciona:
- Dos columnas: lista títulos izquierda, imagen activa derecha (crossfade en hover)
- Mobile: imagen arriba, título abajo, siempre visible

Pros: imagen siempre visible sin hacks; resuelve reposo de forma natural
Contras: William rechazó explícitamente la variante "imagen lateral" — no usar.

---

## Patron 4: Acordeon tipografico expandible

Usado en: portfolios europeos de estudio, varios roundups itsnicethat.com 2026

Cómo funciona:
- Lista colapsada; click/tap expande cada ítem revelando imagen + descripción
- Mobile: mismo comportamiento, es touch-first por diseño

Pros: resuelve mobile de forma nativa
Contras: menos impactante visualmente; requiere interacción para ver imágenes;
         pierde la sensación "tipográfica/archivo" premium

---

## Anti-patrones a EVITAR

- Grid cards 2-3 columnas imagen arriba + título abajo — 2019-2022
- Carrusel/slider horizontal de proyectos — 2015-2018
- Thumbnails cuadrados uniformes sin tipografía protagonista — 2020
- Lista con imagen fija a la derecha en todos viewports — ya rechazado
- Hover reveal sin fallback visible en mobile — violación restricción dura

---

## Solucion Mobile para Patron Inline

Opcion elegida: Stack visible siempre
- Cada ítem: título Fraunces 40-48px + imagen 100vw (ratio 16:9, height auto), siempre visible
- Hairline 1px entre ítems
- Sin tap, sin acordeón, sin interacción requerida
- 4 ítems en scroll vertical — natural, limpio

Descartadas:
- Imagen a la derecha del título (se parece al layout rechazado)
- Tap-to-expand inline (funciona solo en títulos multi-palabra)

---

## Recomendacion Final

PATRON: Inline Image en Título con Stack Mobile

Desktop (>1024px):
- Lista vertical 4 proyectos, Fraunces display 72–96px, centrado
- Hairlines 1px rgba(36,23,16,0.15), full viewport-width
- Padding 48px top/bottom por ítem para que 4 ítems llenen pantalla
- Hover: imagen ~200px alto, 16:9, como <span display:inline-block> entre
  primera y segunda palabra. GSAP scale(0,1)→scale(1,1) + opacity 0→1, 280ms, power2.out
- MENIUS (1 palabra): imagen como prefijo antes del título
- Cursor: crosshair o custom [Ver] en hover

Tablet (769-1023px):
- Igual que mobile, título 56-64px, imagen max-width 640px centrada

Mobile (<=768px):
- Stack: título Fraunces 40-48px + imagen 100vw siempre visible + hairline
- Sin interacción requerida — cumple restricción dura visual-critic

Por qué este y no los otros:
Con 4 proyectos, el inline convierte la escasez en curaduría — el espacio tipográfico
masivo hace el trabajo. El cursor-follow es válido pero menos memorable. El acordeón
y el 50/50 no cumplen la visión de William. El stack mobile es el fallback más limpio.

---

## Fuentes

- Awwwards List Image Hover: https://www.awwwards.com/inspiration/list-image-hover
- Awwwards Wonderland Hover: https://www.awwwards.com/inspiration/agency-portfolio-hover-interaction-wonderland
- Awwwards Typographic Hover: https://www.awwwards.com/inspiration/typographic-hover
- Awwwards Karma Portfolio Hover Preview: https://www.awwwards.com/inspiration/portfolio-hover-preview-karma-digital-agency
- Locomotive Work Page: https://locomotive.ca/en/work
- Locomotive Fonts In Use: https://fontsinuse.com/uses/61459/locomotive-portfolio-website-and-visual-ident
- Awwwards SOTD jun 2026 (Pacôme Pertant): https://www.awwwards.com/sites/pacome-pertant-portfolio
- Clou Agency Portfolio SOTD: https://www.awwwards.com/sites/clou-agency-portfolio
- Colorlib Portfolio Trends 2026: https://colorlib.com/wp/portfolio-design-trends/
- It's Nice That Trends 2026: https://www.itsnicethat.com/features/forward-thinking-graphic-trends-2026-graphic-design-120126
