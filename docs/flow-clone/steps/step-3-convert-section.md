# Step 3 — Convert Từng Section

> **Mục tiêu:** Quy trình chuẩn lặp lại cho mỗi section: rà soát component cùng loại đã làm → thu thập context → viết component → kiểm tra lỗi → mount vào page.tsx.

---

## 3.0 — Rà soát component đã triển khai (LÀM TRƯỚC KHI VIẾT)

> **Lý do:** Nếu dự án đã có các section/component được convert trước đó (homepage, about...), hãy học lại cách triển khai của chúng trước — tránh viết lại từ đầu những pattern đã giải quyết rồi.

### A. Xác định component tương tự đã tồn tại

Trước khi bắt đầu convert, hỏi: "Section này có cùng dạng với section nào đã làm chưa?"

| Section cần convert | Tìm component tương tự trong |
|---|---|
| Hero với background image | `components/custom/*/Hero*.tsx` |
| Grid cards với hover effect | `components/custom/*/Grid*.tsx`, `*Card*.tsx` |
| Section có background + overlay | Bất kỳ section nào dùng `::before` overlay |
| Form với floating label | `components/custom/contact/ContactContent.tsx` |
| Accordion / expand-collapse | `components/custom/careers/CareersContent.tsx` |
| Section với AOS animation | Bất kỳ component nào có `data-aos` attributes |
| Counter / số đếm tăng dần | `components/custom/home/` |
| Navigation sub-page | `components/custom/*/SubNav*.tsx` |

```bash
# Tìm nhanh các component đã có
find components/custom -name "*.tsx" | sort

# Tìm component nào đang dùng pattern cụ thể
grep -rl "data-aos" components/custom/
grep -rl "::before" styles/
grep -rl "memberLink\|cardLink\|itemLink" styles/
grep -rl "position: absolute" styles/
```

### B. Đọc component tương tự đã làm

Với mỗi component tìm được, đọc cả 2 file:

1. **File TSX** — xem cấu trúc JSX, nesting, className pattern
2. **File CSS Module** — xem cách viết hover chain, pseudo-element, transition

```
read_file components/custom/<tên-section>/<Component>.tsx
read_file styles/pages/<tên>.module.css   (hoặc styles/components/)
```

### C. Rút ra pattern để áp dụng lại

Sau khi đọc, ghi nhớ và tái sử dụng:

| Pattern | Cách học lại từ codebase |
|---|---|
| **Hover chain** | Tìm `.xxxLink:hover .xxxHeading` trong CSS → copy cấu trúc `<a className={styles.xxxLink}>` wrapper |
| **Overlay (`::before`)** | Tìm `.section { position: relative }` + `.section::before { position: absolute; z-index }` → áp dụng z-index stack tương tự |
| **Floating label form** | Đọc `ContactContent.tsx` → copy `FloatField` / `FloatTextarea` component pattern |
| **AOS fade-up** | Tìm `data-aos="fade-up"` trong bất kỳ component nào → copy attributes, kiểm tra `AosInit` đã có trong layout chưa |
| **CSS Modules responsive** | Tìm `@media` blocks trong `.module.css` → học breakpoint values đang dùng |
| **Transition timing** | Grep `transition:` trong CSS → học duration/easing đang dùng (0.2s, 0.3s ease...) |

> **Mục tiêu:** Đảm bảo toàn bự codebase **nhất quán** — cùng một loại hiệu ứng thì triển khai cùng một cách, không mỗi section mỗi kiểu.

---

## 3.1 — Thu thập context TRƯỚC khi viết (KHÔNG BỎ QUA)

Trước khi viết bất kỳ dòng code nào, phải đọc đủ 3 nguồn:

### A. Đọc HTML block của section:

```
read_file downloaded/<domain>/index.html  [line_start → line_end]
```

Xác định:
- Cấu trúc DOM, class names, nesting depth
- Text content, image URLs
- Data attributes dùng cho JS (ví dụ: `data-aos`, `data-target`, `data-count`)
- Inline `style=""` trực tiếp trên element

### B. Extract CSS rules liên quan (dùng Python):

```python
import re
css = open('downloaded/<domain>/css/<file>.css', encoding='utf-8').read()
rules = re.findall(r'[^{}]+\{[^{}]+\}', css)
keywords = ['<class-1>', '<class-2>']   # class names lấy từ HTML
targets = [r.strip() for r in rules if any(k in r for k in keywords)]
for t in targets:
    print(t[:500])
    print('---')
```

### C. Đọc JS nếu có animation/interaction:

```
read_file downloaded/<domain>/js/<file>.js
```

---

## 3.2 — Template chuẩn cho component

```tsx
// components/custom/<SectionName>/<SectionName>.tsx

"use client"; // ← xem Rule #1 để biết khi nào cần

import { useState, useEffect, useRef } from "react";
import Image from "next/image";   // chỉ dùng cho ảnh local/cần optimization
import Link from "next/link";     // chỉ dùng cho link nội bộ

export default function <SectionName>() {
  return (
    <section>
      {/* ... */}
    </section>
  );
}
```

