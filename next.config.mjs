/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
    formats: ['image/avif', 'image/webp'], // Modern image formats
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048], // Responsive breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Icon sizes
    minimumCacheTTL: 60, // Cache images for 60 seconds
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', 'react-icons'],
  },

  // Production optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console logs in production
  },

  // Enable compression
  compress: true,

  // Optimize JavaScript output
  productionBrowserSourceMaps: false,

  // React strict mode for better performance insights
  reactStrictMode: true,

  // Permanent redirects for blog slugs that dropped a year suffix, so
  // existing external links/search index entries don't dead-end.
  async redirects() {
    return [
      {
        source: '/blogs/in-house-video-editor-vs-agency-what-actually-costs-more-in-2026',
        destination: '/blogs/in-house-video-editor-vs-agency-what-actually-costs-more',
        permanent: true,
      },
      {
        source: '/blogs/navigating-business-evolution-in-2025-from-adaptation-to-leadership',
        destination: '/blogs/navigating-business-evolution-from-adaptation-to-leadership',
        permanent: true,
      },
      {
        source: '/blogs/marketing-in-2025-how-brands-can-thrive-with-hyper-personalisation-and-ai-driven-strategy',
        destination: '/blogs/marketing-how-brands-can-thrive-with-hyper-personalisation-and-ai-driven-strategy',
        permanent: true,
      },
    ];
  },

  // Reduce bundle size with modular imports
  modularizeImports: {
    'react-icons': {
      transform: 'react-icons/{{member}}',
    },
  },
};

export default nextConfig;
