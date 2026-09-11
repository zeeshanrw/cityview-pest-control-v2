import Link from "next/link";
import Image from "next/image";
import { HOMEPAGE_SERVICES, BUSINESS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="mt-24 border-t-4 border-signal bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 md:grid-cols-[1.1fr_1.4fr_0.9fr] md:px-6 md:py-16">
        <div>
          <p className="mb-3 font-display text-lg font-semibold uppercase tracking-tight text-signal">
            {BUSINESS.name}
          </p>
          <Link href="/" className="mb-3 inline-flex rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal">
           <Image
                         src="/logo/logo-light.png"
                         alt={BUSINESS.name}
                         width={1009}
                         height={354}
                         className="h-20 w-auto"
                         quality={90}
           
                       />
          </Link>
          <p className="text-paper/70 text-sm leading-relaxed mb-4">
            Licensed pest control and wildlife removal serving the{" "}
            {BUSINESS.serviceArea}. No fixed pricing — call or WhatsApp for a
            free quote.
          </p>
          <div className="flex flex-col items-start gap-1 font-mono text-sm">
            <a href={BUSINESS.phoneHref} className="group inline-flex items-center gap-2 font-semibold text-paper transition-colors hover:text-signal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal">
              <span aria-hidden="true" className="text-signal">☎</span>
              <span className="underline decoration-paper/30 underline-offset-4 group-hover:decoration-signal">
                {BUSINESS.phone}
              </span>
            </a>
          </div>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-signal mb-4">
            Services
          </p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
            {HOMEPAGE_SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex items-center gap-2 py-1.5 text-paper/70 transition-colors hover:text-signal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
                >
                  <span aria-hidden="true" className="text-signal/70 transition-transform group-hover:translate-x-0.5">›</span>
                  <span className="underline decoration-transparent underline-offset-4 group-hover:decoration-signal/60">{s.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-signal mb-4">
            Get in Touch
          </p>
          <div className="flex flex-col gap-3">
            <a
              href={BUSINESS.phoneHref}
              className="group flex items-center justify-between gap-4 rounded-lg bg-signal px-4 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-signal-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
            >
              <span>Call Now</span>
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-lg border border-paper/35 px-4 py-3 font-display text-sm font-semibold uppercase tracking-wide text-paper transition-colors hover:border-signal hover:text-signal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
            >
              <span>WhatsApp Us</span>
              <span aria-hidden="true">→</span>
            </a>
            <p className="text-xs leading-relaxed text-paper/55">
              Call or message for a free quote tailored to your situation.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 font-mono text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between md:px-6">
          <span>&copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</span>
          <div className="flex flex-wrap gap-4 text-paper/85"><Link href="/privacy" className="underline hover:text-signal">Privacy</Link><a href="mailto:info@cityviewpestcontrol.ca" className="underline hover:text-signal">Email us</a></div>
        </div>
      </div>
    </footer>
  );
}
