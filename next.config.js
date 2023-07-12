/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '0.0.0.0'
      },
    ]
  }
}


module.exports = nextConfig
