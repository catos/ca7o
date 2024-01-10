/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.matprat.no"],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
