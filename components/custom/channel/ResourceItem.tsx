"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import type { Resource } from "./types";

interface ResourceItemProps {
  item: Resource;
  delay: string;
}

export default function ResourceItem({ item, delay }: ResourceItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div
      ref={ref}
      className={`resources__item resources__item__has-icon fadeInUpS wow${vis}`}
      style={{ animationDelay: delay }}
    >
      <a href={item.href} target="_self">
        <span className="hidden">{item.title}</span>
      </a>
      <h5 className="h5 ia-margin-0">
        <i className={item.icon} aria-hidden="true" />
        {item.title}
        <em className="ia-bg-white">
          <i className="icon-arrow-right" />
        </em>
      </h5>
      <div className="resources__item-desc">
        <p className="p3 ia-regular ia-margin-0" />
      </div>
    </div>
  );
}
