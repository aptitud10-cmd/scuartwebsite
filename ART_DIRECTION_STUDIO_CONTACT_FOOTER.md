# Art Direction — Studio · Contacto · Footer

**Fecha:** 2026-06-23
**Director:** director-creativo (Opus 4.8)
**Proyecto:** scuart.com — branch `redesign-v3`
**Scope:** SOLO Studio, Contacto, Footer. Hero y Portfolio están aprobados — NO se tocan.

---

## Lectura del problema (por qué lo actual es "maquillaje")

Las tres secciones hoy comparten el mismo esqueleto y por eso se sienten genéricas:

1. **Kicker arriba con hairline full-width** → idéntico en las 3. El ojo aprende el patrón y deja de mirar.
2. **Todo apila verticalmente alineado a la izquierda.** Servicios, pasos, campos de form, créditos: misma columna, mismo borde izquierdo, mismo ritmo. Cero tensión horizontal.
3. **La grilla nunca se rompe.** Locomotive impacta porque desfasa, deja vacíos deliberados y mete un elemento donde no lo esperás. Acá todo cae donde el navegador lo pone por defecto.
4. **La tipografía es grande pero no es la composición.** "Subir el tamaño" no es dirección de arte. La composición nace de la **relación** entre elementos: qué toca qué, qué flota sobre qué, qué queda solo en un mar de vacío.

La regla rectora para las tres secciones: **una sola idea compositiva fuerte por sección, ejecutada con disciplina.** No tres ideas tibias. Una decisión que se sienta intencional.

El sistema visual (PP Editorial New display, Geist body, crema `--bg`, tinta `--ink`, lima `--brand` como bisturí <8%) NO cambia. Cambia **dónde van las cosas y cómo se relacionan.**

---

## Concepto rector de las tres secciones

**"El estudio se lee como un documento de autor, no como una landing."**

Un documento de autor (un manifiesto impreso, un ensayo de diseño, un libro de Massimo Vignelli) tiene tres propiedades que un template no tiene:

- **Márgenes vivos:** el contenido respira asimétricamente. La columna de texto no está centrada ni pegada al borde; vive en una posición decidida.
- **Numeración como arquitectura:** los números no decoran, estructuran la página y crean la verticalidad.
- **Jerarquía por posición, no solo por tamaño:** lo importante no es lo más grande, es lo que está solo.

Studio, Contacto y Footer son los tres "capítulos finales" del documento. Cada uno tiene su gesto, pero los tres comparten el mismo ADN editorial.

---

# SECCIÓN 1 — STUDIO

Copy real disponible:
- Kicker: `ESTUDIO`
- Parte 1 — `QUÉ HACEMOS`: 3 servicios (01 DISEÑO + WEB, 02 PRODUCTO DIGITAL, 03 IA + AUTOMATIZACIÓN) + texto `resolves` por cada uno.
- Parte 2 — `CÓMO TRABAJAMOS`: 4 pasos (001 DIAGNÓSTICO, 002 DIRECCIÓN, 003 SISTEMA, 004 LANZAMIENTO) + `body` + `whatChanges`.

> Nota: hoy son SOLO 3 servicios, no 6 como dice el comentario del componente. La dirección se diseña para 3.

## 1.1 — El gesto compositivo: la columna de medición

Hoy Studio es "lista de servicios apilada" + "lista de pasos apilada". Dos listas seguidas. Aburrido y predecible.

**Nuevo gesto:** Studio se organiza sobre una **columna de medición fija a la izquierda** — una franja vertical angosta (ancho fijo, ~`clamp(3.5rem, 7vw, 6rem)` en desktop) que recorre TODA la sección de arriba a abajo y contiene SOLO metadata vertical: el kicker rotado 90°, los numerales de fase, una línea-guía continua. Es el "lomo" del documento. El contenido real vive a la derecha de esa columna, desfasado.

Esto hace dos cosas: (a) crea una asimetría estructural inmediata que diferencia de cualquier landing centrada; (b) unifica las dos partes (servicios + proceso) bajo un mismo sistema de medición en vez de dos listas independientes.

