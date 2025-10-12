# ✍️ Hướng Dẫn Viết Bài Mới

## 🚀 Quick Start

### Tạo bài mới (Cách nhanh nhất)

```bash
# Tạo bài mới
hugo new posts/ten-bai-viet.md

# Mở file và chỉnh sửa
code content/posts/ten-bai-viet.md
```

**Kết quả**: Hugo sẽ tự động tạo file với front matter template!

## 📋 Front Matter Template

### Basic Template

```markdown
---
title: "Tiêu Đề Bài Viết"
date: 2025-01-20T10:00:00+07:00
draft: false
author: "Nguyễn Võ Xuân Dương"
tags: ["Java", "Programming"]
categories: ["Tutorial"]
description: "Mô tả ngắn gọn về bài viết (150-160 ký tự)"
keywords: ["java", "tutorial", "lập trình"]
---

# Nội dung bài viết ở đây
```

### Advanced Template (With Cover Image)

```markdown
---
title: "Tiêu Đề Bài Viết Chi Tiết"
date: 2025-01-20T10:00:00+07:00
lastmod: 2025-01-20T15:00:00+07:00
draft: false
author: "Nguyễn Võ Xuân Dương"
authorLink: "https://github.com/TomDavis0310"

tags: ["Java", "Spring Boot", "Backend"]
categories: ["Tutorial", "Java"]

description: "Mô tả chi tiết về bài viết này, nên dài khoảng 150-160 ký tự để tối ưu SEO"
summary: "Tóm tắt ngắn gọn hiển thị trong list posts"

keywords:
  - java spring boot
  - spring framework
  - backend development
  - lập trình java

cover:
    image: "/images/spring-boot-cover.jpg"
    alt: "Spring Boot Tutorial"
    caption: "Hướng dẫn Spring Boot từ A-Z"
    relative: false
    hidden: false

showToc: true
TocOpen: true
hidemeta: false
comments: true
disableShare: false
disableHLJS: false
hideSummary: false
searchHidden: false
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowWordCount: true
ShowRssButtonInSectionTermList: true
UseHugoToc: true
---

# Nội dung bài viết
```

## 📁 Cấu Trúc Thư Mục

### Option 1: Single Markdown File

```
content/
└── posts/
    └── my-post.md
```

**Ưu điểm**: Đơn giản, nhanh
**Nhược điểm**: Images ở `static/images/`

### Option 2: Page Bundle (Recommended!)

```
content/
└── posts/
    └── my-post/
        ├── index.md
        ├── image1.jpg
        ├── image2.png
        └── diagram.svg
```

**Ưu điểm**: 
- Images cùng folder với post
- Dễ quản lý
- Di chuyển post dễ dàng

**Sử dụng**:
```bash
# Tạo page bundle
mkdir -p content/posts/my-post
touch content/posts/my-post/index.md

# Copy images vào
cp image.jpg content/posts/my-post/
```

**Trong markdown**:
```markdown
![Alt text](image1.jpg)  <!-- Không cần /images/ -->
```

## ✨ Markdown Features

### 1. Headings

```markdown
# H1 - Tiêu đề chính (chỉ dùng 1 lần)
## H2 - Phần lớn
### H3 - Phần nhỏ
#### H4 - Chi tiết
```

**Best Practice**:
- H1: 1 lần (title)
- H2: Các phần chính
- H3, H4: Sub-sections

### 2. Text Formatting

```markdown
**Bold text** - Chữ đậm
*Italic text* - Chữ nghiêng
***Bold and Italic*** - Đậm và nghiêng
~~Strikethrough~~ - Gạch ngang
`Inline code` - Code inline

[Link text](https://example.com) - Liên kết
[Link với title](https://example.com "Tooltip text")
```

### 3. Lists

```markdown
## Unordered List
- Item 1
- Item 2
  - Sub-item 2.1
  - Sub-item 2.2
- Item 3

## Ordered List
1. First item
2. Second item
   1. Sub-item 2.1
   2. Sub-item 2.2
3. Third item

## Task List (GitHub style)
- [x] Completed task
- [ ] Pending task
- [ ] Another task
```

### 4. Code Blocks

**Inline code**:
```markdown
Sử dụng `System.out.println()` để in ra console.
```

**Code block với syntax highlighting**:
````markdown
```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```
````

