import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roofing FAQs — Manhattan Roofing",
  description:
    "Common questions about Manhattan Roofing services — service area, free estimates, warranties, flat vs shingle roofs, subcontractors, and NYC DOB compliance.",
  alternates: { canonical: "/general-faqs" },
};

export default function FAQsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
