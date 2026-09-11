import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/constants";
import MegaNav from "@/components/MegaNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-ink text-paper border-b border-paper/10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex h-20 items-center gap-2 lg:gap-4">
          <Link href="/" className="mr-auto flex min-w-0 items-center">
            <Image
              src="/logo/cityview_logo.png"
              alt={BUSINESS.name}
              width={1009}
              height={354}
              className="h-auto max-h-16 w-[10rem] object-contain sm:w-[15rem]"
              quality={90}

            />
          </Link>

          <MegaNav />

          <a
            href={BUSINESS.phoneHref}
            className="inline-flex shrink-0 whitespace-nowrap items-center gap-2 bg-signal text-ink px-2 py-3 lg:px-4 font-display font-semibold uppercase text-xs lg:text-sm tracking-wide hover:bg-signal-dark transition-colors"
          >
            <span className="hidden lg:inline">Call </span>
            {BUSINESS.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
