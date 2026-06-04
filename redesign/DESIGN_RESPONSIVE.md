# DESIGN_RESPONSIVE.md — "Declaración en Rojo" v2

**Proyecto:** Rediseño scuart.com
**Basado en:** `redesign/DIRECCION_B_v2_REFINADA.md` (APPROVED_WITH_MINOR_FIXES)
**Rol:** Diseñador responsive unificado (un sistema, 3 viewports: 375 / 768 / 1280)
**Método:** mobile-first, clamp(), grid CSS. Layout independiente por viewport, paridad de marca total (C9).
**No reabre la dirección (P11).** Despliega la dirección aprobada como sistema fluido.
**Próximo paso:** visual-critic Etapa A (sistema responsive), umbral 8.5. NO va al dev hasta aprobación (Design Gate P7/P12).

---

## 0. Principio de sistema
Un solo conjunto de tokens (color, tipo, espacio, grilla) gobierna los 3 viewports. Lo que cambia entre viewports NO es la marca — es el layout y la coreografía. Marca constante (C9): bicromía carbón/crema, rojo declaración disciplinado, Monument+Messina+Mono, grain material, sistema de índices mono, alineación izquierda dura, motion expo.out. Layout independiente: 12 col desktop → 6 col tablet → 1 col + margen-cuaderno mobile; rojo vertical columna desktop → regla horizontal mobile; portfolio hover-reveal desktop → scroll-reveal con imagen siempre visible mobile.

## 1. TOKENS DE COLOR (idénticos los 3 viewports)
```
--carbon:        #0E0E0E   /* fondo base */
--carbon-elev:   #1A1A18   /* bloque de contraste (portfolio/CTA) */
--crema:         #E8E2D6   /* texto, nunca blanco puro */
--rojo:          #D70321   /* declaración — máx 4 instancias/viewport */
--taupe:         #8A857B   /* metadata, índices inactivos, subhead-filtro */
--linea:         rgba(232,226,214,0.07)
--linea-hover:   rgba(232,226,214,0.14)
```
Presupuesto rojo: máx 4 instancias visibles simultáneas por viewport (cuenta below-the-fold).

## 2. GRAIN — garantía de que se perciba (punto 3 critic)
Riesgo: 0.04 + overlay sobre #0E0E0E casi negro → invisible. Decisión:
1. Subir opacity a **0.06** (piso perceptible sobre carbón).
2. Dos capas: A) grain feTurbulence baseFrequency 0.9, numOctaves 2, opacity 0.06, mix-blend overlay, position fixed inset 0 pointer-events none. B) velo de luminancia radial-gradient sutil (rgba(232,226,214,0.025)→transparent) desde centro-superior, da base no-uniforme para que el grain "muerda".
3. Tamaño de grano físico constante (background-size 180px), NO escalado al viewport (material consistente mobile/desktop).
4. Sobre --carbon-elev se percibe más (base más clara) — refuerza "otra superficie".
Fallback Etapa B: subir Capa A a 0.08 antes de tocar blend. No pasar de 0.08.

## 3. HERO — 3 viewports (puntos 2 y 4 critic)
Copy fijo: H1 `COCINÁS DISTINTO.` / `ONLINE SOS IGUAL A TODOS.` ("DISTINTO" rojo), siempre 2 líneas por diseño. Subhead-filtro (Messina taupe): "No hacemos webs lindas. Hacemos que tu negocio se vea tan bueno como cocina. Diseño con criterio, no plantillas." Índice hero (Mono): `SCUART / ESTUDIO DE DISEÑO · MX·AR · 2026`.
Jerarquía ≤3 niveles: N1 (≥45%) H1 Monument (único foco, tamaño+posición+palabra roja); N2 subhead taupe (apagado); N3 índice mono + líneas grilla + grain (textura de soporte, contraste bajísimo vs crema 14:1 del H1 = mecanismo anti-competencia).
- **375:** H1 clamp(2.75rem,13vw,13rem)→~48.75px, leading 0.92, tracking -0.02em, 2 líneas, text-wrap balance + red hyphens/overflow-wrap. min-height 100svh. Índice mono arriba a clamp(88px,14vh,120px). H1 anclado ~42% desde arriba (no centrado vertical). Subhead margin-top --space-l. Aire inferior > superior (tensión a scroll). Palabra roja "DISTINTO." (instancia 1).
- **768:** H1 ~74px (13vw). H1 col 1-6, índice mono col 5-6 arriba derecha, subhead col 1-4 (asimetría editorial). min-height 92svh.
- **1280:** H1 ~166px (13vw; max 13rem=208px solo ultrawide >1600). H1 col 1-8 alineación izquierda dura. Índice mono col 9-12 arriba derecha sobre línea col 9. Subhead col 1-6. height 100svh, H1 en tercio inferior-medio, mitad superior aire cruzado por líneas (esqueleto antes de habitarse).

