"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import type { ProgramsPageData } from "@/data/programs";

type Props = { data: ProgramsPageData["hero"] };

export default function ProgramsHero({ data }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div className="no-space-hero">
      <div ref={ref} className={`hero-craft flex-module fadeIn wow hero-craft--higher${vis}`}>
        <div className="hero-craft-bg">
          <div style={{ background: `url(${data.bgImage}) no-repeat center center / cover` }} />
        </div>
        <div className="inner inner--slim-1172">
          <div className={`breadcrumbs ia-white fadeInUpS wow${vis}`}>
            <span><a href="/">Home</a></span>
            <em>&gt;</em>
            <span>
              <a href={data.breadcrumbParentHref}>{data.breadcrumbParentLabel}</a>
            </span>
            <em>&gt;</em>
            <span className="post post-page current-item">{data.title}</span>
          </div>

          <h1
            className={`h1 ia-white fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.3s" }}
          >
            {data.title}
          </h1>

          <div
            className={`content-entry ia-white fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.4s" }}
          >
            {data.description}
          </div>
        </div>
      </div>
    </div>
  );
}