### Layout desktop (≥1280px)

```
│ COLUMNA          │                                                      │
│ MEDICIÓN         │   ZONA DE CONTENIDO (desfasada a la derecha)         │
│ (ancho fijo)     │                                                      │
│                  │                                                      │
│  E               │   QUÉ HACEMOS ──────────────── (label mono, derecha) │
│  S               │                                                      │
│  T               │   01                                                 │
│  U  ← kicker      │   DISEÑO + WEB ◄── nombre serif, 62% del ancho de    │
│  D     rotado     │                    la zona de contenido             │
│  I     90°        │       Identidad visual y sitios de autor...          │
│  O               │                                                      │
│  │ ← línea        │   02                                                 │
│  │   guía         │   PRODUCTO DIGITAL                                   │
│  │   continua     │       SaaS, e-commerce...                            │
│  │               │                                                      │
│  │               │   03                                                 │
│  │               │   IA + AUTOMATIZACIÓN                                │
│  │               │       Conectamos IA...                               │
│  │               │                                                      │
│  ●  ← marcador    │   ──────────────────────────────────────────────   │
│     de fase       │                                                      │
│                  │   CÓMO TRABAJAMOS                                    │
│  001             │                                                      │
│  002  ← numerales │   (4 pasos, ver 1.4)                                 │
│  003     de       │                                                      │
│  004     proceso  │                                                      │
│     pineados      │                                                      │
```

La columna de medición es `position: sticky` y se queda fija mientras el contenido scrollea al lado. Los numerales que muestra cambian según la fase visible (servicios → muestra el kicker rotado; proceso → muestra 001-004 con el activo en lima).

## 1.2 — Momento de impacto

Lo primero que el ojo agarra: **la asimetría.** El vacío de la columna de medición a la izquierda + el nombre del primer servicio (`DISEÑO + WEB`) en serif grande arrancando NO desde el borde izquierdo sino desde ~12-15% adentro. Esa sangría inicial es lo que dice "esto no es un template" antes de leer una palabra.

El segundo golpe: el numeral `01` flota **encima y a la izquierda** del nombre del servicio, en `--ink-18` (fantasma), a ~0.55x el tamaño del nombre, ligeramente saliéndose hacia la columna de medición (cabalga el límite entre columna y contenido). Crea profundidad: el número está "detrás", el nombre "adelante".

## 1.3 — Parte 1: Servicios (tipografía y proporciones)

**El cambio estructural clave vs. hoy:** hoy el numeral está ARRIBA del nombre (apilado vertical, `display: block` + `margin-bottom`). Eso es lista. **Ahora el numeral y el nombre comparten plano horizontal con solapamiento.**

Por cada servicio:

- **Numeral (`01`–`03`):** PP Editorial New, weight 300. Tamaño `clamp(4rem, 9vw, 9rem)`. Color `--ink-18`. Posición: absoluto/relativo de modo que su línea base se alinee con la **mitad superior** del nombre y su borde derecho solape ~0.3em con la primera letra del nombre. Tabular-nums. No es un prefijo, es una marca de agua estructural.
- **Nombre del servicio:** PP Editorial New, weight 300. Tamaño `clamp(2.25rem, 5.5vw, 4.5rem)` (alineado a `--text-h2`). Ocupa **~62% del ancho de la zona de contenido** — NO full width. El 38% restante a la derecha queda vacío (vacío deliberado, no relleno). Color `--ink`. Letter-spacing `-0.03em`.
- **`resolves` (descripción):** Geist, `--text-body`, `--ink-62`, max-width `42ch`. Posición: **NO debajo del nombre como hoy.** Va alineado a la **derecha** del bloque, empezando aprox. donde termina el nombre (en el 62%), un escalón más abajo. Crea una lectura en zigzag (nombre izquierda-arriba → descripción derecha-abajo) en vez de la lectura vertical plana actual.

