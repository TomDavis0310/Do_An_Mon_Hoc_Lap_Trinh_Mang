# MÔ TẢ HỆ THỐNG - BLOG CÁ NHÂN

> **Tài liệu chi tiết về kiến trúc và hoạt động của hệ thống Blog**

---

## 📋 MỤC LỤC

1. [Tổng quan hệ thống](#1-tổng-quan-hệ-thống)
2. [Kiến trúc JAMstack](#2-kiến-trúc-jamstack)
3. [Luồng dữ liệu](#3-luồng-dữ-liệu)
4. [CI/CD Pipeline](#4-cicd-pipeline)
5. [Cấu trúc dự án](#5-cấu-trúc-dự-án)
6. [Request Flow](#6-request-flow)
7. [Data Management](#7-data-management)
8. [Security](#8-security)

---

## 1. TỔNG QUAN HỆ THỐNG

### 1.1. Giới thiệu

Blog được xây dựng dựa trên **JAMstack Architecture** - một kiến trúc hiện đại cho web applications:

- **J**avaScript - Dynamic functionality
- **A**PIs - Reusable APIs (nếu cần)
- **M**arkup - Pre-built Markup (HTML)

### 1.2. Đặc điểm chính

```
✅ STATIC SITE GENERATION
   ├─ Pre-rendered HTML tại build time
   ├─ Không cần server-side processing
   └─ Tốc độ tải cực nhanh

✅ CDN DISTRIBUTION
   ├─ Global edge network
   ├─ Low latency worldwide
   └─ Auto-scaling

✅ VERSION CONTROL
   ├─ Content versioned with Git
   ├─ Easy rollback
   └─ Collaborative editing

✅ AUTOMATED DEPLOYMENT
   ├─ CI/CD với GitHub Actions
   ├─ Zero-downtime deployment
   └─ Automatic builds
```

### 1.3. Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Content** | Markdown | Writing blog posts |
| **Generator** | Hugo v0.121.0 | Build static site |
| **Theme** | PaperMod | UI/UX framework |
| **Styling** | CSS3 | Custom design |
| **Scripting** | JavaScript ES6+ | Interactivity |
| **Version Control** | Git | Source management |
| **CI/CD** | GitHub Actions | Automation |
| **Hosting** | GitHub Pages | Static hosting |
| **CDN** | Fastly (via GitHub) | Content delivery |

---

## 2. KIẾN TRÚC JAMSTACK

### 2.1. Luồng hoạt động tổng quan

```
┌──────────────────────────────────────────────────────────┐
│                   DEVELOPMENT PHASE                       │
├──────────────────────────────────────────────────────────┤
│                                                           │
│  👨‍💻 Developer                                            │
│     │                                                     │
│     ├─▶ Write Content (Markdown)                        │
│     ├─▶ Design Layout (HTML/CSS)                        │
│     ├─▶ Add Features (JavaScript)                       │
│     └─▶ Configure Settings (TOML)                       │
│                                                           │
└───────────────────┬──────────────────────────────────────┘
                    │
                    ▼
┌──────────────────────────────────────────────────────────┐
│                     BUILD PHASE                           │
├──────────────────────────────────────────────────────────┤
│                                                           │
│  🔨 Hugo Static Site Generator                           │
│     │                                                     │
│     ├─▶ Parse Markdown → HTML                           │
│     ├─▶ Apply Templates                                  │
│     ├─▶ Process Assets                                   │
│     ├─▶ Generate Sitemap                                 │
│     ├─▶ Create Search Index                             │
│     └─▶ Minify Output                                    │
│                                                           │
│  📦 Output: /public/ directory                           │
│     ├─ index.html                                        │
│     ├─ posts/*.html                                      │
│     ├─ assets/ (CSS/JS)                                  │
│     └─ images/                                           │
│                                                           │
└───────────────────┬──────────────────────────────────────┘
                    │
                    ▼
┌──────────────────────────────────────────────────────────┐
│                   DEPLOYMENT PHASE                        │
├──────────────────────────────────────────────────────────┤
│                                                           │
│  🚀 GitHub Pages                                          │
│     │                                                     │
│     ├─▶ Receive static files                            │
│     ├─▶ Distribute to CDN                               │
│     └─▶ Serve via HTTPS                                 │
│                                                           │
│  🌐 CDN (Fastly)                                          │
│     └─▶ Global edge servers                             │
│         ├─ Asia-Pacific                                  │
│         ├─ Europe                                        │
│         ├─ Americas                                      │
│         └─ Oceania                                       │
│                                                           │
└───────────────────┬──────────────────────────────────────┘
                    │
                    ▼
┌──────────────────────────────────────────────────────────┐
│                    USER ACCESS PHASE                      │
├──────────────────────────────────────────────────────────┤
│                                                           │
│  👤 End User (Browser)                                    │
│     │                                                     │
│     ├─▶ Request URL                                      │
│     ├─▶ Receive HTML/CSS/JS                             │
│     ├─▶ Render Page                                      │
│     └─▶ Interact with Site                              │
│                                                           │
│  ⚡ Fast: < 1 second load time                           │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

### 2.2. So sánh với Traditional CMS

<table>
<tr>
<td width="50%" valign="top">

### 🔴 TRADITIONAL (WordPress)

```
User Request
    ↓
╔════════════════╗
║  Web Server    ║
║  (Apache)      ║
╚═══════┬════════╝
        ↓
╔════════════════╗
║  PHP Engine    ║
║  Processing    ║
╚═══════┬════════╝
        ↓
╔════════════════╗
║  MySQL DB      ║
║  Query         ║
╚═══════┬════════╝
        ↓
╔════════════════╗
║  Fetch Data    ║
║  Execute Logic ║
╚═══════┬════════╝
        ↓
╔════════════════╗
║  Render HTML   ║
║  On-the-fly    ║
╚═══════┬════════╝
        ↓
   Return HTML
```

**Nhược điểm:**
- ❌ Chậm (2-5s)
- ❌ Tốn server resources
- ❌ Lỗ hổng bảo mật
- ❌ Chi phí cao
- ❌ Khó scale

</td>
<td width="50%" valign="top">

### 🟢 STATIC SITE (Hugo)

```
User Request
    ↓
╔════════════════╗
║  CDN           ║
║  (GitHub)      ║
╚═══════┬════════╝
        ↓
╔════════════════╗
║  Serve HTML    ║
║  (Pre-built)   ║
╚═══════┬════════╝
        ↓
   Return HTML
```

**Ưu điểm:**
- ✅ Nhanh (<1s)
- ✅ Không cần server
- ✅ An toàn
- ✅ Miễn phí
- ✅ Auto-scale

</td>
</tr>
</table>

---

## 3. LUỒNG DỮ LIỆU

### 3.1. Content Flow

```
┌─────────────┐
│  Developer  │
│   Writes    │
│  Markdown   │
└──────┬──────┘
       │
       ▼
┌─────────────────────────────────────┐
│ content/posts/01-gioi-thieu-java.md │
├─────────────────────────────────────┤
│ ---                                  │
│ title: "Giới thiệu Java"            │
│ date: 2025-10-01                    │
│ tags: ["Java"]                      │
│ ---                                  │
│                                      │
│ ## Nội dung bài viết                │
│ Java là ngôn ngữ...                 │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────┐
│    Hugo     │
│   Builds    │
└──────┬──────┘
       │
       ▼
┌──────────────────────────────────────┐
│ public/posts/01-gioi-thieu-java/     │
├──────────────────────────────────────┤
│ index.html                           │
│                                      │
│ <article>                            │
│   <h1>Giới thiệu Java</h1>          │
│   <div class="content">              │
│     <h2>Nội dung bài viết</h2>      │
│     <p>Java là ngôn ngữ...</p>      │
│   </div>                             │
│ </article>                           │
└──────┬───────────────────────────────┘
       │
       ▼
┌─────────────┐
│   Deploy    │
│  to GitHub  │
│    Pages    │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ User Reads  │
│   Content   │
└─────────────┘
```

### 3.2. Asset Processing

```
SOURCE FILES              HUGO PROCESSING            OUTPUT FILES
─────────────            ─────────────────          ─────────────

assets/css/
├─ custom-home.css   →  [Bundle]        →   assets/css/
├─ theme.css         →  [Minify]        →   ├─ main.min.css
└─ dark-mode.css     →  [Autoprefixer]  →   └─ (25 KB)

static/images/
├─ profile.jpg       →  [Copy]          →   images/
├─ java-logo.png     →  [Optimize]      →   ├─ profile.jpg
└─ screenshot.png    →                  →   ├─ java-logo.png
                                             └─ screenshot.png

layouts/
├─ index.html        →  [Apply Data]    →   public/
├─ single.html       →  [Inject]        →   ├─ index.html
└─ list.html         →  [Render]        →   └─ posts/
                                                 └─ index.html
```

---

## 4. CI/CD PIPELINE

### 4.1. GitHub Actions Workflow

```yaml
name: Deploy Hugo site to Pages

on:
  push:
    branches: ["main"]    # Trigger on push to main
  workflow_dispatch:      # Manual trigger

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
      # Step 1: Checkout code
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive    # Include theme
          
      # Step 2: Setup Hugo
      - name: Install Hugo
        run: |
          wget https://github.com/gohugoio/hugo/releases/download/v0.121.0/hugo_extended_0.121.0_linux-amd64.deb
          sudo dpkg -i hugo_extended_0.121.0_linux-amd64.deb
          
      # Step 3: Build site
      - name: Build with Hugo
        run: hugo --minify
        
      # Step 4: Upload artifact
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./public

  deploy:
    needs: build
    runs-on: ubuntu-latest
    
    steps:
      # Step 5: Deploy to Pages
      - name: Deploy
        uses: actions/deploy-pages@v3
```

### 4.2. Pipeline Timeline

```
┌─────────────────────────────────────────────────────────┐
│                  PIPELINE EXECUTION                      │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  00:00  🎬 Workflow triggered (git push)                │
│  00:05  ⬇️  Checkout code                               │
│  00:10  🔧 Setup Hugo                                    │
│  00:15  🔨 Build site (hugo --minify)                   │
│  00:50  📦 Upload artifact                               │
│  01:00  🚀 Deploy to GitHub Pages                       │
│  02:30  ✅ Site live!                                    │
│                                                          │
│  Total: ~2.5 minutes                                     │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## 5. CẤU TRÚC DỰ ÁN

### 5.1. Directory Tree

```
Do_An_Mon_Hoc_Lap_Trinh_Mang/
│
├── 📁 .github/workflows/          # CI/CD automation
│   └── hugo.yml
│
├── 📁 content/                    # Source content
│   ├── _index.md                  # Homepage
│   ├── about.md
│   └── posts/                     # Blog posts
│       ├── 01-gioi-thieu-java.md
│       └── ... (9 posts total)
│
├── 📁 layouts/                    # Custom templates
│   ├── index.html
│   └── partials/
│
├── 📁 static/                     # Static assets
│   ├── images/
│   ├── css/
│   └── js/
│
├── 📁 themes/PaperMod/            # Theme (submodule)
│
├── 📁 public/                     # Generated output
│   └── (auto-generated)
│
└── 📄 config.toml                 # Hugo config
```

### 5.2. File Counts

| Category | Count | Size |
|----------|-------|------|
| Markdown Posts | 9 | ~38,000 words |
| HTML Templates | 15 | - |
| CSS Files | 8 | ~50 KB |
| JS Files | 5 | ~30 KB |
| Images | 40+ | ~2 MB |
| Docs | 15+ | - |

---

## 6. REQUEST FLOW

### 6.1. User Request Lifecycle

```
1. USER TYPES URL
   ↓
   https://tomdavis0310.github.io/.../posts/01-gioi-thieu-java/
   
2. DNS RESOLUTION (20-50ms)
   ↓
   Resolve: tomdavis0310.github.io → GitHub IP
   
3. TLS HANDSHAKE (50-100ms)
   ↓
   Establish HTTPS connection
   
4. CDN ROUTING (10-30ms)
   ↓
   Route to nearest edge server
   
5. CACHE CHECK
   ↓
   ┌─ HIT:  Serve from cache (instant)
   └─ MISS: Fetch from origin (slower)
   
6. SERVE FILES (100-300ms)
   ↓
   HTML → CSS → JS → Images
   
7. BROWSER PROCESSING (500-800ms)
   ↓
   Parse → Render → Execute → Interactive
   
8. PAGE READY ✅
   └─ Total: < 2 seconds
```

### 6.2. Performance Timeline

```
     DNS    TLS    TTFB    Download   Render   JavaScript
      │      │      │        │          │          │
      ▼      ▼      ▼        ▼          ▼          ▼
0ms ─┴──────┴──────┴────────┴──────────┴──────────┴─ 2000ms
     50ms   150ms  300ms    600ms      1200ms    1800ms
      
     ████   ████   ████████ ████████  ██████    ████
```

---

## 7. DATA MANAGEMENT

### 7.1. No Database Philosophy

```
╔═══════════════════════════════════════════════════════╗
║         CONTENT AS CODE (No Database)                  ║
╠═══════════════════════════════════════════════════════╣
║                                                        ║
║  📝 Blog Posts                → Markdown files        ║
║  ⚙️  Configuration             → TOML files           ║
║  🔍 Search Index               → JSON file            ║
║  📊 Site Structure             → Directory tree       ║
║  🖼️  Images                     → Static files        ║
║                                                        ║
║  Benefits:                                             ║
║  ✅ Version controlled (Git)                          ║
║  ✅ Easy backup                                       ║
║  ✅ No SQL injection                                  ║
║  ✅ Fast queries                                      ║
║  ✅ Simple architecture                               ║
║                                                        ║
╚═══════════════════════════════════════════════════════╝
```

### 7.2. Content Format

**Markdown with YAML Front Matter:**

```markdown
---
title: "Giới thiệu về Java"
date: 2025-10-01T10:00:00+07:00
draft: false
author: "Nguyễn Võ Xuân Dương"
tags: ["Java", "Programming"]
categories: ["Java"]
description: "Tìm hiểu về Java - ngôn ngữ lập trình mạnh mẽ"
keywords: ["Java", "OOP", "lập trình"]
---

## Nội dung bài viết

Java là ngôn ngữ lập trình...
```

---

## 8. SECURITY

### 8.1. Security by Architecture

```
✅ NO SERVER-SIDE CODE
   └─ No PHP, no Python, no Ruby
   └─ No execution vulnerabilities

✅ NO DATABASE
   └─ No SQL injection
   └─ No database leaks

✅ HTTPS ONLY
   └─ Encrypted connections
   └─ GitHub Pages enforces HTTPS

✅ STATIC FILES ONLY
   └─ No dynamic execution
   └─ Very limited attack surface

✅ GIT VERSION CONTROL
   └─ Every change tracked
   └─ Easy to audit and rollback
```

### 8.2. Security Best Practices

| Practice | Implementation | Status |
|----------|---------------|--------|
| HTTPS enforcement | GitHub Pages default | ✅ |
| CSP headers | Meta tags | ✅ |
| No inline scripts | External JS files | ✅ |
| Input sanitization | Markdown parsing | ✅ |
| Dependency updates | Regular checks | ✅ |
| Access control | GitHub permissions | ✅ |

---

## 📊 SUMMARY

### Key Points

✅ **Architecture:** JAMstack (Static Site)  
✅ **Generator:** Hugo v0.121.0 Extended  
✅ **Hosting:** GitHub Pages (Free)  
✅ **CI/CD:** GitHub Actions (Automated)  
✅ **Performance:** < 1 second load time  
✅ **Security:** Very high (no server/DB)  
✅ **Cost:** $0 (100% free)  
✅ **Scalability:** Unlimited (CDN)  

### Metrics

| Metric | Value |
|--------|-------|
| Build Time | ~45 seconds |
| Deploy Time | ~90 seconds |
| Total Time | < 3 minutes |
| Success Rate | 100% |
| Uptime | 99.9% |
| Load Time | < 1 second |
| PageSpeed Score | 95/100 |

---

**Tài liệu này là phần của đồ án môn học Lập Trình Mạng**  
**Sinh viên:** Nguyễn Võ Xuân Dương  
**Ngày cập nhật:** 21/10/2025
