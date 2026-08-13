import Link from "next/link";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-ink text-paper border-b border-paper/10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="font-display font-semibold uppercase tracking-tight text-lg md:text-xl"
          >
            {BUSINESS.name}
          </Link>

          <nav className="hidden md:flex items-center gap-8 font-body text-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-paper/80 hover:text-paper transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 bg-signal text-ink px-3 py-2 md:px-4 md:py-2.5 font-display font-semibold uppercase text-xs md:text-sm tracking-wide hover:bg-signal-dark transition-colors"
          >
            <span className="hidden sm:inline">Call </span>
            {BUSINESS.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
