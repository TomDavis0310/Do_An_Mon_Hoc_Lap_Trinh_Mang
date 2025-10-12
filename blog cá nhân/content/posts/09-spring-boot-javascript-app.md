---
title: "Tạo ứng dụng Web đầu tiên với Java Spring Boot và JavaScript"
date: 2025-10-09T10:00:00+07:00
draft: false
author: "Nguyễn Võ Xuân Dương"
tags: ["Java", "JavaScript", "Spring Boot", "Web Development", "Tutorial"]
categories: ["Java", "JavaScript", "Web Development"]
description: "Hướng dẫn chi tiết từng bước tạo ứng dụng web fullstack với Java Spring Boot backend và JavaScript frontend - Todo List Application."
cover:
    image: "/images/spring-boot-javascript.jpg"
    alt: "Spring Boot + JavaScript Web App"
    caption: "Fullstack Development với Spring Boot và JavaScript"
keywords: ["Spring Boot", "Java web app", "fullstack", "REST API", "JavaScript fetch"]
---

## Giới thiệu

Trong bài viết này, chúng ta sẽ xây dựng một **Todo List Application** hoàn chỉnh với:
- **Backend**: Java Spring Boot (REST API)
- **Frontend**: HTML + CSS + JavaScript (Vanilla)
- **Database**: H2 (in-memory database)

## Bước 1: Tạo Spring Boot Project

### 1.1. Sử dụng Spring Initializr

Truy cập: https://start.spring.io/

**Cấu hình:**
- **Project**: Maven
- **Language**: Java
- **Spring Boot**: 3.2.x
- **Group**: com.xuanduong
- **Artifact**: todoapp
- **Packaging**: Jar
- **Java**: 17 hoặc 21

**Dependencies:**
- Spring Web
- Spring Data JPA
- H2 Database
- Lombok (optional)

### 1.2. Cấu trúc project

```
todoapp/
├── src/
│   ├── main/
│   │   ├── java/com/xuanduong/todoapp/
│   │   │   ├── TodoappApplication.java
│   │   │   ├── controller/
│   │   │   │   └── TodoController.java
│   │   │   ├── model/
│   │   │   │   └── Todo.java
│   │   │   ├── repository/
│   │   │   │   └── TodoRepository.java
│   │   │   └── service/
│   │   │       └── TodoService.java
│   │   └── resources/
│   │       ├── application.properties
│   │       └── static/
│   │           ├── index.html
│   │           ├── style.css
│   │           └── app.js
│   └── test/
├── pom.xml
└── README.md
```

## Bước 2: Backend - Spring Boot API

### 2.1. Cấu hình application.properties

```properties
# application.properties
spring.application.name=todoapp

# H2 Database
spring.datasource.url=jdbc:h2:mem:tododb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=

# JPA
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

# H2 Console (for development)
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console

# Server port
server.port=8080
```

### 2.2. Entity Class (Model)

```java
// Todo.java
package com.xuanduong.todoapp.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "todos")
public class Todo {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String title;
    
    private String description;
    
    @Column(nullable = false)
    private Boolean completed = false;
    
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();
    
    // Constructors
    public Todo() {}
    
    public Todo(String title, String description) {
        this.title = title;
        this.description = description;
    }
    
    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getTitle() {
        return title;
    }
    
    public void setTitle(String title) {
        this.title = title;
    }
    
    public String getDescription() {
        return description;
    }
    
    public void setDescription(String description) {
        this.description = description;
    }
    
    public Boolean getCompleted() {
        return completed;
    }
    
    public void setCompleted(Boolean completed) {
        this.completed = completed;
    }
    
    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
}
```

### 2.3. Repository Interface

```java
// TodoRepository.java
package com.xuanduong.todoapp.repository;

import com.xuanduong.todoapp.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
    // Custom queries
    List<Todo> findByCompleted(Boolean completed);
    List<Todo> findByTitleContainingIgnoreCase(String title);
}
```

### 2.4. Service Class

