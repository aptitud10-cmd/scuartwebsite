# Art Direction — MOTION V4 · SCUART
## La capa de movimiento coreografiado + portfolio a escala real

**Fecha:** 2026-06-17
**Director:** director-creativo (Opus 4.8)
**Cliente:** SCUART (sitio propio — agencia digital, William Cuartas, Bogotá)
**Branch:** redesign-v3
**Estado:** PROPUESTA — requiere OK de William ANTES de codear nada (William lee, no el dev)

**Construye ENCIMA de (no contradice):**
- `ART_DIRECTION_V4_RESTRINGIDO.md` — sistema de color/tipografía vigente y aprobado
- `DESIGN_RESEARCH_MOTION_LOCOMOTIVE.md` — insumo principal, 9 gestos verificados jun 2026

**Lo que este documento NO toca:** la tipografía (PP Editorial New + Geist Sans), el color V4 (negro `#0E0E0C` + hueso `#F2EFE9` + un único acento lima `#C6F24E` <8%), la composición del hero, el copy. Define **UNA capa nueva**: el motion sección por sección + el rediseño del portfolio a imágenes grandes.

---

## 0. La tesis del motion (qué problema resuelve esta capa)

William diagnosticó dos faltantes con precisión:
1. **Falta motion coreografiado** — hoy el cuerpo tiene reveals básicos de IntersectionObserver, pero el scroll no tiene peso, los titulares no se construyen, no hay la "mantequilla" que hace que un sitio plain-text se sienta premium.
2. **El portfolio se siente "susurrado"** — imágenes inline chiquititas que invitan a ignorar el trabajo. El research es categórico (Gesto 7, Parte 3 Principio 5): *si el trabajo es bueno, mostrálo grande; si lo escondés en un thumbnail, parece que tenés vergüenza.*

**La tesis:** el movimiento es la prueba del lema. SCUART dice *"We don't decorate. We decide."* El motion no decora — **decide qué merece atención y cuándo.** Locomotive no anima todo; anima 3-4 cosas por pantalla, con peso, y deja el resto quieto. Eso es criterio en movimiento. Un sitio que anima cada elemento es el equivalente cinético de pintar 4 paredes de color: inseguridad, no dirección.

**El principio rector que atraviesa TODO este spec — RESTRAINT (§ D):** máximo **2 gestos protagonistas por sección**. El resto del contenido entra estático o con un fade mínimo. Si una sección tiene 4 cosas moviéndose a la vez, está mal.

---

## 1. El stack de motion (qué se agrega, qué ya está)

> Todo verificado en el research (Parte 4). Nada inventado.

| Capa | Librería | Estado | Dónde corre |
|---|---|---|---|
| Smooth scroll con inercia | **Lenis 1.3.23** | A AGREGAR | **Solo desktop** (≥769px). En mobile se APAGA (§ C) |
| Reveals de texto por línea | **GSAP SplitText** (gratis desde abril 2025) | A AGREGAR | Desktop con GSAP; mobile degrada a IO fade |
| Scrub / parallax / pin | **GSAP ScrollTrigger** | YA INSTALADO (lo usa el method hoy) | Desktop; parte se apaga en mobile |
| Timeline de entrada | **GSAP core** | YA INSTALADO (lo usa el hero hoy) | Ambos (es entrada, no scroll) |
| Reveals simples de fila | **IntersectionObserver** (nativo) | YA EN USO (portfolio, capabilities) | **Ambos** — es el fallback universal |
| Cursor custom | GSAP `quickTo` | **NO en MVP** (ver § decisiones) | — |

**Regla de integración Lenis + GSAP (research Parte 4.1):** Lenis se sincroniza con el ticker de GSAP (`lenis.on('scroll', ScrollTrigger.update)` + `gsap.ticker.add(...)` + `lagSmoothing(0)`). Esto es estándar y verificado. **No** se usa `ScrollSmoother` de GSAP (redundante con Lenis).

**Costo total de esta capa:** Lenis pesa 9.4 kB gzip. SplitText es parte del bundle GSAP ya presente. El riesgo real para Lighthouse no es el peso — es el JS de scroll corriendo en cada frame. Por eso Lenis se apaga en mobile (donde está el gama-baja LATAM y donde el iOS lo limita a 60/30fps de todos modos). **En desktop el target Performance ≥90 se sostiene porque GSAP/Lenis corren en el main thread pero las animaciones de transform/opacity son GPU-compuestas.**

---

## A) MOTION — sección por sección

> Notación de cada gesto: **qué entra → cuándo dispara → timing/easing → librería → costo/riesgo.**
> Todos los timings salen de la tabla del research (Parte 1.4). Cuando propongo algo no observado en Locomotive, lo marco **[propuesta SCUART]**.

### A.0 — Global: smooth scroll (Gesto 3 del research)

