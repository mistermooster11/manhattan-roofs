import type { ReactNode } from "react";

export type ServiceNavItem = { href: string; label: string };

export type ServicePageData = {
  title: string;
  bgColor: string;
  navItems: ServiceNavItem[];
  overviewContent: ReactNode;
  overviewQuickLinks: { label: string; href: string }[];
  sections: { id: string; heading: string; content: ReactNode }[];
  relatedServices: { label: string; href: string }[];
};

export const servicePages: Record<string, ServicePageData> = {

  "flat-roof-installation": {
    title: "Flat Roof Installation",
    bgColor: "#1a2332",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#what_we_install",  label: "What We Install"  },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Flat roofs are the dominant roofing system on Manhattan&apos;s residential
          and commercial buildings — brownstones, rowhouses, apartment buildings,
          and commercial structures all rely on them. A properly installed flat roof
          protects the building for 20–30+ years; a poorly installed one starts
          leaking within months.
        </p>
        <p>
          Manhattan Roofing installs flat roofing systems across Manhattan, Brooklyn,
          Queens, and the Bronx. Every installation is handled by the owner&apos;s
          crew — no subcontractors — and backed by a workmanship warranty. George
          has been in construction for over 30 years; flat roof installation is
          the core of what this company does.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (212) 495-9840", href: "tel:2124959840" },
      { label: "Get a Free Estimate", href: "/contact-us"    },
    ],
    sections: [
      {
        id: "what_we_install",
        heading: "Flat Roof Systems We Install",
        content: (
          <>
            <p>
              Manhattan Roofing works with the industry-standard flat roofing
              materials used on NYC buildings — modified bitumen, EPDM (rubber
              roofing), TPO, and built-up roofing. The right system depends on
              your building type, roof size, drainage situation, and budget.
              George will walk you through the options and recommend what makes
              sense for your specific roof during the free estimate.
            </p>
            <p>
              We handle full tear-offs when the existing roof has failed beyond
              repair, as well as layovers where the existing deck is sound.
              All installations include proper flashing at walls, parapets,
              skylights, and HVAC penetrations — the details that determine
              whether a flat roof holds up long term.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How a Flat Roof Installation Works",
        content: (
          <>
            <p>
              Every job starts with a free on-site estimate. George or a crew
              member visits the roof, assesses the current system, identifies
              any structural issues with the deck, and gives you a clear price
              before any work begins. No surprises, no pressure.
            </p>
            <p>
              On installation day, the crew removes the old roofing material
              (if required), inspects and repairs the deck, installs the new
              roofing system with proper insulation and drainage, and finishes
              all flashing details. The site is cleaned before the crew leaves.
              Installations on most residential buildings in NYC are completed
              in 1–2 days.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Flat Roof Repair",              href: "/craft-catalog/flat-roof-repair"             },
      { label: "Roof & Gutter Cleaning",         href: "/craft-catalog/roof-gutter-cleaning"         },
      { label: "Roof Maintenance Plans",         href: "/craft-catalog/roof-maintenance-plans"       },
      { label: "Wind & Storm Damage Repair",     href: "/craft-catalog/storm-damage-repair"          },
    ],
  },

  "flat-roof-repair": {
    title: "Flat Roof Repair",
    bgColor: "#1a2332",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#common_issues",    label: "Common Issues"    },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          A flat roof leak left unaddressed will spread. Water finds its way
          through membrane gaps, failed flashing, and open seams — and once
          it&apos;s inside the building, it damages insulation, decking, ceilings,
          and walls. Manhattan Roofing locates the source and fixes it right,
          not just patches it temporarily.
        </p>
        <p>
          Flat roof repairs are handled directly by Manhattan Roofing&apos;s own
          crew — no subcontractors. That means accountability stays with the
          people who gave you the estimate, and the repair holds up long term.
          Free on-site estimates for all flat roof repair work.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (212) 495-9840", href: "tel:2124959840" },
      { label: "Get a Free Estimate", href: "/contact-us"    },
    ],
    sections: [
      {
        id: "common_issues",
        heading: "Common Flat Roof Problems We Fix",
        content: (
          <>
            <p>
              The most common flat roof issues we repair in NYC include membrane
              blisters and bubbles, open seams and laps, failed flashing at
              parapet walls and HVAC penetrations, standing water caused by
              blocked or undersized drains, and punctures from foot traffic
              or debris. Storm damage — including wind-lifted membrane and
              debris impact — is also a frequent call.
            </p>
            <p>
              Many leaks appear in a different location on the ceiling than
              where the actual breach is on the roof. We track the water path
              to find the true source before making any repair — so the fix
              lasts rather than creating a new leak path.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How Flat Roof Repair Works",
        content: (
          <>
            <p>
              We start with a thorough roof inspection — walking the membrane,
              checking all flashing terminations, inspecting drains, and
              identifying any areas of ponding or membrane deterioration.
              The estimate covers exactly what needs to be done and the full
              price before work starts.
            </p>
            <p>
              Repairs range from small membrane patches to full flashing
              replacement and drain re-lining. We use materials matched to
              the existing roofing system so repairs bond properly and don&apos;t
              create new failure points. All repair work is warrantied.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Flat Roof Installation",         href: "/craft-catalog/flat-roof-installation"       },
      { label: "Roof Repair & Leak Detection",   href: "/craft-catalog/roof-repair"                  },
      { label: "Wind & Storm Damage Repair",     href: "/craft-catalog/storm-damage-repair"          },
      { label: "Roof & Attic Inspection",        href: "/craft-catalog/roof-attic-inspection"        },
    ],
  },

  "shingle-roof-installation": {
    title: "Shingle Roof Installation & Replacement",
    bgColor: "#1a2332",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#shingle_types",    label: "Shingle Types"    },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Shingle roofs are common on detached homes, row houses with pitched
          sections, and some commercial buildings across the outer boroughs.
          When a shingle roof reaches end of life — or when storm damage has
          compromised the system — a full replacement is the right call.
          Manhattan Roofing handles shingle roof installation and full
          replacement across all NYC boroughs.
        </p>
        <p>
          George&apos;s crew handles both complete tear-offs and new installs with
          the same approach: a free on-site estimate, clear pricing, and
          warrantied workmanship. No subcontractors for the installation work
          itself — your job is handled by the people who sold it to you.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (212) 495-9840", href: "tel:2124959840" },
      { label: "Get a Free Estimate", href: "/contact-us"    },
    ],
    sections: [
      {
        id: "shingle_types",
        heading: "Shingle Options We Install",
        content: (
          <>
            <p>
              We work with architectural (dimensional) shingles, which are the
              standard for replacement roofs today — they&apos;re more durable and
              better-looking than 3-tab shingles and come with 30–50 year
              manufacturer warranties. We also install impact-resistant shingles
              for properties in areas with frequent hail or wind events.
            </p>
            <p>
              During the estimate, George will walk you through shingle options
              at different price points, explain the warranty terms, and
              recommend what makes sense for your building&apos;s exposure
              and your budget. No upselling to materials you don&apos;t need.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How Shingle Roof Installation Works",
        content: (
          <>
            <p>
              Installation starts with a complete tear-off of the old shingle
              system down to the deck. We inspect the decking for rot, damage,
              or weak spots and repair or replace what&apos;s needed before any
              new material goes down. Proper underlayment, ice and water shield
              at vulnerable zones, and drip edge installation are all part
              of a complete job.
            </p>
            <p>
              Shingles are installed to manufacturer spec to preserve the
              warranty. We finish with new ridge cap, proper flashing at any
              roof penetrations, and full cleanup before leaving the site.
              Most residential shingle replacements in NYC are completed in
              one day.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Roof Repair & Leak Detection",   href: "/craft-catalog/roof-repair"                  },
      { label: "Wind & Storm Damage Repair",     href: "/craft-catalog/storm-damage-repair"          },
      { label: "Skylight Installation & Repair", href: "/craft-catalog/skylight-installation-repair" },
      { label: "Roof & Attic Inspection",        href: "/craft-catalog/roof-attic-inspection"        },
    ],
  },

  "roof-repair": {
    title: "Roof Repair & Leak Detection",
    bgColor: "#1a2332",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#leak_detection",   label: "Leak Detection"   },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Roof leaks are almost never where they appear to be. Water enters
          through a gap in the membrane or a failed flashing joint, then travels
          horizontally along roof decking or framing before showing up on your
          ceiling — sometimes several feet from the actual breach. Chasing the
          visible stain without finding the source just creates new damage.
        </p>
        <p>
          Manhattan Roofing tracks leaks to their source on flat and shingle
          roofs across Manhattan, Brooklyn, Queens, and the Bronx. Free on-site
          estimates for all repair work. Repairs handled by the owner&apos;s crew,
          not subcontractors.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (212) 495-9840", href: "tel:2124959840" },
      { label: "Get a Free Estimate", href: "/contact-us"    },
    ],
    sections: [
      {
        id: "leak_detection",
        heading: "How We Find the Leak Source",
        content: (
          <>
            <p>
              We start on the roof — inspecting the membrane, seams, flashing
              at parapets, chimney, HVAC curbs, skylights, and any penetrations.
              On shingle roofs, we check ridge cap, valley flashing, step
              flashing at walls, and the condition of individual shingles.
              We look for the logical entry point, not just the area above
              where you&apos;re seeing water inside.
            </p>
            <p>
              Once we&apos;ve identified the source, we explain exactly what we
              found and give you a repair price before touching anything.
              We don&apos;t start work without your approval, and we don&apos;t
              charge for the inspection when you&apos;re booking a repair.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "The Repair Process",
        content: (
          <>
            <p>
              Roof repairs range from small membrane patches to full flashing
              replacements, re-caulking of failing joints, or replacement of
              damaged shingle sections. We use materials matched to your existing
              roofing system so repairs bond properly and don&apos;t create new
              failure points down the line.
            </p>
            <p>
              After the repair is complete, we walk you through what was done
              and document the work. If there are other areas on the roof that
              are approaching failure, we&apos;ll point them out — but there&apos;s
              no pressure to do additional work on the same visit. All repair
              work is warrantied.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Flat Roof Repair",               href: "/craft-catalog/flat-roof-repair"             },
      { label: "Flat Roof Installation",         href: "/craft-catalog/flat-roof-installation"       },
      { label: "Wind & Storm Damage Repair",     href: "/craft-catalog/storm-damage-repair"          },
      { label: "Roof & Attic Inspection",        href: "/craft-catalog/roof-attic-inspection"        },
    ],
  },

  "storm-damage-repair": {
    title: "Wind & Storm Damage Repair",
    bgColor: "#1a2332",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#storm_damage",     label: "Storm Damage"     },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          After a major storm, the damage may not be obvious from street level.
          Wind can lift and shift membrane sections, dislodge flashing, crack
          skylights, and strip shingles — damage that won&apos;t become apparent
          until the next rain event. Getting on the roof promptly after a storm
          lets you document damage and prevent a small problem from becoming
          a major interior water event.
        </p>
        <p>
          Manhattan Roofing responds to wind and storm damage calls across
          Manhattan, Brooklyn, Queens, and the Bronx. Free on-site assessment
          and full repair handled by the owner&apos;s crew.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (212) 495-9840", href: "tel:2124959840" },
      { label: "Get a Free Estimate", href: "/contact-us"    },
    ],
    sections: [
      {
        id: "storm_damage",
        heading: "What Storm Damage Looks Like",
        content: (
          <>
            <p>
              On flat roofs, storm damage commonly appears as lifted or bubbled
              membrane sections, torn or displaced flashing at parapets and
              penetrations, and blocked or dislodged drainage components.
              On shingle roofs, look for missing shingles, cracked or granule-
              stripped shingles, and damaged ridge cap — all of which allow
              water entry on the next rain.
            </p>
            <p>
              Debris impact during storms can also puncture roofing membrane
              and crack skylight glazing. If you have a skylight and there was
              wind or falling debris, it should be inspected along with the
              rest of the roof.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "Storm Damage Repair Process",
        content: (
          <>
            <p>
              We start with a thorough post-storm inspection, documenting all
              damage with photos and providing you with a detailed repair
              estimate. If you&apos;re working with an insurance claim, we can
              provide the documentation your adjuster needs.
            </p>
            <p>
              Repairs are prioritized to stop active water entry first, then
              address structural or cosmetic damage. We use materials matched
              to the existing system so repairs are durable — not just a
              temporary patch until the next storm. All storm damage repair
              work is warrantied.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Flat Roof Repair",               href: "/craft-catalog/flat-roof-repair"             },
      { label: "Roof Repair & Leak Detection",   href: "/craft-catalog/roof-repair"                  },
      { label: "Skylight Installation & Repair", href: "/craft-catalog/skylight-installation-repair" },
      { label: "Roof & Attic Inspection",        href: "/craft-catalog/roof-attic-inspection"        },
    ],
  },

  "skylight-installation-repair": {
    title: "Skylight Installation & Repair",
    bgColor: "#1a2332",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#installation",     label: "Installation"     },
      { href: "#repair",           label: "Repair"           },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Skylights are one of the few ways to bring natural light into the
          interior floors of a NYC building — particularly valuable in
          brownstones and railroad apartments where interior rooms have no
          exterior windows. When installed and flashed correctly, a skylight
          adds light and value to a building for decades. When installed
          poorly, it&apos;s a slow leak waiting to happen.
        </p>
        <p>
          Manhattan Roofing installs and repairs skylights on flat and pitched
          roofs across NYC. George and his crew have been doing skylight work
          for years as part of their broader roofing practice — it&apos;s not a
          specialty add-on, it&apos;s a core service.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (212) 495-9840", href: "tel:2124959840" },
      { label: "Get a Free Estimate", href: "/contact-us"    },
    ],
    sections: [
      {
        id: "installation",
        heading: "Skylight Installation",
        content: (
          <>
            <p>
              New skylight installations involve cutting the roof opening to
              the correct dimensions, installing the skylight unit, and —
              critically — flashing the curb properly so water cannot enter
              around the unit. Improper flashing is the single most common
              cause of skylight leaks; it&apos;s also the most common mistake made
              by roofers who don&apos;t specialize in this work.
            </p>
            <p>
              We work with standard skylight units sized for NYC brownstone
              and rooftop applications. During the estimate, we assess the
              roof structure to confirm the opening location won&apos;t compromise
              any rafters or structural elements, then provide a full price
              for the complete installation.
            </p>
          </>
        ),
      },
      {
        id: "repair",
        heading: "Skylight Repair & Leak Fixes",
        content: (
          <>
            <p>
              Most skylight leaks are not the skylight itself — they&apos;re the
              flashing around it. The curb flashing, counter-flashing, and
              any pitch pockets around the unit can fail over time or after
              a storm. We trace the leak source before making any repairs
              to confirm whether the issue is flashing, the glazing, or the
              frame itself.
            </p>
            <p>
              Cracked or broken skylight glazing from storm debris impact or
              age is also a repair we handle — both replacing the glass/acrylic
              panel and resealing the frame. All skylight repair work is
              warrantied.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Flat Roof Installation",         href: "/craft-catalog/flat-roof-installation"       },
      { label: "Flat Roof Repair",               href: "/craft-catalog/flat-roof-repair"             },
      { label: "Wind & Storm Damage Repair",     href: "/craft-catalog/storm-damage-repair"          },
      { label: "Roof Repair & Leak Detection",   href: "/craft-catalog/roof-repair"                  },
    ],
  },

  "roof-gutter-cleaning": {
    title: "Roof & Gutter Cleaning",
    bgColor: "#1a2332",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#why_it_matters",   label: "Why It Matters"   },
      { href: "#what_we_do",       label: "What We Do"       },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Debris accumulation is one of the most overlooked causes of flat roof
          deterioration in NYC. Leaves, gravel migration, and debris from
          neighboring buildings collect in drains and low spots — causing
          standing water that breaks down roofing membrane over time.
          Clogged gutters on pitched roofs back up water into fascia, soffits,
          and sometimes the interior during heavy rain.
        </p>
        <p>
          Manhattan Roofing performs roof and gutter cleaning across Manhattan,
          Brooklyn, Queens, and the Bronx. A clean roof drains properly and
          lasts longer — straightforward maintenance that extends the life of
          your roofing investment.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (212) 495-9840", href: "tel:2124959840" },
      { label: "Schedule Service",    href: "/contact-us"    },
    ],
    sections: [
      {
        id: "why_it_matters",
        heading: "Why Regular Cleaning Extends Roof Life",
        content: (
          <>
            <p>
              On flat roofs, standing water from blocked drains creates hydrostatic
              pressure against the membrane — the same water weight that the system
              was designed to shed quickly. Extended ponding softens adhesive bonds,
              accelerates membrane degradation, and eventually works its way through
              seams and penetrations.
            </p>
            <p>
              On shingle roofs, debris in valleys and gutters creates ice dams in
              winter and allows water to back up under shingles during heavy rain.
              Neither situation is obvious until it&apos;s already causing interior
              damage. Annual or semi-annual cleaning prevents both.
            </p>
          </>
        ),
      },
      {
        id: "what_we_do",
        heading: "What Roof & Gutter Cleaning Includes",
        content: (
          <>
            <p>
              Roof cleaning involves clearing all debris from the membrane surface,
              removing blockages from drain baskets and drain pipes, and checking
              that the roof drains freely after cleaning. We also note any membrane
              or flashing issues observed during the cleaning visit.
            </p>
            <p>
              Gutter cleaning involves flushing downspouts, removing leaf and debris
              accumulation from gutter troughs, and checking gutter slope and
              hangers. If gutters need rehanging or section replacement, we&apos;ll
              note it and quote separately. Combined roof and gutter cleaning
              is available in a single visit.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Roof Maintenance Plans",         href: "/craft-catalog/roof-maintenance-plans"       },
      { label: "Roof & Attic Inspection",        href: "/craft-catalog/roof-attic-inspection"        },
      { label: "Flat Roof Repair",               href: "/craft-catalog/flat-roof-repair"             },
      { label: "Roof Repair & Leak Detection",   href: "/craft-catalog/roof-repair"                  },
    ],
  },

  "roof-maintenance-plans": {
    title: "Roof Maintenance Plans",
    bgColor: "#1a2332",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#what_included",    label: "What's Included"  },
      { href: "#why_maintenance",  label: "Why Maintain"     },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Most roofing failures are not sudden events — they&apos;re the result of
          small issues left unaddressed over multiple seasons. A cracked seam
          that gets caulked on a maintenance visit costs a few minutes of labor.
          The same seam, ignored for two more winters, may require a full
          membrane section replacement and interior ceiling repair.
        </p>
        <p>
          Manhattan Roofing offers maintenance plans for building owners and
          property managers who want scheduled roof inspections and minor
          repairs handled proactively. Serving Manhattan, Brooklyn, Queens,
          and the Bronx.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (212) 495-9840",    href: "tel:2124959840" },
      { label: "Ask About Maintenance",  href: "/contact-us"    },
    ],
    sections: [
      {
        id: "what_included",
        heading: "What Roof Maintenance Includes",
        content: (
          <>
            <p>
              A standard maintenance visit covers a full roof inspection,
              clearing of drains and drain baskets, sealing of any minor
              open seams or cracks found during inspection, checking and
              re-caulking flashing terminations at parapets, HVAC curbs,
              and penetrations, and a written condition report after each visit.
            </p>
            <p>
              Maintenance plans are typically structured as annual or
              bi-annual visits. If significant repairs are identified during
              a visit, we quote them separately — maintenance plan pricing
              covers the visit and minor on-the-spot work, not major repairs.
              All work performed during maintenance visits is warrantied.
            </p>
          </>
        ),
      },
      {
        id: "why_maintenance",
        heading: "Why Proactive Maintenance Saves Money",
        content: (
          <>
            <p>
              A 15–20 year flat roof in NYC will typically require 2–3 maintenance
              visits over its life to address minor issues before they compound.
              Skipping maintenance and waiting for a leak means paying for interior
              damage remediation on top of the roof repair itself — sometimes
              several times the cost of the scheduled maintenance.
            </p>
            <p>
              For property managers overseeing multiple buildings, a maintenance
              plan also provides documentation of roof condition for insurance
              purposes and provides advance notice of roofs approaching end of
              life — so capital planning isn&apos;t a surprise.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Roof & Gutter Cleaning",         href: "/craft-catalog/roof-gutter-cleaning"         },
      { label: "Roof & Attic Inspection",        href: "/craft-catalog/roof-attic-inspection"        },
      { label: "Flat Roof Repair",               href: "/craft-catalog/flat-roof-repair"             },
      { label: "Roof Repair & Leak Detection",   href: "/craft-catalog/roof-repair"                  },
    ],
  },

  "roof-attic-inspection": {
    title: "Roof & Attic Inspection",
    bgColor: "#1a2332",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#what_we_check",    label: "What We Check"    },
      { href: "#when_to_inspect",  label: "When to Inspect"  },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          A professional roof and attic inspection gives you an objective
          assessment of your roof&apos;s current condition — what&apos;s performing as
          expected, what needs attention soon, and what can wait. Whether
          you&apos;re buying a property, responding to an insurance requirement,
          or just want to know where your roof stands before winter, an
          inspection from Manhattan Roofing gives you the facts.
        </p>
        <p>
          George and his team conduct roof and attic inspections across
          Manhattan, Brooklyn, Queens, and the Bronx. Free estimates for
          any repair work identified. Written condition report provided
          after every inspection.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (212) 495-9840", href: "tel:2124959840" },
      { label: "Schedule Inspection",  href: "/contact-us"    },
    ],
    sections: [
      {
        id: "what_we_check",
        heading: "What a Roof & Attic Inspection Covers",
        content: (
          <>
            <p>
              Roof inspection covers the full membrane or shingle surface,
              all flashing at parapets, walls, HVAC curbs, skylights, and
              penetrations, drainage components, and the condition of any
              visible decking at roof edges. We document areas of concern
              with photos and note the approximate age of the existing system.
            </p>
            <p>
              Attic inspection (where accessible) looks for signs of moisture
              intrusion in the decking and framing, adequacy of ventilation,
              insulation condition, and any evidence of past or current leaks
              that weren&apos;t visible from the roof surface. Attic findings often
              reveal leak history that the roof surface alone doesn&apos;t show.
            </p>
          </>
        ),
      },
      {
        id: "when_to_inspect",
        heading: "When You Should Schedule an Inspection",
        content: (
          <>
            <p>
              Pre-purchase inspections are the most common — if you&apos;re buying
              a building and want an independent assessment of the roof before
              closing, we can schedule an inspection quickly and provide a written
              report. Post-storm inspections are also frequent, particularly
              after major wind or hail events when damage may not be visible
              from street level.
            </p>
            <p>
              Annual inspections before winter are a smart preventive step for
              building owners with older flat roofs — catching a failing seam
              or failing drain in September is far easier than dealing with
              an active leak in January. We also recommend an inspection if
              your roof is approaching 15 years of age, even if it appears
              to be performing normally.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Flat Roof Repair",               href: "/craft-catalog/flat-roof-repair"             },
      { label: "Roof Repair & Leak Detection",   href: "/craft-catalog/roof-repair"                  },
      { label: "Roof Maintenance Plans",         href: "/craft-catalog/roof-maintenance-plans"       },
      { label: "Energy & Insulation Solutions",  href: "/craft-catalog/energy-insulation"            },
    ],
  },

  "energy-insulation": {
    title: "Energy & Insulation Solutions",
    bgColor: "#1a2332",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#insulation_types", label: "Insulation Types" },
      { href: "#benefits",         label: "Benefits"         },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Roofing insulation is often an afterthought — but in NYC buildings,
          it directly affects heating and cooling costs, comfort on upper floors,
          and the longevity of the roofing system itself. When a flat roof is
          being replaced, it&apos;s the right time to evaluate and upgrade insulation
          if needed.
        </p>
        <p>
          Manhattan Roofing advises on and installs roofing insulation as part
          of flat roof installation projects and as standalone improvements.
          If your upper floors are consistently too hot in summer or too cold
          in winter, inadequate roof insulation is a likely contributor.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (212) 495-9840",    href: "tel:2124959840" },
      { label: "Get a Free Estimate",    href: "/contact-us"    },
    ],
    sections: [
      {
        id: "insulation_types",
        heading: "Roofing Insulation Options",
        content: (
          <>
            <p>
              Flat roof insulation is typically rigid foam board — polyisocyanurate
              (polyiso) is the most common in NYC commercial and residential
              applications due to its high R-value per inch and performance in
              cold climates. EPS (expanded polystyrene) is an alternative used
              in some applications. The right thickness depends on current
              R-value, budget, and the additional roof height the insulation
              will add.
            </p>
            <p>
              For attic insulation on pitched-roof buildings, we assess current
              insulation depth and type, then recommend and install additional
              blown-in or batt insulation to bring the assembly to current
              energy code minimums. George will explain the options and give
              you a straight recommendation based on what your specific building needs.
            </p>
          </>
        ),
      },
      {
        id: "benefits",
        heading: "Benefits of Proper Roof Insulation",
        content: (
          <>
            <p>
              Adequate roofing insulation reduces heat gain in summer and heat
              loss in winter — directly lowering HVAC costs on upper floors
              and improving comfort year-round. In NYC buildings with flat
              roofs, top-floor apartments and commercial spaces are most
              affected by insulation gaps.
            </p>
            <p>
              Beyond comfort and energy costs, proper insulation also protects
              the roofing membrane itself. Extreme temperature swings at the
              membrane surface are reduced with adequate insulation below,
              which slows the expansion-contraction cycle that stresses seams
              over time. It&apos;s an investment that extends the life of the
              roofing system as well as improving building performance.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Flat Roof Installation",         href: "/craft-catalog/flat-roof-installation"       },
      { label: "Roof & Attic Inspection",        href: "/craft-catalog/roof-attic-inspection"        },
      { label: "Roof Maintenance Plans",         href: "/craft-catalog/roof-maintenance-plans"       },
      { label: "Roof & Gutter Cleaning",         href: "/craft-catalog/roof-gutter-cleaning"         },
    ],
  },

};