```java
// TodoService.java
package com.xuanduong.todoapp.service;

import com.xuanduong.todoapp.model.Todo;
import com.xuanduong.todoapp.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class TodoService {
    
    @Autowired
    private TodoRepository todoRepository;
    
    // Get all todos
    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }
    
    // Get todo by ID
    public Optional<Todo> getTodoById(Long id) {
        return todoRepository.findById(id);
    }
    
    // Create todo
    public Todo createTodo(Todo todo) {
        return todoRepository.save(todo);
    }
    
    // Update todo
    public Todo updateTodo(Long id, Todo todoDetails) {
        Todo todo = todoRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Todo not found with id: " + id));
        
        todo.setTitle(todoDetails.getTitle());
        todo.setDescription(todoDetails.getDescription());
        todo.setCompleted(todoDetails.getCompleted());
        
        return todoRepository.save(todo);
    }
    
    // Toggle completed status
    public Todo toggleCompleted(Long id) {
        Todo todo = todoRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Todo not found with id: " + id));
        
        todo.setCompleted(!todo.getCompleted());
        return todoRepository.save(todo);
    }
    
    // Delete todo
    public void deleteTodo(Long id) {
        todoRepository.deleteById(id);
    }
    
    // Get completed todos
    public List<Todo> getCompletedTodos() {
        return todoRepository.findByCompleted(true);
    }
    
    // Get pending todos
    public List<Todo> getPendingTodos() {
        return todoRepository.findByCompleted(false);
    }
}
```

### 2.5. REST Controller

```java
// TodoController.java
package com.xuanduong.todoapp.controller;

import com.xuanduong.todoapp.model.Todo;
import com.xuanduong.todoapp.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "*")  // Allow CORS for frontend
public class TodoController {
    
    @Autowired
    private TodoService todoService;
    
    // GET /api/todos - Get all todos
    @GetMapping
    public ResponseEntity<List<Todo>> getAllTodos() {
        List<Todo> todos = todoService.getAllTodos();
        return ResponseEntity.ok(todos);
    }
    
    // GET /api/todos/{id} - Get todo by ID
    @GetMapping("/{id}")
    public ResponseEntity<Todo> getTodoById(@PathVariable Long id) {
        return todoService.getTodoById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
    
    // POST /api/todos - Create new todo
    @PostMapping
    public ResponseEntity<Todo> createTodo(@RequestBody Todo todo) {
        Todo created = todoService.createTodo(todo);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }
    
    // PUT /api/todos/{id} - Update todo
    @PutMapping("/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable Long id, @RequestBody Todo todo) {
        try {
            Todo updated = todoService.updateTodo(id, todo);
            return ResponseEntity.ok(updated);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    // PATCH /api/todos/{id}/toggle - Toggle completed status
    @PatchMapping("/{id}/toggle")
    public ResponseEntity<Todo> toggleCompleted(@PathVariable Long id) {
        try {
            Todo updated = todoService.toggleCompleted(id);
            return ResponseEntity.ok(updated);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    // DELETE /api/todos/{id} - Delete todo
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable Long id) {
        todoService.deleteTodo(id);
        return ResponseEntity.noContent().build();
    }
    
    // GET /api/todos/completed - Get completed todos
    @GetMapping("/completed")
    public ResponseEntity<List<Todo>> getCompletedTodos() {
        List<Todo> todos = todoService.getCompletedTodos();
        return ResponseEntity.ok(todos);
    }
    
    // GET /api/todos/pending - Get pending todos
    @GetMapping("/pending")
    public ResponseEntity<List<Todo>> getPendingTodos() {
        List<Todo> todos = todoService.getPendingTodos();
        return ResponseEntity.ok(todos);
    }
}
```

## Bước 3: Frontend - HTML + CSS + JavaScript

### 3.1. HTML (index.html)

```html
<!-- src/main/resources/static/index.html -->
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo App - Nguyễn Võ Xuân Dương</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>📝 Todo List</h1>
            <p class="subtitle">by Nguyễn Võ Xuân Dương</p>
        </header>

        <div class="input-section">
            <input type="text" id="todoTitle" placeholder="Tiêu đề..." maxlength="100">
            <textarea id="todoDescription" placeholder="Mô tả (optional)..." rows="2"></textarea>
            <button id="addBtn" class="btn btn-primary">➕ Thêm Todo</button>
        </div>

        <div class="filter-section">
            <button class="filter-btn active" data-filter="all">Tất cả</button>
            <button class="filter-btn" data-filter="pending">Chưa xong</button>
            <button class="filter-btn" data-filter="completed">Đã xong</button>
        </div>

        <div id="todoList" class="todo-list">
            <p class="empty-message">Chưa có công việc nào. Hãy thêm mới!</p>
        </div>
    </div>

    <script src="app.js"></script>
</body>
</html>
```

