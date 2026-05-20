"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

export interface InstructorResource {
  title: string;
  description: string;
  linkHref: string;
  linkLabel: string;
}

export default function InstructorResources({ resources }: { resources: InstructorResource[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div id="instructor_resources" className="section-page">
      <div ref={ref} className={`instructor-resources fadeIn wow${vis}`}>
        <div className="inner inner--slim-1172">
          <h2
            className={`h3 ia-dark fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.1s" }}
          >
            Instructor Resources
          </h2>
          <div
            className={`instructor-resources-in fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.2s" }}
          >
            {resources.map((res, i) => (
              <div key={i} className="instructor-resources-left mob-accordion-wrap">
                <h3 className="h5 mob-accordion-title ia-dark current">{res.title}</h3>
                <div className="mob-accordion-desk" style={{ display: "block" }}>
                  <div className="content-entry p2 ia-dark">
                    <p>{res.description}</p>
                  </div>
                  <div className="instructor-resources-download">
                    <a
                      href={res.linkHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ia-link ia-link--arrow ia-dark"
                    >
                      <i className="icon-arrow-right" />
                      <span>
                        {res.linkLabel} <em className="icon-external" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
