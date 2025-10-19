---
title: "ES6 và những tính năng mới trong JavaScript"
date: 2025-10-07T10:00:00+07:00
draft: false
author: "Nguyễn Võ Xuân Dương"
tags: ["JavaScript", "ES6", "Modern JavaScript"]
categories: ["JavaScript"]
description: "Khám phá các tính năng mới và quan trọng trong ES6 (ECMAScript 2015) và các phiên bản sau: Arrow Functions, Destructuring, Promises, Async/Await..."
cover:
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1200&h=600&fit=crop"
    alt: "ES6 JavaScript Features"
    caption: "ES6 - Modern JavaScript"
keywords: ["ES6", "JavaScript ES6", "Arrow Functions", "Promises", "Async Await"]
---

<div style="text-align: center; margin: 30px 0;">
  <img src="https://miro.medium.com/v2/resize:fit:1400/1*JDKfjOVH4K6T8Mzr8b8tQQ.png" alt="ES6 Features" style="max-width: 100%; border-radius: 10px;">
  <p style="font-style: italic; color: #666;">Những tính năng nổi bật của ES6</p>
</div>

## ES6 (ECMAScript 2015) là gì?

**ES6** hay **ECMAScript 2015** là phiên bản JavaScript có nhiều cải tiến lớn, mang lại cú pháp hiện đại và mạnh mẽ hơn. Đây là bước ngoặt quan trọng trong lịch sử phát triển JavaScript.

## Các tính năng quan trọng của ES6+

### 1. Let và Const

```javascript
// var - function scope, có hoisting
var x = 10;
if (true) {
    var x = 20;  // Cùng biến x
}
console.log(x);  // 20

// let - block scope
let y = 10;
if (true) {
    let y = 20;  // Biến y khác
    console.log(y);  // 20
}
console.log(y);  // 10

// const - block scope, không thể gán lại
const PI = 3.14159;
// PI = 3.14;  // Error!

const person = { name: "Dương" };
person.name = "Xuân Dương";  // OK
// person = {};  // Error!
```

### 2. Arrow Functions

```javascript
// Function truyền thống
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Nhiều dòng code
const calculate = (a, b) => {
    let result = a + b;
    return result * 2;
};

// Một parameter - không cần ()
const square = x => x * x;

// Không parameter
const greet = () => console.log("Hello!");

// Arrow function không có 'this' riêng
const person = {
    name: "Dương",
    hobbies: ["coding", "reading"],
    
    // Method truyền thống
    printHobbies1: function() {
        this.hobbies.forEach(function(hobby) {
            // 'this' ở đây là undefined
            // console.log(this.name + " likes " + hobby);  // Error
        });
    },
    
    // Arrow function giữ nguyên 'this'
    printHobbies2: function() {
        this.hobbies.forEach(hobby => {
            console.log(this.name + " likes " + hobby);  // OK
        });
    }
};
```

### 3. Template Literals

```javascript
const name = "Xuân Dương";
const age = 21;
const university = "HUTECH";

// Old way
const message1 = "Tôi là " + name + ", " + age + " tuổi, học tại " + university;

// Template literal
const message2 = `Tôi là ${name}, ${age} tuổi, học tại ${university}`;

// Multi-line
const html = `
    <div class="card">
        <h2>${name}</h2>
        <p>Tuổi: ${age}</p>
        <p>Trường: ${university}</p>
    </div>
`;

// Expression trong template
const price = 100000;
const discount = 0.2;
console.log(`Giá sau giảm: ${price * (1 - discount)} VNĐ`);

// Gọi function
const getGreeting = () => "Xin chào";
console.log(`${getGreeting()}, ${name}!`);
```

### 4. Destructuring

```javascript
// Array Destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;  // first = 1, second = 2
const [a, , c] = numbers;  // a = 1, c = 3 (skip 2)
const [x, y, ...rest] = numbers;  // x = 1, y = 2, rest = [3, 4, 5]

// Default values
const [p = 0, q = 0] = [10];  // p = 10, q = 0

// Swap variables
let m = 1, n = 2;
[m, n] = [n, m];  // m = 2, n = 1

// Object Destructuring
const person = {
    name: "Xuân Dương",
    age: 21,
    university: "HUTECH",
    skills: ["Java", "JavaScript"]
};

const { name, age } = person;
console.log(name);  // "Xuân Dương"

// Rename variables
const { name: fullName, age: years } = person;
console.log(fullName);  // "Xuân Dương"

// Default values
const { country = "Vietnam" } = person;
console.log(country);  // "Vietnam"

// Nested destructuring
const student = {
    name: "Dương",
    scores: { math: 9, english: 8 }
};
const { scores: { math, english } } = student;

// Function parameters
function introduce({ name, age, university }) {
    console.log(`${name}, ${age} tuổi, ${university}`);
}
introduce(person);
```

