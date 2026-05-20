"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import type { CraftsData } from "./types";

export default function ChannelCrafts({ data }: { data: CraftsData }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";
  const catalogHref = data.catalogHref ?? "https://www.nccer.org/craft-catalog/";

  return (
    <div id="crafts" className="section-page">
      <div className="crafts">
        <div className="inner inner--slim-1172">

          <div className="crafts__left">
            <h2
              ref={ref}
              className={`h3 ia-margin-1 fadeInUpS wow${vis}`}
              style={{ animationDelay: "0.1s" }}
            >
              Explore Programs &amp; Crafts
            </h2>
            <div
              className={`content-entry fadeInUpS wow${vis}`}
              style={{ animationDelay: "0.2s" }}
            >
              {data.description}
            </div>
            <div className={`fadeInUpS wow${vis}`} style={{ animationDelay: "0.3s" }}>
              <a href={catalogHref} className="ia-btn">
                <span>View Crafts &amp; Titles</span>
              </a>
            </div>
          </div>

          <div className="crafts__right">
            <div className="crafts__list">
              {data.craftLinks.map((c, i) => (
                <div
                  key={c.href}
                  className={`fadeInUpS wow${vis}`}
                  style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                >
                  <a className="crafts__item h6" href={c.href}>
                    {c.label}
                    <em><i className="icon-arrow-right" aria-hidden="true" /></em>
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
