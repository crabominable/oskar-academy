/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.discordapp.net']
  },
  swcMinify: true
}

module.exports = nextConfig
