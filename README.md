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

## Cấu Trúc Dự Án

```
├── app/
│   ├── blog/
│   │   ├── [id]/
│   │   │   └── page.tsx      # Trang chi tiết bài viết
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
└── public/
    └── assets/
        ├── img/
        │   ├── chandung/     # Ảnh chân dung
        │   └── chungnhan/    # Chứng nhận
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

## Deploy

Dự án được cấu hình với `output: 'export'` trong `next.config.js` để tạo static site có thể deploy lên:
- GitHub Pages
- Netlify
- Vercel
- Bất kỳ static hosting nào

## Tác Giả

**Lê Bá Phát**

## License

MIT

