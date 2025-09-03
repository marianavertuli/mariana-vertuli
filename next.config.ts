import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [50, 75, 100],
    remotePatterns: [new URL('https://cdn.cosmicjs.com/**')]
  },
};

export default nextConfig;
