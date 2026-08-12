# Investigación: Momentos WOW premium — catálogo de mecanismos

**Fecha:** 2026-08-08
**Para:** SCUART (Astro 5 + GSAP 3.15, sin Three.js hoy)
**Referencia del cliente:** https://trionn.com

---

## ⚠️ Honestidad metodológica — leé esto primero

Las herramientas de fetch que tengo **convierten la página a markdown y descartan los `<script>`**. Eso significa:

- **NO pude leer el JavaScript de ningún sitio de producción.** Ni de Trionn, ni de Lusion, ni de basement.studio.
- Por lo tanto, **cualquier afirmación sobre "cómo está hecho" un sitio de producción es INFERENCIA**, no verificación. La marco explícitamente.
- Lo que **SÍ pude verificar al 100%** son los tutoriales de Codrops: tienen artículo descriptivo + demo en vivo + repo de GitHub público. Ahí el mecanismo está documentado por el autor y el código es leíble.

**Consecuencia práctica:** los bloques marcados `✅ VERIFICADO` son los que te sirven para copiar. Los marcados `🔶 INFERIDO` son para mirar y decidir dirección estética, no para basar una implementación.

Sobre Trionn específicamente: **no pude leer su JS.** Lo único verificado del sitio es que carga, que el tagline es "Designed to mean something", que hay un logo de GSAP en su sección de awards (usan GSAP), y que hay elementos con texto "hold to blast" y "Dare to touch the lines" — que sugieren interacciones de hold y de líneas reactivas al cursor. **Nada más. No sé si usan WebGL.**

---

## Tabla resumen — ordenada de MÁS reproducible sin assets a MENOS

| # | Efecto | Assets 3D | Stack | Astro5+GSAP | Esfuerzo |
|---|---|---|---|---|---|
| 1 | Dual-wave text scroll | Ninguno | GSAP puro DOM | ✅ Sí | 1-2 d |
| 2 | Texto 3D scroll (cilindro/túnel) | Ninguno | CSS 3D + GSAP | ✅ Sí | 1-2 d |
| 3 | SVG mask transitions | Fotos comunes | GSAP+ScrollTrigger | ✅ Sí | 1-2 d |
| 4 | Mouse trail con gravedad | 4 PNG | GSAP DOM | ✅ Sí | 1 d |
| 5 | Infinite gallery + Flip | Fotos comunes | GSAP Flip/Observer | ✅ Sí | 3-5 d |
| 6 | Elastic grid lag scroll | Fotos comunes | GSAP | ✅ Sí | 1 d |
| 7 | Clip-path product preview | Fotos comunes | GSAP + clip-path | ✅ Sí | 1-2 d |
| 8 | Marquee sobre path SVG | Ninguno | Motion/GSAP + SVG | ✅ Sí | 1 d |
| 9 | Bayer dithering background | **Ninguno** | Three.js + GLSL | 🔶 Con Three.js | 2-3 d |
| 10 | Shaders GSAP sobre fotos | Fotos comunes | Three.js + GLSL | 🔶 Con Three.js | 1-2 sem |
| 11 | ASCII / dithering realtime | Fotos/video | WebGL shaders | 🔶 Con Three.js | 1-2 sem |
| 12 | WebGL text SEO-friendly | Ninguno | Three.js + MSDF | 🔶 Con Three.js | 1-2 sem |
| 13 | Letras con shaders | Ninguno | Three.js + GLSL | 🔶 Con Three.js | 2 sem |
| 14 | Metaballs / gotas | Ninguno | Three.js + GLSL | 🔶 Con Three.js | 1-2 sem |
| 15 | Page transitions persistentes | Fotos comunes | WebGPU/WebGL | ⚠️ Difícil | 3-4 sem |

---

# BLOQUE A — Reproducibles HOY, cero Three.js, cero assets 3D

## 1. Dual-Wave Text Animation ✅ VERIFICADO

