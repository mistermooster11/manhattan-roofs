"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import StoryVideo from "./StoryVideo";
import type { TestimonialsData } from "./types";

export default function ChannelTestimonials({ data }: { data: TestimonialsData }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div id="testimonials" className="section-page">
      <div ref={ref} className={`front-testimonial ia-bg-dark fadeIn wow${vis}`}>
        <div className="inner inner--slim-1172">
          <h2
            className={`h3 ia-white fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.1s" }}
          >
            Testimonials
          </h2>
        </div>

        <div className="inner inner--slim-1172">
          <div className="front-testimonial__columns ia-white cleared">
            {data.videos.map((v) => (
              <div key={v.src} className="front-testimonial__column">
                <StoryVideo {...v} />
              </div>
            ))}
          </div>

          {/* Featured Quote */}
          {data.quote && (
          <div className="featured__quote cleared">
            <div className="featured__quote-left no-image">
              <div className={`story-item__sub-title fadeInUpS wow${vis} ia-white`}>
                <i className="icon-nccer" aria-hidden="true" />
                Quote
              </div>
              <div className="featured__quote-in">
                <svg
                  className={`fadeIn wow${vis}`}
                  width="16" height="15" viewBox="0 0 16 15"
                  fill="none" xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M9.83486 8.85366V15H16V8.85366H12.9174C12.9174 5.34146 13.578 3.95122 15.9266 3.14634V0C10.9358 1.53659 9.83486 4.68293 9.83486 8.85366ZM0 15H6.16514V8.85366H3.15596C3.08257 5.34146 3.81651 3.95122 6.16514 3.14634V0C1.17431 1.53659 0 4.68293 0 8.85366V15Z"
                    fill="currentColor"
                  />
                </svg>
                <div
                  className={`featured__quote-text fadeInUpS wow${vis} content-entry ia-white h5 ia-margin-2`}
                  style={{ animationDelay: "0.1s" }}
                >
                  &ldquo;{data.quote.text}&rdquo;
                </div>
                <div className="story-person-info no-photo">
                  <div className="story-person-text">
                    <div
                      className={`story-video__name fadeInUpS wow${vis} ia-white`}
                      style={{ animationDelay: "0.1s" }}
                    >
                      -{data.quote.name}
                    </div>
                    <div
                      className={`story-video__position fadeInUpS wow${vis} ia-sky`}
                      style={{ animationDelay: "0.2s" }}
                    >
                      {data.quote.position}
                    </div>
                    <div className="ia-margin-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}
