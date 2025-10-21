# 📝 Blog Cá Nhân - Nguyễn Võ Xuân Dương

[![Hugo](https://img.shields.io/badge/Hugo-0.121.0-blue.svg)](https://gohugo.io/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Deploy Status](https://github.com/TomDavis0310/Do_An_Mon_Hoc_Lap_Trinh_Mang/workflows/Deploy%20Hugo%20site%20to%20GitHub%20Pages/badge.svg)](https://github.com/TomDavis0310/Do_An_Mon_Hoc_Lap_Trinh_Mang/actions)

> Blog cá nhân chia sẻ kiến thức về lập trình Java, JavaScript và phát triển Web

## 🌟 Giới thiệu

Đây là blog cá nhân của tôi - **Nguyễn Võ Xuân Dương**, sinh viên năm 3 ngành Công nghệ thông tin tại Đại học Công nghệ TP.HCM (HUTECH). Blog được xây dựng bằng Hugo và theme PaperMod, tập trung vào các chủ đề:

- ☕ **Java & Spring Boot**
- 🚀 **JavaScript & Modern Web Development**
- 💻 **Fullstack Development**
- 📚 **Kinh nghiệm học tập và dự án**

**Live Demo**: [https://tomdavis0310.github.io/Do_An_Mon_Hoc_Lap_Trinh_Mang/](https://tomdavis0310.github.io/Do_An_Mon_Hoc_Lap_Trinh_Mang/)

## ✨ Tính năng

- ✅ **Responsive Design** - Hiển thị tốt trên mọi thiết bị
- ✅ **Dark/Light Mode** - Chuyển đổi theme dễ dàng
- ✅ **SEO Optimized** - Tối ưu cho công cụ tìm kiếm
- ✅ **Fast Loading** - Tốc độ tải nhanh
- ✅ **Code Highlighting** - Syntax highlighting cho code
- ✅ **Search Function** - Tìm kiếm bài viết
- ✅ **RSS Feed** - Đăng ký cập nhật
- ✅ **Social Share** - Chia sẻ bài viết lên mạng xã hội
- ✅ **Reading Progress Bar** - Thanh tiến trình đọc bài
- ✅ **Table of Contents** - Mục lục tự động

## 📂 Cấu trúc Project

```
blog cá nhân/
├── .github/
│   └── workflows/
│       └── hugo.yml          # GitHub Actions workflow
├── content/
│   ├── _index.md            # Trang chủ
│   ├── search.md            # Trang tìm kiếm
│   └── posts/               # Các bài viết
│       ├── 01-gioi-thieu-java.md
│       ├── 02-cai-dat-java-vscode.md
│       ├── 03-lap-trinh-huong-doi-tuong-java.md
│       ├── 04-xu-ly-ngoai-le-java.md
│       ├── 05-javascript-co-ban.md
│       ├── 06-dom-javascript.md
│       ├── 07-es6-javascript.md
│       ├── 08-so-sanh-java-javascript.md
│       └── 09-spring-boot-javascript-app.md
├── layouts/
│   └── partials/
│       └── extend_head.html  # Custom head elements
├── static/
│   ├── css/
│   │   └── custom.css       # Custom styles
│   └── images/              # Hình ảnh
├── themes/                  # PaperMod theme (git submodule)
├── config.toml             # Cấu hình Hugo
└── README.md               # File này
```

## 🚀 Cài đặt và Chạy Local

### Yêu cầu

- **Hugo Extended** (version 0.121.0 hoặc mới hơn)
- **Git**
- **Go** (optional, cho một số tính năng Hugo modules)

### Các bước cài đặt

#### 1. Cài đặt Hugo

**Windows (Chocolatey):**
```powershell
choco install hugo-extended
```

**Windows (Scoop):**
```powershell
scoop install hugo-extended
```

**macOS (Homebrew):**
```bash
brew install hugo
```

**Linux (Snap):**
```bash
sudo snap install hugo
```

Hoặc tải từ: [Hugo Releases](https://github.com/gohugoio/hugo/releases)

#### 2. Clone Repository

```bash
git clone https://github.com/TomDavis0310/Do_An_Mon_Hoc_Lap_Trinh_Mang.git
cd Do_An_Mon_Hoc_Lap_Trinh_Mang
cd "blog cá nhân"
```

#### 3. Cài đặt Theme PaperMod

```bash
# Cách 1: Git submodule (khuyến nghị)
git submodule add --depth=1 https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod
git submodule update --init --recursive

# Cách 2: Clone trực tiếp
git clone https://github.com/adityatelange/hugo-PaperMod themes/PaperMod --depth=1
```

#### 4. Chạy Development Server

```bash
hugo server -D

# Hoặc với các options khác
hugo server --disableFastRender --navigateToChanged
```

Server sẽ chạy tại: **http://localhost:1313/**

### Các lệnh Hugo hữu ích

```bash
# Build site (output: public/)
hugo

# Build với minification
hugo --minify

# Tạo bài viết mới
hugo new posts/ten-bai-viet.md

# Kiểm tra version
hugo version

# Xem cấu trúc site
hugo list all
```

## 📝 Tạo Bài Viết Mới

### 1. Tạo file markdown mới

```bash
hugo new posts/ten-bai-viet.md
```

### 2. Front Matter Template

```yaml
---
title: "Tiêu đề bài viết"
date: 2025-10-10T10:00:00+07:00
draft: false
author: "Nguyễn Võ Xuân Dương"
tags: ["Java", "JavaScript", "Web Development"]
categories: ["Java"]
description: "Mô tả ngắn gọn về bài viết"
cover:
    image: "/images/cover.jpg"
    alt: "Alt text cho ảnh"
    caption: "Caption cho ảnh"
keywords: ["keyword1", "keyword2", "keyword3"]
---

## Nội dung bài viết

Viết nội dung ở đây...
```

### 3. Thêm ảnh

Đặt ảnh vào thư mục `static/images/` và tham chiếu:

```markdown
![Alt text](/images/ten-anh.jpg)
```

## 🌐 Deploy lên GitHub Pages

### Cách 1: Tự động với GitHub Actions (Khuyến nghị)

1. **Enable GitHub Pages:**
   - Vào **Settings** > **Pages**
   - Source: **GitHub Actions**

2. **Push code:**
   ```bash
   git add .
   git commit -m "Deploy blog"
   git push origin main
   ```

3. **GitHub Actions sẽ tự động:**
   - Build Hugo site
   - Deploy lên GitHub Pages
   - Site sẽ available tại: `https://tomdavis0310.github.io/Do_An_Mon_Hoc_Lap_Trinh_Mang/`

### Cách 2: Manual Deploy

```bash
# Build site
hugo --minify

# Deploy (nếu dùng gh-pages branch)
cd public
git init
git add .
git commit -m "Deploy"
git branch -M gh-pages
git remote add origin https://github.com/TomDavis0310/Do_An_Mon_Hoc_Lap_Trinh_Mang.git
git push -u origin gh-pages --force
```

## 🎨 Customization

### Thay đổi màu sắc

Chỉnh sửa `static/css/custom.css`:

```css
:root {
    --primary-color: #3498db;
    --secondary-color: #2c3e50;
    --accent-color: #2ecc71;
}
```

### Thay đổi thông tin cá nhân

Chỉnh sửa `config.toml`:

```toml
[params.homeInfoParams]
Title = "Xin chào, tôi là [Tên bạn] 👋"
Content = """
Nội dung giới thiệu của bạn...
"""

[[params.socialIcons]]
name = "github"
url = "https://github.com/username"
```

### Thêm Google Analytics

```toml
googleAnalytics = "G-XXXXXXXXXX"
```

## 📚 Nội dung Blog

Blog hiện có **9 bài viết** về Java và JavaScript:

1. **Giới thiệu về ngôn ngữ Java** - Tìm hiểu Java và các đặc điểm nổi bật
2. **Hướng dẫn cài đặt môi trường Java & VSCode** - Setup development environment
3. **Lập trình hướng đối tượng trong Java** - 4 trụ cột OOP
4. **Xử lý ngoại lệ trong Java** - Exception Handling best practices
5. **Giới thiệu JavaScript và cú pháp cơ bản** - JavaScript fundamentals
6. **DOM trong JavaScript là gì?** - Tương tác với HTML
7. **ES6 và những tính năng mới trong JS** - Modern JavaScript
8. **So sánh Java và JavaScript** - Phân tích chi tiết hai ngôn ngữ
9. **Tạo ứng dụng Web đầu tiên với Java Spring Boot và JavaScript** - Fullstack tutorial

## 🛠️ Tech Stack

- **Static Site Generator**: [Hugo](https://gohugo.io/) v0.121.0
- **Theme**: [PaperMod](https://github.com/adityatelange/hugo-PaperMod)
- **Fonts**: Inter, Poppins (Google Fonts)
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions
- **Comments**: (Có thể tích hợp Giscus/Disqus)

## 📈 Performance

- ⚡ **Page Speed Score**: 95+
- 🎯 **SEO Score**: 100
- 📱 **Mobile Friendly**: Yes
- ♿ **Accessibility**: AA compliant

## 🤝 Contributing

Nếu bạn tìm thấy lỗi hoặc muốn đề xuất cải tiến:

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📄 License

Project này được phân phối dưới giấy phép MIT. Xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## � Tài liệu Báo cáo Đồ án

### File báo cáo chính thức

1. **[BAO_CAO_DO_AN.md](BAO_CAO_DO_AN.md)** - Báo cáo chính (60-80 trang)
   - Giới thiệu đầy đủ
   - Phân tích thiết kế
   - Triển khai chi tiết
   - Kết quả và đánh giá

2. **[docs/BAO_CAO_TOM_TAT.md](docs/BAO_CAO_TOM_TAT.md)** - Báo cáo tóm tắt (8-10 trang)
   - Executive summary
   - Kết quả nhanh
   - Metrics chính

3. **[docs/HUONG_DAN_BAO_CAO.md](docs/HUONG_DAN_BAO_CAO.md)** - Hướng dẫn
   - Cách tạo báo cáo
   - Hướng dẫn thuyết trình
   - Q&A và tips

4. **[docs/README_BAO_CAO.md](docs/README_BAO_CAO.md)** - Index báo cáo
   - Hướng dẫn sử dụng
   - Template slide
   - Checklist

5. **[TOM_TAT_NHANH.md](TOM_TAT_NHANH.md)** - Quick reference
   - Thông tin nhanh
   - Kết quả chính
   - Hướng dẫn sử dụng

### Tài liệu kỹ thuật

- **[QUICKSTART.md](docs/QUICKSTART.md)** - Quick start guide
- **[DEPLOYMENT.md](docs/DEPLOYMENT.md)** - Deployment guide
- **[STRUCTURE.md](docs/STRUCTURE.md)** - Project structure
- **[TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md)** - Common issues
- **[WRITING_GUIDE.md](docs/WRITING_GUIDE.md)** - Content guide

## �📞 Liên hệ

**Nguyễn Võ Xuân Dương**

- 🌐 Website: [Blog của tôi](https://tomdavis0310.github.io/Do_An_Mon_Hoc_Lap_Trinh_Mang/)
- 💼 LinkedIn: [linkedin.com/in/xuanduong](https://linkedin.com/in/xuanduong)
- 📧 Email: doduong0949447395@gmail.com
- 🐙 GitHub: [@TomDavis0310](https://github.com/TomDavis0310)
- 📘 Facebook: [facebook.com/duong.xuan.534908](https://www.facebook.com/duong.xuan.534908/)
- 📱 Phone: 094.944.7395

## 🙏 Acknowledgments

- Theme: [PaperMod](https://github.com/adityatelange/hugo-PaperMod) by Aditya Telange
- Icons: [Font Awesome](https://fontawesome.com/)
- Fonts: [Google Fonts](https://fonts.google.com/)
- Hosting: [GitHub Pages](https://pages.github.com/)

---

⭐ Nếu bạn thấy project này hữu ích, hãy cho một star nhé! ⭐

**Made with ❤️ by Nguyễn Võ Xuân Dương**