Cada servicio está separado del siguiente por un hairline `--hairline` full-width de la zona de contenido (NO de toda la sección — el hairline arranca después de la columna de medición). Padding vertical generoso: `clamp(var(--space-xl), 8vw, calc(var(--space-2xl) * 1.3))`.

**Interacción hover (desktop):** se conserva la idea actual pero refinada. Al hover sobre un servicio:
- El numeral fantasma vira de `--ink-18` a `--brand` (lima) — único toque de color.
- El nombre NO cambia de tamaño (eso es ruido); en cambio, una **línea lima de 1px se dibuja** desde la columna de medición hacia el nombre (scaleX origin-left, 0.5s), conectando físicamente el lomo con el servicio activo.
- Los otros dos servicios bajan a `opacity: 0.4`.
- El `resolves` ya es visible siempre (NO el accordion `max-height` actual — en 3 servicios no hace falta esconderlo, esconder genera la sensación de "lista FAQ" que queremos evitar).

## 1.4 — Parte 2: Proceso (cómo trabajamos)

**El cambio estructural clave:** hoy proceso es un grid 2-col (numerales pineados | pasos) que es prácticamente lo mismo que servicios. **Diferenciamos:** el proceso es una **línea de tiempo horizontal-vertical**, no otra lista.

- Los numerales `001`–`004` viven en la **columna de medición** (el lomo), apilados, pineados. El activo en `--brand`, los inactivos en `--ink-18`. Esto continúa el sistema del lomo: en servicios el lomo muestra "ESTUDIO" rotado; al entrar al proceso, el lomo muta a mostrar los numerales de fase. La transición entre ambos estados es parte del scroll.
- Cada paso, en la zona de contenido:
  - **Título** (`DIAGNÓSTICO`, etc.): PP Editorial New 300, `clamp(2.5rem, 6vw, 5rem)`. Ancho ~70% de la zona.
  - **`body`:** Geist `--text-body` `--ink-62`, max-width `44ch`, alineado a la izquierda del título.
  - **`whatChanges`:** este es el remate de cada paso y hoy está enterrado igual que el body. **Elevarlo:** va separado por un hairline corto (NO full-width — solo `~30%` del ancho, alineado a la derecha del bloque de texto), con el label `QUÉ CAMBIA` en mono `--ink-62` + la frase en PP Editorial New **itálica** weight 400 (el énfasis es itálica, no color — coherente con el sistema). El `→` que ya existe se mantiene. La itálica acá es el gesto de marca de SCUART (igual que "ve" y "trabaja" itálicas en el hero).

- **Vacío entre pasos:** mucho. `clamp(var(--space-2xl), 14vh, calc(var(--space-3xl)))`. Cada paso debe poder casi ocupar el viewport solo, de modo que el numeral pineado tenga tiempo de transicionar. Esto es lo que hace que el pin se sienta cinematográfico en vez de apretado.

### Tablet (768–1279px)
La columna de medición se **colapsa a una franja superior horizontal** (no lateral): kicker + numeral de fase en una banda. El contenido vuelve a ancho casi completo pero conserva la sangría izquierda de ~8% y los vacíos a la derecha (nombre 70%, resolves 75% desplazado). Sin pin.

### Mobile (375–767px)
- Sin columna lateral. El kicker `ESTUDIO` va arriba, mono, SIN el hairline full-width de hoy (en su lugar: solo el texto + un numeral `01` fantasma grande detrás como marca de agua, lo que da personalidad sin la línea genérica).
- Servicios: numeral fantasma `clamp(3.5rem, 16vw, 6rem)` arriba-izquierda, nombre debajo arrancando con sangría de ~6vw (NO pegado al borde), resolves debajo a ancho casi completo. La sangría de 6vw es lo único que diferencia de una lista normal, pero es suficiente y debe respetarse.
- Proceso: cada paso con su numeral `001` fantasma grande, título, body, y el bloque `QUÉ CAMBIA` con su hairline corto a la derecha. Reveal por scroll (el SplitText actual se conserva).

