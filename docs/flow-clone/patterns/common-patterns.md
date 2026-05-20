# Common Patterns — Các Pattern Hay Gặp

> Các pattern tái sử dụng được cho nhiều section. Copy và adapt vào component tương ứng.

---

## Pattern 1 — Logo Marquee (infinite scroll)

```tsx
"use client";
import { useEffect, useRef } from "react";

function LogoMarquee({ items }: { items: string[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.innerHTML += track.innerHTML; // clone để seamless
    let x = 0;
    let rafId: number;
    const tick = () => {
      x -= 0.5;
      if (x <= -track.scrollWidth / 2) x = 0;
      track.style.transform = `translateX(${x}px)`;
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="overflow-hidden">
      <div ref={trackRef} className="flex gap-8 w-max">
        {items.map((src, i) => (
          <img key={i} src={src} alt="" className="h-8 w-auto" />
        ))}
      </div>
    </div>
  );
}
```

---

## Pattern 2 — Lightbox / Modal

```tsx
"use client";
import { useEffect } from "react";

function Lightbox({ isOpen, onClose, onNext, onPrev, children }: {
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft")  onPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  return (
    // Overlay — click outside để đóng
    <div
      className="fixed inset-0 z-99999 bg-black/80 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Content — stopPropagation để tránh đóng khi click inside */}
      <div onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
```

---

## Pattern 3 — Accordion / FAQ

```tsx
"use client";
import { useState } from "react";

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold">{question}</span>
        <span
          className="transition-transform duration-200 text-xl"
          style={{ transform: open ? "rotate(45deg)" : "none" }}
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={{ maxHeight: open ? "600px" : "0" }}
      >
        <p className="pb-5 text-text-body">{answer}</p>
      </div>
    </div>
  );
}
```

---

## Pattern 4 — Filter / Tab Switcher

```tsx
"use client";
import { useState } from "react";

type Tab = { id: string; label: string; content: React.ReactNode };

function TabSwitcher({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find(t => t.id === active) ?? tabs[0];

  return (
    <div>
      <div className="flex gap-4 mb-8">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`transition-opacity ${active === tab.id ? "opacity-100" : "opacity-40"}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{current.content}</div>
    </div>
  );
}
```

---

## Pattern 5 — Email Form (static, không cần backend)

```tsx
"use client";
import { useState } from "react";

function EmailForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) return <p className="text-green-500">✓ Subscribed!</p>;

  return (
    <form onSubmit={e => { e.preventDefault(); setDone(true); }}>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="border border-border rounded px-4 py-2"
      />
      <button type="submit" className="bg-brand-primary text-white px-6 py-2 rounded">
        Subscribe
      </button>
      <p className="text-xs text-text-muted mt-2">
        By signing up, you agree to our Privacy Policy.
      </p>
    </form>
  );
}
```

---

## Pattern 6 — CountUp (number counter khi scroll vào)

```tsx
"use client";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setCount(Math.floor(progress * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

// Usage:
function StatItem({ value, label }: { value: number; label: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div>
      <span ref={ref as React.RefObject<HTMLSpanElement>} className="text-5xl font-bold">
        {count}
      </span>
      <p>{label}</p>
    </div>
  );
}
```

---

## Pattern 7 — AOS (Animate On Scroll)

Dùng `data-aos` attributes trực tiếp trong JSX — AOS được init 1 lần trong layout:

```tsx
// app/layout.tsx
import AosInit from "@/components/AosInit";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AosInit />
        {children}
      </body>
    </html>
  );
}
```

```tsx
// components/AosInit.tsx
"use client";
import { useEffect } from "react";

export default function AosInit() {
  useEffect(() => {
    import("aos").then(AOS => {
      AOS.default.init({ duration: 800, once: true });
    });
  }, []);
  return null;
}
```

```tsx
// Trong bất kỳ component nào — dùng data-aos attributes
<div data-aos="fade-up">Tôi sẽ fade in từ dưới</div>
<div data-aos="fade-left" data-aos-delay="200">Tôi delay 200ms</div>
<div data-aos="zoom-in" data-aos-duration="600">Tôi zoom in nhanh hơn</div>
```

**Các giá trị `data-aos` thường dùng:**

| Value | Hiệu ứng |
|---|---|
| `fade-up` | Fade in từ dưới lên |
| `fade-left` | Fade in từ phải sang trái |
| `fade-right` | Fade in từ trái sang phải |
| `zoom-in` | Zoom in |
| `flip-up` | Lật từ dưới |

---

## Pattern 8 — IntersectionObserver (lazy load / trigger)

```tsx
"use client";
import { useEffect } from "react";

export default function SectionWithLazyLoad() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-lazy]");
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section>
      <div data-lazy className="opacity-0 transition-opacity [&.is-visible]:opacity-100">
        Content loads when scrolled into view
      </div>
    </section>
  );
}
```

---

## Pattern 9 — Simple Slider (thay thế Slick Carousel)

```tsx
"use client";
import { useState } from "react";

function SimpleSlider({ slides }: { slides: React.ReactNode[] }) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex(i => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex(i => (i + 1) % slides.length);

  return (
    <div className="relative overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="w-full shrink-0">
            {slide}
          </div>
        ))}
      </div>

      {/* Controls */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2">‹</button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2">›</button>

      {/* Dots */}
      <div className="flex gap-2 justify-center mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-colors ${i === index ? "bg-brand-primary" : "bg-border"}`}
          />
        ))}
      </div>
    </div>
  );
}
```
