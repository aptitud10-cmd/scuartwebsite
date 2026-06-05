/**
 * SCUART — Rediseño Editorial Cálido — Entrega 2B
 *
 * Home completo: Hero + Loader (aprobados 2A) + Secciones 3–8 nuevas.
 *
 * Secciones añadidas en esta entrega:
 *   — Marquesina kinética horizontal (GSAP, pausa en hover)
 *   — Sección 3: El Problema (tipografía pura, sin cards)
 *   — Sección 4: Servicios (lista editorial desbalanceada, no cards oscuras)
 *   — Sección Trabajo: 4 mockups reales, grid asimétrico featured/secundarios
 *   — Sección 5: MENIUS (passe-partout crema-profunda, acento oliva, screenshot intacto)
 *   — Sección 6: Proceso (timeline horizontal/vertical, filetes hairline)
 *   — Sección 7: Sobre nosotros (honesto, sin stats/premios)
 *   — Sección 8: Contacto invertido (fondo tinta, texto crema, formulario inline)
 *
 * Sistema visual que se mantiene:
 *   Paleta: crema/tinta/terracota(≤10%)/oliva
 *   Motion: EASE_EDITORIAL, whileInView once:true, reduced-motion respetado
 *   Tipografía: Fraunces display + Hanken body, clases type-* existentes
 */

import Navigation from "@/components/Navigation";
import ContactFormModal from "@/components/ContactFormModal";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import MagneticButton from "@/components/MagneticButton";
import Loader from "@/components/Loader";
import { motion, useReducedMotion } from "framer-motion";
import { useState, useRef } from "react";

/* Easing editorial — cubic-bezier cinemático, tipado como tupla para framer v12 */
const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const;

/* ------------------------------------------------------------------ */
/* Datos de servicios (lista editorial, NO cards)                      */
/* ------------------------------------------------------------------ */
interface Servicio {
  numero: string;
  titulo: string;
  descripcion: string;
}

const SERVICIOS: Servicio[] = [
  {
    numero: "01",
    titulo: "Diseño Web",
    descripcion: "Sitios que se ven tan bien como tu mejor plato.",
  },
  {
    numero: "02",
    titulo: "Identidad de Marca",
    descripcion: "Tu marca coherente desde el logo hasta el menú.",
  },
  {
    numero: "03",
    titulo: "Sistemas a Medida",
    descripcion: "Reservas, pedidos, automatizaciones.",
  },
  {
    numero: "04",
    titulo: "SEO Local",
    descripcion: "Que cuando alguien busque dónde comer, te encuentren a vos.",
  },
];

/* ------------------------------------------------------------------ */
/* Proyectos del portfolio (4 reales con nombres exactos verificados)  */
/* ------------------------------------------------------------------ */
interface Proyecto {
  slug: string;
  titulo: string;
  categoria: string;
  imagen: string;
  featured: boolean;
}

const PROYECTOS: Proyecto[] = [
  {
    slug: "jamon-casero",
    titulo: "Jamón Casero",
    categoria: "Diseño web · Identidad",
    imagen: "/images/portfolio-jamon-casero.webp",
    featured: true,
  },
  {
    slug: "menius",
    titulo: "MENIUS",
    categoria: "SaaS · Producto propio",
    imagen: "/images/portfolio-menius-real.webp",
    featured: true,
  },
  {
    slug: "healthy-choice",
    titulo: "Healthy Choice NY",
    categoria: "Diseño web",
    imagen: "/images/portfolio-healthy-choice-real.webp",
    featured: false,
  },
  {
    slug: "arriba-gold",
    titulo: "Arriba Gold",
    categoria: "Diseño web · Marca",
    imagen: "/images/portfolio-arriba-gold-real.webp",
    featured: false,
  },
];

/* ------------------------------------------------------------------ */
/* Pasos del proceso                                                    */
/* ------------------------------------------------------------------ */
interface PasoProceso {
  numero: string;
  nombre: string;
  descripcion: string;
  acento: "terracota" | "oliva";
}

