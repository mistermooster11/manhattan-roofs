"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

interface VapeImageProps {
  bg: string;
  ratio?: string;
}

export default function VapeImage({ bg, ratio = "92" }: VapeImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  return (
    <div
      ref={ref}
      className={`vape wow${inView ? " is-visible" : ""}`}
      style={{ position: "relative", width: "100%", paddingBottom: `${ratio}%` }}
    >
      <div
        className="vape-el"
        style={{ position: "absolute", inset: 0, background: bg }}
      />
    </div>
  );
}
