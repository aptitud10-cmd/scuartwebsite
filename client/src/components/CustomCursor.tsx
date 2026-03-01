import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Circle follows with spring delay
  const springConfig = { stiffness: 150, damping: 15, mass: 0.5 };
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

    // Detect interactive elements for hover state
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

  return (
    <>
      {/* Dot - follows mouse exactly */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-cyan-400 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          width: isHovering ? 4 : 8,
          height: isHovering ? 4 : 8,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ width: { duration: 0.2 }, height: { duration: 0.2 } }}
      />

      {/* Circle - follows with spring delay */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-cyan-400/40"
        style={{
          x: circleX,
          y: circleY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isHovering ? 56 : 40,
          height: isHovering ? 56 : 40,
          borderColor: isHovering
            ? "oklch(0.85 0.18 195 / 0.6)"
            : "oklch(0.85 0.18 195 / 0.3)",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
    </>
  );
}
