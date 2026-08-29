import Link from "next/link";
import Image from "next/image";
import { HOMEPAGE_SERVICES, BUSINESS } from "@/lib/constants";

const FOOTER_SERVICES = [
  { slug: "general-pest-control", label: "General Pest Control" },
  { slug: "rat-control", label: "Rat Control" },
  { slug: "cockroach-control", label: "Cockroach Control" },
  { slug: "bed-bug-treatment", label: "Bed Bug Treatment" },
  { slug: "wasp-removal", label: "Wasp Removal" },
  { slug: "wildlife-removal", label: "Wildlife Removal" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper mt-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="font-display font-semibold uppercase tracking-tight text-lg mb-3">
            {BUSINESS.name}
          </p>
          <Link href="/" className="inline-flex items-center mb-3">
            <Image
              src="/logo/logo-light.png"
              alt={BUSINESS.name}
              width={178}
              height={100}
              className="h-9 w-auto"
            />
          </Link>
          <p className="text-paper/70 text-sm leading-relaxed mb-4">
            Licensed pest control and wildlife removal serving the{" "}
            {BUSINESS.serviceArea}. No fixed pricing — call or WhatsApp for a
            free quote.
          </p>
          <div className="flex flex-col gap-1 font-mono text-sm">
            <a href={BUSINESS.phoneHref} className="hover:text-signal">
              {BUSINESS.phone}
            </a>
          </div>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-signal mb-4">
            Services
          </p>
          <ul className="grid grid-cols-2 gap-2 text-sm text-paper/70">
            {HOMEPAGE_SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="hover:text-paper transition-colors"
                >
                  {s.label}
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
              className="text-sm text-paper/70 hover:text-paper transition-colors"
            >
              Call {BUSINESS.phone}
            </a>
            <a
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-paper/70 hover:text-paper transition-colors"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-4 text-xs text-paper/50 font-mono">
          &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