- **Qué entra:** Todo el documento scrollea con inercia/momentum en desktop. El scroll no para en seco; decelera con ease-out natural.
- **Cuándo:** Desde que carga la página (después de la secuencia del hero, ver A.1).
- **Timing:** Lenis default (`lerp` ~0.1, `duration` ~1.2s de asentamiento). Es el "scroll de mantequilla" del research.
- **Librería:** Lenis 1.3.23, sincronizado al ticker de GSAP.
- **Costo/riesgo:** Bajo en desktop. **CRÍTICO en mobile → se apaga (§ C).** Riesgo conocido (research 4.1): conflicto con Astro ClientRouter si se usaran View Transitions de página — pero este sitio es one-page con anclas, no multi-página, así que el riesgo no aplica. Las anclas `#portfolio`, `#method`, `#contact` del nav deben rutearse por `lenis.scrollTo(target)` en desktop para que el salto también tenga inercia.
- **Por qué:** Es el 80% del "se siente premium" según el research. Eleva incluso una sección de puro texto. Es el gesto más barato en impacto/esfuerzo.

---

### A.1 — HERO (`HeroSection.astro`)

**Estado:** ya tiene una timeline GSAP buena. **Se CONSERVA casi intacta** — es el ancla del sitio y V4 lo protege. Solo se documentan ajustes menores de coordinación, NO un rediseño del hero.

**Gesto protagonista 1 — Secuencia de entrada orquestada (Gesto 6 del research).** Ya implementada y correcta:

| Tiempo | Evento | Timing/easing | Estado |
|---|---|---|---|
| 0ms | Todo invisible | — | OK |
| 0→1.6s | Video/fallback: `scale 1.06→1` + opacity | 1.6s `expo.out` | OK (conservar) |
| 0.25→0.85s | Nav: fade + `y -8→0` | 0.6s `power3.out` | OK (conservar) |
| 0.45s+ | Wordmark: line-reveal por máscara `yPercent 110→0`, stagger 0.12s | 1.1s `expo.out` | OK (conservar) |
| ~2.4s | Scroll cue: loop sutil sine | infinito | OK (conservar) |

**Ajuste menor de coordinación (no es rediseño):** cuando se active Lenis, el scroll debe permanecer **bloqueado durante la secuencia de entrada** (`lenis.stop()`) y desbloquearse al terminar la timeline (~2.4s) con `lenis.start()`. Esto reproduce el patrón del research ("scroll desbloqueado a 2.4s+"). Sin esto, un usuario que scrollea apenas carga rompe la coreografía.

**Gesto protagonista 2 — [propuesta SCUART, no observado tal cual en Locomotive] Parallax de salida del hero.** El video del hero se desplaza más lento que el scroll al salir (yPercent ~ -8 a -12 entre `top top` y `bottom top`), creando profundidad en la transición hero→manifiesto. **Refuerza la transición V4 §4.5** ("se apagan las luces y queda la sala"). Costo bajo (1 ScrollTrigger scrub). **Riesgo:** con `mix-blend-mode: difference` activo en el hero, mover el video puede cambiar sutilmente el color del texto al salir — hay que verificar que no titile. Si titila, se descarta sin costo. Desktop solo.

**Lo que NO se mueve en el hero:** el recuadro de disciplinas DIS/DEV/AI (es estructura, no protagonista), el asterisco, el `®`. Quietos.

---

### A.2 — MANIFIESTO (`ManifestoSection.astro`)

**Es el "primer susurro" tras el grito del hero (V4 §4.5).** El motion acá tiene que ser deliberado y silencioso — es el momento de máxima contención del sitio.

**Gesto protagonista único — Mask reveal por línea (Gesto 5 del research).** Hoy ya existe una versión CSS/IO casera (line-mask + line-inner). **Se UPGRADEA a SplitText** para que el quiebre por línea sea real y responsive (`autoSplit`), en vez de líneas pre-marcadas a mano.

- **Qué entra:** Las 2 líneas del statement ("We don't build websites." / "We build *competitive advantages*.") se revelan línea por línea desde abajo, cada una dentro de su máscara `overflow: hidden`.
- **Cuándo:** ScrollTrigger al **80% del viewport** (`start: 'top 80%'`), una sola vez.
- **Timing:** `yPercent 105→0`, **0.9s**, `expo.out`, **stagger 0.12s** entre líneas (display = stagger más lento y contundente, según research 6.4).
- **Librería:** GSAP SplitText `type: 'lines'`, `mask: 'lines'` (crea el overflow:hidden solo) + ScrollTrigger.
- **El kicker** ("N°·01 / MANIFESTO") entra antes, con un fade simple 0.4s `power2.out`, sin máscara. No compite.
- **Costo/riesgo:** Bajo. SplitText sobre 2 líneas es trivial. **El acento de énfasis es itálica** (decisión V4 §4.2.1), no color — el énfasis NO se anima distinto, sube con su línea.
- **Mobile:** degrada a la versión IO actual (fade-up de las líneas, sin SplitText). Ver § C.

