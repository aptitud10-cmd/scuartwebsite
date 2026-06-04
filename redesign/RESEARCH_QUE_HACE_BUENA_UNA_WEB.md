# Research: Qué Hace Realmente Buena una Web de Agencia

**Fecha:** Junio 2026  
**Contexto:** El primer intento de rediseño de scuart.com se sintió "pobre, vacío, aburrido, sin alma, template, motion flojo". Este documento existe para entender exactamente POR QUÉ y cómo se corrige.  
**Fuentes:** Web search activo junio 2026, fetch de sitios premiados reales, Awwwards SOTD mayo-junio 2026.

---

## 1. Sitios de Referencia Reales (Premios mayo-junio 2026)

### Awwwards SOTD — Agencias y Estudios (Mayo-Junio 2026)

| Sitio | URL | Premio | Fecha |
|-------|-----|--------|-------|
| REF Digital | https://ref.digital/ | SOTD + Developer Award | Jun 02, 2026 |
| aino.agency | https://aino.agency | SOTD + Developer Award | May 20, 2026 |
| KVS Studio | https://www.kvs.services/ | SOTD + FWA of the Day | May 17, 2026 |
| Juan Mora portfolio | https://juanmora.co/ | SOTD | May 15, 2026 |
| Simonholm.studio | https://www.simonholm.studio/ | SOTD | May 09-10, 2026 |
| Studio Namma | https://studionamma.com/ | SOTD + Developer Award | May 08, 2026 |
| Obys Agency | https://obys.agency/ | Developer Award + Honors | Abril 2026 |

### Referencias premium permanentes

| Estudio | URL | Por qué es referencia |
|---------|-----|-----------------------|
| Locomotive | https://locomotive.ca/en | 7x Awwwards Agency of the Year. El techo del minimalismo con alma. |
| Unseen Studio | https://unseen.co/ | Toggle de sonido, drag to explore, experiencia inmersiva sin WebGL pesado. |
| Cuberto | https://cuberto.com/ | Awwwards Agency of the Year. Micro-interacciones perfectas, densidad equilibrada. |
| Obys Agency | https://obys.agency/ | Typeface propia (OTF Obys NG), transición dark→light que narra una historia. |
| Lusion | https://lusion.co/ | WebGL 3D integrado orgánicamente con layouts tradicionales — el referente en 3D. |
| Active Theory | https://activetheory.net/ | WebGL a pantalla completa, formas geométricas reactivas al mouse. |
| Joffrey Spitzer | https://joffreyspitzer.com/ | Portfolio GSAP+Astro con flip transitions y reveals que ganó reconocimiento en 2026. |
| For The People | https://www.forthepeople.agency/ | Image trail al hover — las imágenes de trabajos aparecen siguiendo el cursor. |
| 27b Studio | https://27-b.com/ | Editorial minimalista. Texto rojo "VIEW/SOON" que abarca toda la pantalla al hover. |
| Haptic Studio | https://haptic.studio/ | Naranja + negro. Copy sin espacios en el hero que genera "legibilidad progresiva". |
| Datalands | https://datalands.co/ | Typeface Ozik en blanco y negro que inyecta personalidad instantánea. |
| Plusdrie | https://plusdrie.com/ | Scroll-triggered scaling: el showreel se expande a pantalla completa al scrollear. |

---

## 2. Análisis Concreto: Qué Hace a Cada Sitio Destacar

### Locomotive (la referencia maestra)
**Estructura:** Hero con declaración directa ("Digital-first Design Agency"), navegación de 4 ítems.  
**Tipografía:** Solo 2 fuentes — Editorial New (serif) + Helvetica Now. Su identidad ES su tipografía propia (PP Locomotive New) con glifos con chistes internos del equipo.  
**Motion:** GSAP ThrowProps para drag-navigation del portfolio. Three.js para equipo en 3D fotogramétrico. Letter shuffle en tipo. Custom shaders. **Sin cursor personalizado. Sin partículas. Sin botones magnéticos.**  
**Lo que lo hace tener alma:** Cada pixel refleja su filosofía. Su portafolio es un grid navegable con drag — el usuario explora, no consume. La imperfección intencional en sus modelos 3D (glitchy) dice más que la perfección.  
**Lección:** Es premium porque QUITA. No agrega efectos — agrega significado.