const PROCESO: PasoProceso[] = [
  {
    numero: "01",
    nombre: "Discovery",
    descripcion: "Entendemos tu negocio, tus clientes y lo que te diferencia.",
    acento: "terracota",
  },
  {
    numero: "02",
    nombre: "Strategy",
    descripcion: "Definimos estructura, jerarquía y el camino más directo al resultado.",
    acento: "oliva",
  },
  {
    numero: "03",
    nombre: "Design",
    descripcion: "Cada detalle visual con un porqué. Nada de plantillas.",
    acento: "terracota",
  },
  {
    numero: "04",
    nombre: "Development",
    descripcion: "Código limpio, rápido y hecho para escalar con tu negocio.",
    acento: "oliva",
  },
];

/* ------------------------------------------------------------------ */
/* Datos del headline escalonado                                       */
/* Cada línea: texto + clase de indent CSS (solo activa en md+)       */
/* ------------------------------------------------------------------ */

interface HeadlineToken {
  text: string;
  /** Clase CSS de indent — hero-line-indent-{0..3}, definidas en index.css */
  indentClass: string;
  /** Clase adicional para el span del texto (acento itálica) */
  accentClass?: string;
}

const HEADLINE_TOKENS: HeadlineToken[] = [
  {
    text: "Le damos a los",
    indentClass: "hero-line-indent-0",
  },
  {
    text: "restaurantes",
    indentClass: "hero-line-indent-1",
  },
  {
    text: "la web que su comida",
    indentClass: "hero-line-indent-2",
  },
  {
    text: "merece.",
    indentClass: "hero-line-indent-3",
    accentClass: "hero-display-accent",
  },
];

