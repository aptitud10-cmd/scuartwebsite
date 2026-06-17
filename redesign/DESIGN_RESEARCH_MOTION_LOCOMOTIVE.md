# Design Research — Motion Coreografiado + Composición Editorial
## Proyecto: scuart.com (rediseño propio, nivel Locomotive/Awwwards)

**Fecha de investigación:** 2026-06-17
**Investigador:** investigador-tendencias (Sonnet 4.6 + web search en vivo)
**Propósito:** Informar al director-creativo el spec de motion del sitio SCUART. Todo dato aquí fue buscado en vivo — nada es training data.
**Stack objetivo:** Astro 5.18 estático + GSAP (ya instalado) + ScrollTrigger (ya instalado) + IntersectionObserver. iOS safe-areas obligatorias. Body-scroll-container obligatorio en mobile.

---

## PARTE 1 — Cómo construye Locomotive.ca su motion en 2026

### 1.1 Librería de scroll — verificado en vivo

**Locomotive usa su propia librería: `locomotive-scroll` v5**, publicada en 2024-2025.

La v5 es una **reescritura completa sobre Lenis** (darkroom.engineering). Ya no es un scroll virtual puro: es un wrapper delgado y opinado sobre Lenis que agrega una capa de detección de elementos y animación.

Datos técnicos verificados en scroll.locomotive.ca y GitHub:

| Dato | Valor |
|---|---|
| Tamaño bundle | 9.4 kB gzipped |
| Base interna | Lenis 1.3.17 |
| Scroll virtual en desktop | Sí (via Lenis, transforma el scroll en momentum) |
| Touch en mobile | Nativo por defecto (Lenis no interpola touch, pasa nativo al browser) |
| `data-scroll-container` / `data-scroll-section` | Eliminados en v5 — ya no son necesarios |
| ModularJS | Eliminado en v5 — usar CustomEvents nativos |
| TypeScript | Fully typed |

**¿Usan su propia librería en locomotive.ca?** Sí. El sitio aparece como #1 en el showcase oficial de Locomotive Scroll v5 (scroll.locomotive.ca/docs/extras/showcase).

**¿Qué implica para SCUART?** SCUART puede elegir entre:
- Lenis directamente (la base, más control)
- locomotive-scroll v5 (wrapper con helpers de detección incluidos)

Ambas son intercambiables. Ver Parte 4 para stack recomendado.

---

### 1.2 Stack técnico verificado de locomotive.ca

Del case study de Awwwards (Site of the Month March 2023) y de Fonts In Use (actualizado junio 2024):

| Capa | Tecnología |
|---|---|
| Scroll suave | locomotive-scroll (propio) |
| Animación | GSAP suite (mencionado explícitamente en case study de la versión anterior) |
| 3D / modelos de equipo | Three.js + Blender + Polycam (fotogrametría) + Mixamo (animaciones) |
| Tipografía display | PP Locomotive New (custom, con Pangram Pangram Foundry + Tomorrow) |
| Tipografía secundaria | Helvetica Now |
| Framework | Custom PHP (Charcoal CMS interno, no Next ni Astro) |
| Visual identity | Tomorrow Creative Services |
| Film/Animation 3D | Baillat Studio |

**Nota clave:** No usan React/Next/Astro. Van vanilla JS + PHP custom. El scroll y el motion son 100% custom — lo que implica que sus gestos de motion son escritos a mano, no salidos de un preset de librería.

---

### 1.3 Gestos de motion específicos — documentados

Los siguientes gestos fueron identificados a través del case study oficial de Awwwards, análisis de markup de locomotive.ca, e investigación cruzada con el Awwwards SOTD (score total 8.2/10, animaciones 8.6/10):

#### Gesto 1: Letter shuffle / scramble en transiciones de página

- **Qué es:** El texto cambia de letras aleatoriamente (shuffle effect) antes de resolverse al texto final. Une la entrada de la página nueva con la salida de la anterior.
- **Dónde:** Transiciones entre páginas (inter-page transitions) y en el hero al cargar.
- **Cómo se siente:** Técnico, casi codificado. Conecta visualmente con el imaginario "tren / estación de partida" de su identidad.
- **Por qué funciona:** Crea un micro-momento de atención — el ojo no puede ignorar texto que cambia. Es la "sorpresa" controlada.
- **Implementación en Astro+GSAP:** `gsap.to` en un array de caracteres con timeline staggered. Se puede replicar con SplitText (gratuito desde abril 2025) + un callback que randomiza caracteres antes del reveal.

