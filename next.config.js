/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    optimizePackageImports: ["framer-motion", "react-icons"],
  },
  images: {
    // Enable image optimization
    formats: ["image/webp", "image/avif"],
    // Add domains if you're loading external images
    domains: ["localhost"],
    // Configure image sizes for responsive loading
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Enable lazy loading by default
    loader: "default",
    // Optimize images
    minimumCacheTTL: 60,
  },
  webpack: (config, { dev, isServer }) => {
    // Handle CSS imports from node_modules
    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    });

    // Optimize for production
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups.commons.minChunks = 2;
    }

    return config;
  },
  // Handle CSS imports
  transpilePackages: ["react-slick", "slick-carousel"],
  // Suppress warnings
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

module.exports = nextConfig;
