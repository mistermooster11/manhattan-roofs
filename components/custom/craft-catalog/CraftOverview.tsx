"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

interface QuickLink {
  label: string;
  href: string;
}

interface CraftOverviewProps {
  overviewContent: React.ReactNode;
  quickLinks: QuickLink[];
}

export default function CraftOverview({ overviewContent, quickLinks }: CraftOverviewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div ref={ref} className="hero-org__bottom">
      <div className="inner cleared">
        <div className="hero-org__left">
          <div className="sub-heading">Overview</div>
          <div className={`content-entry fadeInUpS wow${vis}`} style={{ animationDelay: "0.1s" }}>
            {overviewContent}
          </div>
        </div>
        <div className={`hero-org__right fadeInUpS wow${vis}`} style={{ animationDelay: "0.2s" }}>
          <div className="sub-heading">Quick Links</div>
          <ul className="quick-links">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <a
                  className="ia-link ia-link--arrow"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-link" />
                  <span>{link.label}</span>
                  <em className="icon-external" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