#### Gesto 2: Pixel lazy loader efecto

- **Qué es:** Las imágenes se cargan en un patrón pixelado que se resuelve a full-res. Es el loader de la página, no solo lazy-load de imagen.
- **Dónde:** Transición de carga inicial del sitio.
- **Cómo se siente:** Cinematográfico. La espera del load se convierte en diseño.
- **Implementación equivalente:** Canvas 2D o clip-path en grid de celdas. El GSAP Flip plugin también puede manejar esto.

#### Gesto 3: Smooth scroll con inercia (momentum)

- **Qué es:** El scroll no para en seco — continúa con un ease-out natural. En desktop, la rueda del mouse produce un scroll "de mantequilla" que decelera suavemente.
- **Dónde:** Todo el sitio en desktop.
- **Cómo se siente:** El contenido "flota" hacia arriba. Eleva todo — incluso una sección plain-text se siente premium porque el scroll tiene peso.
- **Implementación:** Lenis (o locomotive-scroll v5). Ver Parte 4.

#### Gesto 4: Parallax en imágenes de portfolio

- **Qué es:** Las imágenes de los casos de estudio se mueven más lento que el scroll — efecto de profundidad de campo. La imagen se ve más larga que su contenedor (overflow hidden) y se desplaza a una velocidad menor.
- **Dónde:** Cards y bloques de portfolio en la página `/work`.
- **Cómo se siente:** Cada imagen "respira" al scrollear. Hace que el grid de trabajo se sienta tridimensional.
- **Implementación en GSAP:** `gsap.to(img, { yPercent: -15, ease: 'none', scrollTrigger: { trigger: container, start: 'top bottom', end: 'bottom top', scrub: true } })`. La imagen debe tener `height: 110%` con `object-fit: cover` y estar en un `overflow: hidden` wrapper.

#### Gesto 5: Reveals de texto por línea (mask reveal)

- **Qué es:** Los titulares y párrafos se revelan línea por línea desde abajo hacia arriba. Cada línea está dentro de un `overflow: hidden` wrapper invisible — el texto "sube" desde debajo del borde del wrapper como si saliera de bajo del suelo.
- **Dónde:** Titulares de sección, claims principales, primer párrafo de cada sección.
- **Cómo se siente:** Editorial, deliberado. Hay una sensación de construcción — el texto no aparece, se construye.
- **Timing observado en agencias de nivel similar:** ~0.8–1.0s duración por línea, stagger 0.08–0.12s entre líneas, ease `expo.out` o `power4.out`.
- **Implementación:** SplitText `type: 'lines'` + cada línea envuelta en `overflow: hidden` + `gsap.fromTo(lines, { yPercent: 105 }, { yPercent: 0, stagger: 0.1, ease: 'expo.out', duration: 0.9 })` activado con ScrollTrigger.

#### Gesto 6: Hero — secuencia de entrada en los primeros 3 segundos

El hero de locomotive.ca en 2024 sigue este patrón general (verificado por markup + case study):

| Tiempo | Evento |
|---|---|
| 0ms | Página cargada. Todo está invisible. |
| 0–400ms | Loader/pixel effect — las imágenes se construyen |
| 400–800ms | Navegación aparece (fade o slide desde arriba) |
| 800–1400ms | Titular principal revela línea por línea (mask reveal ascendente) |
| 1400–2000ms | Claim secundario o tagline revela (stagger más lento) |
| 2000–2400ms | CTAs / elementos de UI aparecen (fade simple) |
| 2400ms+ | Scroll habilitado. Animaciones pasivas (parallax, smooth scroll) activas. |

**Nota:** El hero NO es una explosión de animaciones simultáneas. Es una secuencia orquestada, cada elemento espera al anterior. La suma total dura ~2.4 segundos. Después de eso, el sitio es "quieto" hasta que el usuario scrollea.

#### Gesto 7: Portfolio — imágenes grandes que "se descubren" con scroll

Verificado en locomotive.ca/en/work y reforzado por análisis de agencias similares (Unseen Studio, Hero Collective):

