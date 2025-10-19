# 🔧 Troubleshooting - Xử lý Lỗi Thường Gặp

## 🚨 Lỗi Cài Đặt

### 1. "hugo: command not found"

**Nguyên nhân**: Hugo chưa được cài đặt hoặc không có trong PATH

**Giải pháp**:

**Windows:**
```powershell
# Cách 1: Chocolatey
choco install hugo-extended -y

# Cách 2: Scoop
scoop install hugo-extended

# Sau đó restart terminal
```

**macOS:**
```bash
brew install hugo
```

**Linux:**
```bash
sudo snap install hugo
```

**Kiểm tra**:
```bash
hugo version
# Phải hiển thị: hugo v0.121.0+extended...
```

### 2. "hugo version" không có "extended"

**Nguyên nhân**: Cài nhầm Hugo standard thay vì Hugo Extended

**Giải pháp**:
```bash
# Gỡ version cũ
choco uninstall hugo

# Cài Hugo Extended
choco install hugo-extended -y
```

**Lưu ý**: Hugo Extended cần cho SCSS processing

## 🎨 Lỗi Theme

### 3. "Error: Unable to locate theme"

**Nguyên nhân**: Theme PaperMod chưa được cài

**Giải pháp**:
```bash
# Cài theme bằng git submodule
git submodule add --depth=1 https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod

# Update submodule
git submodule update --init --recursive
```

**Kiểm tra**:
```bash
ls themes/PaperMod
# Phải có files: layouts/, assets/, ...
```

### 4. Theme không cập nhật

**Nguyên nhân**: Submodule không được update

**Giải pháp**:
```bash
# Update theme
git submodule update --remote --merge

# Hoặc update tất cả submodules
git submodule update --init --recursive
```

## 🌐 Lỗi Local Server

### 5. "Port 1313 already in use"

**Nguyên nhân**: Có process khác đang dùng port 1313

**Giải pháp**:

**Cách 1**: Dùng port khác
```bash
hugo server -p 1314
```

**Cách 2**: Kill process (Windows)
```powershell
# Tìm process
netstat -ano | findstr :1313

# Kill process (thay PID)
taskkill /PID <PID> /F
```

**Cách 3**: Kill process (Mac/Linux)
```bash
# Tìm và kill
lsof -ti:1313 | xargs kill -9
```

### 6. "Error: cannot find module"

**Nguyên nhân**: Hugo modules chưa được init

**Giải pháp**:
```bash
hugo mod init github.com/TomDavis0310/Do_An_Mon_Hoc_Lap_Trinh_Mang
hugo mod get -u
```

## 📝 Lỗi Content

### 7. Bài viết không hiển thị

**Nguyên nhân 1**: `draft: true` trong front matter

**Giải pháp**:
```markdown
---
draft: false  # ← Đổi thành false
---
```

**Nguyên nhân 2**: Date trong tương lai

**Giải pháp**:
```markdown
---
date: 2025-10-10T10:00:00+07:00  # ← Kiểm tra date
---
```

**Test với draft**:
```bash
hugo server -D  # -D = show drafts
```

### 8. "error calling partial"

**Nguyên nhân**: Partial file không tồn tại hoặc sai tên

**Giải pháp**:
```bash
# Kiểm tra file tồn tại
ls layouts/partials/extend_head.html

# Kiểm tra tên file đúng (case-sensitive)
```

## 🖼️ Lỗi Images

### 9. Ảnh không hiển thị

**Nguyên nhân**: Đường dẫn ảnh sai

**Giải pháp**:

**Trong Markdown**:
```markdown
# ✅ Đúng
![Alt text](/images/photo.jpg)

# ❌ Sai
![Alt text](images/photo.jpg)
![Alt text](../static/images/photo.jpg)
```

**Trong config.toml**:
```toml
# ✅ Đúng
[params.profileMode]
imageUrl = "/images/profile.jpg"

# ❌ Sai
imageUrl = "static/images/profile.jpg"
```

### 10. Cover image không hiển thị

**Kiểm tra**:
```markdown
---
cover:
    image: "/images/cover.jpg"  # ← Đúng đường dẫn?
    alt: "Alt text"
    caption: "Caption"
---
```

**Verify file tồn tại**:
```bash
ls static/images/cover.jpg
```

## 🚀 Lỗi Build/Deploy

### 11. GitHub Actions failed

**Nguyên nhân 1**: Hugo version không đúng

**Giải pháp**: Update `.github/workflows/hugo.yml`:
```yaml
env:
  HUGO_VERSION: 0.121.0  # ← Đúng version
```

**Nguyên nhân 2**: Submodule không được checkout

**Giải pháp**: Đảm bảo có trong workflow:
```yaml
- name: Checkout
  uses: actions/checkout@v4
  with:
    submodules: recursive  # ← Important!
    fetch-depth: 0
```

**Nguyên nhân 3**: Path không đúng

**Giải pháp**: Check working directory:
```yaml
- name: Build with Hugo
  run: |
    cd "blog cá nhân"  # ← Đúng path
    hugo --gc --minify
```

### 12. Site bị 404 trên GitHub Pages

**Nguyên nhân**: baseURL không đúng

