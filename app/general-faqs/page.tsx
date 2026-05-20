"use client";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";

const faqItems = [
  {
    id: "faq-1",
    question: "What areas do you serve?",
    answer:
      "Manhattan Roofing serves Manhattan, Brooklyn, Queens, and The Bronx. We come to you with free on-site estimates — no need to bring anything in. If you're not sure we cover your neighborhood, call us at (212) 495-9840 and we'll confirm right away.",
  },
  {
    id: "faq-2",
    question: "Do you offer free estimates?",
    answer:
      "Yes. We provide free on-site estimates for all roofing jobs — flat roofs, shingle roofs, skylights, storm damage, and everything in between. George comes out, looks at the roof, and gives you an honest price before any work begins. No pressure, no surprises.",
  },
  {
    id: "faq-3",
    question: "Do you use subcontractors?",
    answer:
      "No. Manhattan Roofing is owner-operated, and for repairs, George does the work himself. You know exactly who is on your roof and who is accountable for the outcome. This is one of the core reasons our clients trust us — you're not handed off to a rotating crew.",
  },
  {
    id: "faq-4",
    question: "Do you handle both flat roofs and shingle roofs?",
    answer:
      "Yes. We install and repair flat (low-slope) roofing systems — EPDM, TPO, modified bitumen — as well as asphalt shingle roofs for townhouses and single-family homes across all boroughs. We also handle skylights, gutters, insulation upgrades, and storm damage.",
  },
  {
    id: "faq-5",
    question: "Is your work warrantied?",
    answer:
      "Yes. All of our work comes with a warranty on workmanship. We stand behind every repair and installation — if something we fixed fails because of how it was done, we come back and make it right. Warranty terms vary by project type; ask George directly when he comes out for the estimate.",
  },
  {
    id: "faq-6",
    question: "Are you compliant with NYC DOB requirements?",
    answer:
      "Yes. Manhattan Roofing complies with all NYC Department of Buildings standards for roofing work. Our 30+ years of construction experience in New York City means we know the codes, the inspection process, and what's required for different building types — residential co-ops, commercial buildings, and everything in between.",
  },
  {
    id: "faq-7",
    question: "How quickly can you come out?",
    answer:
      "We work within your schedule and aim to get on-site for estimates within a few days. For active leaks or storm damage, call us directly at (212) 495-9840 — we prioritize urgent situations and will give you an honest timeframe based on current availability.",
  },
  {
    id: "faq-8",
    question: "What should I do if I have an active roof leak?",
    answer:
      "Call us at (212) 495-9840. In the meantime, if water is actively coming in, place containers to catch it and protect flooring and furniture. Don't attempt to patch from the inside — that won't stop the source. We'll get out to assess it, find where the water is actually entering, and give you a proper fix.",
  },
];

export default function FAQsPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
      <div ref={ref} className="content-block-flex flex-module">
        <div className="inner inner--slim-1172">

          <div className={`content-block-head wide fadeInUpS wow${vis}`}>
            <div className="sub-heading">Help Center</div>
            <h1 className="h2">Frequently Asked Questions</h1>
            <p className="p2">
              Answers to the most common questions about Manhattan Roofing services,
              pricing, and coverage. Don&apos;t see your question?{" "}
              <a href="tel:2124959840" className="ia-link">Call us at (212) 495-9840</a>.
            </p>
          </div>

          <div className="content-block-in wide">
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {faqItems.map((item, i) => (
                <div
                  key={item.id}
                  className={`fadeInUpS wow${vis}`}
                  style={{
                    animationDelay: `${i * 0.06}s`,
                    borderBottom: "1px solid #e0e0e0",
                  }}
                >
                  <button
                    onClick={() => setOpenId(openId === item.id ? null : item.id)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "2rem 0",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "1.5rem",
                    }}
                  >
                    <span className="p1" style={{ fontWeight: 600 }}>
                      {item.question}
                    </span>
                    <span
                      style={{
                        fontSize: "2rem",
                        color: "#5A0006",
                        flexShrink: 0,
                        transform: openId === item.id ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                        lineHeight: 1,
                      }}
                    >
                      +
                    </span>
                  </button>
                  {openId === item.id && (
                    <div className="content-entry p2 ia-dark" style={{ paddingBottom: "2rem" }}>
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* CTA strip */}
      <div className="flex-module ia-bg-sky" style={{ padding: "5rem 0" }}>
        <div className="inner inner--slim-1172" style={{ textAlign: "center" }}>
          <div className="sub-heading">Still Have Questions?</div>
          <h2 className="h3" style={{ marginBottom: "1.5rem" }}>
            Call Us — Free On-Site Estimates, No Pressure
          </h2>
          <p className="p2" style={{ marginBottom: "2.5rem" }}>
            George is happy to answer any roofing question over the phone and
            come out for a free on-site estimate. Manhattan, Brooklyn, Queens, and The Bronx.
          </p>
          <a href="tel:2124959840" className="ia-btn">
            <em className="ia-b ia-b-1" /><em className="ia-b ia-b-2" />
            <em className="ia-b ia-b-3" /><em className="ia-b ia-b-4" />
            <span>Call (212) 495-9840</span>
          </a>
        </div>
      </div>
    </main>
  );
}
