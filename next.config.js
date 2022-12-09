/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: ["cdn.discordapp.com", "awv3node-homepage.surge.sh"],
  },
}
