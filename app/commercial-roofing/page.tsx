import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Commercial Roofing NYC — Manhattan Roofing | Flat Roof & Coating Specialists",
  description:
    "Commercial roofing installations, replacements, and coatings for NYC businesses and property managers. Free estimates. Call (212) 495-9840.",
};

export default function CommercialRoofingPage() {
  return (
    <>
      <PageHeroSection
        title="Commercial Roofing"
        subtitle="Professional commercial roofing services for NYC businesses, landlords, and property managers across all five boroughs."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Commercial Roofing" },
        ]}
      />
      <ServiceDetailSection
        activeService="Commercial Roofing"
        sidebarImage="/images/worker-applying-roof-coating-roller.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Commercial Roofing for NYC Buildings"
        intro={[
          "We provide full-service commercial roofing for office buildings, retail spaces, warehouses, apartment complexes, and mixed-use properties throughout New York City.",
          "Our team understands the unique demands of commercial roofing in NYC — tight schedules, building management coordination, and compliance with NYC DOB requirements. We deliver on time and on budget.",
        ]}
        whatWeDo={[
          "Flat roof installations and full replacements (EPDM, TPO, built-up)",
          "Commercial roof coatings and weatherproofing",
          "Roof deck waterproofing and drainage solutions",
          "Preventive maintenance programs for property managers",
          "Emergency repairs to minimize business disruption",
          "Multi-unit residential and mixed-use building roofing",
          "NYC DOB compliance work and documentation",
        ]}
        whyChooseUs={[
          "30+ years of commercial roofing experience in New York City",
          "We work around your schedule to minimize tenant disruption",
          "Fully licensed and insured — all NYC requirements met",
          "Detailed written proposals with clear scope and timeline",
          "Ongoing maintenance programs available for property managers",
          "Free on-site estimates for any commercial property",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