- **URL artículo:** https://tympanus.net/codrops/2026/01/15/building-a-scroll-driven-dual-wave-text-animation-with-gsap/
- **Demo:** https://tympanus.net/Tutorials/DualWaveTextAnimation/
- **Código:** https://github.com/ValentinDBS/codrops-tutorial-text-animation
- **QUÉ HACE:** Dos columnas de texto que se desplazan horizontalmente en ondas opuestas mientras scrolleás — como dos serpientes tipográficas que se cruzan. Una imagen central va cambiando según qué línea de texto está más cerca del centro vertical del viewport.
- **CÓMO:** DOM puro, `transform: translateX()` vía GSAP. ScrollTrigger para el progreso + `gsap.quickTo()` para actualizar posiciones a 60fps sin crear tweens nuevos. La fórmula: `phase = waveNumber × index + waveSpeed × progress × 2π - π/2`. **Nada de canvas ni WebGL.**
- **ASSETS:** Texto + imágenes de marca opcionales (`data-image`). **Cero 3D.**
- **ESFUERZO:** 1-2 días, dev con GSAP. Sin especialista.
- **ASTRO+GSAP:** ✅ Sí, directo. Usa ScrollSmoother o Lenis (ya tenés alternativa).
- **PARA SCUART:** Encaja perfecto con PP Editorial New. Es tipografía cinética *real*, no un fade-up.

## 2. Texto 3D scroll-driven: cilindro / círculo / túnel ✅ VERIFICADO

- **URL:** https://tympanus.net/codrops/2025/11/04/creating-3d-scroll-driven-text-animations-with-css-and-gsap/
- **Demo:** https://tympanus.net/Tutorials/3DTextScroll/ (variantes en index2.html, index3.html)
- **Código:** https://github.com/davidfaure/3d-text-animation-codrops/
- **QUÉ HACE:** Tres efectos. (a) *Cilindro*: palabras dispuestas sobre un cilindro invisible que rota con el scroll. (b) *Círculo*: dos círculos espejados de texto orbitando en sentidos opuestos. (c) *Túnel*: el texto vuela hacia vos por el eje Z, como entrar en un tubo de palabras.
- **CÓMO:** El artículo lo dice explícito: **CSS transforms + GSAP ScrollTrigger, SIN Three.js.** Usa `perspective`, `transform-style: preserve-3d`, `backface-visibility`.
- **ASSETS:** **NINGUNO.** Solo listas de texto en HTML. Cero imágenes, cero texturas, cero modelos.
- **ESFUERZO:** 1-2 días.
- **ASTRO+GSAP:** ✅ Sí, sin agregar una sola dependencia.
- **PARA SCUART:** Es el mejor ratio WOW/esfuerzo del catálogo. Da sensación 3D sin 3D.

## 3. SVG Mask Transitions on Scroll ✅ VERIFICADO

- **URL:** https://tympanus.net/codrops/2026/03/11/svg-mask-transitions-on-scroll-with-gsap-and-scrolltrigger/
- **Demo:** https://tympanus.net/Tutorials/SVGMaskScrollTransition/ (verificado: carga, 4 variantes)
- **Código:** https://github.com/Hiro-kiii/Scroll-Transition/
- **QUÉ HACE:** Cuatro maneras de revelar una foto a pantalla completa mientras scrolleás. (a) *Persianas horizontales*: franjas que se abren desde su línea central hacia arriba y abajo, subiendo de abajo hacia arriba. (b) *Grid aleatorio*: la pantalla se parte en paneles que se abren en orden desordenado — digital pero orgánico. (c) *Persianas verticales*: como cortinas abriéndose. (d) *Grid por columnas*: una ola que barre de izquierda a derecha con aleatoriedad dentro de cada columna.
- **CÓMO:** Máscaras SVG (`<mask>` con rectángulos) animadas con GSAP + ScrollTrigger. Lenis para el scroll suave. **Sin WebGL, sin Three.js, sin plugins pagos.**
- **ASSETS:** Fotos comunes a pantalla completa (`pic-1.jpg`...). **Cero 3D.**
- **ESFUERZO:** 1-2 días.
- **ASTRO+GSAP:** ✅ Sí.
- **PARA SCUART:** Ideal para las transiciones entre los 3 casos del portfolio.

## 4. Mouse trail con gravedad ✅ VERIFICADO