**Code block với line numbers**:
````markdown
```java {linenos=true}
public void calculate(int a, int b) {
    int sum = a + b;
    System.out.println(sum);
}
```
````

**Highlight specific lines**:
````markdown
```java {linenos=true,hl_lines=[2,3]}
public void example() {
    // Line 2 sẽ được highlight
    // Line 3 sẽ được highlight
    System.out.println("Done");
}
```
````

**Supported languages**:
- `java`, `javascript`, `python`, `html`, `css`, `sql`
- `json`, `yaml`, `toml`, `xml`, `bash`, `powershell`
- `go`, `rust`, `php`, `ruby`, `swift`, `kotlin`

### 5. Images

**Basic image**:
```markdown
![Alt text](/images/photo.jpg)
```

**Image với title**:
```markdown
![Alt text](/images/photo.jpg "Image Title")
```

**Image trong page bundle**:
```markdown
![Alt text](image.jpg)
```

**Image với link**:
```markdown
[![Alt text](/images/photo.jpg)](https://example.com)
```

### 6. Blockquotes

```markdown
> Đây là một quote
> Có thể nhiều dòng

> **Tip:** Bạn có thể dùng markdown trong quote!
>
> - List item
> - Another item

> 💡 **Pro Tip**: Dùng emoji để làm nổi bật!
```

### 7. Tables

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Row 1    | Data     | More     |
| Row 2    | Data     | More     |