/* ------------------------------------------------------------------ */
/* Página principal                                                     */
/* ------------------------------------------------------------------ */

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [loaderDone, setLoaderDone] = useState(false);
  const reducedMotion = useReducedMotion() ?? false;

  /* Con reduced-motion, el hero aparece sin animaciones desde el inicio */
  const heroVisible = loaderDone || reducedMotion;

  return (
    <PageTransition>
      {/* Loader de entrada — se monta encima, sale con slide-up revelando el hero */}
      <Loader onComplete={() => setLoaderDone(true)} />

      <div className="min-h-screen bg-crema text-tinta overflow-hidden">
        <Navigation onContactClick={() => setIsContactModalOpen(true)} />

        {/* ============================================================
            SECCIÓN 1 — HERO NO-CONVENCIONAL
            El H1 Fraunces es LA pieza. Ocupa casi todo el viewport.
            Estructura: texto escalonado pegado al fondo de la sección,
            el copy "crece" hacia arriba — opuesto al hero genérico
            que empieza centrado arriba.
            CTA y subhead quedan discretos en la franja inferior.
        ============================================================ */}
        <section
          className="relative flex flex-col justify-end min-h-[92vh] pt-28 pb-10 md:pt-32 md:pb-14"
          aria-labelledby="hero-headline-accessible"
        >
          {/* Texto accesible para lectores de pantalla */}
          <h1 id="hero-headline-accessible" className="sr-only">
            Le damos a los restaurantes la web que su comida merece.
          </h1>

          {/* ---- Headline escalonado — aria-hidden porque el h1 accesible ya existe ---- */}
          <div
            className="w-full px-5 md:px-12 lg:px-16 mb-10 md:mb-12"
            aria-hidden="true"
          >
            {HEADLINE_TOKENS.map((token, i) => (
              /*
               * hero-line-mask: overflow-hidden que actúa como máscara de reveal.
               * hero-line-indent-{n}: margin-left solo activo en md+ (ver index.css).
               */
              <div
                key={i}
                className={`hero-line-mask ${token.indentClass}`}
              >
                <motion.span
                  className={`hero-display block ${token.accentClass ?? ""}`}
                  initial={heroVisible ? { y: "0%" } : { y: "108%" }}
                  animate={heroVisible ? { y: "0%" } : {}}
                  transition={{
                    duration: reducedMotion ? 0 : 0.88,
                    delay: reducedMotion ? 0 : 0.05 + i * 0.13,
                    ease: EASE_EDITORIAL,
                  }}
                >
                  {token.text}
                </motion.span>
              </div>
            ))}
          </div>

          {/* ---- Franja inferior: subhead izquierda + CTAs derecha ---- */}
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 px-5 md:px-12 lg:px-16"
            initial={{ opacity: 0, y: 16 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: reducedMotion ? 0 : 0.75,
              delay: reducedMotion ? 0 : 0.65,
              ease: EASE_EDITORIAL,
            }}
          >
            {/* Subhead — N3, discreto */}
            <p className="hero-subhead">
              Diseño y desarrollo premium para marcas gastronómicas
              que no quieren verse como todos los demás.
            </p>

            {/* CTAs — N2 */}
            <div className="flex flex-col items-start sm:items-end gap-4 flex-shrink-0">
              <MagneticButton strength={0.18}>
                <button
                  type="button"
                  onClick={() => setIsContactModalOpen(true)}
                  className="btn-primary"
                  aria-label="Abrir formulario de contacto"
                >
                  Empezá tu proyecto
                </button>
              </MagneticButton>

              <a
                href="#case-studies"
                className="btn-text-link"
                aria-label="Ver nuestro trabajo"
              >
                Ver nuestro trabajo
              </a>
            </div>
          </motion.div>

          {/* ---- Indicador de scroll — editorial, esquina izquierda baja ---- */}
          <motion.a
            href="#social-proof"
            className="scroll-indicator absolute bottom-6 left-5 md:left-12 lg:left-16"
            aria-label="Continuar leyendo"
            initial={{ opacity: 0 }}
            animate={heroVisible ? { opacity: 1 } : {}}
            transition={{
              duration: reducedMotion ? 0 : 0.6,
              delay: reducedMotion ? 0 : 1.0,
            }}
          >
            <span className="scroll-indicator-line" aria-hidden="true" />
            scroll
          </motion.a>

          {/* Línea hairline inferior */}
          <div
            className="absolute bottom-0 left-0 right-0 h-px bg-borde"
            aria-hidden="true"
          />
        </section>

        {/* ============================================================
            SECCIÓN 2 — PRUEBA SOCIAL
            Tira sobria. Nombres reales, sin logos inventados, sin métricas.
        ============================================================ */}
        <section
          id="social-proof"
          className="py-14 md:py-20"
          aria-label="Marcas que confían en SCUART"
        >
          <div className="container">
            <motion.p
              className="type-eyebrow text-tinta-suave mb-8 md:mb-10"
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Marcas que confían
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-y-4 sm:gap-y-5 sm:gap-x-10 md:gap-x-14"
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.12, ease: EASE_EDITORIAL }}
            >
              {["Jamón Casero", "Healthy Choice NY", "Arriba Gold", "MENIUS"].map(
                (marca, i) => (
                  <span key={marca} className="flex items-center gap-4 md:gap-5">
                    <span className="font-body text-base md:text-lg text-tinta tracking-wide">
                      {marca}
                    </span>
                    {i < 3 && (
                      <span
                        className="hidden sm:block w-1 h-1 rounded-full bg-borde flex-shrink-0"
                        aria-hidden="true"
                      />
                    )}
                  </span>
                )
              )}
            </motion.div>
          </div>

          <div className="mt-14 md:mt-20 border-t border-borde" aria-hidden="true" />
        </section>

        {/* ============================================================
            MARQUESINA — Transición kinética tras prueba social
            GSAP tween horizontal infinito. Pausa en hover.
            En reduced-motion: estática (sin animación).
        ============================================================ */}
        <MarquesinaSection reducedMotion={reducedMotion} />

        {/* ============================================================
            SECCIÓN 3 — EL PROBLEMA QUE RESOLVEMOS
            Momento editorial puro: tipografía + aire. Sin cards.
            N1: headline serif enorme
            N2: segunda frase itálica terracota (eco del hero)
            N3: cuerpo de apoyo
        ============================================================ */}
        <section
          className="py-24 md:py-36 overflow-hidden"
          aria-labelledby="problema-headline"
        >
          <div className="container">
            {/* Layout asimétrico: texto anclado a la izquierda, aire a la derecha */}
            <div className="max-w-4xl">
              <motion.p
                className="type-eyebrow text-tinta-suave mb-10 md:mb-12"
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                El problema que resolvemos
              </motion.p>

              {/* Headline partido en dos líneas — la segunda itálica terracota */}
              <div className="mb-10 md:mb-14" id="problema-headline">
                <motion.h2
                  className="type-display-l text-tinta leading-tight"
                  initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, ease: EASE_EDITORIAL }}
                >
                  Tu comida es excepcional.
                </motion.h2>

                <motion.h2
                  className="type-display-l leading-tight"
                  style={{ color: "#C2703D", fontStyle: "italic" }}
                  initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, delay: 0.15, ease: EASE_EDITORIAL }}
                >
                  ¿Tu sitio web también?
                </motion.h2>
              </div>

              {/* Cuerpo de apoyo — corto, directo */}
              <motion.p
                className="type-lead max-w-xl"
                initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: 0.3, ease: EASE_EDITORIAL }}
              >
                Un sitio genérico hace que tu restaurante se vea como cualquier otro.
                Tus clientes te juzgan online antes de probar tu comida.
              </motion.p>
            </div>
          </div>

          <div className="mt-20 md:mt-28 border-t border-borde" aria-hidden="true" />
        </section>

        {/* ============================================================
            SECCIÓN 4 — SERVICIOS (lista editorial desbalanceada)
            PROHIBIDO: cards oscuras, "01 02 03" en gris
            Lista vertical: número serif grande | título | descripción
            Divisores hairline entre filas. Hover: terracota en número+título
        ============================================================ */}
        <section
          className="py-20 md:py-32"
          aria-labelledby="servicios-heading"
        >
          <div className="container">
            <motion.p
              className="type-eyebrow text-tinta-suave mb-12 md:mb-16"
              id="servicios-heading"
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Servicios
            </motion.p>

            {/* Lista editorial — <ul> semántico, cada fila es <li> */}
            <ul className="list-none p-0 m-0">
              {SERVICIOS.map((s, i) => (
                <ServicioFila
                  key={s.numero}
                  servicio={s}
                  index={i}
                  reducedMotion={reducedMotion}
                />
              ))}
            </ul>
          </div>
        </section>

        {/* ============================================================
            SECCIÓN TRABAJO (id="case-studies" — ancla del hero CTA)
            Grid asimétrico editorial: featured grande / secundarios chicos
            Imágenes reales. Hover: scale 1.03 lento (0.6s).
            Reveal con fade-up al scroll.
        ============================================================ */}
        <section
          id="case-studies"
          className="py-20 md:py-32 bg-crema-profunda"
          aria-labelledby="trabajo-heading"
        >
          <div className="container">
            <motion.p
              className="type-eyebrow text-tinta-suave mb-12 md:mb-16"
              id="trabajo-heading"
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Trabajo selecto
            </motion.p>

            {/* Grid asimétrico:
                Mobile: columna única
                Desktop: fila 1 = 2 featured (col-span asimétrico 7/5),
                         fila 2 = 2 secundarios iguales */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
              {/* Featured 1 — Jamón Casero: col-span mayor */}
              <ProyectoCard
                proyecto={PROYECTOS[0]}
                className="md:col-span-7"
                aspectClass="aspect-[4/3] md:aspect-[4/5]"
                index={0}
                reducedMotion={reducedMotion}
              />

              {/* Featured 2 — MENIUS: col-span menor pero aún grande */}
              <ProyectoCard
                proyecto={PROYECTOS[1]}
                className="md:col-span-5"
                aspectClass="aspect-[4/3] md:aspect-[4/5]"
                index={1}
                reducedMotion={reducedMotion}
              />

              {/* Secundarios — mitad del ancho en desktop */}
              <ProyectoCard
                proyecto={PROYECTOS[2]}
                className="md:col-span-6"
                aspectClass="aspect-[4/3]"
                index={2}
                reducedMotion={reducedMotion}
              />

              <ProyectoCard
                proyecto={PROYECTOS[3]}
                className="md:col-span-6"
                aspectClass="aspect-[4/3]"
                index={3}
                reducedMotion={reducedMotion}
              />
            </div>
          </div>
        </section>

        {/* ============================================================
            SECCIÓN 5 — MENIUS (DELICADA — credencial, no servicio)
            Fondo: crema-profunda (passe-partout que enmarca el screenshot oscuro)
            Acentos: OLIVA, no terracota — puente al esmeralda de MENIUS
            Screenshot: intacto, no re-coloreado. Se enmarca con padding.
            Layout: texto izquierda | imagen derecha en desktop
        ============================================================ */}
        <section
          className="menius-section py-24 md:py-36"
          aria-labelledby="menius-heading"
        >
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
              {/* Columna izquierda: texto */}
              <div className="order-2 md:order-1">
                <motion.p
                  className="type-eyebrow menius-eyebrow mb-8"
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Producto propio
                </motion.p>

                <motion.h2
                  className="type-display-l text-tinta mb-6"
                  id="menius-heading"
                  initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, ease: EASE_EDITORIAL }}
                >
                  No solo diseñamos.{" "}
                  <span className="menius-acento-italic">
                    Construimos.
                  </span>
                </motion.h2>

                <motion.p
                  className="type-body text-tinta-suave mb-8 max-w-md"
                  initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, delay: 0.2, ease: EASE_EDITORIAL }}
                >
                  MENIUS es nuestro sistema de pedidos para restaurantes, diseñado
                  y operado por nosotros. No es un producto de terceros que revendemos:
                  lo construimos de cero porque entendemos el negocio gastronómico
                  de punta a punta.
                </motion.p>

                <motion.div
                  initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.35, ease: EASE_EDITORIAL }}
                >
                  <a
                    href="https://menius.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-text-link menius-cta"
                    aria-label="Conocé MENIUS (abre en nueva pestaña)"
                  >
                    Conocé MENIUS
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                      className="ml-1"
                    >
                      <path
                        d="M2 7h10M7 2l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </motion.div>
              </div>

              {/* Columna derecha: screenshot MENIUS en passe-partout */}
              <motion.div
                className="order-1 md:order-2"
                initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1, ease: EASE_EDITORIAL }}
              >
                {/* Passe-partout: borde hairline que enmarca el screenshot oscuro */}
                <div className="menius-passe-partout">
                  <img
                    src="/images/portfolio-menius-real.webp"
                    alt="Interfaz de MENIUS — sistema de pedidos para restaurantes"
                    className="w-full block menius-screenshot"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Leyenda de credencial bajo la imagen */}
                <p className="type-caption menius-caption mt-3 pl-1">
                  Sistema de pedidos diseñado y operado por SCUART
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECCIÓN 6 — PROCESO
            Timeline editorial: horizontal en desktop, vertical en mobile
            Numeración serif, filetes hairline, SIN cards. Acento alternado.
            Stagger al scroll.
        ============================================================ */}
        <section
          className="py-24 md:py-36"
          aria-labelledby="proceso-heading"
        >
          <div className="container">
            <motion.p
              className="type-eyebrow text-tinta-suave mb-12 md:mb-20"
              id="proceso-heading"
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Cómo trabajamos
            </motion.p>

            {/* Desktop: grid horizontal 4-col. Mobile: lista vertical */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
              {PROCESO.map((paso, i) => (
                <PasoTimeline
                  key={paso.numero}
                  paso={paso}
                  index={i}
                  esPrimero={i === 0}
                  esUltimo={i === PROCESO.length - 1}
                  reducedMotion={reducedMotion}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            SECCIÓN 7 — SOBRE NOSOTROS (HONESTO)
            Sin premios, sin stats infladas. Solo declaración de oficio.
            Tipografía sobre crema, mucho aire.
        ============================================================ */}
        <section
          className="py-24 md:py-36 border-t border-borde"
          aria-labelledby="nosotros-heading"
        >
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
              {/* Eyebrow + titular — columna ancha */}
              <div className="md:col-span-7">
                <motion.p
                  className="type-eyebrow text-tinta-suave mb-10"
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Sobre nosotros
                </motion.p>

                <motion.h2
                  className="type-display-l text-tinta"
                  id="nosotros-heading"
                  initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, ease: EASE_EDITORIAL }}
                >
                  Un estudio pequeño,{" "}
                  <span className="nosotros-italic">
                    obsesionado con el detalle.
                  </span>
                </motion.h2>
              </div>

              {/* Cuerpo — columna estrecha, alineada al fondo del titular */}
              <motion.div
                className="md:col-span-5 md:pt-20"
                initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: 0.25, ease: EASE_EDITORIAL }}
              >
                <p className="type-lead mb-5">
                  Nos especializamos en restaurantes y marcas gastronómicas porque
                  es donde podemos hacer la diferencia real. No somos una agencia
                  generalista que también hace comida.
                </p>
                <p className="type-body text-tinta-suave">
                  Cada proyecto es un encargo: lo tomamos en serio, lo ejecutamos
                  con cuidado, y no lo largamos hasta que se vea bien de verdad.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECCIÓN 8 — CONTACTO (zona invertida CÁLIDA)
            ÚNICA zona oscura del sitio. Fondo tinta #1A1410, texto crema.
            Formulario inline: inputs borde hairline, foco terracota.
            Acento terracota en CTA. No navy, no black puro.
        ============================================================ */}
        <section
          className="section-invertida py-24 md:py-36"
          aria-labelledby="contacto-heading"
        >
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
              {/* Columna izquierda: copy */}
              <div className="md:col-span-5">
                <motion.p
                  className="type-eyebrow contacto-eyebrow mb-8"
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Empezá tu proyecto
                </motion.p>

                <motion.h2
                  className="type-display-l contacto-titular"
                  id="contacto-heading"
                  initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, ease: EASE_EDITORIAL }}
                >
                  ¿Listo para
                  <br />
                  <span className="contacto-acento-italic">
                    destacar?
                  </span>
                </motion.h2>

                <motion.p
                  className="type-body contacto-subtext mt-6"
                  initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2, ease: EASE_EDITORIAL }}
                >
                  Trabajamos con un número limitado de proyectos por mes.
                </motion.p>
              </div>

              {/* Columna derecha: formulario inline */}
              <motion.div
                className="md:col-span-7"
                initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15, ease: EASE_EDITORIAL }}
              >
                <FormularioContacto
                  onSuccessModal={() => setIsContactModalOpen(true)}
                />
              </motion.div>
            </div>
          </div>
        </section>

        <ContactFormModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        />

        <Footer onContactClick={() => setIsContactModalOpen(true)} />
      </div>
    </PageTransition>
  );
}

