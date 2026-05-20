import CraftCatalogHero from "@/components/custom/craft-catalog/CraftCatalogHero";
import CraftCatalogClient from "@/components/custom/craft-catalog/CraftCatalogClient";

export const metadata = {
  title: "Our Roofing Services — Manhattan Roofing",
  description:
    "Manhattan Roofing offers flat roof installation and repair, shingle roofing, skylights, storm damage repair, inspections, and more across Manhattan and all NYC boroughs. Free on-site estimates.",
};

export default function CraftCatalogPage() {
  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
      <CraftCatalogHero />
      <CraftCatalogClient />
    </main>
  );
}
