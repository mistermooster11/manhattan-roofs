import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        // [TODO: Change disallow to allow "/" when moving to production domain]
        disallow: "/",
      },
    ],
    // [TODO: Replace with production domain when site goes live]
    sitemap: "https://manhattanroofing.com/sitemap.xml",
  };
}
