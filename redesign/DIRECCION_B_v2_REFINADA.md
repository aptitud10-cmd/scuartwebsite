# DIRECCIÓN B v2 — "DECLARACIÓN EN ROJO" (refinada)

**Fecha:** 2026-06-04
**Refina:** Dirección B original de DIRECCIONES_CREATIVAS_FASE3.md (NO es dirección nueva)
**Motivo:** el visual-critic bloqueó B en Composición (8.0, "casi sin grilla" = riesgo de vacío) y Mobile (7.5, subdescrito). Lo demás de B ya estaba al nivel (Originalidad/Dirección/Tipografía/Diferenciación/Desktop 9.0).
**Próximo paso:** visual-critic Etapa A, segunda vuelta, umbral 8.5.

---

## 1. Concepto
Una afirmación gritada en rojo sobre carbón, pero ahora **dentro de una rejilla editorial visible** — el grito está maquetado con disciplina de imprenta (afiche suizo pasado por Studio Freight). La tipografía sigue siendo la imagen; la grilla visible es el esqueleto que evita que flote en negro plano. La grilla visible ES la prueba del criterio que SCUART vende. Cambió vs v1: dejó de ser "casi sin grilla" → grilla 12-col con guías sutiles + sistema de índices + grain.

## 2. Emoción
Adrenalina contenida + precisión. Actitud editada, no cruda. El dueño LATAM piensa "esta gente es seria, esto lo hizo alguien que sabe". Crema tostada + grain bajan de "tech edgy" a "estudio con oficio".

## 3. Paleta
- `#0E0E0E` negro carbón — fondo
- `#E8E2D6` crema tostada — texto (nunca blanco puro)
- `#D70321` rojo declaración — máx 4 usos/viewport (palabra hero, índice activo hover, regla vertical, CTA)
- `#8A857B` gris-taupe — metadata, índices inactivos
- `#1A1A18` carbón-elevado (nuevo) — bloque de contraste portfolio, profundidad de plano sin romper bicromía (robado de A en clave carbón-sobre-carbón)
- Líneas de grilla: `rgba(232,226,214,0.07)` crema al 7% — se insinúan
- **Grain SVG feTurbulence** sobre carbón, opacity 0.04, mix-blend overlay, ::after fijo (robado de C, calibrado a fondo oscuro). Da "material" anti-vacío. Sin drift animado.
- Contraste: crema/carbón ~14:1 (AAA); rojo/carbón ~5.1:1 (AA, solo display ≥24px y UI). Jerarquía no depende del rojo (color-blind safe).

## 4. Tipografía
- **Display Monument Extended** (Pangram Pangram) 400/800 — H1, nombres proyecto, CTA. Editorial-cartel, no tech.
- **Body Messina Sans** (Luzi Type) 400/600 — párrafos, subheads, descripciones, footer.
- **Mono: Messina Sans Mono** 400 — EXCLUSIVO para sistema de índices/coordenadas/metadata (textura blueprint/ficha técnica). Tracking +0.04em, uppercase, 11-13px.
- Tres registros = tres capas de info sin un color extra. El mono convierte "negro con texto grande" en "documento de estudio".
- Tracking display -0.02em, leading display 0.92 (bloque macizo). Body leading 1.5.
- Escala mobile 375px: mono 11 · body 16 · subhead 18 · H2 ~9vw · H1 ver §8. Desktop 1280px: mono 13 · body 18 · subhead 22 · H2 ~7vw · H1 ~13vw.

