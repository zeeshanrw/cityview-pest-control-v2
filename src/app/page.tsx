import Link from "next/link";
import { DispatchTicket } from "@/components/CTAButtons";
import { BUSINESS, ALL_SERVICES } from "@/lib/constants";
export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-start">
          <div>
            <span className="inline-block bg-alert text-paper px-4 py-2 font-display font-bold uppercase text-sm md:text-base tracking-wide">
              ⚠ Wasp Activity Is High Right Now Across the GTA
            </span>
<h1 className="font-display font-semibold uppercase text-4xl md:text-6xl leading-[0.95] tracking-tight mt-4 mb-6">
  Summer&apos;s here.
  <br />
  So are the pests.
</h1>
<p className="text-slate text-lg leading-relaxed max-w-lg mb-8">
  From wasp nests to ants and mosquitoes, we handle it all across the
  GTA — fast, direct, and priced to fit the job. Call or WhatsApp and
  get back to your summer.
</p>

            <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm text-slate">
              <span>&#10003; Same-day response available</span>
              <span>&#10003; All pests, all wildlife</span>
              <span>&#10003; No fixed pricing surprises</span>
            </div>
          </div>

          <DispatchTicket />
          <p className="text-center mt-3">
            <Link href="/contact#callback" className="text-sm text-slate underline underline-offset-4 hover:text-ink">
             Prefer we call you? Request a callback →
            </Link>
          </p>
        </div>
      </section>

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
            {ALL_SERVICES.map((service, i) => (
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
