import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas — Manhattan, Brooklyn, Queens & The Bronx",
  description:
    "Manhattan Roofing serves Manhattan, Brooklyn, Queens, and The Bronx. Owner-operated roofing with 30+ years of construction experience. Free on-site estimates.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
