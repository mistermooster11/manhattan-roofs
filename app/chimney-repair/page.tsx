import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Chimney Repair & Waterproofing NYC — Manhattan Roofing",
  description:
    "Expert chimney repair, repointing, and waterproofing in Manhattan and all NYC boroughs. Stop leaks before they cause interior damage. Free estimates. Call (212) 495-9840.",
};

export default function ChimneyRepairPage() {
  return (
    <>
      <PageHeroSection
        title="Chimney Repair & Waterproofing"
        subtitle="Professional chimney repair, repointing, and waterproofing to stop leaks and protect your home or building."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Chimney Repair & Waterproofing" },
        ]}
      />
      <ServiceDetailSection
        activeService="Chimney Repair & Waterproofing"
        sidebarImage="/images/chimney-inspection-repair-rooftop-worker.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Chimney Repair & Waterproofing Across NYC"
        intro={[
          "A damaged or deteriorating chimney is one of the most common sources of roof leaks in New York City brownstones, townhouses, and older buildings. Cracked mortar joints, failed flashing, and deteriorated crowns let water in fast.",
          "Our team performs full chimney assessments and repairs — from repointing mortar joints to replacing chimney caps, relaying flashing, and applying waterproof sealants that stop leaks at the source.",
        ]}
        whatWeDo={[
          "Chimney mortar repointing and brick repair",
          "Chimney cap installation and replacement",
          "Chimney flashing repair and full reflashing",
          "Waterproof sealant application to stop water infiltration",
          "Chimney crown repair and reconstruction",
          "Interior leak investigation traced to chimney source",
          "Full chimney assessment with written findings",
        ]}
        whyChooseUs={[
          "NYC specialty — we understand pre-war brownstone and townhouse chimney construction",
          "We find the actual leak source, not just patch the symptom",
          "Written report and clear estimate before any work begins",
          "Licensed and insured for all chimney and masonry work in NYC",
          "30+ years of NYC construction experience on the job",
          "Free on-site estimates — no obligation",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
