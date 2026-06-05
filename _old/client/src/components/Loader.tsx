/**
 * Loader de entrada — SCUART Editorial Cálido
 *
 * Comportamiento:
 * - Primera visita de la sesión: loader completo (~2.2s) con reveal char-by-char
 *   de "SCUART" + contador numérico 0→100 en esquina inferior derecha
 *   + barra de progreso terracota en la base.
 * - Visitas siguientes (sessionStorage key "scuart_loaded"): omitido, onComplete
 *   se llama de inmediato y el componente no renderiza nada.
 * - Salida: slide-up limpia con easing [0.76,0,0.24,1], revelando el hero detrás.
 * - prefers-reduced-motion: fade breve (300ms), sin contador ni char-stagger.
 *
 * Nota técnica: SplitText existente divide por PALABRA. Este loader implementa
 * su propio split char-by-char con máscara overflow-hidden — es diferente y no
 * hay razón para reutilizar SplitText aquí.
 */

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SESSION_KEY = "scuart_loaded";

/* Easings — tuplas para framer-motion v12 */
const EASE_OUT = [0.16, 1, 0.3, 1] as const;
const EASE_EXIT = [0.76, 0, 0.24, 1] as const;

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const prefersReduced = useReducedMotion() ?? false;

  /* Evaluado una sola vez al montar — sin re-renders por sessionStorage */
  const [shouldShow] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return !sessionStorage.getItem(SESSION_KEY);
  });

  const [phase, setPhase] = useState<"entering" | "idle" | "exiting">("entering");
  const [count, setCount] = useState(0);
  const countRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!shouldShow) {
      /* Segunda visita en la sesión: no mostrar, completar de inmediato */
      onComplete();
      return;
    }

    /* Marcar la sesión apenas el loader se muestra */
    sessionStorage.setItem(SESSION_KEY, "1");

    if (prefersReduced) {
      /* Reduced-motion: fade corto, sin animaciones de letras ni contador */
      const t = setTimeout(() => {
        setPhase("exiting");
        setTimeout(onComplete, 400);
      }, 300);
      return () => clearTimeout(t);
    }

    /* Contador 0→100 en 2000ms (20ms por tick) */
    const intervalMs = 20;
    countRef.current = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          if (countRef.current) clearInterval(countRef.current);
          return 100;
        }
        return prev + 1;
      });
    }, intervalMs);

    /* Timeline: entrar → mantener → salir */
    const idleTimer = setTimeout(() => setPhase("idle"), 100);
    const exitTimer = setTimeout(() => {
      setPhase("exiting");
      /* onComplete después de que la animación de salida termina (~700ms) */
      setTimeout(onComplete, 700);
    }, 2200);

    return () => {
      clearTimeout(idleTimer);
      clearTimeout(exitTimer);
      if (countRef.current) clearInterval(countRef.current);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /* Sin render si no corresponde mostrar el loader */
  if (!shouldShow) return null;

  const letters = "SCUART".split("");

  return (
    <AnimatePresence>
      {phase !== "exiting" && (
        <motion.div
          key="loader"
          className="fixed inset-0 bg-crema z-[9999] flex items-center justify-center"
          exit={
            prefersReduced
              ? { opacity: 0 }
              : { y: "-100%", transition: { duration: 0.7, ease: EASE_EXIT } }
          }
        >
          {/* "SCUART" — char-by-char con máscara de reveal desde abajo */}
          <div
            className="flex items-end select-none"
            aria-label="SCUART"
            role="presentation"
          >
            {letters.map((char, i) => (
              /* overflow-hidden actúa como máscara: el y:"110%" inicial queda oculto */
              <span key={i} className="inline-block overflow-hidden leading-none">
                <motion.span
                  className="loader-letter"
                  initial={prefersReduced ? { y: 0 } : { y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: prefersReduced ? 0 : 0.65,
                    delay: prefersReduced ? 0 : 0.1 + i * 0.06,
                    ease: EASE_OUT,
                  }}
                >
                  {char}
                </motion.span>
              </span>
            ))}
          </div>

          {/* Contador 000→100 — esquina inferior derecha */}
          {!prefersReduced && (
            <motion.div
              className="absolute bottom-8 right-8 md:bottom-10 md:right-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              aria-hidden="true"
            >
              <span className="loader-counter">
                {String(count).padStart(3, "0")}
              </span>
            </motion.div>
          )}

          {/* Barra de progreso terracota — base de la pantalla */}
          {!prefersReduced && (
            <motion.div
              className="absolute bottom-0 left-0 h-[2px] bg-terracota"
              initial={{ width: "0%" }}
              animate={{ width: `${count}%` }}
              transition={{ duration: 0.05, ease: "linear" }}
              aria-hidden="true"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
