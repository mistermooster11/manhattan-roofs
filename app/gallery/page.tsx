"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import CraftHero from "@/components/custom/craft-catalog/CraftHero";

const galleryItems = [
  {
    label: "Flat Roof Installation — Manhattan Multi-Family Building",
    image: "/images/worker-applying-roof-coating-roller.jpg",
  },
  {
    label: "Flat Roof Repair — NYC Commercial Property",
    image: "/images/chimney-inspection-repair-rooftop-worker.jpg",
  },
  {
    label: "Shingle Roof Replacement — NYC Townhouse",
    image: "/images/modern-home-slate-roof-mountain-valley.jpg",
  },
  {
    label: "Skylight Installation — Manhattan Brownstone",
    image: "/images/roofing-crew-aerial-safety-harness-installation.jpg",
    // [TODO: Replace with real Manhattan Roofing skylight photo when available]
  },
];

export default function GalleryPage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
      <CraftHero
        title="Our Work"
        bgImage="/images/roofing-crew-working-residential-roof-installation.jpg"
        breadcrumbs={[{ label: "Gallery" }]}
      />

      <div ref={ref} className="content-block-flex flex-module">
        <div className="inner inner--slim-1172">
          <div className={`content-block-head wide fadeInUpS wow${vis}`}>
            <div className="sub-heading">Job Gallery</div>
            <h1 className="h2">Roofing Work Across NYC</h1>
            <p className="p2">
              A sample of roofing jobs completed by Manhattan Roofing throughout
              Manhattan and NYC. Flat roofs, shingle roofs, skylights, and storm damage —
              every job is owner-operated with warrantied workmanship.
            </p>
          </div>

          {/* 2-column grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "2rem",
              marginTop: "3rem",
            }}
            className="max-[600px]:grid-cols-1"
          >
            {galleryItems.map((item, i) => (
              <div
                key={item.label}
                className={`fadeInUpS wow${vis}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  style={{
                    aspectRatio: "4/3",
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "#5A0006",
                    borderRadius: "4px",
                    marginBottom: "1rem",
                  }}
                />
                <p className="p3 ia-medium">{item.label}</p>
              </div>
            ))}
          </div>

          <div
            className={`fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.4s", marginTop: "4rem", textAlign: "center" }}
          >
            <p className="p2" style={{ marginBottom: "2rem" }}>
              Want to see more of our work? Call us at{" "}
              <a href="tel:2124959840" className="ia-link">(212) 495-9840</a> — we&apos;re
              happy to discuss your project and what we&apos;ve done for similar jobs.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
