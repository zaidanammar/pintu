/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['flagcdn.com', 's3-ap-southeast-1.amazonaws.com'],
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
