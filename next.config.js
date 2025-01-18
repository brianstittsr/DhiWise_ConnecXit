/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
    serverActions: {
      bodySizeLimit: '2mb'
    }
  },
  webpack: (config) => {
    config.optimization = {
      minimize: true,
      minimizer: [
        (compiler) => {
          const TerserPlugin = require('terser-webpack-plugin');
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true,
              },
            },
          }).apply(compiler);
        },
      ],
    };
    return config;
  }
};

module.exports = nextConfig;
