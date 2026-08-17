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
    <div className="mx-auto max-w-2xl px-4 md:px-6 py-12 md:py-16">
      <h1 className="font-display font-semibold uppercase text-4xl md:text-5xl tracking-tight mb-3">
        Get a Free Quote
      </h1>
      <p className="text-slate leading-relaxed mb-8">
        Fastest response is by phone or WhatsApp. Prefer to send details
        first? Fill this out and we&apos;ll get back to you.
      </p>

      <div className="flex flex-wrap gap-3 mb-10">
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

      {/* Note: this form doesn't submit anywhere yet — needs a form handler
          (e.g. Formspree, Resend, or a simple API route) before launch. */}
      <form className="space-y-6 border-t border-line pt-8">
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

        <div>
          <label className="block font-mono text-xs uppercase tracking-widest text-slate mb-2">
            Service(s)
          </label>
          <div className="grid grid-cols-2 gap-2">
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