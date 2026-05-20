"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import ResourceItem from "./ResourceItem";
import type { ResourcesData } from "./types";

export default function ChannelResources({ data }: { data: ResourcesData }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div id="helpful_resources" className="section-page">
      <div ref={ref} className={`resources fadeIn wow${vis}`}>
        <div className="inner inner--slim-1172">
          <h2 className={`h3 fadeInUpS wow${vis}`}>{data.title}</h2>
          <div className="resources__list resources__list__two-col">
            {data.resources.map((r, i) => (
              <ResourceItem key={r.href} item={r} delay={`${(i % 2) * 0.1}s`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
