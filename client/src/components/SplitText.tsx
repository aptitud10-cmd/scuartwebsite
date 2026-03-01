import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  once?: boolean;
}

export default function SplitText({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.05,
  as: Tag = "span",
  once = true,
}: SplitTextProps) {
  const words = text.split(" ");

  return (
    <Tag className={className}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            {...(once
              ? {
                  whileInView: { y: "0%", opacity: 1 },
                  viewport: { once: true },
                }
              : {
                  animate: { y: "0%", opacity: 1 },
                })}
            transition={{
              duration: 0.5,
              delay: delay + index * staggerDelay,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {word}
          </motion.span>
          {index < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </Tag>
  );
}
