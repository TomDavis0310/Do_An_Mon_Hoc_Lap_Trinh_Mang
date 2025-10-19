# 🎨 Hướng dẫn tùy chỉnh màu sắc Light/Dark Mode

## 📖 Tổng quan
Blog hiện đã hỗ trợ đầy đủ Light Mode và Dark Mode với màu sắc tự động điều chỉnh.

## 🎯 Cách thay đổi màu sắc

### 1. Thay đổi màu chủ đạo
Mở file: `assets/css/theme-override.css`

**Light Mode:**
```css
:root {
    --theme-text-primary: #1e293b;    /* Chữ chính */
    --theme-link: #0b5bd7;            /* Màu link & accent */
}
```

**Dark Mode:**
```css
.dark {
    --theme-text-primary: #f1f5f9;    /* Chữ chính */
    --theme-link: #60a5fa;            /* Màu link & accent */
}
```

### 2. Thay đổi màu homepage
Mở file: `assets/css/custom-home.css`

```css
:root {
    --accent-cyan: #0b5bd7;           /* Màu accent chính */
    --primary-gradient: linear-gradient(135deg, #0b5bd7 0%, #6b7280 100%);
}
```

### 3. Thay đổi màu global
Mở file: `static/css/custom.css`

```css
:root {
    --primary-cyan: #00d9ff;          /* Màu cyan chủ đạo */
    --primary-blue: #0ea5e9;          /* Màu xanh chủ đạo */
}
```

## 🛠️ Các biến màu quan trọng

### Text Colors (Màu chữ)
- `--theme-text-primary` - Chữ chính (tiêu đề, heading)
- `--theme-text-secondary` - Chữ phụ (paragraphs)
- `--theme-text-tertiary` - Chữ mờ (meta info)

### Background Colors (Màu nền)
- `--theme-bg-primary` - Nền chính
- `--theme-bg-secondary` - Nền phụ (cards)
- `--theme-bg-tertiary` - Nền cấp 3

### Accent Colors (Màu nhấn)
- `--theme-link` - Màu links
- `--theme-link-hover` - Màu links khi hover
- `--theme-border` - Màu viền

## 💡 Tips

### Chọn màu phù hợp
1. **Light Mode**: Chữ tối (#000-#4a5568) trên nền sáng (#fff-#f8fafc)
2. **Dark Mode**: Chữ sáng (#cbd5e1-#fff) trên nền tối (#0f172a-#334155)
3. **Contrast**: Đảm bảo tỷ lệ tương phản >= 4.5:1 (WCAG AA)

### Test màu sắc
- Sử dụng: https://colorable.jxnblk.com/
- Hoặc: https://webaim.org/resources/contrastchecker/

### Build & Preview
```bash
# Development server
hugo server -D

# Production build
hugo --cleanDestinationDir
```

## 🔄 Rebuild sau khi thay đổi
```bash
cd "d:\UDP\Do_An_Mon_Hoc_Lap_Trinh_Mang\blog cá nhân"
hugo --cleanDestinationDir
```

## 📚 Tài liệu tham khảo
- [LIGHT_DARK_MODE_FIX.md](./LIGHT_DARK_MODE_FIX.md) - Chi tiết các thay đổi
- [Hugo Documentation](https://gohugo.io/documentation/)
- [PaperMod Theme](https://github.com/adityatelange/hugo-PaperMod)

---
Cập nhật: 17/10/2025
