"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

const items = [
  {
    title: "Construction Craft Salary Survey",
    category: "Craft Salary Survey",
    categoryHref: "https://www.nccer.org/research-old/?category=619",
    href: "https://www.nccer.org/research/construction-craft-salary-survey/",
    body: "",
  },
  {
    title: "From Training to Performance",
    category: "Return on Investment",
    categoryHref: "https://www.nccer.org/research-old/?category=825",
    href: "https://www.nccer.org/research/from-training-to-performance/",
    body: "",
  },
];

export default function Research() {
  const inRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(inRef, { once: true, margin: "0px 0px -80px 0px" });
  const vis = isInView ? " is-visible" : "";

  return (
    <div className="front-research">
      <div className="inner inner--slim-1172">
        <div ref={inRef} className={`front-research__in wow${vis}`}>

          {/* ── Header item ── */}
          <div className="front-research__item front-research__item-head">
            <h2 className={`h3 fadeInUpS wow${vis}`}>Featured Research</h2>
            <div>
              <a
                href="https://www.nccer.org/research-old/"
                className={`ia-link ia-link--arrow wow${vis}`}
              >
                <i className="icon-arrow-right" />
                <span>Explore All Research </span>
              </a>
            </div>
          </div>

          {/* ── Research items ── */}
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`front-research__item fadeInUpS wow${vis}`}
              style={{ animationDelay: `${(i + 1) * 0.1}s` }}
            >
              {/* Full-card link */}
              <a className="item-link" href={item.href}>
                <span className="sr-only">{item.title}</span>
              </a>
              <a className="category-title" href={item.categoryHref}>
                {item.category}
              </a>
              <h3 className="h6">{item.title}</h3>
              {item.body && (
                <div className="content-entry">
                  <p>{item.body}</p>
                </div>
              )}
            </div>
          ))}

          {/* Decorative corner lines */}
          <div className="ia-line ia-line-1 ia-bg-orange" />
          <div className="ia-line ia-line-2 ia-bg-orange" />
          <div className="ia-line ia-line-3 ia-bg-orange" />
          <div className="ia-line ia-line-4 ia-bg-orange" />

        </div>
      </div>
    </div>
  );
}
