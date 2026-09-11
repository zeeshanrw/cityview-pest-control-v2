import ServiceGrid from "@/components/ServiceGrid";
import HomeHeroSlideshow from "@/components/HomeHeroSlideshow";
import GoogleReviewsSlideshow from "@/components/GoogleReviewsSlideshow";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Cityview Pest Control | GTA Pest & Wildlife Removal", "Family-owned, licensed pest control and humane wildlife removal across the Greater Toronto Area. Call Cityview for a free quote.", "/");
export default function Home() {
  return (
    <>
      <HomeHeroSlideshow />
      <GoogleReviewsSlideshow />

      {/* Services — case file index */}
      <section id="services" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 md:px-6 pt-12 pb-16 md:pt-16 md:pb-24">
          <div className="mb-10 flex justify-center text-center">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-signal">
                What We Handle
              </span>
              <h2 className="font-display font-semibold uppercase text-3xl md:text-4xl tracking-tight mt-2">
                Every Pest. Every Time.
              </h2>
            </div>
          </div>

          <ServiceGrid />
        </div>
      </section>

      {/* Trust / why direct-to-operator */}
      <section className="border-t border-line bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-signal">
              01
            </span>
            <p className="font-display font-semibold uppercase text-xl mt-3 mb-2">
              You Talk to the Person Doing the Work
            </p>
            <p className="text-paper/70 text-sm leading-relaxed">
              No dispatch centre, no sales team. When you call or WhatsApp,
              you&apos;re reaching the technician who shows up.
            </p>
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-signal">
              02
            </span>
            <p className="font-display font-semibold uppercase text-xl mt-3 mb-2">
              Pricing Fits the Job
            </p>
            <p className="text-paper/70 text-sm leading-relaxed">
              Every infestation is different. Quotes are worked out directly
              with you — never a generic rate card.
            </p>
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-signal">
              03
            </span>
            <p className="font-display font-semibold uppercase text-xl mt-3 mb-2">
              GTA-Wide Coverage
            </p>
            <p className="text-paper/70 text-sm leading-relaxed">
              From residential homes to commercial properties, across the
              Greater Toronto Area.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
