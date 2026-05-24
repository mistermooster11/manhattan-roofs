import type { Metadata } from "next";
import "./globals.css";
import "@/styles/common.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/footer/Footer";
import PageTransition from "@/components/custom/page-transition/PageTransition";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    default: "Manhattan Roofing | Roofing Specialists Serving Manhattan & All NYC Boroughs",
    template: "%s | Manhattan Roofing",
  },
  description:
    "Manhattan Roofing — owner-operated roofing specialists with 30+ years of construction experience. Flat roofs, shingle roofs, skylights, storm damage repair. Free on-site estimates. Call (212) 495-9840.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Manhattan Roofing",
    title: "Manhattan Roofing | Roofing Specialists Serving Manhattan & All NYC Boroughs",
    description:
      "Owner-operated roofing specialists with 30+ years of construction experience. Flat roofs, shingle roofs, skylights, storm damage repair. Free on-site estimates. Call (212) 495-9840.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manhattan Roofing | NYC Roofing Specialists",
    description:
      "Owner-operated roofing specialists with 30+ years of construction experience. Serving Manhattan & all NYC boroughs. Free estimates. (212) 495-9840.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Manhattan Roofing",
  telephone: "+12124959840",
  description:
    "Owner-operated roofing specialists with 30+ years of construction experience serving Manhattan and all five NYC boroughs.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York",
    addressRegion: "NY",
    addressCountry: "US",
  },
  areaServed: [
    "Manhattan, NY",
    "Brooklyn, NY",
    "Queens, NY",
    "The Bronx, NY",
    "Staten Island, NY",
  ],
  priceRange: "$$",
  openingHours: "Mo-Su 07:00-20:00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <PageTransition />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