### Obys Agency
**Estructura:** 19 proyectos en galería con numeración paralela (dos secuencias), categorías y servicios por proyecto.  
**Tipografía:** OTF Obys NG — typeface neo-grotesque custom creada para ellos. La transición de su rebrand va de dark a light, del logo viejo al nuevo: el diseño mismo cuenta la historia del cambio.  
**Lo que lo hace tener alma:** Sistema de números (01-80) que crea sensación de profundidad y archivo, no de portfolio básico. Copy de posicionamiento directo sin fanfarria.

### Unseen Studio
**Estructura:** 4 secciones (Index, Projects, Contact, World). Toggle de sonido desde el inicio.  
**Motion:** "Click & Hold" + "Drag to explore our world" — mecánicas de arrastre. Hover states con previews de proyectos animadas.  
**Lo que lo hace tener alma:** La dimensión sonora opcional. El concepto de "mundo" para explorar. Cada interacción sorprende sin saturar.

### For The People
**Hero:** "PEOPLE DESERVE BETTER BRANDS / WHY DO ALL THE CARS, PHONES, AND BUILDINGS LOOK THE SAME?" — una pregunta retórica que golpea.  
**Técnica clave:** Image trail. Al pasar el cursor por la lista de proyectos, las imágenes aparecen siguiendo el mouse, caen, rebotan, desaparecen. No es decorativo — es la forma en que presentan su trabajo.  
**Lo que lo hace tener alma:** El copy tiene voz humana. Los valores ("Acknowledgement of Country") no son formalidad — posicionan propósito real.

### Joffrey Spitzer Portfolio (2026)
**Reveals:** SplitText de GSAP — títulos por carácter con `yPercent: -120`, escala `1.2`, easing `expo.out` durante `1s`. Párrafos línea por línea con `yPercent: 105`, stagger `0.04s`, duración `0.9s`.  
**Flip Transitions:** GSAP Flip plugin. El enlace del menú SE CONVIERTE en el título de la página de destino. El portfolio cambia de slider a grid animando cada elemento desde su posición anterior.  
**Timing que lo hace premium:** Entradas `expo.out`, transiciones `expo.inOut`. Duraciones entre `0.8s` y `1s`. Stagger consistente `0.01-0.04s`. Nunca más rápido ni más lento.

### Plusdrie
**Scroll storytelling:** El showreel comienza como elemento normal en la página. Al hacer scroll, escala hasta ocupar toda la pantalla. Al hacer click, se convierte en reproductor de video a pantalla completa.  
**Por qué funciona:** No hay botón "ver video" — el scroll mismo revela el contenido. El gesto crea el descubrimiento.

### 27b Studio
**Hero:** "Scroll Now." — dos palabras. Propuesta: "27b creates design solutions for brands driving the new wave in entertainment, culture, and commerce."  
**Hover state clave:** Texto rojo "VIEW/SOON" que abarca la página completa al hover, como portada de revista. No es un badge — es una declaración.  
**Editorial:** Proyectos como links de texto con categorías. Timestamps en tiempo real de dos oficinas. Confianza total en el texto sin necesitar imágenes grandes.

### Haptic Studio
**Paleta:** Naranja + negro — bold, sin miedo.  
**Hero copy:** "Wedesignbrands,products,anddigitalexperiencesthatbringclaritytocomplexideas" — sin espacios. El texto revela su contenido solo al animarse. Esta técnica de "legibilidad progresiva" hace que el hero sea activo, no pasivo.  
**Urgencia:** "1 slot left for June" en el header. No genérico — específico y temporal.

---

## 3. El Análisis de "Caro vs Vacío" — La Pregunta Central

### Por qué el primer rediseño se sintió vacío

Un sitio puede tener mucho whitespace y verse caro, o puede tener mucho whitespace y verse pobre. La diferencia no es el espacio en sí — es lo que hay dentro de ese espacio y cómo está calibrado.

