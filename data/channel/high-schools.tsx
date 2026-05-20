import type { ChannelPageData } from "@/components/custom/channel/types";

const highSchools: ChannelPageData = {
  slug: "high-schools",

  navItems: [
    { href: "#channel",           label: "Learn More"                     },
    { href: "#helpful_resources", label: "Quick Links"                    },
    { href: "#crafts",            label: "Programs & Crafts"              },
    { href: "#testimonials",      label: "Testimonials"                   },
    { href: "#flex_feature",      label: "Core Toolbox"                   },
    { href: "#get_in_touch",      label: "Get in Touch"                   },
  ],

  hero: {
    title:           "High Schools",
    breadcrumbLabel: "High Schools",
    imageBg:
      "url(https://www.nccer.org/media/2024/02/IMG_1370-443x559-1.jpg) no-repeat center center / cover",
    description: (
      <p>
        High schools are critically important in building successful career pathways for
        individuals and in creating talent pipelines for industry. NCCER has been providing
        quality education programs and credentials to high schools for over 20 years.
      </p>
    ),
  },

  learnMore: {
    title: "NCCER for High Schools",
    content: (
      <>
        <p>
          NCCER is uniquely positioned to work with high schools. Not only do we provide
          industry-recognized credentials, but we have developed features specifically with
          high school educators and students in mind.
        </p>

        <h5>Meeting standards and requirements</h5>
        <p>
          NCCER curricula are aligned with Common Career and Technical Core (CCTC) standards.
          Each chapter also includes academic correlation guides that are designed to help
          students connect what they&rsquo;re learning in their technical courses with what
          they&rsquo;re learning in their core academic courses like math, science and reading.
        </p>

        <h5>Career pathways and articulation</h5>
        <p>
          NCCER can help your students build a clear and connected pathway to a career in
          construction. Our credentials can articulate to community college credit through
          formal articulation agreements, and our apprenticeship-style training gives students
          skills that can apply directly to entry-level positions in their craft area.
        </p>

        <h5>Accreditation Options</h5>
        <p>
          High schools can choose to become a full NCCER Accredited Training Sponsor (ATS),
          which includes access to assessments, credentials and all of our support services.
          If full accreditation isn&rsquo;t the right fit, our High School Builder Program
          provides an easy, low-cost option for getting started with NCCER.
        </p>

        <h5>Print and online solutions</h5>
        <p>
          NCCER curricula are available in both print and digital formats. Our online learning
          platform, NCCERconnect, provides a blended learning environment that increases
          student engagement and allows instructors to monitor student progress.
        </p>

        <h5>Connecting students with additional training and jobs</h5>
        <p>
          NCCER works with a wide network of employers and training organizations. Our
          credentials are recognized throughout the construction industry, helping your
          students stand out when they enter the workforce or continue their education.
        </p>
      </>
    ),
  },

  resources: {
    title: "Helpful Resources for High Schools",
    resources: [
      { title: "Access Our Instructor Toolbox",                   href: "https://toolbox.nccer.org/",                                                                                         icon: "icon-link",    external: true },
      { title: "Become NCCER Accredited",                         href: "/benefits-of-nccer-accreditation/",                                                                                  icon: "icon-info"                   },
      { title: "Contact Our Workforce Development Solutions Team", href: "/nccer-workforce-development-team/",                                                                                icon: "icon-message"                },
      { title: "Learn About NCCER's High School Builder Program", href: "/explore/high-schools/high-school-builder-program-general",                                                          icon: "icon-info"                   },
      { title: "Optimize Your Classroom with NCCERconnect",       href: "https://www.pearson.com/us/higher-education/products-services-teaching/resources-by-discipline/nccer.html",          icon: "icon-link",    external: true },
      { title: "Order Books & Modules",                           href: "/order-books-modules/",                                                                                              icon: "icon-books"                  },
      { title: "Pearson Executive Directors",                     href: "/pearson-eds/",                                                                                                      icon: "icon-mail"                   },
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
      { label: "Carpentry",                    href: "https://www.nccer.org/craft-catalog/carpentry/"                                              },
      { label: "Core",                         href: "https://www.nccer.org/craft-catalog/core/"                                                   },
      { label: "High School Builder Program",  href: "https://www.nccer.org/explore/high-schools/high-school-builder-program-general/"             },
      { label: "Industry-Recognized Credentials", href: "https://www.nccer.org/credentials-certifications/industry-recognized-credentials/"        },
    ],
  },

  testimonials: {
    videos: [
      {
        bg:       "url(https://www.nccer.org/media/2022/12/Screenshot-2022-12-02-at-1.55-1.jpg)",
        src:      "https://www.nccer.org/media/2023/03/Scottie-Smith-Testimonial-Vertical-384x600-1.mp4",
        title:    "Why NCCER's Welding Curriculum is a Good Fit",
        name:     "Scottie Smith",
        position: "Director of Welding Technology at Northwest Florida State College",
        readHref: "https://www.nccer.org/my-nccer-story/why-nccers-welding-curriculum-is-a-good-fit/",
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
        Need assistance? Contact a member of our CTE Solutions team by clicking the Contact
        Us button.
      </p>
    ),
    buttonLabel: "Contact Us",
    buttonHref:  "/nccer-workforce-development-team/",
  },
};

export default highSchools;
