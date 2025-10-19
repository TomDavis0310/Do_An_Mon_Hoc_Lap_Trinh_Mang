---
title: "DOM trong JavaScript là gì?"
date: 2025-10-06T10:00:00+07:00
draft: false
author: "Nguyễn Võ Xuân Dương"
tags: ["JavaScript", "DOM", "Web Development"]
categories: ["JavaScript"]
description: "Tìm hiểu về DOM (Document Object Model) - cách JavaScript tương tác với HTML để tạo website động và interactive."
cover:
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop"
    alt: "DOM in JavaScript"
    caption: "DOM - Cầu nối giữa JavaScript và HTML"
keywords: ["DOM JavaScript", "DOM là gì", "JavaScript DOM manipulation", "querySelector"]
---

<div style="text-align: center; margin: 30px 0;">
  <img src="https://www.w3schools.com/whatis/img_htmltree.gif" alt="DOM Tree Structure" style="max-width: 100%; border-radius: 10px;">
  <p style="font-style: italic; color: #666;">Cấu trúc cây DOM - Mô hình đối tượng tài liệu</p>
</div>

## DOM là gì?

**DOM (Document Object Model)** là một giao diện lập trình cho phép JavaScript truy cập và thay đổi nội dung, cấu trúc và style của trang web. DOM biểu diễn HTML document dưới dạng cây (tree) các nodes.

## Cấu trúc DOM Tree

```
Document
└── html
    ├── head
    │   ├── title
    │   └── meta
    └── body
        ├── header
        │   ├── h1
        │   └── nav
        ├── main
        │   ├── section
        │   └── article
        └── footer
```

## Selecting Elements (Chọn phần tử)

<div style="background: #f0f8ff; padding: 20px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #4285f4;">
  <h4 style="margin-top: 0; color: #4285f4;">💡 Mẹo chọn Element</h4>
  <p><strong>querySelector/querySelectorAll</strong> được khuyến nghị vì:</p>
  <ul>
    <li>Sử dụng CSS Selector quen thuộc</li>
    <li>Linh hoạt và mạnh mẽ hơn</li>
    <li>Code dễ đọc và maintain hơn</li>
  </ul>
</div>

### 1. getElementById

```javascript
// HTML: <div id="header">Welcome</div>
let header = document.getElementById('header');
console.log(header.textContent);  // "Welcome"
```

### 2. getElementsByClassName

```javascript
// HTML: <div class="box">Box 1</div>
//       <div class="box">Box 2</div>
let boxes = document.getElementsByClassName('box');
console.log(boxes.length);  // 2
console.log(boxes[0].textContent);  // "Box 1"

// Lặp qua các elements
for (let box of boxes) {
    console.log(box.textContent);
}
```

### 3. getElementsByTagName

```javascript
// Lấy tất cả thẻ <p>
let paragraphs = document.getElementsByTagName('p');
console.log(paragraphs.length);
```

### 4. querySelector (Khuyến nghị)

```javascript
// Lấy phần tử đầu tiên khớp với CSS selector
let firstBox = document.querySelector('.box');
let header = document.querySelector('#header');
let firstP = document.querySelector('p');
let nestedElement = document.querySelector('.container > .item');
```

### 5. querySelectorAll (Khuyến nghị)

```javascript
// Lấy tất cả phần tử khớp với CSS selector
let allBoxes = document.querySelectorAll('.box');
let allLinks = document.querySelectorAll('a[href^="https"]');

// Lặp với forEach
allBoxes.forEach(box => {
    console.log(box.textContent);
});
```

## Thay đổi nội dung

### 1. textContent

```javascript
let heading = document.querySelector('h1');
console.log(heading.textContent);  // Đọc
heading.textContent = 'Tiêu đề mới';  // Ghi
```

### 2. innerHTML

```javascript
let container = document.querySelector('.container');

// Đọc HTML
console.log(container.innerHTML);

// Ghi HTML
container.innerHTML = `
    <h2>Tiêu đề</h2>
    <p>Nội dung</p>
`;

// Thêm HTML
container.innerHTML += '<p>Thêm đoạn văn</p>';
```