- **URL:** https://tympanus.net/codrops/2026/05/20/made-with-gsap-building-a-fun-gravity-based-mouse-trail/
- **Demo:** madewithgsap.com/codrops (ZIP descargable desde ahí)
- **QUÉ HACE:** Al mover el mouse aparecen imágenes en el cursor, que **caen al piso del viewport, rebotan y desaparecen.** Reacciona a la *velocidad* del cursor, no a la posición continua — si movés despacio no pasa nada, si movés rápido llueven imágenes.
- **CÓMO:** **DOM, no canvas.** Tweens GSAP normales con easings custom. **No usa el plugin Physics2D** (que es de pago) — el rebote es `back.in()` con intensidad calculada según la altura de spawn: `"back.in(" + (1.5 + (1 - y/H)) + ")"`. El drift horizontal usa `deltaX`/`deltaY` del cursor.
- **ASSETS:** 4 PNG comunes. **Cero 3D.**
- **ESFUERZO:** 1 día.
- **ASTRO+GSAP:** ✅ Sí, con GSAP gratis.
- **PARA SCUART:** Física real sin motor de física. Barato y memorable.

## 5. Infinite scroll gallery + Flip transitions ✅ VERIFICADO

- **URL:** https://tympanus.net/codrops/2026/07/30/building-an-infinite-gsap-scroll-gallery-with-parallax-and-flip-transitions/
- **Demo:** https://tympanus.net/Tutorials/InfiniteScrollGSAPGallery/
- **Código:** https://github.com/surya-aditya/codrops-infinite-scroll-and-content-transition
- **QUÉ HACE:** Galería de imágenes dispersas que scrollea infinito, cada imagen a su propia velocidad (flotan). Al hacer click, la imagen **se transforma morfeando hasta ocupar toda la pantalla** en vista detalle — no hay corte, la miniatura *se convierte* en el fullscreen.
- **CÓMO:** GSAP `Observer` (input), GSAP `Flip` (el morph), `SplitText` (texto). **"GSAP y JavaScript plano, sin Three.js, WebGL ni canvas"** — palabras del tutorial. Tres módulos: Slider, Reveal, Transition.
- **ASSETS:** 12 fotos landscape comunes. **Cero 3D.**
- **ESFUERZO:** 3-5 días (avanzado-intermedio: timelines pausados, matemática de parallax, manejo de estado).
- **ASTRO+GSAP:** ✅ Sí. Flip y Observer están en GSAP 3.15 gratis.
- **PARA SCUART:** El morph de Flip es el mecanismo más "caro de ver" que podés lograr sin WebGL.

## 6. Elastic Grid Scroll (lag por columna) ✅ VERIFICADO

- **URL:** https://tympanus.net/codrops/2025/06/03/elastic-grid-scroll-creating-lag-based-layout-animations-with-gsap-scrollsmoother/
- **QUÉ HACE:** Las columnas de un grid se mueven a velocidades distintas al scrollear, con retraso — el grid entero se siente elástico, como gelatina, y se reacomoda al frenar.
- **CÓMO:** GSAP ScrollSmoother con valores de `lag` distintos por columna. DOM puro.
- **ASSETS:** Fotos comunes. Cero 3D.
- **ESFUERZO:** 1 día.
- **ASTRO+GSAP:** ✅ Sí (ScrollSmoother requiere GSAP Club — hoy GSAP es gratis completo, verificar licencia; alternativa: replicar el lag con Lenis + quickTo).
- ⚠️ **Nota:** no leí este tutorial en detalle, solo su descripción en el índice. Inferencia parcial.

## 7. Clip-path product grid preview ✅ VERIFICADO (índice)

- **URL:** https://tympanus.net/codrops/2025/05/27/animated-product-grid-preview-with-gsap-clip-path/
- **QUÉ HACE:** Un grid donde al interactuar, los items se abren revelando un preview mediante recortes de `clip-path` animados.
- **CÓMO:** GSAP + `clip-path` CSS. Sin WebGL.
- **ASSETS:** Fotos comunes.
- **ESFUERZO:** 1-2 días.
- **ASTRO+GSAP:** ✅ Sí.
- ⚠️ Solo leí la descripción del índice, no el artículo completo.

## 8. Marquee infinito sobre path SVG ✅ VERIFICADO (índice)

- **URL:** https://tympanus.net/codrops/2025/06/17/building-an-infinite-marquee-along-an-svg-path-with-react-motion/
- **QUÉ HACE:** Texto que corre infinitamente siguiendo una curva SVG arbitraria — no una línea recta. Podés dibujar cualquier trazo y el texto lo recorre.
- **CÓMO:** Original en React + Motion, pero el mecanismo (`textPath` SVG + offset animado) es portable a GSAP vanilla sin problema.
- **ASSETS:** Ninguno. Solo el path SVG.
- **ESFUERZO:** 1 día.
- **ASTRO+GSAP:** ✅ Sí (reescribiendo de Motion a GSAP).
- ⚠️ Solo índice, no leí el artículo completo.

