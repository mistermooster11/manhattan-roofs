'use client';

import { useEffect, useRef } from 'react';

interface VapeImageProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * VapeImage — reusable "vape" reveal animation wrapper.
 *
 * CSS (.vape / .vape-el / ::before) lives in styles/homepage.css.
 *
 * Animation on scroll-into-view:
 *  - ::before  navy overlay: height 100% → 0  (slides down, reveals image)
 *  - .vape-el  background image: scale(1.2) → scale(1)
 */
export default function VapeImage({ src, className = '', style }: VapeImageProps) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`vape wow ${className}`} ref={wrapRef} style={style}>
      <div
        className="vape-el"
        style={{ backgroundImage: `url(${src})` }}
      />
      <em className="vape-cut vape-cut--tr hidden! md:block!" />
    </div>
  );
}
