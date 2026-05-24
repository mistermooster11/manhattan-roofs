export type BlogPost = {
  slug: string;
  image: string;
  date: string;
  monthYear: string;
  category: string;
  categoryHref: string;
  title: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "/blog/how-to-spot-a-roof-leak-before-it-becomes-a-disaster/",
    image: "/images/roofer-inspecting-asphalt-shingles-closeup.jpg",
    date: "15",
    monthYear: "Mar '26",
    category: "Roof Maintenance",
    categoryHref: "/blog/",
    title: "How to Spot a Roof Leak Before It Becomes a Disaster",
    excerpt:
      "Water stains on the ceiling, musty smells in the attic — these are early signs that your roof needs attention. Learn what to look for and when to call a professional.",
  },
  {
    slug: "/blog/flat-roof-vs-pitched-roof-which-is-right-for-your-nyc-building/",
    image: "/images/modern-metal-roof-dormers-wooden-accents.jpg",
    date: "02",
    monthYear: "Feb '26",
    category: "Roofing Tips",
    categoryHref: "/blog/",
    title: "Flat Roof vs. Pitched Roof: Which Is Right for Your NYC Building?",
    excerpt:
      "Manhattan buildings often use flat roofs for practical reasons, but not every property is the same. We break down the pros, cons, and cost differences for NYC property owners.",
  },
];
