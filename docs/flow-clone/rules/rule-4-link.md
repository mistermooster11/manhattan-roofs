# Rule #4 — `<Link>` vs `<a>`: Quyết Định Đúng Từng Trường Hợp

> **Nguyên tắc:** `<Link>` của Next.js chỉ dùng cho **điều hướng nội bộ** (trong app). Mọi URL bên ngoài dùng thẻ `<a>` thông thường.

---

## Bảng quyết định

| Loại href | Dùng gì | Ví dụ |
|---|---|---|
| Route nội bộ (`/`, `/about`, `/blog/slug`) | ✅ `<Link href=...>` | `<Link href="/about">` |
| URL ngoài (`https://`, `http://`) | ✅ `<a href="..." target="_blank" rel="noopener noreferrer">` | `<a href="https://example.com">` |
| Anchor cùng trang (`#section-id`) | ✅ `<a href="#...">` | `<a href="#hero">` |
| Email (`mailto:`) | ✅ `<a href="mailto:...">` | `<a href="mailto:info@example.com">` |
| Điện thoại (`tel:`) | ✅ `<a href="tel:...">` | `<a href="tel:+18005551234">` |
| Fake link JS (button giả) | ✅ `<button>` | `<button onClick={handleClick}>` |

---

## Cú pháp đúng

```tsx
import Link from "next/link";

// ✅ Điều hướng nội bộ — LUÔN dùng <Link>
<Link href="/about">About</Link>
<Link href="/services/electrical">Electrical Services</Link>

// ✅ Mở tab mới — LUÔN có rel="noopener noreferrer"
<a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
  Visit Site
</a>

// ✅ Anchor scroll cùng trang
<a href="#contact-section">Jump to Contact</a>

// ✅ Mailto / Tel
<a href="mailto:info@csielectric.com">info@csielectric.com</a>
<a href="tel:+15625551234">(562) 555-1234</a>

// ✅ Button giả — dùng <button>, không dùng <a href="#">
<button type="button" onClick={handleToggle} className="cursor-pointer">
  Toggle Menu
</button>
```

---

## Props của `<Link>` cần biết

| Prop | Mặc định | Khi dùng |
|---|---|---|
| `href` | — | **Bắt buộc** — chỉ path nội bộ |
| `prefetch` | `true` (production) | Tắt: `prefetch={false}` cho trang ít dùng |
| `replace` | `false` | `true` → thay history thay vì push |
| `scroll` | `true` | `false` → không scroll lên đầu sau navigate |

---

## Anti-patterns — KHÔNG làm thế này

```tsx
// ❌ SAI: Dùng <Link> cho URL ngoài
<Link href="https://www.google.com">Google</Link>
// → Next.js không kiểm soát URL ngoài, prefetch sai

// ❌ SAI: Dùng <a> cho route nội bộ
<a href="/about">About</a>
// → Mất client-side navigation, tốc độ chậm, mất prefetch

// ❌ SAI: Dùng href="#" cho button giả
<a href="#" onClick={handleClick}>Click me</a>
// → Scroll lên đầu trang, không semantic

// ❌ SAI: Thiếu rel trên target="_blank"
<a href="https://..." target="_blank">Link</a>
// → Lỗ hổng bảo mật (tabnabbing attack)
```

---

## Rule nhớ nhanh

```
/path/nội-bộ              →  <Link href="/path">
https://external.com      →  <a href="..." target="_blank" rel="noopener noreferrer">
#section-anchor           →  <a href="#section">
mailto: / tel:            →  <a href="mailto:..." /> / <a href="tel:..." />
button giả (no navigate)  →  <button onClick={...}>
```
