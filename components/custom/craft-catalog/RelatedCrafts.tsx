"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

export interface RelatedCraft {
  label: string;
  href: string;
}

interface RelatedCraftsProps {
  description: React.ReactNode;
  crafts: RelatedCraft[];
}

export default function RelatedCrafts({ description, crafts }: RelatedCraftsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div id="related_crafts" className="section-page">
      <div ref={ref} className="crafts">
        <div className="inner inner--slim-1172">
          <div className="crafts__left">
            <h2
              className={`h3 ia-margin-1 fadeInUpS wow${vis}`}
              style={{ animationDelay: "0.1s" }}
            >
              Related Crafts
            </h2>
            <div
              className={`content-entry fadeInUpS wow${vis}`}
              style={{ animationDelay: "0.2s" }}
            >
              {description}
            </div>
          </div>
          <div className="crafts__right">
            <div className="crafts__list">
              {crafts.map((craft, i) => (
                <div
                  key={i}
                  className={`fadeInUpS wow${vis}`}
                  style={{ animationDelay: `${(i + 1) * 0.1}s` }}
                >
                  <a className="crafts__item h6" href={craft.href}>
                    {craft.label} <em><i className="icon-arrow-right" /></em>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
