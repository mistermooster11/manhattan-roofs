import type { ChannelPageData } from "@/components/custom/channel/types";

const aeNycPlumbing: ChannelPageData = {
  slug: "ae-nyc-plumbing",

  navItems: [
    { href: "#channel",           label: "About Us"          },
    { href: "#helpful_resources", label: "Quick Links"       },
    { href: "#crafts",            label: "Our Services"      },
    { href: "#testimonials",      label: "Testimonials"      },
    { href: "#flex_feature",      label: "Emergency Service" },
    { href: "#get_in_touch",      label: "Get in Touch"      },
  ],

  hero: {
    title:           "Manhattan's Licensed Plumbing Specialists",
    breadcrumbLabel: "About Us",
    imageBg:
      "url(https://www.topplumbernyc.com/wp-content/uploads/2025/06/Licensed-plumber-1024x683.jpg) no-repeat center center / cover",
    description: (
      <p>
        A&amp;E NYC Plumbing is a licensed and insured plumbing company serving Manhattan
        and all NYC boroughs. From faucet repairs and drain cleaning to gas line work and
        full repiping — our experienced technicians deliver fast, reliable service at
        upfront pricing.
      </p>
    ),
  },

  learnMore: {
    title: "Reliable, Honest &amp; Reasonably Priced NYC Plumbing",
    content: (
      <>
        <p>
          When plumbing problems strike, New Yorkers need someone who shows up fast,
          diagnoses the issue correctly, and fixes it right the first time. A&amp;E NYC
          Plumbing was built on exactly that promise — licensed technicians who know
          Manhattan&rsquo;s infrastructure inside and out, from pre-war apartment buildings
          to modern commercial spaces.
        </p>

        <h5>Licensed &amp; Fully Insured</h5>
        <p>
          Every job is handled by a licensed, insured technician. Whether we&rsquo;re
          repairing a gas line, installing a water heater, or clearing a backed-up drain,
          you get the peace of mind of a fully compliant, properly credentialed crew. No
          unlicensed work. No shortcuts.
        </p>

        <h5>Free Quotes &amp; Onsite Estimates</h5>
        <p>
          We provide free quotes over the phone and free onsite estimates for more complex
          jobs. You know the price before we start — no surprise invoices, no bait-and-switch
          pricing. What we quote is what you pay.
        </p>

        <h5>Residential &amp; Commercial Service</h5>
        <p>
          From single-family homes to multi-unit apartment buildings and commercial spaces,
          our team handles the full range of plumbing requirements. We&rsquo;re technically
          prepared to install or repair any gas line, water line, heating system, or
          plumbing fixture in your building.
        </p>

        <h5>Fast Turnaround, Working Within Your Schedule</h5>
        <p>
          We know your time matters. Our team is ready Monday through Sunday, 9am–9pm, and
          adjusts to your schedule. Most jobs are completed fast — call us and we&rsquo;ll
          tell you exactly when we can be there.
        </p>
      </>
    ),
  },

  resources: {
    title: "Quick Links",
    resources: [
      { title: "Call Us Now — (646) 392-7164",   href: "tel:6463927164",  icon: "icon-message" },
      { title: "Contact Us Online",               href: "/contact-us",     icon: "icon-mail"    },
      { title: "Our Services",                    href: "/craft-catalog",  icon: "icon-link"    },
      { title: "Service Areas",                   href: "/service-areas",  icon: "icon-info"    },
      { title: "Frequently Asked Questions",      href: "/general-faqs",   icon: "icon-link"    },
    ],
  },

  crafts: {
    description: (
      <p>
        We handle the full range of residential and commercial plumbing in Manhattan
        and across all NYC boroughs — from routine faucet repairs and drain cleaning
        to gas line installation, water heater replacement, and complete repiping
        projects. Whatever the job, we bring licensed technicians and upfront pricing.
      </p>
    ),
    craftLinks: [
      { label: "Drain Repair",                   href: "/craft-catalog/drain-repair"            },
      { label: "Faucets &amp; Sinks",            href: "/craft-catalog/faucets-and-sinks"       },
      { label: "Leak Detection",                 href: "/craft-catalog/leak-detection"          },
      { label: "Water Heater Installation",      href: "/craft-catalog/water-heater-installation" },
      { label: "Gas Line Services",              href: "/craft-catalog/gas-line-services"       },
      { label: "Toilet Repair",                  href: "/craft-catalog/toilet-repair"           },
    ],
  },

  testimonials: {
    videos: [],
    quote: {
      text:
        "Called A&E NYC Plumbing for a backed-up drain in my Manhattan apartment. They arrived within a few hours, fixed the issue quickly, and were totally upfront about pricing. Friendly, professional, and clean — highly recommend.",
      name:     "Google Reviewer",
      position: "Manhattan Resident",
    },
  },

  flexFeature: {
    imageSrc:    "https://www.topplumbernyc.com/wp-content/uploads/2025/06/Licensed-plumber-1024x683.jpg",
    title:       "Plumbing Emergency?",
    body: (
      <p>
        From burst pipes and gas line issues to complete drain backups — A&amp;E NYC
        Plumbing is available Monday through Sunday, 9am–9pm. Our Manhattan-based
        technicians respond fast. Call{" "}
        <strong>(646) 392-7164</strong> for same-day service.
      </p>
    ),
    buttonLabel: "Call Now",
    buttonHref:  "tel:6463927164",
  },

  getInTouch: {
    body: (
      <p>
        Ready to schedule or have a question? Call us at{" "}
        <strong>(646) 392-7164</strong> or use our online contact form and
        we&rsquo;ll get back to you promptly. Free quotes available.
      </p>
    ),
    buttonLabel: "Contact Us",
    buttonHref:  "/contact-us",
  },
};

export default aeNycPlumbing;
