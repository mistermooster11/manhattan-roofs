'use client';
import { useState } from 'react';
import Link from 'next/link';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';
import { mainNavItems } from '@/lib/constants';
import SocialLinks from './SocialLinks';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [activeSubNav, setActiveSubNav] = useState<string | null>(null);

  const activeItem = mainNavItems.find((i) => i.label === activeSubNav);

  return (
    <>
      {/* Overlay backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-9998 bg-black/30"
          onClick={onClose}
        />
      )}

      {/* .mobile-navi — full-screen slide-in panel */}
      <div
        className={[
          "fixed inset-0 z-9999 bg-brand-navy",
          "transition-transform duration-800",
          isOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
        aria-hidden={!isOpen}
      >
        {/* .mobile-navi__head */}
        <div className="relative px-[2.4rem] py-[1rem] flex items-center min-h-[54px] border-b border-[rgba(161,197,211,.3)]">
          <Link href="/" onClick={onClose} aria-label="NCCER">
            <img src="/logos/logo-long.svg" alt="NCCER" className="block h-[3.2rem]" />
          </Link>
          {/* .mobile-navi__close */}
          <button
            onClick={onClose}
            className="absolute right-[24px] top-1/2 -translate-y-1/2 text-white bg-transparent border-0 cursor-pointer p-0"
            aria-label="Close menu"
          >
            <X size={30} strokeWidth={2.5} />
          </button>
        </div>

        {/* .mobile-navi__in — scrollable content */}
        <div className="absolute top-[54px] left-0 right-0 bottom-0 overflow-auto px-[13%] py-[3rem] box-border">

          {/* .nav-main — main nav list */}
          <nav className="pb-[1rem]">
            <ul className="m-0 p-0 list-none">
              {mainNavItems.map((item) => (
                <li key={item.label} className="mb-[3rem] font-medium text-[1.8rem]">
                  {item.dropdown ? (
                    /* has-child */
                    <button
                      onClick={() => setActiveSubNav(item.label)}
                      className="inline-flex items-center gap-[1.2rem] bg-transparent border-0 text-white text-[1.8rem] font-medium cursor-pointer p-0"
                    >
                      {item.label}
                      <ChevronRight size={12} className="text-brand-orange" strokeWidth={2.5} />
                    </button>
                  ) : (
                    <Link
                      href={item.href ?? '#'}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener' : undefined}
                      className="text-white no-underline"
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Secondary links — Donate / Support / Sign In */}
          {/* border-top divider + column layout matching .mobile-navi__in > ul */}
          <div className="relative pt-12 before:content-[''] before:absolute before:w-screen before:left-1/2 before:top-0 before:-translate-x-1/2 before:border-t before:border-[rgba(161,197,211,.3)]">
            <SocialLinks layout="column" onClick={onClose} />
          </div>
        </div>

        {/* Sub-panel (.nav-dropdown on mobile) — slides in from left, covers full panel */}
        <div
          className={[
            "fixed inset-0 z-99 bg-brand-navy",
            "overflow-auto px-[13%] py-12 box-border",
            "transition-transform duration-800",
            activeSubNav ? "translate-x-0" : "-translate-x-full",
          ].join(" ")}
        >
          {activeItem && (
            <>
              {/* .menu-back */}
              <div className="relative pb-[1.2rem] mb-8 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-screen after:-translate-x-1/2 after:border-b after:border-[rgba(161,197,211,.3)]">
                <button
                  onClick={() => setActiveSubNav(null)}
                  className="inline-flex items-center gap-[0.6rem] text-white text-[1.2rem] font-medium bg-transparent border-0 cursor-pointer p-0 pl-[1.2rem] relative"
                >
                  <ChevronLeft size={12} className="text-brand-orange absolute left-0 top-1/2 -translate-y-1/2" strokeWidth={2.5} />
                  Back
                </button>
              </div>

              {/* nav-dropdown__left */}
              <div className="pt-8 pb-4 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-screen after:-translate-x-1/2 after:border-b after:border-[rgba(161,197,211,.3)]">
                {/* nav-dropdown__title */}
                <Link
                  href={activeItem.dropdown!.titleHref}
                  className="inline-block align-top text-white text-[1.8rem] font-medium leading-[1.5] mb-[2rem] no-underline pr-[2rem] relative"
                  onClick={onClose}
                >
                  {activeItem.dropdown!.title}
                  <ChevronRight size={14} className="text-brand-orange absolute right-0 top-1/2 -translate-y-1/2" strokeWidth={2.5} />
                </Link>

                {/* nav-dropdown__menu */}
                <ul className="m-0 p-0 list-none">
                  {activeItem.dropdown!.links.map((link) => (
                    <li key={link.label} className="text-[1.4rem] font-medium mb-[2rem]">
                      <Link
                        href={link.href}
                        target={'external' in link && link.external ? '_blank' : undefined}
                        rel={'external' in link && link.external ? 'noopener' : undefined}
                        className="text-white no-underline"
                        onClick={onClose}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* nav-dropdown__right — quick links */}
              {activeItem.dropdown!.quickLinks && (
                <div className="pt-[2rem]">
                  <div className="text-[1.4rem] font-medium mb-[1.8rem] uppercase tracking-[1px] text-brand-sky">
                    Quick Links
                  </div>
                  <ul className="m-0 p-0 list-none">
                    {activeItem.dropdown!.quickLinks!.map((ql) => (
                      <li key={ql.label} className="font-semibold text-[1.3rem] leading-[1.3] mb-[2rem]">
                        <Link
                          href={ql.href}
                          target={ql.external ? '_blank' : undefined}
                          rel={ql.external ? 'noopener' : undefined}
                          className="text-white no-underline inline-block align-top"
                          onClick={onClose}
                        >
                          {ql.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