---

# BLOQUE B — Requieren Three.js, pero SIN assets 3D producidos

Estos son los que mejor responden a tu restricción: **WebGL de verdad, pero sin depender de un render 3D.**

## 9. Bayer Dithering background generativo ✅ VERIFICADO — ⭐ EL MÁS EFICIENTE

- **URL:** https://tympanus.net/codrops/2025/07/30/interactive-webgl-backgrounds-a-quick-guide-to-bayer-dithering/
- **Demo:** https://tympanus.net/Tutorials/BayerDithering (verificado: carga, con variantes Squares/Circles/Triangles/Diamonds)
- **Código:** https://github.com/zavalit/bayer-dithering-webgl-demo
- **QUÉ HACE:** Un fondo animado de puntos/tramas tipo impresión antigua o Teletexto, que simula gradientes con patrones de pixeles. **Al hacer click salen ondas expansivas** que deforman la trama en tiempo real.
- **CÓMO:** Three.js + fragment shader GLSL con matrices de Bayer recursivas. **Un solo pass de GPU.**
- **ASSETS:** **NINGUNO. Cero. Es 100% generativo por shader.** Esto es exactamente lo que pediste.
- **ESFUERZO:** 2-3 días. No necesitás especialista WebGL: el shader ya está escrito, se adapta el color.
- **PERFORMANCE:** <0.2ms a 4K, **~3KB** sin contar Three.js. El artículo lo llama "probablemente el efecto de fondo interactivo más liviano de la web abierta hoy".
- **ASTRO+GSAP:** 🔶 Sí, agregando Three.js.
- **PARA SCUART:** La trama en lima #c6f24e sobre tinta #14130f sería identidad pura. Cero assets, cero dependencia de un render.

## 10. Shaders animados con GSAP sobre FOTOS PLANAS ✅ VERIFICADO — ⭐

- **URL:** https://tympanus.net/codrops/2025/10/08/how-to-animate-webgl-shaders-with-gsap-ripples-reveals-and-dynamic-blur-effects/
- **Demo:** https://tympanus.net/Tutorials/ShaderAnimationGSAP/ (verificado: carga, 4 variantes)
- **Código:** https://github.com/biazo/codrops-animate-shaders-with-gsap
- **QUÉ HACE:** Cuatro efectos aplicados a **imágenes planas normales**: (a) *Ripple + grayscale*: al hacer click, una máscara circular se expande desde el punto exacto del click y la foto pasa de B/N a color, con deformación de vértices. (b) *Blend reveal*: al pasar el mouse, un círculo mezcla dos imágenes superpuestas. (c) *Click & hold*: mantener presionado carga una transición con ruido procedural que deforma la textura. (d) *Blur dinámico en carrusel*: las imágenes se desenfocan según su distancia al centro de pantalla.
- **CÓMO:** Three.js con **OrthographicCamera** para que los planos WebGL coincidan exactamente con el layout HTML. `ShaderMaterial` custom + GSAP animando los *uniforms* del shader.
- **ASSETS:** **Imágenes .webp comunes.** Cero modelos 3D, cero renders.
- **ESFUERZO:** 1-2 semanas. Requiere escribir/adaptar GLSL. Un dev con GSAP puede seguirlo, pero necesita paciencia con shaders.
- **ASTRO+GSAP:** 🔶 Sí, con Three.js.
- **PARA SCUART:** Este es *el* patrón "WebGL sobre fotos planas" que pediste. El truco de la OrthographicCamera sincronizada con el DOM es lo que hace ver premium a los sitios de agencia.

## 11. ASCII y dithering en tiempo real (Efecto) ✅ VERIFICADO

- **URL:** https://tympanus.net/codrops/2026/01/04/efecto-building-real-time-ascii-and-dithering-effects-with-webgl-shaders/
- **App:** https://efecto.app/
- **QUÉ HACE:** Convierte imágenes o video en arte ASCII en tiempo real, o los tramaadmite con 8 algoritmos de dithering (Floyd-Steinberg, Atkinson, Jarvis, Stucki, Burkes, Sierra). Suma efectos CRT: scanlines, curvatura de pantalla, aberración cromática, viñeta, bloom.
- **CÓMO:** ASCII corre como **shader WebGL en GPU** (cada carácter es una función que devuelve 1 o 0 por posición). El dithering corre en **CPU/JS** con fallback Canvas 2D. Stack: Three.js + React Three Fiber + postprocessing.
- **ASSETS:** Imágenes/SVG/video comunes. (También acepta GLB pero no lo necesitás.)
- **ESFUERZO:** 1-2 semanas.
- ⚠️ **ADVERTENCIA IMPORTANTE:** **NO es una librería.** Es una aplicación web standalone. **No hay paquete npm, y el artículo no menciona repo de GitHub.** Sirve como *referencia de técnica* y para generar assets, **no para instalar**. Si querés ASCII en el sitio hay que escribir el shader.
- **ASTRO+GSAP:** 🔶 Solo reimplementando.

