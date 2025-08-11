/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  
  // Image optimization
  images: {
    domains: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Build monitoring
  onBuildStart: async () => {
    if (process.env.NODE_ENV === 'production') {
      const { buildMonitor } = await import('./scripts/build-monitor.js');
      buildMonitor.start();
    }
  },
  
  onBuildComplete: async (buildResult) => {
    if (process.env.NODE_ENV === 'production') {
      const { buildMonitor } = await import('./scripts/build-monitor.js');
      buildMonitor.end(
        buildResult.errors.length === 0,
        buildResult.errors,
        buildResult.warnings
      );
    }
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  }
};

export default nextConfig;
