# Step 2 — Khởi Tạo Dự Án Next.js

> **Mục tiêu:** Tạo project Next.js với cấu trúc chuẩn, cấu hình AGENTS.md, next.config.ts, và ghi toàn bộ color tokens vào `globals.css` **trước khi viết bất kỳ component nào**.

---

## 2.1 — Tạo project

```bash
npx create-next-app@latest <project-name>
# Chọn: TypeScript ✅ | Tailwind CSS ✅ | App Router ✅ | src/: No
```

---

## 2.2 — Tạo AGENTS.md (theo chuẩn Next.js docs)

Tạo file `AGENTS.md` tại root của Next.js project:

```md
<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
```

> GitHub Copilot, Claude Code, Cursor đều tự động đọc file này khi bắt đầu session.

---

## 2.3 — Cấu hình next.config.ts

```ts
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.prod.website-files.com" },
      // Thêm domain khác khi cần
    ],
  },
};
export default nextConfig;
```

---

## 2.4 — Cấu trúc thư mục chuẩn

```
<project-name>/
├── app/
│   ├── layout.tsx          ← global fonts, Header, Footer, metadata
│   ├── page.tsx            ← mount tất cả section components
│   └── globals.css         ← ⭐ CSS variables của toàn bộ theme
├── components/
│   └── custom/             ← tất cả converted sections đặt ở đây
│       ├── header/         ← mỗi section lớn có folder riêng
│       ├── hero/
│       └── footer/
├── styles/
│   ├── pages/              ← CSS Modules cho từng page
│   └── components/         ← CSS Modules cho component
├── public/
├── AGENTS.md
└── next.config.ts
```

---

## 2.5 — Ghi color tokens vào globals.css (BẮT BUỘC TRƯỚC KHI VIẾT COMPONENT)

Sau khi đã trích xuất màu ở Step 1.4, ghi tất cả vào `app/globals.css` theo cấu trúc **2 tầng**:

> **Quan trọng:** Phải khai báo màu ở **cả 2 nơi**:
> - `@theme inline { ... }` → để Tailwind sinh ra utility classes (`bg-brand-primary`, `text-white-pure`...)
> - `:root { ... }` → để dùng được `var(--color-*)` trong CSS Modules và `style={{}}`

```css
/* app/globals.css */
@import "tailwindcss";

@theme inline {
  /* ── Đăng ký màu vào Tailwind v4 ──────────────────────────────────────
     Sau khi khai báo ở đây, dùng được:
       bg-brand-primary   → background-color: var(--color-brand-primary)
       text-white-pure    → color: var(--color-white-pure)
     Tên utility = phần sau "--color-", dấu "--" thành "-"
  ─────────────────────────────────────────────────────────────────────── */

  /* BACKGROUND */
  --color-bg-dark:        #0d0d0f;
  --color-bg-card:        #1a1a1a;
  --color-bg-card-outer:  #242424;
  --color-bg-light:       #fef9f0;

  /* TEXT */
  --color-text-primary:   #ffffff;
  --color-text-body:      #cccccc;
  --color-text-muted:     #999999;
  --color-text-dark:      #0d0d0f;

  /* BRAND */
  --color-brand-primary:  #4242d7;
  --color-brand-accent:   #6b6be0;
  --color-brand-light:    #9696e9;
  --color-brand-lighter:  #c0c0f2;

  /* BORDER */
  --color-border:         #333333;
  --color-border-light:   #e5e5e5;

  /* OVERLAY */
  --color-overlay:        rgba(0, 0, 0, 0.8);
}

:root {
  --color-bg-dark:        #0d0d0f;
  --color-bg-card:        #1a1a1a;
  --color-bg-card-outer:  #242424;
  --color-bg-light:       #fef9f0;
  --color-text-primary:   #ffffff;
  --color-text-body:      #cccccc;
  --color-text-muted:     #999999;
  --color-text-dark:      #0d0d0f;
  --color-brand-primary:  #4242d7;
  --color-brand-accent:   #6b6be0;
  --color-brand-light:    #9696e9;
  --color-brand-lighter:  #c0c0f2;
  --color-border:         #333333;
  --color-border-light:   #e5e5e5;
  --color-overlay:        rgba(0, 0, 0, 0.8);
}
```

### Quy tắc đặt tên biến:
- ✅ Dùng nhóm ngữ nghĩa: `--color-<nhóm>-<variant>`
- ✅ `--color-brand-primary`, `--color-text-muted`
- ❌ Không đặt tên theo giá trị hex: `--color-4242d7`
- ❌ Không đặt tên quá chung chung: `--color-1`

### Lưu ý Tailwind v4:
> Phải dùng `@theme inline` (không phải `@theme`) — từ khóa `inline` cho phép CSS vars từ `:root` được kế thừa, Tailwind mới sinh ra được utility classes.
