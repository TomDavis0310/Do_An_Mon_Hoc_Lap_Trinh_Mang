# ⚡ Performance Optimization Guide

## 🎯 Mục Tiêu Performance

| Metric | Target | Current |
|--------|--------|---------|
| First Contentful Paint | < 1.8s | TBD |
| Time to Interactive | < 3.8s | TBD |
| Largest Contentful Paint | < 2.5s | TBD |
| Cumulative Layout Shift | < 0.1 | TBD |
| Total Blocking Time | < 300ms | TBD |
| Lighthouse Score | > 90 | TBD |

**Test tại**: https://pagespeed.web.dev/

## 🖼️ Image Optimization

### 1. Resize Images

**Problem**: Images quá lớn làm chậm site

**Solution**:

```bash
# Windows (install ImageMagick)
choco install imagemagick

# Resize images
magick input.jpg -resize 1200x output.jpg

# Batch resize all images
for %f in (*.jpg) do magick %f -resize 1200x resized/%f
```

**Recommended sizes**:
- Cover images: 1200x630px
- Profile: 180x180px
- Post images: 800-1200px width
- Thumbnails: 300x200px

### 2. Compress Images

**Tool 1: TinyPNG** (Online)
- https://tinypng.com/
- Lossless compression
- Giảm 50-70% file size

**Tool 2: ImageOptim** (Mac)
```bash
brew install imageoptim-cli
imageoptim *.jpg *.png
```

**Tool 3: Squoosh** (Web)
- https://squoosh.app/
- Modern formats (WebP, AVIF)

### 3. Use Modern Formats

**WebP Format** (Giảm 25-35% vs JPEG):

```bash
# Convert to WebP
magick input.jpg -quality 85 output.webp

# Batch convert
for %f in (*.jpg) do magick %f -quality 85 webp/%f.webp
```

**Hugo config** (Auto WebP):
```toml
# config.toml
[imaging]
  resampleFilter = "Lanczos"
  quality = 85
  formats = ["webp", "jpeg"]
```

### 4. Lazy Loading

**Method 1: Native (Already built-in PaperMod)**
```html
<img src="image.jpg" loading="lazy" alt="...">
```

**Method 2: Intersection Observer**
```javascript
// layouts/partials/extend_footer.html
<script>
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});
</script>
```

### 5. Image CDN

**Cloudinary** (Free tier: 25GB/month):

```html
<!-- Before -->
<img src="/images/photo.jpg" alt="Photo">

<!-- After -->
<img src="https://res.cloudinary.com/your-cloud/image/upload/f_auto,q_auto,w_800/photo.jpg" alt="Photo">
```

**Benefits**:
- Auto format (WebP, AVIF)
- Auto quality
- Resize on-the-fly
- Global CDN

## 📦 Minify & Bundle

### 1. HTML Minification

**Hugo build với minify**:
```bash
hugo --minify
```

**config.toml**:
```toml
[minify]
  disableCSS = false
  disableHTML = false
  disableJS = false
  disableJSON = false
  disableSVG = false
  disableXML = false
  
  [minify.tdewolff.html]
    keepWhitespace = false
```

### 2. CSS Optimization

**Remove unused CSS**:
```bash
# Install PurgeCSS
npm install -g purgecss

# Run
purgecss --css static/css/*.css --content layouts/**/*.html content/**/*.md --output static/css/
```

**Critical CSS** (inline above-the-fold):
```html
<!-- layouts/partials/extend_head.html -->
<style>
/* Critical CSS here - first 15-20kb */
:root {
    --primary-color: #3498db;
    --bg-color: #ffffff;
}
body { margin: 0; font-family: 'Inter', sans-serif; }
.header { /* ... */ }
</style>
```

### 3. JavaScript Optimization

**Defer non-critical JS**:
```html
<script src="/js/app.js" defer></script>
```

**Async for independent scripts**:
```html
<script src="https://analytics.com/script.js" async></script>
```

**Load order**:
```html
<!-- 1. Critical inline JS -->
<script>/* Critical code */</script>

<!-- 2. Deferred app JS -->
<script src="/js/app.js" defer></script>

<!-- 3. Async third-party -->
<script src="https://external.com/script.js" async></script>
```