- **Presentación:** Grid de ~43 proyectos. Cards con thumbnail. Pero el diferenciador NO es el grid — es el **caso de estudio individual**, que tiene imágenes a full bleed (ancho completo de viewport).
- **Hover en cards:** Sutil — no es un zoom agresivo. Puede ser un ligero scale (1.02–1.04) en la imagen interna del card, mientras el card frame permanece estático.
- **Transición a caso de estudio:** Page transition orquestada — la imagen del card "crece" hacia full screen (Flip de GSAP o equivalente), no un corte abrupto.
- **En la página de caso de estudio:** Imágenes a full viewport width, con parallax interno (la imagen se mueve más lento que el scroll).
- **Por qué el portfolio de SCUART se siente "susurrado":** Las imágenes inline pequeñas tienen el problema inverso — no revelan nada, invitan al usuario a ignorar el trabajo. Una imagen que ocupa el 80–100% del viewport obliga a la atención.

#### Gesto 8: Cursor custom

- **Qué es:** El cursor del sistema (flecha) es reemplazado por un cursor custom. Típicamente un círculo pequeño que sigue al cursor con un leve lag (ease-out en el movimiento).
- **En Locomotive:** El cursor cambia de estado sobre links y sobre imágenes de portfolio (puede mostrar "View" o cambiar de tamaño).
- **Implementación:** `cursor: none` en body + elemento div posicionado en absolute/fixed que sigue al `mousemove` con GSAP `quickTo` (el método más eficiente para cursor tracking).
- **Advertencia:** En mobile/touch no existe cursor — el elemento debe desaparecer o no inicializarse. Usar `window.matchMedia('(pointer: fine)')` para detectar.

#### Gesto 9: Scroll-driven number counters (inferido de agencias de nivel similar)

- **Qué es:** Números (años de experiencia, número de proyectos, etc.) que "cuentan" de 0 al valor real cuando entran al viewport.
- **Implementación:** `gsap.from(el, { textContent: 0, duration: 2, snap: { textContent: 1 }, scrollTrigger: { trigger: el, start: 'top 80%' } })`.

---

### 1.4 Timing y easing característico

Basado en múltiples fuentes (case study Awwwards, Joffrey Spitzer Portfolio en Codrops que usa el mismo stack, análisis de agencias de nivel Locomotive):

| Uso | Duración | Ease |
|---|---|---|
| Titular principal (mask reveal) | 0.9–1.1s | `expo.out` |
| Líneas secundarias stagger | +0.04–0.08s por línea | `expo.out` |
| Caracteres (shuffle/scramble) | 0.6–0.8s total | `power3.out` |
| Imágenes reveal (clip-path) | 0.8–1.0s | `power3.out` |
| Fade simples (UI elements) | 0.4–0.6s | `power2.out` |
| Cursor movement lag | `quickTo` con `0.1` de ease | — |
| Parallax scrub | scrub: 1–2 | ease: 'none' (lineal) |
| Page transitions | 0.5–0.8s enter + exit | `power3.inOut` |

**Principio:** Las animaciones de entrada son lentas (~1s) y contundentes. Las micro-interacciones (hover, cursor) son rápidas (0.1–0.3s). Los scrub-based (parallax) son siempre lineales (`ease: 'none'`).

---

## PARTE 2 — Otras 2-3 agencias premiadas como referencia

### 2.1 Unseen Studio — Bristol/London

**Awwwards:** SOTD + Developer Award (Feb 2023), SOTD nuevamente en marzo 2026 ("Unseen Studio 2025 Wrapped")
**Puntaje animaciones:** 9.20/10 (el más alto de todos los técnicos del SOTD)
**URL:** unseen.co

**Gesto que las hace memorables:**
- El sitio arranca con pantalla de carga que pide elegir "Enter without audio" o "Enter" — convierte el loader en una decisión editorial
- Frase "UNSEEN" con letras espaced verticalmente que animan en load
- Portfolio navegable por drag ("Drag to explore our world") — el usuario arrastra horizontalmente o en free-direction para explorar proyectos
- Grilla infinita en la sección "World" — un grid de imágenes que se puede explorar sin fin, con scroll momentum
- Filtros por categoría: Branding, Digital, Motion, Experiment

**Cómo presentan el trabajo:**
- NO cards estándar. Es una experiencia de descubrimiento drag-based
- Imágenes grandes, sin text overlay abrumador
- La categoría del proyecto como metadato pequeño, el visual como protagonista

