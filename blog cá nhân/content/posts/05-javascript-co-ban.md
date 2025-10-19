---
title: "Giới thiệu JavaScript và cú pháp cơ bản"
date: 2025-10-05T10:00:00+07:00
draft: false
author: "Nguyễn Võ Xuân Dương"
tags: ["JavaScript", "Web Development", "Programming"]
categories: ["JavaScript"]
description: "Tìm hiểu về JavaScript - ngôn ngữ lập trình phổ biến nhất cho Web Development, cú pháp cơ bản và các khái niệm quan trọng."
cover:
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=1200&h=600&fit=crop"
    alt: "JavaScript Programming"
    caption: "JavaScript - Ngôn ngữ của Web"
keywords: ["JavaScript", "JS cơ bản", "học JavaScript", "JavaScript là gì"]
---

<div style="text-align: center; margin: 30px 0;">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript Logo" width="150" height="150">
</div>

## JavaScript là gì?

**JavaScript** (JS) là ngôn ngữ lập trình thông dịch, cao cấp, được sử dụng chủ yếu để tạo tương tác trên website. JavaScript là một trong ba ngôn ngữ cốt lõi của Web Development:

- **HTML**: Cấu trúc (Structure)
- **CSS**: Trình bày (Presentation)
- **JavaScript**: Hành vi (Behavior)

## Đặc điểm của JavaScript

<div style="text-align: center; margin: 20px 0;">
  <img src="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png" alt="HTML CSS JavaScript" style="max-width: 100%; border-radius: 10px;">
  <p style="font-style: italic; color: #666;">HTML, CSS và JavaScript - Ba trụ cột của Web</p>
</div>

### 1. Ngôn ngữ thông dịch (Interpreted)
- Không cần biên dịch
- Chạy trực tiếp trên trình duyệt hoặc Node.js

### 2. Dynamic Typing
```javascript
let x = 5;           // x là number
x = "Hello";         // x giờ là string
x = true;            // x giờ là boolean
x = { name: "Dương" }; // x giờ là object
```

### 3. Multi-paradigm
Hỗ trợ nhiều phong cách lập trình:
- **Procedural**: Lập trình thủ tục
- **Object-Oriented**: Hướng đối tượng
- **Functional**: Lập trình hàm

### 4. Chạy cả Client-side và Server-side
- **Client-side**: Trình duyệt (Chrome, Firefox...)
- **Server-side**: Node.js, Deno

## Cú pháp cơ bản

### 1. Khai báo biến

```javascript
// var - cũ, không nên dùng
var name = "Xuân Dương";

// let - có thể thay đổi giá trị
let age = 21;
age = 22;  // OK

// const - không thể thay đổi giá trị
const PI = 3.14159;
// PI = 3.14;  // Error!

// Với object và array
const person = { name: "Dương" };
person.name = "Xuân Dương";  // OK - thay đổi property
// person = {};  // Error - không thể gán lại biến const

const arr = [1, 2, 3];
arr.push(4);  // OK - thay đổi nội dung
// arr = [5, 6];  // Error
```

### 2. Kiểu dữ liệu (Data Types)

#### Primitive Types
```javascript
// Number
let age = 21;
let price = 99.99;
let negative = -10;
let infinity = Infinity;

// String
let name = "Xuân Dương";
let university = 'HUTECH';
let message = `Xin chào, tôi là ${name}`; // Template literal

// Boolean
let isStudent = true;
let hasJob = false;

// Undefined
let x;
console.log(x);  // undefined

// Null
let y = null;

// Symbol (ES6)
let id = Symbol('id');

// BigInt (ES2020)
let bigNumber = 1234567890123456789012345678901234567890n;
```

#### Reference Types
```javascript
// Object
let person = {
    name: "Xuân Dương",
    age: 21,
    university: "HUTECH",
    greet: function() {
        console.log(`Xin chào, tôi là ${this.name}`);
    }
};

// Array
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, { name: "Dương" }];

// Function
function sayHello(name) {
    return `Hello, ${name}!`;
}

// Date
let now = new Date();
```

### 3. Operators (Toán tử)

```javascript
// Arithmetic Operators
let a = 10, b = 3;
console.log(a + b);   // 13 - Cộng
console.log(a - b);   // 7  - Trừ
console.log(a * b);   // 30 - Nhân
console.log(a / b);   // 3.333... - Chia
console.log(a % b);   // 1  - Chia lấy dư
console.log(a ** b);  // 1000 - Lũy thừa

// Assignment Operators
let x = 5;
x += 3;   // x = x + 3 → 8
x -= 2;   // x = x - 2 → 6
x *= 2;   // x = x * 2 → 12
x /= 3;   // x = x / 3 → 4
x++;      // x = x + 1 → 5
x--;      // x = x - 1 → 4

// Comparison Operators
console.log(5 == "5");   // true - So sánh giá trị
console.log(5 === "5");  // false - So sánh giá trị và kiểu
console.log(5 != "5");   // false
console.log(5 !== "5");  // true
console.log(10 > 5);     // true
console.log(10 <= 10);   // true

// Logical Operators
let age = 21;
let isStudent = true;
console.log(age >= 18 && isStudent);  // true - AND
console.log(age < 18 || isStudent);   // true - OR
console.log(!isStudent);              // false - NOT
```

### 4. Conditional Statements

