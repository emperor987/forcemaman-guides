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
        "flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-ink p-6",
        accent,
        className,
      )}
      aria-hidden="true"
    >
      <BookOpen className={cn(iconSize, "opacity-90", textClass)} />
      <p
        className={cn(
          "font-display text-center leading-snug font-semibold",
          titleSize,
          textClass,
        )}
      >
        {title}
      </p>
      {showLabel && (
        <span
          className={cn(
            "text-[0.6rem] uppercase tracking-widest opacity-70",
            textClass,
          )}
        >
          ForceMaman
        </span>
      )}
    </div>
  );
}
