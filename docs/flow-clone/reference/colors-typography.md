# Reference — Colors & Typography

> Bảng tham chiếu nhanh cho CSI Electric project. Luôn dùng biến CSS, không hard-code hex.

---

## Color Tokens — CSI Electric

| Token CSS | Hex | Tailwind class | Dùng cho |
|---|---|---|---|
| `--csi-accent` | `#ff6d00` | `bg-csi-accent` / `text-csi-accent` | Orange CTA, highlights |
| `--csi-secondary` | `#005caf` | `bg-csi-secondary` | Blue headings, badges |
| `--csi-dark` | `#00284c` | `bg-csi-dark` | Dark navy background |
| `--csi-white` | `#ffffff` | `text-white` | Text trên nền tối |

---

## Color Tokens — Webflow projects (tham khảo chung)

| Token | Hex | Dùng cho |
|---|---|---|
| `--black--dark` | `#0d0d0f` | Dark section bg |
| `--ink--dark` | `#1a1a1a` | Card inner bg |
| `--ink--base` | `#242424` | Card outer bg |
| `--ink--light` | `#333` | Borders, subtle bg |
| `--ink--lighter` | `#4d4d4d` | Borders muted |
| `--ink--lightest` | `#595959` | Muted text |
| `--sky--dark` | `#999` | Placeholder text |
| `--sky--light` | `#ccc` | Body text on dark |
| `--sky--lighter` | `#e5e5e5` | Light borders |
| `--blue--base` | `#4242d7` | Primary CTA button bg |
| `--blue--light` | `#6b6be0` | Accent, signage |
| `--blue--lighter` | `#9696e9` | Metrics, icons |
| `--blue--lightest` | `#c0c0f2` | Button borders |
| `--white--off` | `#fef9f0` | Light section bg |

---

## Typography Scale — Webflow (tham khảo)

| Class | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| `.display-m` | 3rem | 900 | 0.9 | -0.04em |
| `.display-s` | 2.5rem | 900 | 1.1 | -0.03em |
| `.display-2xs` | 1.75rem | 900 | 1.0 | -0.01em |
| `.text-l` | 1.125rem | 400 | 1.2 | -0.01em |
| `.text-m` | 1rem | 400 | 1.2 | -0.01em |
| `.signage-title` | `clamp(2rem, 7.22vw, 104px)` | 400 | 100% | — |

---

## Fonts thường gặp — Adobe Typekit

| Font family | Dùng cho |
|---|---|
| `univers-next-pro-condensed` | Heading condensed (weight 900) |
| `univers-next-pro` | Body text |
| `superscore-xwide-open-vf` | Signage outline / decorative (KHÔNG thêm text-stroke — font đã hollow sẵn) |
| `trade-gothic-next-compressed` | Headings CSI Electric |
| `trade-gothic-next` | Sub-headings, navigation CSI Electric |

---

## Breakpoints hay gặp trong projects WordPress/Webflow

| Tên | Width | Tailwind prefix |
|---|---|---|
| Mobile | < 768px | `max-[767px]:` |
| Tablet | 768px – 991px | `min-[768px]:` `max-[991px]:` |
| Desktop nhỏ | 992px – 1199px | `min-[992px]:` |
| Desktop | ≥ 1200px | `min-[1200px]:` |
| Wide | ≥ 1440px | `min-[1440px]:` |

> ⚠️ **Không dùng `lg:` (1024px) thay cho 992px** — khác nhau 32px, gây layout lệch.
