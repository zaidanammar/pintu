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
  rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API}/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