## 1.5 — Motion / interacción

- **Servicios:** reveal stagger al entrar (se conserva el IntersectionObserver actual, 0.08s stagger). Hover: línea lima que conecta lomo↔servicio + numeral a lima + dim de hermanos.
- **Proceso desktop:** pin del lomo (se conserva el ScrollTrigger actual), numeral activo a lima por paso. Añadir: la **línea-guía vertical** del lomo se "llena" de lima de arriba hacia abajo según el progreso del scroll por los 4 pasos (un `scaleY` ligado al ScrollTrigger). Es el único motion nuevo y es el que da sensación de "progreso por el documento". Sutil, 1px de ancho.
- **Transición lomo servicios→proceso:** cuando el scroll pasa de la zona de servicios a la de proceso, el contenido del lomo hace cross-fade del kicker rotado a la pila de numerales. 0.4s.
- **reduced-motion:** todo estático y visible, lomo muestra numerales sin animar, línea-guía llena al 100% fija.

## 1.6 — Resumen de lo que cambia estructuralmente en Studio

| Hoy | Nuevo |
|---|---|
| Kicker full-width con hairline arriba | Kicker rotado 90° en columna de medición lateral (desktop) |
| Numeral apilado ARRIBA del nombre | Numeral solapa horizontalmente el nombre, cabalgando el lomo |
| Nombre full-width | Nombre a 62% del ancho, 38% vacío deliberado |
| `resolves` debajo del nombre (lista) | `resolves` desfasado a la derecha-abajo (zigzag) |
| Proceso = grid 2-col casi idéntico a servicios | Proceso = línea de tiempo con lomo compartido + línea-guía que se llena |
| `whatChanges` enterrado igual que body | `whatChanges` elevado: itálica serif + hairline corto a la derecha |
| Hover: nombre cambia tracking | Hover: línea lima conecta lomo↔servicio |

---

# SECCIÓN 2 — CONTACTO

Copy real: kicker `EMPEZAR UN PROYECTO`, statement `EMPECEMOS.`, subcopy, email `hello@scuart.com`, formulario completo (8 campos + honeypot), CTA `ENVIAR BRIEF →`, bloque WhatsApp/email alternativo.

> El formulario, sus campos, el honeypot, el endpoint `/api/contact` y la lógica de estados se conservan ÍNTEGROS. Solo cambia composición y posición.

## 2.1 — El gesto compositivo: el statement invade el formulario

Hoy es el split clásico: statement sticky a la izquierda (col 1-5), formulario a la derecha (col 7-12). Es correcto pero es el split que hace todo el mundo. Predecible.

**Nuevo gesto:** `EMPECEMOS.` no vive en una columna separada y educada — es **gigante y ocupa el ancho casi completo arriba**, y el formulario **arranca DEBAJO pero metiéndose en el espacio negativo** del statement. La palabra es tan grande que su contraforma (los huecos de las letras, el espacio bajo la `.`) se vuelve el lienzo donde respira el formulario.

Esto convierte el contacto en "un cierre con voz" en vez de "un formulario con título al lado".

### Layout desktop (≥1280px)

```
│ EMPEZAR UN PROYECTO ──────────────────────────── (label mono, alineado dcha) │
│                                                                              │
│                                                                              │
│   EMPECEMOS.                                                                 │
│   ▲ PP Editorial New 300, clamp(...,14rem). Ocupa ~80% del ancho.            │
│     Arranca con sangría izquierda ~6%. La "." es un punto enorme.            │
│                                                                              │
│                          ┌─────────────────────────────────────┐            │
│   Contanos el proyecto.  │  Nombre *          Negocio o marca   │            │
│   Respondemos en menos   │  ─────────────     ───────────────   │            │
│   de 24 horas.           │                                      │            │
│   ▲ subcopy, abajo-izq,  │  Email *           País o mercado    │            │
│     bajo el statement,   │  ─────────────     ───────────────   │            │
│     ocupa el "hueco"      │                                      │            │
│                          │  ¿Qué necesitas?                     │            │
│   hello@scuart.com       │  ───────────────────────────────    │            │
│   ▲ email mono, underline │  ...resto del form...                │            │
│                          │                                      │            │
│                          │            [ ENVIAR BRIEF → ]  ◄ lima │            │
│                          └─────────────────────────────────────┘            │
│                                                                              │
│  ¿Preferís un mensaje rápido? — WhatsApp · Email   (al pie, mono, sutil)     │
```