## Aligned columns
| Left | Center | Right |
|:-----|:------:|------:|
| L    | C      | R     |
```

### 8. Horizontal Rule

```markdown
---
***
___
```

### 9. Links

```markdown
## External link
[Google](https://google.com)

## Internal link (same site)
[About page](/about/)
[Another post]({{< ref "other-post.md" >}})

## Link với footnote
This is a statement[^1].

[^1]: This is the footnote.
```

### 10. Emojis

```markdown
😀 😃 😄 😁 🎉 🚀 💻 📱 ⚡ 💡
👍 ✅ ❌ ⚠️ 🔥 💪 🎯 📊 📈 🔧

Hoặc dùng shortcode:
:smile: :rocket: :computer:
```

## 🎨 Hugo Shortcodes

### YouTube Video

```markdown
{{< youtube "VIDEO_ID" >}}

## Ví dụ:
{{< youtube "dQw4w9WgXcQ" >}}
```

### Twitter

```markdown
{{< tweet user="username" id="1234567890" >}}
```

### Gist

```markdown
{{< gist username gist_id >}}
```

### Figure (Image với caption)

```markdown
{{< figure src="/images/photo.jpg" title="Image Title" caption="Caption text" >}}
```

### Internal Link

```markdown
{{< ref "other-post.md" >}}
{{< relref "other-post.md" >}}
```

## 🎯 SEO Best Practices

### 1. Title Optimization

```markdown
---
title: "10 Mẹo Java Cho Beginner | Tutorial 2025"
---
```

**Rules**:
- 50-60 ký tự
- Có keyword chính
- Hấp dẫn, click-worthy
- Có số/năm nếu phù hợp

### 2. Description

```markdown
---
description: "Học 10 mẹo Java thiết yếu cho người mới bắt đầu. Hướng dẫn chi tiết với code examples và bài tập thực hành. Cập nhật 2025."
---
```

**Rules**:
- 150-160 ký tự
- Có keyword
- Mô tả nội dung chính
- Call-to-action nếu có thể

### 3. Keywords

```markdown
---
keywords:
  - java tutorial
  - học java
  - java cho người mới
  - lập trình java
---
```

**Rules**:
- 5-10 keywords
- Mix tiếng Việt + tiếng Anh
- Long-tail keywords
- Liên quan đến content

### 4. URL/Slug

```bash
# ✅ Good URLs
/posts/java-spring-boot-tutorial/
/posts/10-javascript-tips-2025/

# ❌ Bad URLs
/posts/bai-viet-1/
/posts/post-123/
```

**Custom slug**:
```markdown
---
slug: "java-spring-boot-tutorial"
---
```

### 5. Internal Linking

```markdown
Xem thêm bài viết về [Java OOP](/posts/java-oop-tutorial/) và 
[Exception Handling](/posts/java-exception-handling/).

Nếu bạn mới bắt đầu, hãy đọc [Giới thiệu Java](/posts/gioi-thieu-java/) trước.
```

## 📝 Writing Tips

### 1. Cấu Trúc Bài Viết

```markdown
# Title (H1)

## Giới thiệu
- Hook reader
- Giới thiệu vấn đề
- Nội dung bài viết

## Nội dung chính
### Phần 1
### Phần 2
### Phần 3

## Ví dụ thực tế
- Code examples
- Screenshots
- Diagrams

## Kết luận
- Tóm tắt
- Call-to-action
- Related links
```

### 2. Code Examples

```markdown
## ✅ Good Example

Đây là cách tạo ArrayList trong Java:

```java
// Tạo ArrayList
List<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");

// In ra
for (String name : names) {
    System.out.println(name);
}
```

**Output**:
```
Alice
Bob
```

**Giải thích**:
- Dòng 2: Tạo ArrayList với generic type String
- Dòng 3-4: Thêm elements
- Dòng 7-9: Loop qua các elements
```

### 3. Screenshots & Diagrams

```markdown
## Thêm screenshot

![IDE Setup](ide-setup.png)
*Hình 1: Cài đặt IntelliJ IDEA*

## Architecture diagram

![Architecture](architecture-diagram.svg)
*Hình 2: Kiến trúc hệ thống*
```

**Tools cho diagrams**:
- Draw.io
- Lucidchart
- PlantUML
- Mermaid

### 4. Call-to-Action

```markdown
## 🎯 Thực hành ngay!

Hãy thử code các ví dụ trên và chia sẻ kết quả của bạn trong comments! 

📚 **Next Steps:**
1. [Java OOP Tutorial](/posts/java-oop/)
2. [Collections Framework](/posts/java-collections/)
3. [Exception Handling](/posts/java-exceptions/)

💬 Có câu hỏi? Comment bên dưới nhé!
```

## 🚀 Publishing Workflow

### 1. Write Draft

```bash
# Tạo draft
hugo new posts/my-new-post.md

# Edit
code content/posts/my-new-post.md

# Preview
hugo server -D  # -D shows drafts
```

### 2. Review

```markdown
Checklist:
- [ ] Title SEO-friendly
- [ ] Description 150-160 chars
- [ ] Tags & categories added
- [ ] Images optimized
- [ ] Code tested
- [ ] Links working
- [ ] Grammar checked
- [ ] Mobile preview OK
```

### 3. Publish

```markdown
---
draft: false  # ← Change to false
---
```

```bash
# Build
hugo

# Check output
ls public/posts/my-new-post/

# Commit & push
git add .
git commit -m "Add new post: My New Post"
git push
```

### 4. Share

```markdown
Chia sẻ trên:
- [ ] Facebook
- [ ] LinkedIn  
- [ ] Twitter/X
- [ ] Reddit
- [ ] Dev.to
```

## 📊 Content Ideas

### Loại bài viết phổ biến:

1. **Tutorial**: "Cách làm X với Y"
2. **List Post**: "10 Tips để..."
3. **Comparison**: "X vs Y: Nên chọn cái nào?"
4. **Beginner Guide**: "Hướng dẫn X cho người mới"
5. **Deep Dive**: "Hiểu sâu về X"
6. **Case Study**: "Cách tôi build X"
7. **Best Practices**: "X Best Practices 2025"
8. **Common Mistakes**: "5 lỗi thường gặp khi..."

## 💡 Pro Tips

```markdown
1. **Write for humans first**, SEO second
2. **Use headings** (H2, H3) để break up content
3. **Add images** every 300-400 words
4. **Keep paragraphs short** (3-4 lines max)
5. **Use bullet points** cho scanability
6. **Add code examples** - people love code!
7. **Link to related posts** - internal linking tốt cho SEO
8. **Update old posts** - keep content fresh
9. **Check mobile view** - 70% traffic from mobile
10. **Ask for engagement** - comments, shares, likes
```

## 📚 Resources

- **Markdown Guide**: https://www.markdownguide.org/
- **Hugo Docs**: https://gohugo.io/content-management/
- **SEO Guide**: https://moz.com/beginners-guide-to-seo
- **Writing Tools**: Grammarly, Hemingway Editor

---

**Happy Writing! ✍️🚀**
