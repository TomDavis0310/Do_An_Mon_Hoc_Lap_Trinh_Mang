---
title: "Xử lý ngoại lệ trong Java"
date: 2025-10-04T10:00:00+07:00
draft: false
author: "Nguyễn Võ Xuân Dương"
tags: ["Java", "Exception Handling", "Programming"]
categories: ["Java"]
description: "Hướng dẫn chi tiết về xử lý ngoại lệ (Exception Handling) trong Java: try-catch, throw, throws, custom exception và best practices."
cover:
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=600&fit=crop"
    alt: "Exception Handling in Java"
    caption: "Xử lý lỗi chuyên nghiệp trong Java"
keywords: ["Java exception", "try catch", "throw throws", "xử lý lỗi Java"]
---

<div style="text-align: center; margin: 30px 0;">
  <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230613122108/Exception-Handling-in-Java.png" alt="Exception Hierarchy" style="max-width: 100%; border-radius: 10px;">
  <p style="font-style: italic; color: #666;">Hệ thống phân cấp Exception trong Java</p>
</div>

## Exception là gì?

**Exception** (ngoại lệ) là một sự kiện bất thường xảy ra trong quá trình thực thi chương trình, làm gián đoạn luồng chạy bình thường. Java cung cấp cơ chế mạnh mẽ để xử lý các tình huống này.

## Phân loại Exception trong Java

```
Throwable
├── Error (Lỗi hệ thống, không nên catch)
│   ├── OutOfMemoryError
│   ├── StackOverflowError
│   └── VirtualMachineError
│
└── Exception (Có thể xử lý được)
    ├── RuntimeException (Unchecked Exception)
    │   ├── NullPointerException
    │   ├── ArrayIndexOutOfBoundsException
    │   ├── ArithmeticException
    │   └── IllegalArgumentException
    │
    └── IOException, SQLException... (Checked Exception)
```

### 1. Checked Exception
- Được kiểm tra tại thời điểm biên dịch
- Bắt buộc phải xử lý (try-catch hoặc throws)
- Ví dụ: `IOException`, `SQLException`, `FileNotFoundException`

### 2. Unchecked Exception (Runtime Exception)
- Không được kiểm tra tại compile time
- Không bắt buộc phải xử lý
- Ví dụ: `NullPointerException`, `ArithmeticException`

### 3. Error
- Lỗi nghiêm trọng của hệ thống
- Không nên xử lý
- Ví dụ: `OutOfMemoryError`, `StackOverflowError`

## Cú pháp xử lý Exception

### 1. Try-Catch cơ bản

```java
public class ExceptionDemo {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;  // ArithmeticException
            System.out.println("Kết quả: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Lỗi: Không thể chia cho 0!");
            System.out.println("Chi tiết: " + e.getMessage());
        }
        
        System.out.println("Chương trình tiếp tục chạy...");
    }
}
```

### 2. Multiple Catch Blocks

```java
public class MultiCatchDemo {
    public static void main(String[] args) {
        try {
            String str = null;
            System.out.println(str.length());  // NullPointerException
            
            int[] arr = new int[5];
            arr[10] = 50;  // ArrayIndexOutOfBoundsException
            
        } catch (NullPointerException e) {
            System.out.println("Lỗi: Biến null!");
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Lỗi: Vượt quá kích thước mảng!");
        } catch (Exception e) {
            System.out.println("Lỗi khác: " + e.getMessage());
        }
    }
}
```

### 3. Multi-Catch (Java 7+)

```java
try {
    // Code có thể gây lỗi
} catch (IOException | SQLException e) {
    System.out.println("Lỗi IO hoặc SQL: " + e.getMessage());
    e.printStackTrace();
}
```

### 4. Try-Catch-Finally

```java
import java.io.*;

public class FinallyDemo {
    public static void readFile(String filename) {
        BufferedReader reader = null;
        try {
            reader = new BufferedReader(new FileReader(filename));
            String line = reader.readLine();
            System.out.println("Nội dung: " + line);
        } catch (FileNotFoundException e) {
            System.out.println("Không tìm thấy file: " + filename);
        } catch (IOException e) {
            System.out.println("Lỗi đọc file: " + e.getMessage());
        } finally {
            // Finally luôn được thực thi, dù có lỗi hay không
            try {
                if (reader != null) {
                    reader.close();
                    System.out.println("Đã đóng file");
                }
            } catch (IOException e) {
                System.out.println("Lỗi khi đóng file");
            }
        }
    }
}
```

### 5. Try-with-Resources (Java 7+)

Tự động đóng resource, không cần finally:

```java
public class TryWithResourcesDemo {
    public static void readFile(String filename) {
        // Resources sẽ tự động được đóng
        try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("Lỗi: " + e.getMessage());
        }
        // Không cần finally để đóng reader
    }
}
```

## Throw và Throws

### 1. Throw - Ném exception

```java
public class ThrowDemo {
    public static void validateAge(int age) {
        if (age < 18) {
            throw new IllegalArgumentException("Tuổi phải >= 18!");
        }
        System.out.println("Tuổi hợp lệ: " + age);
    }
    
    public static void main(String[] args) {
        try {
            validateAge(15);
        } catch (IllegalArgumentException e) {
            System.out.println("Lỗi: " + e.getMessage());
        }
    }
}
```

### 2. Throws - Khai báo exception

