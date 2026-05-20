"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Donation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -80px 0px" });
  const vis = isInView ? " is-visible" : "";

  return (
    <div ref={sectionRef} className={`front-donation ia-bg-sky fadeInUpS wow${vis}`}>
      <div className="inner inner--slim-1172">

        <h2 className={`h2 fadeInUpS wow${vis}`}>Make an Impact</h2>

        <div className={`front-donation__in fadeInUpS wow${vis}`}>

          {/* Left: body copy — width:51% margin-right:12% (desktop) */}
          <div className="content-entry">
            <p>
              We are committed to fostering the potential of all craft
              professionals by building a safe, productive and sustainable
              workforce that creates opportunities for individual advancement
              and supports industry growth. Your personal or corporate
              investment can make a direct impact.
            </p>
          </div>

          {/* Right: CTA button — width:37% (desktop) */}
          <div className="front-donation__btn-wrap">
            <div className="front-donation__btn">
              <a
                href="https://secure.givelively.org/donate/national-center-for-construction-education-research/build-america-change-lives"
                className={`ia-btn ia-btn--secondary wow${vis}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <em className="ia-b ia-b-1" />
                <em className="ia-b ia-b-2" />
                <em className="ia-b ia-b-3" />
                <em className="ia-b ia-b-4" />
                <span>
                  Donate to NCCER<em className="icon-external" />
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

