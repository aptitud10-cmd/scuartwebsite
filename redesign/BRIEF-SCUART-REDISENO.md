# Brief de Rediseño — SCUART

**Proyecto:** Rediseño completo del sitio scuart.com
**Tipo:** Proyecto propio (agencia rediseñando su propio sitio)
**Para usar con:** Agency OS (/scuart-agency-os:nueva-feature)

## 1. Posicionamiento

SCUART es una agencia de diseño y desarrollo web obsesionada con restaurantes y comercios locales. No una agencia generalista que también hace restaurantes — un estudio enfocado en el sector gastronómico y comercial.

Nicho:
- Cliente principal: restaurantes, cafés, food brands
- Cliente secundario: comercios locales (salones, tiendas)
- Geografía: Colombia / LATAM, con capacidad internacional (sitio bilingüe)

Diferenciador: SCUART construyó su propio SaaS (MENIUS — sistema de menús/pedidos para restaurantes). Esto prueba que entiende el negocio gastronómico de punta a punta. MENIUS es un producto SEPARADO (tiene su sitio menius.app). En el sitio de SCUART, MENIUS aparece como CREDENCIAL / prueba de capacidad, NO como un servicio.

Oferta de servicios:
1. Diseño y desarrollo web premium
2. Identidad de marca / branding
3. Sistemas a medida (reservas, pedidos, automatizaciones)
4. SEO local

## 2. Voz de marca (premium)

1. Menos palabras, más confianza
2. Específico mejor que genérico
3. Conectar diseño con dinero (más reservas, más ventas)
4. Hablarle al cliente, no de nosotros
5. Cero clichés (prohibido: transformación digital, soluciones a medida, high-converting)
6. Emoción + oficio

## 3. Idioma

Bilingüe español + inglés. i18n routing en Astro (/es/ y /en/). Default español. Toggle visible en el nav.

## 4. Estructura del sitio (8 secciones)

Hero:
- Headline: "Le damos a los restaurantes la web que su comida merece."
- Subhead: "Diseño y desarrollo premium para marcas gastronómicas y comercios que no quieren verse como todos los demás."
- CTAs: [Empezá tu proyecto] [Ver nuestro trabajo]
- Diseño: SALIR del cliché dark-navy + gradiente cyan/magenta. Buscar calidez gastronómica.

Prueba social: nombres reales — Jamón Casero, Healthy Choice NY, Arriba Gold, MENIUS.

El problema que resolvemos:
- "Tu comida es excepcional. ¿Tu sitio web también?"
- Un sitio genérico hace que tu restaurante se vea como cualquier otro. Tus clientes te juzgan online antes de probar tu comida.
- NO mencionar comisiones de delivery (eso es dolor de MENIUS, no de SCUART).

Servicios:
01 Diseño Web — Sitios que se ven tan bien como tu mejor plato.
02 Identidad de Marca — Tu marca coherente desde el logo hasta el menú.
03 Sistemas a Medida — Reservas, pedidos, automatizaciones.
04 SEO Local — Que cuando alguien busque dónde comer, te encuentren a vos.

Producto propio (MENIUS):
- "No solo diseñamos. Construimos."
- MENIUS es nuestro sistema de pedidos para restaurantes, diseñado y operado por nosotros.
- [Conocé MENIUS] link a menius.app

Proceso: Discovery, Strategy, Design, Development.

Sobre nosotros (HONESTO):
- "Un estudio pequeño, obsesionado con el detalle."
- CRÍTICO: quitar premios falsos (Awwwards, FWA, CSS Design) y stats infladas (50+, 30+, 8 países). Usar números reales o quitar.

Contacto:
- "¿Listo para destacar? Trabajamos con un número limitado de proyectos por mes."
- Formulario: nombre, email, presupuesto, mensaje.

## 5. Portfolio

Solo proyectos reales con screenshots de calidad (están en assets/portfolio/):
- Jamón Casero (featured) — jamon-casero.webp
- MENIUS (featured, producto propio) — menius.webp
- Healthy Choice NY (secundario) — healthy-choice.webp
- Arriba Gold (secundario) — arriba-gold.webp

Eliminados: proyectos ficticios (Aurea Finance, EduLearn). Eva Beauty queda afuera por ahora (baja el nivel).

## 6. Stack técnico

- Astro 5
- i18n nativo (/es/, /en/)
- Motion: GSAP / Lenis (skill motion-stack)
- Deploy: Vercel
- Corregir og:url (apunta a vercel.app, debe ser scuart.com)

## 7. Tendencias 2026

Cinematográfico no llamativo, motion con significado, velocidad no negociable, espacio en blanco generoso, tipografía con carácter.

## 8. Recordatorios Agency OS

William SIEMPRE en el loop visual. Sin assets de calidad no hay sitio premium. Cargar skill visual-composition antes de codear UI. No inventar (proyectos reales, números honestos).
