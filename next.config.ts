import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    // Disables ESLint at build time
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
