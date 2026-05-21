import type { ChannelPageData } from "@/components/custom/channel/types";

const manhattanRoofs: ChannelPageData = {
  slug: "manhattan-roofs",

  navItems: [
    { href: "#channel",           label: "About Us"       },
    { href: "#helpful_resources", label: "Quick Links"    },
    { href: "#crafts",            label: "Our Services"   },
    { href: "#testimonials",      label: "Testimonials"   },
    { href: "#flex_feature",      label: "Free Estimates" },
    { href: "#get_in_touch",      label: "Get in Touch"   },
  ],

  hero: {
    title:           "Manhattan's Trusted Roofing Specialists",
    breadcrumbLabel: "About Us",
    imageBg:
      "url(/images/roofing-crew-aerial-safety-harness-installation.jpg) no-repeat center center / cover",
    description: (
      <p>
        Manhattan Roofing is an owner-operated roofing company serving Manhattan,
        Brooklyn, Queens, and the Bronx. With 30+ years of construction experience,
        George and his team handle flat roofs, shingle roofs, skylight work, and
        storm damage repairs — with free on-site estimates and fully warrantied work.
      </p>
    ),
  },

  learnMore: {
    title: "Owner-Operated. 30+ Years in Construction.",
    content: (
      <>
        <p>
          When you call Manhattan Roofing, you&apos;re talking to the owner. George has
          been in construction for over three decades, and the roofing work his crew
          delivers reflects that depth of experience — from standard flat roof
          replacements to complex skylight installations and storm-damage repairs on
          NYC buildings of all sizes.
        </p>

        <h5>No Subcontractors for Repairs</h5>
        <p>
          Repairs are handled directly by Manhattan Roofing&apos;s own crew — not
          passed off to subcontractors. That means accountability stays with the
          people who gave you the estimate, and the work gets done right the first
          time.
        </p>

        <h5>Free On-Site Estimates</h5>
        <p>
          Every job starts with a free on-site estimate. George or a member of his
          team will assess your roof, explain what they find, and give you a clear
          price before any work begins. No surprise charges. No pressure.
        </p>

        <h5>NYC DOB Compliant</h5>
        <p>
          All roofing work is performed in compliance with NYC Department of Buildings
          standards. Flat roof installations and major replacements are handled with
          proper permitting guidance so you&apos;re protected — not just patched.
        </p>

        <h5>Warrantied Work</h5>
        <p>
          Manhattan Roofing backs its installations with warranties. If a roof we
          install develops issues within the warranty period, we come back and make
          it right. That&apos;s the owner-operated difference.
        </p>
      </>
    ),
  },

  resources: {
    title: "Quick Links",
    resources: [
      { title: "Call (212) 495-9840",        href: "tel:2124959840", icon: "icon-message" },
      { title: "Contact Us Online",           href: "/contact-us",    icon: "icon-mail"    },
      { title: "Our Roofing Services",        href: "/craft-catalog", icon: "icon-link"    },
      { title: "Service Areas",              href: "/service-areas", icon: "icon-info"    },
      { title: "Frequently Asked Questions", href: "/general-faqs",  icon: "icon-link"    },
    ],
  },

  crafts: {
    description: (
      <p>
        Manhattan Roofing handles flat roofs, shingle roofs, skylight installations,
        storm damage, and maintenance across Manhattan, Brooklyn, Queens, and the Bronx.
        Every job comes with a free on-site estimate, warrantied workmanship, and direct
        service from the owner&apos;s crew — no subcontractors for repairs.
      </p>
    ),
    craftLinks: [
      { label: "Flat Roof Installation",          href: "/craft-catalog/flat-roof-installation"        },
      { label: "Flat Roof Repair",                href: "/craft-catalog/flat-roof-repair"              },
      { label: "Shingle Roof Installation",       href: "/craft-catalog/shingle-roof-installation"     },
      { label: "Roof Repair & Leak Detection",    href: "/craft-catalog/roof-repair"                   },
      { label: "Wind & Storm Damage Repair",      href: "/craft-catalog/storm-damage-repair"           },
      { label: "Skylight Installation & Repair",  href: "/craft-catalog/skylight-installation-repair"  },
    ],
  },

  testimonials: {
    videos: [],
    quote: {
      text:
        "George gave me an estimate and made me a deal. They jumped right in and everything came out perfect. They are very fair and I recommend them to anybody.",
      name:     "Verified Customer",
      position: "Roof Inspection Client",
    },
  },

  flexFeature: {
    imageSrc:    "/images/roofer-inspecting-asphalt-shingles-closeup.jpg",
    title:       "Need a Free Estimate?",
    body: (
      <p>
        From flat roof replacements to storm damage and skylight repairs — Manhattan
        Roofing provides free on-site estimates across Manhattan, Brooklyn, Queens,
        and the Bronx. Call{" "}
        <strong>(212) 495-9840</strong> to schedule yours today.
      </p>
    ),
    buttonLabel: "Call Now",
    buttonHref:  "tel:2124959840",
  },

  getInTouch: {
    body: (
      <p>
        Ready to schedule an estimate or have a question about your roof? Call us at{" "}
        <strong>(212) 495-9840</strong> or send us a message online and we&apos;ll
        get back to you promptly. Free on-site estimates available.
      </p>
    ),
    buttonLabel: "Contact Us",
    buttonHref:  "/contact-us",
  },
};

export default manhattanRoofs;
