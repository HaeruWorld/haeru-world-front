const path = require('path');
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };

    return config;
  },

  images: {
    domains: ['haeruworld.s3.ap-northeast-2.amazonaws.com'],
  },
};

module.exports = nextConfig;