### 3. innerText vs textContent

```javascript
// HTML: <div>Xin chào <span style="display:none">ẩn</span> bạn</div>
let div = document.querySelector('div');

console.log(div.textContent);  // "Xin chào ẩn bạn"
console.log(div.innerText);    // "Xin chào bạn" (bỏ qua hidden)
```

## Thay đổi Attributes

```javascript
let img = document.querySelector('img');

// Đọc attribute
console.log(img.src);
console.log(img.getAttribute('alt'));

// Ghi attribute
img.src = 'new-image.jpg';
img.setAttribute('alt', 'Ảnh mới');

// Xóa attribute
img.removeAttribute('title');

// Kiểm tra attribute
if (img.hasAttribute('data-id')) {
    console.log('Có data-id');
}

// Data attributes
// HTML: <div data-user-id="123" data-role="admin"></div>
let div = document.querySelector('div');
console.log(div.dataset.userId);  // "123"
console.log(div.dataset.role);    // "admin"
```

## Thay đổi Style

### 1. Inline Style

```javascript
let box = document.querySelector('.box');

// Thay đổi từng property
box.style.backgroundColor = '#3498db';
box.style.color = 'white';
box.style.padding = '20px';
box.style.borderRadius = '10px';

// Nhiều styles cùng lúc
Object.assign(box.style, {
    width: '200px',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});
```

### 2. CSS Classes

```javascript
let element = document.querySelector('.box');

// Thêm class
element.classList.add('active');
element.classList.add('highlight', 'special');

// Xóa class
element.classList.remove('active');

// Toggle class (thêm nếu chưa có, xóa nếu đã có)
element.classList.toggle('dark-mode');

// Kiểm tra class
if (element.classList.contains('active')) {
    console.log('Element đang active');
}

// Replace class
element.classList.replace('old-class', 'new-class');
```

## Tạo và xóa Elements

### 1. Tạo element

```javascript
// Tạo element mới
let newDiv = document.createElement('div');
newDiv.textContent = 'Div mới';
newDiv.className = 'box';
newDiv.id = 'new-box';

// Thêm vào DOM
let container = document.querySelector('.container');
container.appendChild(newDiv);  // Thêm vào cuối

// Thêm vào đầu
container.insertBefore(newDiv, container.firstChild);

// Thêm trước/sau một element
let referenceElement = document.querySelector('.reference');
referenceElement.before(newDiv);  // Thêm trước
referenceElement.after(newDiv);   // Thêm sau

// insertAdjacentHTML
container.insertAdjacentHTML('beforeend', '<p>Đoạn văn mới</p>');
// Vị trí: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'
```

### 2. Xóa element

```javascript
let element = document.querySelector('.to-remove');

// Cách 1: remove() - Modern
element.remove();

// Cách 2: removeChild() - Old way
let parent = element.parentElement;
parent.removeChild(element);

// Xóa tất cả children
let container = document.querySelector('.container');
container.innerHTML = '';  // Cách đơn giản
// hoặc
while (container.firstChild) {
    container.removeChild(container.firstChild);
}
```

### 3. Clone element

```javascript
let original = document.querySelector('.original');
let clone = original.cloneNode(true);  // true = deep clone (kể cả children)
document.body.appendChild(clone);
```

## Event Handling (Xử lý sự kiện)

### 1. addEventListener

```javascript
let button = document.querySelector('button');

// Click event
button.addEventListener('click', function() {
    console.log('Button clicked!');
});

// Arrow function
button.addEventListener('click', () => {
    console.log('Button clicked!');
});

// Event object
button.addEventListener('click', (event) => {
    console.log('Event type:', event.type);
    console.log('Target:', event.target);
    console.log('Position:', event.clientX, event.clientY);
});
```

### 2. Common Events

