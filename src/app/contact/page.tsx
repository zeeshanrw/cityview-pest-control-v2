"use client";

import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { ALL_SERVICES, BUSINESS } from "@/lib/constants";

function ContactForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("service");

  const [selectedServices, setSelectedServices] = useState<string[]>(
    preselected ? [preselected] : []
  );

  function toggleService(slug: string) {
    setSelectedServices((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div className="mb-10 max-w-3xl">
        <span className="font-mono text-xs uppercase tracking-widest text-signal">
          Contact Cityview
        </span>
        <h1 className="mt-2 font-display text-4xl font-semibold uppercase tracking-tight md:text-5xl">
          Get a Free Quote
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate md:text-lg">
          Fastest response is by phone or WhatsApp. Send the full job details,
          or leave your number and we&apos;ll call you back.
        </p>
      </div>

      <div className="mb-10 flex flex-wrap gap-3">
        <a
          href={BUSINESS.phoneHref}
          className="px-5 py-3 bg-signal hover:bg-signal-dark text-ink font-display font-semibold uppercase text-sm tracking-wide transition-colors"
        >
          Call {BUSINESS.phone}
        </a>

        <a
          href={BUSINESS.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 border-2 border-ink hover:bg-ink hover:text-paper font-display font-semibold uppercase text-sm tracking-wide transition-colors"
        >
          WhatsApp Us
        </a>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(22rem,0.85fr)] lg:items-start">
        <section className="overflow-hidden rounded-lg border border-line bg-paper">
          <div className="border-b border-line px-5 py-4 md:px-6">
            <p className="font-display text-2xl font-semibold uppercase tracking-tight">
              Tell Us What&apos;s Going On
            </p>
            <p className="mt-1 text-sm leading-relaxed text-slate">
              Use this for pest type, city, and preferred contact method.
            </p>
          </div>

          {/* Note: this form doesn't submit anywhere yet — needs a form handler
              (e.g. Formspree, Resend, or a simple API route) before launch. */}
          <form className="space-y-6 p-5 md:p-6">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="block font-mono text-xs uppercase tracking-widest text-slate mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-line px-4 py-3 bg-paper focus:outline-none focus:border-ink"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-widest text-slate mb-2">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  className="w-full border border-line px-4 py-3 bg-paper focus:outline-none focus:border-ink"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-xs uppercase tracking-widest text-slate mb-2">
                Service(s)
              </label>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {ALL_SERVICES.map((service) => (
                  <label
                    key={service.slug}
                    className="flex items-center gap-2 text-sm border border-line px-3 py-2 cursor-pointer has-[:checked]:border-ink has-[:checked]:bg-ink/5"
                  >
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service.slug)}
                      onChange={() => toggleService(service.slug)}
                      className="accent-ink"
                    />
                    {service.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-mono text-xs uppercase tracking-widest text-slate mb-2">
                Preferred Contact Method
              </label>
              <select
                name="contactMethod"
                className="w-full border border-line px-4 py-3 bg-paper focus:outline-none focus:border-ink"
              >
                <option value="call">Call</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full px-5 py-3.5 bg-signal hover:bg-signal-dark text-ink font-display font-semibold uppercase tracking-wide transition-colors"
            >
              Request Quote
            </button>
          </form>
        </section>

        <section
          id="callback"
          className="scroll-mt-24 overflow-hidden rounded-lg border border-ink bg-ink text-paper"
        >
          <div className="border-b border-paper/15 px-5 py-4 md:px-6">
            <p className="font-mono text-xs uppercase tracking-widest text-signal">
              Short on Time?
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold uppercase tracking-tight">
              Request a Callback
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-paper/70">
              Leave your number and a quick note. We&apos;ll call you back as
              soon as possible.
            </p>
          </div>

          <form className="space-y-4 p-5 md:p-6">
            <div>
              <label className="block font-mono text-xs uppercase tracking-widest text-paper/65 mb-2">
                Name
              </label>
              <input
                type="text"
                name="callbackName"
                required
                className="w-full border border-paper/25 px-4 py-3 bg-paper text-ink focus:outline-none focus:border-signal"
              />
            </div>

            <div>
              <label className="block font-mono text-xs uppercase tracking-widest text-paper/65 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="callbackPhone"
                required
                className="w-full border border-paper/25 px-4 py-3 bg-paper text-ink focus:outline-none focus:border-signal"
              />
            </div>

            <div>
              <label className="block font-mono text-xs uppercase tracking-widest text-paper/65 mb-2">
                Message
              </label>
              <textarea
                name="callbackMessage"
                rows={5}
                placeholder="Tell us the pest issue and the best time to call."
                className="w-full resize-none border border-paper/25 px-4 py-3 bg-paper text-ink focus:outline-none focus:border-signal"
              />
            </div>

            <button
              type="submit"
              className="w-full px-5 py-3.5 bg-signal hover:bg-signal-dark text-ink font-display font-semibold uppercase tracking-wide transition-colors"
            >
              Request Callback
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactForm />
    </Suspense>
  );
}
