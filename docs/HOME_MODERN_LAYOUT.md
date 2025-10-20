# 🎨 Modern Home Page Layout

## 📋 Tổng quan

Trang Home mới với bố cục hiện đại, được thiết kế theo kiểu Next.js/React style với:

- ✅ Hero Section với gradient background
- ✅ Featured Posts với 3 cards
- ✅ Projects showcase + Timeline
- ✅ CTA Section
- ✅ Responsive design
- ✅ Dark mode support

## 🏗️ Cấu trúc bố cục

```
┌─────────────────────────────────────┐
│         HEADER (Fixed)              │
│  - Logo + Navigation                │
│  - Theme Toggle                     │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│         HERO SECTION                │
│  - Gradient background              │
│  - Tiêu đề lớn + CTA buttons        │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│    BÀI VIẾT NỔI BẬT (3 cards)      │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  DỰ ÁN + TIMELINE (2 columns)      │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│     CTA SECTION (Newsletter)        │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│         FOOTER (3 columns)          │
└─────────────────────────────────────┘
```

## 📁 Files đã tạo/cập nhật

### 1. Layout chính
- **`layouts/index.html`** - Template cho trang Home
  - Hero section với gradient animation
  - Featured posts grid
  - Projects showcase
  - Timeline
  - CTA section

### 2. Styles
- **`assets/css/home-modern.css`** - CSS cho trang Home mới
  - Modern gradient effects
  - Smooth animations
  - Hover effects
  - Responsive breakpoints
  - Dark mode styles

### 3. Configuration
- **`config.toml`** - Đã tắt `profileMode` để dùng layout mới
- **`layouts/partials/extend_head.html`** - Import CSS mới

## 🎨 Tính năng nổi bật

### Hero Section
```css
- Gradient background: Blue → Purple → Pink
- Animated blobs
- Shimmer text effect
- Smooth fade-in animations
- CTA buttons với hover effects
```

### Featured Posts
```css
- 3 column grid (responsive)
- Image hover zoom effect
- Card lift on hover
- Category badges
- Tags display
- Reading time & date
```

### Projects & Timeline
```css
- 2 column layout (2fr + 1fr)
- Project cards với tech stack
- Feature list với checkmarks
- GitHub + Demo links
- Sticky timeline sidebar
- Timeline dots animation
```

### CTA Section
```css
- Gradient button
- Flex layout (responsive)
- Hover lift effect
- Box shadow animations
```

## 🚀 Cách sử dụng

### 1. Build và xem thử
```bash
cd "blog cá nhân"
hugo server -D
```

### 2. Truy cập
```
http://localhost:1313/Do_An_Mon_Hoc_Lap_Trinh_Mang/
```

### 3. Deploy lên GitHub Pages
```bash
hugo --minify
git add .
git commit -m "feat: Add modern home page layout"
git push origin main
```

## 🎯 Tùy chỉnh

### Thay đổi màu gradient Hero
Mở `assets/css/home-modern.css`:
```css
.hero-gradient {
  background: linear-gradient(135deg, 
    #667eea 0%,    /* Màu bắt đầu */
    #764ba2 50%,   /* Màu giữa */
    #f093fb 100%   /* Màu kết thúc */
  );
}
```

### Thêm/Sửa Projects
Mở `layouts/index.html` và tìm section:
```html
{{/* DỰ ÁN + TIMELINE */}}
<section class="projects-timeline">
  <div class="projects-section">
    <!-- Thêm project mới ở đây -->
  </div>
</section>
```

### Thay đổi Timeline
```html
<div class="timeline-item">
  <span class="timeline-dot"></span>
  <p class="timeline-year">2025</p>
  <p class="timeline-event">Tên sự kiện</p>
  <p class="timeline-desc">Mô tả chi tiết</p>
</div>
```

### Tùy chỉnh Featured Posts
Số lượng posts hiển thị (hiện tại: 3):
```html
{{- range first 3 $pages }}
  <!-- Thay 3 thành số khác -->
{{- end }}
```

## 📱 Responsive Breakpoints

```css
/* Desktop */
> 1024px: Full layout với sidebar

/* Tablet */
768px - 1024px: 2 columns, timeline không sticky

/* Mobile */
< 768px: Single column, stacked layout

/* Small Mobile */
< 480px: Full width buttons, smaller text
```

## 🎨 Color Variables

CSS sử dụng CSS variables từ PaperMod theme:

```css
--primary: Màu chính (text, headings)
--secondary: Màu phụ (descriptions)
--entry: Background cho cards
--border: Màu viền
--code-bg: Background cho tags
```

## 🌙 Dark Mode

Tự động chuyển đổi khi user toggle theme:

```css
.dark .hero-gradient {
  background: linear-gradient(135deg, 
    #4c51bf 0%, 
    #553c9a 50%, 
    #6b46c1 100%
  );
}

.dark .post-card {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}
```

## ✨ Animation Effects

### Shimmer Text
```css
@keyframes shimmer {
  0%, 100% { background-position: 200% 0; }
  50% { background-position: -200% 0; }
}
```

### Fade In Animations
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## 🐛 Troubleshooting

### CSS không load
```bash
# Xóa cache và rebuild
rm -rf public/
rm -rf resources/
hugo --gc
hugo server -D
```

### Gradient không hiển thị
Kiểm tra file `assets/css/home-modern.css` đã được tạo đúng vị trí.

### Posts không hiển thị
Kiểm tra:
1. Posts có `draft: false`
2. File nằm trong `content/posts/`
3. Front matter đúng format

## 📝 To-do

- [ ] Thêm lazy loading cho images
- [ ] Implement Intersection Observer cho animations
- [ ] Thêm search bar trong Hero
- [ ] Social proof section
- [ ] Newsletter subscription form
- [ ] Blog categories filter

## 📞 Support

Nếu gặp vấn đề, tạo issue hoặc liên hệ:
- Email: doduong0949447395@gmail.com
- GitHub: [@TomDavis0310](https://github.com/TomDavis0310)

---

**Tạo bởi**: Nguyễn Võ Xuân Dương  
**Ngày**: 19/10/2025  
**Version**: 1.0.0
