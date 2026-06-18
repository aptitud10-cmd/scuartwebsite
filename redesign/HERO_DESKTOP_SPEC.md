# HERO DESKTOP SPEC — SCUART

**Viewport responsabilidad:** 1280px+ (laptops, monitores grandes, ultrawide hasta 1920px)
**Basado en:** `ART_DIRECTION.md` (aprobado por William) §3 paleta, §4 tipografía, §5 layout, §6.1 Hero, §7 Momento 1, §8 personalidad
**Referencia maestra:** `DESIGN_RESEARCH_LOCOMOTIVE.md`
**Diseñador:** disenador-desktop (Opus 4.8)
**Estado:** PROPUESTA para `visual-critic` → William. No se implementa sin OK del rumbo.

---

## 0. El problema que esta spec resuelve (el error a no repetir)

El hero anterior era **"un titular gigante sobre una página en blanco, CTA cortado tirado abajo, huecos vacíos"** (rechazado por William: *"esto es basura, esto está muy simple"*). La causa raíz, leída en `HeroSection.astro`:

- El grid desktop usa `grid-template-rows: auto auto auto auto` con `align-items: start`. Todo el contenido se **amontona en la mitad superior-izquierda** y el resto del `100svh` queda como hueco muerto. El espacio negativo NO está compuesto — **sobró**.
- El índice de capacidades (col 10–12) y el índice de estudio están centrados/colgando sin anclaje, sin tensión contra el H1.
- No hay nada anclado al borde **inferior** del viewport. El ojo cae al vacío.
- No hay número de sección, ni coordenadas como gesto compuesto, ni scroll-cue, ni regla estructural que ate la composición.
- La nav vive en otro componente y no se diseñó como parte de la composición del hero — el research dice que el hero de Locomotive **incluye** wordmark + nav como parte de su retícula.

**Cómo llena Locomotive su hero (verificado en research §3):** el hero NO está "lleno de cosas", está **compuesto contra los cuatro bordes del viewport**. Arriba: wordmark + nav horizontal + toggle idioma, anclados al tope. Centro-izquierda: el claim/declaración gigante que sangra el ancho. Costados y abajo: badges de ubicación, contadores, metadatos como "ficha técnica" anclados a las esquinas inferiores. El espacio negativo del centro respira PORQUE los bordes están cargados — es un **marco editorial**, no un hueco. La declaración domina, pero nunca flota sola sobre blanco: está enmarcada por datos reales en las esquinas.

**Principio de esta spec:** el hero de SCUART se compone como **un plano de arquitecto enmarcado** — el H1 es la masa central (la cota crítica), y las cuatro esquinas del viewport llevan los rótulos del plano (nav arriba, ficha técnica e índices en los costados y abajo, coordenadas en una esquina). El centro respira porque el marco carga el peso. **Cero huecos muertos: cada zona del 100vh tiene una función compuesta.**

---

## 1. Sistema de composición desktop

### Grid base
- **12 columnas**, gutter `var(--gutter)` (clamp 1rem→2rem), márgenes laterales `var(--margin)` (clamp 1.25rem→7rem). En 1280px el margen ≈ 64px; en 1440px+ ≈ 90–112px. El contenido **no llega al borde** = sensación de "página/plano".
- El hero ocupa **`100svh` exacto**, dividido en una retícula de **3 bandas verticales** (no filas `auto` que amontonan):
  - **Banda TOP** (la cabecera del plano): altura `auto`, ~96–110px. Ancla al borde superior.
  - **Banda CENTRO** (la masa): `1fr` — toma TODO el espacio sobrante. Aquí vive el H1, centrado verticalmente por su propia banda, NO colgando del tope.
  - **Banda BOTTOM** (el pie del plano / ficha técnica): altura `auto`, ~120–150px. Ancla al borde inferior.
- Esta estructura de 3 bandas (`grid-template-rows: auto 1fr auto`) es lo que **elimina el hueco muerto**: el `1fr` central se reparte como aire compuesto a ambos lados del H1, no como vacío al fondo.

### Regla estructural vertical (el esqueleto visible del plano)
- Una **hairline vertical** (`--grid-line`, tinta 8%) sobre el eje de **col 8/9** recorre de la banda TOP a la banda BOTTOM. Es la "cota del plano" — divide la masa del H1 (izquierda) de la columna de ficha técnica (derecha).
- Sobre esa misma hairline, un **segmento de filete `--accent` verde** de altura `22vh` (no toda la altura) marca el tramo central — la única línea de color estructural. El verde es escaso: una cota subrayada, no un borde.
- **ANCLAJE DEL FILETE (crítico — no anclar al viewport):** el filete NO se posiciona contra el viewport (`top: 30vh`), porque si las bandas TOP/BOTTOM cambian de alto vía `clamp()`, el filete se desancla del H1 y "flota" (el mismo error que arruinó el hero anterior). El filete y la hairline central **viven dentro de la banda CENTRO** (`grid-row: 2`) como hijos posicionados de ese contenedor, no del hero entero. Así, cuando las bandas cambian de alto, el filete se reubica con su banda. Método exacto en §3 "Regla estructural central".