## 4. GRID EDITORIAL — colapso 12→6→cuaderno (punto 1 critic)
```
--cols: 12 desktop / 6 tablet / 1 mobile (+ margen-cuaderno)
--gutter: clamp(16px, 2vw, 32px);
--margin: clamp(20px, 5vw, 120px);
grid: repeat(var(--cols), minmax(0, 1fr));  /* minmax(0,1fr) = anti-overflow */
```
Líneas guía (--linea 7%): verticales 1px (pelo), SOLO en col 3/6/9 (cuartos), sin marcas/números/cruces (eso sería HUD). 3 líneas = ritmo, no malla. Fallback: si lee invisible, subir SOLO líneas a 9% (no grain), máx 10%.
- **375:** 3 líneas → UNA línea vertical "margen-cuaderno" crema 7% a ~20px del borde izquierdo, continua todo el scroll (lomo del cuaderno). Elemento nuevo con función nueva (no escalado). Contenido 1 col a la derecha.
- **768:** 6 col, líneas col 3 y col 6 (col 6 hereda rol de col 9 desktop). Contenido principal col 1-4, metadata/imágenes col 5-6.
- **1280:** 12 col, líneas col 3/6/9. Col 9 estructural (franja roja + columna imágenes portfolio). Líneas continúan entre secciones.
Reglas horizontales: quiebre cada ~600px y entre secciones, 1px --linea (renglón que complementa el lomo).

## 5. TIPOGRAFÍA — escala fluida clamp()
Monument Extended (display 400/800), Messina Sans (body 400/600), Messina Sans Mono (índices 400).

| Rol | Familia | clamp() | @375 | @1280 | leading | tracking |
|---|---|---|---|---|---|---|
| H1 hero | Monument 800 | clamp(2.75rem,13vw,13rem) | ~48.75 | ~166 | 0.92 | -0.02em |
| H2 sección | Monument 800 | clamp(2rem,9vw,7rem) | ~34 | ~112* | 0.95 | -0.02em |
| Nombres portfolio | Monument 400 | clamp(1.75rem,8vw,6rem) | ~30 | ~96* | 0.95 | -0.015em |
| CTA "Hablemos." | Monument 800 | clamp(2.5rem,10vw,8rem) | ~42 | ~128* | 0.95 | -0.02em |
| Subhead-filtro | Messina 400 | clamp(1.125rem,1.4vw+0.7rem,1.375rem) | ~18 | ~22 | 1.5 | 0 |
| Body | Messina 400 | clamp(1rem,0.4vw+0.9rem,1.125rem) | ~16 | ~18 | 1.5 | 0 |
| Mono índices | Messina Mono 400 | clamp(0.6875rem,0.3vw+0.6rem,0.8125rem) | ~11 | ~13 | 1.4 | +0.04em uppercase |

\* vw alto: max para que ultrawide no explote; a 1280 si H2 se pasa de ~112px bajar preferred a 8.5vw. Criterio: H1 manda, H2 ≈⅔ de H1; si sube, bajar vw de H2 no de H1.
Contraste tipográfico real (R6): 3 registros + peso Monument 400/800 + color crema/taupe. Mono SOLO índices/coordenadas, nunca body.

## 6. SPACING — tokens fluidos
```
--space-2xs: clamp(4px,1vw,8px);     --space-xs: clamp(8px,1.5vw,16px);
--space-s:  clamp(16px,2.5vw,24px);  --space-m:  clamp(24px,4vw,40px);
--space-l:  clamp(32px,6vw,64px);    --space-xl: clamp(48px,9vw,96px);
--space-2xl:clamp(64px,12vw,144px);  --space-3xl:clamp(96px,16vw,200px);
```
Ritmo vertical (densidad calculada, punto 4): Hero denso+aire (100svh/92svh) → Manifiesto máximo aire (--space-3xl, pausa) → Portfolio denso (--space-xl, índice compacto) → Método medio (--space-2xl) → CTA/Footer denso (--space-xl). Contraste denso→aire→denso = cadencia, no relleno uniforme.