## 5. Composición — SISTEMA DE GRILLA (corazón del refinamiento)
- **12 columnas visibles.** Gutter clamp(16px,2vw,32px), márgenes clamp(20px,5vw,120px).
- **Líneas de columna se insinúan** (crema 7%) en col 3,6,9 (cuartos), verticales recorriendo todo el sitio = esqueleto perceptible. El brutalismo deja de ser vacío.
- **Franja vertical roja vive sobre la línea col 9** — deja de flotar, es la columna activada.
- **Sistema de índices/coordenadas editorial** (densidad sin saturar). NO el cliché "01 02 03 animado". SÍ ficha técnica mono fija tipo blueprint: `N°02 / MANIFIESTO`, `CAT. POSICIONAMIENTO`, `[MX·2026]`. Categorías reales (MANIFIESTO/CASO/MÉTODO/CONTACTO). Estático o micro-fade 0.2s.
- Pattern: editorial-brutalista de columnas. H1/H2 col 1-8 alineación izquierda dura (mata hero centrado). Índice mono col 9-12 arriba derecha.
- Spacing 8/16/24/40/64/96/144. Aspect portfolio 4/5 mobile, 16/9-3/2 desktop. Quiebre cada ~600px con regla horizontal crema 7%.
- Densidad calibrada por ritmo: Hero(denso/aire) → Manifiesto(aire) → Portfolio(denso) → Método(medio) → CTA/Footer(denso). Cada respiro calculado contra densidad adyacente.

## 6. Motion + COMPORTAMIENTO PORTFOLIO (peso comercial principal)
**Hero:** character reveal escalado H1 (yPercent+scale, expo.out 0.9s, stagger 0.03s, palabra roja con delay 0.25s). Líneas de grilla scaleY 0→1 1.1s expo.out ANTES del texto (esqueleto se dibuja, luego texto lo habita — motion narrativo).

**Portfolio — 4 proyectos reales (Jamón Casero · MENIUS · Healthy Choice NY · Arriba Gold).** Lista editorial de nombres gigantes Monument (uno/fila, col 1-9) + ficha mono. NO grid de cards.
- Reposo: 4 nombres apilados como índice, con número mono.
- Hover (desktop): nombre activo → rojo + barrido subrayado scaleX 0.4s power2.out; otros 3 → taupe (se apagan); imagen real aparece anclada col 9-12 con clip-path vertical inset(100% 0 0 0)→0 0.7s expo.out (aspect 4/5); al cambiar fila, GSAP Flip transiciona imagen 0.6s expo.inOut (se transforma, no reaparece).
- Click: FLIP nombre → título de página de caso (técnica Joffrey Spitzer).
- Imágenes reales verificadas: portfolio-jamon-casero.webp, portfolio-menius-real.webp, portfolio-healthy-choice-real.webp, portfolio-arriba-gold-real.webp en client/public/images/. Sin mockups falsos.

**Otros:** hover links barrido rojo scaleX 0.4s. Lenis lerp 0.07. Page transitions máscara carbón + FLIP título (consistente). Timing research: reveals expo.out 0.8-1s, FLIP expo.inOut 0.6s, hover 0.13-0.4s, nada lineal/>1.2s.

**reduced-motion:** estático. Grilla fija, texto presente, hover = cambio color instantáneo + imagen visible sin clip-path. Rojo y grain se mantienen (identidad, no motion).

## 7. Copy
Voz manifiesto, 2da persona, frases-puñetazo, cero marketing.
- **Hero:** *"Cocinás distinto. Online sos igual a todos."* ("distinto" en rojo). [Primario porque "distinto" es palabra corta que no desborda mobile; "genérico" descartado por §8.]
- **Subhead-filtro (Messina taupe):** *"No hacemos webs lindas. Hacemos que tu negocio se vea tan bueno como cocina. Diseño con criterio, no plantillas."*
- **Manifiesto:** *"Tu sazón tardó años. Tu web no puede parecer hecha en una tarde con una plantilla."*
- **Índice hero mono:** `SCUART / ESTUDIO DE DISEÑO · MX·AR · 2026`
- **CTA (Monument):** *"Hablemos."* sub mono: `WHATSAPP · O DEJÁ TUS DATOS ↓`
- Gastronomía punta de lanza (cocina/sazón/plato) + apertura sutil ("tu negocio").

