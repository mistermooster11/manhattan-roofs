"use client";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";

export interface LevelItem {
  code: string;
  title: string;
  link: string;
}

export interface CurriculumLevel {
  label: string;
  items: LevelItem[];
  purchaseHref?: string;
}

interface CurriculumDetailsProps {
  editionLabel: string;
  competencyLinks: { level: string; href: string }[];
  catalogPdfHref: string;
  levels: CurriculumLevel[];
}

function LevelItemRow({ code, title, link }: LevelItem) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`level-item${open ? " opened" : ""}`}>
      <a className="level-item-title" href="javascript:;" onClick={() => setOpen((o) => !o)}>
        <div className="level-item-title-first h6 ia-medium">{code}</div>
        <div className="level-item-title-hours" />
        <i className="icon-arr-down" />
      </a>
      <div className="level-item-container" style={open ? { display: "block" } : {}}>
        <div className="content-entry ia-sky p3">
          <p>{title}</p>
          <p>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Purchase Online Training
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CurriculumDetails({
  editionLabel,
  competencyLinks,
  catalogPdfHref,
  levels,
}: CurriculumDetailsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  const [activeLevel, setActiveLevel] = useState(0);

  return (
    <div id="curriculum_details" className="section-page">
      <div ref={ref} className={`curriculum-details ia-bg-dark fadeIn wow${vis}`}>
        <div className="inner">
          {/* Head */}
          <div className="curriculum-details-head">
            <div className="curriculum-details-head-left">
              <h2
                className={`h3 ia-white ia-margin-1 fadeInUpS wow${vis}`}
                style={{ animationDelay: "0.1s" }}
              >
                Curriculum Details
              </h2>
              <div
                className={`content-entry ia-white fadeInUpS wow${vis}`}
                style={{ animationDelay: "0.2s" }}
              >
                <h5>{editionLabel}</h5>
                <table style={{ borderCollapse: "collapse", width: "100%" }}>
                  <tbody>
                    <tr>
                      <td style={{ width: "25%" }}>
                        <h6>Competencies &amp; Objectives Lists</h6>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "25%" }}>
                        <ul>
                          {competencyLinks.map((cl, i) => (
                            <li key={i}>
                              <strong>{cl.level}:</strong>{" "}
                              <a href={cl.href} target="_blank" rel="noopener noreferrer">
                                Click here
                              </a>
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="curriculum-details-head-right">
              <a
                href={catalogPdfHref}
                target="_blank"
                rel="noopener noreferrer"
                className="ia-link ia-link--arrow ia-link--white"
              >
                <i className="icon-download" />
                <span>View full Curriculum Catalog</span>
              </a>
            </div>
          </div>

          {/* Level tabs */}
          <div
            className={`levels-wrap fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="level-titles">
              {levels.map((lv, i) => (
                <a
                  key={i}
                  className={`level-title${activeLevel === i ? " active" : ""}`}
                  href="javascript:;"
                  onClick={() => setActiveLevel(i)}
                >
                  {lv.label}
                </a>
              ))}
            </div>
            <div className="level-list">
              {levels.map((lv, li) => (
                <div
                  key={li}
                  className="level-container"
                  style={{ display: activeLevel === li ? "block" : "none" }}
                >
                  {lv.items.map((item) => (
                    <LevelItemRow key={item.code + li} {...item} />
                  ))}
                  {lv.purchaseHref && (
                    <div className="text-right">
                      <a
                        href={lv.purchaseHref}
                        className="ia-link ia-link--arrow ia-link--white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="icon-books" />
                        <span>
                          Purchase Materials <em className="icon-external" />
                        </span>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