## 🚀 Hugo Build Optimization

### 1. Fast Build

**config.toml**:
```toml
[build]
  useResourceCacheWhen = "always"
  writeStats = true
  
[caches]
  [caches.assets]
    dir = ":resourceDir/_gen"
    maxAge = "48h"
  [caches.images]
    dir = ":resourceDir/_gen"
    maxAge = "720h"
```

### 2. Image Processing

```toml
[imaging]
  resampleFilter = "Lanczos"
  quality = 85
  anchor = "Smart"
  
  [imaging.exif]
    disableDate = false
    disableLatLong = true
    includeFields = ""
    excludeFields = ""
```

### 3. Build Performance

```bash
# Clean cache before build
hugo --gc

# Fast development
hugo server --disableFastRender --buildDrafts

# Production build
hugo --gc --minify --cleanDestinationDir
```

## 🌐 CDN & Caching

### 1. Cloudflare Setup (Free)

**Step 1**: Add site to Cloudflare
- https://cloudflare.com
- Add domain
- Update nameservers

**Step 2**: Optimize settings

```
Speed > Optimization:
✅ Auto Minify (HTML, CSS, JS)
✅ Brotli
✅ Rocket Loader (Optional)

Caching > Configuration:
- Browser Cache TTL: 4 hours
- Cache Level: Standard

Page Rules:
URL: example.com/*
Settings:
  - Cache Level: Cache Everything
  - Edge Cache TTL: 1 month
  - Browser Cache TTL: 4 hours
```

### 2. GitHub Pages Caching

**Add headers** (via Hugo):

```html
<!-- layouts/index.html -->
{{ define "head" }}
<meta http-equiv="Cache-Control" content="max-age=3600, must-revalidate">
{{ end }}
```

### 3. Service Worker (Advanced)

**Create** `static/sw.js`:

```javascript
const CACHE_VERSION = 'v1';
const CACHE_NAME = `blog-cache-${CACHE_VERSION}`;

const STATIC_CACHE = [
    '/',
    '/css/custom.css',
    '/images/profile.jpg',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(STATIC_CACHE))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
```

**Register** in `extend_head.html`:
```html
<script>
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
}
</script>
```

## 🔤 Font Optimization

### 1. Font Loading Strategy

**Current** (in `extend_head.html`):
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700&display=swap" rel="stylesheet">
```

**Optimized**:
```html
<!-- Preload critical fonts -->
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" media="print" onload="this.media='all'">

<!-- Fallback -->
<noscript>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap">
</noscript>
```

### 2. Self-Host Fonts

**Download fonts**:
```bash
# Install google-webfonts-helper files
# Place in static/fonts/
```

**Update CSS**:
```css
@font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/inter-v12-latin-regular.woff2') format('woff2');
}
```

### 3. Subset Fonts

```html
<!-- Only load characters you need -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400&text=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789&display=swap" rel="stylesheet">
```

## 📊 Analytics Optimization

### 1. Google Analytics (Optimized)

**Replace** full GA with minimal version:

```html
<!-- Minimal GA -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX', {
    'send_page_view': false,
    'anonymize_ip': true
});
</script>
```

### 2. Lightweight Alternatives

**Plausible** (3kb script):
```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

**Fathom** (1kb script):
```html
<script src="https://cdn.usefathom.com/script.js" data-site="SITEID" defer></script>
```

## 🔍 Search Optimization

### 1. Algolia Search (Fast)

**Better than default search**:

```bash
# Install
npm install -g atomic-algolia

# Index site
hugo
atomic-algolia
```

### 2. Lunr.js (Local search)

**Lighter than full search**:
```javascript
// Implement lightweight search
// See: https://lunrjs.com/
```

## ⚡ Advanced Optimizations

### 1. Preload Critical Resources

```html
<!-- layouts/partials/extend_head.html -->
<link rel="preload" href="/css/custom.css" as="style">
<link rel="preload" href="/images/hero.jpg" as="image">
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
```

### 2. DNS Prefetch

```html
<link rel="dns-prefetch" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://fonts.gstatic.com">
<link rel="dns-prefetch" href="https://www.google-analytics.com">
```

