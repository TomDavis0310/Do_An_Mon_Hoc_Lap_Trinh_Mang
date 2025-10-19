# 🎯 Hướng Dẫn Sử Dụng Tính Năng Search & Filter Trang Posts

## ✨ Tính Năng Đã Được Thêm Vào

Blog của bạn giờ đã có **trang Posts tích hợp Search & Filter** với bố cục Tab/Accordion!

### 📍 Vị Trí
Truy cập: **http://localhost:PORT/Do_An_Mon_Hoc_Lap_Trinh_Mang/posts/**

---

## 🎨 Các Tab Chức Năng

### 1️⃣ Tab **Search** (🔍)
- **Tìm kiếm real-time**: Gõ từ khóa để lọc bài viết
- **Tìm theo**: Tiêu đề, nội dung, tags, categories
- **Nút Clear**: Xóa nhanh từ khóa tìm kiếm
- **Phím tắt**:
  - `Ctrl/Cmd + K`: Focus vào ô search
  - `Esc`: Xóa search và thoát

### 2️⃣ Tab **Filter by Tags** (🏷️)
- Hiển thị tất cả tags có trong blog
- Click vào tag để lọc bài viết theo tag đó
- Hiển thị số lượng bài viết cho mỗi tag
- Nút "Tất cả" để reset filter

### 3️⃣ Tab **Categories** (📂)
- Hiển thị tất cả categories
- Click để lọc bài viết theo category
- Hiển thị số lượng bài viết cho mỗi category
- Nút "Tất cả" để reset filter

---

## 🎯 Cách Sử Dụng

### Tìm Kiếm Bài Viết
1. Click vào tab **Search**
2. Gõ từ khóa vào ô tìm kiếm
3. Kết quả tự động lọc theo từ khóa
4. Click nút **×** hoặc nhấn `Esc` để xóa

### Lọc Theo Tag
1. Click vào tab **Filter by Tags**
2. Chọn tag muốn xem (VD: Java, JavaScript, OOP...)
3. Chỉ hiển thị bài viết có tag đó
4. Click "Tất cả" để hiển thị lại tất cả

### Lọc Theo Category
1. Click vào tab **Categories**
2. Chọn category muốn xem
3. Chỉ hiển thị bài viết thuộc category đó
4. Click "Tất cả" để reset

---

## 📁 Cấu Trúc Files Đã Tạo

```
blog cá nhân/
├── layouts/
│   ├── posts/
│   │   └── list.html              ← Layout tùy chỉnh cho trang posts
│   └── partials/
│       └── extend_head.html       ← Đã cập nhật để load CSS/JS
├── assets/
│   └── css/
│       └── posts-filter.css       ← Styles cho tabs & filter
└── static/
    └── js/
        └── posts-filter.js        ← JavaScript cho search & filter
```

---

## ⚙️ Cấu Hình (config.toml)

Các thay đổi đã được áp dụng:

```toml
# Enable JSON output cho search
[outputs]
home = ["HTML", "RSS", "JSON"]

# Enable taxonomies
[taxonomies]
category = "categories"
tag = "tags"
series = "series"
```

**Lưu ý**: Không cần trang `/search` và `/tags` riêng biệt nữa, tất cả đã được tích hợp vào `/posts/`

---

## 🎨 Tùy Chỉnh

### Thay Đổi Màu Sắc
Chỉnh sửa file: `assets/css/posts-filter.css`

```css
/* Màu tab active */
.tab-button.active {
  border-bottom-color: var(--tertiary);  /* Thay đổi màu này */
}

/* Màu nút filter active */
.filter-tag.active {
  background: var(--tertiary);  /* Thay đổi màu này */
}
```

### Thay Đổi Text
Chỉnh sửa file: `layouts/posts/list.html`

```html
<!-- Thay đổi placeholder search -->
<input ... placeholder="Tìm kiếm bài viết..." />

<!-- Thay đổi text nút -->
<button ... data-tag="all">Tất cả</button>
```

---

## 🚀 Tính Năng Nổi Bật

✅ **Real-time Search**: Tìm kiếm ngay khi gõ, không cần nhấn nút  
✅ **Mobile-Friendly**: Responsive hoàn toàn trên mọi thiết bị  
✅ **Keyboard Shortcuts**: Hỗ trợ phím tắt nhanh  
✅ **Smooth Animation**: Hiệu ứng chuyển tab mượt mà  
✅ **No External Dependencies**: Không cần thư viện bên ngoài  
✅ **Light/Dark Mode**: Tự động theo theme của blog  

---

## 🐛 Troubleshooting

### Không thấy tabs hiển thị?
- Kiểm tra file `posts-filter.css` đã được build chưa
- Xóa cache browser (Ctrl + F5)
- Kiểm tra console browser xem có lỗi không

### Search không hoạt động?
- Kiểm tra file `posts-filter.js` đã load chưa
- Mở DevTools > Console để xem lỗi
- Đảm bảo các post có đầy đủ tags và categories

### Tags/Categories không hiển thị?
- Kiểm tra `config.toml` đã có taxonomies chưa
- Đảm bảo bài viết có khai báo tags/categories trong frontmatter

---

## 📝 Thêm Tags/Categories Vào Bài Viết

Trong file `.md` của bài viết:

```yaml
---
title: "Tiêu đề bài viết"
tags: ["Java", "Programming", "OOP"]
categories: ["Java", "Tutorial"]
---
```

---

## 🎉 Hoàn Thành!

Giờ bạn có một trang Posts chuyên nghiệp với:
- 🔍 Tìm kiếm nhanh
- 🏷️ Lọc theo tags
- 📂 Lọc theo categories
- 📱 Responsive design
- ⚡ Performance tốt

**Truy cập**: http://localhost:PORT/Do_An_Mon_Hoc_Lap_Trinh_Mang/posts/

Chúc bạn viết blog vui vẻ! 🚀
