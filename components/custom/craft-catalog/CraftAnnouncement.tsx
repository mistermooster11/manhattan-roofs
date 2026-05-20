"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import SecondaryButton from "@/components/custom/buttons/SecondaryButton";

interface CraftAnnouncementProps {
  message: React.ReactNode;
  btnLabel: string;
  btnHref: string;
}

export default function CraftAnnouncement({ message, btnLabel, btnHref }: CraftAnnouncementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div ref={ref} className="announcement-craft">
      <div className="inner inner--slim-1172">
        <div className="announcement-craft-in ia-bg-soft">
          <div className={`story-item__sub-title fadeInUpS wow${vis}`}>
            <i className="icon-nccer" /> IMPORTANT
          </div>
          <div className="announcement-craft-text">
            <div
              className={`content-entry p2 fadeInUpS wow${vis}`}
              style={{ animationDelay: "0.1s" }}
            >
              {message}
            </div>
            <div
              className={`announcement-craft-btn fadeInUpS wow${vis}`}
              style={{ animationDelay: "0.2s" }}
            >
              <SecondaryButton
                href={btnHref}
                label={btnLabel}
                target="_blank"
                wow
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
