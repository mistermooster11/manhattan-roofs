import { notFound } from "next/navigation";
import CraftHero       from "@/components/custom/craft-catalog/CraftHero";
import ChannelSidebar  from "@/components/custom/channel/ChannelSidebar";
import CraftOverview   from "@/components/custom/craft-catalog/CraftOverview";
import RelatedCrafts   from "@/components/custom/craft-catalog/RelatedCrafts";
import { servicePages } from "@/data/craft-catalog/service-pages";

// TODO: Replace PLACEHOLDER_BG with a real service photo per slug
const PLACEHOLDER_BG = "/images/IMG_9688-1024x682.jpg";

/* Pre-render all known service slugs at build time */
export function generateStaticParams() {
  return Object.keys(servicePages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = servicePages[slug];
  if (!data) return {};
  return {
    title: `${data.title} — Manhattan Roofing`,
    description: `Professional ${data.title.toLowerCase()} service across Manhattan, Brooklyn, Queens, and The Bronx. Owner-operated, warrantied workmanship, free on-site estimates.`,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = servicePages[slug];
  if (!data) notFound();

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
      <CraftHero
        title={data.title}
        bgImage={PLACEHOLDER_BG}
        breadcrumbs={[
          { label: "Services", href: "/craft-catalog" },
          { label: data.title },
        ]}
      />

      <div className="channel-wrap">
        <div className="inner">
          <ChannelSidebar navItems={data.navItems} />

          <div className="channel-container">

            {/* ── Overview ─────────────────────────────────────────────── */}
            <div id="overview">
              <CraftOverview
                overviewContent={data.overviewContent}
                quickLinks={data.overviewQuickLinks}
              />
            </div>

            {/* ── Middle sections ──────────────────────────────────────── */}
            {data.sections.map((section) => (
              <div key={section.id} id={section.id} className="section-page">
                <div className="content-block">
                  <div className="inner inner--slim-1172 cleared">
                    <h2 className="h3 fadeInUpS wow is-visible">
                      {section.heading}
                    </h2>
                    <div className="cleared">
                      <div className="content-entry p2 fadeInUpS wow is-visible">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* ── CTA banner ───────────────────────────────────────────── */}
            <div className="banner-craft ia-bg-sky fadeInUp wow is-visible">
              <div className="inner">
                <div className="content-entry p3">
                  <p>
                    <strong>Ready to book?</strong>{" "}
                    Call{" "}
                    <a href="tel:2124959840">(212) 495-9840</a>{" "}
                    for a free on-site estimate, or{" "}
                    <a href="/contact-us">send us a message online</a>.
                    We give you a price before we start — no surprises.
                  </p>
                </div>
              </div>
            </div>

            {/* ── Related Services ─────────────────────────────────────── */}
            <div id="related_services">
            <RelatedCrafts
              description={
                <p>
                  Manhattan Roofing handles all types of roofing work
                  across Manhattan, Brooklyn, Queens, and The Bronx. Explore our other
                  services below.
                </p>
              }
              crafts={data.relatedServices}
            />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