---

## 3.3 — Rules bắt buộc khi viết code

Trước khi viết, đọc các file rules sau:

| Rule | File | Nội dung |
|---|---|---|
| #1 `"use client"` | `rules/rule-1-use-client.md` | Khi nào thêm directive này |
| #2 `<Image>` vs `<img>` | `rules/rule-2-image.md` | Bảng quyết định dùng loại nào |
| #3 Tailwind v4 | `rules/rule-3-tailwind.md` | Ưu tiên class, cấm `style={{}}` |
| #4 `<Link>` vs `<a>` | `rules/rule-4-link.md` | Link nội bộ vs ngoài |
| #5 Component architecture | `rules/rule-5-component-architecture.md` | Parent gọn, con độc lập |
| #6 Fonts & Colors | `rules/rule-6-fonts-colors.md` | Không hard-code màu/font |

---

## 3.4 — Vòng lặp kiểm tra lỗi (BẮT BUỘC sau mỗi component)

**KHÔNG kết thúc cho đến khi tất cả 4 bước đều pass:**

### ✅ Bước A — get_errors

Chạy `get_errors` trên file vừa tạo → fix tất cả lỗi → chạy lại cho đến khi "No errors found".

### ✅ Bước B — TypeScript check

```bash
npx tsc --noEmit 2>&1 | head -40
```

Nếu có `error TS...` → xác định `file:line` → fix → chạy lại cho đến khi output sạch.

### ✅ Bước C — Dev server log

Gọi `get_terminal_output` để đọc log terminal `npm run dev`. Nếu thấy:

| Thông báo lỗi | Nguyên nhân | Fix |
|---|---|---|
| `Event handlers cannot be passed` | Thiếu `"use client"` | Thêm `"use client"` dòng đầu file |
| `Invalid src prop` | Domain chưa whitelist | Dùng `<img>` hoặc whitelist domain |
| `Hydration error` | Server/client HTML khác | Wrap dynamic logic trong `useEffect` |

### ✅ Bước D — Mount vào page.tsx

```tsx
// app/page.tsx
import <SectionName> from "@/components/custom/<SectionName>/<SectionName>";

export default function Home() {
  return (
    <main>
      {/* ... sections đã xong ... */}
      <SectionName />
    </main>
  );
}
```

Chạy `get_errors(app/page.tsx)` → phải 0 errors.

---

## 3.5 — Prompt template chuẩn để giao việc cho AI

```
Dựa vào file html, css, js tại downloaded\<domain>, hãy tiến hành convert section
[TÊN SECTION] sang component Next.js tại components/custom/[TênComponent]/[TênComponent].tsx

Yêu cầu thu thập context trước khi convert:
1. Đọc downloaded\<domain>\index.html — xác định đúng HTML block của [TÊN SECTION]
2. Đọc file CSS chính — tìm tất cả CSS rules áp dụng cho các class trong block đó
3. Nếu có animation/interaction, đọc thêm JS liên quan

Yêu cầu khi convert:
- Xem docs/flow-clone/rules/ để áp dụng đúng tất cả rules
- "use client" nếu có state, event handler, hoặc animation
- next/image cho ảnh local/whitelisted, <img> thường cho CDN ngoài
- next/link cho link nội bộ, <a> cho URL ngoài
- Toàn bộ styling dùng Tailwind CSS v4 — KHÔNG dùng inline style={{}} trừ ngoại lệ
- Màu sắc lấy từ globals.css (var(--color-*) hoặc Tailwind class), không hard-code hex

Sau khi viết xong, thực hiện tuần tự:
  Bước A: get_errors trên file vừa tạo → fix cho đến 0 errors
  Bước B: npx tsc --noEmit 2>&1 | head -40 → fix cho đến output sạch
  Bước C: get_terminal_output nếu dev server đang chạy → fix bất kỳ lỗi nào
  Bước D: Import và mount vào app/page.tsx → get_errors(page.tsx) phải 0 errors
```

**Thay `[TÊN SECTION]` bằng section thực tế:**

| Section | Tên component |
|---|---|
| Hero / Banner đầu trang | `Hero` → `Hero.tsx` |
| Giới thiệu dịch vụ | `Services` → `Services.tsx` |
| Testimonials / Reviews | `Testimonials` → `Testimonials.tsx` |
| Pricing | `Pricing` → `Pricing.tsx` |
| Footer | `Footer` → `Footer.tsx` |
| FAQ / Accordion | `FAQ` → `FAQ.tsx` |

---

## 3.6 — Checklist hoàn thành từng section

- [ ] HTML structure đúng với original (nesting, class names)
- [ ] CSS: tất cả rules đã được replicate (hover, transitions, responsive)
- [ ] Animations hoạt động (AOS data attributes, countup, typed)
- [ ] Images load đúng, không broken
- [ ] Responsive đúng tại 375px, 768px, 1024px, 1440px
- [ ] Không có màu hex hard-code
- [ ] 0 TypeScript errors
- [ ] Đã mount vào page.tsx