### 3.2. CSS (style.css)

```css
/* src/main/resources/static/style.css */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 20px;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 10px 50px rgba(0, 0, 0, 0.3);
}

header {
    text-align: center;
    margin-bottom: 30px;
}

h1 {
    color: #667eea;
    font-size: 2.5rem;
    margin-bottom: 5px;
}

.subtitle {
    color: #666;
    font-size: 0.9rem;
}

.input-section {
    margin-bottom: 20px;
}

input, textarea {
    width: 100%;
    padding: 12px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 1rem;
    margin-bottom: 10px;
    transition: border-color 0.3s;
}

input:focus, textarea:focus {
    outline: none;
    border-color: #667eea;
}

.btn {
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s;
}

.btn-primary {
    background: #667eea;
    color: white;
    width: 100%;
}

.btn-primary:hover {
    background: #5568d3;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}

.filter-section {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.filter-btn {
    flex: 1;
    padding: 10px;
    background: #f5f5f5;
    border: 2px solid transparent;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
}

.filter-btn:hover {
    background: #e0e0e0;
}

.filter-btn.active {
    background: #667eea;
    color: white;
    border-color: #667eea;
}

.todo-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.todo-item {
    background: #f9f9f9;
    padding: 15px;
    border-radius: 10px;
    border-left: 4px solid #667eea;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    transition: all 0.3s;
}

.todo-item:hover {
    transform: translateX(5px);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.todo-item.completed {
    opacity: 0.6;
    border-left-color: #4caf50;
}

.todo-content {
    flex: 1;
    cursor: pointer;
}

.todo-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 5px;
}

.todo-item.completed .todo-title {
    text-decoration: line-through;
    color: #999;
}

.todo-description {
    font-size: 0.9rem;
    color: #666;
    margin-top: 5px;
}

.todo-date {
    font-size: 0.8rem;
    color: #999;
    margin-top: 5px;
}

.todo-actions {
    display: flex;
    gap: 5px;
}

.todo-actions button {
    padding: 8px 12px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.3s;
}

.btn-delete {
    background: #f44336;
    color: white;
}

.btn-delete:hover {
    background: #d32f2f;
}

.empty-message {
    text-align: center;
    color: #999;
    padding: 40px;
    font-style: italic;
}

/* Responsive */
@media (max-width: 600px) {
    .container {
        padding: 20px;
    }
    
    h1 {
        font-size: 2rem;
    }
    
    .filter-section {
        flex-direction: column;
    }
}
```

### 3.3. JavaScript (app.js)