**Vacío se produce cuando:**

1. **El whitespace no tiene intención.** En un sitio premium, el espacio alrededor de un elemento lo jerarquiza. En uno vacío, el espacio solo existe porque no se pensó qué poner ahí. La diferencia: en uno, el espacio habla. En otro, el espacio calla.

2. **La tipografía es genérica y estática.** Inter en todo, mismo peso, mismo tamaño sin tensión. Cuando la tipografía no tiene personalidad ni movimiento, el sitio se lee como placeholder.

3. **El motion es decorativo, no narrativo.** Fade-in en cada elemento al scrollear no es motion design — es ruido. El sitio se mueve pero no dice nada con ese movimiento. El usuario entiende inconscientemente que la animación no aporta información.

4. **No hay textura ni profundidad.** Un fondo negro liso + texto blanco + elementos flotando sin ancla. Sin grain, sin ruido, sin material, el sitio se lee como renderizado genérico de AI, no como algo hecho con craft.

5. **El copy es descriptivo, no tiene voz.** "Somos una agencia de diseño digital que crea experiencias únicas." Cero personalidad. Cualquier agencia podría decir eso. El sitio no tiene un punto de vista.

6. **No hay momentos de sorpresa.** El usuario puede predecir exactamente qué encontrará en cada sección. Hero, servicios, portfolio, contacto. Nada interrumpe la expectativa. Nada hace que el usuario piense "eso no lo esperaba".

### Por qué un sitio minimalista con whitespace se ve CARO en cambio:

| Factor | Vacío (pobre) | Caro (premium) |
|--------|---------------|----------------|
| **Whitespace** | Existe porque no hay decisiones | Existe porque jerarquiza algo específico |
| **Tipografía** | Inter 400 en todo | Una display con personalidad + body legible, tensión de pesos |
| **Fondo** | Color liso plano | Color liso + grain sutil (opacity 0.3-0.4) que agrega material |
| **Motion** | Fade-in en cada elemento | 2-3 animaciones que cuentan algo: reveal de texto, transformación en scroll |
| **Hover states** | Sin reacción o transform básico | Respuesta precisa: image trail, texto que se transforma, cursor que cambia |
| **Copy** | Descriptivo genérico | Tiene una voz, un punto de vista, incluso actitud |
| **Color** | Neutrales sin acento o acento genérico | Neutrales + UN acento que se usa con disciplina |
| **Timing de animaciones** | Duraciones inconsistentes, easing lineal | 0.8-1s con `expo.out`, stagger calibrado `0.01-0.04s` |
| **Profundidad** | Todo en el mismo plano visual | Elementos a diferentes profundidades perceptuales |
| **Densidad** | Partes llenas + partes completamente vacías sin ritmo | Ritmo visual: tensión y respiro calculados |

### La regla del "material"

Los sitios premium tienen una calidad de **material** — se sienten como si fueran hechos de algo. El grain/noise overlay sobre el fondo no es decoración: es la simulación de textura física, como papel prensado o película cinematográfica. Sin eso, el fondo se ve generado por computadora (que lo es, pero no debería sentirse así).

### La regla de los "momentos"

Los mejores sitios de agencia tienen entre 2 y 4 "momentos" que el usuario no puede predecir: un hover que revela algo inesperado, un scroll que transforma un elemento, un cursor que arrastra imágenes, un texto que se convierte en otro. No es que tengan muchos efectos — es que los pocos que tienen son genuinamente sorprendentes.

---

## 4. Patrones de Motion que se Sienten Premium

### Los que funcionan (y por qué)

**A. SplitText reveal por caracteres con máscara**
- Técnica: GSAP SplitText + `yPercent: -120` + `expo.out` + `1s` por carácter
- Por qué se siente caro: el texto parece emerger de detrás del mundo, no aparece de la nada
- Cuándo usarlo: headlines del hero, títulos de secciones principales
- Cuándo NO usarlo: cuerpo de texto, párrafos largos

