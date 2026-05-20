"use client";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import type { PartnerItem } from "@/data/programs";

type Props = { partners: PartnerItem[] };

// Each slide step = item width (205px) + gap (40px = 4rem)
const SLIDE_W = 245;
const SLIDES_VISIBLE = 4;

export default function ProgramsPartners({ partners }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const maxIndex = Math.max(0, partners.length - SLIDES_VISIBLE);
  const [index, setIndex] = useState(0);

  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "0px 0px -80px 0px" });
  const headVis = headInView ? " is-visible" : "";

  const listRef = useRef<HTMLDivElement>(null);
  const listInView = useInView(listRef, { once: true, margin: "0px 0px -80px 0px" });
  const listVis = listInView ? " is-visible" : "";

  const scroll = (dir: "prev" | "next") => {
    const newIndex =
      dir === "next"
        ? Math.min(index + 1, maxIndex)
        : Math.max(index - 1, 0);
    setIndex(newIndex);
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${newIndex * SLIDE_W}px)`;
    }
  };

  return (
    <div className="our-partner flex-module" id="flex-module-4">
      <div className="inner inner--slim-1172">
        <h2 ref={headRef} className={`h3 fadeInUpS wow${headVis}`}>
          Our Partners
        </h2>

        <div
          ref={listRef}
          className={`our-partner-list our-partner-list--slider fadeInRight wow${listVis}`}
          data-wow-delay="0.3"
        >
          {/* slick-list: overflow visible so edge cards are partially seen */}
          <div className="slick-list">
            <div
              className="slick-track"
              ref={trackRef}
              style={{ transition: "transform 0.4s ease" }}
            >
              {partners.map((p, i) => (
                <div key={i} className="slick-slide">
                  <div className="our-partner-item">
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <a href={p.href} target="_blank" rel="noopener noreferrer">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.imgSrc} alt={p.alt} />
                      <em>
                        <i className="icon-external"></i>
                      </em>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows — bottom-right, prev sits further left (right: 9rem), next at far right */}
          <button
            className={`slick-arrow slick-prev${index === 0 ? " slick-disabled" : ""}`}
            onClick={() => scroll("prev")}
            disabled={index === 0}
            aria-label="Previous partners"
          />
          <button
            className={`slick-arrow slick-next${index >= maxIndex ? " slick-disabled" : ""}`}
            onClick={() => scroll("next")}
            disabled={index >= maxIndex}
            aria-label="Next partners"
          />
        </div>
      </div>
    </div>
  );
}
