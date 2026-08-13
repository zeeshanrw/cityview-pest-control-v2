import { BUSINESS } from "@/lib/constants";

export function CTAButtons({ variant = "default" }: { variant?: "default" | "compact" }) {
  const size =
    variant === "compact"
      ? "px-4 py-2 text-sm"
      : "px-6 py-3.5 text-base";

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href={BUSINESS.phoneHref}
        className={`${size} inline-flex items-center justify-center gap-2 bg-signal hover:bg-signal-dark text-ink font-display font-semibold uppercase tracking-wide transition-colors`}
      >
        Call Now
      </a>
      <a
        href={BUSINESS.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`${size} inline-flex items-center justify-center gap-2 border-2 border-ink hover:bg-ink hover:text-paper text-ink font-display font-semibold uppercase tracking-wide transition-colors`}
      >
        WhatsApp Us
      </a>
    </div>
  );
}

/** Signature element: primary hero CTA styled as a service dispatch ticket */
export function DispatchTicket() {
  return (
    <div className="bg-ink text-paper relative">
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between border-b border-paper/20 pb-4 mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-signal">
            Service Request
          </span>
          <span className="font-mono text-xs text-paper/60">
            Response: Same Day
          </span>
        </div>

        <p className="font-display text-xl md:text-2xl font-semibold uppercase tracking-tight mb-1">
          Get a Free Quote
        </p>
        <p className="text-paper/70 text-sm mb-6">
          No fixed pricing — call or message and we&apos;ll work out the right
          plan for your situation.
        </p>

        <div className="flex flex-col gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center justify-between bg-signal text-ink px-5 py-3.5 font-display font-semibold uppercase tracking-wide hover:bg-signal-dark transition-colors"
          >
            <span>Call {BUSINESS.phone}</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
          <a
            href={BUSINESS.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between border-2 border-paper/40 px-5 py-3.5 font-display font-semibold uppercase tracking-wide hover:border-paper hover:bg-paper/5 transition-colors"
          >
            <span>WhatsApp Us</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>

      {/* Perforated ticket-stub notch */}
      <div className="ticket-perforation" />
    </div>
  );
}
