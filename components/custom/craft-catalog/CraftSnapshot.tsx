"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

export interface SnapshotItem {
  label: string;
  value: string;
  tooltip?: string;
}

export default function CraftSnapshot({ items }: { items: SnapshotItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div ref={ref} className="craft-snapshot">
      <div className="inner">
        <div className="craft-snapshot-top">
          <h2 className={`h4 fadeInUpS wow${vis}`}>Craft Snapshot</h2>
        </div>
        <div className="craft-snapshot-list wide">
          {items.map((item, i) => (
            <div key={i} className="craft-snapshot-item">
              <div className="craft-snapshot-item-label">
                {item.label}
                {item.tooltip && (
                  <i className="icon-info tooltip-parent">
                    <span className="ia-tooltip ia-tooltip-bottom ia-tooltip-bottom__right">
                      {item.tooltip}
                    </span>
                  </i>
                )}
              </div>
              <div className="craft-snapshot-item-value">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