**Lo que NO se mueve:** nada más. El manifiesto es una sola frase que se construye y se queda quieta. Cero parallax, cero color en movimiento. **Este es el ejemplo canónico de restraint del sitio.**

---

### A.3 — CAPABILITIES (`CapabilitiesSection.astro`)

Lista editorial de 6 servicios con numerales fantasma gigantes. Hoy: IO fade-up con stagger 80ms. **Se conserva el esqueleto, se afina.**

**Gesto protagonista 1 — Reveal de filas con stagger (ya existe, se mantiene).**
- **Qué entra:** Cada fila (numeral + nombre + resolves) sube con fade-up.
- **Cuándo:** IO al entrar (`threshold 0.08`).
- **Timing:** `opacity 0→1` + `translateY 20→0`, **0.7s**, `cubic-bezier(0.16,1,0.3,1)` (ease expo-like), **stagger 0.08s** por fila.
- **Librería:** IntersectionObserver + CSS transition (NO necesita GSAP — es simple y barato). Funciona idéntico en mobile.
- **Costo/riesgo:** Nulo, ya está probado.

**Gesto protagonista 2 — [propuesta SCUART] Parallax sutil del numeral fantasma.** Los numerales gigantes (01–06, hueso 18%) se desplazan a velocidad ligeramente distinta del scroll (`yPercent ~ -6`, scrub) — el numeral "flota" detrás del nombre. Refuerza la profundidad editorial (research Parte 3, Principio 4: contraste de escala como estructura).
- **Cuándo:** scrub entre entry/exit de cada fila.
- **Librería:** ScrollTrigger scrub. **Desktop solo** (`min-width 769px`), se apaga en mobile.
- **Costo/riesgo:** Bajo, pero **es el primer candidato a cortar** si Lighthouse sufre. El numeral fantasma quieto ya se ve bien. Es lujo, no necesidad.

**Hover desktop (ya existe, se mantiene):** al hover de una fila, las demás filas bajan a `opacity 0.4` (`:has()` CSS). Micro-interacción, 0.2s. El color NO entra acá (el research y V4 reservan el lima para portfolio hover, CTA, foco). 

**Lo que NO se mueve:** los nombres de servicio (quietos, son el contenido), los resolves. Solo entran una vez y se quedan.

---

### A.4 — PORTFOLIO (`PortfolioSection.astro`) — **ver sección B completa**

Esta es la pieza central del encargo. El motion del portfolio está especificado en detalle en **§ B (Portfolio rediseñado)** porque el motion y la composición son inseparables acá. Resumen de gestos:
- **Clip-path reveal** de cada imagen al entrar (Gesto 7).
- **Parallax interno** de la imagen en scroll (Gesto 4).
- **Hover scale 1.04** + el nombre pasa a lima (Gesto 7 + V4 §4.2).

---

### A.5 — METHOD (`MethodSection.astro`)

Ya tiene el gesto más ambicioso del sitio: el **pin de la columna de numerales** con ScrollTrigger en desktop. **Se conserva** — es correcto y está alineado con el research (es un scroll-driven storytelling contenido).

**Gesto protagonista 1 — Pin de numerales + activación por paso (ya existe).**
- **Qué entra:** En desktop (≥1280px), la columna de numerales (001–004) queda fija mientras los pasos scrollean a la derecha. El numeral del paso activo pasa a **lima** (`--brand`); los inactivos quedan en hueso 18%.
- **Cuándo:** ScrollTrigger pin desde `top top+=100px`; cada paso activa su numeral en `top center`.
- **Timing:** El cambio de color del numeral es `0.4s ease` (ya está). El pin es scrub puro (sigue el scroll 1:1).
- **Librería:** GSAP ScrollTrigger (ya implementado).
- **Costo/riesgo:** Medio — el pin es lo más caro del sitio en desktop, pero ya funciona. **El color en movimiento (numeral→lima) es uno de los pocos momentos donde el acento aparece animándose** — exactamente lo que V4 §5 quiere ("el acento muchas veces aparece animándose, más memorable usándose poco").
- **Mobile/tablet (<1280px):** sin pin. Cada paso entra con fade + `y 16→0`, 0.7s `expo.out`, una vez (ya está). Esto se conserva — funciona con scroll nativo.

**Gesto protagonista 2 — [propuesta SCUART] Reveal del título de cada paso por línea.** Los títulos (DISCOVER, DIRECTION, SYSTEM, LAUNCH) son PP Editorial New gigante — merecen mask reveal como el manifiesto, en vez de subir con el bloque entero. SplitText `type: 'lines'`, `yPercent 105→0`, 0.8s `expo.out`, dispara cuando el paso entra a zona central.
- **Costo/riesgo:** Bajo. **Pero atención al budget:** en desktop el method ya tiene el pin + el cambio de color. Agregar mask reveal a los títulos suma un tercer gesto → roza el límite de restraint. **Recomendación: en desktop, el título sube con el paso (fade simple); el mask reveal por línea se reserva para mobile/tablet** donde no hay pin y el título necesita más presencia. Así cada viewport tiene exactamente 2 gestos, no 3.

