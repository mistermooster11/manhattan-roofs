"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import SecondaryButton from "@/components/custom/buttons/SecondaryButton";
import type { FlexFeatureData } from "./types";

export default function ChannelFlexFeature({ data }: { data: FlexFeatureData }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div id="flex_feature" className="section-page">
      <div ref={ref} className={`flex-feature fadeIn wow${vis}`}>
        <div className="inner inner--slim-1172">
          <div className="flex-feature__in">
            <div className="ia-line ia-line-1 ia-bg-orange" />
            <div className="ia-line ia-line-2 ia-bg-orange" />
            <div className="ia-line ia-line-3 ia-bg-orange" />
            <div className="ia-line ia-line-4 ia-bg-orange" />

            <div className="flex-feature__left">
              <div className={`flex-feature-image vape wow${vis}`}>
                <div
                  className="vape-el"
                  style={{ position: "absolute", inset: 0, background: `url(${data.imageSrc}) no-repeat center center / cover` }}
                />
              </div>
            </div>

            <div className="flex-feature__right">
              <h2
                className={`h4 fadeInUpS wow${vis}`}
                style={{ animationDelay: "0.1s" }}
              >
                {data.title}
              </h2>
              <div
                className={`content-entry fadeInUpS wow${vis} p2`}
                style={{ animationDelay: "0.2s" }}
              >
                {data.body}
              </div>
              <div className={`fadeInUpS wow${vis}`} style={{ animationDelay: "0.3s" }}>
                <SecondaryButton
                  label={data.buttonLabel}
                  href={data.buttonHref}
                  target="_blank"
                  wow={inView}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
