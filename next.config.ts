import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // WARNING: This allows production builds to successfully complete even if there are type errors.
    ignoreBuildErrors: true,
  },
  eslint: {
    // WARNING: This allows production builds to successfully complete even if there are linting errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