### Escala tipográfica desktop (propia, NO la mobile escalada)
| Rol | Tamaño desktop 1280px+ | Fuente / peso | Tracking | Leading |
|---|---|---|---|---|
| H1 (claim) | `clamp(4rem, 8.5vw, 9.5rem)` → ~120–152px | Fraunces 300 Light | `-0.03em` | `0.94` |
| Itálica acento | mismo tamaño, inline | Fraunces 400 **Italic** + `--accent` | `-0.03em` | `0.94` |
| Wordmark nav | `1.0625rem` (17px) | Fraunces 500 (única excepción nav, como sello) | `-0.01em` | 1 |
| Nav links / toggle | `var(--text-mono)` 13px UPPER | Geist 500 +0.12em | `+0.12em` | 1 |
| Lead/subhead | `var(--text-subhead)` 22px | Geist 400, `--ink-mid` | 0 | 1.4 |
| CTA | 14px UPPER | Geist 500 +0.1em | `+0.1em` | 1 |
| Índices/ficha mono | `var(--text-mono)` 13px UPPER | Geist 500 +0.12em, `--mid` / `--ink` | `+0.12em` | 1.8 |
| Numeral de sección | `clamp(3rem, 4vw, 4rem)` ~64px | Fraunces 300 | `-0.02em` | 1 |

> Contraste extremo deliberado: H1 a ~140px contra ficha mono a 13px. La brecha **es** el diseño (ART_DIRECTION §4). Sin tamaños intermedios cómodos que diluyan.

### Espacio negativo (intencional, jerarquizado — no igualado)
- **Más aire arriba del H1 que abajo** (proporción ~58/42): el H1 se asienta levemente bajo el centro óptico de la banda CENTRO, dejando el respiro superior como "cielo del plano". Esto es asimetría vertical intencional (R2), no centrado matemático.
- La columna derecha (ficha técnica) tiene **densidad alta** (interlineado apretado, datos juntos) que contrasta con el aire de la izquierda del H1. La asimetría densidad-izquierda/derecha es parte de la composición.

---

## 2. Diagrama del layout (retícula de 12 columnas × 3 bandas)

```
 margen                                                              margen
 ←──┤                                                              ├──→
 ┌────────────────────────────────────────────────────────────────────┐
 │ BANDA TOP  (auto, ~104px)                          ancla borde sup. │
 │                                                                      │
 │  SCUART®              PORTFOLIO   MÉTODO   CONTACTO        [ES|EN]    │  ← fila nav
 │  ▲col1 Fraunces500    ▲────── Geist500 13px UPPER ──────▲   ▲col12    │
 │  ──────────────────────────────────────────────────────────────────  │  ← hairline bajo nav (tinta 12%)
 │                                                                      │
 ├──────────────────────────────────────────────────┬─────────────────┤
 │ BANDA CENTRO  (1fr — toma todo el sobrante)        │   col 9–12      │
 │                                          col 8/9 ↓ │  FICHA TÉCNICA  │
 │  (aire superior ~58%)                            ┊ │                 │
 │                                                  ┊ │ ÍNDICE / 001    │
 │  ┌── kicker (col 1–7) ──────────────────┐        ┊ │ ─── hairline    │
 │  SCUART — ESTUDIO DE DISEÑO Y TECNOLOGÍA          ┊ │ 001 WEB         │
 │                                                  ┃ │     PLATFORMS   │
 │  Diseño que se  ve.                              ┃ │ ─── hairline    │
 │  Tecnología que  trabaja.                        ┃ │ 002 SAAS +      │
 │  ▲ H1 Fraunces300 ~140px, col 1–8                ┃ │     SYSTEMS     │
 │    "ve." y "trabaja." = Fraunces400 italic verde ┃ │ ─── hairline    │
 │    (sangra ~24px fuera del margen izq.)          ┃←franja│ 003 AI      │
 │                                                  ┃ verde │   AUTOMATION│
 │  ┌── lead (col 1–6) ───────────────────┐         ┊ │ ─── hairline    │
 │  Estudio que construye webs premium,             ┊ │ 004 ORDERING ·  │
 │  plataformas y sistemas digitales…               ┊ │     BOOKING ·   │
 │                                                  ┊ │     WORKFLOWS   │
 │  ┌──[ EMPEZAR UN PROYECTO → ]── CTA col 1–4 ┐    ┊ │                 │
 │                                                  ┊ │                 │
 │  (aire inferior ~42%)                            ┊ │                 │
 ├──────────────────────────────────────────────────┴─────────────────┤
 │ BANDA BOTTOM  (auto, ~136px)                       ancla borde inf.  │
 │  ──────────────────────────────────────────────────────────────────  │  ← hairline superior banda (tinta 12%)
 │                                                                      │
 │  ❲01❳  4.7110°N 74.0721°W · BOGOTÁ · 2026         DISPONIBLES 2026 ↓  │
 │  ▲col1   ▲────── coordenadas Geist500 mono ──────▲    ▲col 9–12      │
 │  numeral                                          scroll-cue + estado│
 │  Fraunces                                                            │
 └────────────────────────────────────────────────────────────────────┘
   ┃ = filete --accent verde (segmento central ~22vh sobre eje col 8/9)
   ┊ = hairline --grid-line (tinta 8%, recorre centro)
```

