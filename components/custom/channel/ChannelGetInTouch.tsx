"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import PrimaryButton from "@/components/custom/buttons/PrimaryButton";
import type { GetInTouchData } from "./types";

export default function ChannelGetInTouch({ data }: { data: GetInTouchData }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div id="get_in_touch" className="section-page">
      <div className="inner">
        <div ref={ref} className={`get-in-touch ia-bg-dark fadeIn wow${vis}`}>
          <div className="inner">
            <div className="get-in-touch__in">
              <div className="get-in-touch__left">
                <h2
                  className={`h3 ia-white ia-margin-2 fadeInUpS wow${vis}`}
                  style={{ animationDelay: "0.1s" }}
                >
                  Get in Touch
                </h2>
                <div
                  className={`content-entry fadeInUpS wow${vis} ia-white`}
                  style={{ animationDelay: "0.2s" }}
                >
                  {data.body}
                </div>
              </div>
              <div
                className={`get-in-touch__right fadeInUpS wow${vis}`}
                style={{ animationDelay: "0.3s" }}
              >
                <PrimaryButton
                  label={data.buttonLabel}
                  href={data.buttonHref}
                  target="_blank"
                  wow={inView}
                  visible={inView}
                  dark
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
