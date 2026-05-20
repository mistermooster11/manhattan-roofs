# Step 4 — Checklist Hoàn Thành Toàn Dự Án

> Chạy checklist này **sau khi tất cả sections đã được convert** và trước khi deploy.

---

## Code Quality

- [ ] Tất cả components có `"use client"` nếu cần (xem `rules/rule-1-use-client.md`)
- [ ] `get_errors` toàn project: **0 errors**
- [ ] `npx tsc --noEmit`: output sạch, không có `error TS...`
- [ ] Tất cả sections mount vào `page.tsx` đúng thứ tự xuất hiện trên trang gốc
- [ ] **KHÔNG có màu hex hard-code** trong bất kỳ component nào
- [ ] `globals.css` có đầy đủ color tokens cho toàn bộ theme

## Visual Fidelity

- [ ] Màu sắc khớp với CSS gốc (không tự suy đoán — kiểm tra `downloaded/`)
- [ ] Typography: font-family, size, weight, line-height đúng
- [ ] Spacing/padding xấp xỉ bản gốc
- [ ] Responsive đúng tại mọi breakpoint gốc
- [ ] Images load đúng, không broken link

## Interactivity

- [ ] Animations hoạt động (marquee, AOS fade-up, countup, typed text...)
- [ ] Click handlers, toggles, accordion hoạt động
- [ ] Forms có `e.preventDefault()`, không submit ra ngoài
- [ ] Keyboard navigation: ESC đóng modal, arrow keys cho slider/gallery
- [ ] Focus-visible styles hiển thị đúng khi Tab qua

## Performance & SEO

- [ ] Mỗi page có `export const metadata` với title + description
- [ ] Ảnh hero/above-fold có `priority` prop trên `<Image>`
- [ ] Không có `console.error` hay `console.warn` trong dev tools
- [ ] `npm run build` thành công, không có warning

## Deploy

- [ ] `.gitignore` đã bao gồm `/downloaded` (tránh push file gốc lên git)
- [ ] Các domain ảnh đã được whitelist trong `next.config.ts`
- [ ] Biến môi trường `.env.local` không bị commit
- [ ] Xem thêm `check-before-deploying.md` cho full deploy checklist