---

## 3. Especificación por zona (posiciones exactas, jerarquía, comportamiento)

### BANDA TOP — cabecera del plano (`grid-row: 1`, ancla borde superior)

Es la cabecera de navegación, parte de la composición del hero (gesto Locomotive: el hero incluye su nav). Una sola fila a `100% - 2·margen`, `display: flex; justify-content: space-between; align-items: center`. Altura `clamp(88px, 11vh, 110px)`.

> **DECISIÓN CERRADA (William) — la nav va INTEGRADA en el hero, NO como header global separado (estilo Locomotive).** La navegación (wordmark `SCUART®` + `PORTFOLIO`/`MÉTODO`/`CONTACTO` + toggle `ES|EN`) vive DENTRO de la banda TOP del hero como parte de su retícula y composición — no es un componente flotante encima. No requiere confirmación: es lo que se implementa.
>
> **Instrucción de no-duplicación para el dev (verificable):** al cargar la página, en desktop **NO puede haber dos navs visibles a la vez**. Si existe un `Nav.astro` / header global en el layout que también renderiza wordmark + links, hay que evitar el doble render en el viewport del hero. Opciones aceptables, en orden de preferencia:
>   1. El header global **no se renderiza sobre el hero**: solo aparece (sticky, reducido, fondo `--bg` + hairline inferior) una vez que el usuario hace scroll FUERA del hero. Mientras el hero está en viewport, la única nav visible es la del hero.
>   2. Si por arquitectura el header global ya existe y es difícil de condicionar, entonces el hero NO duplica la nav: se usa el header global posicionado dentro de la banda TOP del hero (mismo estado visual descrito en esta tabla) y el hero no renderiza su propia copia.
>   - **Lo que NO se acepta:** wordmark + links del header global Y wordmark + links del hero visibles simultáneamente al cargar (dos SCUART, dos juegos de links). **Verificación:** cargar la home en 1280px y 1920px y contar — debe haber exactamente UN wordmark y UN juego de links de nav en el primer viewport.

| Elemento | Posición | Tipografía | Notas |
|---|---|---|---|
| **Wordmark `SCUART®`** | extremo izq. (col 1) | Fraunces 500, 17px, `--ink`. El `®` en `--accent` verde (superíndice 0.55em) | Único uso de Fraunces en nav, justificado como sello de marca (no es un "link de nav", es la firma). |
| **Nav: PORTFOLIO · MÉTODO · CONTACTO** | bloque centro-derecha, agrupados con gap 40px | Geist 500, 13px UPPER, +0.12em, `--ink` | Links horizontales VISIBLES (sin hamburger en desktop, ART_DIRECTION §5). Hover: subrayado `--accent` que se dibuja (scaleX desde izq., 0.3s). |
| **Toggle `ES | EN`** | extremo der. (col 12) | Geist 500, 13px UPPER, +0.12em. Idioma activo `--ink`, el otro `--mid` | El toggle es identidad (ART_DIRECTION §8.6). Separador `|` en `--mid` 40%. |

- **Hairline bajo la nav:** filete horizontal `1px` tinta 12% de margen a margen, justo bajo la banda TOP. Refuerza el "encabezado de plano" y separa la cabecera de la masa. (Locomotive separa así su header.)
- **Comportamiento scroll (alineado a la decisión cerrada R-C):** la nav del hero NO es sticky — vive en su banda TOP y se va con el scroll, como cualquier parte de la composición. Una vez que el usuario sale del hero, **recién ahí** aparece el header global como barra reducida (fondo `--bg`, misma hairline inferior, sticky). Mientras el hero está en viewport, la única nav presente es la integrada del hero (ver "DECISIÓN CERRADA" arriba). El header global NUNCA tapa el hero ni se muestra encima de él al cargar.

---

### BANDA CENTRO — la masa (`grid-row: 2`, `1fr`)

Subgrid de 12 columnas. Aquí está el N1 y la mayor parte del peso. Se divide en dos zonas por la hairline de col 8/9:

#### Zona izquierda (col 1–8) — el bloque editorial dominante

Stack vertical, `align-content` empujado levemente bajo el centro óptico (aire superior 58% / inferior 42%). De arriba a abajo:

1. **Kicker** (`SCUART — ESTUDIO DE DISEÑO Y TECNOLOGÍA`)
   - Col 1–7. Geist 500, 13px UPPER, +0.12em, `--mid`.
   - margin-bottom `var(--space-m)`. Es el rótulo del plano sobre el claim.

