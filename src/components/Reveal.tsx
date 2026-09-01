import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Transition delay in ms, for staggering grids */
  delay?: number;
  /** Vertical offset in px before the reveal */
  y?: number;
  /** Animation duration in seconds */
  duration?: number;
}

/**
 * Scroll-reveal wrapper using IntersectionObserver + CSS transitions.
 * Zero framer-motion overhead. Animates transform/opacity only (GPU).
 * Respects prefers-reduced-motion automatically.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  duration = 0.55,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px 20px 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : `translateY(${y}px)`,
        transition: `opacity ${duration}s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform ${duration}s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        willChange: visible ? "auto" : "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}