### 5. Spread Operator (...)

```javascript
// Array spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];  // [1, 2, 3, 4, 5, 6]

// Copy array
const original = [1, 2, 3];
const copy = [...original];

// Function arguments
const numbers = [5, 2, 8, 1, 9];
console.log(Math.max(...numbers));  // 9

// Object spread (ES2018)
const person = { name: "Dương", age: 21 };
const student = { ...person, university: "HUTECH" };
// { name: "Dương", age: 21, university: "HUTECH" }

// Merge objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };

// Override properties
const updated = { ...person, age: 22 };
```

### 6. Rest Parameters

```javascript
// Old way
function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));  // 15

// Combine with normal parameters
function introduce(greeting, ...names) {
    console.log(greeting + ", " + names.join(" và "));
}
introduce("Xin chào", "Dương", "An", "Bình");
```

### 7. Default Parameters

```javascript
// Old way
function greet(name) {
    name = name || "Khách";
    console.log("Xin chào, " + name);
}

// Default parameters
function greet(name = "Khách", age = 0) {
    console.log(`Xin chào ${name}, ${age} tuổi`);
}

greet();  // Xin chào Khách, 0 tuổi
greet("Dương");  // Xin chào Dương, 0 tuổi
greet("Dương", 21);  // Xin chào Dương, 21 tuổi

// Expression as default
function createUser(name, id = Date.now()) {
    return { name, id };
}
```

### 8. Enhanced Object Literals

```javascript
const name = "Xuân Dương";
const age = 21;

// Old way
const person1 = {
    name: name,
    age: age,
    greet: function() {
        console.log("Hello");
    }
};

// Enhanced object literal
const person2 = {
    name,  // Shorthand property
    age,
    greet() {  // Method shorthand
        console.log("Hello");
    },
    [`skill_${1}`]: "Java",  // Computed property names
    [`skill_${2}`]: "JavaScript"
};
```

### 9. Classes

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    // Method
    greet() {
        console.log(`Xin chào, tôi là ${this.name}`);
    }
    
    // Static method
    static create(name, age) {
        return new Person(name, age);
    }
    
    // Getter
    get info() {
        return `${this.name}, ${this.age} tuổi`;
    }
    
    // Setter
    set birthday(year) {
        this.age = new Date().getFullYear() - year;
    }
}

// Inheritance
class Student extends Person {
    constructor(name, age, university) {
        super(name, age);  // Call parent constructor
        this.university = university;
    }
    
    // Override method
    greet() {
        super.greet();  // Call parent method
        console.log(`Tôi học tại ${this.university}`);
    }
    
    study() {
        console.log(`${this.name} đang học`);
    }
}

// Sử dụng
const student = new Student("Dương", 21, "HUTECH");
student.greet();
student.study();
```

### 10. Promises

<div style="text-align: center; margin: 20px 0;">
  <img src="https://miro.medium.com/v2/resize:fit:1400/1*8RdTM5Gjsbga_D1JiTAA9A.png" alt="JavaScript Promises" style="max-width: 100%; border-radius: 10px;">
  <p style="font-style: italic; color: #666;">Promise States - Pending, Fulfilled, Rejected</p>
</div>

```javascript
// Tạo Promise
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve({ data: "Data from server" });
        } else {
            reject("Error occurred");
        }
    }, 1000);
});

// Sử dụng Promise
fetchData
    .then(result => {
        console.log(result.data);
        return "Processed data";
    })
    .then(processed => {
        console.log(processed);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log("Hoàn thành");
    });

// Promise.all - chờ tất cả
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
    .then(values => console.log(values));  // [1, 2, 3]

// Promise.race - lấy kết quả đầu tiên
Promise.race([promise1, promise2, promise3])
    .then(value => console.log(value));  // 1
```

### 11. Async/Await (ES2017)

```javascript
// Promise chain
function fetchUser() {
    return fetch('/api/user')
        .then(response => response.json())
        .then(user => {
            return fetch(`/api/posts/${user.id}`);
        })
        .then(response => response.json())
        .then(posts => {
            console.log(posts);
        })
        .catch(error => console.error(error));
}

