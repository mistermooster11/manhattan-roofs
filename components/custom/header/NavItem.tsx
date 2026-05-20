import Link from 'next/link';
import React from 'react'

// Original CSS: nth-child delay table
// 1→.1s  2→.2s  3→.3s  4→.4s  5→.5s  6→.7s  7→.8s  8→.9s
const NAV_DELAYS = ["100ms", "200ms", "300ms", "400ms", "500ms", "700ms", "800ms", "900ms"];

interface NavItemProps {
    item: {
        label: string;
        href?: string | null;
        external?: boolean;
        dropdown?: {
            title: string;
            titleHref: string;
            items?: Array<{
                label: string;
                href: string;
                external?: boolean;
            }>;
            quickLinks?: Array<{
                label: string;
                href: string;
                external?: boolean;
                icon: string;
            }>;
            description: string;
            links: Array<{
                label: string;
                href: string;
                external?: boolean;
            }>
        } | null;
    };
    index: number;
    isLoaded?: boolean;
    isFixed?: boolean;
    isActive: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}
const NavItem: React.FC<NavItemProps> = ({ item, index, isLoaded = false, isFixed = false, isActive, onMouseEnter, onMouseLeave }) => {
  const delay = NAV_DELAYS[index] ?? "100ms";

  const entryClasses = isLoaded
    ? "opacity-100 translate-y-0"
    : "opacity-0 -translate-y-full";

  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {item.href ? (
        /* CraftPro – direct link, no dropdown */
        <Link
          href={item.href}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener" : undefined}
          className={`relative block text-white text-[1.4rem] leading-[1.5] text-center py-[1.5rem] mx-[1.5rem] transition-[opacity,transform] duration-[800ms] ${entryClasses}`}
          style={{ transitionDelay: delay }}
        >
          {item.label}
        </Link>
      ) : (
        /* has-child button */
        <button
          className={[
            "relative bg-transparent border-none text-[1.4rem] leading-[1.5] text-center",
            "py-[1.5rem] mx-[1.5rem] cursor-pointer whitespace-nowrap pr-[1rem]",
            "transition-[opacity,transform,color] duration-[800ms]",
            isActive ? "text-brand-sky" : "text-white",
            entryClasses,
          ].join(" ")}
          style={{ transitionDelay: delay }}
          aria-expanded={isActive}
        >
          {item.label}
          {/* has-child::after – small icomoon chevron, turns orange on hover */}
          <i
            className="absolute right-0 text-[0.6rem] pointer-events-none"
            style={{
              fontFamily: '"icomoon"',
              fontStyle: 'normal',
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translate(0, -50%)',
            }}
            aria-hidden="true"
          >&#xE908;</i>
        </button>
      )}

      {/* has-child>a::before – orange caret triangle below active button */}
      {item.dropdown && (
        <span
          className={[
            "absolute left-1/2 -translate-x-1/2 -bottom-3",
            "w-[10px] h-[10px] bg-white pointer-events-none z-[201]",
            "border-l-[5px] border-t-[5px] border-l-brand-orange border-t-brand-orange",
            "rounded-[2px] rotate-45",
            // Original: transition:all .1s 0s — only opacity animates on hover
            "transition-opacity duration-100",
            isFixed ? "mt-[0.5rem]" : "mt-[1.1rem]",
            isActive ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />
      )}
    </div>
  );
}

export default NavItem;