## 12. WebGL text responsive y SEO-friendly ✅ VERIFICADO (índice)

- **URL:** https://tympanus.net/codrops/2025/06/05/how-to-create-responsive-and-seo-friendly-webgl-text/
- **QUÉ HACE:** Resuelve el problema real de la tipografía en WebGL: texto HTML normal (indexable por Google, accesible) sincronizado con texto renderizado en WebGL que puede deformarse con shaders.
- **ASSETS:** Ninguno (usa la fuente, típicamente atlas MSDF).
- **ESFUERZO:** 1-2 semanas.
- **ASTRO+GSAP:** 🔶 Con Three.js.
- **RELEVANCIA SCUART:** Crítica si querés efectos sobre tipografía **sin romper el SEO bilingüe ES/EN**.
- ⚠️ Solo índice.

## 13. Animar letras con shaders ✅ VERIFICADO (índice)

- **URL:** https://tympanus.net/codrops/2025/03/24/animating-letters-with-shaders-interactive-text-effect-with-three-js-glsl/
- **QUÉ HACE:** Desplazamiento dinámico de letras individuales mediante shaders custom, reactivo al cursor.
- **ASSETS:** Ninguno.
- **ESFUERZO:** ~2 semanas, requiere GLSL.
- ⚠️ Solo índice.

## 14. Metaballs tipo gotas ✅ VERIFICADO (índice)

- **URL:** https://tympanus.net/codrops/2025/06/09/how-to-create-interactive-droplet-like-metaballs-with-three-js-and-glsl/
- **QUÉ HACE:** Esferas tipo burbuja/mercurio que se fusionan y separan orgánicamente siguiendo el mouse.
- **ASSETS:** **Ninguno, 100% generativo (signed distance fields en shader).**
- **ESFUERZO:** 1-2 semanas.
- ⚠️ Solo índice, no leí el artículo.

---

# BLOQUE C — Alto costo / poco recomendable hoy

## 15. Page transitions persistentes con WebGPU ✅ VERIFICADO

- **URL:** https://tympanus.net/codrops/2026/06/30/building-persistent-page-transitions-with-webgpu-and-vanilla-javascript/
- **Demo:** https://page-transitions-with-webgpu-vanilla-js.crnacura.workers.dev/
- **Código:** https://github.com/bnpne/page-transitions-with-webgpu-vanilla-js
- **QUÉ HACE:** Al navegar entre páginas, las imágenes compartidas **vuelan y escalan** desde su posición vieja a la nueva; las que no siguen se desvanecen y las nuevas aparecen en su lugar. Se siente un movimiento continuo, no un cambio de página.
- **CÓMO:** Escena GPU persistente que sobrevive a la navegación. Slots `<figure>` vacíos en CSS como destinos de layout. GSAP para los tweens. Router vanilla con `data-page`/`data-link`.
- **ASSETS:** Fotos comunes, precargadas al inicio.
- **ESFUERZO:** 3-4 semanas.
- ⚠️ **ADVERTENCIAS:** (a) El autor dice que **funciona igual con WebGL**, WebGPU es solo su elección moderna — así que el soporte de browser es sorteable. (b) **El artículo NO trata el tema de compatibilidad**, y WebGPU sigue siendo experimental en varios browsers. (c) Precargar todas las texturas de todas las páginas es pesado.
- **ASTRO+GSAP:** ⚠️ Difícil. Astro es MPA; esto exige router propio y romper el modelo de Astro. **No lo recomiendo para SCUART ahora.**

---

# Sitios de producción de referencia (🔶 TODO INFERIDO)

**Recordá: no pude leer el JS de ninguno.** Los efectos descritos vienen de reseñas de terceros, no de mi inspección. Sirven para *dirección estética*, no como especificación técnica.