/* ================================================================== */
/* SUB-COMPONENTES — definidos fuera del render para evitar           */
/* re-creación en cada render del componente padre.                   */
/* ================================================================== */

/* ------------------------------------------------------------------ */
/* MarquesinaSection                                                   */
/* Tira horizontal kinética. CSS animation loop infinito.             */
/* JS solo controla pausa/resume en hover vía animation-play-state.  */
/* Reduced-motion: sin clase --animated → texto estático.             */
/*                                                                    */
/* Técnica del loop: el track contiene el texto 2 veces.             */
/* CSS keyframe mueve -50% → el segundo bloque ocupa el lugar         */
/* del primero y el ciclo se repite sin salto visible.               */
/* ------------------------------------------------------------------ */
function MarquesinaSection({ reducedMotion }: { reducedMotion: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);

  /* Un bloque de texto completo — se repite 2× en el DOM para el loop */
  const BLOQUE = "DISEÑO · GASTRONOMÍA · MARCA · DESARROLLO · ";

  function handleMouseEnter() {
    if (!trackRef.current || reducedMotion) return;
    trackRef.current.style.animationPlayState = "paused";
  }

  function handleMouseLeave() {
    if (!trackRef.current || reducedMotion) return;
    trackRef.current.style.animationPlayState = "running";
  }

  /* Renderiza el bloque con separadores "·" en terracota */
  function renderBloque(bloque: string, keyPrefix: string) {
    return bloque.split("·").map((parte, i, arr) => (
      <span key={`${keyPrefix}-${i}`}>
        {parte}
        {i < arr.length - 1 && (
          <span className="marquesina-separator" aria-hidden="true">·</span>
        )}
      </span>
    ));
  }

  return (
    <div
      className="marquesina-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-hidden="true"
    >
      {/*
       * El track contiene 2 copias del bloque de texto.
       * La animación CSS mueve el track -50% → cuando la primera copia
       * sale por la izquierda, la segunda copia está exactamente en su
       * lugar → loop perfecto sin salto.
       */}
      <div
        ref={trackRef}
        className={`marquesina-track${reducedMotion ? "" : " marquesina-track--animated"}`}
      >
        <span className="marquesina-item">
          {renderBloque(BLOQUE, "a")}
        </span>
        {/* Segunda copia para el loop sin salto */}
        <span className="marquesina-item" aria-hidden="true">
          {renderBloque(BLOQUE, "b")}
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* ServicioFila                                                        */
/* Elemento <li> de la lista editorial de servicios.                  */
/* Hover: terracota en número + título (vía CSS .servicio-fila:hover) */
/* ------------------------------------------------------------------ */
interface ServicioFilaProps {
  servicio: Servicio;
  index: number;
  reducedMotion: boolean;
}

function ServicioFila({ servicio, index, reducedMotion }: ServicioFilaProps) {
  return (
    <motion.li
      className="servicio-fila"
      initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: reducedMotion ? 0 : index * 0.08,
        ease: EASE_EDITORIAL,
      }}
    >
      {/* Número — N1, grande, serif */}
      <span className="servicio-numero" aria-hidden="true">
        {servicio.numero}
      </span>

      {/* Contenido — N2 título + N3 descripción */}
      <div>
        <p className="servicio-titulo">{servicio.titulo}</p>
        <p className="servicio-descripcion">{servicio.descripcion}</p>
      </div>
    </motion.li>
  );
}