**Lo que NO se mueve:** las listas de capabilities de cada paso, los labels mono, las hairlines. Entran con su bloque, quietos.

---

### A.6 — CONTACT (`ContactSection.astro`)

Es el clímax — el único bloque sólido de color del sitio (CTA lima). El motion acá tiene que sentirse como una llegada, no como otra sección más.

**Gesto protagonista 1 — Mask reveal del statement de cierre.** "LET'S / BUILD / SOMETHING." (3 líneas, PP Editorial New gigante) se revela línea por línea.
- **Cuándo:** ScrollTrigger `top 80%`, una vez.
- **Timing:** `yPercent 105→0`, 0.9s `expo.out`, stagger 0.12s. Mismo lenguaje que el manifiesto — cierra el arco que abrió.
- **Librería:** SplitText `type: 'lines'` + ScrollTrigger.
- **Mobile:** degrada a IO fade-up del bloque entero.

**Gesto protagonista 2 — El CTA lima es lo último que "aparece".** [propuesta SCUART] Cuando el formulario entra al viewport, los campos hacen un fade-up muy sutil con stagger pequeño (IO, 0.5s, stagger 0.05s), y el **botón lima entra último**, como el punto final de la frase. El lima es el único color sólido del sitio → su entrada debe sentirse ganada.
- **Costo/riesgo:** Bajo (IO + CSS). El statement sticky en desktop ya existe y se conserva.
- **El foco de los inputs** ya cambia la línea inferior a lima (`--brand`) — eso es micro-interacción funcional, se mantiene (V4: color = interacción).

**Lo que NO se mueve:** el subcopy, los labels, el bloque WhatsApp/email. El form es funcional — cero animación que estorbe completarlo. **Regla dura: nada se mueve mientras el usuario escribe.**

---

### A.7 — FOOTER (`FooterSection.astro`)

Cierre de marca. El wordmark "SCUART*" a sangre con el asterisco lima.

**Gesto protagonista único — Fade-up del wordmark (ya existe).**
- **Qué entra:** El wordmark gigante sube con fade al entrar al viewport (IO).
- **Timing:** fade-up sutil, ~0.6s `expo.out`.
- **Librería:** IntersectionObserver (ya está). Funciona en ambos viewports.
- **[propuesta SCUART, opcional, bajo] El asterisco lima** puede tener un micro-pulso de opacidad/escala una sola vez al entrar (no loop — un solo latido), firmando el cierre. Es el último píxel de color del sitio. Si parece truco, se quita.

**Lo que NO se mueve:** el nav del footer, el selector de idioma, los créditos. Quietos. El footer es descanso.

---

### Tabla resumen — gestos por sección (presupuesto de restraint)

| Sección | Gesto 1 (protagonista) | Gesto 2 (protagonista) | Librería | Mobile |
|---|---|---|---|---|
| Global | Smooth scroll inercia | — | Lenis | **OFF** (nativo) |
| Hero | Secuencia de entrada (existe) | Parallax de salida del video [prop.] | GSAP timeline + ST | entrada SÍ / parallax OFF |
| Manifiesto | Mask reveal por línea | — | SplitText + ST | IO fade |
| Capabilities | Fade-up filas stagger (existe) | Parallax numeral fantasma [prop.] | IO + ST | fade SÍ / parallax OFF |
| Portfolio | Clip-path reveal imagen | Parallax interno + hover (§B) | ST + IO | reveal SÍ / parallax OFF |
| Method | Pin de numerales (existe) | Mask reveal título (solo mobile) | ScrollTrigger | pin OFF → fade SÍ |
| Contact | Mask reveal statement | CTA entra último [prop.] | SplitText + IO | IO fade |
| Footer | Fade-up wordmark (existe) | Pulso asterisco [prop., opcional] | IO | igual |

Ninguna sección supera 2 gestos por viewport. Cumple restraint.

---

## B) PORTFOLIO REDISEÑADO — imágenes grandes (la pieza central)

### B.0 — El problema concreto a resolver

El portfolio actual es un **índice tipográfico**: 4 nombres gigantes centrados, con la imagen incrustada *inline dentro del nombre* en hover (640×360 chiquita), y en mobile/tablet un thumbnail 16:9 a 640px máx. El research lo llama directamente el problema (Gesto 7): *"las imágenes inline pequeñas no revelan nada, invitan al usuario a ignorar el trabajo."*

