"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import type { CraftItem } from "@/data/craft-catalog/crafts";

/* ── ServiceRow ─────────────────────────────────────────── */
function ServiceRow({ item, index }: { item: CraftItem; index: number }) {
  const odd = index % 2 !== 0;
  return (
    <Link
      href={`/craft-catalog/${item.slug}/`}
      className={`craft-item craft-item-leng craft-item--full${odd ? " craft-item--odd" : " craft-item--even"}`}
    >
      <div className="craft-item-title h4 ia-medium">
        {item.title}
        <em>
          <i className="icon-arrow-right" />
        </em>
      </div>
    </Link>
  );
}

/* ── CraftList ──────────────────────────────────────────── */
interface Props {
  items: CraftItem[];
  totalCount: number;
  sortAsc: boolean;
  onSort: () => void;
  onClearAll?: () => void;
}

export default function CraftList({ items, totalCount, sortAsc, onSort }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div ref={ref} className="inner inner--slim-1172 crafts-wrap relative z-0">
      <div className={`crafts-list fadeInUpS wow${vis}`} style={{ transitionDelay: "0.2s" }}>

        {/* Table header */}
        <div className="crafts-list-head crafts-list-head--slim">
          <div className="crafts-list-th">
            <div className="crafts-list-mob">
              Service
              <button type="button" className="sort" onClick={onSort}>
                <em>Sort {sortAsc ? "A to Z" : "Z to A"}</em>
                <span>
                  <span className={`sort-up icon-arr-up${sortAsc ? " active" : ""}`} />
                  <span className={`sort-down icon-arr-down${!sortAsc ? " active" : ""}`} />
                </span>
              </button>
              <div className="filter-result-count">
                <span>{totalCount}</span> Results
              </div>
            </div>
          </div>
        </div>

        {/* Table body */}
        <div className="crafts-list-items">
          {items.map((item, i) => (
            <ServiceRow key={item.slug} item={item} index={i} />
          ))}
        </div>

      </div>
    </div>
  );
}
