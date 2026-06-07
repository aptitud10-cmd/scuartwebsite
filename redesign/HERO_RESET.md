# HERO RESET — Corrección de proceso

**Fecha:** 2026-06-07
**Motivo:** el hero no llega a nivel awards y la última ronda (morphing bilingüe) fue una mala dirección. Reset de concepto, no de parches.
**Estado:** hero revertido a Hito 1 (sin morphing, sin grain subido). Esperando que William elija un concepto antes de implementar.

---

## 1. Qué salió mal

### Por qué el morphing bilingüe fue mala idea
- **Error de lógica de usuario.** Nadie navega el sitio en dos idiomas a la vez. Un cliente en LATAM entra a `/es`, ve español, y de pronto el headline se le convierte en inglés solo. No lee "qué bilingüe" — lee "se rompió" o "qué truco barato". Igual al revés en USA.
- **El bilingüismo no es un efecto, es arquitectura.** Vive en rutas `/en` y `/es`, selector, copy nativo por idioma, metadata, hreflang. Convertirlo en una animación del H1 lo degrada de posición de marca a gimmick.
- **Fue un invento disfrazado de research.** El research real encontró "texto con comportamiento" (aino.agency) y "tipografía como gesto" (Locomotive). De ahí estiré una mecánica —morphing de idioma con franja-eje— que NO existe en ninguna web premiada. Segundo invento de la sesión (el primero fueron las marcas de coordenadas). Patrón a cortar: cuando no hay una idea sólida, no inventar una y vestirla de "anclada al research".

### Por qué el hero actual no llega a nivel awards
- **Es la suma de tres cosas correctas pero genéricas:** texto grande + línea roja + grain sutil. Cada una está bien ejecutada, pero juntas no forman UN concepto. Los heroes que ganan tienen una sola idea fuerte, no tres elementos correctos apilados.
- **No responde la pregunta que importa:** ¿qué hace a SCUART diferente de cualquier otro estudio con paleta oscura y tipografía grande? Hoy no hay respuesta visual. Sin eso, ningún efecto compensa.
- **Depende del H1.** Si tapás el headline, no queda hero. Un hero premium tiene estructura que sostiene incluso sin el texto gigante.
- **El copy encierra en comida** ("FOOD / CHARACTER / CARÁCTER"), lo que contradice el posicionamiento real (diseño + tecnología, no solo restaurantes).

### Qué SÍ se puede conservar
- **La base cromática:** carbón #0E0E0E + crema #E8E2D6 + rojo #D70321 como acento. Bicromía + 1 acento es patrón ganador verificado. Se queda.
- **La tipografía Archivo extra-bold** para display. Tiene presencia editorial. Se queda como base.
- **La arquitectura bilingüe real** (`/en` `/es`, selector, hreflang, copy nativo). Es correcta. Se queda — pero como infraestructura, NO como efecto.
- **La grilla editorial y la ficha técnica mono** como sistema de orden. Se pueden conservar si el concepto elegido las usa con intención (no como decoración tímida).
- **El grain** como material de fondo — pero a un nivel que se note (la duda es si 0.16 alcanza; depende del concepto).

---

## 2. Posicionamiento real de SCUART

**Idea base completa:**
> SCUART es un estudio bilingüe de diseño + tecnología que ayuda a restaurantes, marcas locales y negocios ambiciosos en USA + LATAM a verse premium y operar mejor online.

**Resumido en lenguaje de hero (la tensión central):**
> No solo te hacemos ver bien. Hacemos que tu negocio funcione mejor online.
> Diseño + tecnología, en dos idiomas, para negocios que quieren competir en serio.

**Las dos palabras que cargan el posicionamiento:** *verse* (diseño) + *funcionar* (tecnología). SCUART no es "una agencia que hace webs bonitas" ni "una software factory fría" — es el punto donde diseño premium y capacidad técnica se cruzan, en dos mercados.

---

## 3. Tres conceptos de hero (desde cero, sin implementar)

> Reglas aplicadas: sin cambio de idioma automático en el H1. Sin depender solo de texto gigante. Sin depender solo de línea roja. Sin copy de comida/cocina/carácter. Sin sonar a agencia genérica de "digital experiences".

---

### CONCEPTO A — "EDITORIAL PREMIUM" (el estudio como publicación)

**Idea:** el hero se compone como la portada de una revista de diseño seria. El protagonista no es UNA frase gigante, sino la **composición editorial completa**: jerarquía tipográfica de revista (kicker pequeño + statement medio + dato), maquetada con disciplina de imprenta. La sofisticación viene del layout, no del tamaño.

