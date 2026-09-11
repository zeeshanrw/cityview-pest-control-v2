"use client";
// Variants are generated locally by scripts/build-static.mjs, without an image CDN.
export default function staticImageLoader({ src, width }: { src: string; width: number }) {
  return `/optimized${src.replace(/\.[^.]+$/, "")}-${width}.webp`;
}