### 3. Resource Hints

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="prefetch" href="/posts/next-article/">
```

### 4. HTTP/2 Server Push

**Netlify** (`netlify.toml`):
```toml
[[headers]]
  for = "/"
  [headers.values]
    Link = '''
    </css/custom.css>; rel=preload; as=style,
    </images/profile.jpg>; rel=preload; as=image
    '''
```

## 📱 Mobile Optimization

### 1. Responsive Images

```html
<img 
    srcset="/images/photo-480.jpg 480w,
            /images/photo-800.jpg 800w,
            /images/photo-1200.jpg 1200w"
    sizes="(max-width: 600px) 480px,
           (max-width: 900px) 800px,
           1200px"
    src="/images/photo-800.jpg"
    alt="Photo"
    loading="lazy"
>
```

### 2. Mobile-First CSS

```css
/* Mobile first */
.container {
    width: 100%;
    padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        width: 750px;
        padding: 2rem;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        width: 1000px;
    }
}
```

### 3. Touch Optimization

```css
/* Larger tap targets for mobile */
.button {
    min-height: 44px;
    min-width: 44px;
    padding: 12px 24px;
}

/* Smooth scrolling */
html {
    scroll-behavior: smooth;
}

/* Better touch scrolling */
.scroll-container {
    -webkit-overflow-scrolling: touch;
}
```

## 🧪 Performance Testing

### 1. Lighthouse

```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run test
lighthouse https://yoursite.com --view

# CI/CD test
lighthouse https://yoursite.com --output=json --output-path=./report.json
```

### 2. WebPageTest

- https://www.webpagetest.org/
- Test from multiple locations
- Filmstrip view
- Waterfall analysis

### 3. Chrome DevTools

```
F12 > Performance Tab:
1. Start recording
2. Load page
3. Stop recording
4. Analyze:
   - FCP, LCP
   - Long tasks
   - Layout shifts
```

## 📈 Monitoring

### 1. Real User Monitoring

**Google Analytics 4**:
```javascript
// Track Core Web Vitals
gtag('event', 'timing_complete', {
    name: 'load',
    value: Math.round(performance.now()),
    event_category: 'performance'
});
```

### 2. Synthetic Monitoring

**Uptime Robot** (Free):
- https://uptimerobot.com/
- Check site every 5 minutes
- Alert on downtime

**PageSpeed Insights API**:
```bash
curl "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://yoursite.com"
```

## 🎯 Performance Checklist

```markdown
### Images
- [ ] All images < 200KB
- [ ] Using WebP format
- [ ] Lazy loading enabled
- [ ] Responsive images (srcset)
- [ ] Optimized dimensions

### Code
- [ ] Minified HTML/CSS/JS
- [ ] Removed unused CSS
- [ ] Deferred non-critical JS
- [ ] Inline critical CSS
- [ ] Bundled assets

### Fonts
- [ ] Limited to 2-3 font families
- [ ] Using font-display: swap
- [ ] Preloaded critical fonts
- [ ] Subset fonts if possible

### Caching
- [ ] Browser caching configured
- [ ] CDN enabled
- [ ] Service worker (optional)

### Third-Party
- [ ] Minimal analytics script
- [ ] Async/defer third-party scripts
- [ ] Lazy load social embeds

### Testing
- [ ] Lighthouse score > 90
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] Mobile tested
```

## 🚀 Quick Wins

```bash
# 1. Minify build
hugo --minify

# 2. Optimize images (batch)
magick mogrify -resize 1200x -quality 85 static/images/*.jpg

# 3. Enable CDN (Cloudflare)
# Sign up + add site

# 4. Compress assets
# Enable Brotli in Cloudflare

# 5. Lazy load images
# Already in PaperMod theme!

# 6. Preload fonts
# Add to extend_head.html
```

## 📚 Resources

- **Web.dev**: https://web.dev/learn/
- **Lighthouse**: https://developers.google.com/web/tools/lighthouse
- **WebPageTest**: https://www.webpagetest.org/
- **ImageOptim**: https://imageoptim.com/

---

**Target**: 90+ Lighthouse score! 🎯⚡
