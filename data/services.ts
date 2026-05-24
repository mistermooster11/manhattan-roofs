export type Service = {
  number: string;
  title: string;
  image: string;
  href: string;
  width: number;
  height: number;
};

export type SidebarService = {
  label: string;
  href: string;
};

export const sidebarServices: SidebarService[] = [
  { label: "Residential Roofing",            href: "/residential-roofing/" },
  { label: "Commercial Roofing",             href: "/commercial-roofing/" },
  { label: "Roof Inspection & Assessment",   href: "/roof-inspection/" },
  { label: "Chimney Repair & Waterproofing", href: "/chimney-repair/" },
  { label: "Emergency Roof Repair",          href: "/emergency-roof-repair/" },
];

export const services: Service[] = [
  {
    number: "01",
    title: "Residential Roofing",
    image: "/images/roofing-crew-working-residential-roof-installation.jpg",
    href: "/residential-roofing/",
    width: 535,
    height: 643,
  },
  {
    number: "02",
    title: "Commercial Roofing",
    image: "/images/worker-applying-roof-coating-roller.jpg",
    href: "/commercial-roofing/",
    width: 535,
    height: 643,
  },
  {
    number: "03",
    title: "Roof Inspection & Assessment",
    image: "/images/roofer-inspecting-asphalt-shingles-closeup.jpg",
    href: "/roof-inspection/",
    width: 535,
    height: 643,
  },
  {
    number: "04",
    title: "Chimney Repair & Waterproofing",
    image: "/images/chimney-inspection-repair-rooftop-worker.jpg",
    href: "/chimney-repair/",
    width: 535,
    height: 643,
  },
];