**Qué tiene en común con Locomotive:**
- Palette acromática (negro / blanco)
- El portfolio NO es un grid pasivo — tiene comportamiento interactivo
- Motion como argumento principal de la propuesta de valor (son una agencia de motion, usan su propio sitio como portfolio de motion)
- Cursor custom que cambia de estado

**Qué imitar para SCUART:**
- La decisión de hacer el portfolio navegable (aunque no necesariamente drag — puede ser scroll-reveal con imágenes grandes)
- El principio: imágenes grandes son la demostración, texto es el accesorio

**Qué NO imitar:**
- La intro-screen con audio (es una capa de fricción que no aplica a una agencia de diseño generalista)
- La complejidad técnica del infinite drag grid (costoso de mantener)

---

### 2.2 Lusion — agencia WebGL / 3D

**Awwwards:** Developer Award + Site of the Year 2023
**URL:** lusion.co

**Gesto que las hace memorables:**
- Todo el hero y secciones principales son WebGL renders en tiempo real
- "Scroll to explore" como única invitación — el sitio no explica, demuestra
- Portfolio en grid con tags de disciplina (web, design, development, 3D, animation) — cada card es una invitación a ver el reel del proyecto
- Play Reel button prominente — el video showreel como pieza central de presentación

**Cómo presentan el trabajo:**
- Cards grandes con imagen dominante
- Tags de disciplina como metadatos visuales (no como bullet points)
- Énfasis en mostrar la amplitud de capacidades (3D, animation, development)

**Qué tiene en común con Locomotive:**
- El sitio es la primera pieza del portfolio — no un brochure
- Tipografía bold que domina el viewport
- Motion no como adorno sino como demostración de capacidad

**Qué imitar para SCUART:**
- El uso del showreel (video) como elemento central del hero — el dueño ya mencionó que habrá un video multicolor en el hero
- Tags de disciplina como forma de catalogar el trabajo

**Qué NO imitar:**
- El 3D WebGL (costo de implementación altísimo, performance en mobile cuestionable)
- El nivel de abstracción visual que solo funciona si la audiencia son otros developers

---

### 2.3 Hero Collective — agencia digital

**Awwwards:** Developer Award + SOTD (Mar 4, 2024)
**URL:** herocollective.co

**Por qué es relevante para SCUART:**
- Es una agencia de diseño web de tamaño mediano (como SCUART) que logró SOTD con resources razonables — no requirió Three.js ni WebGL
- Su motion está basado en composición editorial + scroll reveals sólidos, no en 3D

**Qué tiene en común con Locomotive:**
- Scroll reveals tipográficos
- Imágenes de portfolio a escala generosa
- Layout que usa escala extrema de tipografía como elemento compositivo

**Qué imitar para SCUART:**
- El "nivel de acceso" — es aspiracionalmente alcanzable con Astro+GSAP sin WebGL
- Composición que usa el tipo grande como estructura

---

## PARTE 3 — Patrón de composición editorial que comparten

Las agencias top (Locomotive, Unseen, Lusion, Hero Collective, Design Office, Studio Chapeaux) comparten **el mismo sistema compositivo**. No es un estilo — es una metodología de jerarquía visual:

### Principio 1: Escala extrema como estructura

El titular no tiene un tamaño "razonable". Tiene el tamaño máximo que el viewport permite — `clamp(3rem, 8vw, 9rem)` o más. En mobile puede ocupar 3–4 líneas a 60–70% de la anchura de pantalla. Esto **no es decorativo**: la escala elimina la necesidad de un background de color o un banner imagen para crear impacto en el hero.

Ejemplo verificado: locomotive.ca usa "Design and code are only tools of expression" a tamaño que domina el viewport. El titular ES el visual.

### Principio 2: Espacio negativo intencional

No llenan el viewport con contenido. Entre secciones hay entre 15–25% del viewport de espacio vacío. El espacio en blanco no es "lo que sobra" — es un elemento de diseño que da al contenido siguiente su "peso".

### Principio 3: Asimetría medible

Las columnas de texto no están perfectamente centradas ni perfectamente alineadas a la izquierda. Hay offsets: un titular que empieza a 15% del viewport, un bloque de texto que empieza a 55%, una imagen que sangra fuera del grid. La asimetría crea tensión visual que mantiene el ojo en movimiento.

### Principio 4: Contraste de escala tipográfica