2. **H1 — N1, el claim gigante** ← elemento primario, ≥50% del peso visual
   - Col 1–8. Fraunces 300, `clamp(4rem, 8.5vw, 9.5rem)` (~120–152px en desktop), leading `0.94`, tracking `-0.03em`, `--ink`.
   - **Dos líneas, sentence case:**
     - L1: `Diseño que se` + **`ve.`** (Fraunces 400 Italic, `--accent` verde)
     - L2: `Tecnología que` + **`trabaja.`** (Fraunces 400 Italic, `--accent` verde)
   - **Overshoot editorial:** el bloque H1 sangra `~24px` (≈ -1.5rem) fuera del margen izquierdo — rompe la grilla intencionalmente (ART_DIRECTION §6.1, R2). Truco: `margin-left: calc(-1 * clamp(8px, 1.5vw, 24px))`.
   - Domina por: tamaño (10× el body), posición (ocupa col 1–8 = 2/3 del ancho), aislamiento (aire arriba/abajo), y el único color cálido del verde en las palabras italic.
   - EN: `Design you` **`notice.`** / `Technology that` **`works.`** — misma estructura, última palabra italic verde.

3. **Lead/subhead — N2**
   - Col 1–6. Geist 400, 22px, `--ink-mid` (tinta 70%), leading 1.4, max-width ~52ch.
   - `Estudio que construye webs premium, plataformas y sistemas digitales para negocios ambiciosos en USA y LATAM.`
   - margin-top `var(--space-l)`. Se subordina al H1 por tamaño (1/6) y color (gris 70%, no negro pleno).

4. **CTA — N2 (acción)**
   - Col 1–4, `align-self: flex-start`. `EMPEZAR UN PROYECTO →`.
   - Geist 500, 14px UPPER, +0.1em. **Relleno `--accent` verde**, texto `--on-accent`. Padding `0.9em 1.8em`, min-height 48px (P9). Sin border-radius o `2px` máximo (NO pill).
   - margin-top `var(--space-m)`. **Está DENTRO de la banda centro, anclado al stack del H1 — nunca "tirado abajo" ni cortado.** Es el único bloque de color sólido del hero.
   - Hover: oscurece a `--accent-press` + la flecha `→` se desplaza +4px (0.2s). Active: scale 0.98. Focus-visible: outline `--accent` offset 3px.

#### Zona derecha (col 9–12) — FICHA TÉCNICA (índice de capacidades como ficha de plano)

Esto es lo que **mata el hueco muerto del lado derecho** y da la densidad editorial. Stack vertical, `align-content: center` dentro de la banda (alineado al alto del H1), `border-left` NO (la hairline ya lo marca). De arriba a abajo:

1. **Rótulo de índice:** `ÍNDICE / CAPACIDADES` (o `INDEX / CAPABILITIES` en EN) — Geist 500, 13px UPPER, +0.12em, `--mid`. margin-bottom `var(--space-s)`.

2. **Las 4 capacidades como filas de ficha** (NO bullets, NO lista con viñetas):
   - Cada fila: `NUM` (Geist 500 tabular, `--mid`) + `LABEL` (Geist 500 UPPER, +0.08em, `--ink`).
   - `001  WEB PLATFORMS`
   - `002  SAAS + SYSTEMS`
   - `003  AI AUTOMATION`
   - `004  ORDERING · BOOKING · WORKFLOWS` (envuelve a 2 líneas a propósito — el wrap es textura de ficha real, y debe ocurrir en AMBOS extremos del rango, ver "Ancho y wrap garantizado" abajo).
   - Cada fila separada por una **hairline horizontal** `--border` (tinta ~12%), `padding-block: var(--space-s)`. Las hairlines entre filas son el "rayado de la ficha técnica" — refuerzan el plano y llenan la columna con estructura, no con relleno.
   - El número de cada fila es Geist 500 (NO Fraunces aquí — los numerales gigantes Fraunces se reservan para la sección Capabilities completa, §6.4 ART_DIRECTION; aquí son ficha, no protagonistas).
   - **Hover por fila (micro):** al pasar el cursor, el `NUM` de esa fila pasa a `--accent` verde (0.2s). Gesto sutil que anticipa el hover del portfolio. No mueve layout.

   **Ancho y wrap garantizado (R-B — verificable en 1280 y 1920):**
   - El contenedor de la ficha técnica (no las celdas col 9–12 sueltas, sino el bloque de texto de las filas) lleva un **`max-width: 22ch`** (medido sobre el label en Geist 500 13px UPPER +0.08em). Este tope hace que `004 ORDERING · BOOKING · WORKFLOWS` (~31 caracteres) **siempre** rompa a 2 líneas, tanto en 1280px como en 1920px.
   - **Por qué un tope fijo y no dejarlo al ancho de col 9–12:** en 1280px (margen ~64px) la col 9–12 es angosta y el 004 envuelve solo; pero en 1920px (margen 7rem) la col 9–12 es ancha y el 004 cabría en una línea, rompiendo la textura de ficha. El `max-width: 22ch` desacopla el wrap del ancho de columna y lo garantiza en ambos anchos.
   - El bloque de la ficha se alinea al borde izquierdo de la col 9 (`justify-self: start` / texto alineado a izquierda contra la hairline central). El `max-width: 22ch` no centra ni estira: deja el aire sobrante a la derecha de la ficha (entre la ficha y el margen) como respiro intencional en ultrawide, no como columna estirada.
   - El número (`001`–`004`) NO entra en ese `max-width`: va como prefijo en su propia columna fija (ancho del numeral + gap), y el `max-width: 22ch` aplica solo a la columna del label. Así el label rompe a 2 líneas alineado bajo sí mismo, no bajo el número.
   - **Verificación para el dev:** en 1280px y en 1920px, la fila 004 debe verse a 2 líneas (`ORDERING · BOOKING ·` / `WORKFLOWS` o equivalente). Si en 1920px aparece en 1 sola línea, el `max-width` no se está aplicando o es muy grande — ajustar hacia abajo hasta forzar el wrap. Las filas 001–003 (más cortas) quedan en 1 línea en ambos anchos: correcto.
   - Ancho: col 9–12 ≈ 4/12 como zona; el bloque de ficha ocupa hasta `22ch` dentro de esa zona. El label largo (004) justifica visualmente la columna — no queda angosto ni vacío.

