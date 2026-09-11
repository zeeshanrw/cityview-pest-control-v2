import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.STATIC_EXPORT === "true" ? { output: "export" as const } : {}),
  poweredByHeader: false,
  headers: process.env.STATIC_EXPORT === "true" ? undefined : async () => {
    return [{ source: "/:path*", headers: [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      // Next prerendered pages use inline hydration scripts. Keep eval development-only.
      { key: "Content-Security-Policy", value: `default-src 'self'; script-src 'self' 'unsafe-inline'${process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : ""}; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self'${process.env.NODE_ENV === "development" ? " ws: wss:" : ""}; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'` },
    ] }];
  },
  images: {
    qualities: [75, 90],
    ...(process.env.STATIC_EXPORT === "true" ? { loader: "custom" as const, loaderFile: "./src/lib/static-image-loader.ts", deviceSizes: [320, 640, 960, 1280, 1920], imageSizes: [64, 128, 256] } : {}),
  },
};

export default nextConfig;
