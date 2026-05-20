import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Quote",
  description:
    "Contact Manhattan Roofing for a free on-site estimate. Call (212) 495-9840 or fill out our online form. Serving Manhattan, Brooklyn, Queens, and The Bronx.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
