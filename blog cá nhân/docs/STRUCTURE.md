# 📁 Cấu trúc Project Chi Tiết

## 🌳 Directory Tree

```
blog-ca-nhan/
│
├── .github/
│   └── workflows/
│       └── hugo.yml                 # GitHub Actions workflow cho auto-deploy
│
├── .gitignore                       # Git ignore rules
│
├── config.toml                      # Cấu hình chính của Hugo site
│
├── content/                         # Nội dung website
│   ├── _index.md                   # Trang chủ
│   ├── search.md                   # Trang tìm kiếm
│   └── posts/                      # Thư mục bài viết
│       ├── 01-gioi-thieu-java.md
│       ├── 02-cai-dat-java-vscode.md
│       ├── 03-lap-trinh-huong-doi-tuong-java.md
│       ├── 04-xu-ly-ngoai-le-java.md
│       ├── 05-javascript-co-ban.md
│       ├── 06-dom-javascript.md
│       ├── 07-es6-javascript.md
│       ├── 08-so-sanh-java-javascript.md
│       └── 09-spring-boot-javascript-app.md
│
├── layouts/                         # Custom layouts và templates
│   └── partials/
│       ├── extend_head.html        # Custom head elements (fonts, meta, analytics)
│       └── footer.html             # Custom footer với copyright
│
├── static/                          # Static files (không được xử lý bởi Hugo)
│   ├── css/
│   │   └── custom.css              # Custom CSS cho theme
│   ├── images/                     # Hình ảnh
│   │   ├── profile.jpg             # Ảnh đại diện (cần thêm)
│   │   ├── favicon.ico             # Favicon (cần thêm)
│   │   └── covers/                 # Ảnh cover cho bài viết
│   └── CNAME                       # Custom domain (nếu có)
│
├── themes/                          # Hugo themes
│   └── PaperMod/                   # PaperMod theme (git submodule)
│
├── public/                          # Generated site (không commit)
│
├── resources/                       # Hugo cache (không commit)
│
├── DEPLOYMENT.md                    # Hướng dẫn deploy chi tiết
├── INSTALL_HUGO.md                 # Hướng dẫn cài Hugo trên Windows
├── LICENSE                         # MIT License
├── QUICKSTART.md                   # Quick start guide
└── README.md                       # Documentation chính

```

## 📄 Mô tả các File Quan Trọng

### 1. config.toml
**Chức năng**: File cấu hình chính của Hugo
**Nội dung**:
- Site metadata (title, description, author)
- Theme configuration (PaperMod)
- Menu structure
- SEO settings
- Social media links
- Google Analytics
- RSS, Sitemap settings

### 2. content/posts/*.md
**Chức năng**: Các bài viết blog
**Format**: Markdown với YAML front matter
**Bao gồm**:
- Metadata (title, date, tags, categories)
- SEO (description, keywords)
- Cover image
- Nội dung bài viết

### 3. layouts/partials/extend_head.html
**Chức năng**: Thêm custom elements vào HTML head
**Bao gồm**:
- Google Fonts (Inter, Poppins)
- Custom CSS
- SEO meta tags
- Open Graph tags
- Schema.org markup
- Analytics scripts
- Reading progress bar

### 4. layouts/partials/footer.html
**Chức năng**: Custom footer
**Bao gồm**:
- Copyright notice
- Author info
- GitHub link
- Hugo/Theme credits

### 5. static/css/custom.css
**Chức năng**: Custom styling
**Bao gồm**:
- Color scheme (blue-gray-white)
- Font customization
- Post card effects
- Hover animations
- Dark mode support
- Responsive design
- Custom scrollbar

### 6. .github/workflows/hugo.yml
**Chức năng**: GitHub Actions workflow
**Process**:
1. Install Hugo Extended
2. Checkout code
3. Build site
4. Deploy to GitHub Pages

### 7. README.md
**Chức năng**: Documentation
**Bao gồm**:
- Project introduction
- Installation guide
- Usage instructions
- Customization tips
- Deployment guide
- Troubleshooting

