import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack configuration for development
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  // Webpack configuration for production builds
  webpack: (config, { isServer }) => {
    // Handle jsPDF and html2canvas for both client and server
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
        encoding: false,
      };
    }
    return config;
  },
  // Transpile packages that need special handling
  transpilePackages: ['jspdf', 'html2canvas'],
};

export default nextConfig;
