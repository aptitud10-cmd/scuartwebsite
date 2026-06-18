# Plan de re-skin a dirección A/C — sección por sección (PARA APROBAR)
> Nada se codea sin OK de William, sección por sección.

Dirección elegida (ya decidida, no se re-discute): **papel cálido dominante + terracota como acento puntual (<5–8% de superficie), nunca como fondo a sangre.** Tipografía fija (Fraunces + Hanken). Grano material obligatorio en todos los fondos. Referentes: Locomotive, 375.studio, Studio Freight — todos fondo claro, terracota solo como brasa.

Este documento sintetiza dos planes expertos (jurado Awwwards + diseñador senior). **Coinciden en el 100% de las decisiones de fondo.** La única diferencia es de matiz en un token (Capabilities: `--papel` vs `--hueso`), que se presenta abajo para que elijas.

---

## El ritmo del scroll (la decisión clave)

**Los dos expertos coinciden y es la señal más fuerte del plan.** El error a evitar es leer "papel + terracota acento" como "7 secciones de hueso seguidas" — eso produce exactamente la monotonía que temés. La salida NO es alternar colores arbitrariamente (eso fue lo que mató la build anterior), sino el patrón Locomotive: **claro dominante con DOS anclas oscuras deliberadas y UN momento de imagen.** El scroll dibuja un arco simétrico de punta a punta:

**HERO claro** (apertura, papel) → **MANIFIESTO oscuro barro** (el único respiro oscuro de la mitad superior = clímax de marca) → **PORTFOLIO claro** con el featured Jamón como isla oscura full-bleed (retorno a la luz + momento de imagen, no de color) → **CAPABILITIES claro** (meseta informativa) → **[METHOD + CONTACTO + FOOTER] todos en el mismo barro-oscuro** = un solo bloque oscuro de cierre cinematográfico.

Lectura: **claro — OSCURO — claro(+imagen) — claro — OSCURO·OSCURO·OSCURO.** La terracota es el hilo que cose todo: aparece como acento en TODAS las secciones (franja, itálica, hover, numeral, foco, CTA, sello) sin pasar nunca de ~5%, de modo que el ojo recuerda "terracota" aunque casi nunca la vea como masa. La no-monotonía del tramo claro se sostiene con tres palancas que ya existen en el sistema: (1) variación de densidad tipográfica (hero aireado vs capabilities denso), (2) el featured full-bleed como momento de imagen, (3) el grano material que evita que cualquier claro se lea como div plano. **No se introduce ningún color de fondo nuevo.**

---

## Tabla sección por sección

