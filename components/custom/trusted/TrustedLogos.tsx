"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

export default function TrustedLogos() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cancelled = false;
    let ctx: any;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.fromTo(
          ".trusted__heading",
          { y: 24, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, ease: "power3.out", clearProps: "all",
            scrollTrigger: { trigger: ".trusted__heading", start: "top 92%", once: true },
          }
        );
        gsap.fromTo(
          ".trusted__logo-item",
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.12, clearProps: "all",
            scrollTrigger: { trigger: ".trusted__logos", start: "top 92%", once: true },
          }
        );
      }, sectionRef);
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section className="trusted" ref={sectionRef}>
      <div className="trusted__inner">
        <h2 className="trusted__heading">
          Trusted by New York City Property Owners &amp; Building Managers
        </h2>
        <div className="trusted__logos">
          <div className="trusted__logo-item" style={{ padding: "12px 24px", background: "rgba(255,255,255,0.1)", borderRadius: "8px" }}>
            <p style={{ color: "#fff", fontWeight: 700, fontSize: "1.4rem", margin: 0 }}>Manhattan</p>
          </div>
          <div className="trusted__logo-item" style={{ padding: "12px 24px", background: "rgba(255,255,255,0.1)", borderRadius: "8px" }}>
            <p style={{ color: "#fff", fontWeight: 700, fontSize: "1.4rem", margin: 0 }}>Brooklyn</p>
          </div>
          <div className="trusted__logo-item" style={{ padding: "12px 24px", background: "rgba(255,255,255,0.1)", borderRadius: "8px" }}>
            <p style={{ color: "#fff", fontWeight: 700, fontSize: "1.4rem", margin: 0 }}>Queens</p>
          </div>
          <div className="trusted__logo-item" style={{ padding: "12px 24px", background: "rgba(255,255,255,0.1)", borderRadius: "8px" }}>
            <p style={{ color: "#fff", fontWeight: 700, fontSize: "1.4rem", margin: 0 }}>The Bronx</p>
          </div>
        </div>
        <p className="trusted__disclaimer text-center text-xs mt-4">
          Serving all five NYC boroughs — free on-site estimates across the metro area.
        </p>
      </div>
    </section>
  );
}