```javascript
// If-Else
let age = 21;
if (age < 18) {
    console.log("Chưa đủ tuổi");
} else if (age < 60) {
    console.log("Tuổi trưởng thành");
} else {
    console.log("Người cao tuổi");
}

// Ternary Operator
let status = age >= 18 ? "Đủ tuổi" : "Chưa đủ tuổi";

// Switch
let day = 3;
switch (day) {
    case 1:
        console.log("Thứ Hai");
        break;
    case 2:
        console.log("Thứ Ba");
        break;
    case 3:
        console.log("Thứ Tư");
        break;
    default:
        console.log("Ngày không hợp lệ");
}
```

### 5. Loops (Vòng lặp)

```javascript
// For loop
for (let i = 0; i < 5; i++) {
    console.log(`Lần ${i + 1}`);
}

// While loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// Do-While loop
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 5);

// For...of (iterate arrays)
let fruits = ["Táo", "Chuối", "Cam"];
for (let fruit of fruits) {
    console.log(fruit);
}

// For...in (iterate object properties)
let person = { name: "Dương", age: 21 };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// forEach (Array method)
fruits.forEach((fruit, index) => {
    console.log(`${index + 1}. ${fruit}`);
});
```

### 6. Functions

```javascript
// Function Declaration
function greet(name) {
    return `Xin chào, ${name}!`;
}

// Function Expression
const add = function(a, b) {
    return a + b;
};

// Arrow Function (ES6)
const multiply = (a, b) => a * b;

const square = x => x * x;  // 1 parameter, no parentheses

const sayHello = () => console.log("Hello!");

// Default Parameters
function introduce(name = "Khách", age = 0) {
    console.log(`Tôi là ${name}, ${age} tuổi`);
}
introduce();  // Tôi là Khách, 0 tuổi
introduce("Dương", 21);  // Tôi là Dương, 21 tuổi

// Rest Parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));  // 15
```

### 7. Arrays

```javascript
let numbers = [1, 2, 3, 4, 5];

// Truy cập phần tử
console.log(numbers[0]);  // 1
console.log(numbers[numbers.length - 1]);  // 5

// Các phương thức phổ biến
numbers.push(6);        // Thêm vào cuối
numbers.unshift(0);     // Thêm vào đầu
numbers.pop();          // Xóa phần tử cuối
numbers.shift();        // Xóa phần tử đầu

// Array methods
let doubled = numbers.map(x => x * 2);
let evens = numbers.filter(x => x % 2 === 0);
let sum = numbers.reduce((total, x) => total + x, 0);
let found = numbers.find(x => x > 3);  // 4
let exists = numbers.includes(3);  // true

// Destructuring
let [first, second, ...rest] = numbers;
console.log(first);  // 1
console.log(rest);   // [3, 4, 5]
```

### 8. Objects

```javascript
// Object Literal
let student = {
    name: "Xuân Dương",
    age: 21,
    university: "HUTECH",
    major: "CNTT",
    skills: ["Java", "JavaScript", "Spring Boot"],
    
    // Method
    introduce() {
        console.log(`Tôi là ${this.name}, sinh viên ${this.university}`);
    }
};

// Truy cập properties
console.log(student.name);         // Dot notation
console.log(student['age']);       // Bracket notation

// Thêm/sửa property
student.gpa = 3.5;
student.age = 22;

// Xóa property
delete student.age;

// Object Destructuring
let { name, university } = student;
console.log(name);  // "Xuân Dương"

// Spread Operator
let newStudent = { ...student, year: 3 };
```

## Template Literals (ES6)

```javascript
let name = "Xuân Dương";
let age = 21;

// Old way
let message1 = "Tôi là " + name + ", " + age + " tuổi";

// Template literal
let message2 = `Tôi là ${name}, ${age} tuổi`;

// Multi-line
let html = `
    <div>
        <h1>${name}</h1>
        <p>Tuổi: ${age}</p>
    </div>
`;
```

## Type Conversion

```javascript
// String to Number
let str = "123";
let num1 = Number(str);
let num2 = parseInt(str);
let num3 = parseFloat("123.45");
let num4 = +str;  // Unary plus

// Number to String
let num = 123;
let str1 = String(num);
let str2 = num.toString();
let str3 = num + "";  // Concat with empty string

// To Boolean
let bool1 = Boolean(1);      // true
let bool2 = Boolean(0);      // false
let bool3 = Boolean("");     // false
let bool4 = Boolean("text"); // true
```

## Console Methods

```javascript
console.log("Log thông thường");
console.error("Log lỗi");
console.warn("Log cảnh báo");
console.info("Log thông tin");
console.table([{name: "Dương", age: 21}]);
console.time("timer");
// ... code
console.timeEnd("timer");
```

## Kết luận

JavaScript là nền tảng của Web Development hiện đại. Trong bài này, bạn đã học được:
- ✅ Cú pháp cơ bản và kiểu dữ liệu
- ✅ Toán tử và cấu trúc điều khiển
- ✅ Functions, Arrays và Objects
- ✅ ES6+ features: Arrow functions, Template literals, Destructuring

Trong bài tiếp theo, chúng ta sẽ tìm hiểu về **DOM (Document Object Model)** - cách JavaScript tương tác với HTML!

---

*Bạn đã sẵn sàng khám phá JavaScript chưa? Comment câu hỏi của bạn bên dưới!* 🚀
