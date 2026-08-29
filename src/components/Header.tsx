import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/constants";
import MegaNav from "@/components/MegaNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-ink text-paper border-b border-paper/10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/logo-light.png"
              alt={BUSINESS.name}
              width={178}
              height={100}
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          <MegaNav />

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