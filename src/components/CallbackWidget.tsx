"use client";

import { FormEvent, useEffect, useState } from "react";
import { BUSINESS } from "@/lib/constants";

export default function CallbackWidget() {
  const [open, setOpen] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open || hasInteracted) return;

    const timer = window.setTimeout(() => {
      setOpen(false);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [open, hasInteracted]);

  function openForm() {
    setOpen(true);
    setSent(false);
    setHasInteracted(false);
  }

  function handleInteract() {
    setHasInteracted(true);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const text = [
      "Callback request from Cityview Pest Control website",
      `Name: ${name}`,
      `Phone: ${phone}`,
      message ? `Message: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `${BUSINESS.whatsappHref}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSent(true);
    setOpen(false);
  }

  return (
    <aside className="fixed right-3 top-20 z-40 flex w-[calc(100vw-1.5rem)] max-w-sm flex-col items-end md:right-6 md:top-24">
      <div
        className={`w-full overflow-hidden transition-[max-height,opacity,transform,margin] duration-500 ease-out ${
          open
            ? "mb-3 max-h-[36rem] translate-y-0 opacity-100"
            : "mb-0 max-h-0 -translate-y-3 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="border border-paper/30 bg-paper/55 text-ink shadow-2xl backdrop-blur-lg">
          <div className="flex items-start justify-between gap-4 border-b border-paper/20 bg-ink/62 px-4 py-3 text-paper backdrop-blur-lg">
            <div>
              <p className="font-display text-base font-semibold uppercase tracking-wide">
                Request a Callback
              </p>
              <p className="mt-1 text-sm text-paper/78">
                Leave your number and we will call you back.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-2 py-1 text-lg leading-none text-paper/70 transition-colors hover:text-paper"
              aria-label="Close callback form"
            >
              x
            </button>
          </div>

          <form className="space-y-3 p-4" onSubmit={handleSubmit}>
            <div>
              <label className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-slate">
                Name
              </label>
              <input
                name="name"
                type="text"
                required
                onFocus={handleInteract}
                onChange={handleInteract}
                className="w-full border border-line bg-paper/86 px-3 py-2.5 text-base shadow-sm focus:border-ink focus:outline-none"
                tabIndex={open ? 0 : -1}
              />
            </div>

            <div>
              <label className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-slate">
                Phone Number
              </label>
              <input
                name="phone"
                type="tel"
                required
                onFocus={handleInteract}
                onChange={handleInteract}
                className="w-full border border-line bg-paper/86 px-3 py-2.5 text-base shadow-sm focus:border-ink focus:outline-none"
                tabIndex={open ? 0 : -1}
              />
            </div>

            <div>
              <label className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-slate">
                Message
              </label>
              <textarea
                name="message"
                rows={3}
                onFocus={handleInteract}
                onChange={handleInteract}
                placeholder="Tell us what pest problem you are dealing with."
                className="w-full resize-none border border-line bg-paper/86 px-3 py-2.5 text-base shadow-sm focus:border-ink focus:outline-none"
                tabIndex={open ? 0 : -1}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-signal px-4 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-signal-dark"
              tabIndex={open ? 0 : -1}
            >
              Send Request
            </button>
          </form>
        </div>
      </div>

      <button
        type="button"
        onClick={openForm}
        className="bg-signal px-4 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ink shadow-xl transition-colors hover:bg-signal-dark"
        aria-expanded={open}
      >
        {sent ? "Request Sent" : "Request a Callback"}
      </button>
    </aside>
  );
}
