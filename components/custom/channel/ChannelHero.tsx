"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import VapeImage from "./VapeImage";
import type { HeroData } from "./types";

export default function ChannelHero({ data }: { data: HeroData }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  const parentLabel = data.breadcrumbParentLabel ?? "NCCER for Organizations";
  const parentHref  = data.breadcrumbParentHref  ?? "/explore/";

  return (
    <div ref={ref} className={`hero-channel ia-bg-dark fadeIn wow${vis}`}>
      <div className="inner inner--slim-1172 cleared">

        <div className="hero-channel__left">
          <div className={`breadcrumbs ia-sky fadeInUpS wow${vis}`}>
            <span><a href="/">Home</a></span>
            <em>&gt;</em>
            <span><a href={parentHref}>{parentLabel}</a></span>
            <em>&gt;</em>
            <span className="post post-page current-item">{data.breadcrumbLabel}</span>
          </div>

          <h1
            className={`ia-white fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.1s" }}
          >
            {data.title}
          </h1>

          <div
            className={`content-entry ia-white fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.2s" }}
          >
            {data.description}
          </div>
        </div>

        <div className="hero-channel__right">
          <VapeImage bg={data.imageBg} ratio="92" />
        </div>

      </div>
    </div>
  );
}
