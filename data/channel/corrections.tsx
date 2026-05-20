import type { ChannelPageData } from "@/components/custom/channel/types";

const corrections: ChannelPageData = {
  slug: "corrections",

  navItems: [
    { href: "#channel",           label: "Learn More"                },
    { href: "#helpful_resources", label: "Quick Links"               },
    { href: "#crafts",            label: "Explore Programs & Crafts" },
    { href: "#testimonials",      label: "Testimonials"              },
    { href: "#get_in_touch",      label: "Get in Touch"              },
  ],

  hero: {
    title:           "Corrections",
    breadcrumbLabel: "Corrections",
    imageBg:
      "url(https://www.nccer.org/media/2023/03/Carpentry-macro-640x587.jpg) no-repeat center center / cover",
    description: (
      <p>
        NCCER&rsquo;s construction craft training programs are utilized in more federal,
        state and private correctional facilities than any other construction program. We
        understand the importance of providing a fully standardized program that includes
        personnel training and certification, curriculum, credentials, and clear career
        pathways to residents with a goal of successful re-entry into the workforce.
      </p>
    ),
  },

  learnMore: {
    title: "NCCER for Corrections",
    content: (
      <>
        <p>
          NCCER&rsquo;s comprehensive workforce development system provides correctional
          facilities with everything they need to implement successful construction craft
          training programs.
        </p>

        <h5>Personnel training and support</h5>
        <p>
          Our comprehensive program provides training for your directors and managers and
          includes instructor, proctor, and evaluator certifications. Whether you choose to
          use staff, residents or third-party instructors, our systematic training and
          resources provide the support they need to feel confident in delivering the
          materials.
        </p>

        <h5>Structured curricula</h5>
        <p>
          We offer curriculum in over 40 different craft areas that allow you to choose the
          titles that best fit your budget, facility, and local employer needs. All of our
          curricula are developed and updated in conjunction with subject matter experts to
          ensure they meet the needs of the construction industry. It also meets the
          Department of Labor&rsquo;s Office of Apprenticeship time requirements and includes
          knowledge and performance tests that result in credentials. These credentials are
          stored in our secure online database and provide your learners with certificates
          and wallet cards that allow potential employers to verify their knowledge and skills
          after release.
        </p>

        <h5>Connecting with potential employers</h5>
        <p>
          NCCER has worked hard to educate our network of employers and training facilities
          on the value of providing second chance opportunities to those learners reentering
          the workforce. Our team of workforce development managers can assist your
          organization in connecting with employers.
        </p>
      </>
    ),
  },

  resources: {
    title: "Helpful Resources for Corrections",
    resources: [
      { title: "Become NCCER Accredited",                             href: "/benefits-of-nccer-accreditation/",                                    icon: "icon-info"    },
      { title: "Contact Our Workforce Development Solutions Team",     href: "/nccer-workforce-development-team/",                                   icon: "icon-message" },
      { title: "Learn About Our Industry-Recognized Credentials",     href: "/credentials-certifications/industry-recognized-credentials/",         icon: "icon-link"    },
      { title: "Order Books & Modules",                               href: "/order-books-modules/",                                                icon: "icon-books"   },
      { title: "Pearson Executive Directors",                         href: "/pearson-eds/",                                                        icon: "icon-mail"    },
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
      { label: "Carpentry", href: "https://www.nccer.org/craft-catalog/carpentry/" },
      { label: "Electrical", href: "https://www.nccer.org/craft-catalog/electrical/" },
      { label: "Masonry",   href: "https://www.nccer.org/craft-catalog/masonry/"   },
      { label: "Welding",   href: "https://www.nccer.org/craft-catalog/welding/"   },
    ],
  },

  testimonials: {
    videos: [
      {
        bg:       "url(https://www.nccer.org/media/2023/04/NCCER-Testimonial-Brian-Booker-645x1024.png)",
        src:      "https://www.nccer.org/media/2023/04/Brian-Brooker-Testimonial-No-Graphics.mp4",
        title:    "NCCER Testimonial | Brian Booker",
        name:     "Brian Booker",
        position: "Assistant Superintendent, Competitive Edge Partners, LLC",
        readHref: "https://www.nccer.org/my-nccer-story/nccer-testimonial-brian-booker/",
      },
      {
        bg:       "url(https://www.nccer.org/media/2023/04/NCCER-Testimonial-Jason-Haikey-640x1024.png)",
        src:      "https://www.nccer.org/media/2023/04/Jason-Haikey-Testimonial-No-Graphics.mp4",
        title:    "NCCER Testimonial | Jason Haikey",
        name:     "Jason Haikey",
        position: "Field Superintendent, Competitive Edge Partners, LLC",
        readHref: "https://www.nccer.org/my-nccer-story/nccer-testimonial-jason-haikey/",
      },
    ],
    quote: {
      text:
        "NCCER training has provided our offenders the opportunity that they previously would not have been provided. They have the opportunity to earn a skill and training that they can then apply to gainful employment back into our communities.",
      name:     "Kelsey Osman",
      position: "Career and Technical Education Coordinator at the Louisiana Department of Corrections",
    },
  },

  flexFeature: undefined,

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

export default corrections;