**B. Scroll-driven scaling (tipo Plusdrie)**
- Técnica: GSAP ScrollTrigger + `scrub: true` + scale desde elemento normal a pantalla completa
- Por qué se siente caro: el usuario hace el gesto y el sitio responde — hay agencia
- Cuándo usarlo: showreel, imagen hero, caso de estudio principal
- Cuándo NO usarlo: en múltiples elementos simultáneos (distrae)

**C. Image trail al hover (tipo For The People)**
- Técnica: GSAP, imágenes que aparecen siguiendo el cursor con `threshold` de distancia, caen con gravedad (`back.in` easing), desaparecen
- Por qué se siente caro: comportamiento físico inesperado — el sitio se comporta como objeto del mundo real
- Cuándo usarlo: lista de proyectos del portfolio
- Cuándo NO usarlo: en el hero (demasiado ruido visual)

**D. Flip transition entre estados (tipo Joffrey Spitzer)**
- Técnica: GSAP Flip plugin — captura estado inicial, aplica CSS nuevo, anima suavemente entre posiciones
- Por qué se siente caro: crea ilusión de continuidad espacial — los elementos no desaparecen y reaparecen, SE TRANSFORMAN
- Cuándo usarlo: transiciones de página, cambio de vista portfolio (grid/lista)
- Cuándo NO usarlo: transiciones frecuentes (se vuelve ruido)

**E. Dual-wave text animation (tipo scroll)**
- Técnica: GSAP + fórmula senoidal + Lenis — dos filas de texto que se mueven en ondas opuestas al scrollear
- Por qué se siente caro: comportamiento orgánico, casi biológico — se aleja de lo rígido
- Cuándo usarlo: sección de servicios, lista de clientes
- Cuándo NO usarlo: en texto que necesita ser leído con facilidad

**F. Page transition con clip-path o mask**
- Técnica: GSAP timeline — máscara animada que cubre y descubre la pantalla al navegar
- Por qué se siente caro: el sitio tiene memoria entre páginas — no son páginas, es un espacio continuo
- Cuándo usarlo: en TODAS las navegaciones internas (consistencia es clave)
- Cuándo NO usarlo: nunca — si decidís usarlo, debe estar en todos lados

**G. Kinetic typography con variable fonts**
- Técnica: CSS `font-variation-settings` + `font-weight` interpolado con scroll position
- Por qué se siente caro: la tipografía respira, tiene vida propia — es una entidad, no un texto
- Cuándo usarlo: headline del hero, títulos de secciones grandes
- Cuándo NO usarlo: body text, CTAs

### Los que se ven baratos/genéricos

- `whileInView` de Framer Motion en CADA elemento → el sitio parece generado por tutorial de YouTube
- Stagger de caracteres aleatorio sin propósito narrativo
- Parallax agresivo en imágenes hero
- Scroll horizontal mal implementado (sin feedback claro de que hay más contenido)
- Hover states solo con `transform: scale(1.05)` sin nada más
- Animaciones de entrada que tardan más de 1.2s (se sienten lentas, no premium)
- Easing lineal en cualquier cosa visible

### Timing de referencia (los sitios premium calibran esto)

| Tipo de animación | Duración | Easing recomendado |
|-------------------|----------|--------------------|
| Reveal de carácter | 0.8-1s | `expo.out` |
| Reveal de línea de texto | 0.9s | `expo.out` |
| Fade de imagen | 0.7-0.8s | `power2.out` |
| Page transition (entrada) | 0.6-0.8s | `expo.inOut` |
| Hover response | 0.13-0.2s | `power2.out` |
| Scroll-driven (scrub) | Ligado al scroll | `none` o `power1.out` con lag |
| Stagger entre elementos | 0.04-0.08s | — |

---

## 5. Decisiones Concretas que Separan Excelente de Genérico (Las 12)

### Decisión 1: Una fuente con personalidad (no Inter en todo)
**Genérico:** Inter en headlines y body. Neutro, legible, sin personalidad.  
**Excelente:** Una fuente display con carácter para headlines (Monument Extended, Editorial New, PP Neue Montreal, Fraunces) + body legible (Inter, Neue Haas Grotesk). La tensión entre las dos crea jerarquía visual real.  
**Para scuart:** Elegir una sola display font y usarla con confianza en headlines grandes. Nada más.