> Esta columna es la diferencia entre "titular sobre blanco" y "hero compuesto": el ojo va H1 (izq, masa) → ficha técnica (der, índice) → coordenadas (abajo). Tres anclas, cero vacío.

#### Regla estructural central (hairline + filete) — anclaje verificable

**Ambos elementos viven DENTRO de la banda CENTRO (`grid-row: 2`), no del hero.** Esto es lo que evita el desanclaje cuando las bandas TOP/BOTTOM cambian de alto por `clamp()`.

Implementación exacta para el dev:

1. La banda CENTRO (`grid-row: 2`) es `position: relative` (es el contenedor de anclaje).
2. **Hairline `--grid-line`** (tinta 8%, ancho 1px): hija absoluta de la banda CENTRO, sobre el eje col 8/9 (`left: <posición de la línea col 8/9 dentro de la banda>`), `top: 0; bottom: 0`. Recorre el alto COMPLETO de la banda centro y nada más — si la banda crece o se achica, la hairline la sigue. NO usa `vh`.
3. **Filete `--accent` verde** (ancho 1px, segmento corto): hija absoluta de la banda CENTRO, sobre el mismo eje col 8/9, **centrado verticalmente dentro de su contenedor**:
   ```
   position: absolute;
   left: <mismo left que la hairline>;
   top: 50%;
   transform: translateY(-50%);   /* + scaleY para el reveal: translateY(-50%) scaleY(var(--reveal)) */
   height: 22vh;
   transform-origin: center;
   ```
   Al centrarse con `top: 50% / translateY(-50%)` **relativo a la banda CENTRO** (no al viewport), el filete queda siempre clavado al tramo medio del H1 sin importar cuánto midan las bandas TOP/BOTTOM. **Verificación para el dev:** cambiar a mano el `clamp()` de la altura de la banda TOP o BOTTOM y confirmar que el filete sigue centrado respecto al H1 (no se despega ni "flota"). Si el filete se mueve respecto al H1 al tocar esos clamps, está mal anclado.
4. El filete es la única línea de color estructural; separa la masa del H1 de la ficha técnica. Anima con scaleY 0→1 desde el centro (Momento 1), componiendo con el `translateY(-50%)` del centrado (ver bloque de transform arriba).

---

### BANDA BOTTOM — pie del plano / ancla inferior (`grid-row: 3`, ancla borde inferior)

Es la zona que el hero anterior dejaba **completamente vacía**. Aquí va la "ficha de pie de plano": número de sección + coordenadas + scroll-cue. Una fila `flex justify-between align-items: end`, altura `clamp(112px, 14vh, 150px)`, con una **hairline superior** (tinta 12%) de margen a margen que la separa de la masa.

| Elemento | Posición | Tipografía | Notas |
|---|---|---|---|
| **Numeral de sección `01`** | extremo izq. (col 1) | Fraunces 300, ~64px, `--ink` | El "número de capítulo" del plano. Da peso editorial a la esquina inferior izquierda. El `0` de `01` puede ir `--mid`, el `1` `--ink` (sutileza). |
| **Coordenadas + ciudad + año** | centro-izquierda, junto al numeral | Geist 500, 13px UPPER, +0.12em, `--mid` | `4.7110°N 74.0721°W · BOGOTÁ · 2026`. Dato real como diseño (ART_DIRECTION §8.2). El `·` separador en `--mid` 40%. Coordenadas exactas a confirmar con William. |
| **Estado + scroll-cue** | extremo der. (col 9–12) | Geist 500, 13px UPPER, +0.12em, `--ink` | `DISPONIBLES 2026` (o `AVAILABLE 2026`) + un glifo `↓` debajo. El `↓` hace un loop sutil de translateY (±4px, 1.6s, easeInOut) — el ÚNICO motion en loop del hero (R5: motion con propósito, indica que hay más abajo). |

- El numeral `01` + coordenadas anclan la esquina inferior-izquierda; el estado/scroll-cue ancla la inferior-derecha. **Las dos esquinas inferiores cargadas = el borde inferior ya no es hueco.**
- `DISPONIBLES 2026` traduce el "Seven Years Running 2018–2024" de Locomotive: dato real con función comercial (escasez/disponibilidad, C11). Si William prefiere otro dato real (nº de proyectos, año fundación), se swapea el texto — la posición se mantiene.