## 🔧 Files Cần Thêm (Manual)

### 1. Ảnh Profile
**Đường dẫn**: `static/images/profile.jpg`
**Kích thước**: 180x180px
**Format**: JPG hoặc PNG

### 2. Favicon
**Đường dẫn**: `static/images/`
**Cần tạo**:
- favicon.ico
- favicon-16x16.png
- favicon-32x32.png
- apple-touch-icon.png

**Tool**: https://realfavicongenerator.net/

### 3. Ảnh Cover cho Posts
**Đường dẫn**: `static/images/`
**Kích thước đề xuất**: 1200x630px (Open Graph)
**Tên file**:
- java-intro.jpg
- java-setup.jpg
- java-oop.jpg
- java-exception.jpg
- javascript-intro.jpg
- javascript-dom.jpg
- es6-features.jpg
- java-vs-javascript.jpg
- spring-boot-javascript.jpg

## 🎨 Theme Structure (PaperMod)

```
themes/PaperMod/
├── layouts/
│   ├── _default/           # Default templates
│   ├── partials/           # Reusable components
│   └── shortcodes/         # Custom shortcodes
├── assets/
│   ├── css/               # Theme CSS
│   └── js/                # Theme JavaScript
└── static/                # Theme static files
```

**Note**: Không chỉnh sửa trực tiếp theme. Dùng override trong project root.

## 🔄 Override System

Hugo cho phép override theme files:

1. **Layout override**: Tạo file cùng tên trong `layouts/`
2. **Partial override**: Tạo file cùng tên trong `layouts/partials/`
3. **CSS override**: Import trong `static/css/custom.css`
4. **Static files**: Đặt trong `static/`

## 📦 Build Output

Khi chạy `hugo`:
- Generated site → `public/`
- Processed resources → `resources/`
- Build lock → `.hugo_build.lock`

**Note**: Không commit các folder này (đã có trong .gitignore)

## 🚀 Development Workflow

```bash
# 1. Start dev server
hugo server -D

# 2. Create new post
hugo new posts/new-post.md

# 3. Edit content
code content/posts/new-post.md

# 4. Preview changes
# → Auto reload at localhost:1313

# 5. Build for production
hugo --minify

# 6. Deploy
git add .
git commit -m "Add new post"
git push origin main
```

## 📚 Related Files

- **README.md** - Main documentation
- **QUICKSTART.md** - Quick setup guide
- **DEPLOYMENT.md** - Deployment instructions
- **INSTALL_HUGO.md** - Hugo installation on Windows
- **LICENSE** - MIT License

## 🔑 Key Features Location

| Feature | Location |
|---------|----------|
| Site config | `config.toml` |
| Blog posts | `content/posts/` |
| Custom CSS | `static/css/custom.css` |
| SEO metadata | `layouts/partials/extend_head.html` |
| Footer | `layouts/partials/footer.html` |
| Menu | `config.toml` → `[[menu.main]]` |
| Social links | `config.toml` → `[[params.socialIcons]]` |
| Analytics | `config.toml` → `googleAnalytics` |
| Theme settings | `config.toml` → `[params]` |

## 💡 Tips

1. **Always test local first**: `hugo server -D`
2. **Use meaningful file names**: Lowercase, dash-separated
3. **Organize images**: Use subfolders in `static/images/`
4. **Keep posts organized**: Use consistent front matter
5. **Optimize assets**: Compress images, minify CSS/JS
6. **Version control**: Commit often with clear messages
7. **Backup**: Push to GitHub regularly

## 📞 Support

Có thắc mắc? Xem:
- [Hugo Documentation](https://gohugo.io/documentation/)
- [PaperMod Wiki](https://github.com/adityatelange/hugo-PaperMod/wiki)
- [GitHub Issues](https://github.com/TomDavis0310/Do_An_Mon_Hoc_Lap_Trinh_Mang/issues)

---

**Happy blogging! 🎉**
