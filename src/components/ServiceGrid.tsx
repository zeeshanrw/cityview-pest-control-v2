import Link from "next/link";
import { HOMEPAGE_SERVICES } from "@/lib/constants";
import PestIllustration from "./PestIllustration";

export default function ServiceGrid() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-ink/15 bg-ink/15 text-ink md:grid-cols-3">
        {HOMEPAGE_SERVICES.map((service) => (
          <Link key={service.slug} href={`/services/${service.slug}`} className="flex min-w-0 flex-col items-start gap-4 bg-signal p-6 transition-colors hover:bg-signal-dark focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink md:p-8">
            <PestIllustration slug={service.slug} />
            <span className="font-display text-lg font-semibold uppercase leading-snug md:text-xl">{service.label}</span>
          </Link>
        ))}
    </div>
  );
}
