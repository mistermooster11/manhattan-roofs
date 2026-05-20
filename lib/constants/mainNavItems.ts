type NavDropdown = {
  title: string;
  titleHref: string;
  description: string;
  links: { label: string; href: string; external?: boolean }[];
  quickLinks?: { label: string; href: string; icon: string; external?: boolean }[];
};

export type MainNavItem = {
  label: string;
  href?: string | null;
  external?: boolean;
  dropdown?: NavDropdown | null;
};

export const mainNavItems: MainNavItem[] = [
  { label: "Home",     href: "/",              external: false },
  { label: "Services", href: "/craft-catalog", external: false },
  { label: "FAQs",     href: "/general-faqs",  external: false },
  { label: "Contact",  href: "/contact-us",    external: false },
];
