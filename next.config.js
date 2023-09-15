/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  rewrites: async () => [
    {
      source: '/api/:path*',
      destination: `${process.env.API_URL}/:path*`,
    }
  ]
}

module.exports = nextConfig
