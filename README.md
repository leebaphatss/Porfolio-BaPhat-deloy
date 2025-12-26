# Portfolio Blog - Lê Bá Phát

Blog cá nhân chia sẻ về lập trình mạng, tập trung vào Java & JavaScript.

## Yêu Cầu Đồ Án

- ✅ Phát triển trang Blog cá nhân chia sẻ về lập trình mạng
- ✅ Chia sẻ bài viết theo các khóa học về Java & JavaScript
- ✅ Menu bao gồm trang Home & trang Blog
- ✅ Giới thiệu Profile cá nhân & ít nhất 9 bài post về Java & JavaScript bằng tiếng Việt
- ✅ Thiết kế đẹp tối giản với phong cách Neobrutalism
- ✅ Sử dụng Next.js với SSG (Static Site Generation)
- ✅ Sử dụng Shadcn UI với styling Neobrutalism

## Công Nghệ Sử Dụng

- **Next.js 14** - React framework với SSG
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Shadcn UI** - UI components
- **Neobrutalism Design** - Phong cách thiết kế

## Cài Đặt

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Start production server
npm start
```

## Deploy lên GitHub Pages

Dự án đã được cấu hình sẵn để deploy tự động lên GitHub Pages:

1. **Push code lên GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Bật GitHub Pages:**
   - Vào Settings → Pages trong repository
   - Source: chọn **GitHub Actions**
   - Workflow sẽ tự động chạy khi push lên nhánh `main`

3. **Kiểm tra deploy:**
   - Vào tab **Actions** để xem quá trình build và deploy
   - Sau khi hoàn thành, website sẽ có tại: `https://[username].github.io/[repository-name]`

## Cấu Trúc Dự Án

```
├── app/
│   ├── blog/
│   │   ├── [id]/
│   │   │   ├── page.tsx      # Trang chi tiết bài viết
│   │   │   └── BlogPostContent.tsx
│   │   └── page.tsx          # Trang danh sách blog
│   ├── globals.css           # Global styles với Neobrutalism
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Trang Home
│   └── not-found.tsx         # 404 page
├── components/
│   ├── navigation.tsx        # Navigation component
│   └── ui/                   # Shadcn UI components
├── lib/
│   ├── blog-posts.ts         # Dữ liệu bài viết
│   └── utils.ts              # Utility functions
├── public/
│   └── assets/
│       ├── img/
│       │   ├── chandung/     # Ảnh chân dung
│       │   └── chungnhan/    # Chứng nhận
└── .github/
    └── workflows/
        └── deploy.yml        # GitHub Actions workflow
```

## Bài Viết

Blog hiện có **9 bài viết** về Java & JavaScript:

### Java (4 bài)
1. Giới Thiệu Về Java - Ngôn Ngữ Lập Trình Mạnh Mẽ
2. Lập Trình Hướng Đối Tượng Trong Java
3. Java Collections Framework - Cấu Trúc Dữ Liệu Mạnh Mẽ
4. Xử Lý Exception Trong Java

### JavaScript (5 bài)
1. JavaScript Cơ Bản - Ngôn Ngữ Của Web
2. Thao Tác DOM Với JavaScript
3. Async/Await và Promises Trong JavaScript
4. ES6+ Features - Những Tính Năng Hiện Đại Của JavaScript
5. Fetch API - Giao Tiếp Với Server Trong JavaScript

## Tác Giả

**Lê Bá Phát**

## License

MIT
