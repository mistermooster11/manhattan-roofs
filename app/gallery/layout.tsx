import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Before & After Gallery",
  description:
    "See Manhattan Roofing's work — before and after photos of flat roof installations, shingle replacements, skylight repairs, and storm damage work across NYC.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
