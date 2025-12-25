/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Base path nếu deploy vào subdirectory (ví dụ: /repository-name)
  // basePath: process.env.NODE_ENV === 'production' ? '' : '',
}

module.exports = nextConfig