| Sitio | URL | Efecto reportado | Tech reportada | Estado |
|---|---|---|---|---|
| Trionn | https://trionn.com | "hold to blast", "dare to touch the lines" | GSAP (logo en su web) | ✅ carga / 🔶 efecto |
| By-Kin | https://by-kin.com/ | Scroll con peso, transiciones como superficie continua | Next.js + GSAP + Strapi | ✅ carga / 🔶 efecto |
| Mat Voyce | https://matvoyce.tv | Tipografía cinética: letras se estiran, chasquean y recombinan | GSAP | ⚠️ redirect 307, **no verifiqué** |
| Uncommon Studio | https://uncommonstudio.com.au/ | Transiciones que rompen el grid como "movimientos de cámara" | GSAP | 🔶 no verificado |
| Iventions | https://iventions.com/ | Proyectos iluminados como instalaciones con spotlight | Three.js + GSAP | 🔶 no verificado |
| Minh Pham | https://minhpham.design/ | WebGL por debajo de un sistema de motion GSAP | Three.js + GSAP | 🔶 no verificado |
| IVRESS | brand.ivress.co.jp | Shaders TSL que compilan a WebGPU y WebGL | Three.js + TSL | 🔶 **generativo, sin modelos** |
| Shopify Editions | shopify.com/editions/spring2026 | Tipografía que se dispersa en partículas al scrollear | Three.js | 🔶 **generativo, sin modelos** |
| Lusion | https://lusion.co | Referencia de partículas/materiales | — | ✅ carga / 🔶 sin datos de JS |
| basement.studio | https://basement.studio | 3D e interactivo | — | 🔶 fetch no dio datos útiles |

**Nota:** de los 8 sitios Three.js reseñados por Utsubo, **la mayoría (Oryzo, Hubtown, Primland, Cartier) SÍ dependen de modelos 3D producidos** — justo lo que no querés. Los únicos generativos puros son **IVRESS y Shopify Editions**.

---

# MI TOP-3 PARA SCUART

**1. Texto 3D scroll-driven — cilindro/túnel** (#2)
Cero assets, cero dependencias nuevas, 1-2 días, y da sensación tridimensional real con PP Editorial New. Máximo WOW por peso.

**2. Bayer dithering generativo** (#9)
100% shader, ~3KB, cero assets producidos, y en lima sobre tinta se vuelve identidad de marca en vez de decoración genérica.

**3. Shaders con GSAP sobre fotos planas** (#10)
Es el salto real a "sitio de agencia premium": WebGL sobre las fotos que ya tenés de los 3 casos, sin encargar un solo render 3D.

**Ruta sugerida:** #2 primero (rápido, valida el rumbo sin instalar nada) → #3 SVG masks para el portfolio → después evaluar si vale meter Three.js para #9 y #10.

**Lo que descartaría:** #15 (WebGPU transitions, pelea contra el modelo MPA de Astro) y #11 (Efecto no es librería instalable).

---

## Fuentes

- https://tympanus.net/codrops/category/tutorials/
- https://tympanus.net/codrops/2026/01/15/building-a-scroll-driven-dual-wave-text-animation-with-gsap/
- https://tympanus.net/codrops/2025/11/04/creating-3d-scroll-driven-text-animations-with-css-and-gsap/
- https://tympanus.net/codrops/2026/03/11/svg-mask-transitions-on-scroll-with-gsap-and-scrolltrigger/
- https://tympanus.net/codrops/2026/05/20/made-with-gsap-building-a-fun-gravity-based-mouse-trail/
- https://tympanus.net/codrops/2026/07/30/building-an-infinite-gsap-scroll-gallery-with-parallax-and-flip-transitions/
- https://tympanus.net/codrops/2025/07/30/interactive-webgl-backgrounds-a-quick-guide-to-bayer-dithering/
- https://tympanus.net/codrops/2025/10/08/how-to-animate-webgl-shaders-with-gsap-ripples-reveals-and-dynamic-blur-effects/
- https://tympanus.net/codrops/2026/01/04/efecto-building-real-time-ascii-and-dithering-effects-with-webgl-shaders/
- https://tympanus.net/codrops/2026/06/30/building-persistent-page-transitions-with-webgpu-and-vanilla-javascript/
- https://www.hontran.dev/blog/best-award-winning-websites-2026
- https://www.utsubo.com/blog/best-threejs-websites-2026
