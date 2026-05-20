import type { ChannelPageData } from "@/components/custom/channel/types";

const postsecondary: ChannelPageData = {
  slug: "postsecondary",

  navItems: [
    { href: "#channel",           label: "Learn More"                     },
    { href: "#helpful_resources", label: "Quick Links"                    },
    { href: "#crafts",            label: "Explore Programs & Crafts"      },
    { href: "#testimonials",      label: "Testimonials"                   },
    { href: "#flex_feature",      label: "Core Toolbox"                   },
    { href: "#get_in_touch",      label: "Get in Touch"                   },
  ],

  hero: {
    title:           "Postsecondary",
    breadcrumbLabel: "Postsecondary",
    imageBg:
      "url(https://www.nccer.org/media/2023/03/Postsecondary-640x587.jpg) no-repeat center center / cover",
    description: (
      <p>
        Community colleges are critical to building America&rsquo;s workforce. NCCER provides
        accreditation, curricula and credentials that make it easy for colleges to build the
        programs their local employers are looking for.
      </p>
    ),
  },

  learnMore: {
    title: "NCCER for Postsecondary",
    content: (
      <>
        <p>
          NCCER is proud to partner with community colleges across the country. Our programs
          provide everything postsecondary institutions need to develop a world-class
          construction education program.
        </p>

        <h5>Accreditation</h5>
        <p>
          Becoming NCCER accredited means joining a network of more than 6,000 training
          facilities that use industry-aligned curricula to train craft professionals. NCCER
          accreditation provides colleges with a third-party validation of program quality
          that is recognized by employers throughout the industry.
        </p>

        <h5>Curriculum</h5>
        <p>
          NCCER offers curricula for over 40 construction craft areas. Our modules are
          developed and regularly updated by subject matter experts from industry to ensure
          they meet current employer needs. Curriculum is available in both print and digital
          formats through NCCERconnect, our online learning platform.
        </p>

        <h5>Credentials</h5>
        <p>
          NCCER credentials are stored in our secure online registry and are recognized by
          thousands of contractors and employers nationwide. Learners earn wallet cards and
          certificates they can present to employers to verify their skills. Our credentials
          also support articulation agreements and can help students earn college credit for
          their craft training.
        </p>

        <h5>Enrollment opportunities</h5>
        <p>
          NCCER connects training facilities with workforce initiatives, apprenticeship
          programs and employer networks. Our Workforce Development Solutions team can help
          your institution identify opportunities to grow enrollment and build partnerships
          with local industry.
        </p>
      </>
    ),
  },

  resources: {
    title: "Helpful Resources for Postsecondary Institutions",
    resources: [
      { title: "Access Our Instructor Toolbox",                    href: "https://toolbox.nccer.org/",                                                                                        icon: "icon-link",    external: true },
      { title: "Become NCCER Accredited",                          href: "/benefits-of-nccer-accreditation/",                                                                                 icon: "icon-info"                   },
      { title: "Contact Our Workforce Development Solutions Team",  href: "/nccer-workforce-development-team/",                                                                               icon: "icon-message"                },
      { title: "Optimize Your Classroom with NCCERconnect",        href: "https://www.pearson.com/us/higher-education/products-services-teaching/resources-by-discipline/nccer.html",         icon: "icon-link",    external: true },
      { title: "Order Books & Modules",                            href: "/order-books-modules/",                                                                                             icon: "icon-books"                  },
      { title: "Pearson Executive Directors",                      href: "/pearson-eds/",                                                                                                     icon: "icon-mail"                   },
      { title: "Florida Instructor Specifications",                href: "https://www.nccer.org/florida-instructor-specifications/",                                                           icon: "icon-nccer",   external: true },
    ],
  },

  crafts: {
    description: (
      <p>
        NCCER offers curricula for over 40 craft areas with a modular-based training system
        that can be used in apprenticeship style training or can be custom curated to an
        organization&rsquo;s specific needs. View several of our top crafts listed or click
        the button below to view our craft curriculum catalog.
      </p>
    ),
    craftLinks: [
      { label: "Electrical",                                  href: "https://www.nccer.org/craft-catalog/electrical/"                                           },
      { label: "Fast Track Program",                          href: "https://www.nccer.org/programs-crafts/programs/fast-track-program/"                        },
      { label: "Heavy Equipment Operations",                  href: "https://www.nccer.org/craft-catalog/heavy-equipment-operations/"                           },
      { label: "Construction Superintendent Certification",   href: "https://www.nccer.org/programs-crafts/programs/construction-superintendent-certification/" },
    ],
  },

  testimonials: {
    videos: [
      {
        bg:       "url(https://www.nccer.org/media/2023/03/Pansy-Bruce-1.png)",
        src:      "https://www.nccer.org/media/2023/03/Pansy-Bruce-Testimonial-Vertical-384x600-1.mp4",
        title:    "My NCCER Story | Pansy Bruce",
        name:     "Pansy Bruce",
        position: "Welding student",
        readHref: "https://www.nccer.org/my-nccer-story/my-nccer-story-pansy-bruce/",
      },
    ],
  },

  flexFeature: {
    imageSrc:    "https://www.nccer.org/media/2026/02/0000495_nccer-core-toolbox-480x480.jpeg",
    title:       "Core Toolbox",
    body: (
      <p>
        Need a jumpstart on your school&rsquo;s collection of construction tools and
        equipment? The <strong>Core Toolbox</strong> contains everything you need to teach
        NCCER&rsquo;s Core Curriculum.
      </p>
    ),
    buttonLabel: "Check It Out",
    buttonHref:  "https://store-prod.nccer.org/nccer-core-toolbox",
  },

  getInTouch: {
    body: (
      <p>
        Need assistance? Contact a member of our Workforce Development Solutions team by
        clicking the Contact Us button.
      </p>
    ),
    buttonLabel: "Contact Us",
    buttonHref:  "/nccer-workforce-development-team/",
  },
};

export default postsecondary;
