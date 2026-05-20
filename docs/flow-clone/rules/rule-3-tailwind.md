# Rule #3 — Tailwind CSS v4: Ưu Tiên Class, Cấm `style={{}}`

> **Nguyên tắc thứ tự ưu tiên (bắt buộc theo thứ tự này):**
> 1. ✅ **Tailwind utility class** → luôn ưu tiên dùng trước
> 2. ⚠️ **`style={{ }}`** → chỉ dùng khi Tailwind KHÔNG xử lý được (xem bảng ngoại lệ)

---

## Khi nào được phép dùng `style={{}}`

| Trường hợp | Ví dụ |
|---|---|
| `clamp()` / `calc()` | `style={{ fontSize: "clamp(2rem, 7vw, 104px)" }}` |
| CSS font-family chuỗi dài | `style={{ fontFamily: "trade-gothic-next-compressed, sans-serif" }}` |
| Dynamic value tính từ JS | `style={{ width: \`${percent}%\` }}` |
| CSS var không đăng ký vào `@theme` | `style={{ borderColor: "var(--color-overlay)" }}` |
| Giá trị hover thay đổi bằng JS | `onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}` |

---

## Khi nào PHẢI dùng Tailwind class (không dùng `style`)

| CSS property | Tailwind class |
|---|---|
| `display: flex` | `flex` |
| `flex-direction: column` | `flex-col` |
| `gap: 1rem` | `gap-4` |
| `padding: 1.5rem` | `p-6` |
| `background-color: var(--color-brand-primary)` | `bg-brand-primary` |
| `color: #ffffff` | `text-white` |
| `font-weight: 600` | `font-semibold` |
| `border-radius: 0.5rem` | `rounded-lg` |
| `overflow: hidden` | `overflow-hidden` |
| `max-width: 1280px` | `max-w-7xl` |
| `width: 100%` | `w-full` |
| `position: relative` | `relative` |
| `position: absolute` | `absolute` |
| `z-index: 10` | `z-10` |

---

## Tailwind v4 — Shorthand bắt buộc

| Quy tắc | ✅ Đúng | ❌ Sai |
|---|---|---|
| Important modifier | `class!` | `!class` |
| z-index | `z-50`, `z-99999` | `z-[99999]` |
| max-width 1280px | `max-w-7xl` | `max-w-[1280px]` |
| max-width 500px | `max-w-125` | `max-w-[500px]` |
| max-width 340px | `max-w-85` | `max-w-[340px]` |
| height 400px | `h-100` | `h-[400px]` |
| padding-top 4.5rem | `pt-18` | `pt-[4.5rem]` |
| padding-y 9px | `py-2.25` | `py-[9px]` |
| aspect ratio | `aspect-4/3`, `aspect-9/16` | `aspect-[4/3]` |
| shrink | `shrink-0` | `flex-shrink-0` |
| filter CSS | `filter-[...]` | `[filter:...]` |
| Breakpoint 992px | `max-[991px]:`, `min-[992px]:` | `lg:` (lg=1024px ≠ 992px) |

---

## Anti-patterns — KHÔNG làm thế này

```tsx
// ❌ TUYỆT ĐỐI SAI: Viết toàn bộ layout bằng style={{}}
<div style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "1.5rem" }}>

// ✅ ĐÚNG:
<div className="flex flex-col gap-4 p-6">
```

```tsx
// ❌ SAI: style={{}} cho màu đã có trong @theme
<div style={{ background: "var(--color-brand-primary)", color: "#fff" }}>

// ✅ ĐÚNG:
<div className="bg-brand-primary text-white">
```

```tsx
// ❌ SAI: style={{}} cho font-size, font-weight thông thường
<p style={{ fontSize: "1.4rem", fontWeight: 500, lineHeight: 1.6 }}>

// ✅ ĐÚNG:
<p className="text-[1.4rem] font-medium leading-[1.6]">
```

```tsx
// ❌ SAI: style={{}} cho spacing
<ul style={{ margin: 0, padding: "0 3rem", listStyle: "none" }}>

// ✅ ĐÚNG:
<ul className="m-0 px-[3rem] list-none">
```

---

## Bảng convert `style={{}}` → Tailwind

| `style={{}}` gốc | Tailwind class |
|---|---|
| `display: "flex"` | `flex` |
| `flexDirection: "column"` | `flex-col` |
| `alignItems: "center"` | `items-center` |
| `justifyContent: "space-between"` | `justify-between` |
| `flexWrap: "wrap"` | `flex-wrap` |
| `gap: "1.5rem"` | `gap-6` |
| `padding: "2rem 0"` | `py-8` |
| `margin: 0` | `m-0` |
| `listStyle: "none"` | `list-none` |
| `position: "relative"` | `relative` |
| `position: "absolute"` | `absolute` |
| `overflow: "hidden"` | `overflow-hidden` |
| `whiteSpace: "nowrap"` | `whitespace-nowrap` |
| `cursor: "pointer"` | `cursor-pointer` |
| `transition: "color .35s"` | `transition-colors duration-[350ms]` |
| `textDecoration: "none"` | `no-underline` |
| `fontWeight: 500` | `font-medium` |
| `fontWeight: 700` | `font-bold` |
| `lineHeight: 1.6` | `leading-[1.6]` |
| `letterSpacing: ".1rem"` | `tracking-[.1rem]` |
| `color: "#fff"` | `text-white` |
| `background: "#fff"` | `bg-white` |
| `border: "1px solid #fff"` | `border border-white` |
| `borderRadius: "2px"` | `rounded-[2px]` |
| `borderBottom: "2px solid transparent"` | `border-b-2 border-b-transparent` |
| `flexShrink: 0` | `shrink-0` |
| `width: "100%"` | `w-full` |
| `height: "100%"` | `h-full` |
| `display: "none"` | `hidden` |
| `display: "inline-flex"` | `inline-flex` |

---

## Các trường hợp `style={{}}` được phép

```tsx
// ✅ Giá trị động từ JS
<div style={{ width: `${progress}%` }}>
<div style={{ transform: `translateX(${offset}px)` }}>

// ✅ clamp() / calc() phức tạp
<h1 style={{ fontSize: "clamp(2.4rem, 5vw, 7.2rem)" }}>

// ✅ Font-family chuỗi dài
<p style={{ fontFamily: "trade-gothic-next-compressed, sans-serif" }}>

// ✅ Hover/focus effect bằng JS
onMouseEnter={e => e.currentTarget.style.color = "var(--color-brand-accent)"}

// ✅ CSS var chưa đăng ký vào @theme
<div style={{ borderColor: "var(--dynamic-color)" }}>
```
