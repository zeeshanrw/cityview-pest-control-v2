import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("About Us | Cityview Pest Control", "Meet Cityview Pest Control, a family-owned, fully licensed pest and wildlife control company serving the Greater Toronto Area with care.", "/about");

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
              Local Expertise. Family-Level Care.
            </h1>
            <p className="text-slate leading-relaxed mb-4">
              Cityview Pest Control is a family-owned business that began
              during the COVID-19 pandemic. Today, we provide fully licensed
              pest control and humane wildlife removal for families across the
              Greater Toronto Area, with personal attention at every step.
            </p>
            <p className="text-slate leading-relaxed">
              We know a pest problem can feel stressful and personal. That is
              why we listen carefully, explain the options clearly, and treat
              every home as if it were our own. When you call Cityview, you are
              treated like family—from the first conversation to the final
              inspection.
            </p>
          </div>

          <div className="rounded-xl border-t-4 border-signal bg-ink p-8 text-paper md:p-12">
            <p className="font-mono text-xs uppercase tracking-widest text-signal">Our commitment to you</p>
            <p className="mt-5 font-display text-3xl leading-tight uppercase">Your home. Your peace of mind. Our personal care.</p>
            <p className="mt-5 leading-relaxed text-paper/80">Clear advice, thoughtful treatment, and the attention we would want for our own family.</p>
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
                Care Comes First
              </p>
              <p className="text-paper/70 text-sm leading-relaxed">
                We take the time to understand what you are dealing with and
                recommend a thoughtful solution for your home, family, and
                property.
              </p>
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-signal">
                02
              </span>
              <p className="font-display font-semibold uppercase text-xl mt-3 mb-2">
                Humane, Responsible Methods
              </p>
              <p className="text-paper/70 text-sm leading-relaxed">
                Our pest treatments and wildlife removal methods are chosen
                with safety, care, and respect for people, pets, and animals.
              </p>
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-signal">
                03
              </span>
              <p className="font-display font-semibold uppercase text-xl mt-3 mb-2">
                We Treat It Like Our Own
              </p>
              <p className="text-paper/70 text-sm leading-relaxed">
                We approach your problem with the urgency and attention we
                would want for our own family, and we do not consider the job
                complete until you understand what was done.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-16">
          <span className="font-mono text-xs uppercase tracking-widest text-signal">
            Professional Standards
          </span>
          <h2 className="font-display font-semibold uppercase text-2xl tracking-tight mt-2 mb-8">
            Service You Can Trust
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="border border-line rounded-lg p-5">
              <p className="font-mono text-xs uppercase tracking-widest text-slate mb-1">
                Family-Owned
              </p>
              <p className="font-display font-semibold">Local, Personal Service</p>
            </div>
            <div className="border border-line rounded-lg p-5">
              <p className="font-mono text-xs uppercase tracking-widest text-slate mb-1">
                Fully Licensed
              </p>
              <p className="font-display font-semibold">Professional Pest Control</p>
            </div>
            <div className="border border-line rounded-lg p-5">
              <p className="font-mono text-xs uppercase tracking-widest text-slate mb-1">
                Humane Approach
              </p>
              <p className="font-display font-semibold">Care at Every Step</p>
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
            Tell us what is happening. We will listen, explain the next steps,
            and help you feel comfortable in your home again.
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