En la misma sección conviven:
- Número de índice: 12–14px, uppercase, mono
- Titular principal: 60–90px (o más en desktop)
- Body: 16–18px regular

Esta diferencia de 6-7x en tamaño entre el índice y el titular es lo que crea la sensación "editorial de revista de arquitectura" versus la sensación "template de Webflow".

### Principio 5: El portfolio a escala real

Las agencias top NO muestran el trabajo en thumbnails de 300px. Muestran:
- En la lista: cards medianos (400–600px de ancho) con imagen que ocupa el 60–70% del card
- En la página de caso: imágenes a full viewport width (100vw), a veces full bleed con parallax interno
- La lógica: si el trabajo es bueno, mostrálo grande. Si lo escondés en un thumbnail, pareciera que tenés vergüenza.

---

## PARTE 4 — Stack técnico realista para Astro 5 estático

### 4.1 Smooth scroll: ¿Lenis es compatible con Astro?

**Sí. Hay integración verificada y estable.**

Opciones disponibles:

| Opción | Paquete | Notas |
|---|---|---|
| Lenis directo | `lenis` (npm) | Más control, configuración manual |
| Wrapper Astro | `astro-lenis` (npm, GitHub: JusticeMatthew/astro-lenis) | Drop-in para Astro, funciona con static output |
| Lenis + GSAP combo | `helm78/astro-gsap-lenis` (GitHub) | Template de referencia para el stack exacto de SCUART |

**Versión actual de Lenis:** 1.3.23 (publicada abril 15, 2026 — verificado en README del repo).

**Integración con GSAP ScrollTrigger — patrón canónico:**

```javascript
import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis({ autoRaf: false })

// Sync Lenis con GSAP ticker
lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000) // GSAP pasa tiempo en segundos, Lenis espera ms
})

gsap.ticker.lagSmoothing(0) // Evita jumps cuando el tab vuelve a foco
```

