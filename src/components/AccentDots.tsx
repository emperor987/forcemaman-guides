import { cn } from "@/lib/utils";

/**
 * Motif signature ForceMaman : trois pastilles dans les trois couleurs
 * d'accent de la marque (terracotta, sauge, mauve). Utilisé sous les
 * eyebrows de section pour donner une identité visuelle unique et
 * cohérente à travers le site.
 */
export default function AccentDots({
  className,
  size = "sm",
}: {
  className?: string;
  size?: "sm" | "md";
}) {
  const dot = size === "md" ? "size-2" : "size-1.5";
  return (
    <span
      aria-hidden="true"
      className={cn("inline-flex items-center gap-1.5", className)}
    >
      <span className={cn(dot, "rounded-full bg-brand-terracotta")} />
      <span className={cn(dot, "rounded-full bg-brand-sage")} />
      <span className={cn(dot, "rounded-full bg-brand-mauve")} />
    </span>
  );
}
