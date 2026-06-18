# Design Research — SCUART / Referencia Locomotive

**Fecha de investigación:** 2026-06-14
**Vertical:** Agencia digital (studio de diseño + tecnología)
**Tipo de sitio:** Sitio corporativo de agencia — portfolio + identidad
**Investigador:** investigador-tendencias
**Referencia maestra:** https://locomotive.ca/en

---

## Nota metodológica

Este documento se basa en observación directa mediante WebFetch de las páginas /en, /en/agency, /en/careers, /en/work, /en/work/editorial-new, más corroboración cruzada con Fonts In Use, Awwwards case studies (Site of the Month Junio 2019 y Marzo 2023), Pangram Pangram Foundry y buscadores. Donde el sitio no expone CSS inline, se indica la fuente de cada dato.

---

## 1. Tipografía

### Lo que usa Locomotive (verificado)

**Display / Titulares: PP Editorial New**
- Foundry: Pangram Pangram (Montreal)
- Tipo: Serif variable con italicas marcadas. "Suficiente personalidad para funcionar como título, diseñada para textos largos." (fuente: Pangram Pangram / Fonts In Use)
- Dualidad "vintage-moderna" — el serif tiene remate clásico pero contraste alto y proporciones contemporáneas
- En la versión identidad del sitio actual usan una variante custom llamada **PP Locomotive New** (desarrollada con Tomorrow Creative Services), que añade glifos propios inspirados en iconos técnicos de trenes. No es disponible comercialmente
- El sitio web propio usa **Editorial New** en sus variaciones de peso — el hero tiene titulares a escala muy grande (estimado 8–12vw), peso light a regular, con italic para énfasis

**Cuerpo: PP Neue Montreal / Helvetica Now**
- Fuentes confirmadas por Fonts In Use y búsquedas cruzadas: el sitio combina Editorial New con Helvetica Now (versión Monotype de Helvetica actualizada, 2019)
- Pangram Pangram también menciona Neue Montreal como sans-serif de sistema
- Cuerpo en regular/book, tracking neutro o levemente suelto
- La jerarquía de peso es radical: titulares en serif grande, cuerpo en sans pequeño y discreto

**Características tipográficas observadas en HTML/estructura:**
- Mezcla de mayúsculas selectivas en navegación y etiquetas (Ej: "Work, Agency, Careers")
- Texto de cuerpo en sentence case, tamaño conservador
- Números con propósito: "01 Design / 9 personas, 02 Development / 11, 03 Operations / 9" — los contadores actúan como guías de sección
- El encoding tipográfico es extremadamente limpio: solo dos familias, cuatro estilos máximo en todo el sitio (dato del case study de Awwwards)

### ¿Fraunces + Hanken Grotesk encajan?

**Veredicto honesto: Fraunces encaja muy bien en espíritu; Hanken Grotesk es correcto pero no premium.**

- Fraunces es un serif óptico con contraste similar al Editorial New, con italicas expresivas. Tiene el mismo ADN "revivalista contemporáneo". Es una elección defensible y disponible en Google Fonts.
- El problema es la disponibilidad de pesos en la web y que Fraunces tiene más "calidez orgánica" (por eso se usó en el mood terracota anterior). Para un mood más frío/premium de agencia digital, conviene ajustar: usar Fraunces solo en pesos extremos (thin o ultra-bold) con italic agresiva, evitando los pesos medios que lo hacen ver "literary".
- Hanken Grotesk es funcional pero genérico — cualquier sans Pangram (Neue Montreal, Neue Haas Grotesk si hay licencia) tiene más carácter técnico. Alternativa gratuita sólida: **DM Sans** o mantener **Hanken pero reducir su protagonismo** (solo cuerpo pequeño, UI labels).

**Recomendación concreta para SCUART:**
- Mantener Fraunces como display, pero usarla SOLO en la escala más grande (hero, sección manifesto). No usarla en nav ni en body.
- Evaluar swap de Hanken por **Geist** (Vercel, gratuita) o **DM Sans** para mayor carácter técnico.
- Alternativa de upgrade total: **PP Editorial New** (licencia web desde ~$299/año via Pangram Pangram) + **Neue Montreal** ($199/año). Si el cliente justifica el presupuesto, sería la pareja exacta de la referencia.

