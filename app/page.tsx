import Hero from "@/components/custom/Hero";
import HomeSectionWithLine from "@/components/custom/HomeSectionWithLine";
import Insights from "@/components/custom/Insights";
import Testimonial from "@/components/custom/Testimonial";
import HomeCTA from "@/components/custom/HomeCTA";

export default function Home() {
  return (
    <>
      <main
        className="pt-76 relative max-[1150px]:pt-[6.2rem] before:content-[''] before:absolute before:left-0 before:bottom-full before:right-0 before:-mb-76 before:h-screen before:bg-brand-navy max-[1150px]:before:mb-[-6.2rem] overflow-hidden"
      >
        <Hero />
        <HomeSectionWithLine />
        <Insights />
        <Testimonial />
        <HomeCTA />
      </main>
    </>
  );
}