---

## 4. Cómo se llena EXACTAMENTE el 100vh (anti-hueco-muerto)

```
100svh =  BANDA TOP (auto ~104px)   →  cabecera anclada arriba: wordmark + nav + toggle + hairline
        + BANDA CENTRO (1fr)         →  el sobrante se reparte como AIRE COMPUESTO arriba (58%) y
                                         abajo (42%) del bloque H1, que queda bajo el centro óptico.
                                         A la derecha, la ficha técnica llena col 9–12 con hairlines.
        + BANDA BOTTOM (auto ~136px) →  pie anclado abajo: numeral 01 + coordenadas + scroll-cue + hairline
```

- **No hay ninguna zona del viewport sin función.** Arriba carga la cabecera. Los costados cargan H1 (izq) y ficha (der). Abajo carga el pie con coordenadas y cue. El centro respira, pero está **enmarcado** por contenido en los cuatro bordes — exactamente como Locomotive.
- El `1fr` de la banda CENTRO es la clave técnica: en vez de `auto auto auto auto` que amontona arriba, el `1fr` **distribuye el aire dentro de la composición**, no al final como vacío.
- En **1920px / ultrawide:** el margen `7rem` tope mantiene el contenido contenido; el H1 escala a su máximo `9.5rem`; el aire crece proporcional pero el marco (4 bordes cargados) impide que se lea vacío. NO se centra todo en un container fijo — el contenido usa el ancho con márgenes editoriales. **La ficha técnica conserva su `max-width: 22ch`** (§3): aunque la col 9–12 es más ancha en 1920px, el bloque de ficha no se estira y la fila 004 sigue envolviendo a 2 líneas — el wrap intencional se mantiene idéntico a 1280px (R-B). El aire que sobra a la derecha de la ficha es respiro compuesto, no columna vacía.

---

## 5. Comparación explícita con cómo Locomotive llena su hero

| Aspecto | Locomotive (verificado, research §3 + §5) | SCUART hero (esta spec) |
|---|---|---|
| Estructura | Contenido anclado a los 4 bordes; centro respira como marco | Bandas TOP/CENTRO/BOTTOM; H1 enmarcado por nav + ficha + pie |
| Cabecera en hero | Wordmark + nav horizontal + toggle EN/FR, parte del hero | Wordmark SCUART® + nav + toggle ES|EN en banda TOP |
| Declaración | "Digital-First Design™ \| Made in Montréal" — declara, no describe | "Diseño que se *ve*. Tecnología que *trabaja*." — declara (R9) |
| Badge ubicación | "1211 Jean-Talon Est, Montréal" como dato real | "4.7110°N 74.0721°W · BOGOTÁ · 2026" en pie |
| Contadores | "Seven Years Running 2018–2024" / "288 reconocimientos" | "DISPONIBLES 2026" + numeral de sección 01 (dato real) |
| Índice de servicios | Departamentos numerados 01/02/03 con conteos | Capacidades 001–004 como ficha técnica col 9–12 |
| Color | Casi acromático + emojis de tren (SU identidad) | Acromático yeso/tinta + UNA línea verde (italic + filete) |
| Espacio negativo | Agresivo pero compuesto, nunca hueco | Aire 58/42 en banda centro, enmarcado — nunca vacío al fondo |
| Lo que NO clonamos | Emojis de tren, PP Editorial New, Montréal, EN/FR | → verde botella, Fraunces, Bogotá, ES/EN |

**Diferencia con el hero anterior (rechazado):** aquél tenía los mismos átomos (kicker, H1, capabilities, CTA) pero sin marco — el grid `auto×4` los pegaba arriba-izquierda y dejaba medio viewport muerto. Esta spec los **redistribuye contra los 4 bordes** (nav arriba, ficha derecha, coordenadas/cue abajo) y mete el H1 en un `1fr` central. Mismos elementos, composición que llena. Ese es el fix.

---

## 6. Motion direction (alineado a ART_DIRECTION §7 Momento 1 — dirección, no implementación)

El motion existente en `HeroSection.astro` (line-reveal del H1 por máscaras + grilla scaleY + franja verde + stagger de capabilities) **se conserva y se extiende** a la nueva composición. Secuencia narrativa:

1. **Cabecera (banda TOP)** entra primero, sutil: wordmark + nav fade + leve translateY, 0.5s. Da el "marco" antes que el contenido.
2. **Hairline central + filete verde** se dibujan (scaleY 0→1 desde arriba, expo.out, 1.1s). El esqueleto del plano aparece.
3. **H1 emerge por líneas** (clip abajo→arriba, expo.out 0.9s, stagger 0.12s entre L1 y L2). Las palabras italic verdes (`ve.`, `trabaja.`) aterrizan ÚLTIMAS con +0.2s de delay y micro-scale 0.94→1 — la firma cae al final. NUNCA fade de bloque (R5).
4. **Ficha técnica (col 9–12)** entra con stagger por fila (fade + translateY 8px, 0.08s entre filas) — las hairlines se dibujan con scaleX. Acompaña al H1, no antes.
5. **Lead + CTA** fade-in, subordinados (0.7s, leve delay).
6. **Pie (banda BOTTOM)** entra último: numeral 01 + coordenadas fade; el `↓` arranca su loop sutil de translateY una vez asentado todo.