## 7. ROJO VERTICAL — transformación por viewport (punto 5 critic)
"Columna activada", no barra flotante.
- **1280:** franja roja dibujada SOBRE la línea de col 9 (mismo eje X que la guía crema 7%), 2px (= guía activada, no barra nueva más gruesa). NO recorre toda la página: marca un tramo alineado a la sección activa (alto del H1 en hero, alto de imagen activa en portfolio). Empieza/termina alineada a contenido = "columna activada ahí". Instancia de rojo.
- **768:** columna activada = col 6 (borde derecho contenido). Guía crema col 6 encendida rojo en tramo de sección activa. 2px, alineada a contenido.
- **375:** rota 90° a regla HORIZONTAL 2px, ancho ~33% (trazo de declaración, no divisor full-width), anclada a izquierda al margen-cuaderno. Máx 2 apariciones: debajo del H1 hero (subrayado declaración) y sobre CTA "Hablemos." footer. Nacen del lomo vertical (el rojo "sale" del esqueleto). Paridad de marca no de layout (C9).
Conteo rojo: desktop = palabra hero(1)+franja col9(1)+CTA(1)+índice activo portfolio hover(1)=4 máx no simultáneos. Mobile = palabra(1)+regla hero(1)+regla CTA(1)+WhatsApp sticky(1)=4 máx.

## 8. NAVEGACIÓN
Logo "SCUART" izquierda, nav minimal transparente sobre carbón (grain visible a través).
- **1280:** inline fijo, height ~72px, transparente → al scrollear fondo --carbon + borde inferior --linea (sin blur pesado). Links `MÉTODO · PORTFOLIO · CONTACTO` Mono uppercase 13px taupe, hover = barrido subrayado rojo scaleX 0→1 0.4s power2.out. Link activo en crema (no rojo permanente — presupuesto). Sin hamburguesa.
- **768:** inline (3 links cortos en mono entran). Sin hamburguesa.
- **375:** hamburguesa → overlay full-screen carbón (no drawer). Links Monument grande (~2rem) apilados, alineación izquierda al margen-cuaderno, índice mono N°01-03 a la izquierda de cada uno. Cierre [X] mono arriba derecha. Entra con máscara carbón desde arriba (consistente page transitions). reduced-motion: sin slide. Decisión mobile-propia (pantalla de declaración, no nav colapsado).

## 9. CTA — barra dual y cierre (C5)
- **375:** barra fixed bottom 100% ancho, alto 56px, aparece (slide-up+fade) tras scrollear hero (no tapa hero al cargar). reduced-motion sin slide. 60/40: WhatsApp (60%, fondo rojo, crema, Messina 600 16px, ícono — primario, instancia rojo) + "Dejá tus datos" (40%, outline crema 7%, ancla form footer). body padding-bottom 72px. Pulgar-alcanzable. Footer: CTA grande Monument HABLEMOS + sub mono `WHATSAPP · O DEJÁ TUS DATOS ↓` + form (nombre/negocio/WhatsApp).
- **768:** barra pasa a flotante bottom-right (par de botones ~56px con margen, no full-width tosca). Aparece tras hero.
- **1280:** sin sticky. CTA en link CONTACTO nav (barrido rojo) + sección CTA/footer HABLEMOS Monument gigante (col 1-8) + form (col 9-12) sobre --carbon-elev. Botón form fondo rojo (instancia rojo). Hover R7: no salta, transición relleno/subrayado 0.13-0.4s.

## 10. PORTFOLIO — interacción por viewport (peso comercial, puntos 4+5)
4 proyectos REALES en client/public/images/: portfolio-jamon-casero.webp, portfolio-menius-real.webp, portfolio-healthy-choice-real.webp, portfolio-arriba-gold-real.webp. Lista editorial de nombres gigantes Monument, NO grid de cards. SIN testimonios/métricas inventadas (C4). Jerarquía ≤3: N1 nombre activo (Monument grande), N2 imagen real revelada, N3 ficha mono (N°/cat/año); inactivos a taupe (textura, un foco).
- **1280:** reposo 4 nombres apilados (Monument 400 ~96px) col 1-9 izquierda, con número+categoría mono, todos crema, sobre --carbon-elev. Hover fila: nombre→rojo + barrido subrayado scaleX 0.4s; otros 3→taupe; imagen real col 9-12 aspect 4/5 clip-path inset(100% 0 0 0)→0 0.7s expo.out; franja roja col 9 al alto de imagen activa. Cambio fila: GSAP Flip 0.6s expo.inOut (transforma, no reaparece). Click: Flip nombre→página caso (máscara carbón). reduced-motion: color instantáneo + imagen visible.
- **768:** touch, no hover. Imágenes visibles: nombre Monument col 1-4 + imagen real col 5-6 aspect 3/4 siempre visible. Scroll-reveal clip-path 0.7s expo.out (ScrollTrigger). Tap→página caso (Flip). Col 6 enciende rojo en alto de fila.
- **375:** scroll-reveal, imagen siempre visible. Fichas apiladas: número+categoría mono → nombre Monument (~30px una línea; HEALTHY CHOICE NY rompe 2 líneas leading 0.95) → imagen real aspect 4/5 full-width SIEMPRE visible → `↓ VER CASO` mono. Quiebre regla horizontal entre fichas. Scroll-reveal clip-path 0.7s. Tap→Flip caso. reduced-motion: imágenes visibles sin clip-path.
Aspect ratios: mobile 4/5, tablet 3/4, desktop 4/5 (col 9-12).

