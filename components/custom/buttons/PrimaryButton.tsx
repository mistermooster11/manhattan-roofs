'use client';
import React from 'react';
import Link from 'next/link';
import { useWowAnimation } from '@/hooks/useWowAnimation';

interface PrimaryButtonProps {
  /** Text hiển thị trên button */
  label: string;
  /** URL button trỏ đến */
  href: string;
  /** Dark variant: bg navy, border orange, hover bg white */
  dark?: boolean;
  /** Có chạy wow border-draw animation không */
  wow?: boolean;
  /** visible từ parent (fade-in khi mount) */
  visible?: boolean;
  target?: '_blank' | '_self';
  className?: string;
}

export default function PrimaryButton({
  label,
  href,
  dark = false,
  wow = false,
  visible = true,
  target = '_self',
  className = '',
}: PrimaryButtonProps) {
  // key dựa trên href để mỗi button có sessionStorage riêng
  const btnRef = useWowAnimation<HTMLAnchorElement>(`primary-btn:${href}`, wow);

  const btnClass = [
    'ia-btn',
    'ia-btn--secondary',
    dark ? 'ia-btn--dark' : '',
    wow ? 'wow' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={[
        'shrink-0',
        'transition-[opacity,transform] duration-800 delay-200',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
      ].join(' ')}
    >
      <Link
        ref={btnRef}
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={btnClass}
      >
        {/* Border elements — JS gốc nccer.org dùng em.ia-b-1/2/3/4 */}
        <em className="ia-b ia-b-1" />
        <em className="ia-b ia-b-2" />
        <em className="ia-b ia-b-3" />
        <em className="ia-b ia-b-4" />
        <span>{label}</span>
      </Link>
    </div>
  );
}
