# Hướng dẫn cài đặt Hugo trên Windows

## Cách 1: Chocolatey (Khuyến nghị)

1. Mở PowerShell với quyền Administrator
2. Chạy lệnh:
```powershell
choco install hugo-extended -y
```

## Cách 2: Scoop

1. Mở PowerShell
2. Chạy lệnh:
```powershell
scoop install hugo-extended
```

## Cách 3: Tải trực tiếp

1. Truy cập: https://github.com/gohugoio/hugo/releases
2. Tải file `hugo_extended_0.121.0_windows-amd64.zip`
3. Giải nén vào thư mục (ví dụ: `C:\Hugo\bin`)
4. Thêm đường dẫn vào biến môi trường PATH:
   - Mở Settings → System → About → Advanced system settings
   - Environment Variables → Path → Edit
   - Thêm `C:\Hugo\bin`

## Kiểm tra cài đặt

```powershell
hugo version
```

Kết quả mong đợi:
```
hugo v0.121.0-XXXXXXXX windows/amd64 BuildDate=...
```

## Chạy blog

```powershell
cd "blog cá nhân"
hugo server -D
```

Truy cập: http://localhost:1313/
