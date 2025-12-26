export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  category: string
  technologies: string[]
  images?: string[]
  githubUrl?: string
  demoUrl?: string
  features: string[]
  date: string
}

export const projects: Project[] = [
  {
    id: "php-ecommerce",
    title: "PHP Ecommerce",
    description: "Website thương mại điện tử được xây dựng bằng PHP thuần, hỗ trợ đầy đủ các tính năng mua sắm online.",
    longDescription: `
# PHP Ecommerce - Website Thương Mại Điện Tử

Dự án website thương mại điện tử được xây dựng hoàn toàn bằng PHP thuần, không sử dụng framework. 
Đây là một dự án học tập giúp tôi hiểu sâu về cách xây dựng một hệ thống ecommerce từ đầu.

## Giới Thiệu

Website thương mại điện tử này được phát triển với mục tiêu học tập và thực hành các kỹ năng lập trình web backend. 
Dự án bao gồm đầy đủ các tính năng cơ bản của một hệ thống ecommerce như quản lý sản phẩm, giỏ hàng, thanh toán, 
và quản trị viên.

## Tính Năng Chính

### 1. Quản Lý Sản Phẩm
- Thêm, sửa, xóa sản phẩm với đầy đủ thông tin (tên, mô tả, giá, hình ảnh)
- Phân loại sản phẩm theo danh mục (category)
- Tìm kiếm sản phẩm theo tên, danh mục
- Lọc sản phẩm theo giá, danh mục
- Hiển thị chi tiết sản phẩm với hình ảnh và mô tả đầy đủ
- Pagination cho danh sách sản phẩm

### 2. Giỏ Hàng & Thanh Toán
- Thêm sản phẩm vào giỏ hàng
- Cập nhật số lượng sản phẩm trong giỏ hàng
- Xóa sản phẩm khỏi giỏ hàng
- Tính tổng tiền tự động (bao gồm VAT nếu có)
- Lưu giỏ hàng vào session
- Xử lý đơn hàng và thanh toán
- Lưu lịch sử đơn hàng

### 3. Quản Lý Người Dùng
- Đăng ký tài khoản với validation
- Đăng nhập/Đăng xuất an toàn
- Quản lý thông tin cá nhân (tên, email, địa chỉ, số điện thoại)
- Đổi mật khẩu
- Lịch sử đơn hàng của user
- Quên mật khẩu (reset password)

### 4. Admin Panel
- Dashboard quản lý với thống kê tổng quan
- Quản lý sản phẩm (CRUD đầy đủ)
- Quản lý đơn hàng (xem, cập nhật trạng thái, xóa)
- Quản lý người dùng (xem danh sách, khóa/mở khóa tài khoản)
- Quản lý danh mục sản phẩm
- Thống kê doanh thu theo ngày/tháng/năm
- Export báo cáo Excel

## Công Nghệ Sử Dụng

- **Backend**: PHP 7.4+
- **Database**: MySQL 5.7+
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Session Management**: PHP Sessions
- **Security**: 
  - Password hashing với \`password_hash()\`
  - Prepared statements để chống SQL injection
  - Input validation và sanitization
  - CSRF protection

## Cấu Trúc Dự Án

\`\`\`
php-ecommerce/
├── admin/              # Admin panel
│   ├── dashboard.php
│   ├── products.php
│   ├── orders.php
│   └── users.php
├── assets/             # Static files
│   ├── css/
│   ├── js/
│   └── images/
├── config/             # Configuration
│   └── database.php
├── includes/           # Common files
│   ├── header.php
│   ├── footer.php
│   └── functions.php
├── pages/              # User pages
│   ├── home.php
│   ├── products.php
│   ├── product-detail.php
│   ├── cart.php
│   └── checkout.php
└── index.php           # Entry point
\`\`\`

## Cài Đặt

### Yêu Cầu Hệ Thống
- PHP >= 7.4
- MySQL >= 5.7
- Apache/Nginx web server
- Composer (tùy chọn)

### Các Bước Cài Đặt

1. **Clone repository:**
\`\`\`bash
git clone https://github.com/yourusername/php-ecommerce.git
cd php-ecommerce
\`\`\`

2. **Cấu hình database:**
   - Tạo database mới trong MySQL
   - Import file \`database.sql\` vào database
   - Cập nhật thông tin kết nối trong \`config/database.php\`

3. **Cấu hình web server:**
   - Đặt thư mục dự án vào \`htdocs\` (XAMPP) hoặc \`www\` (WAMP)
   - Truy cập \`http://localhost/php-ecommerce\`

4. **Tạo tài khoản admin:**
   - Đăng ký tài khoản đầu tiên
   - Cập nhật role thành \`admin\` trong database

## Hướng Dẫn Sử Dụng

### Cho Người Dùng

1. **Đăng ký/Đăng nhập:**
   - Truy cập trang đăng ký để tạo tài khoản mới
   - Đăng nhập với email và mật khẩu

2. **Mua sắm:**
   - Duyệt danh sách sản phẩm
   - Xem chi tiết sản phẩm
   - Thêm sản phẩm vào giỏ hàng
   - Thanh toán và đặt hàng

3. **Quản lý đơn hàng:**
   - Xem lịch sử đơn hàng trong tài khoản
   - Theo dõi trạng thái đơn hàng

### Cho Admin

1. **Quản lý sản phẩm:**
   - Thêm/sửa/xóa sản phẩm
   - Upload hình ảnh sản phẩm
   - Quản lý danh mục

2. **Quản lý đơn hàng:**
   - Xem danh sách đơn hàng
   - Cập nhật trạng thái đơn hàng
   - Xem chi tiết đơn hàng

3. **Thống kê:**
   - Xem dashboard với các thống kê tổng quan
   - Export báo cáo

## Bài Học Rút Ra

Dự án này giúp tôi:
- Hiểu rõ cách PHP xử lý request/response
- Làm việc với database MySQL và các thao tác CRUD
- Xây dựng hệ thống authentication và authorization
- Xử lý form và validation dữ liệu đầu vào
- Quản lý session và cookies
- Bảo mật ứng dụng web (SQL injection, XSS, CSRF)
- Tổ chức code và cấu trúc dự án
- Xây dựng giao diện người dùng với HTML/CSS/JS
    `.trim(),
    category: "Web Development",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    ],
    features: [
      "Quản lý sản phẩm đầy đủ",
      "Giỏ hàng và thanh toán",
      "Hệ thống đăng ký/đăng nhập",
      "Admin panel quản lý",
      "Tìm kiếm và lọc sản phẩm"
    ],
    date: "2024-10-15"
  },
  {
    id: "flutter-inventory",
    title: "Flutter Quản Lý Kho",
    description: "Ứng dụng mobile quản lý kho hàng được phát triển bằng Flutter, hỗ trợ quản lý nhập xuất kho hiệu quả.",
    longDescription: `
# Flutter Quản Lý Kho - Ứng Dụng Mobile

Ứng dụng quản lý kho hàng được phát triển bằng Flutter, giúp doanh nghiệp quản lý hàng hóa một cách hiệu quả và chuyên nghiệp. 
Ứng dụng hỗ trợ làm việc offline và đồng bộ dữ liệu với server khi có kết nối internet.

## Giới Thiệu

Đây là ứng dụng mobile được phát triển để giải quyết bài toán quản lý kho hàng cho các doanh nghiệp vừa và nhỏ. 
Ứng dụng cho phép quản lý sản phẩm, nhập xuất kho, thống kê và báo cáo một cách trực quan và dễ sử dụng.

## Tính Năng Chính

### 1. Quản Lý Sản Phẩm
- Thêm mới sản phẩm với đầy đủ thông tin (tên, mã SKU, giá, mô tả, hình ảnh)
- Cập nhật thông tin sản phẩm
- Xóa sản phẩm (soft delete)
- Tìm kiếm sản phẩm nhanh chóng theo tên, mã SKU
- Quét mã vạch để tìm sản phẩm nhanh
- Phân loại sản phẩm theo danh mục
- Quản lý số lượng tồn kho

### 2. Nhập/Xuất Kho
- Ghi nhận phiếu nhập kho với chi tiết sản phẩm, số lượng, giá nhập
- Ghi nhận phiếu xuất kho
- Xem lịch sử nhập xuất chi tiết theo ngày/tháng
- In phiếu nhập xuất (PDF)
- Báo cáo tồn kho theo thời gian
- Cảnh báo sản phẩm sắp hết hàng

### 3. Thống Kê & Báo Cáo
- Dashboard với tổng quan kho hàng
- Tổng số sản phẩm trong kho
- Tổng giá trị hàng hóa
- Sản phẩm sắp hết hàng (dưới ngưỡng cảnh báo)
- Sản phẩm tồn kho lâu (không có nhập xuất trong thời gian dài)
- Biểu đồ thống kê xu hướng nhập xuất
- Xuất báo cáo Excel/PDF

### 4. Đồng Bộ Dữ Liệu
- Đồng bộ dữ liệu với server qua RESTful API
- Làm việc offline hoàn toàn (lưu trữ local bằng SQLite)
- Tự động sync khi có internet
- Xử lý conflict khi có thay đổi đồng thời
- Backup dữ liệu lên cloud
- Restore dữ liệu từ backup

## Công Nghệ Sử Dụng

- **Framework**: Flutter 3.x
- **Language**: Dart 3.0+
- **State Management**: Provider / Riverpod
- **Local Database**: SQLite (sqflite package)
- **Cloud Database**: Firebase Firestore
- **API**: RESTful API với Dio
- **UI**: Material Design 3
- **Charts**: fl_chart package

## Cấu Trúc Dự Án

\`\`\`
lib/
├── main.dart
├── models/           # Data models
│   ├── product.dart
│   ├── inventory.dart
│   └── user.dart
├── screens/          # UI screens
│   ├── home/
│   ├── products/
│   ├── inventory/
│   └── settings/
├── services/         # Business logic
│   ├── database_service.dart
│   ├── api_service.dart
│   └── sync_service.dart
├── providers/        # State management
│   └── product_provider.dart
├── widgets/          # Reusable widgets
└── utils/            # Utilities
\`\`\`

## Cài Đặt

### Yêu Cầu
- Flutter SDK >= 3.0
- Dart >= 3.0
- Android Studio / VS Code
- Android SDK / Xcode (cho iOS)

### Các Bước Cài Đặt

1. **Clone repository:**
\`\`\`bash
git clone https://github.com/yourusername/flutter-inventory.git
cd flutter-inventory
\`\`\`

2. **Cài đặt dependencies:**
\`\`\`bash
flutter pub get
\`\`\`

3. **Cấu hình Firebase (nếu sử dụng):**
   - Tạo project Firebase
   - Tải file \`google-services.json\` (Android) và \`GoogleService-Info.plist\` (iOS)
   - Đặt vào thư mục tương ứng

4. **Chạy ứng dụng:**
\`\`\`bash
flutter run
\`\`\`

## Hướng Dẫn Sử Dụng

### Quản Lý Sản Phẩm

1. **Thêm sản phẩm mới:**
   - Vào màn hình "Sản phẩm"
   - Nhấn nút "+" để thêm mới
   - Điền thông tin sản phẩm
   - Chụp hoặc chọn hình ảnh
   - Lưu sản phẩm

2. **Tìm kiếm sản phẩm:**
   - Sử dụng thanh tìm kiếm ở đầu màn hình
   - Hoặc quét mã vạch bằng camera

3. **Cập nhật số lượng:**
   - Chọn sản phẩm
   - Nhấn "Cập nhật" và nhập số lượng mới

### Nhập/Xuất Kho

1. **Tạo phiếu nhập:**
   - Vào "Nhập kho"
   - Chọn sản phẩm
   - Nhập số lượng và giá nhập
   - Xác nhận phiếu nhập

2. **Tạo phiếu xuất:**
   - Tương tự như nhập kho
   - Hệ thống tự động kiểm tra số lượng tồn kho

### Thống Kê

- Xem dashboard tổng quan ở màn hình chính
- Xem biểu đồ thống kê trong mục "Báo cáo"
- Xuất báo cáo Excel/PDF

## Giao Diện

- **Material Design 3**: Giao diện hiện đại, đẹp mắt
- **Dark mode**: Hỗ trợ chế độ tối
- **Responsive**: Tự động điều chỉnh trên các kích thước màn hình
- **Intuitive navigation**: Điều hướng trực quan, dễ sử dụng
- **Smooth animations**: Hiệu ứng mượt mà, chuyên nghiệp

## Bài Học Rút Ra

Dự án này giúp tôi:
- Làm việc với Flutter và Dart một cách chuyên sâu
- Quản lý state trong Flutter với Provider/Riverpod
- Làm việc với local database (SQLite) cho offline support
- Tích hợp RESTful API và xử lý async operations
- Xây dựng UI/UX đẹp mắt cho mobile app
- Xử lý đồng bộ dữ liệu giữa local và server
- Quản lý dependencies và packages trong Flutter
- Testing và debugging ứng dụng Flutter
    `.trim(),
    category: "Mobile Development",
    technologies: ["Flutter", "Dart", "SQLite", "Firebase", "REST API"],
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop"
    ],
    features: [
      "Quản lý sản phẩm và kho hàng",
      "Nhập xuất kho tự động",
      "Thống kê và báo cáo",
      "Làm việc offline",
      "Đồng bộ dữ liệu cloud"
    ],
    date: "2024-11-20"
  },
  {
    id: "cnn-basic",
    title: "CNN Cơ Bản",
    description: "Dự án học máy sử dụng Convolutional Neural Network để nhận diện hình ảnh, được xây dựng với Python và TensorFlow.",
    longDescription: `
# CNN Cơ Bản - Nhận Diện Hình Ảnh

Dự án học máy sử dụng Convolutional Neural Network (CNN) để nhận diện và phân loại hình ảnh. 
Đây là dự án đầu tiên của tôi về Deep Learning và Computer Vision.

## Mục Tiêu Dự Án

Xây dựng một mô hình CNN có thể:
- Nhận diện các đối tượng trong hình ảnh
- Phân loại hình ảnh theo các category
- Đạt độ chính xác cao trên dataset test

## Kiến Trúc Mô Hình

### 1. Convolutional Layers
- Conv2D layers với ReLU activation
- MaxPooling để giảm kích thước
- Batch Normalization để tăng tốc độ training

### 2. Fully Connected Layers
- Dense layers với dropout
- Softmax activation cho classification
- Output layer với số lượng classes

### 3. Training Process
- Data augmentation để tăng dataset
- Early stopping để tránh overfitting
- Learning rate scheduling
- Model checkpointing

## Dataset

- **Dataset**: CIFAR-10 / Custom dataset
- **Số lượng classes**: 10 categories
- **Kích thước ảnh**: 32x32 hoặc 224x224
- **Train/Test split**: 80/20

## Kết Quả

- **Accuracy**: ~85-90% trên test set
- **Training time**: ~2-3 giờ trên GPU
- **Model size**: ~50MB

## Công Nghệ Sử Dụng

- **Language**: Python 3.8+
- **Deep Learning**: TensorFlow / Keras
- **Data Processing**: NumPy, Pandas
- **Visualization**: Matplotlib
- **GPU**: CUDA (nếu có)

## Bài Học Rút Ra

Dự án này giúp tôi:
- Hiểu về CNN và cách hoạt động
- Xử lý dữ liệu hình ảnh
- Training và fine-tuning mô hình
- Đánh giá và cải thiện model performance
- Làm việc với GPU cho deep learning
    `.trim(),
    category: "Machine Learning",
    technologies: ["Python", "TensorFlow", "Keras", "NumPy", "OpenCV"],
    images: [
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&h=600&fit=crop"
    ],
    features: [
      "Nhận diện hình ảnh chính xác",
      "Mô hình CNN tối ưu",
      "Data augmentation",
      "Visualization kết quả",
      "Export model để sử dụng"
    ],
    date: "2024-09-10"
  },
  {
    id: "java-socket-chat",
    title: "Java Socket Chat",
    description: "Ứng dụng chat real-time sử dụng Java Socket Programming, cho phép nhiều người dùng chat với nhau qua mạng.",
    longDescription: `
# Java Socket Chat - Ứng Dụng Chat Real-time

Ứng dụng chat real-time được xây dựng bằng Java Socket Programming, cho phép nhiều client kết nối 
và chat với nhau thông qua một server trung tâm.

## Kiến Trúc Hệ Thống

### 1. Server Side
- **ServerSocket**: Lắng nghe kết nối từ clients
- **Multi-threading**: Mỗi client được xử lý trong thread riêng
- **Message Broadcasting**: Gửi tin nhắn đến tất cả clients
- **User Management**: Quản lý danh sách users online

### 2. Client Side
- **Socket**: Kết nối đến server
- **GUI**: Swing interface cho giao diện người dùng
- **Message Handling**: Gửi và nhận tin nhắn
- **Connection Management**: Xử lý kết nối/ngắt kết nối

## Tính Năng

- Chat real-time với nhiều users
- Hiển thị danh sách users online
- Thông báo khi user join/leave
- Private messaging (1-1 chat)
- File transfer (gửi file qua chat)
- Emoji support
- Message history

## Công Nghệ Sử Dụng

- **Language**: Java
- **Networking**: Java Socket API
- **GUI**: Java Swing
- **Threading**: Multi-threading
- **Protocol**: TCP/IP

## Bài Học Rút Ra

Dự án này giúp tôi:
- Hiểu về Socket Programming
- Làm việc với TCP/IP protocol
- Xử lý multi-threading trong Java
- Xây dựng ứng dụng client-server
- Quản lý kết nối mạng
    `.trim(),
    category: "Network Programming",
    technologies: ["Java", "Socket Programming", "Swing", "Multi-threading", "TCP/IP"],
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop"
    ],
    features: [
      "Chat real-time multi-user",
      "Private messaging",
      "File transfer",
      "User management",
      "Message history"
    ],
    date: "2024-08-25"
  },
  {
    id: "react-todo-app",
    title: "React Todo App",
    description: "Ứng dụng quản lý công việc được xây dựng bằng React, với các tính năng CRUD đầy đủ và lưu trữ local.",
    longDescription: `
# React Todo App - Quản Lý Công Việc

Ứng dụng quản lý công việc (To-Do List) được xây dựng bằng React, giúp người dùng quản lý 
danh sách công việc hàng ngày một cách hiệu quả.

## Tính Năng Chính

### 1. Quản Lý Tasks
- Thêm task mới
- Chỉnh sửa task
- Xóa task
- Đánh dấu hoàn thành
- Sắp xếp tasks

### 2. Phân Loại
- Tạo categories
- Gán task vào category
- Lọc theo category
- Màu sắc phân biệt

### 3. Tìm Kiếm & Lọc
- Tìm kiếm task
- Lọc theo trạng thái (all/active/completed)
- Sắp xếp theo ngày
- Sắp xếp theo priority

### 4. Lưu Trữ
- LocalStorage để lưu dữ liệu
- Tự động sync
- Export/Import data
- Backup & Restore

## Công Nghệ Sử Dụng

- **Framework**: React 18
- **Language**: TypeScript
- **State Management**: React Hooks (useState, useEffect)
- **Styling**: CSS Modules / Tailwind CSS
- **Storage**: LocalStorage API

## Giao Diện

- Clean và minimal design
- Responsive layout
- Dark mode support
- Smooth animations
- Intuitive UX

## Bài Học Rút Ra

Dự án này giúp tôi:
- Làm việc với React và Hooks
- Quản lý state trong React
- Làm việc với LocalStorage
- Xây dựng CRUD operations
- Tạo UI/UX đẹp mắt
    `.trim(),
    category: "Web Development",
    technologies: ["React", "TypeScript", "CSS", "LocalStorage"],
    images: [
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop"
    ],
    features: [
      "CRUD tasks đầy đủ",
      "Phân loại và lọc",
      "Tìm kiếm nhanh",
      "Lưu trữ local",
      "Dark mode"
    ],
    date: "2024-07-15"
  },
  {
    id: "nodejs-api",
    title: "Node.js REST API",
    description: "RESTful API được xây dựng bằng Node.js và Express, cung cấp các endpoints cho ứng dụng quản lý sản phẩm.",
    longDescription: `
# Node.js REST API - Backend Service

RESTful API được xây dựng bằng Node.js và Express, cung cấp các endpoints để quản lý 
sản phẩm, đơn hàng và người dùng cho ứng dụng ecommerce.

## API Endpoints

### 1. Products
- \`GET /api/products\` - Lấy danh sách sản phẩm
- \`GET /api/products/:id\` - Lấy chi tiết sản phẩm
- \`POST /api/products\` - Tạo sản phẩm mới
- \`PUT /api/products/:id\` - Cập nhật sản phẩm
- \`DELETE /api/products/:id\` - Xóa sản phẩm

### 2. Orders
- \`GET /api/orders\` - Lấy danh sách đơn hàng
- \`POST /api/orders\` - Tạo đơn hàng mới
- \`PUT /api/orders/:id\` - Cập nhật trạng thái đơn hàng

### 3. Users
- \`POST /api/users/register\` - Đăng ký user
- \`POST /api/users/login\` - Đăng nhập
- \`GET /api/users/profile\` - Lấy thông tin user

## Tính Năng

- RESTful API design
- JWT Authentication
- Input validation
- Error handling
- API documentation (Swagger)
- Rate limiting
- CORS support

## Công Nghệ Sử Dụng

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB / MySQL
- **Authentication**: JWT
- **Validation**: Joi / express-validator
- **Documentation**: Swagger

## Security

- Password hashing với bcrypt
- JWT token authentication
- Input sanitization
- SQL injection prevention
- XSS protection
- Rate limiting

## Bài Học Rút Ra

Dự án này giúp tôi:
- Xây dựng RESTful API
- Làm việc với Express.js
- Xử lý authentication & authorization
- Kết nối database
- API security best practices
    `.trim(),
    category: "Backend Development",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "REST API"],
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
    ],
    features: [
      "RESTful API đầy đủ",
      "JWT Authentication",
      "Input validation",
      "API documentation",
      "Security best practices"
    ],
    date: "2024-06-20"
  }
]

