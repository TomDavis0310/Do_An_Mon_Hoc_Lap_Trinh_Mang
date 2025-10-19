# Quick Start Guide

## 🚀 Bắt đầu nhanh

### Bước 1: Cài Hugo
```bash
# Windows (Chocolatey)
choco install hugo-extended -y

# macOS (Homebrew)
brew install hugo

# Linux (Snap)
sudo snap install hugo
```

### Bước 2: Clone & Setup
```bash
git clone https://github.com/TomDavis0310/Do_An_Mon_Hoc_Lap_Trinh_Mang.git
cd "Do_An_Mon_Hoc_Lap_Trinh_Mang/blog cá nhân"

# Cài đặt theme
git submodule add --depth=1 https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod
git submodule update --init --recursive
```

### Bước 3: Chạy Local
```bash
hugo server -D
```

Mở trình duyệt: **http://localhost:1313/**

### Bước 4: Tạo bài viết mới
```bash
hugo new posts/ten-bai-viet.md
```

### Bước 5: Deploy
```bash
# Build
hugo --minify

# Push to GitHub
git add .
git commit -m "Update blog"
git push origin main
```

GitHub Actions sẽ tự động deploy!

## 📝 Template bài viết

```markdown
---
title: "Tiêu đề"
date: 2025-10-10T10:00:00+07:00
draft: false
author: "Tên bạn"
tags: ["Tag1", "Tag2"]
categories: ["Category"]
description: "Mô tả ngắn"
---

Nội dung bài viết...
```

## 🎨 Tùy chỉnh

Chỉnh sửa `config.toml`:
- Thông tin cá nhân
- Social links
- Menu
- Theme settings

Chỉnh sửa `static/css/custom.css`:
- Màu sắc
- Font chữ
- Styles

## 💡 Tips

- Đặt ảnh trong `static/images/`
- Dùng `draft: true` khi chưa muốn publish
- Test responsive với `Ctrl+Shift+M` (DevTools)
- Check SEO với Google Lighthouse

## 🆘 Troubleshooting

**Lỗi: theme not found**
```bash
git submodule update --init --recursive
```

**Lỗi: port already in use**
```bash
hugo server -p 1314
```

**Lỗi: build failed**
```bash
hugo --debug
```

Xem thêm: [README.md](README.md)