Los 4 proyectos son reales y buenos (Jamón Casero, Menius, Healthy Choice NY, Arriba Gold) y **ya tienen imágenes** en `/public/images/`. No hay páginas de caso todavía → **las filas NO son links** (regla dura, se mantiene). El rediseño tiene que hacer el trabajo grande sin inventar navegación que no existe.

### B.1 — La nueva composición: **stack editorial alternado a escala real**

Elijo el patrón **stack vertical alternado izquierda/derecha** (no grid, no carrusel), por tres razones:
1. **Honra el research** (Parte 3, Principio 3: asimetría medible; Parte 1.3 Gesto 7: imágenes mín 45% viewport width). El alternado crea la tensión visual editorial que un grid simétrico mata.
2. **Solo son 4 proyectos.** Un grid de 4 se ve pobre/vacío; un grid pide 6-9+. Un stack alternado de 4 se ve deliberado y curado — "museo de 4 piezas", que es exactamente el espíritu que el comentario del archivo actual ya buscaba.
3. **Funciona sin páginas de caso.** Cada proyecto es un bloque autocontenido (imagen + nombre + meta), no una card que promete un click que no existe.

**Anatomía de un proyecto (desktop ≥1024px):**

```
  ┌─────────────────────────────────────────────────────────┐
  │  001                                      WEB · GASTRO 2017│  ← ficha mono, ancho completo
  │                                                            │
  │   ┌───────────────────────────┐                           │
  │   │                           │   JAMÓN                    │  ← nombre PP Editorial gigante,
  │   │      IMAGEN ~52vw         │   CASERO                   │     al lado de la imagen, no encima
  │   │      (clip-path reveal)   │                            │
  │   │      parallax interno     │   ↓ (no es link)           │
  │   └───────────────────────────┘                           │
  └─────────────────────────────────────────────────────────┘

  Proyecto 002 (MENIUS): imagen a la DERECHA, nombre a la IZQUIERDA (alternado)
  Proyecto 003: imagen izquierda. Proyecto 004: imagen derecha.
```

- **Imagen:** ancho **~50–55vw** en desktop (cumple "mín 45%" del research con margen). Aspect ratio **4:3 o 3:2** (más editorial que el 16:9 actual, que se siente "thumbnail de video"). Dentro de un wrapper `overflow: hidden` para el clip-path reveal y el parallax interno.
- **Nombre:** PP Editorial New light, **a un costado de la imagen** (no centrado, no encima). Tamaño grande pero subordinado a la imagen — la imagen es la protagonista, el nombre la acompaña. `clamp(3rem, 6vw, 6rem)`.
- **Ficha mono:** el numeral (001) arriba-izquierda, categoría·año arriba-derecha del bloque, ancho completo, hairline. Geist mono 12–13px, hueso 62%. (Se conserva del diseño actual — es buen detalle editorial.)
- **Alternancia:** proyectos impares imagen-izquierda/nombre-derecha; pares al revés. Esto es la asimetría medible del research.
- **Espacio entre proyectos:** generoso — 15–20% de viewport de aire vertical (research Parte 3, Principio 2). Los proyectos respiran, no se apilan apretados.

**Por qué se abandona el truco "imagen inline en el nombre":** era ingenioso pero servía al portfolio susurrado — mantenía la imagen escondida hasta el hover y diminuta. El research pide lo contrario: imagen grande, **siempre visible**, que obligue a la atención. El truco inline se retira.

### B.2 — Motion del portfolio

**Gesto 1 — Clip-path reveal de la imagen al entrar (Gesto 7 del research).**
- **Qué:** Cuando el bloque del proyecto entra al viewport, la imagen se "descubre" con un `clip-path` que se abre (de `inset(100% 0 0 0)` a `inset(0)` — revela de abajo hacia arriba, o desde un lado según la alternancia).
- **Cuándo:** ScrollTrigger `top 80%`, una vez por imagen.
- **Timing:** **0.8–1.0s**, `power3.out` (research Parte 1.4: "imágenes reveal clip-path, 0.8–1.0s, power3.out").
- **Librería:** GSAP ScrollTrigger. Mobile: degrada a IO + CSS fade-up de la imagen (sin clip-path complejo).
- **Costo/riesgo:** Bajo-medio. `clip-path` anima en GPU. Bonito y barato.

**Gesto 2 — Parallax interno de la imagen (Gesto 4 del research).**
- **Qué:** La imagen mide **height 115%** dentro de su wrapper `overflow:hidden` y se desplaza `yPercent -15` mientras el bloque cruza el viewport. La imagen "respira", se siente tridimensional.
- **Cuándo:** scrub entre `top bottom` y `bottom top` del wrapper.
- **Timing:** `ease: 'none'` (lineal — SIEMPRE en scrub, research 1.4), scrub `true`.
- **Librería:** GSAP ScrollTrigger. **Desktop solo** — en mobile se apaga (research 4.4: "en mobile la ganancia no justifica el costo"). La imagen mobile va con `height auto`, estática.
- **Costo/riesgo:** Bajo en desktop. Es el gesto que más "Locomotive" se siente en el portfolio.

