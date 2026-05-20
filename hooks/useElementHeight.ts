import { useEffect, useRef, useState } from "react";

/**
 * Theo dõi chiều cao (px) của một DOM element.
 * Dùng ResizeObserver để cập nhật tự động khi nội dung thay đổi.
 */
export function useElementHeight<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Đọc ngay lần đầu
    setHeight(el.offsetHeight);

    const observer = new ResizeObserver(([entry]) => {
      setHeight(entry.contentRect.height);
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, height };
}
