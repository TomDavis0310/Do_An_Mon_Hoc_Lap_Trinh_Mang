# 🚀 HƯỚNG DẪN NHANH - Chạy Blog trong 5 phút

## Bước 1: Cài Hugo (2 phút)

### Windows:
```powershell
# Mở PowerShell với quyền Administrator
choco install hugo-extended -y
```

### Kiểm tra:
```bash
hugo version
```

## Bước 2: Setup Project (1 phút)

```bash
# Di chuyển vào thư mục blog
cd "blog cá nhân"

# Cài theme PaperMod
git submodule add --depth=1 https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod
git submodule update --init --recursive
```

## Bước 3: Chạy Local (30 giây)

```bash
hugo server -D
```

✅ Mở trình duyệt: **http://localhost:1313/**

## Bước 4: Thêm Ảnh (1 phút)

Cần thêm các file sau vào `static/images/`:

1. **profile.jpg** (180x180px) - Ảnh đại diện của bạn
2. **favicon.ico** - Icon cho website

Tạo favicon tại: https://realfavicongenerator.net/

## Bước 5: Cập nhật Thông Tin (30 giây)

Mở `config.toml` và sửa:

```toml
# Dòng 78-81: Social links
[[params.socialIcons]]
name = "github"
url = "https://github.com/TenGitHubCuaBan"  # ← Đổi URL này

[[params.socialIcons]]
name = "linkedin"
url = "https://linkedin.com/in/profile-cua-ban"  # ← Đổi URL này

# Dòng 7: Google Analytics (nếu có)
googleAnalytics = "G-XXXXXXXXXX"  # ← Đổi ID này
```

## Bước 6: Deploy (30 giây)

```bash
# Commit và push
git add .
git commit -m "Initial blog setup"
git push origin main
```

### Enable GitHub Pages:
1. Vào GitHub repository
2. **Settings** → **Pages**
3. Source: **GitHub Actions**

✅ Xong! Site sẽ live sau 2-3 phút tại:
```
https://TomDavis0310.github.io/Do_An_Mon_Hoc_Lap_Trinh_Mang/
```

## 🎯 Kiểm tra nhanh

- [ ] Hugo installed? → `hugo version`
- [ ] Theme installed? → `ls themes/PaperMod`
- [ ] Local works? → `hugo server -D`
- [ ] Images added? → `ls static/images/`
- [ ] Info updated? → Check config.toml
- [ ] Pushed to GitHub? → Check repo
- [ ] GitHub Pages enabled? → Check Settings

## ❓ Gặp lỗi?

### Lỗi: hugo command not found
```bash
# Cài lại Hugo
choco install hugo-extended -y
# Sau đó restart terminal
```

### Lỗi: theme not found
```bash
# Cài theme lại
git submodule update --init --recursive
```

### Lỗi: port already in use
```bash
# Dùng port khác
hugo server -p 1314
```

## 📝 Tạo bài viết mới

```bash
# Tạo file mới
hugo new posts/ten-bai-viet.md

# Edit
code content/posts/ten-bai-viet.md

# Preview
hugo server -D
```

## 📚 Tài liệu chi tiết

Xem file sau để biết thêm:
- **README.md** - Full documentation
- **QUICKSTART.md** - Quick start guide  
- **DEPLOYMENT.md** - Deployment guide
- **STRUCTURE.md** - Project structure

## 🎉 Done!

Blog của bạn đã sẵn sàng! 

**Next:**
- Viết thêm bài mới
- Chia sẻ với bạn bè
- Submit to Google Search Console

---

**Có câu hỏi?** Tạo issue trên GitHub! 💬