// Async/Await - dễ đọc hơn
async function fetchUser() {
    try {
        const userResponse = await fetch('/api/user');
        const user = await userResponse.json();
        
        const postsResponse = await fetch(`/api/posts/${user.id}`);
        const posts = await postsResponse.json();
        
        console.log(posts);
        return posts;
    } catch (error) {
        console.error(error);
    }
}

// Async function luôn return Promise
async function getData() {
    return "data";
}
getData().then(result => console.log(result));  // "data"

// Await multiple promises
async function fetchAll() {
    const [users, posts, comments] = await Promise.all([
        fetch('/api/users').then(r => r.json()),
        fetch('/api/posts').then(r => r.json()),
        fetch('/api/comments').then(r => r.json())
    ]);
    return { users, posts, comments };
}
```

### 12. Modules (Import/Export)

```javascript
// math.js - Export
export const PI = 3.14159;
export function add(a, b) {
    return a + b;
}
export function multiply(a, b) {
    return a * b;
}

// Default export
export default class Calculator {
    add(a, b) { return a + b; }
}

// app.js - Import
import Calculator, { PI, add, multiply } from './math.js';
import * as MathLib from './math.js';  // Import all

// Usage
console.log(PI);
console.log(add(5, 3));
const calc = new Calculator();
```

### 13. Array Methods

```javascript
const numbers = [1, 2, 3, 4, 5];

// map - transform elements
const doubled = numbers.map(x => x * 2);  // [2, 4, 6, 8, 10]

// filter - lọc elements
const evens = numbers.filter(x => x % 2 === 0);  // [2, 4]

// reduce - tính toán tổng hợp
const sum = numbers.reduce((acc, x) => acc + x, 0);  // 15

// find - tìm element đầu tiên
const found = numbers.find(x => x > 3);  // 4

// findIndex - tìm index
const index = numbers.findIndex(x => x > 3);  // 3

// some - kiểm tra có ít nhất 1
const hasEven = numbers.some(x => x % 2 === 0);  // true

// every - kiểm tra tất cả
const allPositive = numbers.every(x => x > 0);  // true

// includes - kiểm tra tồn tại
const hasThree = numbers.includes(3);  // true

// flat - làm phẳng array (ES2019)
const nested = [1, [2, 3], [4, [5, 6]]];
console.log(nested.flat());     // [1, 2, 3, 4, [5, 6]]
console.log(nested.flat(2));    // [1, 2, 3, 4, 5, 6]

// flatMap (ES2019)
const arr = [1, 2, 3];
const result = arr.flatMap(x => [x, x * 2]);  // [1, 2, 2, 4, 3, 6]
```

### 14. String Methods

```javascript
// includes
const text = "JavaScript is awesome";
console.log(text.includes("Script"));  // true

// startsWith, endsWith
console.log(text.startsWith("Java"));  // true
console.log(text.endsWith("some"));    // true

// repeat
console.log("Hello ".repeat(3));  // "Hello Hello Hello "

// padStart, padEnd (ES2017)
const id = "5";
console.log(id.padStart(3, "0"));  // "005"
console.log(id.padEnd(3, "0"));    // "500"

// trimStart, trimEnd (ES2019)
const str = "  Hello  ";
console.log(str.trimStart());  // "Hello  "
console.log(str.trimEnd());    // "  Hello"
```

### 15. Optional Chaining (?.) - ES2020

```javascript
const user = {
    name: "Dương",
    address: {
        city: "TP.HCM"
    }
};

// Old way
const street = user.address && user.address.street;

// Optional chaining
const street = user.address?.street;  // undefined (no error)
const zip = user.address?.zipCode?.code;  // undefined

// With arrays
const firstItem = arr?.[0];

// With functions
const result = obj.method?.();
```

### 16. Nullish Coalescing (??) - ES2020

```javascript
// || operator
let value1 = 0 || "default";  // "default" (0 is falsy)

// ?? operator - chỉ check null/undefined
let value2 = 0 ?? "default";  // 0
let value3 = null ?? "default";  // "default"
let value4 = undefined ?? "default";  // "default"
let value5 = "" ?? "default";  // "" (empty string is not nullish)
```

## Kết luận

ES6+ đã mang lại nhiều cải tiến cho JavaScript:
- ✅ Cú pháp ngắn gọn và dễ đọc hơn
- ✅ Code hiện đại và chuyên nghiệp
- ✅ Xử lý bất đồng bộ tốt hơn với Async/Await
- ✅ Modules giúp code dễ quản lý
- ✅ Classes làm OOP rõ ràng hơn

Học ES6+ là bắt buộc để trở thành JavaScript Developer hiện đại!

---

*Tính năng ES6+ nào bạn thích nhất? Comment bên dưới!* 🚀
