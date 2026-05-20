import type { ChannelPageData } from "@/components/custom/channel/types";

const associations: ChannelPageData = {
  slug: "associations",

  navItems: [
    { href: "#channel",           label: "Learn More"                },
    { href: "#helpful_resources", label: "Quick Links"               },
    { href: "#crafts",            label: "Explore Programs & Crafts" },
    { href: "#testimonials",      label: "Testimonials"              },
    { href: "#flex_feature",      label: "Core Toolbox"              },
    { href: "#get_in_touch",      label: "Get in Touch"              },
  ],

  hero: {
    title:           "Associations",
    breadcrumbLabel: "Associations",
    imageBg:
      "url(https://www.nccer.org/media/2023/03/Learner-Training-640x587.jpg) no-repeat center center / cover",
    description: (
      <p>
        NCCER understands the important role associations play in the construction industry.
        Their members need a variety of workforce solutions that meet the development needs
        of their people and assist them in growing their businesses. To do that, we recognize
        the time and effort it takes to design and update the resources required to provide
        quality programs to their members. This is where NCCER can help.
      </p>
    ),
  },

  learnMore: {
    title: "NCCER for Associations",
    content: (
      <>
        <p>
          NCCER can help provide your members with a complete workforce development program
          that includes recruitment, training, and retention tools. These tools can be
          incorporated into the services you offer to better serve your membership and help
          your organization generate non-dues revenue.
        </p>

        <h5>Evaluating knowledge and skills</h5>
        <p>
          NCCER&rsquo;s assessments can be used to certify and evaluate your members&rsquo;
          existing workforce. These assessments also provide customized training plans for
          upskilling their employees and placing them correctly in one of your
          organization&rsquo;s existing programs. Combined with performance verifications,
          you are able to provide your members with a full evaluation of the knowledge and
          skills of each of their employees. The assessments can also be used as a pre-hire
          tool to ensure your members&rsquo; potential employees are placed in the correct
          position within their company.
        </p>
        <p>
          The{" "}
          <a href="https://www.nccer.org/assessments/">
            National Craft Assessment and Certification Program (NCACP)
          </a>{" "}
          provides assessments and performance verifications for over 30 craft areas and
          ties directly to the NCCER curricula.
        </p>

        <h5>Designing a training program</h5>
        <p>
          Our vast catalog of craft modules provides associations with the ability to pick
          and choose exactly what their members need and the flexibility to adjust as
          requirements and needs change. Each module of training can stand alone and includes
          a knowledge and performance test that results in a credential. We also provide
          pre-designed programs that meet the Department of Labor Office of Apprenticeship
          time requirements.
        </p>
        <p>
          Our print and online programs allow organizations to offer in-person, hybrid, or
          virtual courses. All of our curriculum titles are available online through
          NCCERconnect, a customized learning management system, or in VitalSource as eText.
        </p>

        <h5>Offering recognition and portability of skills</h5>
        <p>
          NCCER provides credentials and certifications for the training and assessment
          programs offered through accredited organizations. Our secure online database also
          provides transcripts, digital badges and certificates for individuals while
          providing employers and trainers access to validate their accomplishments.
        </p>

        <h5>Building a talent pipeline</h5>
        <p>
          Associations accredited by NCCER can sponsor local high schools and other
          organizations that want to provide construction career and technical education
          programs. This type of relationship can boost the number of individuals interested
          in your training program and open positions available with your members. It also
          gives the individuals a head start for your training programs as many of these
          schools offer Core and Level One. This type of sponsorship helps you build an
          intentional and visible talent pipeline for your members and programs.
        </p>
      </>
    ),
  },

  resources: {
    title: "Helpful Resources for Associations",
    resources: [
      { title: "Become NCCER Accredited",                               href: "/benefits-of-nccer-accreditation/",                                       icon: "icon-info"    },
      { title: "Contact Our Workforce Development Solutions Team",       href: "/nccer-workforce-development-team/",                                      icon: "icon-message" },
      { title: "Explore Our Journey-Level Assessments",                 href: "/assessments/",                                                           icon: "icon-link"    },
      { title: "Learn About Industry-Recognized Credentials",           href: "/credentials-certifications/industry-recognized-credentials/",            icon: "icon-link"    },
      { title: "Pearson Executive Directors",                           href: "/pearson-eds/",                                                           icon: "icon-mail"    },
    ],
  },

  crafts: {
    description: (
      <p>
        NCCER offers curricula for over 40 craft areas with a modular-based training system
        that can be used in apprenticeship style training or can be custom curated to an
        organization&rsquo;s specific needs. View several of our top crafts and programs
        listed or click the button below to view our craft curriculum catalog.
      </p>
    ),
    craftLinks: [
      { label: "Carpentry",                                        href: "https://www.nccer.org/craft-catalog/carpentry/"                                        },
      { label: "Electrical",                                       href: "https://www.nccer.org/craft-catalog/electrical/"                                       },
      { label: "Assessments",                                      href: "https://www.nccer.org/assessments/"                                                    },
      { label: "Construction Superintendent Certification Program", href: "https://www.nccer.org/programs-crafts/programs/construction-superintendent-certification/" },
    ],
  },

  testimonials: {
    videos: [
      {
        bg:       "url(https://www.nccer.org/media/2023/05/NCCER-Testimonial-Anne-Klute-660x1024.png)",
        src:      "https://www.nccer.org/media/2023/05/Anne-Klute-Resized-2.mp4",
        title:    "NCCER Testimonial | Anne Klute",
        name:     "Anne Klute",
        position: "President & CEO, ABC Nebraska South Dakota Chapter",
        readHref: "https://www.nccer.org/my-nccer-story/nccer-testimonial-anne-klute-2/",
      },
      {
        bg:       "url(https://www.nccer.org/media/2023/05/NCCER-Testimonial-Patrick-Dean-651x1024.png)",
        src:      "https://www.nccer.org/media/2023/05/Patrick-Dean-Resized-2.mp4",
        title:    "NCCER Testimonial | Patrick Dean",
        name:     "Patrick Dean",
        position: "President, ABC Virginia",
        readHref: "https://www.nccer.org/my-nccer-story/nccer-testimonial-patrick-dean-2/",
      },
    ],
    quote: {
      text:
        "I think NCCER\u2019s contribution to the industry is it offers the finest curriculum. They engage the contractor community as Subject Matter Experts so that it becomes real and relevant and applicable to today.",
      name:     "Greg Sizemore",
      position: "Vice President of Health, Safety, Environment and Workforce Development at Associated Builders and Contractors (ABC)",
    },
  },

  flexFeature: {
    imageSrc:    "https://www.nccer.org/media/2026/02/0000495_nccer-core-toolbox-480x480.jpeg",
    title:       "Core Toolbox",
    body: (
      <p>
        Need a jumpstart on your organization&rsquo;s collection of construction tools and
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

export default associations;