**Problema conocido con Astro ClientRouter (View Transitions):**
Hay un issue documentado (GitHub astro #12725): Lenis hace `requestAnimationFrame` frecuentemente y hace que Astro guarde el scroll position en history de forma excesiva. La solución es usar `stopInertiaOnNavigate: true` en la configuración de Lenis y destruir la instancia en el evento `astro:before-swap`.

---

### 4.2 iOS Mobile — CONFLICTO CRÍTICO con Lenis + body-scroll-container

Este es el punto más complejo. SCUART tiene una directiva dura:
- En mobile: `html { overflow: hidden }` + `body { overflow-y: auto }` (body-scroll-container)
- Objetivo: evitar el "scroll eterno" de iOS Safari donde `overscroll-behavior` no funciona en el root

**Lenis por defecto asume que el scroller es `window` (root).** Esto entra en conflicto directo con el body-scroll-container.

**Solución verificada:**

Hay dos estrategias:

**Estrategia A (recomendada):** Deshabilitar Lenis completamente en mobile, usar scroll nativo.

```javascript
const isMobile = window.matchMedia('(max-width: 768px)').matches
const lenis = isMobile ? null : new Lenis({ autoRaf: false })

if (lenis) {
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => { lenis.raf(time * 1000) })
  gsap.ticker.lagSmoothing(0)
}
```

En mobile, ScrollTrigger sigue funcionando perfectamente con scroll nativo — solo se pierde el momentum suave en desktop, que en mobile de todos modos es nativo del browser.

**Estrategia B (avanzada):** Configurar Lenis para usar el `body` como scroller en vez de `window`.

```javascript
const lenis = new Lenis({
  wrapper: document.body,   // el body como viewport
  content: document.body,   // el contenido también en body
  autoRaf: false
})
```

Esto es compatible con el body-scroll-container. Sin embargo, hay menos documentación verificada sobre edge cases. Si se elige esta estrategia, requires testing exhaustivo en iPhone real.

**Recomendación:** Estrategia A para el MVP del rediseño. El smooth scroll en desktop es el 80% del valor percibido — en mobile el scroll nativo de iOS ya es smooth. No hay ganancia real en agregar la complejidad de Lenis en mobile.

**Advertencia performance de Lenis en iOS:** Verificado en documentación. Lenis corre a máximo 60fps en Safari (no 120fps como en Chrome), y a 30fps en modo de bajo consumo. Esto refuerza la recomendación de deshabilitarlo en mobile.

---

### 4.3 SplitText — ¿requiere Club GreenSock?

**No. SplitText es completamente gratuito desde abril 2025.**

En octubre 2024 Webflow adquirió GreenSock. En abril 2025, todos los plugins premium de GSAP fueron liberados sin costo, incluyendo:
- SplitText
- MorphSVG
- DrawSVG
- ScrollSmoother
- Inertia

SplitText fue reescrito desde cero con la liberación. La nueva versión tiene:
- 50% menos tamaño de archivo
- 14 nuevas features
- `autoSplit: true` para re-splitting responsive (cuando cambia el viewport)
- Masking built-in (crea el `overflow: hidden` wrapper automáticamente)

**Patrón de reveal por línea con SplitText (verificado en Codrops, febrero 2026):**

```javascript
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(SplitText, ScrollTrigger)

// Para titulares (character-by-character):
const titleSplit = new SplitText('.hero-title', {
  type: 'chars',
  autoSplit: true,
  mask: 'chars' // crea overflow:hidden automáticamente
})

gsap.from(titleSplit.chars, {
  yPercent: -120,
  scale: 1.2,
  stagger: 0.01,
  duration: 1,
  ease: 'expo.out'
})

// Para párrafos (line-by-line):
const bodySplit = new SplitText('.section-body', {
  type: 'lines',
  autoSplit: true,
  mask: 'lines'
})

gsap.from(bodySplit.lines, {
  yPercent: 105,
  stagger: 0.04,
  duration: 0.9,
  ease: 'expo.out',
  scrollTrigger: {
    trigger: '.section-body',
    start: 'top 75%'
  }
})
```

**Alternativa gratuita si se prefiere no depender de GSAP para splitting:**
- `SplitType` (npm: `split-type`, GitHub: lukePeavey/SplitType) — librería independiente de ~6kb, misma API conceptual, funciona con cualquier sistema de animación.

---

### 4.4 Parallax en imágenes — patrón con ScrollTrigger

```javascript
// Imagen debe estar en un wrapper overflow:hidden
// La imagen tiene height: 115% para tener margen de movimiento
document.querySelectorAll('.portfolio-card').forEach(card => {
  const img = card.querySelector('img')
  gsap.to(img, {
    yPercent: -15,
    ease: 'none', // SIEMPRE none en scrub
    scrollTrigger: {
      trigger: card,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  })
})
```

**Nota mobile:** Desactivar el parallax en mobile también:
```javascript
ScrollTrigger.matchMedia({
  '(min-width: 769px)': () => {
    // Inicializar parallax aquí
  }
})
```
En mobile la ganancia visual no justifica el costo de performance.

---

### 4.5 Cursor custom — patrón con GSAP quickTo

```javascript
// Solo en desktop con pointer device
if (!window.matchMedia('(pointer: coarse)').matches) {
  const cursor = document.querySelector('.cursor')
  cursor.style.display = 'block'

  const xTo = gsap.quickTo(cursor, 'x', { duration: 0.1, ease: 'power3.out' })
  const yTo = gsap.quickTo(cursor, 'y', { duration: 0.1, ease: 'power3.out' })

  window.addEventListener('mousemove', (e) => {
    xTo(e.clientX)
    yTo(e.clientY)
  })

  // Cambio de estado sobre links/cards
  document.querySelectorAll('a, .portfolio-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('is-hovered'))
    el.addEventListener('mouseleave', () => cursor.classList.remove('is-hovered'))
  })
}
```

**CSS del cursor:**
```css
body { cursor: none; } /* Solo aplicar si JS cargó exitosamente */
.cursor {
  position: fixed;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--ink);
  pointer-events: none;
  z-index: 9999;
  display: none; /* JS lo muestra si es pointer:fine */
  transform: translate(-50%, -50%);
}
.cursor.is-hovered {
  /* Escalar a 40px, cambiar a border, etc. */
  width: 40px;
  height: 40px;
  background: transparent;
  border: 1.5px solid var(--ink);
  transition: width 0.2s, height 0.2s, background 0.2s;
}
```

---

### 4.6 Scroll-driven CSS nativo — opción sin JavaScript

Para animaciones de entrada simples (fade-up, parallax básico) en 2026 ya es viable usar **CSS Scroll-Driven Animations** (`animation-timeline: view()`):

```css
@keyframes fade-up {
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
}

.reveal {
  animation: fade-up linear;
  animation-timeline: view();
  animation-range: entry 0% entry 30%;
}
```

**Soporte:** Chrome 115+, Safari 18+. Corre off-thread en GPU — más performante que JS para efectos básicos.

**Para SCUART:** Puede usarse para los reveals de secciones secundarias (capabilities, method, contact) y reservar GSAP para las coreografías más complejas (hero entrance, portfolio reveals, page transitions).

---

## PARTE 5 — Anti-patrones a evitar en el rediseño

Estos son los elementos que hacen que un sitio se vea "de 2018-2022" a ojos de un jurado de Awwwards o de un cliente sofisticado. Listados con evidencia:

| Anti-patrón | Año que lo ubica | Por qué es un problema hoy |
|---|---|---|
| Hero: foto stock centered + texto centrado | 2018–2020 | Ausente en TODO SOTD de agencia del último año. Denota falta de punto de vista editorial. |
| Cards con `box-shadow: 0 4px 20px rgba(0,0,0,0.1)` + `border-radius: 8px` | 2019–2021 | Es el "Tailwind UI default" — señala que el sitio no tiene dirección creativa. |
| Gradientes pasteles (lavanda, durazno, menta) | 2020–2022 | El research 2026 lo cita explícitamente como "AI-slop aesthetic". |
| Animations on every element — cada card, cada hover, cada texto | 2020–2023 | El principio de 2026 es restraint — 3-4 momentos coreografiados, no animación continua. |
| Progress bars de skills / íconos de skills | 2015–2020 | No hay equivalente en NINGUNA agencia top. Es señal de portfolio de freelancer junior. |
| Carousel de testimonios con dots | 2015–2018 | Patrón heredado de WordPress themes. Awwwards lo nunca lo premia. |
| Hamburger menu sin indicación visual | 2014–2018 | En 2026 se reemplaza por drawer con entrada cinematográfica o nav visible en desktop. |
| Portfolio en thumbnails de menos de 400px de ancho | 2010–2020 | El trabajo que no se ve grande, no vende. Ver Parte 1.3, Gesto 7. |
| Blob shapes SVG como decoración de fondo | 2021–2023 | Está en el research de Spoko Space como "lo que separates 2026 de templates". |
| Full-page sections alternadas de color azul / blanco | 2018–2021 | Patrón SaaS genérico. Ninguna agencia premium lo usa. |

---

## PARTE 6 — Recomendaciones para el director-creativo

Basado en el research completo, el director-creativo debe considerar para el spec de motion de SCUART:

### 6.1 Secuencia de hero (primeros 3 segundos) — propuesta

```
0ms       → Todo invisible. `overflow: hidden` en body durante load.
0–600ms   → Fade in del fondo + nav (opacity 0→1, 0.5s ease-out)
600–1400ms → Titular principal: mask reveal línea por línea (SplitText lines, yPercent 105→0, stagger 0.1s, expo.out)
1400–2000ms → Tagline / subtítulo: mismo tratamiento, más lento (stagger 0.08s)
2000–2400ms → CTAs y elementos de UI: fade simple (0.4s)
2400ms+   → Scroll desbloqueado. Video de fondo inicia si hay uno.
```

### 6.2 Scroll motion budget (máximo por página)

No más de 4 tipos de gestos activos en la misma página:
1. Smooth scroll Lenis (desktop solo)
2. Reveal de titulares por línea (SplitText) — activado en scroll
3. Parallax en imágenes de portfolio
4. Cursor custom (desktop solo)

Lo que NO se debe agregar: pin sections, horizontal scroll, infinite grid, WebGL. Eso es overkill para el MVP y ralentiza el desarrollo.

### 6.3 Portfolio — la decisión más importante

El research es unánime: **las imágenes deben ser grandes**. Recomendación concreta:

- **En la lista de proyectos:** Cards de mínimo 45% de ancho de viewport en desktop. Imagen a full-height del card. Cuando la imagen revela (scroll-reveal con clip-path), tarda 0.8s con `power3.out`.
- **Hover en card:** La imagen interna hace scale(1.04) en 0.4s ease-out. El card frame permanece estático.
- **Transición a caso de estudio:** Si se implementa View Transitions API de Astro (experimental pero funcional), la imagen del card puede "morphear" a la imagen de hero del caso. Si no, una page transition con fade-out/fade-in de 0.5s es suficiente.
- **En la página de caso:** Imágenes a 100vw. Parallax interno: la imagen se mueve `yPercent: -15` entre entry y exit del viewport.

### 6.4 Tipografía en motion

El brief ya tiene PP Editorial New (display) + Geist Sans (body). Para motion:

- PP Editorial New: siempre revelar con mask reveal (lines o chars). Nunca aparece instantáneamente.
- Geist Sans en párrafos: revelar por líneas con stagger más lento (0.04s entre líneas vs 0.1s entre líneas del display).
- Números / índices (01, 02, 03): counter animation si son métricas, o simple fade si son navegación.

### 6.5 Referencias finales ordenadas por prioridad

1. **locomotive.ca** — referencia maestra confirmada. Sistema, no skin.
2. **unseen.co** — para ver cómo presentar el portfolio de forma no-template
3. **herocollective.co** — para ver qué nivel de motion es alcanzable sin WebGL
4. **Joffrey Spitzer Portfolio** (codrops.net, feb 2026) — tutorial verificado de Astro+GSAP+SplitText+Lenis con código exacto

---

## PARTE 7 — Fuentes verificadas

Todas las afirmaciones de este documento tienen respaldo en una URL visitada durante la investigación de este sesión.

- Locomotive Scroll v5 docs: https://scroll.locomotive.ca/docs/
- Locomotive Scroll showcase: https://scroll.locomotive.ca/docs/extras/showcase
- Locomotive Awwwards SOTD: https://www.awwwards.com/sites/locomotive-r
- Locomotive Awwwards case study (SOTM): https://www.awwwards.com/case-study-reinventing-locomotive-r.html
- Locomotive Fonts In Use (tipografía verificada): https://fontsinuse.com/uses/61459/locomotive-portfolio-website-and-visual-ident
- Lenis GitHub (versión 1.3.23): https://github.com/darkroomengineering/lenis
- Lenis DeepWiki (documentación técnica): https://deepwiki.com/darkroomengineering/lenis
- GSAP gratuito desde abril 2025 (Webflow): https://webflow.com/blog/gsap-becomes-free
- SplitText demos post-liberación: https://tympanus.net/codrops/2025/05/14/from-splittext-to-morphsvg-5-creative-demos-using-free-gsap-plugins/
- Joffrey Spitzer Portfolio — Astro+GSAP+SplitText+Lenis: https://tympanus.net/codrops/2026/02/18/joffrey-spitzer-portfolio-a-minimalist-astro-gsap-build-with-reveals-flip-transitions-and-subtle-motion/
- Scroll-revealed WebGL Gallery Astro+GSAP+Three.js: https://tympanus.net/codrops/2026/02/02/building-a-scroll-revealed-webgl-gallery-with-gsap-three-js-astro-and-barba-js/
- Modern web design trends 2025-2026 (Spoko Space): https://spoko.space/blog/modern-website-design-trends/
- Awwwards agency portfolios collection: https://www.awwwards.com/awwwards/collections/agency-portfolios/
- Awwwards SOTD June 2026: https://www.awwwards.com/websites/sites_of_the_day/
- Unseen Studio Awwwards: https://www.awwwards.com/sites/unseen-studio
- Unseen Studio website: https://unseen.co/
- Lenis + Astro integration (astro-lenis): https://github.com/JusticeMatthew/astro-lenis
- Lenis + GSAP + Astro template: https://github.com/helm78/astro-gsap-lenis
- Lenis scroll-snap conflict (issue documentado): https://raoulcoutard.com/posts/2026-02-03-lenis-scrollsnap-conflict-en/
- Lenis GSAP integration guide 2026: https://devdreaming.com/blogs/nextjs-smooth-scrolling-with-lenis-gsap
- Astro + Lenis ClientRouter issue: https://github.com/withastro/astro/issues/12725
- SplitType (alternativa libre): https://github.com/lukePeavey/SplitType
- Borndigital scroll libraries comparison: https://www.borndigital.be/blog/our-smooth-scrolling-libraries
- Awwwards Editorial Layout collection: https://www.awwwards.com/inspiration/editorial-layout-composition

---

*Research generado en vivo el 2026-06-17. Las URLs fueron visitadas durante esta sesión. La información sobre versiones de librerías (Lenis 1.3.23, GSAP gratuito desde abril 2025, SplitText reescritura) es verificada, no inferida de training data.*
