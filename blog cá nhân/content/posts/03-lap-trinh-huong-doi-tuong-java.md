---
title: "Lập trình hướng đối tượng trong Java"
date: 2025-10-03T10:00:00+07:00
draft: false
author: "Nguyễn Võ Xuân Dương"
tags: ["Java", "OOP", "Programming"]
categories: ["Java"]
description: "Tìm hiểu chi tiết về 4 trọng tâm của lập trình hướng đối tượng: Encapsulation, Inheritance, Polymorphism và Abstraction trong Java."
cover:
    image: "/images/java-oop.jpg"
    alt: "Object-Oriented Programming in Java"
    caption: "OOP - Nền tảng của lập trình hiện đại"
keywords: ["OOP Java", "lập trình hướng đối tượng", "Java class", "Java inheritance"]
---

## Lập trình hướng đối tượng (OOP) là gì?

**Object-Oriented Programming (OOP)** là một phương pháp lập trình dựa trên khái niệm "đối tượng" (objects), chứa dữ liệu (attributes) và hành vi (methods). Java là ngôn ngữ OOP thuần túy, mọi thứ đều xoay quanh các class và object.

## 4 Trụ cột của OOP

### 1. Encapsulation (Đóng gói)

**Đóng gói** là việc che giấu dữ liệu bên trong class và chỉ cho phép truy cập thông qua các phương thức public.

```java
public class Student {
    // Các thuộc tính private - không thể truy cập trực tiếp từ bên ngoài
    private String name;
    private int age;
    private double gpa;
    
    // Constructor
    public Student(String name, int age, double gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    
    // Getter methods - cho phép đọc dữ liệu
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    public double getGpa() {
        return gpa;
    }
    
    // Setter methods - cho phép thay đổi dữ liệu với validation
    public void setAge(int age) {
        if (age > 0 && age < 100) {
            this.age = age;
        } else {
            System.out.println("Tuổi không hợp lệ!");
        }
    }
    
    public void setGpa(double gpa) {
        if (gpa >= 0.0 && gpa <= 4.0) {
            this.gpa = gpa;
        } else {
            System.out.println("GPA phải từ 0.0 đến 4.0!");
        }
    }
}
```

**Lợi ích của Encapsulation:**
- Bảo vệ dữ liệu khỏi truy cập trái phép
- Kiểm soát cách dữ liệu được thay đổi
- Tăng tính bảo mật và dễ bảo trì

### 2. Inheritance (Kế thừa)

**Kế thừa** cho phép class con (subclass) thừa hưởng các thuộc tính và phương thức từ class cha (superclass).

```java
// Class cha (Parent/Base class)
public class Person {
    protected String name;
    protected int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void displayInfo() {
        System.out.println("Tên: " + name);
        System.out.println("Tuổi: " + age);
    }
    
    public void sleep() {
        System.out.println(name + " đang ngủ...");
    }
}

// Class con (Child/Derived class)
public class Student extends Person {
    private String studentId;
    private double gpa;
    
    public Student(String name, int age, String studentId, double gpa) {
        super(name, age);  // Gọi constructor của class cha
        this.studentId = studentId;
        this.gpa = gpa;
    }
    
    // Override phương thức từ class cha
    @Override
    public void displayInfo() {
        super.displayInfo();  // Gọi phương thức của class cha
        System.out.println("Mã SV: " + studentId);
        System.out.println("GPA: " + gpa);
    }
    
    // Phương thức riêng của Student
    public void study() {
        System.out.println(name + " đang học bài...");
    }
}

// Sử dụng
public class Main {
    public static void main(String[] args) {
        Student sv = new Student("Xuân Dương", 21, "2151012345", 3.5);
        sv.displayInfo();
        sv.study();
        sv.sleep();  // Kế thừa từ Person
    }
}
```

**Các loại kế thừa trong Java:**
- **Single Inheritance**: Class con kế thừa từ 1 class cha
- **Multilevel Inheritance**: A → B → C
- **Hierarchical Inheritance**: Nhiều class con cùng kế thừa 1 class cha
- ⚠️ **Multiple Inheritance**: Java KHÔNG hỗ trợ (nhưng có thể dùng Interface)

### 3. Polymorphism (Đa hình)

**Đa hình** nghĩa là "nhiều hình dạng" - một phương thức có thể có nhiều cách thực thi khác nhau.

#### 3.1. Compile-time Polymorphism (Method Overloading)

```java
public class Calculator {
    // Cùng tên phương thức, khác tham số
    public int add(int a, int b) {
        return a + b;
    }
    
    public double add(double a, double b) {
        return a + b;
    }
    
    public int add(int a, int b, int c) {
        return a + b + c;
    }
    
    public String add(String a, String b) {
        return a + b;
    }
}

// Sử dụng
Calculator calc = new Calculator();
System.out.println(calc.add(5, 3));           // 8
System.out.println(calc.add(5.5, 3.2));       // 8.7
System.out.println(calc.add(1, 2, 3));        // 6
System.out.println(calc.add("Hello", "World")); // HelloWorld
```

