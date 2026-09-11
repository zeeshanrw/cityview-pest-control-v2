"use client";
import { FormEvent, MouseEvent, useState } from "react";
import Link from "next/link";
import { ALL_SERVICES, BUSINESS } from "@/lib/constants";

type SubmitState = "idle" | "sending" | "sent" | "error";

export default function RequestForm({ id, callback = false, service = "", dark = false }: { id: string; callback?: boolean; service?: string; dark?: boolean }) {
  const [status, setStatus] = useState<SubmitState>("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      const result = await response.json() as { ok?: boolean };
      if (!response.ok || result.ok !== true) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }
  function submitWhatsApp(event: MouseEvent<HTMLButtonElement>) {
    const form = event.currentTarget.form;
    if (!form || !form.reportValidity()) return;
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) ?? "").trim();
    const message = [
      "Callback request",
      "From the Cityview Pest Control website",
      `Name: ${value("name")}`,
      `Phone: ${value("phone")}`,
      value("email") && `Email: ${value("email")}`,
      value("message") && `Best time / pest issue: ${value("message")}`,
    ].filter(Boolean).join("\n");
    window.open(`${BUSINESS.whatsappHref}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }
  const inputClass = "mt-1 block w-full rounded-lg border border-line bg-white px-3 py-3 text-base text-ink";
  const helpClass = dark ? "text-paper/75" : "text-slate";
  return <form action="/send-contact.php" method="post" onSubmit={submit} onChange={() => status !== "sending" && setStatus("idle")} className={callback ? "space-y-3" : "space-y-4"}>
    <input type="hidden" name="requestType" value={callback ? "callback" : "quote"} />
    <label className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">Leave this field empty
      <input name="website" tabIndex={-1} autoComplete="off" />
    </label>
    <p className={`text-sm leading-relaxed ${helpClass}`}>{callback ? "Fill in your details, then submit by email or WhatsApp." : "Fill in your details and we’ll send your request directly to our team."}</p>
    <label htmlFor={`${id}-name`} className="block text-sm font-medium">Name
      <input id={`${id}-name`} name="name" autoComplete="name" required maxLength={100} pattern=".*\S.*" className={inputClass} />
    </label>
    <label htmlFor={`${id}-phone`} className="block text-sm font-medium">Phone number
      <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" required minLength={7} maxLength={30} pattern="[+0-9\(\) .\-]{7,30}" title="Enter a phone number including area code." className={inputClass} />
    </label>
    <label htmlFor={`${id}-email`} className="block text-sm font-medium">Email address{callback ? " (optional)" : ""}
      <input id={`${id}-email`} name="email" type="email" autoComplete="email" required={!callback} maxLength={254} className={inputClass} />
    </label>
    {!callback && <>
      <label htmlFor={`${id}-city`} className="block text-sm font-medium">City
        <input id={`${id}-city`} name="city" autoComplete="address-level2" required maxLength={100} pattern=".*\S.*" className={inputClass} />
      </label>
      <fieldset>
        <legend className="text-sm font-medium">Services (select all that apply)</legend>
        <div className={`mt-2 grid max-h-52 grid-cols-1 gap-2 overflow-y-auto rounded-lg border p-3 sm:grid-cols-2 ${dark ? "border-paper/25" : "border-line"}`}>
          {ALL_SERVICES.map(item => <label key={item.slug} className="flex cursor-pointer items-start gap-2 text-sm">
            <input type="checkbox" name="services[]" value={item.slug} defaultChecked={item.slug === service} className="mt-0.5 h-4 w-4 accent-signal" />
            <span>{item.label}</span>
          </label>)}
        </div>
      </fieldset>
    </>}
    <label htmlFor={`${id}-message`} className="block text-sm font-medium">{callback ? "Best time to call / pest issue (optional)" : "Details (optional)"}
      <textarea id={`${id}-message`} name="message" rows={3} maxLength={1500} className={inputClass} />
    </label>
    <p className={`text-xs leading-relaxed ${helpClass}`}>Please avoid sensitive information. <Link href="/privacy" className="underline hover:text-signal">Privacy information</Link>.</p>
    <div className={callback ? "grid grid-cols-2 gap-2" : undefined}>
      <button type="submit" disabled={status === "sending"} className="w-full rounded-lg bg-signal px-3 py-3 font-semibold text-ink transition-colors hover:bg-signal-dark disabled:cursor-wait disabled:opacity-70">{status === "sending" ? "Sending…" : "Submit"}</button>
      {callback && <button type="button" onClick={submitWhatsApp} disabled={status === "sending"} className={`w-full rounded-lg border px-3 py-3 text-sm font-semibold transition-colors disabled:opacity-70 ${dark ? "border-paper/60 text-paper hover:border-signal hover:bg-signal hover:text-ink" : "border-ink text-ink hover:bg-ink hover:text-paper"}`}>Submit via WhatsApp</button>}
    </div>
    {callback && <p className={`text-xs leading-relaxed ${helpClass}`}>WhatsApp opens a prefilled message for you to confirm and send.</p>}
    <div role="status" aria-live="polite" className="text-sm">
      {status === "sent" && <p className={`rounded-lg border p-3 ${dark ? "border-signal text-paper" : "border-ink text-ink"}`}>Thank you. Your request has been sent to our team.</p>}
      {status === "error" && <p className={`rounded-lg border p-3 ${dark ? "border-red-300 text-red-100" : "border-red-700 text-red-800"}`}>We couldn’t send your request. Please try again or call us.</p>}
    </div>
  </form>;
}