## 11. ANTI-OVERFLOW MOBILE (C7)
1. html,body overflow-x: clip (no hidden, no rompe sticky).
2. box-sizing border-box global.
3. contenedores max-width 100%, grid minmax(0,1fr) (el 0 no auto — causa #1 overflow).
4. Monument mobile dimensionado para no exceder col a 48.75px; red hyphens auto + overflow-wrap anywhere + text-wrap balance (no debe activarse, "genérico" descartado).
5. HEALTHY CHOICE NY controlado a 2 líneas.
6. Imágenes width 100% height auto display block + aspect-ratio (no empujan ancho).
7. Mono +0.04em: verificar fila índice entra a 11px en 375; si roza borde, parte 2 filas (no reduce font).
8. Sticky/overlay width 100% con inset 0, NO 100vw (incluye scrollbar = overflow).
9. Padding lateral con --margin (~20px mobile), nunca left fijo > viewport.

## 12. PREMIUM SIN DESKTOP REDUCIDO — decisiones mobile-propias (C9/P10)
1. Lomo-cuaderno (1 línea de anclaje, elemento nuevo). 2. Rojo rotado horizontal (geometría nueva, mismo concepto). 3. Portfolio imagen siempre visible (decisión comercial C1/C6, no escalado). 4. Nav overlay-declaración (no drawer). 5. CTA dual sticky WhatsApp (conversión mobile LATAM C7, no existe en desktop). 6. Densidades recalculadas para scroll de pulgar. Paridad de marca asegurada (misma bicromía/rojo/3 fuentes/grain/índices/alineación/motion). Distinto layout, misma marca (C9).

## 13. MOTION — dirección por viewport
Hero: líneas grilla primero (scaleY 0→1 1.1s expo.out) → texto las habita (character reveal yPercent+scale expo.out 0.9s stagger 0.03s) → palabra roja delay 0.25s. Mobile: esqueleto = lomo-cuaderno se dibuja primero. Scroll: Lenis lerp 0.07 (desktop/tablet), 0.1 mobile si dropea frames (C8). Portfolio: desktop hover clip-path+Flip, mobile/tablet scroll-reveal clip-path. Hover R7: barrido rojo scaleX 0.4s power2.out, nada salta/lineal/>1.2s. Page transitions: máscara carbón + Flip título (consistente 3 viewports). reduced-motion: estático, grilla fija, texto+rojo+grain presentes, imágenes sin clip-path, hover color instantáneo.

## 14. RIESGOS DE VERSE GENÉRICO
1. Grilla 7%→wireframe: solo 3 líneas cuartos, 1px pelo, sin marcas, borde perceptible. Fallback col 6+9 antes de subir opacidad.
2. Índices mono→cliché "01 02 03": ficha técnica estática blueprint, categorías reales, nunca contador grande animado.
3. Nombres gigantes→"menú restaurante": número+categoría+columna activada+imagen real+hover/Flip lo vuelven índice de estudio. Hover/Flip lo despega.
4. Hero izquierda+palabra roja→"otra brutalista negra": grain material + crema (no blanco) + Monument editorial + 3 fuentes + copy 2da persona específico. Copy es la diferenciación (C3/R9).
5. Rojo sticky WhatsApp→cliché FAB: integrado al sistema (60/40, Messina, coreografiado), no FAB redondo. UI del sistema.
6. Bicromía negra→"barato/vacío" (error previo): grilla visible + índices + grain 0.06 + carbón-elevado + densidad por ritmo. Carbón con esqueleto, metadata, material.

## 15. RESPUESTA A LOS 5 PUNTOS DEL CRITIC
1. Grilla 7%: §4, 3 líneas cuartos 1px sin marcas, fallback definido, mobile lomo-cuaderno.
2. Densidad hero mobile: §3, 100svh, H1 42%, índice arriba (no apretado), aire inferior>superior, subhead --space-l.
3. Grain invisible: §2, subido a 0.06 + doble capa (grain+velo luminancia), grano físico constante, fallback 0.08.
4. No-competencia niveles: §3/§10, mecanismo = diferencia de contraste (H1 14:1 vs grilla 7% vs mono taupe); portfolio inactivos a taupe; ≤3 tabulado.
5. Franja roja col 9: §7, guía col 9 ENCENDIDA rojo (mismo eje 2px), tramo alineado a contenido (no recorre todo, no flota). Tablet col 6, mobile regla horizontal anclada al lomo.
