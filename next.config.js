/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/fabrica_bolos',
  trailingSlash: true,
}

module.exports = nextConfig
