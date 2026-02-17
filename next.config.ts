import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: false,
    domains: ['localhost', 'coloriagehaitam.com'],
  },
};

export default nextConfig;