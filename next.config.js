/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["prj-tropicana.md-staging.com"],
  },

}

module.exports = nextConfig