#### 3.2. Runtime Polymorphism (Method Overriding)

```java
class Animal {
    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Gâu gâu! 🐕");
    }
}

class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Meo meo! 🐈");
    }
}

// Sử dụng đa hình
public class Main {
    public static void main(String[] args) {
        Animal animal1 = new Dog();  // Upcasting
        Animal animal2 = new Cat();
        
        animal1.makeSound();  // Gâu gâu! 🐕
        animal2.makeSound();  // Meo meo! 🐈
        
        // Mảng đa hình
        Animal[] animals = {new Dog(), new Cat(), new Dog()};
        for (Animal animal : animals) {
            animal.makeSound();
        }
    }
}
```

### 4. Abstraction (Trừu tượng)

**Trừu tượng** là việc ẩn đi các chi tiết phức tạp và chỉ hiển thị những gì cần thiết.

#### 4.1. Abstract Class

```java
// Abstract class không thể tạo object trực tiếp
public abstract class Shape {
    protected String color;
    
    public Shape(String color) {
        this.color = color;
    }
    
    // Abstract method - không có implementation
    public abstract double getArea();
    public abstract double getPerimeter();
    
    // Concrete method - có implementation
    public void displayColor() {
        System.out.println("Màu sắc: " + color);
    }
}

// Class con phải implement tất cả abstract methods
public class Circle extends Shape {
    private double radius;
    
    public Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }
    
    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
    
    @Override
    public double getPerimeter() {
        return 2 * Math.PI * radius;
    }
}

public class Rectangle extends Shape {
    private double width;
    private double height;
    
    public Rectangle(String color, double width, double height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    
    @Override
    public double getArea() {
        return width * height;
    }
    
    @Override
    public double getPerimeter() {
        return 2 * (width + height);
    }
}
```

#### 4.2. Interface

```java
// Interface - chỉ chứa abstract methods (Java 8+: có thể có default methods)
public interface Drawable {
    void draw();  // public abstract mặc định
    void resize(double scale);
}

public interface Colorable {
    void setColor(String color);
    String getColor();
}

// Một class có thể implement nhiều interface
public class Square implements Drawable, Colorable {
    private double side;
    private String color;
    
    public Square(double side) {
        this.side = side;
    }
    
    @Override
    public void draw() {
        System.out.println("Vẽ hình vuông cạnh " + side);
    }
    
    @Override
    public void resize(double scale) {
        this.side *= scale;
        System.out.println("Resize thành " + side);
    }
    
    @Override
    public void setColor(String color) {
        this.color = color;
    }
    
    @Override
    public String getColor() {
        return color;
    }
}
```

## So sánh Abstract Class vs Interface

| Đặc điểm | Abstract Class | Interface |
|----------|----------------|-----------|
| Kế thừa | Chỉ 1 class | Nhiều interface |
| Methods | Có cả abstract và concrete | Chủ yếu abstract (trước Java 8) |
| Variables | Mọi loại | Chỉ `public static final` |
| Constructor | Có | Không |
| Access modifiers | Mọi loại | Chỉ `public` |

## Ví dụ tổng hợp

```java
// Interface cho các hành động
interface Workable {
    void work();
}

interface Studyable {
    void study();
}

// Abstract class
abstract class Person {
    protected String name;
    protected int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public abstract void introduce();
}

// Class kế thừa và implement interface
class StudentWorker extends Person implements Studyable, Workable {
    private String university;
    private String company;
    
    public StudentWorker(String name, int age, String university, String company) {
        super(name, age);
        this.university = university;
        this.company = company;
    }
    
    @Override
    public void introduce() {
        System.out.println("Xin chào, tôi là " + name + ", " + age + " tuổi");
    }
    
    @Override
    public void study() {
        System.out.println("Đang học tại " + university);
    }
    
    @Override
    public void work() {
        System.out.println("Đang làm việc tại " + company);
    }
}
```

## Kết luận

OOP trong Java giúp:
- ✅ **Code tái sử dụng** (Inheritance)
- ✅ **Bảo mật dữ liệu** (Encapsulation)
- ✅ **Linh hoạt và mở rộng** (Polymorphism)
- ✅ **Đơn giản hóa phức tạp** (Abstraction)

Hiểu rõ 4 nguyên lý OOP là nền tảng để trở thành Java Developer chuyên nghiệp!

---

*Bạn có thắc mắc gì về OOP không? Hãy comment bên dưới nhé!* 🎯
