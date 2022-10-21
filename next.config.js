/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'listlabs.com'
    ]
  }
}

module.exports = nextConfig
