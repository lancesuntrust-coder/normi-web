import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    turbopack: {
      rootDirectory: __dirname,
    },
  },
};

export default nextConfig;
