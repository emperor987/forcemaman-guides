const NOISE_SVG = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>`;

/**
 * Fond ambiant du site : halos flous + grain — optimisé mobile.
 * Sur mobile : blur réduit, pas de texture grain, gradient unique.
 * Sur desktop : version complète avec 3 halos + grain.
 */
export default function AmbientBackground() {
  return (
    <>
      {/* Mobile: single lightweight gradient, no blur, no grain */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background sm:hidden"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(74,93,78,0.06), transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(211,158,130,0.06), transparent 60%)",
        }}
      />
      {/* Desktop: full ambient background with blur halos */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 hidden overflow-hidden bg-background sm:block"
      >
        <div
          className="absolute left-0 top-0 h-[70vmin] w-[70vmin] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(74,93,78,0.12), rgba(74,93,78,0) 70%)",
            transform: "translateX(-20%) translateY(-10%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 h-[80vmin] w-[80vmin] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(211,158,130,0.13), rgba(211,158,130,0) 70%)",
            transform: "translateX(10%) translateY(20%)",
          }}
        />
        <div
          className="absolute left-1/2 top-1/3 h-[55vmin] w-[55vmin] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,244,228,0.5), rgba(255,244,228,0) 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.035] mix-blend-multiply"
          style={{ backgroundImage: `url("${NOISE_SVG}")` }}
        />
      </div>
    </>
  );
}