El formulario ocupa col 6-12 (desfasado a la derecha), y el bloque statement+subcopy+email ocupa col 1-5 PERO el statement `EMPECEMOS.` rompe ese límite y sangra hacia la derecha por encima del formulario en su línea superior. El subcopy y el email quedan en la columna izquierda, anclados abajo, **alineados con el primer campo del formulario** (no arriba) — esto crea una línea horizontal de inicio compartida que ordena el caos del statement gigante de arriba.

## 2.2 — Momento de impacto

`EMPECEMOS.` La palabra es el evento. Una sola palabra en serif, casi tan grande como el wordmark del footer, dominando el inicio de la sección. El punto final (`.`) es un elemento gráfico: redondo, sólido, `--ink`, casi del tamaño de una letra. Es el "punto de decisión".

Por contraste, el formulario es **deliberadamente discreto y técnico**: inputs de línea (sin cajas, como hoy), labels mono uppercase, mucho aire. El contraste entre el statement expresivo (serif, enorme, emocional) y el formulario sobrio (líneas, mono, funcional) ES la composición. Emoción arriba, ejecución abajo.

## 2.3 — Tipografía y proporciones

- **`EMPECEMOS.`** PP Editorial New 300, `clamp(4.5rem, 15vw, 13rem)`. Line-height `0.85`. Letter-spacing `-0.04em`. `--ink`. Una sola línea en desktop si entra; si no, que quiebre natural. La `.` puede estilizarse aparte en un `<span>` para controlar su peso visual (mantenerla `--ink`, no lima — el color se reserva para el CTA).
- **Subcopy** ("Contanos el proyecto..."): Geist `--text-body`, `--ink-62`, max-width `30ch`. Ancla inferior de la columna izquierda.
- **Email** (`hello@scuart.com`): Geist mono `--text-mono`, uppercase, `--ink-62`, underline hairline. Se conserva tal cual hoy.
- **Labels del form:** Geist 500, `--text-mono`, uppercase, tracking `0.14em`, `--ink`. Igual que hoy (correcto).
- **Inputs:** línea inferior `--hairline`, focus a lima. Igual que hoy (correcto). NO meter cajas.
- **CTA `ENVIAR BRIEF →`:** relleno lima `--brand`, texto `--on-brand`. Único bloque sólido de color de toda la sección. Se conserva. Posición: alineado a la **derecha** del formulario (no izquierda como `align-self: flex-start` actual) — el remate va donde el ojo termina de leer la fila, y ancla la esquina inferior derecha del bloque-formulario.

## 2.4 — Lo que cambia estructuralmente en Contacto

| Hoy | Nuevo |
|---|---|
| Statement sticky col 1-5, en su carril, tamaño contenido | Statement gigante arriba sangrando por encima del form |
| Split 5fr/6fr educado y simétrico-ish | Statement domina arriba; form col 6-12; subcopy+email anclados ABAJO de la col izquierda |
| Subcopy y email arriba, junto al statement | Subcopy y email anclados al pie de la col izquierda, alineados con el 1er campo del form |
| CTA `align-self: flex-start` (izquierda) | CTA alineado a la derecha del form (remate de esquina) |
| Kicker full-width con hairline | Kicker mono alineado a la derecha, sin hairline full-width (la sección ya viene separada de Studio) |

### Tablet (768–1279px)
Statement grande arriba (sangría 6%), subcopy+email debajo en una fila, formulario debajo a ancho casi completo (las filas split se mantienen 2-col). CTA a la derecha.

