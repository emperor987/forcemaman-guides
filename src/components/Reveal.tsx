import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Transition delay in ms, for staggering grids */
  delay?: number;
  /** Vertical offset in px before the reveal */
  y?: number;
}

export const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Scroll-reveal wrapper powered by framer-motion.
 * Animates transform/opacity only (GPU friendly), triggers once per element,
 * and is fully disabled when the user prefers reduced motion.
 */
export default function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.55, ease: EASE, delay: reduce ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}
