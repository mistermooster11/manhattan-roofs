"use client";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import type { ProgramItem } from "@/data/programs";

type Props = { items: ProgramItem[] };

export default function ProgramsAccordion({ items }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const vis = inView ? " is-visible" : "";

  // First item open by default
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? -1 : i);

  return (
    <div className="accordion-module flex-module" id="flex-module-3">
      <div className="inner inner--slim-1172">
        <div ref={ref} className={`sub-heading fadeInUpS wow${vis}`}>
          Snapshots
        </div>
        <h2 className={`h3 fadeInUpS wow${vis}`} style={{ animationDelay: "0.1s" }}>
          About Each Program
        </h2>

        <div className={`accordion-wrap-flex fadeInUpS wow${vis}`} style={{ animationDelay: "0.3s" }}>
          {items.map((item, i) => (
            <div className="accordion-item-flex" key={i}>
              <a
                className={`accordion-title-flex h4${openIndex === i ? " current" : ""}`}
                href="javascript:;"
                onClick={() => toggle(i)}
              >
                {item.title}
                <i className="icon-arr-down"></i>
              </a>
              <div
                className="accordion-info-flex"
                style={{ display: openIndex === i ? "block" : "none" }}
              >
                <div className="content-entry">{item.content}</div>
                <a
                  href={item.learnMoreHref}
                  className="ia-link ia-link--arrow"
                  target="_self"
                >
                  <i className="icon-arrow-right"></i>
                  <span>Learn More</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
