import type { ReactNode } from "react";

export type ProgramItem = {
  title: string;
  content: ReactNode;
  learnMoreHref: string;
};

export type PartnerItem = {
  imgSrc: string;
  alt: string;
  href: string;
};

export type ProgramsPageData = {
  navItems: { href: string; label: string }[];
  hero: {
    title: string;
    bgImage: string;
    description: ReactNode;
    breadcrumbParentLabel: string;
    breadcrumbParentHref: string;
  };
  overview: {
    content: ReactNode;
    quickLinks: { label: string; href: string; icon: string }[];
  };
  programs: ProgramItem[];
  partners: PartnerItem[];
};

const programsData: ProgramsPageData = {
  navItems: [
    { href: "#overview",  label: "Overview"  },
    { href: "#services",  label: "Services"  },
    { href: "#contact",   label: "Contact"   },
  ],

  hero: {
    title: "Our Roofing Services",
    bgImage:
      "url(https://manhattanroofs.com/wp-content/uploads/flat-roof-nyc.jpg) no-repeat center center / cover",
    // [TODO: Replace with confirmed Manhattan Roofing services page hero photo]
    description: (
      <p>
        Manhattan Roofing provides flat roof installation and repair, shingle
        roofing, skylight work, storm damage repair, and ongoing maintenance
        for residential and commercial buildings across Manhattan, Brooklyn,
        Queens, and the Bronx — with free on-site estimates and warrantied
        workmanship on every job.
      </p>
    ),
    breadcrumbParentLabel: "Home",
    breadcrumbParentHref: "/",
  },

  overview: {
    content: (
      <>
        <p>
          Every service Manhattan Roofing provides is handled by the owner&apos;s
          crew — not subcontractors. George has been in construction for over
          30 years, and his team brings that experience to flat roofs, shingle
          roofs, skylight installations, and storm damage repairs across all
          five boroughs.
        </p>
        <p>
          Free on-site estimates are available for all services. We assess
          your roof, explain what we find, and give you a clear price before
          any work begins. All completed work is warrantied.
        </p>
      </>
    ),
    quickLinks: [
      { label: "Call (212) 495-9840", href: "tel:2124959840",  icon: "icon-message" },
      { label: "Contact Us Online",   href: "/contact-us",     icon: "icon-mail"    },
      { label: "Service Areas",       href: "/service-areas",  icon: "icon-info"    },
    ],
  },

  programs: [
    {
      title: "Flat Roof Installation",
      content: (
        <p>
          Full flat roof installations and replacements on NYC residential and
          commercial buildings — modified bitumen, EPDM, TPO, and built-up
          systems. Free estimate includes a recommendation on the right system
          for your building type and budget.
        </p>
      ),
      learnMoreHref: "/craft-catalog/flat-roof-installation",
    },
    {
      title: "Flat Roof Repair",
      content: (
        <p>
          Membrane repairs, seam sealing, flashing replacement, and drain
          clearing for flat roofs showing leaks or deterioration. Repairs
          handled by the owner&apos;s crew with materials matched to the
          existing system. All repair work is warrantied.
        </p>
      ),
      learnMoreHref: "/craft-catalog/flat-roof-repair",
    },
    {
      title: "Shingle Roof Installation & Replacement",
      content: (
        <p>
          Full shingle roof replacements on pitched residential roofs across
          NYC. Complete tear-off, deck inspection, proper underlayment and
          ice shield installation, and architectural shingle installation
          to manufacturer spec. Most jobs completed in one day.
        </p>
      ),
      learnMoreHref: "/craft-catalog/shingle-roof-installation",
    },
    {
      title: "Roof Repair & Leak Detection",
      content: (
        <p>
          We track leaks to their source — not just patch where water is
          appearing on the ceiling. Covers flat and shingle roofs, all
          flashing types, and drainage issues. Free estimate on all repair
          work identified during the inspection.
        </p>
      ),
      learnMoreHref: "/craft-catalog/roof-repair",
    },
    {
      title: "Wind & Storm Damage Repair",
      content: (
        <p>
          Post-storm inspections and repairs for lifted membrane, displaced
          flashing, missing shingles, and skylight damage. Documentation
          provided for insurance purposes. Repairs prioritized to stop
          active water entry before addressing secondary damage.
        </p>
      ),
      learnMoreHref: "/craft-catalog/storm-damage-repair",
    },
    {
      title: "Skylight Installation & Repair",
      content: (
        <p>
          New skylight installations and repairs on flat and pitched roofs.
          Proper curb flashing is the difference between a skylight that
          performs for decades and one that leaks from the start — we do
          it right. Skylight leak detection and glazing replacement also available.
        </p>
      ),
      learnMoreHref: "/craft-catalog/skylight-installation-repair",
    },
    {
      title: "Roof & Gutter Cleaning",
      content: (
        <p>
          Debris removal from flat roof membranes and drains, plus gutter
          cleaning and downspout flushing for pitched roofs. Blocked drains
          cause ponding that degrades roofing membrane — regular cleaning
          extends the life of your roof system.
        </p>
      ),
      learnMoreHref: "/craft-catalog/roof-gutter-cleaning",
    },
    {
      title: "Roof Maintenance Plans",
      content: (
        <p>
          Scheduled annual or bi-annual maintenance visits for building owners
          and property managers — inspection, drain clearing, minor seam sealing,
          and flashing re-caulking. Written condition report after each visit.
          Proactive maintenance prevents small issues from becoming major repairs.
        </p>
      ),
      learnMoreHref: "/craft-catalog/roof-maintenance-plans",
    },
    {
      title: "Roof & Attic Inspection",
      content: (
        <p>
          Professional roof and attic inspection with written condition report.
          Common for pre-purchase due diligence, post-storm assessment, and
          annual condition checks on aging flat roofs. Free estimates on any
          repair work identified.
        </p>
      ),
      learnMoreHref: "/craft-catalog/roof-attic-inspection",
    },
    {
      title: "Energy & Insulation Solutions",
      content: (
        <p>
          Roofing insulation assessment and installation as part of flat roof
          replacement or as a standalone upgrade. Proper insulation reduces
          heat gain on upper floors, lowers HVAC costs, and extends membrane
          life by reducing thermal expansion stress on the system.
        </p>
      ),
      learnMoreHref: "/craft-catalog/energy-insulation",
    },
  ],

  partners: [],
};

export default programsData;