```java
import java.io.*;

public class ThrowsDemo {
    // Khai báo method có thể throw exception
    public static void readFile(String filename) throws IOException {
        BufferedReader reader = new BufferedReader(new FileReader(filename));
        String line = reader.readLine();
        System.out.println(line);
        reader.close();
    }
    
    public static void main(String[] args) {
        try {
            readFile("data.txt");
        } catch (IOException e) {
            System.out.println("Lỗi đọc file: " + e.getMessage());
        }
    }
}
```

## Custom Exception

### Tạo Exception riêng

```java
// Custom Checked Exception
public class InvalidStudentException extends Exception {
    private String studentId;
    
    public InvalidStudentException(String message, String studentId) {
        super(message);
        this.studentId = studentId;
    }
    
    public String getStudentId() {
        return studentId;
    }
}

// Custom Unchecked Exception
public class InsufficientBalanceException extends RuntimeException {
    private double balance;
    private double amount;
    
    public InsufficientBalanceException(double balance, double amount) {
        super("Số dư không đủ! Số dư: " + balance + ", Yêu cầu: " + amount);
        this.balance = balance;
        this.amount = amount;
    }
    
    public double getBalance() {
        return balance;
    }
    
    public double getAmount() {
        return amount;
    }
}
```

### Sử dụng Custom Exception

```java
public class Student {
    private String id;
    private String name;
    private double gpa;
    
    public Student(String id, String name, double gpa) throws InvalidStudentException {
        if (id == null || id.isEmpty()) {
            throw new InvalidStudentException("Mã sinh viên không được rỗng", id);
        }
        if (gpa < 0 || gpa > 4.0) {
            throw new InvalidStudentException("GPA phải từ 0.0 đến 4.0", id);
        }
        this.id = id;
        this.name = name;
        this.gpa = gpa;
    }
}

// Sử dụng
public class Main {
    public static void main(String[] args) {
        try {
            Student sv1 = new Student("", "Xuân Dương", 3.5);
        } catch (InvalidStudentException e) {
            System.out.println("Lỗi: " + e.getMessage());
            System.out.println("Mã SV: " + e.getStudentId());
        }
        
        try {
            Student sv2 = new Student("2151012345", "Xuân Dương", 5.0);
        } catch (InvalidStudentException e) {
            System.out.println("Lỗi: " + e.getMessage());
        }
    }
}
```

## Ví dụ thực tế: Banking System

```java
public class BankAccount {
    private String accountNumber;
    private double balance;
    
    public BankAccount(String accountNumber, double initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    
    public void withdraw(double amount) throws InsufficientBalanceException {
        if (amount > balance) {
            throw new InsufficientBalanceException(balance, amount);
        }
        balance -= amount;
        System.out.println("Rút thành công: " + amount);
        System.out.println("Số dư còn lại: " + balance);
    }
    
    public void deposit(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Số tiền phải lớn hơn 0");
        }
        balance += amount;
        System.out.println("Nạp thành công: " + amount);
        System.out.println("Số dư hiện tại: " + balance);
    }
    
    public double getBalance() {
        return balance;
    }
}

// Sử dụng
public class BankingDemo {
    public static void main(String[] args) {
        BankAccount account = new BankAccount("123456789", 1000000);
        
        try {
            account.deposit(500000);
            account.withdraw(2000000);  // Lỗi: không đủ tiền
        } catch (InsufficientBalanceException e) {
            System.out.println("❌ " + e.getMessage());
            System.out.println("Số dư hiện tại: " + e.getBalance());
            System.out.println("Số tiền yêu cầu: " + e.getAmount());
        } catch (IllegalArgumentException e) {
            System.out.println("❌ " + e.getMessage());
        }
    }
}
```

## Best Practices

### 1. ✅ Nên làm

```java
// Cụ thể exception
try {
    // code
} catch (FileNotFoundException e) {
    // xử lý cụ thể
} catch (IOException e) {
    // xử lý chung hơn
}

// Đóng resource đúng cách
try (Scanner scanner = new Scanner(new File("data.txt"))) {
    // use scanner
}

// Log exception
catch (Exception e) {
    logger.error("Error occurred", e);
    throw e;  // Re-throw nếu cần
}
```

### 2. ❌ Không nên làm

```java
// Catch tất cả nhưng không xử lý
try {
    // code
} catch (Exception e) {
    // không làm gì - RẤT TỆ!
}

// Catch Exception quá chung
try {
    // code
} catch (Exception e) {  // Nên catch cụ thể hơn
    // xử lý
}

// In ra console thay vì log
catch (Exception e) {
    e.printStackTrace();  // Nên dùng logger
}
```

## Common Exceptions

| Exception | Nguyên nhân | Cách xử lý |
|-----------|-------------|------------|
| `NullPointerException` | Truy cập object null | Kiểm tra null trước khi dùng |
| `ArrayIndexOutOfBoundsException` | Index vượt quá size | Kiểm tra index < array.length |
| `NumberFormatException` | Parse string thành số sai | Dùng try-catch khi parse |
| `FileNotFoundException` | File không tồn tại | Kiểm tra file.exists() |
| `IOException` | Lỗi I/O | Dùng try-catch-finally |
| `SQLException` | Lỗi database | Dùng try-catch, rollback |

## Kết luận

Exception Handling giúp:
- ✅ **Chương trình ổn định hơn** - không crash đột ngột
- ✅ **Debug dễ dàng** - biết chính xác lỗi ở đâu
- ✅ **Code sạch hơn** - tách biệt logic và xử lý lỗi
- ✅ **Trải nghiệm tốt** - thông báo lỗi rõ ràng cho user

Hãy luôn xử lý exception một cách chủ động và chuyên nghiệp!

---

*Bạn đã từng gặp exception nào khó xử lý? Chia sẻ trong comment nhé!* 💪