**Gesto 3 — Hover (Gesto 7 + V4 §4.2).**
- **Qué:** Al hover del bloque (desktop, `hover: hover`): (a) la imagen interna hace `scale 1.04`, el wrapper queda estático; (b) el **nombre del proyecto pasa de hueso a lima** (`--brand`).
- **Timing:** scale `0.4s ease-out`; color del nombre `0.28s ease` (ya está en el código actual).
- **Librería:** CSS puro (transition). Sin JS.
- **Costo/riesgo:** Nulo. **Este es uno de los pocos lugares donde el lima aparece** — color en movimiento, en interacción, exactamente como manda V4. No hay cursor "View" porque no hay caso al que ir (no inventamos navegación).
- **No-hover (touch):** sin scale, sin cambio de color permanente. La imagen ya está grande y visible — no necesita el hover para revelarse.

**Lo que NO se mueve en el portfolio:** la ficha mono (numeral, categoría) — quieta, es metadato. El nombre, salvo en hover. Nada de las imágenes pulsa o se mueve solo en reposo. Dos gestos pasivos (reveal + parallax) + uno de interacción (hover) = dentro del budget.

### B.3 — Color en el portfolio (respeta V4)

- Fondo: **negro `--bg`** (todo oscuro de punta a punta, V4 §4.1). Las imágenes a **color pleno, sin blend** (V4 §7 excepción: las fotos se ven reales).
- Único color de marca: el **nombre en hover → lima**. Nada más.
- Hairlines de la ficha en `--hairline` (hueso 16%).
- **Test V4 §4.2:** una screenshot del portfolio en reposo debe verse "negra con imágenes y texto hueso"; el lima aparece solo al pasar el mouse. Cumple.

---

## C) MOBILE — qué corre y qué se apaga

> Las directivas globales de William son ley: **safe-area insets** (`viewport-fit=cover`) + **body-scroll-container** (en `≤768px` el scroller es `<body>`, no el root, para matar el "scroll eterno" de iOS). El research (Parte 4.2) confirma el conflicto directo con Lenis y la solución.

### C.1 — Lenis se APAGA en mobile (Estrategia A del research, recomendada)

```
const isMobile = window.matchMedia('(max-width: 768px)').matches
// Lenis solo se instancia si NO es mobile
```

- En mobile: **scroll nativo del browser** (que en iOS ya es suave). Lenis a 60fps (30 en bajo consumo) en Safari no aporta valor real y pelea con el body-scroll-container.
- **Implicación para los ajustes JS de las directivas globales:** como el scroll mobile vive en `document.body` (no en `window`), cualquier lógica de scroll en mobile debe leer `document.body.scrollTop` y scrollear con `document.body.scrollTo(...)`. ScrollTrigger usa el viewport (IntersectionObserver interno) y **no se toca** — sigue funcionando con scroll nativo. Las anclas del nav en mobile usan scroll nativo a `#id`, no `lenis.scrollTo`.

### C.2 — Qué motion SÍ corre en mobile

| Gesto | Mobile | Cómo |
|---|---|---|
| Hero: secuencia de entrada | **SÍ** | Es entrada (timeline GSAP), no scroll. Funciona igual. |
| Manifiesto: reveal del statement | **SÍ (degradado)** | IO + CSS fade-up (sin SplitText). Ya existe la versión. |
| Capabilities: fade-up filas | **SÍ** | IO + CSS, idéntico a desktop. |
| Portfolio: reveal de imagen | **SÍ (degradado)** | IO + CSS fade-up de la imagen (sin clip-path scrub). |
| Method: reveal de pasos | **SÍ** | Fade + y por paso (ya existe, scroll nativo). |
| Method: mask reveal del título | **SÍ** | Acá sí (mobile no tiene pin, el título necesita presencia). |
| Contact: reveal statement + CTA | **SÍ (degradado)** | IO fade-up. |
| Footer: fade-up wordmark | **SÍ** | IO, igual. |

### C.3 — Qué se APAGA en mobile

| Gesto | Por qué se apaga |
|---|---|
| Smooth scroll Lenis | Conflicto con body-scroll-container + límite 60/30fps iOS + gama baja LATAM. |
| Parallax de salida del hero | Scrub costoso + interfiere con el blend. Ganancia nula en pantalla chica. |
| Parallax del numeral fantasma | Lujo. Research 4.4: no justifica el costo en mobile. |
| Parallax interno del portfolio | Research 4.4 explícito. Imagen mobile estática `height auto`. |
| Pin de numerales del method | El pin no aplica <1280px (ya está así). Degrada a stack con fade. |
| Hover (todos) | No hay hover en touch. La imagen ya está grande y visible sin él. |

