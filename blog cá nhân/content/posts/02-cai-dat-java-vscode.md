---
title: "Hướng dẫn cài đặt môi trường Java & VSCode"
date: 2025-10-02T10:00:00+07:00
draft: false
author: "Nguyễn Võ Xuân Dương"
tags: ["Java", "VSCode", "Setup", "Tutorial"]
categories: ["Java", "Tools"]
description: "Hướng dẫn chi tiết từng bước cài đặt JDK, môi trường phát triển Java và Visual Studio Code để bắt đầu lập trình Java."
cover:
    image: "/images/java-setup.jpg"
    alt: "Java Development Setup"
    caption: "Cài đặt môi trường Java chuyên nghiệp"
keywords: ["cài đặt Java", "JDK", "VSCode", "Java development"]
---

## Giới thiệu

Để bắt đầu lập trình Java, bạn cần cài đặt **JDK (Java Development Kit)** và một **IDE/Editor**. Trong bài viết này, tôi sẽ hướng dẫn sử dụng **Visual Studio Code** - một editor miễn phí, nhẹ và mạnh mẽ.

## Bước 1: Cài đặt JDK

### 1.1. Tải JDK

Có nhiều phiên bản JDK để lựa chọn:

- **Oracle JDK** (thương mại, có hỗ trợ)
- **OpenJDK** (miễn phí, open source)
- **Amazon Corretto** (miễn phí, được AWS hỗ trợ)
- **Azul Zulu** (miễn phí, hiệu năng cao)

**Khuyến nghị**: Sử dụng **OpenJDK** hoặc **Amazon Corretto**

**Link tải**:
- OpenJDK: https://jdk.java.net/
- Amazon Corretto: https://aws.amazon.com/corretto/
- Oracle JDK: https://www.oracle.com/java/technologies/downloads/

### 1.2. Cài đặt JDK trên Windows

1. Tải file cài đặt `.msi` hoặc `.exe`
2. Chạy file và làm theo hướng dẫn
3. Chọn thư mục cài đặt (mặc định: `C:\Program Files\Java\jdk-21`)
4. Hoàn tất cài đặt

### 1.3. Cài đặt JDK trên macOS

```bash
# Sử dụng Homebrew
brew install openjdk@21

# Hoặc tải file .dmg và cài đặt thủ công
```

### 1.4. Cài đặt JDK trên Linux (Ubuntu/Debian)

```bash
# Cập nhật package list
sudo apt update

# Cài đặt OpenJDK
sudo apt install openjdk-21-jdk

# Kiểm tra phiên bản
java -version
javac -version
```

## Bước 2: Cấu hình biến môi trường

### Windows

1. Mở **System Properties** → **Advanced** → **Environment Variables**
2. Thêm biến `JAVA_HOME`:
   - Variable name: `JAVA_HOME`
   - Variable value: `C:\Program Files\Java\jdk-21`
3. Chỉnh sửa biến `Path`, thêm:
   ```
   %JAVA_HOME%\bin
   ```

### macOS/Linux

Thêm vào file `~/.bashrc` hoặc `~/.zshrc`:

```bash
export JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64
export PATH=$JAVA_HOME/bin:$PATH
```

Sau đó chạy:
```bash
source ~/.bashrc  # hoặc ~/.zshrc
```

## Bước 3: Kiểm tra cài đặt

Mở Terminal/Command Prompt và chạy:

```bash
# Kiểm tra Java Runtime Environment
java -version

# Kiểm tra Java Compiler
javac -version
```

Kết quả mong đợi:
```
java version "21.0.1" 2023-10-17 LTS
Java(TM) SE Runtime Environment (build 21.0.1+12-LTS-29)
```

## Bước 4: Cài đặt Visual Studio Code

### 4.1. Tải và cài đặt VSCode

- Truy cập: https://code.visualstudio.com/
- Tải phiên bản phù hợp với hệ điều hành
- Cài đặt theo hướng dẫn

### 4.2. Cài đặt Extension Pack for Java

