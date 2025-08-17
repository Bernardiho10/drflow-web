import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        // Optionally specify a pathname pattern if you want to limit to specific paths
        pathname: '/lrigu76hy/tailark/*',
      },
    ],
  },
};

export default nextConfig;
