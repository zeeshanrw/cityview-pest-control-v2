import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

export const metadata = {
  title: "About Us | Cityview Pest Control",
  description:
    "Fast, direct pest control and wildlife removal across the GTA. Learn how Cityview Pest Control handles every job.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Intro */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 pt-12 md:pt-16 pb-12 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-signal">
              About Us
            </span>
            <h1 className="font-display font-semibold uppercase text-4xl md:text-5xl tracking-tight mt-2 mb-6">
              Pest Control, Handled Right
            </h1>
            <p className="text-slate leading-relaxed mb-4">
              Cityview Pest Control handles all pest types and wildlife
              removal across the Greater Toronto Area — from a single ant
              trail to a full wasp nest removal.
            </p>
            <p className="text-slate leading-relaxed">
              There&apos;s no call centre and no rigid pricing sheet. Every
              job starts with a call or a WhatsApp message, and every quote
              is worked out based on what&apos;s actually going on at your
              property.
            </p>
          </div>

          {/* Placeholder — swap for a real photo once purchased/provided */}
          <div className="aspect-4/3 bg-ink/5 border border-line flex items-center justify-center">
            <span className="font-mono text-xs text-slate uppercase tracking-widest">
              Photo placeholder
            </span>
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="border-t border-line bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
          <span className="font-mono text-xs uppercase tracking-widest text-signal">
            Our Approach
          </span>
          <h2 className="font-display font-semibold uppercase text-3xl md:text-4xl tracking-tight mt-2 mb-10">
            What You Can Expect
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-signal">
                01
              </span>
              <p className="font-display font-semibold uppercase text-xl mt-3 mb-2">
                Fast, Direct Response
              </p>
              <p className="text-paper/70 text-sm leading-relaxed">
                Call or WhatsApp and get a real answer. Same-day response
                available across the GTA.
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
                Every infestation is different. Quotes are worked out
                directly with you — never a generic rate card.
              </p>
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-signal">
                03
              </span>
              <p className="font-display font-semibold uppercase text-xl mt-3 mb-2">
                All Pests, All Wildlife
              </p>
              <p className="text-paper/70 text-sm leading-relaxed">
                From ants and wasps to raccoons and squirrels — one call
                covers it, residential or commercial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-16">
          <span className="font-mono text-xs uppercase tracking-widest text-signal">
            Licensed &amp; Insured
          </span>
          <h2 className="font-display font-semibold uppercase text-2xl tracking-tight mt-2 mb-8">
            Credentials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="border border-line p-5">
              <p className="font-mono text-xs uppercase tracking-widest text-slate mb-1">
                WSIB
              </p>
              <p className="font-display font-semibold">Registered &amp; Covered</p>
            </div>
            <div className="border border-line p-5">
              <p className="font-mono text-xs uppercase tracking-widest text-slate mb-1">
                Pest Control License
              </p>
              <p className="font-display font-semibold">[LICENSE NUMBER]</p>
            </div>
            <div className="border border-line p-5">
              <p className="font-mono text-xs uppercase tracking-widest text-slate mb-1">
                Association
              </p>
              <p className="font-display font-semibold">OAPP Member</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-20 text-center">
          <h2 className="font-display font-semibold uppercase text-2xl md:text-3xl tracking-tight mb-4">
            Got a Pest Problem?
          </h2>
          <p className="text-slate mb-8">
            Call or WhatsApp for a free quote — no pricing surprises.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={BUSINESS.phoneHref}
              className="px-6 py-3.5 bg-signal hover:bg-signal-dark text-ink font-display font-semibold uppercase tracking-wide transition-colors"
            >
              Call {BUSINESS.phone}
            </a>
            <Link
              href="/contact"
              className="px-6 py-3.5 border-2 border-ink hover:bg-ink hover:text-paper font-display font-semibold uppercase tracking-wide transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}