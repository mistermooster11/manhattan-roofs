# Rule #6 — Fonts & CSS Variables: Không Hard-code Màu / Font

---

## Phần A — CSS Variables: Không Bao Giờ Hard-code Màu

> **Quy tắc tuyệt đối:** Tất cả màu sắc PHẢI lấy từ CSS variables đã định nghĩa trong `globals.css`. Không bao giờ viết giá trị hex trực tiếp trong component.

### Thứ tự ưu tiên sử dụng màu

| Ưu tiên | Cách dùng | Ví dụ |
|---|---|---|
| ✅ #1 (tốt nhất) | Tailwind class từ `@theme` | `className="bg-brand-primary text-white"` |
| ✅ #2 (chấp nhận) | `style={{}}` với `var(--token)` | `style={{ background: "var(--color-brand-primary)" }}` |
| ❌ (cấm tuyệt đối) | Hard-code hex | `style={{ background: "#4242d7" }}` |

### So sánh đúng / sai

```tsx
// ❌ TUYỆT ĐỐI KHÔNG: hex hard-code
<section style={{ backgroundColor: "#0d0d0f" }}>
<span style={{ color: "#ff6d00" }}>

// ✅ TỐT NHẤT: Tailwind class (nếu đã đăng ký trong @theme)
<section className="bg-bg-dark">
<span className="text-csi-accent">

// ✅ Chấp nhận khi Tailwind không đủ (dynamic, clamp...)
<section style={{ backgroundColor: "var(--color-bg-dark)" }}>
```

### Khi gặp màu mới chưa có trong globals.css

1. Thêm vào `@theme inline { ... }` trong `globals.css` (để Tailwind sinh class)
2. Thêm vào `:root { ... }` (để dùng `var()`)
3. Đặt tên ngữ nghĩa: `--color-<nhóm>-<variant>`
4. Dùng Tailwind class trong component

```css
/* globals.css */
@theme inline {
  --color-new-token: #abcdef;   /* → sinh ra: bg-new-token, text-new-token */
}
:root {
  --color-new-token: #abcdef;
}
```

> **Lý do:** Khi design thay màu, chỉ sửa 1 chỗ trong `globals.css` thay vì tìm-thay trong 10+ component files.

---

## Phần B — Fonts: Không Hard-code Font-family

### Trường hợp 1: Google Fonts → next/font/google

```tsx
// app/layout.tsx
import { Inter, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
```

### Trường hợp 2: Adobe Typekit / custom kit → load script trong useEffect

```tsx
// components/AdobeFontsLoader.tsx
"use client";
import { useEffect } from "react";

export default function AdobeFontsLoader() {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://use.typekit.net/<kit-id>.js";
    s.onload = () => (window as any).Typekit?.load({ async: true });
    document.head.appendChild(s);
  }, []);
  return null;
}
```

```tsx
// app/layout.tsx
import AdobeFontsLoader from "@/components/AdobeFontsLoader";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AdobeFontsLoader />
        {children}
      </body>
    </html>
  );
}
```

### Trường hợp 3: Font đã có trong CSS gốc → dùng CSS variable

Khai báo font-family một lần trong `globals.css`:

```css
:root {
  --font-primary:   system-ui, -apple-system, sans-serif;
  --font-secondary: "trade-gothic-next-compressed", "Arial Narrow", sans-serif;
  --font-tertiary:  "trade-gothic-next", "Arial", sans-serif;
}
```

Dùng trong component (chỉ khi Tailwind không đủ):

```tsx
// ✅ Font-family dài → dùng style{{}} là ngoại lệ hợp lệ (theo Rule #3)
<h1 style={{ fontFamily: "var(--font-secondary)" }}>Heading</h1>
```

---

## Fonts thường gặp trong project CSI Electric

| Biến | Font | Dùng cho |
|---|---|---|
| `var(--font-primary)` | system fallback | Body text |
| `var(--font-secondary)` | `trade-gothic-next-compressed` | Headings lớn, badges |
| `var(--font-tertiary)` | `trade-gothic-next` | Sub-headings, navigation |
