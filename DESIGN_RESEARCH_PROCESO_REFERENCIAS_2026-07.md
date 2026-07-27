# Design Research — Referencias de "Nuestro Proceso" para SCUART

**Fecha de investigación:** 26 de julio de 2026
**Motivo:** William rechazó 2 intentos (numerales estáticos en zig-zag, horizontal scroll con paneles 01/02/03 "ordinario"). Se necesitan referencias REALES y verificadas, no teoría abstracta.
**Restricción real del proyecto:** SCUART no tiene fotos/mockups profesionales del proceso. Toda solución debe funcionar SOLO con tipografía, color, forma, código — no con fotografía.
**Investigador:** investigador-tendencias

---

## Metodología y honestidad sobre lo que se encontró

Hice más de 25 búsquedas y 20+ fetches directos a sitios y a la plataforma Awwwards. Un hallazgo importante y honesto: **la mayoría de las agencias-portfolio más premiadas del mundo (Uncommon Studio, Rogue Studio, Zajno, Unseen Studio, Noomo, Design Office, Basement Studio, Active Theory, Studio Freight) NO tienen una sección explícita de "Nuestro Proceso" en su sitio.** Verifiqué esto por fetch directo a sus homepages. Priorizan mostrar trabajo (portfolio) y dejan el "cómo trabajamos" para la primera llamada de venta, no para el sitio.

Esto es un dato clave para la decisión de William: **la opción más premiada de todas es, en muchos casos, NO tener sección de proceso, o reducirla a una sola frase de posicionamiento.** Lo dejo como opción 0 más abajo.

Dicho esto, encontré también varios casos reales, verificables, de estudios que SÍ resuelven "proceso" de forma visualmente espectacular sin fotografía. Son los que documento abajo con URL exacta.

---

## Opción 0 (la que nadie pide pero es la más premiada): NO TENER sección de proceso

Verificado por fetch directo:
- **Uncommon Studio** (uncommonstudio.com.au → redirige a uncommondesign.group) — sin sección de proceso.
- **Rogue Studio** (rogue.studio) — sin sección de proceso, solo una frase: *"Dreaming & Scheming: Turning strategy into brand value with a twist of mischief."*
- **Zajno** (zajno.com), **Unseen Studio** (unseen.co), **Noomo** (noomoagency.com), **Design Office** (designoffice.nz), **Basement Studio** (basement.studio), **Studio Freight** (studiofreight.com), **Active Theory** (activetheory.net) — ninguno tiene "Our Process" como sección dedicada.

**Por qué esto importa:** si SCUART no tiene fotos ni casos de éxito robustos todavía, una opción legítima y de altísimo nivel es comprimir "proceso" a una sola línea de posicionamiento fuerte (ej. la de Rogue) en vez de forzar una sección completa que se sienta pobre. Se lo planteo a William como alternativa real, no como excusa.

Si de todos modos se quiere la sección, siguen las 3 direcciones con ejemplos reales.

---

## Dirección A — "Editorial tipográfico / Poster-driven" (Obys Agency)

