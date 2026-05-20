"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import CraftHero from "@/components/custom/craft-catalog/CraftHero";

const areas = [
  {
    slug: "manhattan",
    region: "Manhattan",
    headline: "Roofing Services in Manhattan, NYC",
    description:
      "Manhattan is our home base. We serve all Manhattan neighborhoods — from pre-war co-ops on the Upper West Side to commercial flat roofs in Midtown and townhouses in the Village. Manhattan's dense building stock requires a roofer who knows the specific challenges: parapet walls, tight equipment access, NYC DOB compliance, and the building types common to every block. That's what 30+ years of construction experience provides.",
    callouts: [
      "Flat roof installation and repair for walk-ups and commercial buildings",
      "Shingle roofing for townhouses and row houses",
      "Skylight installation in pre-war and post-war buildings",
      "NYC DOB compliant work — no shortcuts",
    ],
    neighborhoods:
      "Upper West Side • Upper East Side • Harlem • East Harlem • Washington Heights • Inwood • Morningside Heights • Hamilton Heights • Midtown East • Midtown West • Hell's Kitchen • Murray Hill • Kips Bay • Gramercy • Flatiron • Chelsea • Greenwich Village • West Village • SoHo • Tribeca • NoHo • Nolita • Lower East Side • Chinatown • Financial District • Battery Park City • and more",
  },
  {
    slug: "brooklyn",
    region: "Brooklyn",
    headline: "Roofing Services in Brooklyn, NYC",
    description:
      "Brooklyn has one of the most varied housing stocks in New York — brownstones, row houses, multi-family flat-roof buildings, and new construction each present different roofing challenges. Our team works across all of them. If you own a brownstone in Park Slope or a multi-unit in Bed-Stuy, we know your roof and we come to you.",
    callouts: [
      "Flat roof repair and replacement for multi-family buildings",
      "Brownstone and row house shingle and flat roof work",
      "Storm damage assessment and repair",
      "Free on-site estimates across all Brooklyn neighborhoods",
    ],
    neighborhoods:
      "Williamsburg • Greenpoint • Bushwick • Bed-Stuy • Crown Heights • Park Slope • Gowanus • Carroll Gardens • Red Hook • Cobble Hill • Boerum Hill • DUMBO • Brooklyn Heights • Downtown Brooklyn • Sunset Park • Bay Ridge • Bensonhurst • Dyker Heights • Gravesend • Sheepshead Bay • Coney Island • Brighton Beach • Flatbush • East Flatbush • East New York • Canarsie • Mill Basin • and more",
  },
  {
    slug: "queens",
    region: "Queens",
    headline: "Roofing Services in Queens, NYC",
    description:
      "Queens has a high concentration of detached and semi-detached homes — many with shingle roofs that need periodic inspection, repair, or full replacement. We also serve large apartment buildings and commercial properties throughout the borough. Whether it's a leaking flat roof in Astoria or a full shingle replacement in Forest Hills, we provide free on-site estimates and warrantied work.",
    callouts: [
      "Shingle roof inspection, repair, and replacement",
      "Flat roof systems for apartment buildings and commercial spaces",
      "Roof gutter cleaning and maintenance",
      "Free estimates across all Queens neighborhoods",
    ],
    neighborhoods:
      "Astoria • Long Island City • Sunnyside • Woodside • Jackson Heights • Elmhurst • Corona • Flushing • Whitestone • Bayside • Oakland Gardens • Forest Hills • Rego Park • Kew Gardens • Jamaica • South Ozone Park • Ozone Park • Howard Beach • Richmond Hill • Glendale • Middle Village • Ridgewood • Maspeth • Woodhaven • Far Rockaway • and more",
  },
  {
    slug: "the-bronx",
    region: "The Bronx",
    headline: "Roofing Services in The Bronx, NYC",
    description:
      "The Bronx has a mix of large apartment buildings, single-family homes, and commercial properties — all of which our team serves. Older buildings in the South Bronx often have aging flat roofs that need full tear-off and replacement. Riverdale's larger single-family homes frequently need shingle work. We know the borough and we come prepared.",
    callouts: [
      "Flat roof systems for large residential and commercial buildings",
      "Shingle roofing for single-family and attached homes",
      "Storm damage inspection and repair",
      "Free on-site estimates throughout the Bronx",
    ],
    neighborhoods:
      "South Bronx • Mott Haven • Hunts Point • Port Morris • Longwood • Morrisania • Fordham • Tremont • Belmont • Kingsbridge • Riverdale • Spuyten Duyvil • Norwood • Woodlawn • Wakefield • Pelham Bay • Co-op City • Throggs Neck • Morris Park • Parkchester • Soundview • Castle Hill • and more",
  },
];

function AreaSection({
  area,
  index,
  vis,
}: {
  area: (typeof areas)[number];
  index: number;
  vis: string;
}) {
  return (
    <div
      id={area.slug}
      className={`fadeInUpS wow${vis}`}
      style={{
        animationDelay: `${index * 0.1}s`,
        paddingBottom: "3.5rem",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <h2 className="h3 ia-margin-1">{area.headline}</h2>
      <p className="p2 ia-dark" style={{ marginBottom: "1.5rem" }}>
        {area.description}
      </p>
      <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem" }}>
        {area.callouts.map((c) => (
          <li key={c} className="p2 ia-dark" style={{ marginBottom: "0.5rem" }}>
            {c}
          </li>
        ))}
      </ul>
      <p className="p3 ia-medium">{area.neighborhoods}</p>
    </div>
  );
}

export default function ServiceAreasPage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
      <CraftHero
        title="Service Areas"
        bgImage="https://manhattanroofs.com/wp-content/uploads/flat-roof-nyc.jpg"
        breadcrumbs={[{ label: "Service Areas" }]}
      />

      <div ref={ref} className="content-block-flex flex-module">
        <div className="inner inner--slim-1172">

          <div className={`content-block-head wide fadeInUpS wow${vis}`}>
            <div className="sub-heading">Where We Work</div>
            <h1 className="h2">Manhattan Roofing — Serving All NYC Boroughs</h1>
            <p className="p2">
              Manhattan Roofing serves Manhattan, Brooklyn, Queens, and The Bronx for
              residential and commercial roofing. Owner-operated with 30+ years of construction
              experience. Free on-site estimates.{" "}
              Call <a href="tel:2124959840" className="ia-link">(212) 495-9840</a> to schedule.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
            {areas.map((area, i) => (
              <AreaSection key={area.slug} area={area} index={i} vis={vis} />
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}
