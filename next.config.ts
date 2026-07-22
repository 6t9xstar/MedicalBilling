import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for shared/static hosting.
  // Note: API routes (like /api/contact) will NOT work in export mode.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
};

export default nextConfig;
