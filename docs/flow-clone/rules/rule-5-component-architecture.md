# Rule #5 — Kiến Trúc Component: Parent Gọn — Con Độc Lập

> **Nguyên tắc:** Component cha phải luôn **tối giản nhất có thể** — chỉ chứa layout wrapper và import các component con.

---

## Quy tắc phân tách

### 1. Component cha (Parent) — chỉ làm 3 việc:
- Render layout skeleton (wrapper divs, grid, flex container)
- Import và đặt component con vào đúng vị trí
- Quản lý state **dùng chung** giữa nhiều component con (nếu có)

```tsx
// ✅ ĐÚNG — Parent gọn, chỉ orchestrate
export default function Header() {
  return (
    <header className="relative z-100">
      <Topnav />
      <div className="bg-brand-navy">
        <div className="flex items-center min-h-[7.2rem]">
          <Logo />
          <Navbar />
        </div>
      </div>
    </header>
  );
}

// ❌ SAI — Parent chứa toàn bộ logic, state, JSX của con
export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  // ... 200 dòng JSX inline
}
```

### 2. State dùng chung → để ở Parent, truyền xuống qua props:

```tsx
// activeDropdown cần biết ở nhiều NavItem → để ở Navbar
export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  return (
    <nav>
      {items.map(item => (
        <NavItem
          key={item.label}
          isActive={activeDropdown === item.label}
          onMouseEnter={() => setActiveDropdown(item.label)}
          onMouseLeave={() => setActiveDropdown(null)}
        />
      ))}
    </nav>
  );
}
```

### 3. State không dùng chung → component con tự quản lý:

```tsx
// ✅ ĐÚNG — searchOpen chỉ Topnav dùng → tự quản lý, không truyền lên Header
export default function Topnav() {
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setSearchOpen(!searchOpen)} />
      {searchOpen && <SearchOverlay />}
    </div>
  );
}
```

---

## Quy tắc tách file — khi nào tách component con

| Điều kiện | Quyết định |
|---|---|
| JSX vượt quá ~40 dòng trong parent | ✅ Tách ra file riêng |
| Có logic/state riêng biệt | ✅ Tách ra file riêng |
| Có thể tái sử dụng ở nơi khác | ✅ Tách ra file riêng |
| Chỉ là 1-2 dòng JSX đơn giản | ❌ Không cần tách |
| Không có state, không có logic | ❌ Dùng inline hoặc helper function |

---

## Cấu trúc thư mục cho component lớn

```
components/custom/header/
├── Header.tsx        ← Parent: chỉ layout + import
├── Topnav.tsx        ← Con: top bar, tự quản lý search state
├── Navbar.tsx        ← Con: nav items, tự quản lý activeDropdown
├── NavItem.tsx       ← Con của Navbar: 1 nav item + dropdown
├── Logo.tsx          ← Con: logo image
└── HeaderSearch.tsx  ← Con: search overlay (nếu phức tạp)
```

---

## Checklist trước khi viết component lớn

- [ ] Component cha chỉ render layout, không có business logic
- [ ] Đã liệt kê tất cả component con cần tách
- [ ] State dùng chung → cha | State độc lập → con tự quản lý
- [ ] Mỗi file component con có dưới 150 dòng
- [ ] Mỗi component có 1 trách nhiệm duy nhất (Single Responsibility)
