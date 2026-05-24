import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Emergency Roof Repair NYC — Manhattan Roofing | Same-Day Service",
  description:
    "Emergency roof repair in Manhattan and all NYC boroughs. Storm damage, active leaks, fallen debris. Same-day response. Call (212) 495-9840.",
};

export default function EmergencyRoofRepairPage() {
  return (
    <>
      <PageHeroSection
        title="Emergency Roof Repair"
        subtitle="Fast, professional emergency roof repairs across Manhattan and all NYC boroughs — call us and we move."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Emergency Roof Repair" },
        ]}
      />
      <ServiceDetailSection
        activeService="Emergency Roof Repair"
        sidebarImage="/images/roofing-crew-aerial-safety-harness-installation.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Emergency Roof Repair — NYC Fast Response"
        intro={[
          "When a storm hits, a tree branch comes down, or you discover an active leak, you need a roofer on site fast — not a callback window. Manhattan Roofing dispatches crews the same day for emergency situations across all five NYC boroughs.",
          "We triage the situation, stop the immediate damage, and give you a clear plan for permanent repair — all in writing, all with honest pricing.",
        ]}
        whatWeDo={[
          "Same-day dispatch for active leaks and storm damage",
          "Emergency tarping and temporary weatherproofing",
          "Storm damage assessment and repair",
          "Fallen debris removal and structural assessment",
          "Flat roof membrane emergency patching",
          "Flashing failure emergency repair",
          "Insurance documentation for storm and wind damage",
        ]}
        whyChooseUs={[
          "Same-day emergency response — we pick up and we show up",
          "Owner-operated: you deal with the decision-maker, not a dispatcher",
          "30+ years of NYC emergency roofing experience",
          "We stabilize the roof first and give you a permanent repair plan in writing",
          "Fully licensed and insured — no liability on you",
          "Transparent pricing — no emergency price gouging",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
