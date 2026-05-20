"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import type { LearnMoreData } from "./types";

export default function ChannelLearnMore({ data }: { data: LearnMoreData }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div id="channel" className="section-page">
      <div className="content-block">
        <div className="inner inner--slim-1172 cleared">
          <h2
            ref={ref}
            className={`h3 fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.1s" }}
          >
            {data.title}
          </h2>
          <div className="cleared">
            <div
              className={`content-entry p2 fadeInUpS wow${vis}`}
              style={{ animationDelay: "0.2s" }}
            >
              {data.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