### Referencia principal
**Obys Agency — microsite "Typography Principles"**
URL: https://typographyprinciples.obys.agency/ (también existe en http://typography-principles.obys.agency/)
Verificado por: Awwwards (https://www.awwwards.com/sites/typography-principles — Site of the Day, 7.73/10) + artículo de Abduzeedo (https://abduzeedo.com/typography-principles-obys-agency) + búsqueda directa.

**Qué es exactamente:** Un microsite standalone (no una sección dentro del sitio principal) donde Obys explica sus 3 principios de cómo usan tipografía en sus proyectos: qué fuentes combinan, qué reglas siguen. Es simultáneamente contenido educativo y pieza de portfolio.

**Cómo se ve y se comporta (según Awwwards + Abduzeedo):**
- Cada "capítulo" del proceso arranca con un **poster tipográfico a pantalla completa** — como si fuera una tapa de revista o afiche de diseño gráfico, no una landing de SaaS.
- Las transiciones entre capítulos son **animaciones activadas por scroll** (scroll-triggered), construidas con GSAP.
- Tiene un **quiz interactivo** sobre ejemplos de uso tipográfico — convierte "proceso" en algo jugable, no solo informativo.
- Layout con tramos horizontales dentro de una experiencia mayormente vertical; usa WebGL para las transiciones.
- Producido en Figma y llevado a producción con Readymag (herramienta de sitios editoriales avanzados).
- Filosofía explícita de Obys (de artículo de Codrops, https://tympanus.net/codrops/2026/03/06/obys-the-small-studio-designing-big-digital-narratives/): tratan cada página "the way editors approach long-form publications" — la grilla es "estructural y emotiva", no decorativa. En su proyecto NLC prescindieron completamente de fotografía y construyeron todo el impacto visual con tipografía + motion.

**Qué SÍ se puede replicar sin fotos:**
- Posters tipográficos a pantalla completa por cada paso del proceso (esto es 100% tipografía + color + layout, cero fotografía).
- Transiciones de capítulo con scroll-trigger (GSAP + ScrollTrigger, ya disponible en el stack típico de Astro).
- Tratar cada "paso" como un afiche independiente en vez de una card genérica.

**Qué NO se puede replicar fácilmente:**
- El WebGL de las transiciones requiere trabajo de desarrollo a medida (no es un plugin de un clic).
- El quiz interactivo requiere lógica adicional (JS custom), aunque es simple.
- Esto exige un diseñador con ojo tipográfico fuerte — la fuerza del proyecto ES la tipografía, así que si la tipografía elegida es genérica, el efecto se cae.

---

## Dirección B — "Diagrama técnico / Timeline con glassmorphism" (Core Concepts)

### Referencia principal
**Core Concepts — página de proceso**
URL: https://coreconcepts.design/process/
Verificado por: Awwwards (https://www.awwwards.com/inspiration/process-timeline-core-concepts)

**Advertencia de transparencia:** el fetch directo a esta URL devolvió error 403 (bloqueo del servidor a bots), así que NO pude verificar el detalle visual pixel a pixel de primera mano. Lo que reporto viene de la ficha de Awwwards, que la etiqueta explícitamente con las keywords: **"process, timeline, glassmorphism"**. Awwwards es curador humano, así que la clasificación es confiable, pero recomiendo que William la abra él mismo en el navegador antes de decidir sobre esta dirección, ya que no pude confirmar los detalles finos.

**Qué se infiere de la clasificación + patrón general de glassmorphism en 2026** (contrastado con búsqueda de tendencias, ver más abajo):
- Timeline vertical u horizontal con "tarjetas" de vidrio esmerilado (fondos semitransparentes, `backdrop-filter: blur()`, bordes finos blancos).
- El efecto de vidrio da sensación de profundidad y capas sin necesitar ninguna foto — el "fondo" que se desenfoca detrás del panel puede ser un gradiente de color o una textura abstracta, no una imagen real.
- Tendencia confirmada en 2026: "Creative agencies and design studios have adopted glassmorphism enthusiastically — es un natural fit para marcas que se posicionan como cutting-edge." Patrón típico: fondo de color/gradiente + overlay de vidrio con las tarjetas de cada paso.

**Qué SÍ se puede replicar sin fotos:**
- Glassmorphism es 100% CSS (`backdrop-filter`, `background: rgba()`, `border: 1px solid rgba(255,255,255,.2)`). No requiere ni una imagen.
- Funciona muy bien sobre un fondo con gradiente de color de marca (SCUART podría usar su terracota) en vez de foto.

**Qué NO se puede replicar fácilmente:**
- Nada — esta es la dirección más "solo código" de las tres. El riesgo es que glassmorphism sin cuidado se vea genérico/2024 si no se combina con tipografía fuerte y un fondo con textura o gradiente con carácter propio.

---

## Dirección C — "Ilustración custom + números como protagonista gráfico" (Lineage Agency)

### Referencia principal
**Lineage Agency — sección "4 Step Process"**
URL: https://lineage.agency/
Diseño y desarrollo: Work is Play Studio (https://www.instagram.com/workisplay.studio/)
Verificado por: Awwwards (https://www.awwwards.com/inspiration/lineage-s-4-step-process-lineage — etiquetada con "process, steps, illustration, guidance") + artículo de ilovecreatives (https://ilovecreatives.com/internet-gem-websites/lineage-agency)

**Qué es exactamente:** Sección de 4 pasos del proceso de la agencia Lineage, construida con **ilustración custom** (no fotografía) como recurso central, en vez de solo texto o numerales.

**Cómo se ve y se comporta (confirmado por fetch + Awwwards):**
- Tipografía: **IBM Plex Mono** (por Mike Abbink / Bold Monday) combinada con **Inter** (Rasmus Andersson) — un pairing mono + sans que da carácter técnico/de producto sin caer en lo corporativo genérico.
- Números grandes de paso (1, 2, 3, 4) como elemento gráfico protagonista, no solo etiqueta.
- Ilustración geométrica/abstracta custom acompañando cada paso — no clip-art, sino gráficos diseñados a medida con líneas conectoras que sugieren flujo/progresión entre pasos.
- El resto del sitio de Lineage tiene un motivo llamado "Expect the Unexpected": al pasar el mouse sobre ciertas palabras (ej. "Joy") se disparan stickers y gráficos animados; hay un "Joy Wall" interactivo donde el usuario mueve stickers de marca por la pantalla; y un componente "Expandopanel" donde al pasar el mouse por un panel este se expande y los demás se contraen — este mismo patrón de "panel que reacciona" podría aplicarse a los pasos del proceso en vez de dejarlos estáticos.
- Construido en Next.js.

**Qué SÍ se puede replicar sin fotos:**
- El pairing tipográfico mono + sans es solo elección de fuente (Google Fonts tiene alternativas gratuitas a IBM Plex Mono e Inter, o pueden comprarse).
- Números grandes como elemento gráfico: 100% CSS/tipografía.
- Ilustración geométrica simple con líneas conectoras: se puede hacer con SVG a mano o con un ilustrador freelance por un costo bajo (son formas simples, no ilustración figurativa compleja).
- El patrón "Expandopanel" (hover expande un panel, los demás se contraen) es una interacción de layout, 100% CSS/JS, sin necesidad de ningún asset visual.

**Qué NO se puede replicar fácilmente:**
- La ilustración custom, aunque simple, necesita a alguien con ojo de diseño gráfico para que no se vea genérica — no es "gratis", pero es mucho más barato que fotografía profesional.
- Los "stickers" animados del Joy Wall sí son ilustración a medida (más trabajo de diseño que de código).

---

## Comparación rápida de las 3 direcciones + Opción 0

| Dirección | Qué necesita | Nivel de esfuerzo dev | Nivel de esfuerzo diseño | Riesgo de verse genérico |
|---|---|---|---|---|
| **0. Sin sección de proceso** (Rogue, Uncommon, Zajno) | Una frase de posicionamiento fuerte | Ninguno | Solo copywriting | Ninguno si el copy es bueno |
| **A. Editorial tipográfico** (Obys) | GSAP + ScrollTrigger, posters a pantalla completa | Medio-alto (WebGL opcional) | Alto — depende 100% de que la tipografía sea excelente | Alto si la tipografía es mediocre |
| **B. Diagrama/glassmorphism** (Core Concepts) | Solo CSS (`backdrop-filter`) | Bajo | Medio — necesita gradiente/color con carácter | Alto si no se cuida la tipografía y el fondo |
| **C. Ilustración + números** (Lineage) | SVG simple + interacción hover/expand | Medio | Medio — ilustración simple, contratable | Bajo — la ilustración a medida es lo que más diferencia |

---

## Anti-patrones a evitar (reconfirmados para este proyecto)

- **Horizontal scroll con paneles de solo texto numerados** — esto es exactamente lo que William ya rechazó como "lo más ordinario que he visto". Confirmado como patrón sobre-usado: encontré media docena de variantes casi idénticas en Awwwards (Rocket Web Labs, Design Waves) hechas en Framer/Wix Studio — es un patrón de plantilla, no de diseño a medida.
- **Numerales gigantes estáticos sin movimiento** — ya rechazado por William.
- **Cards con sombra suave + iconos genéricos de "servicios"** — sigue vigente como signo de sitio de agencia genérica 2022.
- **Glassmorphism aplicado sin gradiente/color con personalidad de marca** — se ve como plantilla SaaS 2024 si el fondo detrás del vidrio es gris plano.

---

## Recomendación honesta para el director-creativo

1. **Primero descartar o confirmar la Opción 0** con William: si SCUART recién arranca (0 clientes, según memoria del proyecto), una frase de posicionamiento fuerte en vez de una sección completa de "proceso" puede ser más honesto y más premium que forzar 4 pasos sin sustento real de casos.

2. Si se quiere sección, la **Dirección C (Lineage / ilustración + números)** es la que mejor resuelve la restricción real de "no tenemos fotos" — porque reemplaza la foto con ilustración custom simple (barata, contratable) en vez de depender de tipografía perfecta (Dirección A, más riesgosa) o de un efecto de CSS que se satura rápido (Dirección B).

3. La **Dirección A (Obys)** es la de mayor techo de "wow" pero también la de mayor riesgo — exige que la tipografía elegida sea sobresaliente, porque no hay nada más (ni foto, ni ilustración) para sostener el diseño.

4. La **Dirección B (glassmorphism)** es la más rápida de ejecutar técnicamente pero la de mayor riesgo de verse "ya visto" en 2026, salvo que se use sobre un fondo de color/gradiente con identidad fuerte de marca (la terracota de SCUART, por ejemplo).

**Siguiente paso sugerido:** mostrarle a William los 3 links reales (typographyprinciples.obys.agency, lineage.agency, coreconcepts.design/process/) para que elija mirando, no en abstracto — tal como pidió.

---

## Fuentes verificadas usadas en este research

- https://typographyprinciples.obys.agency/
- https://www.awwwards.com/sites/typography-principles
- https://abduzeedo.com/typography-principles-obys-agency
- https://tympanus.net/codrops/2026/03/06/obys-the-small-studio-designing-big-digital-narratives/
- https://lineage.agency/
- https://www.awwwards.com/inspiration/lineage-s-4-step-process-lineage
- https://ilovecreatives.com/internet-gem-websites/lineage-agency
- https://coreconcepts.design/process/
- https://www.awwwards.com/inspiration/process-timeline-core-concepts
- https://www.awwwards.com/inspiration/timeline-process-make-it-pop (https://www.makeitpop.studio/#timeline)
- https://www.awwwards.com/awwwards/collections/agency-portfolios/
- https://rogue.studio/
- https://uncommonstudio.com.au/ (redirige a http://uncommondesign.group/)
- https://zajno.com/
- https://unseen.co/
- https://noomoagency.com/
- https://designoffice.nz/
- https://basement.studio/
- https://studiofreight.com/
- https://activetheory.net/
- https://www.rocketweblabs.com/ (ejemplo de anti-patrón: horizontal-scroll process en Wix Studio)
- https://www.awwwards.com/inspiration/creative-process-section-rocket-web-labs
- https://www.awwwards.com/inspiration/our-process-section-submission-6654ba20bd3c2571444083 (designwaves.agency — ejemplo de anti-patrón)

### Sitios mencionados pero NO verificados en detalle (mencionar con cautela)
- Visioned (https://www.visioned.ch/) — descripción obtenida por fetch, sección "Prozess" en alemán, zigzag con 3 columnas, texto puro sin imágenes. Premium por tipografía suiza y espaciado, pero es prueba de que SÍ se puede hacer solo con texto bien tipografiado.
- Synapser Studio (https://www.synapserstudio.com) — Awwwards lo etiqueta con scroll-driven storytelling + GSAP, pero no pude confirmar si tiene sección de proceso específica.

---

## Notas finales

No encontré ningún ejemplo premiado 2025-2026 de "proceso" que use fotografía de stock o mockups genéricos — el patrón entre los sitios realmente premiados es o bien (a) no tener sección de proceso, o (b) resolverla con tipografía/ilustración/efectos de código, nunca con fotografía genérica. Esto valida indirectamente que la limitación de SCUART (no tener fotos) no es un obstáculo real para lograr algo premium — de hecho, va en la misma dirección que ya toman los mejores estudios del mundo.