## 8. MOBILE (375px) — plan punto por punto
**8.1 Hero:** H1 = clamp(2.75rem,13vw,13rem) → ~48.75px a 375px. 2 líneas fijas por diseño (`COCINÁS DISTINTO.` / `ONLINE SOS IGUAL A TODOS.`) con text-wrap:balance. "genérico" (9 chars) descartado como palabra hero mobile (desborda); headline de palabras cortas, mismo en los 3 viewports (responsive unificado). Red de seguridad: hyphens:auto + overflow-wrap:anywhere (no debe activarse). Leading 0.92, sin tracking positivo.
**8.2 Franja roja:** vertical (col 9) en desktop → rota a regla HORIZONTAL 2px en mobile (1 col efectiva), máx 2 apariciones. Paridad de marca no de layout (C9).
**8.3 Grilla:** 3 líneas verticales → UNA línea vertical crema 7% en margen izquierdo (~20px), "margen de cuaderno" que ancla todo. Índices mono reflujan DEBAJO del headline de cada bloque, fila mono 11px con `·`.
**8.4 Tipografía grande:** H2 clamp(2rem,9vw,7rem) → ~34px. Nombres portfolio clamp(1.75rem,8vw,6rem) → ~30px, una línea (HEALTHY CHOICE NY rompe a 2 líneas leading 0.95, intencional). Body ≥16px. Mono 11px (metadata).
**8.5 Portfolio mobile (no hover en touch):** fichas apiladas verticales: nombre Monument → imagen real 4/5 full-width SIEMPRE visible → fila mono categoría/año → `↓ VER CASO`. Reveal = scroll-reveal clip-path inset(100% 0 0 0)→0 0.7s expo.out (ScrollTrigger). FLIP al tocar → página caso. Quiebre regla horizontal entre fichas.
**8.6 CTA:** barra dual sticky-bottom (fixed) que aparece tras scroll del hero. WhatsApp (rojo, primario) + "Dejá tus datos" (outline, ancla form). 56px alto, pulgar-alcanzable, Messina 16px, body padding-bottom 72px. Footer: CTA grande Monument HABLEMOS + form. reduced-motion: aparece sin slide.
**8.7 Garantías:** overflow-x:clip en root, todo en 100vw box-sizing border-box, palabras dimensionadas para no exceder col. Sin texto roto (wrap definido). Sin desktop-reducido (decisiones mobile propias). Performance: grain SVG inline ~1KB, imágenes webp lazy (salvo primera), fuentes preload, GSAP Flip dynamic import. Lighthouse ≥90/LCP<2.5s. Si dropea frames mobile: Lenis lerp 0.1 solo mobile (degradación elegante).

## Riesgos y mitigaciones
- Gamer/tech edgy → crema (no blanco), Monument editorial, grain material, índice mono blueprint (no HUD).
- Pizzería cliché → rojo solo en palabra/UI, nunca fondos rojos.
- Rechazo LATAM no-técnico → copy 2da persona cálido, CTA WhatsApp, grain+crema humanizan.
- **Vacío sin alma (el que mató el rediseño previo)** → grilla visible + índices/coordenadas + grain 0.04 + densidad por ritmo. Carbón con material, esqueleto y metadata.
- Índice = cliché template → ficha técnica mono estática (N°/cat/coordenada), no contador animado.
- Mobile roto → §8 completo, cada elemento con comportamiento mobile propio.
- Grilla = wireframe → líneas 7%, se insinúan; tipografía+material mandan.

## Cambios v1→v2 (para el critic)
1. **Composición (8.0→≥8.5):** grilla 12-col visible, franja roja anclada a columna, índices/coordenadas mono (sin cliché), grain 0.04 (de C), bloque carbón-elevado (de A), densidad por ritmo.
2. **Mobile (7.5→≥8.5):** §8 entero con tamaños reales a 375px, copy elegido por constraint mobile, franja rota horizontal, grilla a margen-cuaderno, portfolio hover→scroll-reveal con imagen visible, CTA dual sticky WhatsApp, anti-overflow.
3. **Portfolio:** comportamiento definido (hover FLIP+clip-path desktop / scroll-reveal+FLIP mobile). Solo 4 proyectos reales, sin inventar.
4. **Blindado (no tocado):** declaración roja, Monument+Messina, copy manifiesto, bicromía, disciplina rojo, alineación izquierda, motion expo.out.
