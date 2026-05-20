# Rule #1 — "use client": Khi Nào Cần Thêm

> **Quy tắc:** Thêm `"use client"` ở **dòng đầu tiên** của file component nếu component có BẤT KỲ điều nào trong bảng dưới.

---

## Bảng quyết định

| Cần `"use client"` | Không cần |
|---|---|
| `onClick`, `onChange`, `onSubmit`, `onMouse*`, `onKey*` | Component chỉ render HTML tĩnh |
| `useState`, `useEffect`, `useRef`, `useCallback`, `useMemo` | Không có state, không có event |
| `window`, `document`, `localStorage`, `sessionStorage` | Nhận data qua props từ Server Component |
| `requestAnimationFrame`, CSS animation triggers bằng JS | |
| Third-party client libs: sliders, maps, lightbox, charts | |
| `useRouter`, `usePathname`, `useSearchParams` | |

---

## Cú pháp đúng

```tsx
// ✅ ĐÚNG — "use client" phải là dòng ĐẦU TIÊN, trước mọi import
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  // ...
}
```

```tsx
// ✅ ĐÚNG — Component tĩnh, không cần "use client"
import Image from "next/image";

export default function Logo() {
  return <Image src="/logo.svg" alt="Logo" width={120} height={40} />;
}
```

---

## Lỗi nếu thiếu "use client"

```
Error: Event handlers cannot be passed to Client Component props.
<a href="#" onClick={function} children=...>
```

Hoặc:
```
Error: useState is not a function (or its return value is not iterable)
```

**Fix:** Thêm `"use client"` vào dòng đầu tiên của file đó.

---

## Pattern thường gặp — component cha Server, con Client

```tsx
// app/about/page.tsx — Server Component (không cần "use client")
import LeadershipGrid from "@/components/custom/leadership/LeadershipGrid";

export default function AboutPage() {
  return (
    <main>
      <LeadershipGrid />   {/* ← Client Component riêng */}
    </main>
  );
}
```

```tsx
// components/custom/leadership/LeadershipGrid.tsx — Client Component
"use client";

import { useState } from "react";

export default function LeadershipGrid() {
  const [hovered, setHovered] = useState<string | null>(null);
  // ...
}
```

> **Lợi ích:** Page cha vẫn là Server Component (tốt cho SEO, performance). Chỉ phần có interactivity mới là Client Component.