- **Headline EN:** A bilingual design & technology studio.
- **Headline ES:** Estudio bilingüe de diseño y tecnología.
- **Subheadline EN:** We help restaurants, local brands and ambitious businesses across the US and LATAM look premium and work better online.
- **Subheadline ES:** Ayudamos a restaurantes, marcas locales y negocios ambiciosos en USA y LATAM a verse premium y operar mejor online.
- **Protagonista visual:** la **jerarquía tipográfica en sí** — tres registros (kicker mono / headline display / subhead body) maquetados como portada editorial, con la franja roja como regla de sección, no como protagonista.
- **Composición desktop:** grilla 12-col real y visible. Kicker mono arriba-izquierda (`SCUART — EST. BOGOTÁ`). Headline display en col 1-7, tamaño MEDIO (no gigante — ~clamp 3-4rem), peso pesado. Subhead col 1-5 debajo. Columna derecha (8-12): ficha técnica de estudio (servicios, mercados, año) como índice de revista. La franja roja es una regla horizontal fina que separa kicker de headline (como en una portada).
- **Composición mobile:** misma jerarquía apilada: kicker → headline → subhead → ficha. La grilla colapsa a margen-cuaderno. Todo legible, nada cortado.
- **Interacción principal:** al hacer scroll, la ficha técnica de la derecha se mantiene fija un momento (sticky sutil) mientras el headline sube — sensación de "pasar la página" de una publicación.
- **Motion principal:** entrada por líneas (cada bloque de la jerarquía entra en secuencia, de arriba abajo, expo.out) — como una página que se compone. Restraint total, sin efectos.
- **Qué lo hace diferente:** casi ningún estudio hace hero editorial REAL (jerarquía de revista). La mayoría hace "frase gigante + nada". Esto se lee como "estos saben de composición", que es exactamente lo que vendés.
- **Por qué no es genérico:** el genérico es texto centrado gigante. Esto es maquetación asimétrica de imprenta con múltiples registros — difícil de hacer bien, imposible con plantilla.
- **Riesgo:** si la jerarquía no está perfectamente calibrada, se ve "lleno de texto". Requiere disciplina de spacing. Riesgo MEDIO de verse cargado.
- **Conexión con el resto:** la ficha técnica de la derecha lista PORTFOLIO / MÉTODO / CONTACTO como índice → ancla natural a las secciones. El portfolio sigue la misma lógica editorial (lista, no cards).

---

### CONCEPTO B — "DESIGN + TECHNOLOGY" (la dualidad como sistema)

**Idea:** el hero materializa la tensión central del posicionamiento: SCUART vive en el cruce de **diseño** (cómo se ve) y **tecnología** (cómo funciona). El hero se divide en esa dualidad — no como dos mitades baratas, sino como un sistema donde un lado es expresivo/visual y el otro es estructurado/técnico, y conviven.

- **Headline EN:** Design that looks sharp. Built to actually work.
- **Headline ES:** Diseño que se ve impecable. Construido para funcionar.
- **Subheadline EN:** Websites, platforms and digital systems for businesses in the US and LATAM — bilingual, by design.
- **Subheadline ES:** Webs, plataformas y sistemas digitales para negocios en USA y LATAM — bilingües, por diseño.
- **Protagonista visual:** el **contraste de dos lenguajes visuales** en una misma pantalla: lado izquierdo tipografía display expresiva (diseño), lado derecho una capa estructurada/técnica (grilla densa, datos mono, monospace) que representa el sistema bajo el diseño.
- **Composición desktop:** split asimétrico (no 50/50 — algo como 60/40). Izquierda: headline display, lado "diseño", con aire. Derecha: una capa "técnica" — bloque mono con apariencia de sistema (no código literal: estructura, etiquetas, datos de estudio en monospace, líneas de grilla más densas). La franja roja es la costura entre ambos mundos.
- **Composición mobile:** la dualidad se apila: bloque diseño arriba, bloque técnico abajo, separados por la franja roja horizontal. No se pierde el concepto.
- **Interacción principal:** al mover el cursor, el lado técnico (derecha) reacciona sutilmente — los datos mono se "recalculan" o las líneas responden. UN gesto, contenido en el lado técnico (ancla en Enerblock, que ganó SOTD con interacción contenida, mismo stack). NO cambia el lado diseño.
- **Motion principal:** al cargar, el lado diseño entra suave (word-reveal) y el lado técnico se "construye" (líneas + datos aparecen como sistema montándose). Cuenta la narrativa diseño↔tech.
- **Qué lo hace diferente:** responde directamente "¿qué te hace distinto de un estudio cualquiera?" → mostrás las DOS capacidades en una imagen. Pocos estudios muestran la dualidad; la mayoría dice "design & technology" en texto y no lo demuestra.
- **Por qué no es genérico:** no es una frase sobre tecnología — es la tecnología visible como material en el hero. Mostrar > decir.
- **Riesgo:** el lado técnico mal hecho cae en "dashboard de SaaS" o "código de stock". Hay que abstraerlo a sistema, no a captura. Riesgo MEDIO-ALTO de ejecución.
- **Conexión con el resto:** el lado técnico puede mostrar las capacidades (WEB / PLATFORMS / SYSTEMS) que se expanden en MÉTODO. El portfolio demuestra el "looks sharp", el método demuestra el "actually work".

