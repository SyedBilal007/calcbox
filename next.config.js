/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  experimental: {
    // optimizeCss: true, // Removed to fix critters error
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Optimize for Vercel deployment
  output: 'standalone',
  trailingSlash: false,
}

module.exports = nextConfig
