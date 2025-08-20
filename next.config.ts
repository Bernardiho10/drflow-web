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
      {
        protocol: 'https',
        hostname: 'alt.tailus.io',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'html.tailus.io',
        pathname: '/blocks/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/photo-*',
      },
    ],
  },
};

export default nextConfig;