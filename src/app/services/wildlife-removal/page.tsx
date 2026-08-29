import Link from "next/link";
import { WILDLIFE_SERVICES } from "@/lib/wildlife-data";
import { BUSINESS } from "@/lib/constants";

export const metadata = {
  title: "Wildlife Removal | Cityview Pest Control",
  description:
    "Humane wildlife removal across the GTA — squirrels, raccoons, bats, skunks, birds, and opossums. Call or WhatsApp for a free quote.",
};

export default function WildlifeOverview() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 md:px-6 pt-12 pb-8">
        <span className="font-mono text-xs uppercase tracking-widest text-signal">
          Wildlife Removal
        </span>
        <h1 className="font-display font-semibold uppercase text-4xl md:text-5xl tracking-tight mt-2">
          Safe, Humane Wildlife Removal
        </h1>
      </div>

      {WILDLIFE_SERVICES.map((animal, i) => {
        const imageOnLeft = i % 2 === 0;
        return (
          <section
            key={animal.slug}
            id={animal.slug}
            className="scroll-mt-20 border-t border-line"
          >
            <div className="mx-auto max-w-6xl px-4 md:px-6 py-14 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className={imageOnLeft ? "md:order-1" : "md:order-2"}>
                <div className="aspect-4/3 bg-ink/5 border border-line flex items-center justify-center">
                  <span className="font-mono text-xs text-slate uppercase tracking-widest">
                    {animal.label} — image placeholder
                  </span>
                </div>
              </div>

              <div className={imageOnLeft ? "md:order-2" : "md:order-1"}>
                <h2 className="font-display font-semibold uppercase text-2xl md:text-3xl tracking-tight mb-2">
                  {animal.label}
                </h2>
                <p className="text-signal-dark font-medium mb-4">{animal.tagline}</p>
                <p className="text-slate leading-relaxed mb-6">{animal.summary}</p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={BUSINESS.phoneHref}
                    className="px-5 py-3 bg-signal hover:bg-signal-dark text-ink font-display font-semibold uppercase text-sm tracking-wide transition-colors"
                  >
                    Call Now
                  </a>
                  <Link
                    href={`/contact?service=${animal.slug}`}
                    className="px-5 py-3 border-2 border-ink hover:bg-ink hover:text-paper font-display font-semibold uppercase text-sm tracking-wide transition-colors"
                  >
                    Get a Free Quote
                  </Link>
                  <Link
                    href={`/services/wildlife-removal/${animal.slug}`}
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