import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-d52c645f09ae4900a3a3c541035eb1b1.r2.dev',
        pathname: '/mobilker/**',
      },
    ],
  },
};

export default nextConfig;
