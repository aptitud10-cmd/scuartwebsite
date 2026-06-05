/**
 * useLenis — Smooth scroll editorial
 *
 * Configura Lenis con duración 1.2s y easing exponencial suave.
 * Conecta Lenis con GSAP ScrollTrigger: cada tick de scroll de Lenis
 * notifica a ScrollTrigger para que los reveals futuros funcionen
 * correctamente con el scroll suavizado (sin este puente, ScrollTrigger
 * lee el scroll nativo del browser que Lenis reemplaza).
 *
 * El setup de ScrollTrigger.update está listo aunque los reveals
 * de sección no estén implementados aún (Entrega 2B+).
 */

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

/* Registrar ScrollTrigger una sola vez a nivel módulo */
gsap.registerPlugin(ScrollTrigger);

export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    /* Puente Lenis → ScrollTrigger: cada frame de scroll actualiza los triggers */
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    /* Loop de RAF — Lenis necesita ser llamado en cada frame */
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
}
