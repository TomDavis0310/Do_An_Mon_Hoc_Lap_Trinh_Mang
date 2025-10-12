# 🤝 Contributing Guidelines

Thank you for your interest in contributing to this personal blog project! 🎉

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)
- [Documentation](#documentation)
- [Testing](#testing)

---

## 📜 Code of Conduct

### Our Pledge

We pledge to make participation in this project a harassment-free experience for everyone, regardless of:
- Age
- Body size
- Disability
- Ethnicity
- Gender identity
- Level of experience
- Nationality
- Personal appearance
- Race
- Religion
- Sexual identity and orientation

### Our Standards

**Positive behaviors:**
- ✅ Using welcoming and inclusive language
- ✅ Being respectful of differing viewpoints
- ✅ Gracefully accepting constructive criticism
- ✅ Focusing on what is best for the community
- ✅ Showing empathy towards others

**Unacceptable behaviors:**
- ❌ Trolling, insulting/derogatory comments
- ❌ Public or private harassment
- ❌ Publishing others' private information
- ❌ Other conduct which could reasonably be considered inappropriate

---

## 🎯 How Can I Contribute?

### 1. Reporting Bugs 🐛

**Before submitting a bug report:**
- Check the [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) guide
- Search existing [Issues](https://github.com/TomDavis0310/Do_An_Mon_Hoc_Lap_Trinh_Mang/issues)
- Ensure you're using the latest version

**How to submit a good bug report:**

```markdown
**Bug Description**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected Behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- OS: [e.g., Windows 11]
- Hugo Version: [e.g., 0.121.0]
- Browser: [e.g., Chrome 120]

**Additional Context**
Any other relevant information.
```

### 2. Suggesting Features 💡

**Before suggesting a feature:**
- Check if it's already been suggested
- Make sure it aligns with project goals
- Consider if it benefits most users

**How to submit a feature request:**

```markdown
**Feature Description**
Clear description of the feature.

**Problem It Solves**
What problem does this feature solve?

**Proposed Solution**
How should this feature work?

**Alternatives Considered**
Other solutions you've considered.

**Additional Context**
Mockups, examples, etc.
```

### 3. Writing Blog Posts ✍️

**Want to contribute a blog post?**

1. Read [WRITING_GUIDE.md](./WRITING_GUIDE.md)
2. Choose a topic (preferably Java/JavaScript)
3. Follow the template:

```markdown
---
title: "Your Post Title"
date: 2025-01-20T10:00:00+07:00
draft: false
author: "Your Name"
tags: ["Tag1", "Tag2"]
categories: ["Category"]
description: "150-160 character description"
keywords: ["keyword1", "keyword2"]
---

# Introduction
# Content
# Examples
# Conclusion
```

4. Submit a Pull Request

### 4. Improving Documentation 📚

**Documentation contributions are highly valued!**

Types of documentation contributions:
- Fix typos/grammar
- Clarify existing content
- Add missing information
- Translate to other languages
- Add code examples
- Update outdated content

### 5. Code Contributions 💻

**Areas for contribution:**
- Custom layouts
- CSS improvements
- JavaScript enhancements
- Hugo shortcodes
- Theme customizations
- Performance optimizations

---

## 🚀 Getting Started

### Prerequisites

```bash
# Required
Hugo Extended >= 0.121.0
Git >= 2.0

# Optional
Node.js >= 18.0 (for some tools)
VS Code (recommended editor)
```

### Fork & Clone

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/Do_An_Mon_Hoc_Lap_Trinh_Mang.git
cd "Do_An_Mon_Hoc_Lap_Trinh_Mang/blog cá nhân"

# 3. Add upstream remote
git remote add upstream https://github.com/TomDavis0310/Do_An_Mon_Hoc_Lap_Trinh_Mang.git

# 4. Install theme
git submodule add --depth=1 https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod
git submodule update --init --recursive

# 5. Create a branch
git checkout -b feature/your-feature-name
```

### Run Locally

```bash
# Start development server
hugo server -D

# Open in browser
# http://localhost:1313
```

---

## 🔄 Development Workflow

### Branch Naming

```bash
# Feature
feature/add-search-function
feature/new-blog-post

# Bug fix
fix/broken-image-links
fix/mobile-menu-issue

# Documentation
docs/update-readme
docs/add-seo-guide

# Performance
perf/optimize-images
perf/reduce-css-size

# Refactor
refactor/clean-css
refactor/reorganize-layouts
```

### Workflow Steps

```bash
# 1. Update your fork
git checkout main
git pull upstream main

# 2. Create feature branch
git checkout -b feature/my-feature

# 3. Make changes
# Edit files...

# 4. Test locally
hugo server -D

# 5. Commit changes
git add .
git commit -m "feat: add new feature"

# 6. Push to your fork
git push origin feature/my-feature

# 7. Create Pull Request
# Go to GitHub and create PR
```

---

## 📝 Coding Standards

### HTML/Layouts

```html
<!-- ✅ Good -->
<article class="post-card">
    <h2 class="post-title">{{ .Title }}</h2>
    <p class="post-summary">{{ .Summary }}</p>
</article>

<!-- ❌ Bad -->
<article class="post-card"><h2 class="post-title">{{ .Title }}</h2><p class="post-summary">{{ .Summary }}</p></article>
```

**Rules:**
- Use 4 spaces for indentation
- Use semantic HTML5 elements
- Add ARIA labels for accessibility
- Keep templates readable

### CSS

```css
/* ✅ Good */
.post-card {
    padding: 1rem;
    margin-bottom: 2rem;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.post-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* ❌ Bad */
.post-card{padding:1rem;margin-bottom:2rem;}
.post-card:hover{transform:translateY(-4px);}
```

**Rules:**
- Use CSS custom properties for colors
- Mobile-first responsive design
- BEM naming convention (optional)
- Keep selectors simple
- Group related properties
- Add comments for complex styles

### JavaScript

```javascript
// ✅ Good
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    
    menuToggle.addEventListener('click', function() {
        document.body.classList.toggle('menu-open');
    });
});

// ❌ Bad
$(document).ready(function(){$('#menu-toggle').click(function(){$('body').toggleClass('menu-open');});});
```

**Rules:**
- Use `const` and `let`, not `var`
- Use meaningful variable names
- Add comments for complex logic
- Keep functions small and focused
- Use modern ES6+ syntax
- Avoid jQuery (use vanilla JS)

### Markdown

````markdown
# ✅ Good Structure

## Section Title

Clear introduction paragraph.

### Subsection

- List item 1
- List item 2

```language
// Code with proper syntax highlighting
```

![Alt text](/images/descriptive-name.jpg)
*Figure 1: Caption text*

## Next Section

# ❌ Bad Structure

##Section with no space
Text without proper spacing.
```
No language specified
```
![](image.jpg) // No alt text
````

**Rules:**
- One H1 per document (title)
- Use H2, H3, H4 for hierarchy
- Add alt text to all images
- Use code fences with language
- Add blank lines between sections
- Use relative links for internal content

---

## 💬 Commit Messages

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

```bash
feat:     New feature
fix:      Bug fix
docs:     Documentation changes
style:    Code style (formatting, no logic change)
refactor: Code refactoring
perf:     Performance improvement
test:     Add/update tests
chore:    Build process, dependencies
```

### Examples

```bash
# Good commits
feat(posts): add Java Collections tutorial
fix(css): resolve mobile menu overflow
docs(readme): update installation instructions
perf(images): optimize cover images to WebP
refactor(layouts): simplify post card template

# Bad commits
update stuff
fix bug
changes
asdf
WIP
```

### Detailed Commit

```bash
feat(search): add full-text search functionality

- Implement Lunr.js for client-side search
- Add search bar to header
- Create search results page
- Index all posts and pages

Closes #42
```

---

## 🔀 Pull Request Process

### Before Submitting

**Checklist:**
- [ ] Code follows style guidelines
- [ ] Tested locally (`hugo server -D`)
- [ ] Production build works (`hugo --minify`)
- [ ] Documentation updated
- [ ] No console errors
- [ ] Mobile-responsive
- [ ] Accessible (ARIA labels)
- [ ] SEO-friendly
- [ ] Lighthouse score > 90 (if applicable)

### PR Template

```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactor

## Changes Made
- Change 1
- Change 2
- Change 3

## Screenshots (if applicable)
Before: [screenshot]
After: [screenshot]

## Testing
How has this been tested?
- [ ] Local testing
- [ ] Mobile testing
- [ ] Different browsers
- [ ] Lighthouse audit

## Related Issues
Closes #123
Related to #456

## Additional Notes
Any additional information.
```

### Review Process

1. **Automated Checks**
   - GitHub Actions build
   - Code quality checks
   - Link validation

2. **Manual Review**
   - Code review by maintainer
   - Design review
   - Testing by maintainer

3. **Approval & Merge**
   - Approved by maintainer
   - Squash and merge
   - Update changelog

---

## 📚 Documentation

### Documentation Standards

**When to update documentation:**
- Adding new features
- Changing configuration
- Fixing bugs that affect usage
- Improving existing processes

**Files to update:**
- README.md - If core functionality changes
- CHANGELOG.md - Always update with changes
- Relevant .md files - Keep docs in sync with code

### Writing Style

```markdown
# ✅ Good Documentation

## Clear Headings

Step-by-step instructions:

1. First, do this
2. Then, do that
3. Finally, verify

**Example:**
```bash
hugo server -D
```

Expected output:
```
Web Server is available at http://localhost:1313/
```

# ❌ Bad Documentation

do this then that
here's code: hugo server
```

**Rules:**
- Use clear, concise language
- Include examples
- Add code blocks with proper highlighting
- Use numbered lists for sequences
- Add expected outputs
- Keep it beginner-friendly

---

## 🧪 Testing

### Manual Testing

**Before submitting:**

```bash
# 1. Clean build
hugo --gc --minify

# 2. Check for errors
hugo --verbose

# 3. Test locally
hugo server -D

# 4. Test production build
hugo server --environment production
```

**Test checklist:**
- [ ] Homepage loads
- [ ] All blog posts accessible
- [ ] Menu navigation works
- [ ] Search functionality
- [ ] Dark mode toggle
- [ ] Mobile responsive
- [ ] Images load properly
- [ ] Links work (internal & external)
- [ ] Forms submit (if applicable)
- [ ] No console errors
- [ ] Fast load time (< 3s)

### Browser Testing

**Test on:**
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

### Performance Testing

```bash
# Lighthouse CLI
npm install -g lighthouse
hugo server -D

# In new terminal
lighthouse http://localhost:1313 --view

# Target scores:
# Performance: > 90
# Accessibility: > 90
# Best Practices: > 90
# SEO: > 90
```

---

## 🎨 Design Guidelines

### Colors

```css
:root {
    /* Primary */
    --primary-color: #3498db;
    --primary-dark: #2980b9;
    
    /* Accent */
    --accent-color: #2c3e50;
    
    /* Neutral */
    --text-color: #333333;
    --bg-color: #ffffff;
}
```

### Typography

```css
/* Headings */
font-family: 'Poppins', sans-serif;
font-weight: 600-700;

/* Body */
font-family: 'Inter', sans-serif;
font-weight: 400-600;
```

### Spacing

```css
/* Use multiples of 4px */
margin: 0.5rem;  /* 8px */
padding: 1rem;   /* 16px */
gap: 1.5rem;     /* 24px */
```

---

## 🏆 Recognition

### Contributors Hall of Fame

Contributors will be recognized in:
- README.md Contributors section
- CHANGELOG.md for each release
- GitHub Contributors page

### Types of Contributions

All contributions are valued:
- 💻 Code
- 📝 Documentation
- 🐛 Bug reports
- 💡 Feature ideas
- 🎨 Design
- 🌍 Translations
- 📢 Promotion

---

## 📞 Getting Help

**Need help?**

1. **Documentation** - Check [DOCUMENTATION.md](./DOCUMENTATION.md)
2. **Issues** - Search existing issues
3. **Discussions** - Ask in GitHub Discussions
4. **Community** - Join Hugo Discord/Forums

**Response Time:**
- Bug reports: 1-3 days
- Feature requests: 1 week
- Pull requests: 3-7 days

---

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

## 🙏 Thank You!

Thank you for contributing to this project! Every contribution, no matter how small, helps improve the project for everyone. 🎉

**Happy Contributing!** 💻✨

---

*Last updated: January 2025*
