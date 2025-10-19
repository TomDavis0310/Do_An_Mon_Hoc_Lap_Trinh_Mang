# 📘 Hướng Dẫn Cấu Hình Link Mạng Xã Hội

## 🔗 Vị Trí Cấu Hình

Tất cả các link mạng xã hội (Facebook, Gmail, LinkedIn, GitHub...) được cấu hình trong file:

📁 **`config.toml`** (dòng 62-76)

---

## ⚙️ Cách Thay Đổi Link

### 1. Mở file `config.toml`

### 2. Tìm phần `[[params.socialIcons]]`

```toml
[[params.socialIcons]]
name = "github"
url = "https://github.com/TomDavis0310"

[[params.socialIcons]]
name = "linkedin"
url = "https://linkedin.com/in/xuanduong"

[[params.socialIcons]]
name = "facebook"
url = "https://facebook.com/xuanduong"

[[params.socialIcons]]
name = "email"
url = "mailto:xuanduong@example.com"
```

### 3. Thay đổi các URL thành link thật của bạn:

#### ✏️ **Facebook:**
```toml
[[params.socialIcons]]
name = "facebook"
url = "https://facebook.com/TÊN_FACEBOOK_CỦA_BẠN"
```

#### ✏️ **Email/Gmail:**
```toml
[[params.socialIcons]]
name = "email"
url = "mailto:EMAIL_THẬT@gmail.com"
```

#### ✏️ **LinkedIn:**
```toml
[[params.socialIcons]]
name = "linkedin"
url = "https://linkedin.com/in/USERNAME_LINKEDIN"
```

#### ✏️ **GitHub:**
```toml
[[params.socialIcons]]
name = "github"
url = "https://github.com/USERNAME_GITHUB"
```

---

## 🎨 Thêm Mạng Xã Hội Mới

Nếu bạn muốn thêm mạng xã hội khác (Twitter, Instagram, YouTube...), thêm đoạn sau:

### Twitter:
```toml
[[params.socialIcons]]
name = "twitter"
url = "https://twitter.com/USERNAME"
```

### Instagram:
```toml
[[params.socialIcons]]
name = "instagram"
url = "https://instagram.com/USERNAME"
```

### YouTube:
```toml
[[params.socialIcons]]
name = "youtube"
url = "https://youtube.com/@USERNAME"
```

### TikTok:
```toml
[[params.socialIcons]]
name = "tiktok"
url = "https://tiktok.com/@USERNAME"
```

---

## 🔥 Sau Khi Thay Đổi

1. **Lưu file** `config.toml`
2. **Rebuild site:**
   ```powershell
   hugo
   ```
3. **Hoặc chạy dev server:**
   ```powershell
   hugo server -D
   ```
4. **Mở trình duyệt:** `http://localhost:1313/Do_An_Mon_Hoc_Lap_Trinh_Mang/`

---

## 🎯 Các Icon Được Hỗ Trợ

Theme PaperMod hỗ trợ các icon sau:

- `github`
- `gitlab`
- `linkedin`
- `facebook`
- `twitter`
- `instagram`
- `youtube`
- `tiktok`
- `email`
- `rss`
- `stackoverflow`
- `codepen`
- `dev.to`
- `medium`
- `reddit`
- `discord`
- `telegram`
- `whatsapp`

**Lưu ý:** Tên `name` phải chính xác như trên để icon hiển thị đúng!

---

## 📸 Ví Dụ Hoàn Chỉnh

```toml
# GitHub
[[params.socialIcons]]
name = "github"
url = "https://github.com/TomDavis0310"

# LinkedIn
[[params.socialIcons]]
name = "linkedin"
url = "https://linkedin.com/in/xuanduong"

# Facebook
[[params.socialIcons]]
name = "facebook"
url = "https://www.facebook.com/xuanduong.vo.7"

# Email
[[params.socialIcons]]
name = "email"
url = "mailto:xuanduong.dev@gmail.com"

# Twitter (nếu có)
[[params.socialIcons]]
name = "twitter"
url = "https://twitter.com/xuanduong_dev"

# Instagram (nếu có)
[[params.socialIcons]]
name = "instagram"
url = "https://instagram.com/xuanduong.dev"
```

---

## ✅ Checklist Kiểm Tra

- [ ] Đã thay link Facebook thành link thật
- [ ] Đã thay email thành email thật
- [ ] Đã thay LinkedIn thành profile thật
- [ ] GitHub link đã đúng
- [ ] Đã rebuild site (`hugo`)
- [ ] Đã kiểm tra trên localhost
- [ ] Icons hiển thị đúng và click được

---

## 💡 Tips

1. **Tìm username LinkedIn:** Vào profile LinkedIn của bạn, URL sẽ có dạng `linkedin.com/in/USERNAME`
2. **Tìm username Facebook:** URL profile Facebook dạng `facebook.com/USERNAME` hoặc `facebook.com/profile.php?id=XXXX`
3. **Email:** Dùng `mailto:` để tự động mở email client khi user click

---

Chúc bạn thành công! 🎉
