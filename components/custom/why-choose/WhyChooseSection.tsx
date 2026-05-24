"use client";

import { useEffect, useRef } from "react";
import { whyCards } from "@/data/why-choose";

export default function WhyChooseSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let ctx: any;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.from(gridRef.current?.querySelectorAll(".why-card") ?? [], {
          y: 50,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 82%",
            once: true,
          },
        });
      });
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section className="why-choose-section">
      <div className="why-choose-section__container">
        <div className="why-choose-section__grid" ref={gridRef}>
          {whyCards.map((card) => (
            <div key={card.title} className="why-card">
              <div className="why-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none" aria-hidden="true">
                  <path d="M19.0001 1.58301C16.8205 1.58574 14.6902 2.23105 12.8754 3.43822C11.0607 4.64539 9.64216 6.36083 8.79727 8.36998C7.95238 10.3791 7.71863 12.5928 8.12526 14.7341C8.53189 16.8754 9.56085 18.8493 11.0834 20.4088V34.833C11.0843 35.1029 11.1541 35.3681 11.2862 35.6035C11.4184 35.8388 11.6085 36.0364 11.8385 36.1776C12.0685 36.3188 12.3308 36.3989 12.6005 36.4102C12.8702 36.4215 13.1382 36.3636 13.3793 36.2422L19.0001 33.4397L24.6209 36.2422C24.8415 36.3552 25.0856 36.4149 25.3334 36.4163C25.6299 36.4173 25.9206 36.335 26.1726 36.1788C26.4008 36.0362 26.5889 35.8378 26.7191 35.6023C26.8493 35.3669 26.9173 35.1021 26.9168 34.833V20.4088C28.4394 18.8493 29.4683 16.8754 29.8749 14.7341C30.2816 12.5928 30.0478 10.3791 29.2029 8.36998C28.358 6.36083 26.9395 4.64539 25.1248 3.43822C23.3101 2.23105 21.1797 1.58574 19.0001 1.58301Z" fill="var(--color-accent)" />
                </svg>
              </div>
              <div className="why-card__body">
                <h3 className="why-card__title">{card.title}</h3>
                <p className="why-card__text">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
