import { Suspense } from "react";
import { BUSINESS } from "@/lib/constants";
import ContactForms from "@/components/ContactForms";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Contact Cityview Pest Control", "Call, email or WhatsApp our family-owned team for a pest control quote or callback.", "/contact");

export default function ContactPage() {
  return <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
    <h1 className="font-display text-4xl font-semibold uppercase md:text-5xl">Get a Free Quote</h1>
    <p className="mt-4 max-w-2xl leading-relaxed text-slate">Tell us what is happening. We will listen, explain your options, and help you plan the next step. Call us directly, email, or send a request below.</p>
    <div className="my-8 flex flex-wrap gap-4">
      <a className="rounded-lg bg-signal px-5 py-3 font-semibold" href={BUSINESS.phoneHref}>Call {BUSINESS.phone}</a>
      <a className="rounded-lg border border-ink px-5 py-3 underline transition-colors hover:bg-ink hover:text-paper" href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
    </div>
    <Suspense fallback={<p>Loading request forms. You can also call or email using the links above.</p>}><ContactForms /></Suspense>
    <noscript><p>To request a quote without JavaScript, please call or email us using the links above.</p></noscript>
  </div>;
}
