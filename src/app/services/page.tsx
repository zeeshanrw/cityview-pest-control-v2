import Link from "next/link";
import { PEST_SERVICES } from "@/lib/services-data";
import { BUSINESS } from "@/lib/constants";

export const metadata = {
  title: "Pest Control Services | Cityview Pest Control",
  description:
    "Wasps, ants, rodents, termites, and more — pest control services across the GTA. Call or WhatsApp for a free quote.",
};

export default function ServicesOverview() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 md:px-6 pt-12 pb-8">
        <span className="font-mono text-xs uppercase tracking-widest text-signal">
          What We Handle
        </span>
        <h1 className="font-display font-semibold uppercase text-4xl md:text-5xl tracking-tight mt-2">
          Pest Control Services
        </h1>
      </div>

      {PEST_SERVICES.map((service, i) => {
        const imageOnLeft = i % 2 === 0;
        return (
          <section
            key={service.slug}
            id={service.slug}
            className="scroll-mt-20 border-t border-line"
          >
            <div className="mx-auto max-w-6xl px-4 md:px-6 py-14 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className={imageOnLeft ? "md:order-1" : "md:order-2"}>
                {/* Placeholder — swap for a real photo or licensed stock image */}
                <div className="aspect-4/3 bg-ink/5 border border-line flex items-center justify-center">
                  <span className="font-mono text-xs text-slate uppercase tracking-widest">
                    {service.label} — image placeholder
                  </span>
                </div>
              </div>

              <div className={imageOnLeft ? "md:order-2" : "md:order-1"}>
                <h2 className="font-display font-semibold uppercase text-2xl md:text-3xl tracking-tight mb-2">
                  {service.label}
                </h2>
                <p className="text-signal-dark font-medium mb-4">{service.tagline}</p>
                <p className="text-slate leading-relaxed mb-6">{service.summary}</p>

                <div className="flex flex-wrap gap-3">
                  
                    href={BUSINESS.phoneHref}
                    className="px-5 py-3 bg-signal hover:bg-signal-dark text-ink font-display font-semibold uppercase text-sm tracking-wide transition-colors"
                  <a>
                    Call Now
                  </a>
                  <Link
                    href={`/contact?service=${service.slug}`}
                    className="px-5 py-3 border-2 border-ink hover:bg-ink hover:text-paper font-display font-semibold uppercase text-sm tracking-wide transition-colors"
                  >
                    Get a Free Quote
                  </Link>
                  <Link
                    href={`/services/${service.slug}`}
                    className="px-5 py-3 text-ink underline underline-offset-4 text-sm self-center hover:text-signal-dark"
                  >
                    Full details →
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}