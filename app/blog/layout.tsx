import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roofing Tips & Resources — Manhattan Roofing",
  description:
    "NYC roofing tips, guides, and resources from Manhattan Roofing — covering flat roof maintenance, storm damage, skylights, and when to repair vs. replace your roof.",
  alternates: { canonical: "/blog" },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
