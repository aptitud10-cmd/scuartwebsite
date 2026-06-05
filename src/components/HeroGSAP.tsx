/**
 * HeroGSAP.tsx — Isla React con animacion GSAP del hero
 * Implementa motion §13 DESIGN_RESPONSIVE.md:
 *   1. Word reveal H1 (yPercent+opacity expo.out 0.9s stagger 0.08s por palabra)
 *   2. Palabra(s) roja(s) con delay 0.25s adicional
 *   3. prefers-reduced-motion: todo visible desde inicio, sin animacion
 *
 * v2 (i18n): el copy viene como props — no hardcodeado.
 * Soporta N palabras rojas contiguas (ej: "STANDS OUT" en EN).
 *
 * Estrategia de animacion: WORD-BY-WORD (no char-by-char).
 * Razon: con inline-block por CHAR el browser puede romper mid-word.
 * Con inline-block por PALABRA el word-wrap es natural y el reveal funciona.
 */

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export interface HeroWord {
  word: string;
  isRed?: boolean;
}

interface HeroGSAPProps {
  /** ReadonlyArray para compatibilidad con diccionarios i18n (no requieren mutabilidad) */
  line1: ReadonlyArray<HeroWord>;
  line2: ReadonlyArray<HeroWord>;
}

interface WordSpanProps {
  word: string;
  isRed?: boolean;
  lineClass: string;
}

/* Cada palabra en un inline-block con overflow:hidden para el reveal */
function WordSpan({ word, isRed = false, lineClass }: WordSpanProps) {
  return (
    /* Contenedor overflow:hidden — clip el reveal yPercent */
    <span
      className={`word-clip ${isRed ? 'word-clip--rojo' : ''} word-in-${lineClass}`.trim()}
      aria-hidden="true"
    >
      {/* El span interno es el que se anima (yPercent sale de abajo) */}
      <span className={`word ${isRed ? 'word-rojo' : ''}`.trim()}>
        {word}
      </span>
    </span>
  );
}

/* Espacio entre palabras */
function Space() {
  return <span aria-hidden="true"> </span>;
}

/** Renderiza una linea del H1 con sus WordSpans intercalados con Space */
function HeroLine({ words, lineClass }: { words: ReadonlyArray<HeroWord>; lineClass: string }) {
  return (
    <>
      {words.map((token, i) => (
        <span key={i}>
          {i > 0 && <Space />}
          <WordSpan word={token.word} isRed={token.isRed} lineClass={lineClass} />
        </span>
      ))}
    </>
  );
}

export default function HeroGSAP({ line1, line2 }: HeroGSAPProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const container = containerRef.current;
    if (!container || reducedMotion) return;

    /* Palabras no-rojas de linea 1 */
    const wordsLine1NoRojo = container.querySelectorAll<HTMLElement>('.word-in-line-1 .word:not(.word-rojo)');
    /* Palabras rojas de linea 1 (puede ser 1 o 2 para EN) */
    const wordsRojo = container.querySelectorAll<HTMLElement>('.word-in-line-1 .word-rojo');
    /* Todas las palabras de linea 2 */
    const wordsLine2 = container.querySelectorAll<HTMLElement>('.word-in-line-2 .word');

    /* Estado inicial: palabras fuera de vista (debajo del clip) */
    gsap.set([wordsLine1NoRojo, wordsLine2], { yPercent: 110 });
    if (wordsRojo.length > 0) {
      gsap.set(wordsRojo, { yPercent: 110 });
    }

    /* Activar overflow:hidden en los word-clips */
    container.classList.add('will-animate');

    const tl = gsap.timeline({
      defaults: { ease: 'expo.out' },
      /* Delay: esperar que las lineas de grilla terminen (1.1s) */
      delay: 0.4,
    });

    /* Linea 1: palabras no-rojas primero */
    tl.to(wordsLine1NoRojo, {
      yPercent: 0,
      duration: 0.85,
      stagger: 0.08,
    });

    /* Palabras rojas (DISTINTA. / STANDS OUT) — delay 0.25s despues del inicio */
    if (wordsRojo.length > 0) {
      tl.to(wordsRojo, {
        yPercent: 0,
        duration: 0.85,
        stagger: 0.05, /* stagger pequeño si son 2 palabras (STANDS OUT) */
      }, '<+0.25');
    }

    /* Linea 2 */
    tl.to(wordsLine2, {
      yPercent: 0,
      duration: 0.85,
      stagger: 0.06,
    }, '<+0.15');

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="hero-gsap-container" aria-hidden="true">
      {/* Linea 1 */}
      <div className="line-1 h1-line">
        <HeroLine words={line1} lineClass="line-1" />
      </div>

      {/* Linea 2 */}
      <div className="line-2 h1-line">
        <HeroLine words={line2} lineClass="line-2" />
      </div>
    </div>
  );
}