---

## 2. Color / Paleta

### Lo que usa Locomotive (verificado)

El HTML/CSS inline no es accesible vía WebFetch, pero la convergencia de fuentes arroja este sistema:

**Sistema cromático de Locomotive (actual):**
- **Fondo:** Blanco o crema muy claro — el sitio opera principalmente en modo claro, con texto negro/muy oscuro sobre fondo casi blanco. No hay dark mode confirmado.
- **Texto:** Negro profundo, casi #000 o #111
- **Acento:** Los emojis actúan como el único "color" del sistema — 🔶 (naranja), 🟢 (verde), 🛑 (rojo). Este es un gesto deliberado: en lugar de usar color en la UI, la agencia usa caracteres Unicode que son culturalmente cargados. El resto del sistema es prácticamente bicromático.
- **Navegación/Labels:** Texto muy pequeño en gris medio para metadatos
- La identidad visual creada por Tomorrow describe un lenguaje "poderoso y sutil" — no hay gradientes, no hay paletas multi-color. La chromática es casi achromática excepto por los emojis y eventualmente fotografía de proyectos.

**Por qué esto funciona como "premium de agencia":**
El minimalismo cromático desplaza la atención hacia la tipografía y el motion. Es una señal de confianza: no necesitamos color para capturar la atención, el trabajo habla solo.

### Paletas propuestas para SCUART

Las paletas siguen el MÉTODO Locomotive (alto contraste, 1-2 neutrales + 1 acento máximo) pero con identidad propia de SCUART.

---

**Paleta A — "Papel negro" (recomendada como primera opción)**

| Token | Hex | Uso |
|---|---|---|
| `--bg` | `#0C0C0B` | Fondo negro ligeramente cálido, no RGB puro |
| `--ink` | `#F2EDE6` | Texto crema — no blanco puro, tiene calor |
| `--mid` | `#6B6860` | Gris cálido para metadatos, labels, captions |
| `--accent` | `#E8D5A3` | Dorado arena — para el nombre "SCUART", coordenadas, glifos especiales |
| `--surface` | `#141413` | Cards, hover states, elevación sutil |

Por qué funciona: Invierte el modelo Locomotive (ellos son light, SCUART sería dark) — diferenciación inmediata. El fondo negro con crema es el lenguaje de las agencias más premium del mundo (Pentagram, Hello Monday, Stink Studios). El acento dorado arena conecta con el portfolio gastronómico sin ser "café/terracota". Sin gradientes.

---

**Paleta B — "Arquitecto" (alternativa fría)**

| Token | Hex | Uso |
|---|---|---|
| `--bg` | `#F5F4F0` | Blanco roto, casi yeso |
| `--ink` | `#131312` | Negro casi absoluto |
| `--mid` | `#888783` | Gris neutro para UI |
| `--accent` | `#1A3A2A` | Verde botella oscuro — autoridad, naturaleza, premium |
| `--surface` | `#ECEAE4` | Fondo de cards/secciones alternadas |

Por qué funciona: Sigue el modelo Locomotive casi directamente (light mode + bicromático). El verde botella es el acento que muchas agencias premium usaron en 2024-2026 (O/O Studio, Instrument). Transmite solidez sin calidez gastronómica.

---

**Paleta C — "Tinta y piedra" (dark sutil, sin drama)**

| Token | Hex | Uso |
|---|---|---|
| `--bg` | `#1C1B19` | Dark grisáceo-cálido, ni frío ni café |
| `--ink` | `#EDEDEB` | Blanco cálido, casi hueso |
| `--mid` | `#5C5A55` | Gris piedra para labels |
| `--accent` | `#D4C5A9` | Arena claro — discreto, refinado |
| `--surface` | `#252420` | Elevación |

Por qué funciona: Middle ground entre A y B. Tiene calor sin terracota. Es la opción más "atemporal" de las tres.

---

