"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";

interface CraftHeroProps {
  title: string;
  bgImage: string;
  /** e.g. [{ label: "Craft Catalog", href: "/craft-catalog" }] */
  breadcrumbs: { label: string; href?: string }[];
}

export default function CraftHero({ title, bgImage, breadcrumbs }: CraftHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const vis = inView ? " is-visible" : "";

  return (
    <div ref={ref} className={`hero-craft fadeIn wow${vis}`}>
      <div className="hero-craft-bg">
        <div style={{ background: `url(${bgImage}) no-repeat center center / cover` }} />
      </div>
      <div className="inner inner--slim-1172">
        <div className={`breadcrumbs ia-white fadeInUpS wow${vis}`}>
          <Link href="/">Home</Link>
          {breadcrumbs.map((crumb, i) => (
            <span key={i}>
              <em> &gt; </em>
              {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : <span>{crumb.label}</span>}
            </span>
          ))}
        </div>
        <h1
          className={`h1 ia-white ia-margin-0 fadeInUpS wow${vis}`}
          style={{ animationDelay: "0.2s" }}
        >
          {title}
        </h1>
      </div>
    </div>
  );
}
