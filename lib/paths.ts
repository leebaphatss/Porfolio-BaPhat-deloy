// Helper để xử lý paths với basePath cho GitHub Pages
export function getAssetPath(path: string): string {
  // Nếu đã có basePath trong path thì không thêm nữa
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('//')) {
    return path
  }
  
  // Lấy basePath từ next.config.js hoặc environment
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  
  // Đảm bảo path bắt đầu bằng /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  
  // Kết hợp basePath và path
  return `${basePath}${normalizedPath}`
}