**Regla:** todo lo que se apaga en mobile degrada a **estático visible** o a un **fade-up barato de IO** — nunca a "roto" o "vacío". El contenido es idéntico; solo cambia cuánto se mueve.

### C.4 — Portfolio en mobile (375px)

- **Stack vertical simple, una columna.** Sin alternancia izq/der (no hay ancho para eso). Orden: ficha mono → imagen full-width → nombre debajo.
- **Imagen full-width** (100% del ancho de columna, dentro del margen), aspect ratio 4:3 o 3:2, `height auto`, estática. **Grande de verdad** — ocupa casi todo el ancho de la pantalla, que es la versión mobile de "imagen grande" del research.
- **Nombre debajo de la imagen**, PP Editorial New, `clamp(2.5rem, 10vw, 3.5rem)`. Visible siempre (no hover).
- **Reveal:** IO fade-up de cada bloque, stagger pequeño. Sin parallax, sin clip-path scrub.
- Cumple safe-areas: el portfolio no tiene elementos fixed, pero el padding lateral usa `--margin` que ya respeta el viewport.

---

## D) JERARQUÍA DE RESTRAINT — qué es protagonista y qué no se mueve

> El principio que separa "dirigido" de "todo saltando". Locomotive no anima todo a la vez (research Parte 6.2: "no más de 4 tipos de gestos activos por página"; anti-patrón Parte 5: "animations on every element" = 2020-2023).

### D.1 — La regla de los 2 gestos

**Máximo 2 gestos protagonistas por sección, por viewport.** Ver tabla resumen de § A. Si al implementar una sección hay un tercer elemento queriendo moverse, **se queda quieto.**

### D.2 — Jerarquía de movimiento del sitio (de más a menos)

1. **Protagonista absoluto:** el hero (entrada orquestada de 2.4s). Es el único momento de coreografía multi-elemento. Nada más en el sitio se acerca a esa densidad.
2. **Protagonistas de scroll:** las imágenes del portfolio (reveal + parallax) y el pin del method. Son los momentos que el visitante recuerda.
3. **Apoyo silencioso:** los mask reveals de titulares (manifiesto, contact). Construyen el texto pero no gritan.
4. **Ambiente:** el smooth scroll global. No se "ve", se siente. Eleva todo sin pedir atención.
5. **Quietud (la mayoría del sitio):** body text, listas, fichas mono, labels, hairlines, el form. **Entran una vez y se quedan.** El 70% de los píxeles del sitio no se mueve nunca después de entrar.

### D.3 — Qué NUNCA se mueve (regla dura)

- El **body text** y los párrafos de lectura — entran con su bloque, nunca animados línea por línea (eso es solo para titulares display).
- Las **fichas mono** (numerales de proyecto, categorías, años, labels uppercase) — son metadato, quietos.
- El **formulario de contacto** mientras el usuario interactúa — cero movimiento que estorbe.
- Las **hairlines y bordes** — estructura, no espectáculo.
- **Nada hace loop infinito** salvo el scroll cue del hero (sine sutil) — y eso es el único.

### D.4 — prefers-reduced-motion (obligatorio, ya respetado en el código actual)

- **Todo degrada a estático visible.** Sin reveals, sin parallax, sin clip-path animado, sin smooth scroll (Lenis no se instancia), sin pin.
- El **color y la tipografía se mantienen** — son identidad, no motion. El lima del hover, del CTA, del foco, del numeral activo siguen presentes (no son animación, son estados).
- El hero muestra todo de inmediato (sin scale del video, sin line-reveal).
- **Implementación:** cada sección ya tiene su bloque `@media (prefers-reduced-motion: reduce)`. Lenis y SplitText se gatean con `matchMedia('(prefers-reduced-motion: reduce)')` igual que el hero hoy.

### D.5 — Honestidad de costo (para Lighthouse ≥90)

| Gesto | Costo perf | Veredicto |
|---|---|---|
| Smooth scroll Lenis (desktop) | Bajo (transform GPU) | Mantener |
| Mask reveals SplitText | Bajo (entra una vez, se mata el ScrollTrigger) | Mantener |
| Clip-path reveal portfolio | Bajo (GPU, una vez) | Mantener |
| Parallax interno portfolio (desktop) | Bajo-medio (scrub continuo) | Mantener, vigilar |
| Pin del method (desktop) | Medio (lo más caro, pin layout) | Mantener (ya existe) |
| Parallax numeral fantasma | Bajo, pero es lujo | **Primer candidato a cortar si baja Lighthouse** |
| Parallax salida del hero | Bajo, riesgo con blend | Cortar si titila |
| Cursor custom | — | **Fuera del MVP** (decisión §E) |

