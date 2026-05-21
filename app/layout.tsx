import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "@/styles/homepage.css";
import "@/styles/contact.css";
import "@/styles/channel.css";
import "@/styles/faq.css";
import "@/styles/craft-catalog.css";
import "@/styles/programs.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
});

// [TODO: Replace with production domain when site goes live]
const SITE_URL = "https://manhattanroofing.com";

export const metadata: Metadata = {
  title: {
    default: "Manhattan Roofing | Roofing Specialists Serving Manhattan & All NYC Boroughs",
    template: "%s | Manhattan Roofing",
  },
  description:
    "Manhattan Roofing — owner-operated roofing specialists with 30+ years of construction experience. Flat roofs, shingle roofs, skylights, storm damage repair. Free on-site estimates. Call (212) 495-9840.",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Manhattan Roofing",
    title: "Manhattan Roofing | Roofing Specialists Serving Manhattan & All NYC Boroughs",
    description:
      "Owner-operated NYC roofing. Flat roofs, shingle roofs, skylights, storm damage. Free on-site estimates. Call (212) 495-9840.",
    images: [
      {
        url: "/images/roofer-installing-shingles-aerial-view.jpg",
        width: 1024,
        height: 683,
        alt: "Manhattan Roofing — Flat roof installation in NYC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manhattan Roofing | Roofing Specialists Serving Manhattan & All NYC Boroughs",
    description:
      "Owner-operated NYC roofing. Flat roofs, shingle roofs, skylights & storm damage. Free on-site estimates. Call (212) 495-9840.",
    images: ["https://manhattanroofs.com/wp-content/uploads/flat-roof-nyc.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Manhattan Roofing",
  url: SITE_URL,
  telephone: "+12124959840",
  // [TODO: Add Manhattan Roofing email address]
  image: "https://manhattanroofs.com/wp-content/uploads/flat-roof-nyc.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manhattan",
    addressRegion: "NY",
    addressCountry: "US",
  },
  // [TODO: Confirm business hours with client — update opens/closes accordingly]
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  areaServed: [
    { "@type": "City", name: "Manhattan" },
    { "@type": "City", name: "Brooklyn" },
    { "@type": "City", name: "Queens" },
    { "@type": "City", name: "The Bronx" },
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "30",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