- El verde aparece solo en: palabras italic del H1, el filete central, el `®` del wordmark, el relleno del CTA, y (en hover) el num de la ficha. **<5% de la pantalla** (ART_DIRECTION §3).
- **reduced-motion:** todo estático visible de inmediato, el `↓` no hace loop, sin máscaras ni dibujos de líneas. El verde y el grano se mantienen (identidad, no motion).

---

## 7. Tabla de jerarquía (skill visual-composition — obligatoria)

```
SECCIÓN: Hero desktop

Nivel 1 (atención primaria): H1 claim Fraunces 300 ~140px, col 1–8, banda centro
  - Peso visual: ~50% (tamaño 10× el body + ocupa 2/3 del ancho + aislamiento por aire + único color cálido en las italic verdes)
  - Cómo logra dominancia: tamaño extremo + posición masa central-izquierda + overshoot fuera de grilla + acento verde en las 2 palabras clave

Nivel 2 (atención secundaria):
  - Ficha técnica de capacidades (col 9–12): contrapeso editorial a la derecha del H1
  - CTA verde (col 1–4): único bloque de color sólido, llama a la acción
  - Lead (col 1–6): subordinado por tamaño y gris 70%
  - Relación con N1: todos cuelgan visual y posicionalmente del H1; la ficha lo equilibra, el CTA y lead lo continúan hacia abajo

Nivel 3 (detalle): kicker, nav + wordmark + toggle (banda top), numeral 01 + coordenadas + scroll-cue (banda bottom), hairlines, filete verde

Elementos eliminados (para no pasar de 3 niveles ni meter slop):
  - Segundo CTA (un solo CTA primario)
  - Foto de equipo / mockup de proyecto (SCUART confía en tipografía, ART_DIRECTION §9)
  - Ilustración decorativa / blob 3D / glifo gigante de fondo (se evaluó el numeral semitransparente de fondo y se DESCARTÓ: competiría con el H1 y leería decorativo; el filete verde + ficha técnica dan riqueza sin ruido)
  - Scroll-cue genérico tipo "mouse animado" (se usa ↓ tipográfico + estado, no widget)
  - Cualquier gradiente, card con shadow, segundo acento
```

---

## 8. Autocrítica — riesgos de verse genérico y cómo los evité

- **Riesgo: "titular sobre blanco" (el error rechazado).** → Resuelto con bandas TOP/CENTRO/BOTTOM y contenido anclado a los 4 bordes. El H1 va en `1fr` central, no colgando del tope. Cero hueco muerto al fondo.
- **Riesgo: ficha técnica como "lista de servicios genérica".** → Se compone como ficha de plano con hairlines de rayado y numerales 001–004, alineada a la columna derecha como índice editorial, con micro-hover verde. NO bullets, NO iconos, NO grid de 3 cards (R2/R4).
- **Riesgo: el 004 deja de envolver en ultrawide y se pierde la textura de ficha.** → `max-width: 22ch` en el label de la ficha (§3) garantiza el wrap a 2 líneas en 1280px y en 1920px por igual, desacoplándolo del ancho de la col 9–12 (que crece en ultrawide). El wrap es intencional, no accidente del ancho de columna (R-B).
- **Riesgo: nav genérica que no es parte del hero.** → Se diseña dentro de la banda TOP como cabecera del plano, con hairline inferior, wordmark Fraunces como sello. Es composición, no un header pegado encima.
- **Riesgo: numeral gigante de fondo (cliché editorial AI).** → Descartado a propósito. Daría "riqueza" falsa compitiendo con el H1. La riqueza viene de datos reales compuestos (ficha, coordenadas, sección), no de decoración.
- **Riesgo: simetría / centrado.** → Asimetría en tres ejes: overshoot del H1 fuera del margen izq., split densidad izquierda(aire)/derecha(densa), aire vertical 58/42 no centrado. (R2)
- **Riesgo: verde de más.** → El verde vive en 5 puntos mínimos (2 palabras italic, filete, ®, CTA, hover). Medible <5%. (ART_DIRECTION §3)
- **Riesgo: scroll-cue gimmick.** → No hay widget de mouse; hay `↓` tipográfico + `DISPONIBLES 2026` (dato funcional), único loop sutil con propósito (R5).
- **Límite honesto:** el hero no lleva imagen porque el sujeto de SCUART es su criterio, no un producto visual (gesto Locomotive validado). La sensación premium aquí depende 100% de tipografía + composición + motion + grano — exige que las fuentes Fraunces/Geist estén bien cableadas (ART_DIRECTION §4 advierte que el preload actual NO corresponde) y que el grano esté calibrado. Sin eso, ningún layout salva el hero.

---

## 9. Checklist anti-slop (visual-composition — autoevaluación)

