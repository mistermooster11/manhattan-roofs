# Step 1 — Download & Chuẩn Bị Source

> **Mục tiêu:** Tải toàn bộ website gốc về máy, thu thập HTML/CSS/JS đầy đủ, lập bản đồ sections và trích xuất color tokens trước khi viết bất kỳ dòng code Next.js nào.

---

## 1.1 — Download toàn bộ website bằng wget

```bash
"/c/Program Files/wget/wget.exe" \
  --mirror \
  --convert-links \
  --adjust-extension \
  --page-requisites \
  --no-parent \
  -P "d:/code/clone-UI/<project-name>/downloaded" \
  https://<target-url>/ 2>&1 | tail -30
```

Kết quả tạo ra cây thư mục:
```
downloaded/
└── www.<domain>.com/
    ├── index.html
    ├── css/   └── *.css
    ├── js/    └── *.js
    └── images/
```

---

## 1.2 — Kiểm tra và thu thập CSS/JS

1. **Kiểm tra file CSS riêng** → xem trong `downloaded/<domain>/css/`
2. **Nếu không có CSS riêng** → kiểm tra `<style>` inline trong HTML
3. **Nếu CSS/JS load từ CDN ngoài** → dùng `wget` tải về thủ công từng file
4. **Xác định CSS file chính** bằng grep class đặc trưng của trang:

```bash
grep -rl "tên-class-đặc-trưng" downloaded/<domain>/css/
```

---

## 1.3 — Lập bản đồ sections

Đọc `index.html`, xác định danh sách sections theo thứ tự, ghi lại:
- Tên section, line number bắt đầu/kết thúc
- Background color đặc trưng
- Có interactive (JS event, animation) không

```
# Ví dụ bản đồ:
1. Header        (line 10-85)    bg: #0d0d0f   interactive: mobile menu
2. Hero          (line 86-200)   bg: #0d0d0f   interactive: font load
3. VideoLibrary  (line 200-600)  bg: white     interactive: lightbox, filter
4. Footer        (line 3090+)    bg: #1a1a1a   interactive: form
```

---

## 1.4 — Trích xuất color tokens từ CSS gốc (BẮT BUỘC)

> **Quy tắc vàng:** KHÔNG BAO GIỜ hard-code màu hex trong component. Phải đọc CSS gốc, tìm tất cả biến màu, rồi đặt vào `globals.css` **trước** khi viết component đầu tiên.

### A. Tìm CSS custom properties (`:root` variables):

```python
import re
css = open('downloaded/<domain>/css/<file>.css', encoding='utf-8').read()
root_blocks = re.findall(r':root\s*\{([^}]+)\}', css)
for block in root_blocks:
    vars = re.findall(r'--[\w-]+\s*:\s*[^;]+;', block)
    for v in vars: print(v.strip())
```

### B. Tìm màu hex/rgb được dùng nhiều nhất (nếu không có `:root` vars):

```python
import re
from collections import Counter
css = open('downloaded/<domain>/css/<file>.css', encoding='utf-8').read()
colors = re.findall(r'#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b', css)
for color, count in Counter(colors).most_common(20):
    print(f"{color}  ({count} lần)")
```

### C. Tìm màu trong inline style của HTML:

```bash
grep -oE 'background(-color)?\s*:\s*#[0-9a-fA-F]{3,6}|color\s*:\s*#[0-9a-fA-F]{3,6}' \
  downloaded/<domain>/index.html | sort | uniq -c | sort -rn | head -20
```

### D. Phân nhóm màu tìm được:

Sau khi có danh sách màu, phân loại thành các nhóm ngữ nghĩa:

| Nhóm | Ví dụ tên biến |
|---|---|
| Nền sections | `--color-bg-dark`, `--color-bg-card` |
| Màu chữ | `--color-text-primary`, `--color-text-muted` |
| Thương hiệu | `--color-brand-primary`, `--color-brand-accent` |
| Viền / divider | `--color-border`, `--color-border-light` |
| Overlay / backdrop | `--color-overlay` |

> Kết quả bước này → đưa thẳng vào `globals.css` ở **Step 2.5**.