### Decisión 2: Grain/noise sobre el fondo
**Genérico:** Fondo negro liso. Se lee como Figma, no como producto real.  
**Excelente:** Grain sutil en SVG o CSS (opacity 0.3-0.4) sobre el fondo. Agrega "material" — el sitio se siente hecho, no renderizado.  
**Implementación CSS:** `background-image: url("data:image/svg+xml,...")` con filtro turbulence, o un PNG de noise en pseudo-elemento con `mix-blend-mode: overlay`.

### Decisión 3: El acento de color se usa con disciplina de lujo
**Genérico:** El color de acento aparece en botones, borders, hover states, iconos, gráficos. Está en todos lados.  
**Excelente:** El acento aparece en 3-4 lugares máximo en toda la home. Su escasez lo hace llamativo cuando aparece.  
**Regla práctica:** Si podés quitar el acento de un elemento y el elemento sigue funcionando visualmente, quitalo.

### Decisión 4: Copy con voz, no copy descriptivo
**Genérico:** "Somos una agencia de diseño web especializada en crear experiencias digitales únicas para marcas."  
**Excelente:** "PEOPLE DESERVE BETTER BRANDS" (For The People). "Design and code are only tools of expression" (Locomotive). "Move fast, build to last" (REF Digital).  
**Para scuart:** El headline del hero no puede ser descripción de servicios. Tiene que ser una declaración con actitud. Cuál es el punto de vista de scuart sobre el diseño web?

### Decisión 5: El hero no puede ser predecible
**Genérico:** Headline grande + subheadline + CTA + imagen/mockup a la derecha.  
**Excelente:** Algo que el usuario no esperaba. Texto sin espacios que revela su contenido al animarse (Haptic). Pregunta retórica que golpea (For The People). Un elemento que responde al cursor de inmediato.  
**Para scuart:** El hero necesita un momento de "esto no lo vi antes" — puede ser tipográfico, puede ser un hover state, puede ser motion.

### Decisión 6: El portfolio no es una grilla de cards
**Genérico:** Cards con imagen, título, tags, todas del mismo tamaño en grid uniforme.  
**Excelente:** Asimetría intencional — algunos proyectos grandes, otros pequeños. Numeración con índice. Image trail al hover. Un proyecto destacado ocupa 60% de la pantalla. O navegable con drag (Locomotive).  
**Para scuart:** La lista de proyectos necesita un comportamiento. No solo verse — comportarse de una manera que sea solo de scuart.

### Decisión 7: Hover states que justifican su existencia
**Genérico:** `scale(1.05)` + `box-shadow`. Cumple pero no sorprende.  
**Excelente:** El cursor cambia de forma. Las imágenes de proyectos aparecen siguiendo el cursor. Un texto se convierte en otro. Un color invierte. Un número de índice aparece.  
**Para scuart:** Elegir UN hover state memorable para el portfolio y ejecutarlo perfecto. No variedad — profundidad en uno.

### Decisión 8: Page transitions consistentes
**Genérico:** El navegador hace la transición por defecto — la página simplemente aparece o hay un fade básico.  
**Excelente:** Cada navegación interna tiene una transición que mantiene la sensación de espacio continuo. Puede ser una máscara que barre la pantalla, puede ser un clip-path. Lo importante: es consistente en TODAS las páginas.  
**Para scuart:** Con GSAP + React Router (o Framer Motion `AnimatePresence`), implementar una transición de página única que se repita en cada navegación.

### Decisión 9: Densidad calibrada (no todo lleno, no todo vacío)
**Genérico:** O todo comprimido (clásico Bootstrap) o todo con un solo elemento por pantalla que se ve incompleto.  
**Excelente:** Alternancia rítmica entre secciones densas y secciones con aire. Una sección editorial (texto grande, mucho aire) seguida de una sección de portfolio (más elementos). Un footer con información real y detallada que ancla el sitio.  
**Para scuart:** El "vacío" del primer rediseño viene de secciones que tienen un solo elemento flotando sin tensión. La solución no es agregar más elementos — es agregar más intención al elemento que ya está.