**Giải pháp**: Check `config.toml`:
```toml
# ✅ Đúng
baseURL = "https://TomDavis0310.github.io/Do_An_Mon_Hoc_Lap_Trinh_Mang/"

# ❌ Sai
baseURL = "https://TomDavis0310.github.io/"
baseURL = "http://localhost:1313/"
```

### 13. CSS/JS không load trên GitHub Pages

**Nguyên nhân**: Đường dẫn tuyệt đối không đúng

**Giải pháp**: Dùng `{{ .Site.BaseURL }}` trong templates:
```html
<!-- ✅ Đúng -->
<link rel="stylesheet" href="{{ .Site.BaseURL }}css/custom.css">

<!-- ❌ Sai -->
<link rel="stylesheet" href="/css/custom.css">
```

## ⚙️ Lỗi Configuration

### 14. "failed to extract shortcode"

**Nguyên nhân**: Syntax lỗi trong shortcode

**Giải pháp**: Kiểm tra cú pháp:
```markdown
# ✅ Đúng
{{< youtube id="abc123" >}}

# ❌ Sai
{{ youtube id="abc123" }}
{{< youtube id=abc123 >}}
```

### 15. "cannot parse config"

**Nguyên nhân**: Syntax lỗi trong config.toml

**Giải pháp**:
- Check indentation
- Check quotes (phải dùng "", không dùng '')
- Check brackets [], {}

**Validate TOML**: https://www.toml-lint.com/

### 16. Menu không hiển thị

**Nguyên nhân**: Cấu hình menu sai

**Kiểm tra** `config.toml`:
```toml
[[menu.main]]
identifier = "home"
name = "Home"
url = "/"
weight = 1  # ← Đúng thứ tự
```

## 🔍 Lỗi SEO & Meta Tags

### 17. Meta tags không hiển thị

**Nguyên nhân**: extend_head.html không được load

**Kiểm tra**:
```bash
# File phải tồn tại
ls layouts/partials/extend_head.html

# Kiểm tra trong HTML generated
hugo
cat public/index.html | grep "meta name"
```

### 18. Open Graph image không hiển thị

**Kiểm tra**:
```toml
# config.toml
[params]
images = ["/images/og-image.jpg"]  # ← File tồn tại?
```

```markdown
# Trong post
---
cover:
    image: "/images/cover.jpg"  # ← Dùng cho OG
---
```

## 💻 Lỗi Development

### 19. "Error: too many open files"

**Nguyên nhân**: Hệ thống hết file descriptors

**Giải pháp (Mac/Linux)**:
```bash
# Tăng limit
ulimit -n 10000

# Hoặc thêm vào ~/.bashrc
echo "ulimit -n 10000" >> ~/.bashrc
```

**Giải pháp (Windows)**:
- Restart máy
- Close các app không cần thiết

### 20. Build chậm

**Nguyên nhân**: Quá nhiều files hoặc images lớn

**Giải pháp**:

1. **Enable fast render**:
```bash
hugo server --disableFastRender
```

2. **Optimize images**:
```bash
# Install imagemin
npm install -g imagemin-cli

# Optimize
imagemin static/images/*.jpg --out-dir=static/images/
```

3. **Use page bundles**:
```
content/
└── posts/
    └── my-post/
        ├── index.md
        └── image.jpg  # ← Local to post
```

## 📱 Lỗi Mobile/Responsive

### 21. Site không responsive

**Kiểm tra**:
```html
<!-- Phải có trong head -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**Test responsive**:
```bash
# Local test
hugo server -D

# Browser DevTools: Ctrl+Shift+M
```

### 22. Font không load trên mobile

**Nguyên nhân**: Google Fonts blocked hoặc slow

**Giải pháp**: Add preconnect:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

## 🔐 Lỗi Security

### 23. "Insecure content" warning

**Nguyên nhân**: Mixed content (HTTP + HTTPS)

**Giải pháp**: Dùng HTTPS cho tất cả resources:
```html
<!-- ✅ Đúng -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<!-- ❌ Sai -->
<script src="http://code.jquery.com/jquery-3.6.0.min.js"></script>
```

## 🆘 Debug Tips

### General Debugging

```bash
# 1. Verbose output
hugo server --verbose

# 2. Debug mode
hugo server --debug

# 3. Check config
hugo config

# 4. Validate
hugo --validate

# 5. Clean cache
hugo --gc

# 6. Build from scratch
rm -rf public resources .hugo_build.lock
hugo
```

### Check Build Output

```bash
# Build và kiểm tra
hugo --minify

# Xem generated HTML
cat public/index.html

# Check links
hugo --gc --minify --verbose | grep "ERROR"
```

## 📞 Vẫn gặp lỗi?

1. **Check Hugo Documentation**: https://gohugo.io/documentation/
2. **PaperMod Wiki**: https://github.com/adityatelange/hugo-PaperMod/wiki
3. **Hugo Discourse**: https://discourse.gohugo.io/
4. **GitHub Issues**: https://github.com/TomDavis0310/Do_An_Mon_Hoc_Lap_Trinh_Mang/issues

## 🔨 Quick Fixes

```bash
# Reset everything
rm -rf public resources .hugo_build.lock
git submodule update --init --recursive
hugo server -D

# Rebuild from scratch
hugo --gc --minify

# Force update theme
cd themes/PaperMod
git pull origin master
cd ../..
```

---

**Lưu ý**: Luôn backup trước khi thử các lệnh fix! 💾
