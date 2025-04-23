/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during builds
  },
  // Other Next.js config options can go here
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // Disables Next.js image optimization (required for static export)
  },
};

module.exports = nextConfig;