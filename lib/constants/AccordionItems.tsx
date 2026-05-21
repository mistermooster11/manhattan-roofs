
type AccordionStep = { label: string; body: string };

export const accordionItems = [
  {
    id: "accordion-0",
    title: "Flat Roof Repair",
    image: "/images/worker-applying-roof-coating-roller.jpg",
    description:
      "Membrane failures, open seams, failed flashing — Manhattan Roofing tracks flat roof leaks to their source and fixes them right. No subcontractors. Free on-site estimates. All repair work is warrantied.",
    learnHref: "/craft-catalog/flat-roof-repair",
    steps: [
      { label: "Inspect", body: "We walk the roof, check all flashing terminations, drains, and membrane to find the true leak source." },
      { label: "Free Estimate", body: "Clear repair price before any work begins — no pressure, no surprises." },
      { label: "Repair", body: "Repairs made with materials matched to your existing system for a lasting fix, not a temporary patch." },
      { label: "Verify & Clean Up", body: "We confirm the repair is complete before leaving and clean up the work area." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-1",
    title: "Flat Roof Installation",
    image: "/images/roofing-crew-working-residential-roof-installation.jpg",
    description:
      "Full flat roof replacements on Manhattan, Brooklyn, Queens, and Bronx buildings. George's crew handles tear-offs, deck repairs, and full system installation — modified bitumen, EPDM, TPO — with free estimates and warrantied work.",
    learnHref: "/craft-catalog/flat-roof-installation",
    steps: [
      { label: "Assessment", body: "We assess the existing system, deck condition, and drainage to determine the right approach." },
      { label: "Free Estimate", body: "System recommendation and full price before any work begins." },
      { label: "Installation", body: "Tear-off, deck prep, insulation, and new roofing system installed by the owner's crew." },
      { label: "Inspection & Cleanup", body: "Full post-installation inspection and complete site cleanup before we leave." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-2",
    title: "Skylight Work",
    image: "/images/modern-metal-roof-dormers-wooden-accents.jpg",
    description:
      "Skylight installations and leak repairs on flat and pitched roofs. Proper curb flashing is what separates a skylight that lasts from one that leaks — Manhattan Roofing does it right the first time.",
    learnHref: "/craft-catalog/skylight-installation-repair",
    steps: [
      { label: "Assess", body: "We evaluate the opening, roof structure, and existing flashing (for repairs) before recommending a scope of work." },
      { label: "Free Estimate", body: "Full price for installation or repair before any work begins." },
      { label: "Install or Repair", body: "Installation with proper curb flashing, or targeted repair of failed flashing and glazing." },
      { label: "Verify & Clean Up", body: "We confirm water-tightness before leaving and clean the work area completely." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-3",
    title: "Storm Damage Repair",
    image: "/images/roofing-crew-installing-shingles-on-site.jpg",
    description:
      "Wind and storm damage can compromise a flat or shingle roof without being visible from street level. Manhattan Roofing inspects, documents, and repairs storm damage — with the paperwork your insurance adjuster needs.",
    learnHref: "/craft-catalog/storm-damage-repair",
    steps: [
      { label: "Post-Storm Inspection", body: "We get on the roof and document all damage with photos before starting any repair discussion." },
      { label: "Free Estimate", body: "Detailed repair scope and full price. Insurance documentation provided on request." },
      { label: "Repair", body: "Active water entry stopped first, then structural and cosmetic repairs completed." },
      { label: "Final Check", body: "We confirm all repairs are complete and the roof is water-tight before closing the job." },
    ] as AccordionStep[],
  },
];
