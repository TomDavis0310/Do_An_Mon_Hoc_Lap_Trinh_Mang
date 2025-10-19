# 🚀 Hướng dẫn Deploy Blog lên GitHub Pages

## Phương pháp 1: Tự động với GitHub Actions (Khuyến nghị ⭐)

### Bước 1: Cấu hình Repository

1. **Push code lên GitHub:**
   ```bash
   cd "blog cá nhân"
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TomDavis0310/Do_An_Mon_Hoc_Lap_Trinh_Mang.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Vào repository trên GitHub
   - Settings → Pages
   - Source: **GitHub Actions**

### Bước 2: Cài đặt Theme

Theme đã được cấu hình trong workflow, nhưng bạn cần:

```bash
# Add theme as submodule
git submodule add --depth=1 https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod

# Push submodule
git add .gitmodules themes/
git commit -m "Add PaperMod theme"
git push
```

### Bước 3: Trigger Deployment

Mỗi khi bạn push code:

```bash
git add .
git commit -m "Update content"
git push origin main
```

GitHub Actions sẽ tự động:
- ✅ Install Hugo
- ✅ Build site
- ✅ Deploy to GitHub Pages

### Bước 4: Kiểm tra Deployment

1. Vào **Actions** tab trên GitHub
2. Xem workflow đang chạy
3. Sau 2-3 phút, site sẽ live tại:
   ```
   https://tomdavis0310.github.io/Do_An_Mon_Hoc_Lap_Trinh_Mang/
   ```

## Phương pháp 2: Manual Deploy với gh-pages

### Bước 1: Build Site

```bash
# Build with minification
hugo --minify

# Output sẽ ở thư mục public/
```

### Bước 2: Deploy

```bash
cd public

# Initialize git
git init
git add .
git commit -m "Deploy site"

# Create gh-pages branch
git branch -M gh-pages

# Push to GitHub
git remote add origin https://github.com/TomDavis0310/Do_An_Mon_Hoc_Lap_Trinh_Mang.git
git push -u origin gh-pages --force
```

### Bước 3: Cấu hình GitHub Pages

- Settings → Pages
- Source: **Deploy from a branch**
- Branch: **gh-pages** / **(root)**
- Save

## Phương pháp 3: Deploy với Netlify (Alternative)

### Bước 1: Tạo tài khoản Netlify

1. Truy cập: https://www.netlify.com/
2. Sign up với GitHub

### Bước 2: Import Project

1. **New site from Git**
2. Chọn repository
3. Cấu hình build:
   - Build command: `hugo --minify`
   - Publish directory: `public`
   - Base directory: `blog cá nhân`

### Bước 3: Environment Variables

Thêm environment variable:
- Key: `HUGO_VERSION`
- Value: `0.121.0`

### Bước 4: Deploy

Netlify sẽ tự động deploy khi có commit mới!

Site sẽ có URL: `https://your-site-name.netlify.app`

## Custom Domain (Optional)

### Với GitHub Pages

1. Mua domain (VD: xuanduong.com)
2. Thêm DNS records:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
          185.199.109.153
          185.199.110.153
          185.199.111.153
   
   Type: CNAME
   Name: www
   Value: tomdavis0310.github.io
   ```

3. Trong repository:
   - Settings → Pages → Custom domain
   - Nhập: `xuanduong.com`
   - Enforce HTTPS

4. Tạo file `static/CNAME`:
   ```
   xuanduong.com
   ```

### Với Netlify

1. Domain settings → Add custom domain
2. Cấu hình DNS theo hướng dẫn
3. Netlify tự động cấp SSL certificate

## 🔧 Troubleshooting

### Lỗi: Page không hiển thị đúng

**Nguyên nhân**: baseURL không đúng

**Giải pháp**: Kiểm tra `config.toml`:
```toml
baseURL = "https://tomdavis0310.github.io/Do_An_Mon_Hoc_Lap_Trinh_Mang/"
```

### Lỗi: Theme not found

**Nguyên nhân**: Theme chưa được add

**Giải pháp**:
```bash
git submodule add --depth=1 https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod
git submodule update --init --recursive
```

### Lỗi: CSS/JS không load

**Nguyên nhân**: Đường dẫn tuyệt đối không đúng

**Giải pháp**: Trong HTML/CSS, dùng:
- `{{ .Site.BaseURL }}` trong templates
- `/css/style.css` trong static files

### Lỗi: GitHub Actions failed

**Kiểm tra**:
1. Actions tab → Click vào workflow fail
2. Xem logs
3. Thường do:
   - Hugo version không đúng
   - Theme chưa được add
   - Path không đúng

**Giải pháp**: Update `hugo.yml` với đúng paths và versions

## 📝 Workflow Deployment

### Sau mỗi update:

```bash
# 1. Edit content
code content/posts/new-post.md

# 2. Test local
hugo server -D

# 3. Build
hugo --minify

# 4. Commit & Push
git add .
git commit -m "Add new post: [title]"
git push origin main

# 5. Wait for GitHub Actions (2-3 mins)

# 6. Verify site
# https://tomdavis0310.github.io/Do_An_Mon_Hoc_Lap_Trinh_Mang/
```

## 🔍 Kiểm tra Site đã Deploy

### 1. GitHub Pages Status

- Settings → Pages
- Xem status và URL

### 2. GitHub Actions

- Actions tab
- Xem history và logs

### 3. Browser

- Truy cập URL
- Check responsive (F12 → Device Mode)
- Test navigation

### 4. Performance

- Google PageSpeed Insights: https://pagespeed.web.dev/
- Paste URL và analyze

## 💡 Best Practices

1. **Luôn test local trước khi push**
   ```bash
   hugo server -D
   ```

2. **Minify content khi build**
   ```bash
   hugo --minify
   ```

3. **Optimize images**
   - Resize to appropriate size
   - Compress (TinyPNG, ImageOptim)
   - Use WebP format

4. **Use meaningful commit messages**
   ```bash
   git commit -m "feat: Add Java OOP tutorial"
   git commit -m "fix: Update broken links"
   git commit -m "style: Improve mobile responsiveness"
   ```

5. **Monitor Analytics**
   - Google Analytics
   - GitHub Insights

## 📊 Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] Images display properly
- [ ] Links work
- [ ] Mobile responsive
- [ ] SEO meta tags present
- [ ] SSL enabled (HTTPS)
- [ ] Performance score > 90
- [ ] No console errors
- [ ] Social share works

## 🎉 Congratulations!

Blog của bạn đã live! 🚀

**Next steps:**
- Share với bạn bè
- Submit to Google Search Console
- Add to Bing Webmaster Tools
- Share on social media
- Write more content!

---

Có thắc mắc? Tạo issue trên GitHub! 💬