1. Mở VSCode
2. Nhấn `Ctrl+Shift+X` (Windows/Linux) hoặc `Cmd+Shift+X` (macOS)
3. Tìm kiếm "**Extension Pack for Java**" từ Microsoft
4. Click **Install**

Extension này bao gồm:
- Language Support for Java™ by Red Hat
- Debugger for Java
- Test Runner for Java
- Maven for Java
- Project Manager for Java
- Visual Studio IntelliCode

### 4.3. Cài đặt các Extension bổ sung (Optional)

- **Spring Boot Extension Pack**: Nếu làm việc với Spring
- **Lombok Annotations Support**: Giảm boilerplate code
- **SonarLint**: Kiểm tra chất lượng code

## Bước 5: Tạo dự án Java đầu tiên

### 5.1. Tạo project

1. Mở VSCode
2. Nhấn `Ctrl+Shift+P` → Gõ "**Java: Create Java Project**"
3. Chọn "**No build tools**" (hoặc Maven/Gradle nếu muốn)
4. Chọn thư mục lưu project
5. Đặt tên project: `HelloJava`

### 5.2. Viết code Hello World

Tạo file `HelloWorld.java`:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Xin chào, đây là chương trình Java đầu tiên!");
        System.out.println("Hello from Nguyễn Võ Xuân Dương 👋");
    }
}
```

### 5.3. Chạy chương trình

**Cách 1**: Click nút **Run** (tam giác) ở góc trên phải

**Cách 2**: Nhấn `F5` để debug

**Cách 3**: Terminal
```bash
# Biên dịch
javac HelloWorld.java

# Chạy
java HelloWorld
```

Kết quả:
```
Xin chào, đây là chương trình Java đầu tiên!
Hello from Nguyễn Võ Xuân Dương 👋
```

## Bước 6: Cấu hình VSCode cho Java

### 6.1. Settings.json

Nhấn `Ctrl+,` → Tìm "settings" → Click biểu tượng file để mở `settings.json`:

```json
{
    "java.home": "C:\\Program Files\\Java\\jdk-21",
    "java.configuration.runtimes": [
        {
            "name": "JavaSE-21",
            "path": "C:\\Program Files\\Java\\jdk-21"
        }
    ],
    "java.format.settings.url": "https://raw.githubusercontent.com/google/styleguide/gh-pages/eclipse-java-google-style.xml",
    "java.saveActions.organizeImports": true,
    "editor.formatOnSave": true
}
```

### 6.2. Launch Configuration (Debug)

Tạo file `.vscode/launch.json`:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "java",
            "name": "Debug (Launch) - Current File",
            "request": "launch",
            "mainClass": "${file}"
        }
    ]
}
```

## Các lệnh hữu ích trong VSCode

| Phím tắt | Chức năng |
|----------|-----------|
| `Ctrl+Space` | Autocomplete |
| `F12` | Go to Definition |
| `Shift+F12` | Find References |
| `Ctrl+.` | Quick Fix |
| `Alt+Shift+F` | Format Code |
| `Ctrl+Shift+O` | Organize Imports |

## Xử lý lỗi thường gặp

### Lỗi: "java: command not found"
→ Chưa cấu hình biến môi trường `JAVA_HOME` và `PATH`

### Lỗi: "Could not find or load main class"
→ Kiểm tra tên class và file phải khớp nhau

### Lỗi: Extension Java không hoạt động
→ Reload VSCode hoặc cài lại Extension Pack

## Kết luận

Bạn đã hoàn thành việc cài đặt môi trường Java với VSCode! Giờ bạn có thể:
- ✅ Viết và chạy chương trình Java
- ✅ Sử dụng IntelliSense và autocomplete
- ✅ Debug code hiệu quả
- ✅ Quản lý project chuyên nghiệp

Trong bài tiếp theo, tôi sẽ đi sâu vào **Lập trình hướng đối tượng trong Java** với các ví dụ cụ thể.

---

*Bạn gặp khó khăn gì trong quá trình cài đặt? Hãy comment bên dưới để tôi hỗ trợ nhé!* 🚀
