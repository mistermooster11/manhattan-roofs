# Reference — Lỗi Thường Gặp & Cách Fix Nhanh

---

## Bảng lỗi nhanh

| Lỗi | Nguyên nhân | Fix |
|---|---|---|
| `Event handlers cannot be passed to Client Component props` | Thiếu `"use client"` | Thêm `"use client"` dòng đầu file |
| `Invalid src prop on <Image>` | Domain chưa whitelist | Dùng `<img>` thường hoặc thêm domain vào `next.config.ts` |
| `Hydration failed` | Server/client HTML khác nhau | Wrap dynamic logic trong `useEffect` |
| `flex-shrink-0` lint error | Tailwind v4 rename | Dùng `shrink-0` |
| `z-[99999]` lint error | Tailwind v4 shorthand required | Dùng `z-99999` |
| `max-w-[500px]` lint error | Tailwind v4 shorthand required | Dùng `max-w-125` |
| `h-[400px]` lint error | Tailwind v4 shorthand required | Dùng `h-100` |
| `py-[9px]` lint error | Tailwind v4 shorthand required | Dùng `py-2.25` |
| `pt-[4.5rem]` lint error | Tailwind v4 shorthand required | Dùng `pt-18` |
| Font không render | Typekit chưa load | Load script trong `useEffect` |
| `Module not found '@/components/...'` | Sai path hoặc tên file | Kiểm tra tên file chính xác (case-sensitive) |
| Màu sắc sai so với bản gốc | Hard-code hex thay vì dùng biến | Extract màu từ CSS gốc → vào `globals.css` → dùng Tailwind class |
| Tailwind class không sinh ra | Dùng `@theme` thay vì `@theme inline` | Sửa thành `@theme inline` trong `globals.css` |
| CSS Modules: bare selector `address {}` | CSS Modules không cho phép bare element selector | Scope dưới local class: `.wrapper address {}` |
| Hover chain `.link:hover .badge` không hoạt động | JSX không có element với class `.link` làm wrapper | Thêm `<a className={styles.link}>` bao quanh content |
| `::before` overlay không hiện | Parent không có `position: relative` | Thêm `position: relative` vào element cha |
| z-index không hoạt động | Element không được positioned | Thêm `position: relative/absolute/fixed` cùng với `z-index` |
| Component dùng toàn `style={{}}` | Agent chọn đường tiện thay vì đúng | Refactor: layout/spacing → Tailwind; giữ `style` cho `clamp()`, font-family, dynamic JS |

---

## Lỗi CSS Modules hay gặp

### 1. Bare element selector bị reject

```css
/* ❌ WRONG — CSS Modules lỗi */
address { font-style: normal; }

/* ✅ CORRECT — scope dưới local class */
.locationsList address { font-style: normal; }
```

### 2. Hover chain cần wrapper đúng

```css
/* CSS có rule này */
.memberLink:hover .memberHeading { width: calc(85% + 20px); }
```

```tsx
// ❌ SAI — không có .memberLink wrapper → hover không trigger
<div className={styles.member}>
  <h2 className={styles.memberHeading}>Name</h2>
</div>

// ✅ ĐÚNG — <a> với .memberLink là trigger
<a className={styles.memberLink} href="/staff/slug">
  <h2 className={styles.memberHeading}>Name</h2>
</a>
```

### 3. Pseudo-element cần `position: relative` ở parent

```css
/* ✅ Parent phải có position */
.section {
  position: relative;   /* BẮT BUỘC */
}
.section::before {
  content: '';
  position: absolute;
  z-index: 1;
  /* ... */
}
```

### 4. Z-index stack — khai báo đủ tất cả layers

```css
/* Nếu có 3 lớp chồng nhau, khai báo cả 3 */
.backgroundIframe  { position: absolute; z-index: 0; }
.section::before   { position: absolute; z-index: 1; }  /* gradient overlay */
.contentInner      { position: relative; z-index: 2; }  /* text on top */
```

---

## Hydration Errors

Xảy ra khi HTML render ở Server khác với Client:

```tsx
// ❌ SAI — Math.random() khác nhau mỗi lần render
<div id={`item-${Math.random()}`}>

// ❌ SAI — window chỉ tồn tại ở client
<div>{typeof window !== "undefined" ? window.innerWidth : 0}</div>

// ✅ ĐÚNG — defer logic chỉ chạy ở client
const [width, setWidth] = useState(0);
useEffect(() => {
  setWidth(window.innerWidth);
}, []);
<div>{width}</div>
```

---

## Build Errors hay gặp

```bash
# Kiểm tra TypeScript errors
npx tsc --noEmit 2>&1 | head -40

# Nếu thấy:
# error TS2307: Cannot find module '@/components/...'
# → Kiểm tra tên file (case-sensitive trên Linux/Vercel)

# error TS2339: Property 'xxx' does not exist on type 'yyy'
# → Thêm type annotation hoặc kiểm tra interface

# error TS18048: 'xxx' is possibly 'undefined'
# → Thêm optional chaining: xxx?.property hoặc null check
```