/* ------------------------------------------------------------------ */
/* ProyectoCard                                                        */
/* Imagen real con overlay editorial. Scale en hover (CSS transition). */
/* Clip de overflow en el contenedor, no en la imagen.                */
/* ------------------------------------------------------------------ */
interface ProyectoCardProps {
  proyecto: Proyecto;
  className?: string;
  aspectClass: string;
  index: number;
  reducedMotion: boolean;
}

function ProyectoCard({ proyecto, className = "", aspectClass, index, reducedMotion }: ProyectoCardProps) {
  return (
    <motion.article
      className={`portfolio-card ${aspectClass} ${className}`}
      initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: reducedMotion ? 0 : index * 0.1,
        ease: EASE_EDITORIAL,
      }}
    >
      <img
        src={proyecto.imagen}
        alt={`Proyecto ${proyecto.titulo} — ${proyecto.categoria}`}
        className="portfolio-card__img"
        loading="lazy"
        decoding="async"
      />

      {/* Overlay con nombre y categoría */}
      <div className="portfolio-card__overlay">
        <p className="portfolio-card__titulo">{proyecto.titulo}</p>
        <p className="portfolio-card__categoria">{proyecto.categoria}</p>
      </div>
    </motion.article>
  );
}

/* ------------------------------------------------------------------ */
/* PasoTimeline                                                        */
/* Un paso del proceso. Desktop: filete arriba + padding lateral.     */
/* Mobile: filete izquierdo (línea vertical).                         */
/* ------------------------------------------------------------------ */
interface PasoTimelineProps {
  paso: PasoProceso;
  index: number;
  esPrimero: boolean;
  esUltimo: boolean;
  reducedMotion: boolean;
}