### Decisión 10: El footer como declaración final
**Genérico:** Logo + links + copyright. Visualmente idéntico a 10.000 sitios.  
**Excelente:** El footer tiene personalidad. Puede tener: timestamps en tiempo real de la ciudad, un mailto grande y clicable como elemento tipográfico, un copy de cierre con actitud, números reales (años, proyectos, clientes).  
**Para scuart:** El footer debería poder funcionar como una tarjeta de presentación standalone. Alguien que llegue solo al footer debería saber exactamente qué hace scuart y cómo contactarlos.

### Decisión 11: Números e índices como sistema visual
**Genérico:** Secciones sin numeración. Todo parece desconectado.  
**Excelente:** Un sistema de números (01, 02, 03 / 001, 002 / A, B, C) que atraviesa el sitio. Crea sensación de sistema editorial, de que hay un criterio detrás de la organización. Obys lo usa con 01-80 en su portfolio.  
**Para scuart:** Un índice numérico consistente en servicios, en proyectos, en el proceso de trabajo. Se puede implementar con CSS counter o simplemente con spans.

### Decisión 12: Performance como parte del diseño
**Genérico:** Animaciones pesadas que dropean frames en mobile, imágenes sin optimizar, fuentes que llegan tarde (FOUT).  
**Excelente:** Las animaciones corren a 60fps incluso en mobile mid-range. Las fuentes están pre-cargadas. Las imágenes tienen `srcset` y están en WebP. El LCP (Largest Contentful Paint) es < 2.5s.  
**Para scuart:** Performance no es opcional — un sitio que se ve bien pero corre mal se siente barato. El primer frame debe cargar rápido.

---

## 6. Qué es Realista con React + Vite + GSAP + Lenis + Framer

### SÍ — Completamente factible con este stack

| Técnica | Stack necesario | Complejidad |
|---------|-----------------|-------------|
| SplitText reveals (por carácter/línea) | GSAP SplitText plugin | Media |
| Page transitions con mask/clip-path | GSAP + Framer AnimatePresence | Media |
| Scroll-driven scaling (tipo Plusdrie) | GSAP ScrollTrigger + scrub | Media |
| Image trail al hover (tipo For The People) | GSAP + event listeners | Media-Alta |
| Flip transitions entre layouts | GSAP Flip plugin | Alta |
| Dual-wave text (scroll-driven) | GSAP + Lenis + fórmula senoidal | Alta |
| Grain/noise overlay | CSS puro o SVG filter | Baja |
| Horizontal scroll de cases con pin | GSAP ScrollTrigger + pin | Media |
| Kinetic typography (variable font) | CSS + GSAP o CSS scroll() | Media |
| Cursor personalizado | Vanilla JS + GSAP | Media |
| Cursor con blending mode | CSS mix-blend-mode + JS | Media |
| Aurora/mesh gradient animado en hero | CSS radial-gradient + GSAP | Media |
| Magnetic buttons | GSAP + event listeners | Media |
| Lenis smooth scroll | Lenis instalado y configurado | Baja |
| Counter animado en métricas | GSAP + ScrollTrigger | Baja |

### SÍ pero con tradeoffs importantes

| Técnica | Tradeoff |
|---------|----------|
| Image trail con 10+ imágenes | Performance en mobile — limitar a 5-6 imágenes max |
| Flip con muchos elementos | CPU-intensivo si el DOM es complejo — necesita profiling |
| Dual-wave con muchos elementos | Necesita `requestAnimationFrame` bien optimizado |

### NO — Requiere stack diferente o no es realista

