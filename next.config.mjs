/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow Next.js Image Optimization to work on Vercel
    // for images stored in /public folder
    unoptimized: false,

    // Accepted image formats
    formats: ['image/avif', 'image/webp'],

    // Image size breakpoints for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Minimum cache TTL (1 hour)
    minimumCacheTTL: 3600,
  },

  // Compress output
  compress: true,

  // Strict mode helps catch issues early
  reactStrictMode: true,

  // Allow large page data (needed if you pass large props)
  experimental: {
    largePageDataBytes: 128 * 1024, // 128KB
  },
};

export default nextConfig;
