export type CraftItem = {
  slug:        string;
  title:       string;
  categories:  string[];
  disciplines: string[];
  hasAssessment:   boolean;
  hasTranslation:  boolean;
};

export const CATEGORIES = ["Flat Roofing", "Shingle Roofing", "Inspections & Maintenance"] as const;
export const DISCIPLINES = ["Residential", "Commercial"] as const;

export const crafts: CraftItem[] = [
  {
    slug: "flat-roof-installation",
    title: "Flat Roof Installation",
    categories: ["Flat Roofing"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "flat-roof-repair",
    title: "Flat Roof Repair",
    categories: ["Flat Roofing"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "shingle-roof-installation",
    title: "Shingle Roof Installation & Replacement",
    categories: ["Shingle Roofing"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "roof-repair",
    title: "Roof Repair & Leak Detection",
    categories: ["Flat Roofing", "Shingle Roofing"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "storm-damage-repair",
    title: "Wind & Storm Damage Repair",
    categories: ["Flat Roofing", "Shingle Roofing"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "skylight-installation-repair",
    title: "Skylight Installation & Repair",
    categories: ["Flat Roofing", "Shingle Roofing"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "roof-gutter-cleaning",
    title: "Roof & Gutter Cleaning",
    categories: ["Inspections & Maintenance"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "roof-maintenance-plans",
    title: "Roof Maintenance Plans",
    categories: ["Inspections & Maintenance"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "roof-attic-inspection",
    title: "Roof & Attic Inspection",
    categories: ["Inspections & Maintenance"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "energy-insulation",
    title: "Energy & Insulation Solutions",
    categories: ["Inspections & Maintenance"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
];
