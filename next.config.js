/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/fabrica_bolos' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/fabrica_bolos/' : '',
}

module.exports = nextConfig
