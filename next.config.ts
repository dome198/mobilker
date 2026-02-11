import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-5936efa7ffdc4787bace059ff6c47de1.r2.dev',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
