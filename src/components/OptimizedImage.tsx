import { type ImageSrc } from "@/lib/assets";
import { useState } from "react";

interface OptimizedImageProps {
  image: ImageSrc;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  sizes?: string;
  /** Aspect ratio hint for CLS prevention */
  aspectRatio?: string;
  style?: React.CSSProperties;
}

/**
 * Image component optimized for mobile performance.
 * Uses WebP with JPG fallback, lazy loading by default,
 * and proper sizes attribute for responsive images.
 */
export default function OptimizedImage({
  image,
  alt,
  className = "",
  loading = "lazy",
  fetchPriority,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  aspectRatio,
  style,
}: OptimizedImageProps) {
  const [failed, setFailed] = useState(false);
  const imgSrc = failed ? image.jpg : image.webp;

  return (
    <picture>
      <source srcSet={image.webp} type="image/webp" sizes={sizes} />
      <source srcSet={image.jpg} type="image/jpeg" sizes={sizes} />
      <img
        src={imgSrc}
        alt={alt}
        className={className}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        onError={() => setFailed(true)}
        style={{
          contentVisibility: loading === "lazy" ? "auto" : undefined,
          aspectRatio,
          ...style,
        }}
      />
    </picture>
  );
}