```javascript
// Mouse Events
element.addEventListener('click', handler);
element.addEventListener('dblclick', handler);
element.addEventListener('mouseenter', handler);
element.addEventListener('mouseleave', handler);
element.addEventListener('mousemove', handler);

// Keyboard Events
document.addEventListener('keydown', (e) => {
    console.log('Key pressed:', e.key);
    if (e.key === 'Enter') {
        console.log('Enter pressed');
    }
});

document.addEventListener('keyup', handler);

// Form Events
let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();  // Ngăn submit mặc định
    console.log('Form submitted');
});

let input = document.querySelector('input');
input.addEventListener('input', (e) => {
    console.log('Input value:', e.target.value);
});

input.addEventListener('change', handler);  // Khi mất focus
input.addEventListener('focus', handler);
input.addEventListener('blur', handler);

// Window Events
window.addEventListener('load', () => {
    console.log('Page fully loaded');
});

window.addEventListener('scroll', () => {
    console.log('Scrolling...');
});

window.addEventListener('resize', () => {
    console.log('Window resized');
});
```

### 3. Event Delegation

```javascript
// Thay vì add event cho từng item
let list = document.querySelector('ul');

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        console.log('Clicked:', e.target.textContent);
        e.target.classList.toggle('completed');
    }
});
```

## Ví dụ thực tế: Todo List

```html
<!DOCTYPE html>
<html>
<head>
    <title>Todo List</title>
    <style>
        .completed { text-decoration: line-through; color: #999; }
        .todo-item { padding: 10px; margin: 5px 0; background: #f0f0f0; }
    </style>
</head>
<body>
    <div id="app">
        <h1>Todo List của Xuân Dương</h1>
        <input type="text" id="todoInput" placeholder="Nhập công việc...">
        <button id="addBtn">Thêm</button>
        <ul id="todoList"></ul>
    </div>

    <script>
        // Lấy elements
        const input = document.getElementById('todoInput');
        const addBtn = document.getElementById('addBtn');
        const todoList = document.getElementById('todoList');

        // Thêm todo
        function addTodo() {
            const text = input.value.trim();
            if (text === '') return;

            // Tạo li element
            const li = document.createElement('li');
            li.className = 'todo-item';
            li.innerHTML = `
                <span>${text}</span>
                <button class="delete-btn">Xóa</button>
            `;

            // Thêm vào list
            todoList.appendChild(li);

            // Clear input
            input.value = '';
            input.focus();
        }

        // Event listeners
        addBtn.addEventListener('click', addTodo);

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addTodo();
            }
        });

        // Event delegation cho todo items
        todoList.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-btn')) {
                e.target.parentElement.remove();
            } else if (e.target.tagName === 'SPAN') {
                e.target.parentElement.classList.toggle('completed');
            }
        });
    </script>
</body>
</html>
```

## Traversing DOM (Di chuyển trong DOM)

```javascript
let element = document.querySelector('.current');

// Parent
let parent = element.parentElement;
let closestContainer = element.closest('.container');

// Children
let children = element.children;  // HTMLCollection
let firstChild = element.firstElementChild;
let lastChild = element.lastElementChild;

// Siblings
let nextSibling = element.nextElementSibling;
let prevSibling = element.previousElementSibling;
```

## Performance Tips

```javascript
// ❌ Không tốt - Reflow nhiều lần
for (let i = 0; i < 1000; i++) {
    let div = document.createElement('div');
    div.textContent = i;
    document.body.appendChild(div);
}

// ✅ Tốt - Reflow 1 lần
let fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
    let div = document.createElement('div');
    div.textContent = i;
    fragment.appendChild(div);
}
document.body.appendChild(fragment);

// ✅ Hoặc dùng innerHTML
let html = '';
for (let i = 0; i < 1000; i++) {
    html += `<div>${i}</div>`;
}
document.body.innerHTML = html;
```

## Kết luận

DOM là công cụ mạnh mẽ để:
- ✅ Tạo website động và interactive
- ✅ Thay đổi nội dung mà không reload page
- ✅ Xử lý user interactions
- ✅ Tạo Single Page Applications (SPA)

Hiểu rõ DOM là bước quan trọng để trở thành Front-end Developer!

---

*Bạn muốn tạo project gì với DOM? Chia sẻ ý tưởng của bạn!* 💡
