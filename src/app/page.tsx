import Link from "next/link";
import HomeHeroSlideshow from "@/components/HomeHeroSlideshow";
import { HOMEPAGE_SERVICES } from "@/lib/constants";
export default function Home() {
  return (
    <>
      <HomeHeroSlideshow />

      {/* Services — case file index */}
      <section id="services" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-signal">
                What We Handle
              </span>
              <h2 className="font-display font-semibold uppercase text-3xl md:text-4xl tracking-tight mt-2">
                Every Pest. Every Time.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-line border border-line">
            {HOMEPAGE_SERVICES.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-paper hover:bg-ink p-6 md:p-8 transition-colors"
              >
                <span className="font-mono text-xs text-slate group-hover:text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display font-semibold uppercase text-lg md:text-xl mt-3 group-hover:text-paper transition-colors">
                  {service.label}
                </p>
              </Link>
            ))}
          </div>
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
