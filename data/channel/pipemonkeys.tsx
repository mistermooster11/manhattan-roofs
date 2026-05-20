import type { ChannelPageData } from "@/components/custom/channel/types";

const pipemonkeys: ChannelPageData = {
  slug: "pipemonkeys",

  navItems: [
    { href: "#channel",           label: "About Us"         },
    { href: "#helpful_resources", label: "Quick Links"      },
    { href: "#crafts",            label: "Our Services"     },
    { href: "#testimonials",      label: "Testimonials"     },
    { href: "#flex_feature",      label: "Emergency Service"},
    { href: "#get_in_touch",      label: "Get in Touch"     },
  ],

  hero: {
    title:           "Drain & Sewer Specialists",
    breadcrumbLabel: "About Us",
    imageBg:
      "url(/images/IMG_9688-1024x682.jpg) no-repeat center center / cover",
    description: (
      <p>
        Pipe Monkeys is a family-owned drain and sewer company serving
        Brooklyn, Queens, and Nassau County. We show up with pro equipment,
        give you straight pricing before any work starts, and we don&rsquo;t
        leave until the flow is confirmed and the workspace is clean.
      </p>
    ),
  },

  learnMore: {
    title: "Monkey Business You Can Trust",
    content: (
      <>
        <p>
          When drains back up, homeowners need someone fast, honest, and
          effective — not a big-box crew reading from a script. Pipe Monkeys
          was built for exactly that. We&rsquo;re local NYC technicians who
          know Brooklyn brownstones, Queens walk-ups, and Nassau County sewer
          lines inside and out.
        </p>

        <h5>Upfront Pricing — Always</h5>
        <p>
          We diagnose the issue, explain the solution, and give you the price
          before a single tool touches your pipe. No surprise invoices. No
          upsell games. What we quote is what you pay.
        </p>

        <h5>Local NYC Technicians</h5>
        <p>
          Every Pipe Monkeys tech is a real Brooklyn or Queens pro — not a
          subcontractor dispatched from a call center. We know the quirks of
          New York piping, the common backup points in older buildings, and
          exactly which tools to use to clear them safely.
        </p>

        <h5>Clean Every Time</h5>
        <p>
          Shoe covers. Drop cloths. Full cleanup before we leave. Your home
          goes back to normal — or better. We test the flow, show you the
          results, and make sure your space is cleaner than we found it.
        </p>

        <h5>Real Results, Guaranteed</h5>
        <p>
          We don&rsquo;t pack up until the drain flows and we&rsquo;ve
          confirmed it in front of you. Most calls are scheduled same-day,
          with near-instant response for urgent blockages.
        </p>
      </>
    ),
  },

  resources: {
    title: "Quick Links",
    resources: [
      { title: "Call Us Now — (718) 749-1830",         href: "tel:7187491830",           icon: "icon-message" },
      { title: "Contact Us Online",                    href: "/contact-us",              icon: "icon-mail"    },
      { title: "Our Services",                         href: "/craft-catalog",           icon: "icon-link"    },
      { title: "Service Areas",                        href: "#crafts",                  icon: "icon-info"    },
      { title: "Frequently Asked Questions",           href: "/general-faqs",            icon: "icon-link"    },
    ],
  },

  crafts: {
    description: (
      <p>
        We clear drains of all types across Brooklyn, Queens, and Nassau County.
        From a slow kitchen sink to a full main line blockage — our techs arrive
        prepared with the right equipment to get the job done the first time.
      </p>
    ),
    craftLinks: [
      { label: "Main Sewer Lines",  href: "/craft-catalog/main-sewer-lines"  },
      { label: "Kitchen Sinks",     href: "/craft-catalog/kitchen-sinks"     },
      { label: "Tubs & Showers",    href: "/craft-catalog/tubs-and-showers"  },
      { label: "Toilets",           href: "/craft-catalog/toilets"           },
    ],
  },

  testimonials: {
    videos: [],
    quote: {
      text:
        "Professional service with a very fair price. They send you info about the assigned technician in advance and showed up exactly on time. They cleaned up nicely after snaking a drain line on the 2nd floor of a 3 story building. Forget roto rooter — Pipe Monkeys will be my new go-to for plumbing needs.",
      name:     "Daniel Pipitone",
      position: "Brooklyn Homeowner",
    },
  },

  flexFeature: {
    imageSrc:    "/images/iStock-1220765707-443x559-1.jpg",
    title:       "Backed Up Right Now?",
    body: (
      <p>
        If your sink, toilet, tub, or main line is overflowing, don&rsquo;t
        wait. Our Brooklyn &amp; Queens techs handle urgent clogs every single
        day and are ready to help right now. Call{" "}
        <strong>(718) 749-1830</strong> for fast response.
      </p>
    ),
    buttonLabel: "Call Now",
    buttonHref:  "tel:7187491830",
  },

  getInTouch: {
    body: (
      <p>
        Ready to schedule or have a question? Call us at{" "}
        <strong>(718) 749-1830</strong> or use our online contact form and
        we&rsquo;ll get back to you fast.
      </p>
    ),
    buttonLabel: "Contact Us",
    buttonHref:  "/contact-us",
  },
};

export default pipemonkeys;