```javascript
// src/main/resources/static/app.js
const API_URL = 'http://localhost:8080/api/todos';

// DOM Elements
const todoTitle = document.getElementById('todoTitle');
const todoDescription = document.getElementById('todoDescription');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentFilter = 'all';
let todos = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadTodos();
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    addBtn.addEventListener('click', addTodo);
    
    todoTitle.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTodo();
    });
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderTodos();
        });
    });
}

// Load todos from API
async function loadTodos() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch todos');
        todos = await response.json();
        renderTodos();
    } catch (error) {
        console.error('Error loading todos:', error);
        showError('Không thể tải dữ liệu. Vui lòng thử lại!');
    }
}

// Add new todo
async function addTodo() {
    const title = todoTitle.value.trim();
    
    if (!title) {
        alert('Vui lòng nhập tiêu đề!');
        return;
    }
    
    const newTodo = {
        title: title,
        description: todoDescription.value.trim(),
        completed: false
    };
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTodo)
        });
        
        if (!response.ok) throw new Error('Failed to create todo');
        
        const created = await response.json();
        todos.push(created);
        
        // Clear inputs
        todoTitle.value = '';
        todoDescription.value = '';
        todoTitle.focus();
        
        renderTodos();
    } catch (error) {
        console.error('Error creating todo:', error);
        showError('Không thể tạo todo. Vui lòng thử lại!');
    }
}

// Toggle todo completed status
async function toggleTodo(id) {
    try {
        const response = await fetch(`${API_URL}/${id}/toggle`, {
            method: 'PATCH'
        });
        
        if (!response.ok) throw new Error('Failed to toggle todo');
        
        const updated = await response.json();
        const index = todos.findIndex(t => t.id === id);
        if (index !== -1) {
            todos[index] = updated;
        }
        
        renderTodos();
    } catch (error) {
        console.error('Error toggling todo:', error);
        showError('Không thể cập nhật todo. Vui lòng thử lại!');
    }
}

// Delete todo
async function deleteTodo(id) {
    if (!confirm('Bạn có chắc muốn xóa todo này?')) return;
    
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) throw new Error('Failed to delete todo');
        
        todos = todos.filter(t => t.id !== id);
        renderTodos();
    } catch (error) {
        console.error('Error deleting todo:', error);
        showError('Không thể xóa todo. Vui lòng thử lại!');
    }
}

// Render todos
function renderTodos() {
    let filteredTodos = todos;
    
    if (currentFilter === 'completed') {
        filteredTodos = todos.filter(t => t.completed);
    } else if (currentFilter === 'pending') {
        filteredTodos = todos.filter(t => !t.completed);
    }
    
    if (filteredTodos.length === 0) {
        todoList.innerHTML = '<p class="empty-message">Không có công việc nào!</p>';
        return;
    }
    
    todoList.innerHTML = filteredTodos.map(todo => `
        <div class="todo-item ${todo.completed ? 'completed' : ''}">
            <div class="todo-content" onclick="toggleTodo(${todo.id})">
                <div class="todo-title">${escapeHtml(todo.title)}</div>
                ${todo.description ? `<div class="todo-description">${escapeHtml(todo.description)}</div>` : ''}
                <div class="todo-date">${formatDate(todo.createdAt)}</div>
            </div>
            <div class="todo-actions">
                <button class="btn-delete" onclick="deleteTodo(${todo.id})">🗑️</button>
            </div>
        </div>
    `).join('');
}

// Utility functions
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function showError(message) {
    alert(message);
}
```

## Bước 4: Chạy ứng dụng

### 4.1. Chạy Backend

```bash
# Trong thư mục root của project
mvn spring-boot:run

# Hoặc nếu dùng Gradle
./gradlew bootRun
```

Backend sẽ chạy tại: http://localhost:8080

### 4.2. Test API với Browser hoặc Postman

**Truy cập:**
- Frontend: http://localhost:8080/
- H2 Console: http://localhost:8080/h2-console
- API: http://localhost:8080/api/todos

### 4.3. Test endpoints

```bash
# GET - Lấy tất cả todos
curl http://localhost:8080/api/todos

# POST - Tạo todo mới
curl -X POST http://localhost:8080/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title":"Học Spring Boot","description":"Hoàn thành bài tutorial"}'

# PATCH - Toggle completed
curl -X PATCH http://localhost:8080/api/todos/1/toggle

# DELETE - Xóa todo
curl -X DELETE http://localhost:8080/api/todos/1
```

## Kết luận

Chúc mừng! Bạn đã hoàn thành ứng dụng web fullstack đầu tiên với:

- ✅ **Backend**: Spring Boot REST API
- ✅ **Frontend**: HTML + CSS + JavaScript
- ✅ **Database**: H2 (JPA)
- ✅ **CRUD Operations**: Create, Read, Update, Delete
- ✅ **Responsive Design**: Mobile-friendly

### Bước tiếp theo:
1. Deploy lên Heroku/Railway
2. Thêm authentication (Spring Security + JWT)
3. Tích hợp React/Vue thay vì Vanilla JS
4. Chuyển sang PostgreSQL/MySQL
5. Thêm unit tests và integration tests

---

*Bạn đã tạo app thành công chưa? Chia sẻ screenshot của bạn!* 🎉
