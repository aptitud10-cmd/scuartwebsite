# Design Research — Contacto y Case Studies para SCUART

**Fecha de investigación:** 2026-07-23
**Vertical:** Estudio de diseño web independiente (agencia B2B, bilingüe LATAM+USA)
**Tipo de sitio:** One-page ES/EN, Astro, estética editorial sobria
**Investigador:** investigador-tendencias

---

## FRENTE 1 — Contacto en estudios/agencias top 2026

### Metodología

Búsquedas realizadas + fetch directo de páginas de contacto reales:
- "Awwwards site of the day contact page design 2026 studio agency"
- "best contact page web design agency 2026 minimal form"
- "design studio agency website contact page WhatsApp Calendly integration 2026"
- "multi-step conversational contact form agency website example 2026"
- Fetch directo de: Dogstudio, Koto, Basic Agency, Locomotive (Montreal)
- Fuente curada: [Top 30 mejores sitios de agencias 2026 — elias.studio](https://www.elias.studio/en/blog/post/top-30-des-meilleurs-sites-internet-dagences-en-2026), que lista Pentagram, Koto, AKQA, Basic Agency, R/GA, Instrument, Locomotive, Cossette, Sid Lee, Monks, Ueno, Active Theory, Resn, Dogstudio, Upperquad, entre otras.

### Hallazgo central: el patrón dominante es EMAIL DIRECTO, no formulario

En las agencias top-tier fetcheadas (Dogstudio, Koto, Basic Agency), **ninguna usa un formulario de contacto tradicional**. Las tres resuelven el contacto con:

1. **Email directo con copy inteligente** — no un `mailto:` genérico, sino texto de marca alrededor del email.
2. **Segmentación por tipo de consulta** (new business / press / careers) en vez de un dropdown dentro de un form.
3. **Botón "copy email"** en vez de abrir el cliente de correo — reduce fricción, funciona igual en mobile.

Esto es consistente con el patrón "founder-led, boutique" — cuando la agencia es chica, el mensaje implícito es "vas a hablar con una persona real", no con un pipeline de CRM. Es MÁS cercano al perfil de SCUART (0 clientes, William es la cara) que el patrón de agencias grandes tipo HubSpot/SaaS con formularios de 8 campos.

### Referencias concretas

1. **Dogstudio** — [dogstudio.co/contact](https://dogstudio.co/contact)
   - Qué hace: sin formulario. Layout apilado con una lista humorística de 35+ frases tipo "If you want to make good shit, drop us a line" / "If you [condición], drop us a line" — variaciones que terminan en el mismo CTA. Debajo, email directo (`biz@dogstudio.be`) y 3 direcciones físicas (Chicago, Ámsterdam, París).
   - Por qué destaca: el copy ES el diseño. Convierte una página que podría ser aburrida en una pieza de personalidad de marca. Cero fricción — no hay campos que llenar.
   - Qué imitar: el tono de copy directo y con personalidad en vez de "Contáctanos" genérico. La lista repetitiva como recurso de ritmo/humor.
   - Qué NO imitar para SCUART: el humor específico de Dogstudio (irreverente, très-parisién) no calza con el tono editorial sobrio de SCUART — habría que traducir el RECURSO (copy con personalidad) al tono propio (más calmado, más "estudio serio que hace las cosas bien").

2. **Koto** — [koto.com/contact](https://koto.com/contact) (referenciado, no confirmado 100% el slug exacto vía fetch directo — verificar antes de citar en el sitio)
   - Qué hace: fullscreen por ubicación (7 oficinas), cada una con email + teléfono + dirección + mapa. CTA: **"Interested in working with us?"** con botón "Copy email". Contactos de ejecutivos individuales (CEO, CCO, etc.) + email de prensa separado.
   - Por qué destaca: transparencia radical — vas directo a la persona, no a un buzón anónimo.
   - Qué imitar: el patrón "copy email" (un click, sin abrir cliente de correo) es un micro-detalle de UX ausente en la mayoría de sitios chicos.
   - Qué NO imitar: SCUART no tiene 7 oficinas — la lógica de "elegí tu sede" no aplica. Sí aplica la idea de "hablás directo con William", que es más fuerte todavía en un estudio de una persona.

3. **Basic Agency** — [basicagency.com/contact](https://basicagency.com/contact)
   - Qué hace: sin formulario. Tres emails categorizados (`biz@`, `press@`, `recruitment@` con CTA "Apply Now" hacia careers). Copy: **"We collaborate with ambitious brands and people. Let's build."** Layout: lista vertical con bullets + imagen destacada.
   - Por qué destaca: la categorización por intención (negocio / prensa / talento) resuelve el problema de "qué campo pongo" sin necesitar un dropdown — el visitante elige el email correcto y ya llega segmentado.
   - Qué imitar: el statement corto antes del contacto ("Let's build") como frase-puente entre el portfolio y la acción de contactar.
   - Qué NO imitar: SCUART no necesita 3 categorías — con "trabajo nuevo" alcanza; sumar `press@` sería prematuro con 0 clientes propios.

4. **Locomotive (Montreal)** — [locomotive.ca/en/agency](https://locomotive.ca/en/agency) — la agencia que SCUART usa de referencia de portfolio
   - Qué hace: NO tiene formulario embebido en la página principal. En el nav hay un link **"Let's talk"** que lleva a `/en/contact`. En el footer: dirección física clickeable a Google Maps, teléfono clickeable (`tel:`), email clickeable (`mailto:`). Además hay un modal separado, más chico, solo para newsletter ("Give an email, get the newsletter").
   - Por qué destaca: separa completamente "contactame para un proyecto" (CTA fuerte en nav) de "suscribime al newsletter" (modal secundario, bajo compromiso) — no mezcla ambas intenciones en el mismo formulario.
   - Qué imitar: el CTA corto y personal en el nav ("Let's talk" en vez de "Contact") como entry point, y la separación entre contacto-proyecto vs. contacto-newsletter.
   - Qué NO imitar: SCUART no tiene newsletter todavía — no hace falta el segundo modal.

5. **Upperquad** — [upperquad.com](https://www.upperquad.com/) (parte del top 30 de elias.studio)
   - Referenciado como ejemplo del "grid fluido" de portfolio con acceso directo a work/[slug], relevante también para Frente 2.
   - No se pudo verificar el detalle de su página de contacto en este research (no fetcheada); se documenta como pendiente de verificación si se decide profundizar.

### Contraste: cuándo SÍ conviene un formulario (para contexto, no recomendado para SCUART)

La búsqueda de forms multi-step arrojó el ejemplo de **Zorka Agency**, que usa un flujo conversacional de 5 pasos (una pregunta a la vez, con indicador visual de progreso lateral), citado en fuentes de conversión como generador de leads más calificados que un form largo de una sola pantalla. Esto es más apropiado para agencias con volumen de leads entrantes que necesitan pre-calificar — **no es el caso de SCUART hoy** (0 clientes, la prioridad es bajar la fricción al mínimo, no filtrar).

### Estados del formulario (si SCUART decide sumar un form corto además del WhatsApp/email)

No se encontró en las fetch directas ningún ejemplo premium con formulario visible con estados idle/loading/success/error explícitos — el patrón dominante top-tier evita el formulario por completo. Best practices generales (Muzli, DesignRush, Colorlib) coinciden en:
- 3-5 campos máximo (nombre, email, mensaje — a veces +teléfono o +presupuesto).
- Success state: confirmación in-page (no solo un alert), con expectativa clara de tiempo de respuesta.
- Placeholder útil, no genérico ("Contame sobre tu proyecto" en vez de "Mensaje").

---

## FRENTE 2 — Páginas de case study premium 2026

### Metodología

Búsquedas realizadas + fetch directo:
- "best case study pages design agency portfolio 2026 process results"
- "Instrument agency case study page design 'the challenge' client work"
- "independent freelance designer studio portfolio case study 'no metrics' qualitative branding project"
- Fetch directo de: Upperquad (listado `/work` + case study individual `/work/gemini`), Antara Studio (vía Awwwards case study)

### Estructura estándar identificada (consistente entre fuentes)

La estructura que se repite en las fuentes 2026 (UXPilot, Toptal, Format, casos reales fetcheados):

1. **Hero del caso** — imagen/mockup principal + nombre de cliente + una frase de posicionamiento (no un título genérico "Proyecto X").
2. **Contexto/challenge** — quién es el cliente, qué problema tenía, ANTES de mostrar la solución (Instrument es citado explícitamente por hacer esto: "each case study leads with the client challenge before revealing the creative solution").
3. **Proceso/decisiones de diseño** — paleta, tipografía, sistema — mostrado como documentación visual (mockups etiquetados), no como texto largo.
4. **Deliverables** — mockups en contexto real (dispositivos, aplicaciones físicas si aplica), full-bleed.
5. **Resultados** — cuando hay datos, se muestran (ej. Upperquad/Gemini con "750M monthly active users"); cuando NO hay datos duros, se reemplaza por: créditos del equipo, reconocimientos de prensa/premios, o cita del cliente/founder.
6. **Next project** — navegación al siguiente caso, casi universal.

### Referencias concretas

1. **Upperquad — case study Gemini** — [upperquad.com/work/gemini](https://www.upperquad.com/work/gemini)
   - Estructura confirmada por fetch directo: Hero → contexto de marca ("Minimal approach, massive reach") → elementos de diseño (paleta/tipografía/iconografía mostrados como documentación) → introducción del proyecto → sección "Since launch" con métricas → créditos de equipos colaboradores → menciones de prensa → next project.
   - Qué imitar: la sección de "elementos de diseño" como bloque propio (mostrar el sistema, no solo el resultado final) — para SCUART esto es oro porque puede mostrar PROCESO sin necesitar métricas de negocio del cliente.
   - Qué NO imitar: la sección "Since launch" con métricas masivas (750M usuarios) no aplica — SCUART no tiene ese tipo de dato ni debe inventarlo.

2. **Antara Studio** — case study vía Awwwards — [awwwards.com/antara-studio-case-study.html](https://www.awwwards.com/antara-studio-case-study.html)
   - Estructura confirmada: introducción conceptual → diseño desktop → diseño mobile → conclusiones clave → tecnologías utilizadas → info de la empresa. Sin next-project visible (caso aislado).
   - **Este es el caso más relevante para SCUART como referencia de "cómo generar confianza sin métricas":** cero KPIs, cero conversiones, cero tráfico. La confianza se construye 100% narrativa: título de autoridad del founder ("Founder and Creative Director"), mención de colaboradores puntuales con nombre propio ("amazing creative developer Mario Maselli"), y una frase-tesis que resume la filosofía del estudio ("Your website is your greatest selling tool, so invest your time and money on it").
   - Qué imitar directamente: (a) nombrar colaboradores/roles reales en vez de anonimizar el proceso, (b) cerrar con una frase de tesis/filosofía en vez de un dato, (c) mostrar el sistema de diseño (paleta, tipografía, composición) como contenido propio, no solo como "extra".
   - Qué NO imitar: es un caso único sin navegación entre proyectos — para SCUART con 4-5 casos SÍ conviene next/prev, porque ayuda a que el visitante no se vaya después del primer caso.

3. **Instrument** — [instrument.com](https://instrument.com) (citado en elias.studio, no fetcheado en detalle esta vez — pendiente de verificación directa si se quiere profundizar)
   - Patrón citado explícitamente en la fuente curada: "Instrument's site nails the balance between showing creative work and demonstrating business value. Each case study leads with the client challenge before revealing the creative solution."
   - Qué imitar (conceptualmente, a verificar con fetch directo antes de copiar literal): el orden challenge-primero es el más aplicable a SCUART — cada uno de los 4-5 casos (Jamón Casero, Menius, Healthy Choice, Arriba Gold, Etnia Braids) puede abrir con 1-2 líneas de "qué necesitaba este negocio" antes de mostrar el sitio terminado.

4. **Best practices generales confirmadas por múltiples fuentes 2026** (UXPilot, Toptal, Format, DesignRush):
   - Longitud recomendada 800-1500 palabras con fuerte ritmo visual — ni galería sin texto, ni ensayo largo.
   - Mostrar 3-6 proyectos fuertes, no un archivo grande — **SCUART con 4-5 casos está en el rango ideal**, no necesita "llenar" con más.
   - Cuando no hay datos, reemplazar con: feedback cualitativo del cliente, aprobación de stakeholders, "qué cambió después del lanzamiento" en términos descriptivos (no numéricos) — ej. "el cliente pasó de recibir pedidos por WhatsApp desordenados a un catálogo navegable" es una forma honesta de mostrar impacto sin inventar un %.
   - Mobile-first casi obligatorio: la mayoría de quien revisa portfolios de estudios lo hace desde el celular — scroll narrativo debe funcionar perfecto en mobile antes que en desktop.

### Cómo generar confianza en case studies de un estudio que recién arranca (síntesis específica para SCUART)

Con 0 clientes propios y sin métricas de negocio verificables, la evidencia de este research apunta a 4 recursos legítimos (ninguno es "inflar números"):

1. **Nombrar el proceso con especificidad** — mostrar decisiones concretas de tipografía/color/layout con el "por qué", como hace Antara Studio. Especificidad = credibilidad, sin necesitar cifras.
2. **Mostrar el antes/después de forma honesta** — si el cliente (ej. Jamón Casero) no tenía sitio o tenía uno desactualizado, ESE es el caso de negocio, no un dato de conversión. "De catálogo por WhatsApp a sitio propio" es una transformación real y verificable.
3. **Cita textual del cliente** (si SCUART puede conseguirla) — más creíble que un número inventado, y ningún estudio grande fetcheado (Upperquad, Antara) se priva de usarla como refuerzo.
4. **Créditos y rol explícito** — decir exactamente qué hizo SCUART (diseño, desarrollo, contenido) da más confianza que una afirmación vaga de "transformamos la marca".

---

## Anti-patrones a evitar (ambos frentes)

- **Formulario largo genérico (8+ campos con "presupuesto estimado", "cómo nos conociste", etc.)** — ningún estudio top-tier fetcheado lo usa; es señal de agencia mediana/corporativa, no boutique.
- **Botón "Enviar" sin estado de carga/confirmación visual** — si SCUART suma un form corto, necesita success state real, no solo un alert del navegador.
- **Case study con métricas infladas o vagas ("aumentamos las ventas")** sin dato ni fuente — peor que no poner nada; mejor usar los recursos cualitativos de la sección anterior.
- **Case study sin next-project** — con solo 4-5 casos, cada uno debe empujar al visitante al siguiente; cortar el flujo ahí es perder la única audiencia que ya está convencida de mirar el portfolio.
- **Multi-step conversacional tipo Zorka** — sobre-ingeniería para el volumen de leads actual de SCUART (cero clientes propios); prioridad es bajar fricción, no calificar leads.
- **Mezclar contacto-proyecto con newsletter en el mismo formulario** — Locomotive los separa explícitamente; SCUART no necesita newsletter todavía, así que ni siquiera se plantea el problema, pero si en el futuro se suma, no debe ir en el mismo form.

---

## Recomendaciones accionables para SCUART

### Contacto
- Patrón recomendado: **email directo + WhatsApp, sin formulario tradicional**, siguiendo el patrón de Dogstudio/Koto/Basic Agency — es el más coherente con "estudio de una persona, hablás con William directamente" y el más rápido de implementar bien (sin necesitar Resend para un MVP, aunque Resend puede sumarse después si se decide agregar un form corto opcional).
- Si se decide sumar un form corto (para quienes prefieren no escribir por WhatsApp): 3-4 campos máximo (nombre, email, mensaje, +opcional "qué tipo de proyecto"), con estado de éxito claro in-page.
- Copy: statement corto de una línea antes del contacto (estilo Basic Agency "Let's build" / Locomotive "Let's talk"), traducido al tono editorial-sobrio de SCUART — no humor tipo Dogstudio, sí personalidad y calidez.
- Botón "copiar email" con un click (patrón Koto) — mejora UX mobile sin costo de desarrollo.
- WhatsApp (+1 347 848 9720) como canal primario visible, no escondido — coherente con el research: los estudios chicos priorizan contacto directo persona-a-persona por sobre formularios/pipelines.

### Case studies
- Estructura por caso: Hero (mockup + nombre del negocio + 1 frase de posicionamiento) → Contexto/challenge (qué necesitaba el negocio, en términos reales y verificables) → Proceso (paleta/tipografía/decisiones mostradas visualmente, con el "por qué") → Deliverables (mockups full-bleed en contexto) → Cierre honesto (transformación cualitativa + cita del cliente si existe, sin inventar métricas) → Next project.
- Cada uno de los 4-5 casos (Jamón Casero, Menius, Healthy Choice, Arriba Gold, Etnia Braids) debería abrir con el challenge ANTES de mostrar el resultado — patrón Instrument.
- Con 4-5 casos, SCUART ya está en el rango ideal (3-6) que citan las fuentes 2026 — no hace falta sumar más casos "para llenar", conviene profundizar cada uno.
- Navegación next/prev entre los 4-5 casos es no negociable dado el volumen bajo — cada caso debe empujar al siguiente.

---

## Notas

- Dos fetches directos fallaron por bloqueo de servidor (Pentagram `/contact` con ECONNRESET, Ueno `/contact` con 403 Forbidden) — no se pudo verificar el detalle exacto de esos dos formularios/páginas. Se documenta como limitación del research, no como ausencia de patrón.
- El slug exacto de `koto.com/contact` no se verificó vía fetch directo (se armó a partir de resultados de búsqueda) — si se va a citar textualmente su copy en el sitio de SCUART, conviene re-verificar antes de publicar.
- La fuente [elias.studio top 30 agencias 2026](https://www.elias.studio/en/blog/post/top-30-des-meilleurs-sites-internet-dagences-en-2026) es un artículo de blog curado (no un ranking oficial de Awwwards), pero cruza bien con las agencias que SÍ aparecen mencionadas en resultados de Awwwards/búsquedas separadas (Pentagram, Instrument, Locomotive, Ueno) — se usa como fuente de descubrimiento, no como autoridad única.
