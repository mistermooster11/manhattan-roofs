"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import CraftHero from "@/components/custom/craft-catalog/CraftHero";

// [TODO: Replace all posts below with real blog content from Manhattan Roofing]
const posts = [
  {
    id: "post-1",
    title: "Flat Roof vs. Shingle Roof: Which Is Right for Your NYC Building?",
    excerpt:
      "Manhattan's housing stock spans everything from pre-war multi-families with flat roofs to townhouses with pitched shingle systems. Here's how to think through the decision for your property.",
    date: "May 2026",
    slug: "#",
  },
  {
    id: "post-2",
    title: "5 Signs Your Flat Roof Needs Repair Before It Becomes a Replacement",
    excerpt:
      "Catching flat roof problems early saves thousands. Here's what to look for — from ponding water to membrane bubbling — and when to call a roofer rather than waiting.",
    date: "April 2026",
    slug: "#",
  },
  {
    id: "post-3",
    title: "What to Do Immediately After a Storm Damages Your NYC Roof",
    excerpt:
      "High winds, hail, and falling debris can compromise a roof fast. This guide covers the first steps to take — and why not all storm damage is visible from the street.",
    date: "March 2026",
    slug: "#",
  },
  {
    id: "post-4",
    title: "Skylight Installation in NYC: What Building Owners Should Know Before Starting",
    excerpt:
      "Adding a skylight to a Manhattan co-op or brownstone involves more than just cutting a hole. From board approval to NYC DOB compliance, here's what to expect.",
    date: "February 2026",
    slug: "#",
  },
  {
    id: "post-5",
    title: "How to Choose a Roofer in New York City (Without Getting Burned)",
    excerpt:
      "Not all roofers in NYC operate the same way. Here's what to look for — owner-operated vs. subcontractor crews, warranties, licensing — and the questions to ask before hiring.",
    date: "January 2026",
    slug: "#",
  },
  {
    id: "post-6",
    title: "Why Roof Maintenance Plans Save NYC Building Owners Money Over Time",
    excerpt:
      "An annual inspection and maintenance plan catches small problems before they become expensive failures. Here's what a proper roofing maintenance visit should include.",
    date: "December 2025",
    slug: "#",
  },
];

export default function BlogPage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
      <CraftHero
        title="Roofing Tips & Resources"
        bgImage="https://manhattanroofs.com/wp-content/uploads/flat-roof-nyc.jpg"
        breadcrumbs={[{ label: "Blog" }]}
      />

      <div ref={ref} className="content-block-flex flex-module">
        <div className="inner inner--slim-1172">

          <div className={`content-block-head wide fadeInUpS wow${vis}`}>
            <div className="sub-heading">From the Manhattan Roofing Team</div>
            <h1 className="h2">NYC Roofing Tips &amp; Guides</h1>
            <p className="p2">
              Practical advice for New York City property owners and building managers — from
              our owner-operated roofing team.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "3rem",
              marginTop: "3rem",
            }}
            className="max-[700px]:grid-cols-1"
          >
            {posts.map((post, i) => (
              <div
                key={post.id}
                className={`fadeInUpS wow${vis}`}
                style={{
                  animationDelay: `${i * 0.08}s`,
                  borderBottom: "2px solid #101d2b",
                  paddingBottom: "2rem",
                }}
              >
                <p className="p3 ia-medium" style={{ marginBottom: "0.75rem" }}>
                  {post.date}
                </p>
                <h2 className="h4" style={{ marginBottom: "1rem" }}>
                  {post.title}
                </h2>
                <p className="p2 ia-dark">
                  {post.excerpt}
                </p>
                {/* [TODO: Link to actual post once published] */}
              </div>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}
