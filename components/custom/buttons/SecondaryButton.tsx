'use client';
import Link from 'next/link';
import { useWowAnimation } from '@/hooks/useWowAnimation';

interface SecondaryButtonProps {
  /** Text hiển thị trên button */
  label: string;
  /** URL button trỏ đến — dùng "#" nếu chỉ dùng onClick */
  href?: string;
  /** Có chạy wow border-draw animation không */
  wow?: boolean;
  /** Delay (ms) trước khi trigger animation sau khi vào viewport */
  delay?: number;
  target?: '_blank' | '_self';
  style?: React.CSSProperties;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function SecondaryButton({
  label,
  href = '#',
  wow = false,
  delay = 0,
  target = '_self',
  style,
  className = '',
  onClick,
}: SecondaryButtonProps) {
  const btnRef = useWowAnimation<HTMLAnchorElement>(`secondary-btn:${href}`, wow, delay);

  const btnClass = [
    'ia-btn',
    wow ? 'wow' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Link
      ref={btnRef}
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={btnClass}
      style={style}
      onClick={onClick}
    >
      {/* Border elements — JS gốc nccer.org dùng em.ia-b-1/2/3/4 */}
      <em className="ia-b ia-b-1" />
      <em className="ia-b ia-b-2" />
      <em className="ia-b ia-b-3" />
      <em className="ia-b ia-b-4" />
      <span>{label}</span>
    </Link>
  );
}
