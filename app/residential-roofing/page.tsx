import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Residential Roofing NYC — Manhattan Roofing | Flat & Shingle Roof Specialists",
  description:
    "Expert residential roofing in Manhattan and all NYC boroughs. Flat roofs, shingle roofs, metal roofs, and skylights. Free on-site estimates. Call (212) 495-9840.",
};

export default function ResidentialRoofingPage() {
  return (
    <>
      <PageHeroSection
        title="Residential Roofing"
        subtitle="Expert residential roof installations, replacements, and repairs across Manhattan, Brooklyn, Queens, and The Bronx."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Residential Roofing" },
        ]}
      />
      <ServiceDetailSection
        activeService="Residential Roofing"
        sidebarImage="/images/roofing-crew-working-residential-roof-installation.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Residential Roofing Specialists in New York City"
        intro={[
          "Manhattan Roofing handles every type of residential roof in New York City — from flat EPDM and modified bitumen systems on brownstones and co-ops, to pitched shingle and metal roofs on townhouses and single-family homes.",
          "We are owner-operated with over 30 years of NYC construction experience. Every estimate is free, every quote is in writing, and every job is backed by a workmanship warranty.",
        ]}
        whatWeDo={[
          "Flat roof installations and replacements (EPDM, TPO, modified bitumen)",
          "Asphalt shingle and architectural shingle roof replacements",
          "Metal roofing installation and repair",
          "Skylight installation, repair, and replacement",
          "Parapet wall repair and waterproofing",
          "Storm damage assessment and repair",
          "Roof deck repairs and structural support",
        ]}
        whyChooseUs={[
          "Owner-operated with 30+ years of NYC construction experience",
          "Free on-site estimates — no pressure, no obligation",
          "Licensed and fully insured in New York City",
          "We work with co-op boards and condo management — we understand NYC requirements",
          "Written workmanship warranty on every installation",
          "Same-day emergency response when you need it most",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