**El plan de contingencia de perf** es claro: si Lighthouse desktop baja de 90, se cortan en orden los "lujos" (numeral parallax → hero parallax → reducir scrub del portfolio) antes de tocar los protagonistas. Mobile no corre ninguno de los caros, así que ahí el riesgo es mínimo.

---

## E) Decisiones que necesito que William apruebe

1. **Agregar Lenis (smooth scroll) en desktop, apagado en mobile.** Es el gesto de mayor impacto/esfuerzo. ¿OK agregar la dependencia (9.4 kB)?
2. **Rediseñar el portfolio a stack alternado izq/der con imágenes ~52vw** (abandonando el truco de imagen-inline-en-el-nombre). ¿OK el patrón de § B.1, o preferís stack vertical centrado grande sin alternancia?
3. **Aspect ratio de las imágenes del portfolio: 4:3 o 3:2** (más editorial que el 16:9 actual tipo-thumbnail). ¿Cuál? (Depende de cómo estén croppeadas las imágenes reales en `/public/images/` — hay que verificar antes de codear.)
4. **Method en desktop: título sube con el paso (fade), mask reveal solo en mobile** — para no pasar de 2 gestos sobre el pin. ¿OK, o querés el mask reveal también en desktop asumiendo 3 gestos ahí?
5. **Cursor custom: FUERA del MVP.** El research lo documenta (Gesto 8) pero: (a) no hay páginas de caso a las que el cursor diga "View", así que pierde la mitad de su función; (b) suma complejidad y un punto de fallo en a11y. Recomiendo dejarlo para una fase 2 cuando existan casos. ¿De acuerdo en no incluirlo ahora?
6. **Los 3 gestos [propuesta SCUART]** (parallax salida hero, parallax numeral fantasma, pulso del asterisco footer) son lujos marcados como cortables. ¿Los incluimos como "nice to have con permiso de cortar", o los dejamos fuera desde el inicio para máxima seguridad de perf?
7. **No tocamos el hero ni el color V4 ni la tipografía.** Confirmación de que esta capa es aditiva, no un nuevo rediseño. ¿De acuerdo?

---

## RESUMEN PARA WILLIAM (leé esto primero — qué va a SENTIR distinto el visitante)

1. **El scroll va a tener peso.** En computadora, la página ya no frena en seco: se desliza con inercia, como mantequilla. Hasta una sección de puro texto se va a sentir cara solo por cómo se mueve. (En celular se mantiene el scroll normal de siempre — es lo correcto para iPhone.)

2. **El portfolio deja de susurrar y empieza a gritar.** Las imágenes pasan de mini-thumbnails escondidos a piezas grandes (más de medio ancho de pantalla), alternadas izquierda/derecha como una revista de arquitectura. El trabajo se ve grande porque el trabajo es bueno.

3. **Cada imagen del portfolio "se descubre" al aparecer.** No están ahí desde el principio: se revelan con un barrido suave cuando subís hasta ellas, y se mueven un poco más lento que el scroll, dándoles profundidad. Respiran.

4. **Los titulares ya no aparecen — se construyen.** El manifiesto y el "LET'S BUILD SOMETHING" del contacto suben línea por línea desde abajo, como saliendo de debajo del suelo. Es deliberado, editorial. No es un fade genérico.

5. **El lima aparece poquísimo, y casi siempre moviéndose.** El nombre de un proyecto que se vuelve lima cuando pasás el mouse, el número del método que se enciende en lima al llegar a su paso, el botón lima del final. El color es una recompensa que el ojo encuentra, no una pared.

6. **El método sigue siendo el momento "wow" del scroll.** Los números gigantes quedan fijos mientras los pasos pasan al lado — eso ya estaba y se queda, está bien.

7. **Nada salta porque sí.** Máximo 2 cosas en movimiento por sección. El 70% de la página (textos, fichas, el formulario) entra una vez y se queda quieta. El movimiento decide qué merece atención — igual que el lema "no decoramos, decidimos".

8. **El hero no se toca.** La entrada de 2.4 segundos que ya tenés (el video que entra como telón, el nombre que sube con máscara) se queda igual. Solo se va a coordinar para que el scroll quede bloqueado esos 2.4s y no se rompa la coreografía.

9. **En celular se mueve menos, a propósito.** Apagamos lo caro (el scroll de mantequilla, los efectos de profundidad) porque pelean con los iPhone y con celulares de gama baja en Latinoamérica. Lo que queda son apariciones suaves al subir — rápido, fluido, sin trabar. El sitio se ve igual de bueno, solo con menos efectos.

10. **Si alguien tiene activado "reducir movimiento" en su sistema, todo queda quieto y perfectamente legible** — pero conserva tu color y tu tipografía. La identidad nunca depende de la animación.

**La decisión más grande que necesito de vos:** el portfolio grande alternado (punto 2). Lo demás es construir encima de lo que ya aprobaste. Decime si el portfolio va por ahí y arrancamos.
```