### Mobile (375–767px)
- `EMPECEMOS.` arriba, grande pero conteniendo (`clamp(4.5rem, 18vw, ...)`), sangría 5vw.
- Subcopy debajo, email debajo.
- Formulario: campos full-width apilados (split colapsa a 1-col, como hoy). Inputs de línea. CTA `ENVIAR BRIEF →` full-width o alineado a la derecha — full-width es mejor para pulgar en mobile, EXCEPCIÓN al "derecha" de desktop por ergonomía táctil.
- El honeypot, los estados loading/success/error: intactos.

## 2.5 — Motion / interacción
- **Statement:** mask reveal por líneas (SplitText, se conserva el actual, expo.out 0.9s stagger 0.12).
- **Form:** stagger sutil de filas al entrar (IO, se conserva). El CTA lima entra último (se conserva — es la regla "el punto final de la frase"). **REGLA DURA conservada:** nada se mueve mientras el usuario escribe.
- **reduced-motion:** todo visible, sin transiciones en inputs.

---

# SECCIÓN 3 — FOOTER

Copy real: nav (Trabajo · Servicios · Contacto), selector idioma, wordmark `SCUART*` (asterisco lima), tagline `No decoramos. Decidimos.`, créditos (© 2026 SCUART · Bogotá · US · LATAM · coords 4.7110° N, 74.0721° W · email · WhatsApp).

## 3.1 — El gesto compositivo: el wordmark como horizonte

Hoy el footer es: banda nav arriba → hairline → wordmark a sangre → créditos. Vertical, ordenado, correcto, pero es "footer de agencia #47".

**Nuevo gesto:** el wordmark `SCUART*` se convierte en el **horizonte/piso del sitio** — sangra a ambos bordes (esto ya está bien) pero ahora **todo lo demás se posiciona EN RELACIÓN a él**, no apilado encima. La metadata (nav, idioma, créditos, tagline) flota en el espacio negativo alrededor y dentro del campo del wordmark, como anotaciones al margen de una firma.

El wordmark es la base; la información lo rodea como satélites. Eso es lo que hace Locomotive: el nombre gigante no es "un bloque más" sino el sistema de coordenadas de todo el footer.

### Layout desktop (≥1280px)

```
│ TRABAJO · SERVICIOS · CONTACTO          EN / ES  ◄ banda meta, arriba       │
│                                                                              │
│                                              No decoramos. Decidimos.        │
│                                              ▲ tagline serif itálica,        │
│                                                anclada arriba-derecha,        │
│                                                en el "aire" sobre el wordmark │
│                                                                              │
│ ┌──────────────────────────────────────────────────────────────────────┐   │
│ │  S C U A R T*   ◄ PP Editorial New 300, sangra a ambos bordes,         │   │
│ │                    clamp(...,22rem). El * en lima, baseline-shift up.   │   │
│ └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│ © 2026 SCUART · Bogotá·US·LATAM · 4.7110°N 74.0721°W · hello@ · WhatsApp     │
│ ▲ créditos mono, una línea, bajo el wordmark, ancho completo                 │
```

El cambio clave vs hoy: **el tagline `No decoramos. Decidimos.` sube y se ancla arriba-derecha**, en el espacio negativo por encima de la última línea del wordmark, en vez de estar debajo del wordmark apilado. Esto crea una diagonal de lectura: nav (arriba-izq) → tagline (medio-derecha) → wordmark (centro, sangre) → créditos (abajo). El ojo recorre una Z, no una lista vertical.

## 3.2 — Momento de impacto

El wordmark `SCUART*` a sangre completa — ya es el momento más fuerte y se conserva. Lo que cambia: el **asterisco lima** (`*`) deja de ser un sufijo y se trata como una nota al pie tipográfica — baseline-shift hacia arriba (superíndice parcial), tamaño ~0.4x del wordmark, en `--brand`. Es la única mota de color del footer y debe leerse como "marca registrada de autor", el sello del estudio. El micro-pulso al entrar (se conserva) firma el cierre.

