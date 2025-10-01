/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // allows local images to render without optimization
  },
};

module.exports = nextConfig;
