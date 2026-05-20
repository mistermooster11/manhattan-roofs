import type { MetadataRoute } from "next";
import { crafts } from "@/data/craft-catalog/crafts";

// [TODO: Replace with production domain when site goes live]
const BASE = "https://manhattanroofing.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                         lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/craft-catalog`,      lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/contact-us`,         lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/general-faqs`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/gallery`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/blog`,               lastModified: new Date(), changeFrequency: "weekly",  priority: 0.6 },
    { url: `${BASE}/service-areas`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/privacy-policy`,     lastModified: new Date(), changeFrequency: "yearly",  priority: 0.2 },
  ];

  const servicePages: MetadataRoute.Sitemap = crafts.map((craft) => ({
    url: `${BASE}/craft-catalog/${craft.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages];
}
