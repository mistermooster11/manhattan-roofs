"use client";

import { useState, useRef, useEffect } from "react";
import DoorSVG from "./svgs/DoorSVG";
import { accordionItems } from "@/lib/constants";
import InsightAccordionTabItem from "./accordions/InsightAccordionTabItem";
import InsightAccordionDataItem from "./accordions/InsightAccordionDataItem";

export default function Insights() {
  const [activeId, setActiveId] = useState("accordion-0");
  const activeIndex = accordionItems.findIndex((i) => i.id === activeId);
  const accordionRef = useRef<HTMLDivElement>(null);
  const accordionListRef = useRef<HTMLDivElement>(null);
  const decRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = accordionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Slide the dec arrow to the active item
  useEffect(() => {
    const list = accordionListRef.current;
    const dec = decRef.current;
    if (!list || !dec) return;
    const items = list.querySelectorAll<HTMLElement>(".accordion-item");
    const activeItem = items[activeIndex];
    if (!activeItem) return;
    const itemTop = activeItem.offsetTop;
    const itemHeight = activeItem.offsetHeight;
    dec.style.top = `${itemTop + itemHeight / 2}px`;
    dec.style.opacity = "1";
  }, [activeId, activeIndex]);

  return (
    <div className="front-insights ia-bg-dark">
      <div className="inner inner--slim-1172">
        <div className="front-insights__inner">

          {/* HEAD */}
          <div className="front-insights__head py-0 md:py-50">
            <div className="sub-heading sub-heading__white">What We Do</div>
            <h2 className="h3 ia-white">Our Most Common Services</h2>
            <div className="content-entry ia-white max-w-2xl">
              <p className="ia-white">
                From a leaking flat roof to a full shingle replacement — select a service below
                to see how Manhattan Roofing handles it and what you can expect from
                inspection through clean-up.
              </p>
            </div>
          </div>

          {/* BODY */}
          <div className="front-insights__in cleared">
            {/* LEFT: accordion */}
            <div className="front-insights__left">
              <div className="front-insights__accordion" ref={accordionRef}>
                {/* Single sliding dec arrow — trượt đến tab active */}
                <div className="accordion-item__dec" ref={decRef} />

                <div className="accordion" ref={accordionListRef}>
                  {accordionItems.map((item) => {
                    const isOpen = item.id === activeId;
                    return (
                      <InsightAccordionTabItem 
                      isOpen={isOpen}
                      setActiveId={setActiveId}
                      item={item}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT: accordion data panels */}
            <div className="front-insights__right">
              {accordionItems.map((item) => {
                const isOpen = item.id === activeId;
                return (
                  <InsightAccordionDataItem 
                  isOpen={isOpen}
                  item={item}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
