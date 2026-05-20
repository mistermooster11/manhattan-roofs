# Checklist trước khi Push / Deploy

## 1. Các thư mục/file KHÔNG được đẩy lên Git

| Đường dẫn | Lý do | Trạng thái `.gitignore` |
|---|---|---|
| `/downloaded/` | HTML/CSS/JS tải về từ site gốc, rất nặng (hàng trăm MB) | ✅ Đã ignore |
| `/docs/` | Tài liệu nội bộ, không cần thiết cho production | ✅ Đã ignore |
| `/.next/` | Build output của Next.js, tự sinh khi build | ✅ Đã ignore |
| `/node_modules/` | Dependencies, cài lại bằng `pnpm install` | ✅ Đã ignore |
| `.env*` | Biến môi trường, chứa secret keys | ✅ Đã ignore |

---

## 2. Kiểm tra `.gitignore` còn đủ không

Mở file `.gitignore` ở root, đảm bảo có các dòng:

```gitignore
/downloaded
/docs
/.next/
/node_modules
.env*
```

Nếu thiếu dòng nào, thêm vào rồi commit `.gitignore` trước.

---

## 3. Kiểm tra file nặng lọt vào staging

Trước khi `git add .`, chạy lệnh này để phát hiện file > 1MB:

```bash
git status --short | awk '{print $2}' | xargs -I{} du -sh {} 2>/dev/null | sort -rh | head -20
```

Hoặc kiểm tra nhanh bằng:

```bash
find . -not -path './.git/*' -not -path './node_modules/*' -not -path './downloaded/*' -size +1M
```

Nếu có kết quả xuất hiện → **KHÔNG push** cho đến khi thêm vào `.gitignore` và untrack:

```bash
git rm -r --cached <đường-dẫn>
echo "<đường-dẫn>" >> .gitignore
git add .gitignore
git commit -m "chore: untrack <tên-thư-mục>"
```

---

## 4. Quy trình push chuẩn

```bash
# Bước 1: Kiểm tra file sẽ được commit
git status

# Bước 2: Kiểm tra không có file nặng
find . -not -path './.git/*' -not -path './node_modules/*' -not -path './downloaded/*' -not -path './.next/*' -size +500k 2>/dev/null

# Bước 3: Build thử để đảm bảo không lỗi
pnpm build

# Bước 4: Stage và commit
git add .
git commit -m "feat: <mô tả thay đổi>"

# Bước 5: Push
git push origin main
```

---

## 5. Deploy lên Vercel

Vercel tự động deploy khi push lên `main`. Sau khi push:

1. Truy cập [vercel.com/dashboard](https://vercel.com/dashboard)
2. Kiểm tra build log — đảm bảo không có lỗi
3. Truy cập URL preview để verify

**Biến môi trường trên Vercel** (nếu dùng):  
Vào **Settings → Environment Variables** để thêm, KHÔNG commit vào repo.

---

## 6. Cấu trúc `.gitignore` hiện tại (tham khảo)

```gitignore
# dependencies
/node_modules

# next.js build
/.next/
/out/
/build

# downloaded source files (rất nặng)
/downloaded

# internal docs
/docs

# env
.env*

# misc
.DS_Store
*.pem
*.tsbuildinfo
next-env.d.ts
```
