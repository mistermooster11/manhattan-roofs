import { useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Thêm class `is-visible` vào element khi nó xuất hiện trong viewport.
 * Dùng framer-motion `useInView` để track scroll chính xác.
 *
 * @param key     Khoá định danh (giữ để tương thích API)
 * @param enabled Bật/tắt (mặc định true — dùng khi prop `wow` = true)
 * @param delay   Delay (ms) sau khi vào viewport — dùng để stagger nhiều elements
 */
export function useWowAnimation<T extends HTMLElement>(
  key: string,
  enabled = true,
  delay = 0
) {
  const ref = useRef<T>(null);

  // once: true  → chỉ trigger 1 lần, không reset khi scroll ra ngoài
  // margin       → element phải vào sâu 80px mới trigger (không fire sớm)
  const isInView = useInView(ref, {
    once: true,
    margin: '0px 0px -80px 0px',
  });

  useEffect(() => {
    if (!enabled || !isInView) return;

    const el = ref.current;
    if (!el) return;

    if (delay > 0) {
      const t = setTimeout(() => el.classList.add('is-visible'), delay);
      return () => clearTimeout(t);
    }

    el.classList.add('is-visible');
  }, [enabled, isInView, delay]);

  return ref;
}
