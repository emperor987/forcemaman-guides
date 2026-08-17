import { BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface EbookCoverProps {
  title: string;
  accent: string;
  textClass?: string;
  className?: string;
  iconSize?: string;
  titleSize?: string;
  showLabel?: boolean;
}

export default function EbookCover({
  title,
  accent,
  textClass = "text-white",
  className,
  iconSize = "h-10 w-10",
  titleSize = "text-base",
  showLabel = true,
}: EbookCoverProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl p-6",
        accent,
        className,
      )}
      style={{
        boxShadow:
          "0 30px 60px -28px rgba(35,33,32,0.45), inset 0 1px 0 rgba(255,255,255,0.35)",
      }}
      aria-hidden="true"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-white/10 blur-2xl"
      />
      <BookOpen className={cn(iconSize, "opacity-90", textClass)} />
      <p
        className={cn(
          "font-serif text-center leading-snug",
          titleSize,
          textClass,
        )}
      >
        {title}
      </p>
      {showLabel && (
        <span
          className={cn(
            "text-[0.6rem] uppercase tracking-widest opacity-80",
            textClass,
          )}
        >
          ForceMaman
        </span>
      )}
    </div>
  );
}
