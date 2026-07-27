# Design Research — Secciones SERVICIOS y PROCESO (SCUART)

**Fecha de investigación:** 2026-07-26
**Vertical:** Estudio de diseño + tecnología (agencia digital)
**Tipo de sitio:** Landing corporativa, secciones internas (no todo el sitio)
**Investigador:** investigador-tendencias
**Stack objetivo:** Astro + GSAP + SplitText + ScrollTrigger + Lenis

---

## Contexto del problema

La versión actual de SERVICIOS y PROCESO en scuart.com es "un larguero de texto plano sin movimiento". Se probó (y se rechazó):
- Agrandar tipografía sin más → sin wow.
- Numerales gigantes en zig-zag → sin movimiento, sin wow.

Lo que falta no es tamaño ni layout estático nuevo: falta **mecánica de interacción real ligada al scroll**, que es exactamente lo que separa a las agencias premiadas 2026 de un sitio corporativo genérico. La investigación confirma que **scroll-driven animation es el estándar de facto** en sitios premiados 2026, no un extra — pero la ejecución (qué se anima, cómo se sincroniza, con qué restraint) es lo que hace la diferencia entre "wow" y "ruido".

---

## Referencias verificadas (fetch directo, no solo descripción)

### 1. Trionn — trionn.com
**Honorable Mention Awwwards.** Stack: Next.js + GSAP + Three.js + Lenis + Web Audio. Analizado en profundidad vía [Codrops — "The Architecture Behind Trionn"](https://tympanus.net/codrops/2026/07/15/the-architecture-behind-trionn-coordinating-gsap-three-js-lenis-and-web-audio/) (artículo técnico, julio 2026).

Su sección de Servicios es "la secuencia scroll-driven más compleja del sitio":
- Un único `scrollProgressRef` (0–1) coordina **todo** simultáneamente: una secuencia de 371 frames WebP scrubbed por scroll, el headline "OUR SERVICES" que explota en partículas de glyphs individuales, 6 tarjetas de servicio moviéndose en trayectorias curvas, y una transición de paleta negro→blanco.
- Técnica de texto: cada carácter medido con Range API se convierte en su propio `<span>`, preservando la tipografía original, y se anima con ángulo/velocidad aleatorios cuando el scroll entra en la "zona de explosión" (`EXPLODE_START` / `EXPLODE_END`), controlado con `gsapTL.progress(explodeT)`.
- Lenis está enganchado directamente a `gsap.ticker` para que el smooth scroll nunca se desincronice de ScrollTrigger.
- Manejan `prefers-reduced-motion` reduciendo velocidad de animación (no eliminándola del todo): `prefersReducedMotion ? 0.0015 : 0.0042`.

Esto es referencia de **techo** (nivel WebGL pesado), no de lo que SCUART debería construir hoy — pero el patrón de "headline que se descompone en glyphs animados por scroll" es 100% replicable en GSAP puro sin Three.js.

### 2. MONOLOG — bymonolog.com
**Awwwards Site of the Day (7 julio 2026) + Typography Honors (junio 2026).** Fetch directo confirmado.

**Sección Servicios ("What we can help with"):** grid de 6 servicios en 2x3, iconografía + títulos, hover en íconos, colapsa a carrusel en mobile. Layout simple — el wow no está acá, está en el proceso.

**Sección Proceso ("Project Process")** — esta es la relevante:
- 3 pasos: "Uncover your story" → "Shape your digital presence" → "Send it into the world", numerados (Step 01/02/03).
- **Pinning**: cada paso queda fijo en pantalla mientras el scroll revela su contenido progresivamente (texto entra, luego CTA "See step X in action ↗" con link a video).
- La sensación es de **narración lineal**: el usuario no lee 3 párrafos seguidos, "vive" cada paso uno a la vez porque el scroll está atado al avance narrativo, no al desplazamiento libre de la página.

Esto es el patrón más cercano y factible a lo que SCUART necesita para PROCESO: pinning + reveal secuencial, sin necesitar imágenes de servicios.

### 3. By-Kin — by-kin.com
**Awwwards Site of the Day + Developer Award + FWA + CSS Design Awards.** Stack: Next.js + GSAP + Strapi (sin Three.js).

Descrito por la crítica como "masterclass in restraint": tipografía editorial confiada, smooth scroll con peso (weighted), transiciones que "nunca llaman la atención sobre sí mismas" pero hacen que todo el sitio se sienta como **una sola superficie continua**. El Developer Award es la señal técnica: el motion aguanta inspección cuadro por cuadro — nada de jank.

Esto es la referencia de **tono** más alineada a la identidad SCUART (editorial sobria, fondo hueso, sin gradientes chillones): demuestra que se puede ganar el award más técnico de Awwwards con GSAP puro y sin efectos ruidosos, apostando todo a timing y curvas de easing precisas.

### 4. Patrón "list hover con preview" (Locomotive-style)
Confirmado como patrón de categoría propia en Awwwards ([List image hover](https://www.awwwards.com/inspiration/list-image-hover), [Portfolio Hover Preview](https://www.awwwards.com/inspiration/portfolio-hover-preview-karma-digital-agency)): lista de texto (servicios, proyectos) donde al hacer hover sobre cada ítem aparece una imagen flotando cerca del cursor. Es el patrón "Locomotive" por antonomasia — pero **requiere imágenes**, que SCUART hoy no tiene para servicios.

---

## PARTE 1 — Mecánicas para sección de SERVICIOS

Ordenadas de más wow/factible a menos, con marca de si necesitan contenido visual.

### 1. Text-split reveal con stagger direccional al hacer scroll-into-view
**Qué hace:** cada servicio (título + descripción corta) entra en viewport con `SplitText` dividido en líneas o palabras; cada línea se anima con `y: 100% → 0` + `opacity 0 → 1` en stagger, la curva de scroll-trigger dispara el reveal cuando el ítem cruza un umbral (ej. 75% del viewport), no todo de una vez.
**Dónde se ve:** técnica base usada en Trionn (BlurTextReveal component) y estándar en la mayoría de sitios GSAP premiados 2026 ([GSAP Vault — Text Animations](https://gsapvault.com/blog/gsap-animation-examples)).
**Por qué genera wow:** convierte lectura pasiva en algo que se siente "vivo" sin depender de imágenes; el timing por ítem (no simultáneo) es lo que da sensación editorial en vez de "PowerPoint".
**Factibilidad GSAP+ScrollTrigger:** Alta. `SplitText` + `ScrollTrigger` con `stagger` y `ease: power3.out`. Cero dependencias extra.
**Contenido visual:** NO necesita imágenes. Solo tipografía + motion. **Vale mucho para SCUART hoy.**

### 2. Headline que se descompone en glyphs / partículas al entrar en la zona de scroll (versión ligera de Trionn, sin Three.js)
**Qué hace:** el título de sección ("SERVICIOS" o similar) se separa en caracteres individuales (`SplitText type: "chars"`), y en vez de explotar en trayectorias 3D como Trionn, cada glyph se desplaza en un arco 2D corto (translateX/Y + rotate) controlado por `scrollProgress`, luego se re-ensambla al fijar el título arriba de la lista.
**Dónde se ve:** Trionn (versión pesada con Three.js) — [Codrops, julio 2026](https://tympanus.net/codrops/2026/07/15/the-architecture-behind-trionn-coordinating-gsap-three-js-lenis-and-web-audio/). Adaptable a 2D puro.
**Por qué genera wow:** el título "se arma" frente al usuario en vez de aparecer estático — evento único de entrada a la sección que no se repite en el resto del sitio, marca el cambio de "capítulo".
**Factibilidad GSAP+ScrollTrigger:** Media-alta. Solo `SplitText` + GSAP timeline + `ScrollTrigger.scrub`. Nada de WebGL. Correr con `will-change: transform` en los spans y `prefers-reduced-motion` que reduce a un simple fade.
**Contenido visual:** NO necesita imágenes.

### 3. Pin + scrub de lista completa (la lista entera queda fija, los ítems se resaltan/oscurecen según scroll)
**Qué hace:** la sección de servicios se pinea (`ScrollTrigger.pin`) durante un tramo de scroll; mientras el usuario scrollea (sin que la página avance visualmente), el ítem activo de la lista se agranda / cambia de peso tipográfico / cambia de color de acento (lima `#c6f24e`), y el resto queda atenuado (opacidad baja). Al terminar el scroll del tramo, se despinea y la página continúa.
**Dónde se ve:** patrón "pin-and-scrub para explainers paso a paso" confirmado como estándar 2026 en agencias con ScrollTrigger ([GSAP Vault](https://gsapvault.com/blog/gsap-animation-examples), [tijocreative — GSAP Scroll Effects Guide](https://tijocreative.com/articles/gsap-animation-guide-scroll-effects-timelines-motion-for-web)).
**Por qué genera wow:** el usuario siente que "controla" el avance de los servicios con su propio scroll (causalidad directa), y el foco secuencial (un servicio resaltado a la vez) reemplaza al "larguero de texto plano" sin necesitar más contenido, solo timing.
**Factibilidad GSAP+ScrollTrigger:** Alta — es el caso de uso canónico de ScrollTrigger (`pin: true`, `scrub: true`). Cuidado: en mobile el pin largo puede sentirse pesado; usar `matchMedia` para acortar el tramo pineado o desactivar el pin en mobile y dejar solo el highlight por IntersectionObserver.
**Contenido visual:** NO necesita imágenes. Solo tipografía + color de acento + motion.

### 4. Hover con "peek" de descripción — expand/collapse tipo acordeón horizontal con easing elástico
**Qué hace:** cada servicio es una fila con solo el nombre visible por defecto; al hover (desktop) o tap (mobile), la fila se expande revelando 1-2 líneas de descripción con un `clip-path` o `height` animado con `ease: "elastic.out(1, 0.6)"` — no linear, para que se sienta con peso físico. Las demás filas se comprimen levemente (efecto acordeón).
**Dónde se ve:** patrón derivado de "List image hover" ([Awwwards](https://www.awwwards.com/inspiration/list-image-hover)) pero sin la imagen — solo con la descripción de texto como "premio" del hover.
**Por qué genera wow:** el acto de interactuar (no solo scrollear) invita a explorar; el easing elástico da sensación táctil/premium sin ser infantil si el rebote es sutil.
**Factibilidad GSAP+ScrollTrigger:** Alta. `gsap.to` con `height`/`clip-path` + `ease` custom. Sin ScrollTrigger necesariamente (es hover-driven, no scroll-driven), pero combina bien con la mecánica #3.
**Contenido visual:** NO necesita imágenes — usa la descripción de texto que SCUART ya tiene o puede escribir fácilmente.

### 5. Cursor-follow label / "etiqueta que sigue al cursor" con el nombre de la categoría de servicio
**Qué hace:** al pasar el mouse sobre la zona de servicios, un pequeño label (ej. "WEB", "SAAS", "BRANDING") sigue al cursor con lag/lerp (usando `gsap.quickTo` o Lenis-style lerp), cambiando de texto según sobre qué ítem esté el cursor.
**Dónde se ve:** patrón estándar en sitios de agencia premiados con cursor custom ([DesignRush — Best Interactive Website Designs 2026](https://www.designrush.com/best-designs/websites/trends/best-interactive-website-designs)).
**Por qué genera wow:** el cursor deja de ser un puntero pasivo y se vuelve parte del sistema de diseño — genera sensación "premium/tech" sin necesitar ninguna imagen.
**Factibilidad GSAP+ScrollTrigger:** Alta. `gsap.quickTo(target, "x"/"y", {duration: 0.4, ease: "power3"})`. Desactivar completamente en touch devices (no hay cursor).
**Contenido visual:** NO necesita imágenes.

### 6. List-hover con preview de imagen (patrón "Locomotive")
**Qué hace:** lista de servicios en texto; al hacer hover sobre un ítem, una imagen/video flota cerca del cursor mostrando un ejemplo visual de ese servicio (mockup, captura de proyecto, textura).
**Dónde se ve:** [Awwwards — List image hover](https://www.awwwards.com/inspiration/list-image-hover), [Portfolio Hover Preview](https://www.awwwards.com/inspiration/portfolio-hover-preview-karma-digital-agency). Patrón de categoría propia en Awwwards, muy usado en agencias.
**Por qué genera wow:** es visualmente el más rico de todos — combina texto + imagen + movimiento del cursor.
**Factibilidad GSAP+ScrollTrigger:** Alta técnicamente (`gsap.quickTo` para seguir cursor + swap de imagen), **PERO requiere una imagen o mockup representativo por cada servicio.**
**Contenido visual:** SÍ NECESITA imágenes/mockups por servicio. **SCUART hoy no los tiene → esta técnica queda descartada para el lanzamiento actual**, aunque es la más "wow" del mercado. Guardar como upgrade futuro cuando existan casos/mockups propios.

### 7. Scroll-scrubbed image/frame sequence detrás de las tarjetas de servicio (estilo Trionn completo)
**Qué hace:** una secuencia de frames (imagen o video convertido a sprites) se reproduce cuadro a cuadro atada al scroll, de fondo, mientras las tarjetas de servicio pasan por encima.
**Dónde se ve:** Trionn — 371 frames WebP scrubbed by scroll ([Codrops](https://tympanus.net/codrops/2026/07/15/the-architecture-behind-trionn-coordinating-gsap-three-js-lenis-and-web-audio/)).
**Por qué genera wow:** es el nivel más alto de producción — sensación cinemática.
**Factibilidad GSAP+ScrollTrigger:** Baja para SCUART ahora. Requiere producir/renderizar cientos de frames, peso de carga considerable (aunque WebP optimiza), y **no aplica sin contenido visual de marca real**. Es la mecánica de mayor "techo" pero también la de mayor costo de producción.
**Contenido visual:** SÍ NECESITA secuencia de imágenes/video propio. **Descartar por ahora.**

---

## PARTE 2 — Mecánicas para sección de PROCESO / CÓMO TRABAJAMOS

### 1. Pin + reveal secuencial por paso (patrón MONOLOG)
**Qué hace:** la sección completa de proceso se pinea con `ScrollTrigger`. Mientras el scroll avanza dentro del tramo pineado, cada paso (Descubrir → Definir → Construir → Lanzar) aparece uno a la vez ocupando el centro de la pantalla — el número del paso (grande, tipografía display) hace crossfade/slide con el paso anterior, y el texto descriptivo entra con stagger. Al llegar al último paso, se despinea y la página sigue.
**Dónde se ve:** [MONOLOG — bymonolog.com](https://bymonolog.com/), Awwwards SOTD 7 julio 2026 + Typography Honors junio 2026. Confirmado por fetch directo: 3 pasos numerados (Step 01/02/03), pin durante el scroll, reveal progresivo, CTA embebido por paso.
**Por qué genera wow:** convierte "4 pasos en una lista" en una narración que el usuario controla con su propio scroll — exactamente el problema que William identificó (el zig-zag de numerales no tenía movimiento; esto SÍ lo tiene porque el movimiento ESTÁ atado al avance narrativo, no es decorativo).
**Factibilidad GSAP+ScrollTrigger:** Alta — caso de uso canónico (`pin: true`, timeline con labels por paso, `scrub` opcional o `snap` a cada paso). En mobile: acortar o desactivar el pin (usar reveal simple por IntersectionObserver) para no generar scroll "pesado" en pantallas chicas.
**Contenido visual:** NO necesita imágenes. Solo números grandes (display serif) + texto + motion + el acento lima para el paso activo.

### 2. Horizontal scroll dentro de vertical (track de pasos que se desliza lateralmente)
**Qué hace:** al llegar a la sección de proceso, el scroll vertical del usuario se traduce en desplazamiento horizontal de un track con las tarjetas de cada paso (Descubrir | Definir | Construir | Lanzar), pineado hasta que el track termine, y luego se libera el scroll vertical normal.
**Dónde se ve:** confirmado como patrón activo 2026 en sitios de agencia ([Lovable — Scrolling Designs Patterns 2026](https://lovable.dev/guides/scrolling-designs-patterns-when-to-use), [DesignRush — Best Scrollable Website Designs 2026](https://www.designrush.com/best-designs/websites/trends/best-scrollable-websites)). Ejemplo citado: SomeFolk combina scroll vertical con secciones horizontales.
**Por qué genera wow:** rompe la monotonía del scroll vertical constante; el cambio de eje comunica "estás entrando en un módulo distinto" — refuerza que el proceso es una secuencia con orden, no una lista libre.
**Factibilidad GSAP+ScrollTrigger:** Alta. Patrón estándar: `gsap.to(track, {xPercent: -100 * (steps - 1), ease: "none", scrollTrigger: {pin: true, scrub: 1, end: () => "+=" + track.offsetWidth}})`. **Advertencia:** en mobile el scroll horizontal simulado con scroll vertical es más difícil de comunicar (falta de affordance) — usar solo en desktop vía `matchMedia`, y en mobile caer a stack vertical simple con reveal.
**Contenido visual:** NO necesita imágenes — funciona perfecto solo con tipografía (número + título + descripción por card) si se mantiene la estética editorial (fondo hueso, tipografía serif grande, acento lima en el número activo).

### 3. Número de paso gigante con "morph" de contador (el número cambia en vivo mientras se pinea la sección)
**Qué hace:** un solo número gigante (display serif) ocupa el centro/lateral de la pantalla; mientras el scroll avanza dentro del tramo pineado, el número hace transición de "01" a "02" a "03" a "04" (con un efecto de slide vertical tipo odómetro, o crossfade con blur), sincronizado con el contenido de texto de cada paso que cambia al mismo tiempo.
**Dónde se ve:** evolución directa de la propuesta de "numerales gigantes" que William ya vio y rechazó — la diferencia clave es que acá el número **no está estático en zig-zag**, sino que es **un solo elemento que muta en vivo atado al scroll**, generando el movimiento que faltaba. Técnica de "odometer/counter transition" es estándar en GSAP para métricas y pasos ([tijocreative — GSAP Scroll Effects Guide](https://tijocreative.com/articles/gsap-animation-guide-scroll-effects-timelines-motion-for-web)).
**Por qué genera wow:** resuelve exactamente la objeción anterior — el mismo recurso tipográfico (numerales grandes) pero con mecánica de cambio en vivo en vez de composición estática. Es la opción de menor riesgo de "reinventar la rueda" del research: reutiliza lo que ya se diseñó, le agrega la interacción que faltaba.
**Factibilidad GSAP+ScrollTrigger:** Alta. `SplitText` con `type: "lines"` en el número + timeline con labels por paso + `scrub`.
**Contenido visual:** NO necesita imágenes. 100% tipografía + motion.

### 4. Línea de progreso / timeline vertical animada (progress bar que "dibuja" el camino entre pasos)
**Qué hace:** una línea vertical (o el trazo de un path SVG) corre al costado de los pasos; a medida que el usuario scrollea, la línea se "dibuja" (usando `stroke-dashoffset` animado con ScrollTrigger) marcando cuánto del proceso ya "pasó", con un punto/nodo que se ilumina en el acento lima al llegar a cada paso.
**Dónde se ve:** técnica estándar de "path drawing scroll-linked" documentada en guías de scroll-driven animation 2026 ([iliketoplay.dk — Scroll-driven animations in 2026](https://iliketoplay.dk/insights/scoll-animations/)); común en sitios de agencia para procesos y timelines de proyecto.
**Por qué genera wow:** da sensación de progreso tangible y responde 1:1 al scroll del usuario — refuerza la narrativa "estás avanzando por nuestro proceso" de forma literal y sutil, sin ser el protagonista (se puede combinar con mecánica #1 o #3 como acompañamiento, no como pieza central).
**Factibilidad GSAP+ScrollTrigger:** Alta. `gsap.fromTo(path, {strokeDashoffset: length}, {strokeDashoffset: 0, scrollTrigger: {scrub: true}})`. Muy liviano en performance (un solo SVG path).
**Contenido visual:** NO necesita imágenes. Es una línea/SVG generado en código, no un asset.

### 5. Texto de descripción por paso con "weighted scroll reveal" (estilo By-Kin — restraint total)
**Qué hace:** en vez de pin+scrub dramático, cada paso simplemente entra en viewport con una transición muy medida: el título del paso hace slide-up sutil con easing pesado (no rebote), el cuerpo de texto sigue con 0.1-0.15s de delay, todo con Lenis dando sensación de "peso" al scroll general del sitio (no solo de esta sección).
**Dónde se ve:** [By-Kin — by-kin.com](https://by-kin.com/), Awwwards Site of the Day + **Developer Award** (el award que certifica que el motion "aguanta inspección cuadro por cuadro").
**Por qué genera wow:** es la opción de menor riesgo/menor espectáculo pero mayor "craft" — el wow no viene de un efecto llamativo sino de que TODO el sitio se sienta como una sola superficie continua y pesada al tacto. Encaja mejor si SCUART prioriza sobriedad editorial sobre efectismo.
**Factibilidad GSAP+ScrollTrigger:** Alta, la más simple de todas técnicamente — pero exige mucho cuidado en el tuning de curvas de easing y timing (el "craft" está en el detalle, no en la complejidad del código).
**Contenido visual:** NO necesita imágenes.

---

## Necesidad de contenido visual — resumen

| Mecánica | Sección | Necesita imágenes/video |
|---|---|---|
| Text-split reveal con stagger | Servicios | NO |
| Headline glyph-decompose 2D | Servicios | NO |
| Pin + scrub de lista con highlight | Servicios | NO |
| Hover expand/collapse elástico | Servicios | NO |
| Cursor-follow label | Servicios | NO |
| List-hover con preview de imagen | Servicios | **SÍ — descartar por ahora** |
| Scroll-scrubbed frame sequence | Servicios | **SÍ — descartar por ahora** |
| Pin + reveal secuencial (MONOLOG) | Proceso | NO |
| Horizontal scroll dentro de vertical | Proceso | NO |
| Número gigante con morph de contador | Proceso | NO |
| Línea de progreso SVG animada | Proceso | NO |
| Weighted scroll reveal (By-Kin) | Proceso | NO |

Dato clave: **10 de 12 mecánicas investigadas funcionan sin ningún asset visual nuevo** — el "wow" en las agencias premiadas 2026 está mayoritariamente en el timing, la física del movimiento y la sincronía con el scroll, no en la cantidad de imágenes. Esto es una buena noticia para SCUART: la falta de fotografía de servicios NO es el obstáculo real.

---

## TOP 2 RECOMENDADO por sección

### SERVICIOS

**#1 — Pin + scrub de lista con highlight secuencial** (mecánica #3), combinada con **hover expand/collapse elástico** (mecánica #4) para desktop.
- Por qué: es el patrón canónico de ScrollTrigger, resuelve directamente el "larguero de texto plano" porque el usuario deja de leer todo a la vez — ve un servicio resaltado por vez, controlado por su propio scroll. El hover añade una segunda capa de descubrimiento sin depender de imágenes. Cero riesgo de verse "genérico 2020" porque la mecánica en sí (pin+highlight secuencial) es lo que distingue a un sitio con motion real de uno estático.
- Complementar con: **text-split reveal con stagger** (mecánica #1) en la entrada de la sección para que el primer impacto visual también tenga movimiento, no solo el pin.

**#2 — Headline glyph-decompose 2D + cursor-follow label** (mecánicas #2 + #5)
- Por qué: si se quiere un momento más "spectacle" de entrada (el título de la sección armándose en vivo), esta combinación da un solo golpe de wow fuerte al entrar a la sección, y el cursor-follow mantiene la sensación "tech/premium" durante el resto de la interacción con la lista. Es más ambicioso en polish de detalle (curvas, timing de reensamblaje) pero 100% factible sin WebGL.

### PROCESO

**#1 — Número gigante con morph de contador + pin secuencial** (mecánica #3, con estructura de mecánica #1/MONOLOG)
- Por qué: es la solución más directa al rechazo anterior — reutiliza el recurso que ya se diseñó (numerales grandes) pero le agrega exactamente lo que faltaba: el número YA NO es estático en zig-zag, sino que **muta en vivo, atado al scroll del usuario**, mientras el texto de cada paso hace crossfade sincronizado. Es el patrón verificado en MONOLOG (Awwwards SOTD julio 2026), que además usa exactamente este tipo de estructura pin+reveal para su "Project Process". Bajo riesgo de producción (sin assets), alto factor de reconocimiento como "esto se mueve de verdad".

**#2 — Horizontal scroll dentro de vertical** (mecánica #2), con línea de progreso SVG (mecánica #4) como refuerzo visual del avance.
- Por qué: cambia el eje de movimiento (de vertical a horizontal) lo cual por sí solo comunica "estás en un módulo distinto, con secuencia" — más dramático que el pin simple, pero exige más cuidado en mobile (usar `matchMedia` para caer a stack vertical con reveal simple en pantallas chicas). La línea de progreso SVG es un complemento barato en performance que refuerza la narrativa de "proceso paso a paso" sin agregar peso.

**Nota de decisión:** si hay que elegir solo UNA por restricciones de tiempo, ir con **#1 (número morph + pin secuencial)** porque reutiliza directamente lo que el director-creativo ya diseñó (los numerales), reduciendo el trabajo de redefinir composición desde cero — solo se le agrega la capa de motion que faltaba.

---

## Advertencias de accesibilidad y performance (por mecánica)

**Todas las mecánicas basadas en `ScrollTrigger.pin`:**
- En mobile, el pin prolongado puede sentirse "pegajoso"/pesado si el tramo de scroll es muy largo. Acortar el tramo pineado en mobile vía `ScrollTrigger.matchMedia()`, o directamente desactivar el pin y usar reveal por `IntersectionObserver` simple.
- Verificar que el pin no rompa el `body scroll container` fix de iOS (el directive de safe-areas/scroll de este proyecto): probar en iPhone real, no solo en simulador — Playwright/WebKit headless no reproduce bugs de scroll de iOS.

**Todas las mecánicas con `SplitText`:**
- SplitText reemplaza el texto original con spans; verificar que el texto siga siendo accesible para lectores de pantalla (SplitText de GSAP 3.x mantiene un nodo accesible aria-friendly, pero hay que testear con VoiceOver/NVDA).
- Con `prefers-reduced-motion: reduce`, reducir a un simple fade-in sin desplazamiento/stagger dramático — no eliminar el reveal por completo (dejar el contenido oculto de golpe también es mala UX), sino usar una transición mínima de opacidad.

**Horizontal scroll dentro de vertical:**
- Mayor riesgo de accesibilidad/usabilidad de toda la lista: usuarios de teclado y lectores de pantalla necesitan un fallback claro (el contenido debe seguir siendo navegable en orden lógico incluso si el track no se anima). Usar `matchMedia` para desactivar en mobile y para usuarios con `prefers-reduced-motion`, cayendo a un stack vertical normal.
- Cuidado con "scroll hijacking": el usuario debe poder salir del tramo horizontal con scroll normal sin sentirse atrapado. Testear con scroll rápido (trackpad/mouse wheel agresivo) para que no rompa el snap.

**Cursor-follow label:**
- Desactivar completamente en touch devices (`matchMedia('(hover: hover)')`) — no tiene sentido ni funciona bien con touch, y puede generar elementos fantasma pegados en pantalla.

**Número gigante con morph de contador / línea de progreso SVG:**
- Las de menor riesgo de toda la lista: no dependen de pin extenso, son livianas en DOM (un solo elemento de texto o un solo path SVG), y degradan bien a una transición simple sin scrub si se desactiva el motion.

**General (todas):**
- Lenis + ScrollTrigger: usar el patrón de sincronización confirmado en Trionn — Lenis debe engancharse al `gsap.ticker` (no correr su propio rAF loop en paralelo) para evitar desincronización entre el scroll suavizado y los triggers.
- Testear siempre con `prefers-reduced-motion: reduce` activado en el sistema operativo (no solo simulado en DevTools) antes de dar por cerrada cualquier mecánica.
- Ninguna de las mecánicas recomendadas en el TOP 2 requiere WebGL/Three.js — esto es deliberado: mantiene el bundle liviano y evita el riesgo de performance/compatibilidad que sí tiene Trionn (justificado ahí porque es su pieza de portfolio insignia, no aplicable al lanzamiento actual de SCUART).

---

## Fuentes consultadas

- [The Architecture Behind Trionn — Codrops, julio 2026](https://tympanus.net/codrops/2026/07/15/the-architecture-behind-trionn-coordinating-gsap-three-js-lenis-and-web-audio/)
- [Trionn — Awwwards Honorable Mention](https://www.awwwards.com/sites/trionn-2)
- [MONOLOG — bymonolog.com](https://bymonolog.com/)
- [MONOLOG — Awwwards SOTD](https://www.awwwards.com/sites/monolog)
- [By-Kin — by-kin.com](https://by-kin.com/)
- ['kin — Awwwards SOTD](https://www.awwwards.com/sites/kin-2)
- [Awwwards — List image hover](https://www.awwwards.com/inspiration/list-image-hover)
- [Awwwards — Portfolio Hover Preview](https://www.awwwards.com/inspiration/portfolio-hover-preview-karma-digital-agency)
- [GSAP Vault — 40 GSAP animation examples with code (2026)](https://gsapvault.com/blog/gsap-animation-examples)
- [GSAP Vault — Text Animations with GSAP: 4 Approaches](https://gsapvault.com/blog/text-animations-gsap)
- [tijocreative — GSAP Animation Guide for Scroll Effects & Motion](https://tijocreative.com/articles/gsap-animation-guide-scroll-effects-timelines-motion-for-web)
- [iliketoplay.dk — Scroll-driven animations in 2026](https://iliketoplay.dk/insights/scoll-animations/)
- [Lovable — Scrolling Designs: 8 Patterns and When to Use Each (2026)](https://lovable.dev/guides/scrolling-designs-patterns-when-to-use)
- [DesignRush — 7 Best Scrollable Website Designs for 2026](https://www.designrush.com/best-designs/websites/trends/best-scrollable-websites)
- [DesignRush — 11 Best Interactive Website Designs in 2026](https://www.designrush.com/best-designs/websites/trends/best-interactive-website-designs)
- [GSAP — ScrambleTextPlugin Docs](https://gsap.com/docs/v3/Plugins/ScrambleTextPlugin/)

---

## Notas

Esta investigación NO incluye recomendaciones de layout/composición nuevas — solo mecánicas de interacción/motion, respetando que las decisiones de composición visual las define William directamente (método referencia-copia). El director-creativo o quien implemente debería tomar el TOP 2 de cada sección como punto de partida técnico, no como diseño final cerrado.
