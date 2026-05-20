"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import type { NavItem } from "./types";

export default function ChannelSidebar({ navItems }: { navItems: NavItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  const [activeSection, setActiveSection] = useState<string>(navItems[0]?.href ?? "");

  useEffect(() => {
    const sectionIds = navItems.map((n) => n.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(`#${id}`);
        },
        { rootMargin: "-10% 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [navItems]);

  return (
    <div
      ref={ref}
      className={`channel-sidebar fadeIn wow${inView ? " is-visible" : ""} flex-1 h-screen py-52`}
    >
      <div className="channel-sidebar__in">
        <div className="sub-heading">Page Navigation</div>
        <ul className="navigation-page sticky">
          {navItems.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className={activeSection === n.href ? "current" : ""}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