| Sección | Fondo hoy | Fondo propuesto | Rol en el ritmo | Terracota-acento entra en | Coincidencia expertos |
|---|---|---|---|---|---|
| **Hero** | `--hueso` #F0E9DC ✓ | `--hueso` #F0E9DC (sin cambio) | Apertura clara. Fija la "temperatura" de papel. Densidad media-baja, mucho aire. | Franja-costura 1px col 9; palabra itálica de acento en Fraunces 400; hover del CTA. Patrón canónico a imitar. | **TOTAL** — es la sección de referencia, sin cambios |
| **Manifiesto** | `--terracota` #A4471F a sangre ⚠️ (line 71) | **`--barro-oscuro` #241710** | Clímax / único respiro oscuro de la mitad superior. El ojo descansa del papel; la tipografía gana drama sobre oscuro. | Itálica de acento en **`--ambar`** #D99A4E (ya pasa ~7:1 sobre barro, ya es el valor actual en line 185); número de índice/hairline en terracota-arcilla. | **TOTAL** — ambos lo mandan a barro-oscuro, NO a hueso |
| **Portfolio** | `--hueso` ✓ | `--hueso` (grilla) + featured Jamón isla `--barro-oscuro` full-bleed | Retorno a la luz + momento de imagen justificado (es foto, no div de color). | Nombres a terracota en hover + subrayado scaleX; índices mono en terracota. Healthy Choice solo sobre hueso (no sumar terracota cerca). | **TOTAL** — solo verificar que manifiesto y featured no queden pegados como un bloque oscuro continuo |
| **Capabilities** | `--terracota` a sangre ⚠️ (line 85) | **`--hueso`** ó **`--papel`** — *única disyuntiva, ver abajo* | Meseta informativa clara. Densidad alta de texto (4–6 servicios). Lectura de "ficha de taller". | Numerales 01–04 (o solo el activo/hover) en **`--terracota`** — reemplaza al ámbar actual (line 139), que sobre claro FALLA AA. Divisores hairline `--borde`. | **Fondo: TOTAL** (revertir terracota a claro). **Matiz: difieren** hueso vs papel |
| **Method** | `--barro-elevado` #2E1F15 (line 139) | **`--barro-oscuro` #241710** | Inicio del bloque oscuro de cierre. Numerales 001–004 pineados + texto que scrollea. | Numeral activo en `--terracota` (refuerza marca) o ámbar; hairlines `--borde-oscuro`; filete del paso activo. | **TOTAL** — bajar a barro-oscuro para unificar el cierre; `--barro-elevado` se reserva a cards internas |
| **Contacto** | `--barro-oscuro` #241710 ✓ | `--barro-oscuro` (sin cambio) | Cuerpo del bloque oscuro + conversión. Continúa sin corte desde Method. | Foco de inputs en terracota; CTA primario fondo terracota / texto hueso; hover `--terracota-prof`. Uso "producto" ejemplar. | **TOTAL** — es el modelo de cómo usar terracota como acto, no muro |
| **Footer** | `--barro-oscuro` #241710 ✓ | `--barro-oscuro` (sin cambio) | Cierre / firma. Silencio final, reverso simétrico del hero. | Sello SCUART en terracota; el **`+`** del wordmark en **`--ambar`** (único lugar donde el ámbar como "brillo escaso" tiene su máxima justificación). | **TOTAL** — ancla que define que el ámbar vive SOLO sobre oscuro |

---

## El manifiesto (caso especial)