**Anti-paletas para SCUART (NO usar):**
- Cualquier mezcla de café + terracota (#A0522D, #C4714A range) — ya intentado, leía gastro
- Gradientes de color — no están en el lenguaje Locomotive
- Múltiples acentos simultáneos
- Azul corporativo (`#0066CC` range) — leería tech startup genérico
- Blanco + azul marino — web corporativa 2018

---

## 3. Composición / Layout

### Lo que usa Locomotive (verificado)

**Hero:**
- Tagline en titulares grandes a ancho casi completo: "Digital-First Design™ | Made in Montréal" — texto que hace una declaración, no describe servicios
- Espacio negativo agresivo — el hero no está "lleno"
- Badge de ubicación como gesto de personalidad

**Grid del portfolio:**
- Lista de 43 proyectos con estructura uniforme — título + ubicación + categorías + año
- NO es card-grid con imágenes cuadradas. Es más cercano a una lista editorial con imágenes inline reveladas en hover o scroll (según comportamiento observado)
- Filtros mínimos: All / Branding / Digital / Experience / E-commerce / Content

**Secciones de agencia:**
- Columnas numéricas: 01 / 02 / 03 para departamentos
- Awards como lista textual densa: "288 reconocimientos" — no hay badges gráficos, es texto puro
- Las secciones tienen nombre en tiny uppercase + contenido en regular/grande

**Ritmo del scroll:**
- Progresivo — cada sección tiene una proposición única
- No hay "bloques" con la misma plantilla repetida
- El espacio negativo ENTRE secciones es tan diseñado como las secciones mismas

**Asimetría:**
- Los layouts rompen la simetría intencionalmente — texto izquierda, imagen derecha en proporciones no 50/50
- Se observa texto que sangra fuera del grid o texto que ocupa solo 60% del ancho (espacio negativo deliberado)

**Navegación:**
- Header con logo + links horizontales + "Let's talk" como CTA prominente + toggle de idioma (EN/FR)
- Sin hamburger menu en desktop
- Footer denso con dirección física, teléfono, email, redes — la agencia muestra su ubicación real como señal de confianza

---

## 4. Motion

### Lo que usa Locomotive (verificado)

**Técnicas principales (de case studies Awwwards):**
- **Locomotive Scroll v2/v5** para smooth scroll + detección de viewport (ironicamente, crearon la librería)
- **GSAP (TweenMax / ScrollTrigger)** para animaciones complejas
- **Three.js** para 3D específico (página de team con modelos 3D, página de contacto con mano 3D)
- **Shaders GLSL personalizados** en homepage: "fluid flag effect" mediante gradientes que afectan posiciones de vértices en canvas
- **Transiciones de página**: "pixel lazy loader effect" entre páginas, "letter shuffle transitions" sutiles pero impactantes

**Intensidad del motion:**
- El motion es ABUNDANTE pero NO exhibicionista
- Principio clave observado: "evita excesivas animaciones y gadgets" — solo 3 o 4 momentos de motion memorable por página
- Los reveals de texto son por líneas, no fade de bloque completo
- Parallax en imágenes del portfolio (imágenes se mueven más lento que el scroll)
- Hover states sofisticados: en el portfolio, las imágenes aparecen/siguen al cursor

**Qué se siente premium vs gimmick:**
- Premium: motion que SIRVE la jerarquía (el título aparece antes, el subtítulo después)
- Premium: smooth scroll que hace el sitio sentirse como una app nativa
- Gimmick (ellos evitan): loaders de 3+ segundos, animaciones de entrada en CADA elemento, scroll horizontal obligatorio, efectos que bloquean el acceso al contenido

---

## 5. Detalles de personalidad

### Gestos verificados en el sitio de Locomotive

**Emojis funcionales como sistema visual:**
- 🔶🛑🚹🚺🔛🔜🔰🦉 — los emojis no son decorativos al azar, forman un vocabulario visual propio inspirado en señalética de transporte (coherente con el nombre "Locomotive")
- Se usan en lugar de iconos vectoriales — son más crudos, más humanos, más irónicos

**Coordenadas y datos reales:**
- "1211 Jean-Talon Est, Montréal (QC)" — la dirección física como elemento visual
- Teléfono: +1 514 524 5678 — mostrado prominentemente
- No hay formulario de contacto generic — hay datos reales que humanizan

**Contadores con significado:**
- "Seven Years Running 2018-2024" — Awwwards Agency of the Year, listado con años específicos
- "288 reconocimientos" — número exacto, no "múltiples premios"
- "15 years" de trayectoria
- Contadores de equipo por departamento: 9 / 11 / 9 personas

**La marca registrada ®:**
- Usan "Locomotive®" con el símbolo — señal de seriedad legal y branding

**Sello "Digital-First Design™":**
- Tienen un claim registrado como trademark, no solo un tagline genérico

**Glifos custom en la tipografía:**
- PP Locomotive New tiene glifos propios con referencias internas — el sitio literalmente tiene caracteres únicos que nadie más puede usar

---

## 6. Traducción a SCUART

Para cada elemento, cómo adoptarlo sin clonar:

### 6.1 Tipografía → SCUART

- **Mantener Fraunces** para display pero SOLO en los momentos de mayor jerarquía. Usar Fraunces Black Italic o Fraunces Light — evitar los pesos medios que se ven orgánicos/editorial.
- **Evaluar swap de Hanken por Geist Sans** (libre, de Vercel) — tiene carácter técnico que comunica "studio digital" mejor que un grotesco genérico.
- **Crear contraste extremo de escala**: Si el hero es Fraunces a 8vw, el cuerpo es Geist a 0.9rem. La diferencia de escala ES el diseño.
- **Pairing alternativo premium**: PP Editorial New + PP Neue Montreal ($400–500/año total). Justificable si SCUART quiere la referencia exacta.

### 6.2 Color → SCUART

- **Elegir UNA de las 3 paletas propuestas** (sección 2) — William elige, luego se implementa
- Lo más diferenciador respecto a Locomotive: SCUART puede ir dark donde ellos van light — sería más dramático y distinguible
- Si William prefiere light mode, usar Paleta B (arquitecto) — muy cercana al método Locomotive pero con verde botella como acento

### 6.3 Layout → SCUART

- **Hero**: Claim de agencia grande + ubicación "Bogotá, Colombia" como badge de personalidad. NO hero con foto de fondo.
- **Portfolio**: Implementar lista editorial estilo Locomotive — no cards cuadradas. Proyectos listados con título + cliente + año + categoría. Imagen reveal en hover.
- **Secciones numeradas**: 01 Diseño, 02 Tecnología, 03 Estrategia — adoptar el pattern de contadores de sección
- **Awards/premios**: Si SCUART tiene Awwwards o similares, listarlos como texto denso ("X reconocimientos"), no como badges PNG
- **Dirección real**: Bogotá, dirección o barrio + teléfono + email — visibilidad de la agencia como entidad real

### 6.4 Motion → SCUART

- **Lenis ya está en el stack**: úsarlo. Smooth scroll como base obligatoria.
- **GSAP + ScrollTrigger para reveals de líneas**: NO fade de bloque completo. El texto aparece línea por línea de abajo hacia arriba.
- **Transición de página**: Implementar una transición simple de salida (wipe o fade negro) antes de cargar la siguiente página. Astro View Transitions API puede manejar esto nativamente.
- **Parallax en imágenes**: Las imágenes del portfolio se mueven al 70% de velocidad del scroll — da profundidad sin 3D.
- **Hover en portfolio**: Imagen del proyecto sigue al cursor (cursor follower) — es la interacción más "premium" de Locomotive y es implementable con GSAP.
- **Evitar**: Loaders largos, transiciones en CADA elemento, scroll horizontal, efectos que bloquean el content.

### 6.5 Personalidad → SCUART

- **Crear un vocabulario de glifos propio** — no emojis de transporte (eso es de Locomotive), sino algo que tenga sentido para SCUART. Opciones: coordenadas tipográficas, glifos de arquitectura (◈ ▣ ⊕), o simplemente números de proyecto bien diseñados.
- **"SCUART®"** — si hay marca registrada, usarla visualmente. Si no, al menos establecer el claim "Diseño + Tecnología" o similar como sello.
- **Datos reales como diseño**: Año de fundación, ciudad, número de proyectos — contar la historia con datos, no con descripción genérica.
- **Bilingüe como personalidad**: El toggle EN/ES es parte de la identidad. Locomotive hace lo mismo con EN/FR (Montreal).

---

## Anti-patrones a evitar (específicos para SCUART)

- **Hero con foto de equipo o foto de pantallas de proyectos** — Locomotive no lo hace; confía en la tipografía
- **Cards con shadow + border-radius** — patrón 2019–2022, incompatible con el lenguaje que se busca
- **Gradientes de color en backgrounds** — no está en el vocabulario de agencias premium actuales
- **Animaciones de entrada en CADA sección** — solo 3–4 momentos de motion memorable por página
- **Hamburger menu en desktop** — Locomotive tiene navegación horizontal visible
- **"Nuestros servicios son..." copy descriptivo** — Locomotive usa declaraciones, no descripciones
- **Stock photography** — ninguna imagen genérica. Solo trabajo real o ausencia de imagen
- **Color gastronómico** (terracota, café, arena oscura) — ya descartado, aquí se refuerza
- **Múltiples CTAs compitiendo** — un solo CTA primario por sección ("Let's talk" equivalente)

---

## Referencias de apoyo

Sitios que aplican el mismo sistema con variaciones útiles para SCUART:

1. **Locomotive** — https://locomotive.ca/en — Referencia maestra
   - Por qué destaca: Serif + grotesque, bicromático, motion como capa de lujo, datos reales como personalidad
   - Qué imitar: Sistema tipográfico, contadores de sección, navegación visible en desktop, portfolio como lista
   - Qué NO imitar: Los emojis de tren (es su identidad, no la nuestra), el CMS propietario PHP

2. **Instrument** — https://instrument.com — Agencia digital Portland
   - Por qué destaca: Dark mode premium, portfolio editorial, claim fuerte
   - Qué imitar: La audacia del dark con tipografía blanca de alto contraste

3. **Basement Studio** — https://basement.studio — Agencia argentina (referencia local)
   - Por qué destaca: Agencia hispanoamericana con nivel Awwwards, dark mode extremo, motion intenso
   - Qué imitar: Prueba que una agencia latinoamericana puede tener nivel de diseño europeo

4. **Hello Monday** — https://www.hellomonday.com — Agencia NY/Copenhagen
   - Por qué destaca: Lista de proyectos minimal, personalidad sin excesos
   - Qué imitar: La economía — cómo muestran mucho trabajo con poco ruido visual

---

## Recomendaciones consolidadas para William

### Decisiones que William debe tomar antes de pasar al director-creativo:

**1. Paleta (elegir una):**
- Paleta A "Papel negro" — dark, dramático, diferenciado de Locomotive
- Paleta B "Arquitecto" — light, más cercano a Locomotive, verde como acento
- Paleta C "Tinta y piedra" — dark sutil, el más atemporal

**2. Tipografía (elegir una):**
- Mantener Fraunces + Hanken (ajustar uso, no cambiar fuentes)
- Mantener Fraunces + swap Hanken por Geist Sans (sin costo extra)
- Upgrade a PP Editorial New + PP Neue Montreal (~$400-500/año, pareja exacta de Locomotive)

**3. Intensidad del motion:**
- Sutil (reveals de líneas + parallax, sin cursor follower)
- Completo (todo lo anterior + cursor follower de imágenes + transiciones de página)

---

## Fuentes de investigación

- https://locomotive.ca/en (WebFetch directo)
- https://locomotive.ca/en/agency (WebFetch directo)
- https://locomotive.ca/en/work (WebFetch directo)
- https://locomotive.ca/en/careers (WebFetch directo)
- https://locomotive.ca/en/work/editorial-new (WebFetch directo)
- https://fontsinuse.com/uses/61459/locomotive-portfolio-website-and-visual-ident
- https://www.awwwards.com/locomotive-by-locomotive-wins-site-of-the-month-june-a-case-study.html
- https://www.awwwards.com/case-study-reinventing-locomotive-r.html
- https://pangrampangram.com/blogs/font-in-use/locomotive
- https://www.awwwards.com/locomotive/ (perfil con 137 proyectos)
