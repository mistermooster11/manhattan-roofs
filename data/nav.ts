export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about-us",
    children: [
      { label: "About Us", href: "/about-us" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Services",
    href: "/services-page",
    children: [
      { label: "Residential Roofing", href: "/residential-roofing" },
      { label: "Commercial Roofing", href: "/commercial-roofing" },
      { label: "Roof Inspection & Assessment", href: "/roof-inspection" },
      { label: "Chimney Repair & Waterproofing", href: "/chimney-repair" },
      { label: "Emergency Roof Repair", href: "/emergency-roof-repair" },
    ],
  },
  { label: "Blog", href: "/blog" },
  {
    label: "Contact",
    href: "/contact-us",
    children: [
      { label: "Get In Touch", href: "/contact-us" },
    ],
  },
];

/* ── Footer links ─────────────────────────────── */
export type FooterLink = { label: string; href: string };

export const quickLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Services", href: "/services-page/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Contact Us", href: "/contact-us/" },
];

export const servicesLinks: FooterLink[] = [
  { label: "Residential Roofing", href: "/residential-roofing/" },
  { label: "Commercial Roofing", href: "/commercial-roofing/" },
  { label: "Roof Inspection & Assessment", href: "/roof-inspection/" },
  { label: "Chimney Repair & Waterproofing", href: "/chimney-repair/" },
  { label: "Emergency Roof Repair", href: "/emergency-roof-repair/" },
];