Es el cambio más grande y el más riesgoso: hoy es **terracota a sangre (#A4471F, line 71)** y es la sección de marca del sitio. La tentación natural al "quitar el terracota" es pasarlo a hueso como las demás — **y eso sería un error que mata el arco.** Si el manifiesto va a hueso, quedan Hero + Manifiesto + Portfolio + Capabilities = cuatro pantallas casi del mismo crema seguidas, y el scroll se aplana exactamente como temés.

**Ambos expertos coinciden, sin fisuras: el manifiesto va a `--barro-oscuro` #241710, no a claro.** La lógica: la sección de marca no pierde peso, lo *cambia de naturaleza*. Hoy el peso lo da la saturación (muro terracota); mañana lo da el **contraste tonal** — es el único corte claro→oscuro de la mitad superior, el "momento oscuro único" que Locomotive permite una vez. La marca baja la voz para decir lo importante: el ojo viene del hero claro y cae en una sala oscura cálida. Es, sin discusión, el ADN del asset (Fraunces hueso enorme sobre barro).

Clave de ejecución: el texto del statement ya está en `--hueso`, así que pasar de terracota a barro **preserva el contraste (sube de ~5:1 a ~12:1 AAA)** — es el cambio de mayor superficie pero el de **menor riesgo de contraste**, porque oscuro→oscuro conserva los acentos claros. El acento ítalica en `--ambar` (line 185) **sobrevive y mejora** (~7:1 sobre barro). Y la terracota que perdimos como muro se recupera como brasa: número de índice / hairline en terracota-arcilla (#C36A4A, que contrasta mejor que #A4471F sobre oscuro). Resultado: el manifiesto deja de ser muro y la terracota arde como acento sobre negro.

---

## Tokens a tocar

**Regla de oro: este re-skin NO toca los valores de los tokens.** Se ejecuta moviendo `background-color` de 2 secciones + 1 unificación, y reescribiendo comentarios de rol. No se agrega ni elimina ningún token de paleta.

**Cambiar (comentarios de rol en `tokens.css` — hoy "mienten" respecto a A/C):**
- **`--hueso` (line 27):** quitar "capabilities, method" de la lista de fondos. Queda: "Hero, portfolio" (+ capabilities si se elige hueso; method ya NO es claro).
- **`--barro-oscuro` (line 34):** ya dice "Manifiesto, contacto, footer" — ahora se cumple de verdad; sumar "Method".
- **`--barro-elevado` (line 35):** restringir a "cards/bloques elevados sobre barro-oscuro" (su rol original). Deja de ser fondo de sección.
- **`--terracota` (line 38):** quitar "Fondo manifiesto". Rol nuevo: "CTA primario, acento, foco, numeral, sello, franja" (acento puro). **Este es el cambio conceptual clave para que el dev no vuelva a pintar fondos terracota.**
- **Contrato §1 (line 17):** ya prohíbe ámbar sobre hueso/papel — hay que **enforzarlo**: al migrar Capabilities, el ámbar interno (line 139) debe morir.

**Opcional (NO requerido para ejecutar A/C):**
- **`--terracota-arcilla` #C36A4A:** agregar como token explícito de "acento de marca sobre fondos oscuros". Da una segunda voz cálida sobre barro sin recurrir siempre al ámbar. El jurado lo recomienda; el senior lo deja como opcional. *Decisión de William.*
- **Valor de `--hueso`:** NO tocar. Ambos coinciden en no acercarse a los hex del brief (#F0EEE9/#F2EFE9): obligaría a re-verificar AA de todo el sistema. #F0E9DC ya es papel cálido válido y verificado.

---

## Riesgo principal + recomendación honesta

**El riesgo principal NO es el fondo: es el acento ámbar huérfano.** Hoy Manifiesto (line 185) y Capabilities (line 139) usan `--ambar` como itálica de acento *sobre terracota*, donde pasa contraste. En el momento en que esas secciones cambian de fondo, el ámbar queda mal:
- En **Capabilities** (que va a claro), el ámbar da **2.0:1 → FALLA AA**: acento ilegible y, peor, "lavado/sucio" — justo el adjetivo que mató builds anteriores.
- Si alguien hace el re-skin como un simple find-replace de `background-color` y se olvida del color de los `<em>`/numerales, el sitio queda con **acentos invisibles sobre papel.**

**Mitigación obligatoria, en este orden:**
1. En **Capabilities**, ANTES de cambiar el fondo, migrar TODO acento ámbar (line 139) a `--terracota` (4.6:1 sobre hueso, pasa AA).
2. En **Manifiesto**, mandarlo a barro-oscuro (no a claro) hace que el ámbar **sobreviva** — razón adicional de seguridad de contraste para NO mandarlo a papel.
3. **Verificación dura post-cambio:** capturar las 7 secciones en 390/768/1280 (ya existe el patrón en `redesign/shots/`) y revisar que ningún ámbar quede sobre claro.

*Riesgo secundario:* el bloque oscuro de cierre (Method+Contacto+Footer, 3 seguidas) puede sentirse largo. Mitigar con hairlines `--borde-oscuro` entre secciones, variación de densidad (Method denso / Footer aireado) y el destello ámbar del `+` final como "salida de luz". NO reintroducir cambios de fondo entre ellas.

**Único desacuerdo entre expertos — Capabilities: `--hueso` vs `--papel`.**
- **Jurado Awwwards →`--papel` #F8F3E9** (un punto más claro que el hero): crea una micro-elevación tonal ("estoy en otra hoja del mismo cuaderno") que rompe la monotonía del tramo claro sin meter otro color.
- **Senior →`--hueso` #F0E9DC** (mismo claro que hero/portfolio): pertenece a la familia clara, simplicidad de sistema, menos riesgo.
- **Mi recomendación: `--papel`.** El costo es nulo (el token ya existe y está verificado) y el beneficio es real — es la palanca anti-monotonía más barata que tenemos en el tramo claro largo. Si en vivo no se nota la diferencia entre los dos cremas, se revierte a hueso en 1 línea. **Decisión final: William.**
