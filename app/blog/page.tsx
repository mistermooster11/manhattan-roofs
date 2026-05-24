import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import BlogSection from "@/components/custom/blog/BlogSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Blog — Manhattan Roofing | NYC Roofing Tips & Resources",
  description:
    "Roofing tips, guides, and resources for New York City property owners and building managers — from the Manhattan Roofing team.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeroSection
        title="Roofing Tips & Resources"
        subtitle="Practical advice for NYC property owners and building managers from our owner-operated roofing team."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <BlogSection />
      <CTAFormSection />
    </>
  );
}