## 3.3 — Tipografía y proporciones

- **Wordmark `SCUART`:** PP Editorial New 300, `clamp(5.5rem, 20vw, 22rem)`, line-height `0.82`, tracking `-0.04em`, `--ink`, uppercase, a sangre (negative margins se conservan). `white-space: nowrap`.
- **`*` (asterisco/sello):** `--brand`, `font-size: 0.4em` relativo al wordmark, `vertical-align` superíndice (baseline shift ~0.5em up). NO del mismo tamaño que las letras — es una nota, no una letra.
- **Tagline `No decoramos. Decidimos.`:** PP Editorial New 400 **itálica**, `clamp(1.5rem, 3.5vw, 2.75rem)`, `--ink-62`. La itálica es deliberada — es el gesto de marca (igual que hero y `whatChanges`). Anclado arriba-derecha del wordmark, max-width ~16ch para que quiebre en 2 líneas y tenga forma de "anotación".
- **Nav (Trabajo · Servicios · Contacto):** Geist 500, `--text-mono`, uppercase, tracking `0.14em`, `--ink-62`. Underline lima en hover (se conserva). Touch targets ≥48px (se conserva).
- **Selector idioma:** igual patrón, derecha. Se conserva.
- **Créditos:** Geist 400, `--text-mono`, `--ink-62`, una línea con separadores `·`. Coords con tabular-nums + tracking abierto `0.06em` (ficha técnica). Se conserva el contenido; va DEBAJO del wordmark, ancho completo.

## 3.4 — Lo que cambia estructuralmente en Footer

| Hoy | Nuevo |
|---|---|
| Orden vertical: nav → hairline → wordmark → tagline → créditos | Diagonal Z: nav (arriba-izq) → tagline (medio-der, flotante) → wordmark (sangre) → créditos (abajo) |
| Tagline apilado debajo del wordmark | Tagline anclado arriba-derecha, en el aire sobre el wordmark |
| Asterisco `*` mismo tamaño que letras | Asterisco como nota al pie: 0.4em, superíndice, lima |
| Hairline divisor full-width entre nav y wordmark | Se elimina o se reduce a `~40%` ancho alineado a la izquierda (el wordmark ya separa por escala, el hairline full-width es redundante y genérico) |

### Tablet (768–1279px)
- Banda meta: nav izquierda / idioma derecha (se conserva).
- Tagline: vuelve a debajo del nav, alineado a la derecha, antes del wordmark (no se puede flotar bien en tablet sin chocar). Itálica serif.
- Wordmark a sangre. Créditos abajo, posible 2 líneas.

### Mobile (375–767px)
- Nav apilado (Trabajo / Servicios / Contacto) o en línea con wrap — se conserva.
- Idioma debajo.
- Tagline itálica, ancho casi completo, antes del wordmark.
- Wordmark a sangre — en 375px `SCUART` entra ajustado, nowrap, sangrando levemente. El `*` superíndice lima.
- Créditos: wrap a 2-3 líneas, separadores `·`. Se conserva.
- Respetar **safe-area-inset-bottom** en el padding inferior del footer (`padding-bottom: max(var(--space-xl), env(safe-area-inset-bottom))`) — directiva global iOS.

## 3.5 — Motion / interacción
- **Wordmark:** fade-up al entrar (IO, se conserva, 0.9s).
- **Asterisco:** micro-pulso único 1→1.08→1 al entrar (se conserva, 0.6s después del fade).
- **Tagline:** fade-up sutil con leve delay tras el wordmark (nuevo, 0.4s, ligado al mismo IO).
- **Nav/idioma:** underline lima scaleX en hover (se conserva).
- **reduced-motion:** todo visible inmediato, sin pulso, sin fade.

---

# SISTEMA TRANSVERSAL (las 3 secciones)

## Lo que unifica las tres (para que se sientan del mismo autor)