---

### CONCEPTO C — "BUSINESS IMPACT" (el resultado, no el estudio)

**Idea:** el hero no habla de SCUART — habla de lo que le pasa al **negocio del cliente**. Cambia el sujeto: de "somos un estudio que..." a "tu negocio merece/logra...". Más comercial, más cercano al dueño LATAM/USA que no es técnico. El protagonista es la transformación, no la agencia.

- **Headline EN:** Your business deserves to be taken seriously online.
- **Headline ES:** Tu negocio merece que lo tomen en serio online.
- **Subheadline EN:** Bilingual design and technology for restaurants, local brands and growing businesses in the US and LATAM.
- **Subheadline ES:** Diseño y tecnología bilingüe para restaurantes, marcas locales y negocios en crecimiento en USA y LATAM.
- **Protagonista visual:** un **contraste antes/después implícito** — el hero sugiere visualmente la diferencia entre "verse genérico" y "verse premium" sin mostrar un mockup literal. Puede ser un tratamiento donde el fondo/material comunica "esto es lo premium" por puro craft (grain real, tipografía impecable, composición), de modo que el hero ES la demostración del resultado.
- **Composición desktop:** headline en col 1-8, lado izquierdo, peso fuerte pero tamaño controlado. La columna derecha sostiene una prueba sutil de craft — no un dato inventado (sin métricas falsas, C1/P4), sino la ficha de estudio + un detalle de material que dice "mirá el nivel". Franja roja como acento de énfasis en una palabra clave del headline ("en serio" / "seriously").
- **Composición mobile:** headline → subhead → CTA temprano (este concepto es el más comercial, el CTA puede subir). Mobile-first, el dueño que entra desde el celular ve el mensaje y el botón rápido.
- **Interacción principal:** el CTA principal (hablemos / contacto) tiene presencia desde el hero — interacción en el botón (magnético/hover fuerte), porque este concepto prioriza conversión.
- **Motion principal:** entrada sobria del headline + el CTA que "invita" sutilmente. Menos artístico, más directo. El craft está en el detalle estático (material, tipografía), no en el movimiento.
- **Qué lo hace diferente:** habla el idioma del cliente, no el del diseñador. Para un dueño de restaurante o marca local que no es técnico, "merece que lo tomen en serio" pega más que "estudio de diseño y tecnología". Conecta emocionalmente.
- **Por qué no es genérico:** el genérico habla de la agencia ("we build digital experiences"). Esto habla del cliente y su dolor real (que online lo vean como amateur). Cambio de sujeto = diferenciación.
- **Riesgo:** el copy puede sonar publicitario si no se calibra (es el riesgo de todos los headlines centrados en beneficio). Y "deserves/merece" puede leerse blando. Riesgo MEDIO en el copy. El menos "award editorial", el más "comercial efectivo".
- **Conexión con el resto:** es el concepto que más empuja a CONTACTO desde el hero. El portfolio funciona como prueba ("acá está el resultado que merecés"), el método como el "cómo lo logramos".

---

## Resumen para decidir

| | A — Editorial Premium | B — Design + Technology | C — Business Impact |
|---|---|---|---|
| **Protagonista** | Jerarquía editorial completa | Dualidad diseño↔tech visible | El resultado del cliente |
| **Habla de** | El oficio del estudio | Las dos capacidades | El negocio del cliente |
| **Más fuerte en** | Nivel award/editorial | Diferenciación de posicionamiento | Conversión comercial |
| **Riesgo principal** | Verse cargado de texto | Lado técnico cae en "SaaS stock" | Copy publicitario/blando |
| **Mejor si SCUART quiere** | Ganar respeto de pares/awards | Mostrar que no es solo diseño | Cerrar clientes rápido |

**Sin recomendación forzada** — los tres son viables y honestos. La elección depende de qué priorizás: prestigio (A), diferenciación de posicionamiento (B), o conversión (C).

Ningún concepto cambia el idioma del H1. Ninguno depende solo de texto gigante ni solo de la línea roja. Ninguno usa copy de comida. Falta elegir uno antes de implementar.
