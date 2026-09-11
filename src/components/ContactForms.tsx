"use client";
import { useSearchParams } from "next/navigation";
import { ALL_SERVICES } from "@/lib/constants";
import RequestForm from "./RequestForm";
export default function ContactForms() {
  const slug = useSearchParams().get("service") ?? "";
  const service = ALL_SERVICES.some(item => item.slug === slug) ? slug : "";
  return <div className="grid gap-8 lg:grid-cols-2">
    <section className="rounded-xl border border-line p-5 md:p-6">
      <h2 className="mb-4 font-display text-2xl uppercase">Tell Us What’s Going On</h2>
      <RequestForm key={service} id="quote" service={service} />
    </section>
    <section id="callback" className="scroll-mt-28 self-start rounded-xl border border-ink bg-ink p-4 text-paper md:p-5 lg:max-w-md lg:justify-self-end">
      <h2 className="mb-3 font-display text-2xl uppercase">Request a Callback</h2>
      <RequestForm id="callback-form" callback dark />
    </section>
  </div>;
}