1. **Asimetría con sangría izquierda.** Ninguna de las tres centra contenido ni lo pega al borde izquierdo a 0. Todas arrancan con una sangría decidida (lomo en Studio, sangría 6% en Contacto y Footer). Es la firma compositiva.
2. **Vacío deliberado a la derecha.** Nombres y títulos NO llegan a full-width. El 25-38% derecho vacío es intencional y debe respetarse — es lo que distingue "editorial" de "landing rellena".
3. **Itálica = énfasis, color = acción.** PP Editorial New itálica para los remates emocionales (`whatChanges`, tagline). Lima `--brand` SOLO para acción/estado (CTA, hover, numeral activo, asterisco). Nunca lima decorativa. Nunca itálica para acción.
4. **Numerales como arquitectura, en `--ink-18`.** Fantasmas, grandes, estructurales, nunca como bullets de lista.
5. **Adiós al kicker full-width con hairline.** Es el tic genérico que las tres comparten hoy. Reemplazado por: lomo rotado (Studio), label alineado a la derecha sin hairline (Contacto), banda meta (Footer).

## Restricciones a respetar (no negociables)

- Tokens de color, tipografía y spacing EXISTENTES — no inventar nuevos colores. El sistema V4 restringido (un color + tinta/crema) se mantiene.
- Hero y Portfolio NO se tocan.
- Formulario de Contacto: estructura, campos, honeypot, endpoint, estados — ÍNTEGROS.
- Accesibilidad: contraste AA (los pares actuales ya cumplen), touch targets ≥48px, focus-visible en todo interactivo, labels asociados.
- `prefers-reduced-motion`: fallback estático en TODO.
- Safe-area iOS en el footer (padding-bottom con `max()` + `env()`).
- Body scroll container en mobile (directiva global) — no romper el scroll del `body`.

## Anti-patrones específicos de este rediseño

- ❌ Resolver "rediseño" subiendo `font-size` y dejando la misma estructura apilada. Eso es exactamente lo que se rechazó.
- ❌ Centrar cualquier bloque de texto. Todo es asimétrico con ancla izquierda.
- ❌ Nombres/títulos a full-width. Siempre dejan vacío a la derecha.
- ❌ Kicker full-width con hairline arriba (el tic genérico).
- ❌ Lima como decoración. Lima solo acción/estado/sello.
- ❌ Cajas en los inputs. Inputs de línea.
- ❌ Más de un bloque sólido de color por sección (el CTA lima en Contacto es el único).
- ❌ Hover que cambia el tamaño/tracking del texto (genera reflow/ruido). El hover comunica con color y líneas, no con movimiento del texto.

## Brief para el dev (checklist de implementación)

Tras leer este documento, el dev debe poder responder:
- ¿Cuál es el gesto compositivo único de cada sección? → Studio: columna de medición/lomo. Contacto: statement gigante que invade el form. Footer: wordmark-horizonte con metadata satélite en Z.
- ¿Dónde va cada elemento y con qué ancho relativo? → Sí (62%, 70%, 80%, sangrías documentadas).
- ¿Qué usa PP Editorial New vs Geist? → Sí (display = nombres/títulos/statement/wordmark/tagline/whatChanges itálica; Geist = labels/body/mono/créditos).
- ¿Qué se mueve y cuándo? → Sí (revelado, pin con línea-guía que se llena, mask reveal, pulso del asterisco).
- ¿Qué se conserva intacto? → Sí (form, endpoints, estados, motion existente listado).

Si tras leer esto el dev no puede posicionar un elemento, falta detalle y hay que iterar — pero antes de iterar, **esto pasa por William.**

---

## Nota de proceso (obligatoria)

⚠️ Según la memoria del proyecto: **NUNCA implementar cambios de composición/layout sin que William los vea ANTES.** Este documento es una PROPUESTA de dirección, no una orden de implementación. El dev NO debe tocar código hasta que William apruebe explícitamente esta dirección. Si hay dos caminos válidos en algún punto, se le ofrecen ambos a William, no se decide por él.
