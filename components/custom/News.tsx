"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

const newsItems = [
  {
    title: "NCCER's 2025 Annual Report: Building the Skilled Workforce of Tomorrow",
    bg: "https://www.nccer.org/media/2026/04/nccer-2025-annual-report-thumbnail.jpg",
    href: "https://www.nccer.org/newsroom/nccers-2025-annual-report-building-the-skilled-workforce-of-tomorrow/",
    category: "NCCER News and Updates",
    categoryHref: "https://www.nccer.org/newsroom/?category=582",
    date: "04/02/2026",
    type: "Press Release",
    typeHref: "https://www.nccer.org/newsroom/?type=7",
  },
  {
    title: "Survey: Construction Craft Professions Continue to Offer Strong Salaries",
    bg: "https://www.nccer.org/media/2026/04/2026_Construction_Craft_Salary_Survey_8.5x11_v-480x621.jpg",
    href: "https://www.nccer.org/newsroom/survey-construction-craft-professions-continue-to-offer-strong-salaries/",
    category: "Research",
    categoryHref: "https://www.nccer.org/newsroom/?category=586",
    date: "04/01/2026",
    type: "Infographic",
    typeHref: "https://www.nccer.org/newsroom/?type=824",
  },
  {
    title: "BuilderFax Mobile Wallet Enables Instant Sharing of NCCER Credentials",
    bg: "https://www.nccer.org/media/2026/02/NCCER-DigitalWallet-443x559v2.jpg",
    href: "https://www.nccer.org/newsroom/builderfax-mobile-wallet-enables-instant-sharing-of-nccer-credentials/",
    category: "NCCER News and Updates",
    categoryHref: "https://www.nccer.org/newsroom/?category=582",
    date: "02/03/2026",
    type: "Press Release",
    typeHref: "https://www.nccer.org/newsroom/?type=7",
  },
  {
    title: "New Report: Craft Training Remains Powerful, Yet Underutilized Tool for Contractors",
    bg: "https://www.nccer.org/media/2026/01/DSC04067_color-corrected-443x559-1.jpg",
    href: "https://www.nccer.org/newsroom/new-report-craft-training-remains-powerful-yet-underutilized-tool-for-contractors/",
    category: "Research",
    categoryHref: "https://www.nccer.org/newsroom/?category=586",
    date: "01/26/2026",
    type: "Press Release",
    typeHref: "https://www.nccer.org/newsroom/?type=7",
  },
];

export default function News() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const headRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headRef, { once: true, margin: "0px 0px -80px 0px" });
  const vis = isInView ? " is-visible" : "";

  const listRef = useRef<HTMLDivElement>(null);
  const listInView = useInView(listRef, { once: true, margin: "0px 0px -80px 0px" });
  const listVis = listInView ? " is-visible" : "";

  const slideIndex = useRef(0);

  const scroll = (dir: "prev" | "next") => {
    if (!sliderRef.current) return;
    const total = newsItems.length;
    const newIndex = dir === "next"
      ? Math.min(slideIndex.current + 1, total - 1)
      : Math.max(slideIndex.current - 1, 0);
    slideIndex.current = newIndex;
    const slideW = 320 + 20; // width + margin-right
    sliderRef.current.style.transform = `translateX(-${newIndex * slideW}px)`;
  };

  return (
    <div className="front-news">
      <div className="inner inner--slim-1172 cleared">

        {/* Decorative SVG — positioned to the left of inner */}
        <div className={`front-news__dec fadeInLeft wow${vis}`}>
          <svg width="292" height="486" viewBox="0 0 292 486" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_1207_31801" fill="white">
              <path fillRule="evenodd" clipRule="evenodd" d="M292 0H0V114H292V0ZM292 186H0V300H292V186ZM0 372H292V486H0V372Z" />
            </mask>
            <path fillRule="evenodd" clipRule="evenodd" d="M292 0H0V114H292V0ZM292 186H0V300H292V186ZM0 372H292V486H0V372Z" fill="#FD6A3C" />
            <path d="M0 0V-1H-1V0H0ZM292 0H293V-1H292V0ZM0 114H-1V115H0V114ZM292 114V115H293V114H292ZM0 186V185H-1V186H0ZM292 186H293V185H292V186ZM0 300H-1V301H0V300ZM292 300V301H293V300H292ZM292 372H293V371H292V372ZM0 372V371H-1V372H0ZM292 486V487H293V486H292ZM0 486H-1V487H0V486ZM0 1H292V-1H0V1ZM1 114V0H-1V114H1ZM292 113H0V115H292V113ZM291 0V114H293V0H291ZM0 187H292V185H0V187ZM1 300V186H-1V300H1ZM292 299H0V301H292V299ZM291 186V300H293V186H291ZM292 371H0V373H292V371ZM293 486V372H291V486H293ZM0 487H292V485H0V487ZM-1 372V486H1V372H-1Z" fill="#FD6A3C" mask="url(#path-1-inside-1_1207_31801)" />
          </svg>
        </div>

        {/* Head: float left 330px */}
        <div ref={headRef} className="front-news__head">
          <h2 className={`h1 fadeInUpS wow${vis}`}>NCCER Featured News</h2>
          <div>
            <a
              href="https://www.nccer.org/newsroom/"
              className={`ia-link ia-link--arrow wow${vis}`}
            >
              <i className="icon-arrow-right" />
              <span>Explore All News</span>
            </a>
          </div>
        </div>

        {/* Slider: margin-left 330px */}
        <div ref={listRef} className={`front-news__list fadeInRight wow${listVis}`}>
          {/* Slider container — overflows right by 120px, arrows inside */}
          <div className="front-news__slider home-slider">
            {/* Arrow prev */}
            <button
              className="slick-arrow slick-prev"
              onClick={() => scroll("prev")}
              aria-label="Previous news"
            />

            {/* slick-list > slick-track > slick-slide */}
            <div className="slick-list">
              <div className="slick-track" ref={sliderRef}>
                {newsItems.map((item) => (
                  <div key={item.href} className="slick-slide">
                    <div className="front-news__item px-4!">
                      {/* Full-card link */}
                      <a className="post-link" href={item.href}>
                        <span className="sr-only">{item.title}</span>
                      </a>
                      {/* Image */}
                      <div className="front-news__item-image">
                        <div style={{ background: `url(${item.bg}) no-repeat 50% 50% / cover` }} />
                      </div>
                      {/* Category */}
                      <a className="category-title" href={item.categoryHref}>
                        {item.category}
                      </a>
                      {/* Title */}
                      <h3 className="h6 ia-margin-1">{item.title}</h3>
                      {/* Meta */}
                      <div className="front-news__meta">
                        {item.date} <span /> <a href={item.typeHref}>{item.type}</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow next */}
            <button
              className="slick-arrow slick-next right-10%"
              onClick={() => scroll("next")}
              aria-label="Next news"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
