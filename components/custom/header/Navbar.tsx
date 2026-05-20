"use client";

import { useState } from "react";
import NavItem from "./NavItem";
import NavDropdownLeft from "./NavDropdownLeft";
import NavDropdownRight from "./NavDropdownRight";
import { mainNavItems } from "@/lib/constants";



interface NavbarProps {
  isLoaded?: boolean;
  isFixed?: boolean;
}

export default function Navbar({ isLoaded = false, isFixed = false }: NavbarProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const activeItem = mainNavItems.find((i) => i.label === activeDropdown);
  const dd = activeItem?.dropdown;
  const isResearch = activeDropdown === "Research";

  return (
    <div
      className="relative"
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <nav aria-label="main" className="flex items-center gap-[0.4rem]">
        {mainNavItems.map((item, index) => (
          <NavItem
            key={item.label}
            item={item}
            index={index}
            isLoaded={isLoaded}
            isFixed={isFixed}
            isActive={activeDropdown === item.label}
            onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
            onMouseLeave={() => {}}
          />
        ))}
      </nav>
      {/* ── Dropdown panel (nav-wrap equivalent) ── */}
      <div
        className={[
          "absolute top-full bg-white text-brand-navy",
          "border-t-[5px] border-t-brand-orange rounded-[5px] shadow-[0_0_5px_rgba(0,0,0,.1)]",
          "flex transition-[opacity,visibility] duration-350 z-200",
          isResearch ? "right-0 w-165" : "-left-18.75 w-[calc(100%+150px)]",
          activeDropdown && dd ? "opacity-100 visible" : "opacity-0 invisible",
        ].join(" ")}
      >
        {dd && (
          <>
            {/* nav-dropdown__left */}
            <NavDropdownLeft dd={dd} />

            {/* nav-dropdown__right – Quick Links */}
            <NavDropdownRight dd={dd} />
          </>
        )}
      </div>
    </div>
  );
}