| Técnica | Por qué no |
|---------|------------|
| WebGL/Three.js inmersivo a pantalla completa (tipo Lusion/Active Theory) | Requiere stack 3D dedicado, performance budget enorme, experiencia Three.js profunda. No es para un primer rediseño. |
| Física real (Rapier, Matter.js) como elemento principal | Complejo de integrar con React, performance problemático en mobile |
| Fotogrametría 3D del equipo (tipo Locomotive) | Requiere Polycam + Blender + Mixamo + pipeline completo |
| Custom shader effects | GLSL + WebGL — stack diferente |
| Soundscape interactivo completo (tipo Unseen) | Requiere audio engine, mucho tiempo, UX compleja |

### Stack de animación recomendado para scuart (basado en research 2026)

**GSAP como base principal:** ScrollTrigger (scroll-driven), SplitText (text reveals), Flip (layout transitions), core (tweening).  
**Framer Motion complementario:** AnimatePresence para salidas de componentes en React, gestos táctiles en mobile.  
**Lenis:** Smooth scroll base — sincronizar con GSAP ScrollTrigger según su documentación oficial.  
**Total de peso:** ~57KB combinado — aceptable cuando la animación es protagonista del producto.

---

## 7. Anti-patrones Específicos a Evitar en scuart

### Lo que el primer intento probablemente hizo y por qué se sintió genérico

- `whileInView={{ opacity: 1 }}` de Framer Motion en cada sección — marcador de tutorial de YouTube
- CustomCursor que sigue el mouse sin propósito narrativo — decoración vacía
- MagneticButton en múltiples elementos — devalúa cada botón
- FloatingParticles — 2018-2022, señal de "no sé qué poner de fondo"
- Hero con la misma estructura: headline + sub + CTA + mockup
- Portfolio en grid uniforme de cards del mismo tamaño
- Motion que entra en cada elemento al hacer scroll pero no cuenta ninguna historia

### Lo que NO hay que hacer con el motion

- Usar easing `linear` en animaciones visibles
- Animar por más de 1.2s cualquier elemento de UI (salvo page transitions)
- Tener múltiples animaciones compitiendo en el mismo viewport
- Scroll-driven en más de 3 elementos simultáneamente
- Fade-in como única técnica de animación

---

## 8. Tipografías Específicas Trending en 2026 (Para Agencias Premium)

### Display / Headlines

| Fuente | Foundry | Perfil | Uso ideal |
|--------|---------|--------|-----------|
| Monument Extended | Pangram Pangram | Brutalist, estructural, alto contraste | Headlines de agencias tech/creativas |
| Editorial New | Pangram Pangram | Serif elegante, narrow, sensibilidad 90s | Studios creativos premium |
| Druk | Commercial Type | Extremadamente pesado, sin pesos ligeros | Headlines de impacto máximo |
| GT Flexa | Grilli Type | Variable font, 112 estilos, 3 ejes | Variable typography animada |
| Fraunces | Google Fonts (gratis) | Serif display óptico, variable | Budget limitado con personalidad |
| Ogg | Sharp Type | Alto contraste, caligráfico | Agencias con estética de lujo |

### Body / Texto

| Fuente | Foundry | Perfil |
|--------|---------|--------|
| Neue Haas Grotesk | Monotype | El sans-serif premium por excelencia |
| GT Sectra | Grilli Type | Editorial, para texto largo y headings medianos |
| Inter | Google Fonts | Legible, funcional — pero necesita pairing con display |
| Tiempos | Klim Type | Serif funcional y contemporáneo |

### Combinaciones probadas en agencias premium 2026

- **Monument Extended + Inter** — agencias creativas de alta energía
- **Editorial New + Neue Haas Grotesk** — studios de branding sofisticados (Locomotive usa Editorial New + Helvetica Now)
- **Druk + Tiempos** — combinación de impacto + legibilidad editorial
- **GT Flexa (variable) + GT Sectra** — todo el sistema en Grilli Type, coherencia perfecta

---

## 9. Paletas de Color para Agencia Premium 2026

### Opción A: Dark luxury con warm neutral (Locomotive-like)
```
Fondo: #0A0A0A (negro profundo, no puro)
Texto: #E8E0D5 (off-white cálido — no #FFFFFF)
Acento: #FF6B35 (naranja cálido) O #CC0000 (rojo disciplinado)
Textura: grain SVG sobre #0A0A0A, opacity 0.35
```

