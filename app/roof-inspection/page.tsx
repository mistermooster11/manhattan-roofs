import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Roof Inspection NYC — Manhattan Roofing | Pre-Purchase & Assessment",
  description:
    "Professional roof inspections across Manhattan and all NYC boroughs. Pre-purchase inspections, storm damage assessments, and detailed written reports. Call (212) 495-9840.",
};

export default function RoofInspectionPage() {
  return (
    <>
      <PageHeroSection
        title="Roof Inspection & Assessment"
        subtitle="Detailed professional roof inspections for homeowners, property buyers, and building managers across all NYC boroughs."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Roof Inspection & Assessment" },
        ]}
      />
      <ServiceDetailSection
        activeService="Roof Inspection & Assessment"
        sidebarImage="/images/roofer-inspecting-asphalt-shingles-closeup.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Professional Roof Inspections in New York City"
        intro={[
          "A thorough roof inspection takes the guesswork out of roof health. Our experienced roofers examine every component — membrane, flashing, drains, parapet walls, chimneys, and skylights — and deliver a clear, written report of findings.",
          "Whether you are buying property, assessing storm damage, or want to know the condition of your existing roof before scheduling repairs, we give you the honest picture.",
        ]}
        whatWeDo={[
          "Full roof assessment with written condition report",
          "Pre-purchase property inspections for buyers and agents",
          "Storm damage documentation for insurance claims",
          "Flat roof membrane inspection and leak source identification",
          "Flashing, drain, and parapet wall assessment",
          "Chimney and skylight inspection",
          "Remaining useful life estimate with repair recommendations",
        ]}
        whyChooseUs={[
          "Honest, unbiased reports — we tell you what we see, not what sells a job",
          "30+ years of NYC roofing experience on every inspection",
          "Detailed written report provided after every visit",
          "We help property buyers understand exactly what they are purchasing",
          "Storm damage documentation accepted by major insurance carriers",
          "Licensed and insured — all NYC requirements met",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
