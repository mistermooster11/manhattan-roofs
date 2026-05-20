"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import type { ProgramsPageData } from "@/data/programs";

type Props = { data: ProgramsPageData["overview"] };

export default function ProgramsOverview({ data }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div className="hero-org__bottom flex-module" id="flex-module-2">
      <div ref={ref} className="inner inner--slim-1172 cleared">

        <div className="hero-org__left">
          <div className={`sub-heading fadeInUpS wow${vis}`}>Overview</div>
          <div
            className={`content-entry fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.1s" }}
          >
            {data.content}
          </div>
        </div>

        <div className="hero-org__right">
          <div
            className={`sub-heading fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.1s" }}
          >
            Quick Links
          </div>
          <ul className="quick-links" role="list">
            {data.quickLinks.map((link, i) => (
              <li
                key={i}
                className={`fadeInUpS wow${vis}`}
                style={{ animationDelay: `${0.1 + i * 0.05}s` }}
                role="listitem"
              >
                <a
                  className="ia-link ia-link--arrow"
                  href={link.href}
                  target="_self"
                >
                  <i className={link.icon}></i>
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