```
COMPOSICIÓN
[x] Jerarquía máximo 3 niveles (R10) — N1 H1, N2 ficha+CTA+lead, N3 cabecera+pie+hairlines
[x] Elemento primario ≥40% del peso — H1 ~50%
[x] Asimetría intencional, no apilado default (R2) — overshoot izq., split densidad, aire 58/42
[x] Ningún bloque vertical >600px sin quiebre — el hero es 100vh con 3 bandas + hairlines que quiebran

IMÁGENES
[x] Sin placeholder de color sólido (R1) — no hay placeholders; grano material sobre --bg
[x] Image-first no aplica (R3) — sujeto no visual (estudio); decisión documentada (ART_DIRECTION §9)
[x] Sin stock genérico (R8) — sin imágenes

TIPOGRAFÍA
[x] Contraste tipográfico real (R6) — Fraunces 300 ~140px vs Geist 13px (brecha extrema)
[x] Headline específico (R9) — declara qué hace SCUART, no genérico

DETALLE
[x] Variación intencional (R4) — densidades, tamaños y hairlines varían por zona
[x] Hover/active/focus presentes (R7) — nav links, CTA, toggle, filas de ficha
[x] Motion intencional, no fade universal (R5) — line-reveal por líneas, stagger, secuencia narrativa

PARIDAD DE MARCA
[x] Misma paleta/tipo/tono que mobile/tablet — tokens B1, Fraunces+Geist, layout propio de desktop (C9)

PROPÓSITO COMERCIAL (C11)
[x] CTA "EMPEZAR UN PROYECTO" + "DISPONIBLES 2026" (escasez) + claim de valor → enganche y conversión

VEREDICTO: todas pasan → NO es AI-slop. Listo para visual-critic.
```

---

## 10. Notas para el dev (qué cambiar respecto al `HeroSection.astro` actual)

1. **Cambiar `grid-template-rows` desktop de `auto auto auto auto` a `auto 1fr auto`** (banda TOP / CENTRO / BOTTOM). Este es el cambio estructural que elimina el hueco muerto.
2. **Integrar la nav (wordmark + links + toggle) en la banda TOP del hero (DECISIÓN CERRADA por William, no opcional).** La cabecera es parte de la composición del hero, no un header flotante. **Evitar el doble render:** si existe un `Nav.astro` / header global, NO debe haber dos navs visibles al cargar — el header global solo aparece (sticky reducido) tras hacer scroll fuera del hero, o el hero reutiliza el header global posicionado en su banda TOP sin duplicar. Verificación: exactamente UN wordmark y UN juego de links en el primer viewport, en 1280px y 1920px. Detalle completo en §3 "DECISIÓN CERRADA (William)".
3. **Añadir la banda BOTTOM**: numeral `01` (Fraunces), coordenadas, estado `DISPONIBLES 2026` + `↓`. No existe hoy — es lo que llenaba el vacío inferior.
4. **Reubicar la ficha de capacidades** a col 9–12 con `align-content: center` en banda CENTRO, con hairlines entre filas (rayado de ficha). Hoy está como lista suelta sin estructura. **Aplicar `max-width: 22ch` al label de la ficha** para que la fila `004 ORDERING · BOOKING · WORKFLOWS` envuelva a 2 líneas tanto en 1280px como en 1920px (no dejar el wrap al ancho de columna, que en ultrawide la pondría en 1 línea). Numeral en columna fija aparte del label. Detalle en §3 "Ancho y wrap garantizado". Verificar el wrap a 2 líneas en ambos anchos.
5. **El H1 va en banda CENTRO con aire 58/42** (no `align-self: start` pegado arriba). Subir tamaño a `clamp(4rem, 8.5vw, 9.5rem)`.
6. **Filete verde**: acortarlo a un segmento central de `22vh` sobre col 8/9, no top:20%/bottom:18% del actual (que es casi toda la altura). Un tramo marcado, no un borde largo. **CRÍTICO — anclarlo a la banda CENTRO, NO al viewport:** el filete y la hairline central son hijos absolutos de la banda CENTRO (`position: relative`), y el filete se centra con `top:50%; transform: translateY(-50%); height:22vh` RELATIVO a esa banda. Prohibido `top: 30vh` (o cualquier `vh` contra el viewport): eso lo desancla del H1 si los `clamp()` de las bandas cambian — fue el error del hero anterior. Verificación: tocar a mano el alto de banda TOP/BOTTOM y comprobar que el filete sigue centrado contra el H1. Detalle completo en §3 "Regla estructural central".
7. **Confirmar con William (solo datos, NO la estructura):** coordenadas exactas de Bogotá y texto del estado (`DISPONIBLES 2026` u otro dato real). La pregunta sobre la nav YA está resuelta: va integrada en el hero (R-C, decisión cerrada de William) — no se re-consulta.
8. **Pre-requisito (ART_DIRECTION §4):** re-cablear fuentes a Fraunces + Geist (el preload actual de `archivo`/`dm-sans`/`ibm-plex-mono` no corresponde). Sin esto la spec no se ve como debe.
```
