import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/UI-UX',
  assetPrefix: '/UI-UX/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