function PasoTimeline({ paso, index, esUltimo, reducedMotion }: PasoTimelineProps) {
  const claseNumero =
    paso.acento === "terracota" ? "paso-numero--terracota" : "paso-numero--oliva";

  return (
    <motion.div
      className={`paso-timeline ${esUltimo ? "paso-timeline--last" : ""}`}
      initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.75,
        delay: reducedMotion ? 0 : index * 0.12,
        ease: EASE_EDITORIAL,
      }}
    >
      <p className={`paso-numero ${claseNumero}`} aria-hidden="true">
        {paso.numero}
      </p>
      <h3 className="paso-nombre">{paso.nombre}</h3>
      <p className="paso-descripcion">{paso.descripcion}</p>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* FormularioContacto                                                  */
/* Formulario inline sobre fondo tinta. Inputs con borde hairline     */
/* crema, foco terracota. CTA terracota. Sin modales adicionales.     */
/* Al éxito: muestra confirmación inline; no abre el modal viejo.    */
/* ------------------------------------------------------------------ */
interface FormularioContactoProps {
  onSuccessModal: () => void;
}

function FormularioContacto({ onSuccessModal: _onSuccessModal }: FormularioContactoProps) {
  const [campos, setCampos] = useState({
    nombre: "",
    email: "",
    presupuesto: "",
    mensaje: "",
  });
  const [enviando, setEnviando] = useState(false);
  const [exito, setExito] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setCampos((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!campos.nombre.trim()) { setError("Por favor ingresá tu nombre."); return; }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campos.email);
    if (!emailOk) { setError("Por favor ingresá un email válido."); return; }
    if (!campos.mensaje.trim()) { setError("Por favor escribí tu mensaje."); return; }

    setEnviando(true);
    try {
      const res = await fetch("https://formspree.io/f/xgovelga", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: campos.nombre,
          email: campos.email,
          presupuesto: campos.presupuesto,
          mensaje: campos.mensaje,
        }),
      });
      if (res.ok) {
        setExito(true);
      } else {
        setError("No pudimos enviar el mensaje. Intentá de nuevo.");
      }
    } catch {
      setError("No pudimos enviar el mensaje. Intentá de nuevo.");
    } finally {
      setEnviando(false);
    }
  }

  if (exito) {
    return (
      <div className="form-contacto__exito">
        <p className="form-contacto__exito-titulo">Mensaje enviado.</p>
        <p className="form-contacto__exito-subtitulo">
          Te respondemos en las próximas 24 horas.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form-contacto" noValidate>
      <div>
        <label htmlFor="cf-nombre" className="form-contacto__label">
          Nombre
        </label>
        <input
          id="cf-nombre"
          type="text"
          name="nombre"
          value={campos.nombre}
          onChange={handleChange}
          placeholder="Tu nombre"
          className="form-contacto__input"
          autoComplete="name"
        />
      </div>

      <div>
        <label htmlFor="cf-email" className="form-contacto__label">
          Email
        </label>
        <input
          id="cf-email"
          type="email"
          name="email"
          value={campos.email}
          onChange={handleChange}
          placeholder="tu@email.com"
          className="form-contacto__input"
          autoComplete="email"
        />
      </div>

      <div>
        <label htmlFor="cf-presupuesto" className="form-contacto__label">
          Presupuesto aproximado
        </label>
        <select
          id="cf-presupuesto"
          name="presupuesto"
          value={campos.presupuesto}
          onChange={handleChange}
          className="form-contacto__select"
        >
          <option value="">Seleccioná una opción</option>
          <option value="menos-1000">Menos de USD 1.000</option>
          <option value="1000-3000">USD 1.000 – 3.000</option>
          <option value="3000-6000">USD 3.000 – 6.000</option>
          <option value="mas-6000">Más de USD 6.000</option>
        </select>
      </div>

      <div>
        <label htmlFor="cf-mensaje" className="form-contacto__label">
          Mensaje
        </label>
        <textarea
          id="cf-mensaje"
          name="mensaje"
          value={campos.mensaje}
          onChange={handleChange}
          placeholder="Contanos de tu proyecto..."
          className="form-contacto__textarea"
          rows={4}
        />
      </div>

      {error && (
        <p className="form-contacto__privacidad" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={enviando}
        className="form-contacto__submit"
      >
        {enviando ? "Enviando..." : "Enviar mensaje"}
      </button>

      <p className="form-contacto__privacidad">
        Tu información es privada y nunca se comparte.
      </p>
    </form>
  );
}
