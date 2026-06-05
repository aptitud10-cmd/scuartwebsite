/**
 * CustomCursor — Editorial Cálido
 *
 * Dot: 8px, color tinta (#1A1410). Sigue al mouse exacto.
 * Círculo: 40px, borde tinta translúcido, con spring lag.
 * Hover en interactivos: dot se achica, círculo crece (56px) y se torna terracota.
 *
 * mix-blend: NO usamos mix-blend-difference porque sobre fondo crema
 * produce inversión de color que resulta en un tono feo (crema invertida = azul).
 * Usamos opacidad directa con colores cálidos.
 *
 * Solo se renderiza en desktop con pointer:fine (gateado en App.tsx).
 * prefers-reduced-motion: el cursor sigue funcionando (es interactivo),
 * pero eliminamos transiciones de tamaño.
 */

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const prefersReduced = useReducedMotion() ?? false;

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  /* Círculo sigue con spring — stiffness alta para que no se sienta pesado */
  const springConfig = { stiffness: 160, damping: 16, mass: 0.5 };
  const circleX = useSpring(cursorX, springConfig);
  const circleY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    /* Detecta si el elemento bajo el cursor es interactivo */
    const handleElementHover = (e: Event) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [role='button'], input, select, textarea, [data-cursor-hover]"
      );
      setIsHovering(!!interactive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleElementHover);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleElementHover);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  /* Colores cálidos — sin cyan, sin blend-difference */
  const dotColor = "#1A1410";          /* tinta */
  const circleColorIdle = "rgba(26, 20, 16, 0.25)";      /* tinta 25% */
  const circleColorHover = "rgba(194, 112, 61, 0.45)";   /* terracota 45% */

  return (
    <>
      {/* Dot — sigue exacto, pequeño, tinta */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: dotColor,
          opacity: isVisible ? 1 : 0,
          /* En hover el dot se achica para dar protagonismo al círculo */
          width: isHovering ? 4 : 8,
          height: isHovering ? 4 : 8,
        }}
        transition={
          prefersReduced
            ? {}
            : { width: { duration: 0.18 }, height: { duration: 0.18 } }
        }
      />

      {/* Círculo con lag de spring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border"
        style={{
          x: circleX,
          y: circleY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 0.9 : 0,
        }}
        animate={{
          width: isHovering ? 56 : 40,
          height: isHovering ? 56 : 40,
          borderColor: isHovering ? circleColorHover : circleColorIdle,
        }}
        transition={
          prefersReduced
            ? { duration: 0 }
            : { duration: 0.22, ease: "easeOut" }
        }
      />
    </>
  );
}
