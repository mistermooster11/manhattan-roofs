# Rule #2 — `<Image>` vs `<img>`: Quyết Định Đúng Từng Trường Hợp

> **Nguyên tắc:** `<Image>` của Next.js tự động optimize (resize, WebP, lazy load) — nhưng đòi hỏi cấu hình. Dùng đúng chỗ, không dùng bừa.

---

## Bảng quyết định

| Trường hợp | Dùng gì | Lý do |
|---|---|---|
| Ảnh trong `/public` (local) | ✅ `<Image>` | Next.js optimize hoàn toàn |
| Ảnh từ domain đã whitelist trong `next.config.ts` | ✅ `<Image>` | Optimize + lazy load tự động |
| Ảnh từ CDN ngoài **chưa** whitelist | ⚠️ `<img>` thường | Tránh lỗi `Invalid src prop` |
| Icon SVG inline | ❌ Không dùng `<Image>` | Dùng `<svg>` trực tiếp hoặc component icon |
| Background image qua CSS | ❌ Không dùng `<Image>` | Dùng `bg-[url('/img.jpg')]` hoặc `style={{ backgroundImage }}` |
| Ảnh cần `fill` layout (cover toàn parent) | ✅ `<Image fill>` + parent `relative` | Thay thế `background-image: cover` |

---

## Cú pháp đúng

```tsx
import Image from "next/image";

// ✅ Ảnh local từ /public — luôn dùng <Image>
<Image src="/logos/logo-large.svg" alt="Logo" width={200} height={80} />

// ✅ Ảnh fill (cover toàn container)
<div className="relative w-full h-[400px]">
  <Image src="/hero-bg.jpg" alt="" fill className="object-cover" />
</div>

// ✅ Ảnh CDN đã whitelist trong next.config.ts
<Image src="https://cdn.example.com/photo.png" alt="..." width={400} height={300} />

// ✅ Ảnh hero/above-fold → thêm priority để không bị lazy
<Image src="/hero.jpg" alt="Hero" width={1920} height={1080} priority />

// ⚠️ Ảnh CDN ngoài chưa whitelist → dùng <img> thường
<img src="https://cdn.external.com/photo.jpg" alt="..." loading="lazy" />
```

---

## Whitelist domain trong next.config.ts

```ts
// next.config.ts
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.example.com" },
      { protocol: "https", hostname: "www.example.com" },
      // Thêm domain khi gặp lỗi "Invalid src prop"
    ],
  },
};
```

---

## Anti-patterns — KHÔNG làm thế này

```tsx
// ❌ SAI: Dùng <img> cho ảnh local trong /public
<img src="/logos/logo.svg" alt="..." />
// → thiếu optimization, không có lazy load

// ❌ SAI: Dùng <Image> không có width/height và không có fill
<Image src="/photo.jpg" alt="..." />
// → lỗi: missing required props

// ❌ SAI: Dùng <Image> cho external URL chưa whitelist
<Image src="https://unknown-cdn.com/img.jpg" alt="..." width={200} height={100} />
// → lỗi: "Invalid src prop, hostname not configured in next.config"
```

---

## Rule nhớ nhanh

```
/public hoặc domain đã config  →  <Image>
CDN ngoài chưa config          →  <img loading="lazy">
Background image CSS           →  style={{ backgroundImage: "url(...)" }}
SVG icon                       →  <svg> trực tiếp
```
