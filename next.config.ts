import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Workaround for EISDIR bug on Windows non-C: drives
    config.snapshot = {
      managedPaths: [],
      immutablePaths: [],
    };
    return config;
  },
};

export default nextConfig;
