/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
// Lấy tên repo từ GITHUB_REPOSITORY hoặc dùng tên mặc định
const getRepoName = () => {
  if (process.env.GITHUB_REPOSITORY) {
    const repoName = process.env.GITHUB_REPOSITORY.split('/')[1]
    // Nếu repo là username.github.io thì không cần basePath
    if (repoName.includes('.github.io')) {
      return ''
    }
    return `/${repoName}`
  }
  // Nếu không có GITHUB_REPOSITORY (local dev), không dùng basePath
  return ''
}

const basePath = isProd ? getRepoName() : ''
const assetPrefix = isProd ? getRepoName() : ''

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: basePath,
  assetPrefix: assetPrefix,
  // Expose basePath cho client-side
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

module.exports = nextConfig

