"use client";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import SecondaryButton from "@/components/custom/buttons/SecondaryButton";

export interface SmeGroup {
  letter: string;
  names: string[];
}

export default function ContributingExperts({ groups }: { groups: SmeGroup[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  const [open, setOpen] = useState(false);

  return (
    <div id="contributing_subject" className="section-page">
      <div ref={ref} className="contributing-subject">
        <div className="inner inner--slim-1172">
          <div className="contributing-subject-in">
            <h2
              className={`h3 ia-margin-2 fadeInUpS wow${vis}`}
              style={{ animationDelay: "0.1s" }}
            >
              Contributing Subject Matter Experts
            </h2>
            <div
              className={`content-entry p2 fadeInUpS wow${vis}`}
              style={{ animationDelay: "0.2s" }}
            >
              <p>
                Subject Matter Experts (SMEs) are a vital part of NCCER&apos;s Curriculum development process. SMEs
                are construction and maintenance professionals who have journey-level experience and have experience
                teaching their trades to others.
              </p>
            </div>
            <SecondaryButton
              label="View Subject Matter Experts"
              wow
              className="contributing-btn"
              onClick={(e) => { e.preventDefault(); setOpen(true); }}
            />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {open && <div className="contributing-overlay" onClick={() => setOpen(false)} />}

      {/* Popup */}
      <div
        className="contributing-subject-popup"
        tabIndex={0}
        style={{ display: open ? "block" : "none" }}
      >
        <div className="contributing-subject-popup-title h4 ia-white ia-bg-dark">
          Contributing Subject Matter Experts
          <a href="javascript:;" className="close-contributing-popup" onClick={() => setOpen(false)}>
            <i className="icon-cross ia-white" />
            <span className="hidden">Close</span>
          </a>
        </div>
        <div className="contributing-subject-popup-wrap">
          <div className="contributing-subject-popup-sub-title">
            Below is a list of subject matter experts for this craft:
          </div>
          <div className="contributing-subject-popup-list">
            {groups.map((g) => (
              <div key={g.letter} className="contributing-subject-popup-item">
                <div className="contributing-subject-popup-letter">{g.letter}</div>
                <div className="contributing-subject-popup-desc content-entry p3">
                  {g.names.map((name, i) => (
                    <p key={i}>{name}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