### Opción B: Dark luxury con cyber accent (tech-forward)
```
Fondo: #080808
Texto: #F0ECE6
Acento: #00D9FF (cyan brillante) — usado en máx. 4 lugares
Textura: grain + radial glow muy sutil detrás del hero
```

### Opción C: Off-white editorial con un negro como acento
```
Fondo: #F5F0EB (Cloud Dancer 2026)
Texto: #111111
Acento: #0A0A0A mismo (tipografía es el acento)
Textura: paper grain muy sutil, opacity 0.2
```

### Lo que ya NO se usa en 2026 para agencias premium
- Gradiente cyan → violet (agotado 2022-2023)
- Gradiente lineal a 45° de dos colores (básico)
- Paletas pastel suaves con múltiples colores
- Blanco puro (#FFFFFF) como fondo en agencias que quieran verse premium dark
- Acento verde brillante sin contexto (se lee como SaaS genérico)

---

## 10. Sitios Específicos para Estudiar (con qué analizar de cada uno)

1. **locomotive.ca/en** — Estudiar: cómo el minimalismo se siente cálido, no frío. Drag navigation del portfolio. La ausencia de elementos que "deberían estar" pero no están.

2. **obys.agency** — Estudiar: el sistema de numeración, la typeface custom como identidad, cómo la transición dark→light narra el rebrand.

3. **forthepeople.agency** — Estudiar: el copy del hero (la pregunta que golpea), el image trail implementation, cómo los valores se integran en el diseño sin ser decoración.

4. **27-b.com** — Estudiar: confianza editorial extrema (solo texto, sin imágenes en el hero), el hover rojo de pantalla completa, los timestamps de oficinas como prueba de vida.

5. **haptic.studio** — Estudiar: el texto sin espacios en el hero (legibilidad progresiva), la urgencia real ("1 slot left"), la paleta de 2 colores bien ejecutada.

6. **joffreyspitzer.com** — Estudiar: los flip transitions, el timing `expo.out` de todas las animaciones, la coherencia de easing en todo el sitio.

7. **plusdrie.com** — Estudiar: el scroll-triggered scaling del showreel, cómo un gesto de scroll reemplaza un botón de "play".

8. **unseen.co** — Studiar: el toggle de sonido como parte del diseño (no como feature adicional), el concepto de "mundo" explorable.

9. **juanmora.co** — Estudiar: elementos geométricos que acompañan el scroll sin ser partículas gratuitas — cada forma tiene un sistema.

10. **aino.agency** — Estudiar: portfolio de storefronts premium, cómo demuestran su expertise con el propio sitio.

---

## 11. Stack de Referencia para Implementar

```
Core: React + Vite (mantener lo que ya hay)
Animaciones: GSAP (core + ScrollTrigger + SplitText + Flip)
Scroll: Lenis (sincronizado con GSAP)
Transiciones de página: Framer Motion AnimatePresence
Tipografía display: Una sola — elegir entre Monument Extended / Editorial New / Fraunces
Tipografía body: Inter o Neue Haas Grotesk
Textura: CSS/SVG grain en pseudo-elemento ::after
Paleta: Elegir entre A, B o C de la sección 9
```

---

## Notas Finales

El sitio de Locomotive tiene 7 Awwwards Agency of the Year y **no tiene cursor personalizado, no tiene partículas, no tiene gradientes cyan/violet, no tiene botones magnéticos**. 

La lista de lo que NO tienen es más instructiva que la lista de lo que SÍ tienen.

La diferencia entre un sitio que se siente "pobre/vacío" y uno que se siente premium no es la cantidad de efectos — es la calidad de las decisiones en los pocos elementos que sí están: la fuente, el grain, el copy, los 2-3 momentos de animación que existen por una razón.

Scuart no necesita WebGL. Necesita 3 cosas bien ejecutadas: una tipografía con personalidad, un sistema de motion narrativo (no decorativo), y un copy que tenga un punto de vista real.
