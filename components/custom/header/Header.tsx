"use client";

import { useState, useEffect } from "react";
import Topnav from "./Topnav";
import Navbar from "./Navbar";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const onScroll = () => setIsFixed(window.scrollY > 150);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-99 bg-brand-navy w-full">
      <Topnav onMobileMenuClick={() => setMobileOpen(true)} />
      {/* header__main — hidden on mobile (≤1023px) */}
      <div className={`hidden lg:block relative transition-[padding] duration-350 ${isFixed ? "py-[1.9rem]" : "py-12"}`}>
        <div className="inner inner-main-header">
          <Logo isFixed={isFixed} isLoaded={isLoaded} />
          <Navbar isLoaded={isLoaded} isFixed={isFixed} />
        </div>
      </div>
      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
