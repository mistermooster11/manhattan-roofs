import type { ReactNode } from "react";

export type Resource = { title: string; href: string; icon: string; external?: boolean };
export type CraftLink = { label: string; href: string };
export type NavItem  = { href: string; label: string };

export type StoryVideoData = {
  bg:       string;
  src:      string;
  title:    string;
  name:     string;
  position: string;
  readHref: string;
};

export type QuoteData = {
  text:     string;
  name:     string;
  position: string;
};

/* ── Per-section data shapes ── */

export type HeroData = {
  title:              string;
  description:        ReactNode;   // JSX paragraph(s)
  imageBg:            string;      // full CSS background value
  breadcrumbLabel:    string;      // last crumb, e.g. "Associations"
  breadcrumbParentLabel?: string;  // default "NCCER for Organizations"
  breadcrumbParentHref?:  string;  // default "/explore/"
};

export type LearnMoreData = {
  title:   string;
  content: ReactNode;  // rich JSX with h5 + p tags
};

export type ResourcesData = {
  title:     string;
  resources: Resource[];
};

export type CraftsData = {
  description: ReactNode;
  craftLinks:  CraftLink[];
  catalogHref?: string;
};

export type TestimonialsData = {
  videos: StoryVideoData[];
  quote?: QuoteData;
};

export type FlexFeatureData = {
  imageSrc:    string;
  title:       string;
  body:        ReactNode;
  buttonLabel: string;
  buttonHref:  string;
};

export type GetInTouchData = {
  body:        ReactNode;
  buttonLabel: string;
  buttonHref:  string;
};

/* ── Full page data ── */

export type ChannelPageData = {
  slug:         string;
  navItems:     NavItem[];
  hero:         HeroData;
  learnMore:    LearnMoreData;
  resources:    ResourcesData;
  crafts:       CraftsData;
  testimonials: TestimonialsData;
  flexFeature?: FlexFeatureData;
  getInTouch:   GetInTouchData;
};
