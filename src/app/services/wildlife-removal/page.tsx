import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

export const metadata = {
  title: "Wildlife Removal | Cityview Pest Control",
  description:
    "Humane wildlife removal across the GTA — raccoons, squirrels, and more. Call or WhatsApp for a free quote.",
};

export default function WildlifeRemovalPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 md:px-6 py-12 md:py-16">
      <h1 className="font-display font-semibold uppercase text-4xl md:text-5xl tracking-tight mb-3">
        Wildlife Removal
      </h1>
      <p className="text-signal-dark font-medium text-lg mb-8">
        Safe, humane removal for raccoons, squirrels, and other unwelcome
        visitors.
      </p>

      <div className="flex flex-wrap gap-3 mb-10">
        <a
          href={BUSINESS.phoneHref}
          className="px-5 py-3 bg-signal hover:bg-signal-dark text-ink font-display font-semibold uppercase text-sm tracking-wide transition-colors"
        >
          Call Now
        </a>
        <Link
          href="/contact?service=wildlife-removal"
          className="px-5 py-3 border-2 border-ink hover:bg-ink hover:text-paper font-display font-semibold uppercase text-sm tracking-wide transition-colors"
        >
          Get a Free Quote
        </Link>
      </div>

      <p className="text-slate leading-relaxed mb-4">
        Wildlife entering attics, sheds, or crawl spaces can cause real
        damage if left alone. We assess how the animal is getting in, remove
        it using humane methods, and help prevent re-entry.
      </p>
      <p className="text-slate leading-relaxed">
        Every property is different — call or WhatsApp to describe the
        situation and get a quote suited to the job.
      </p>
    </div>
  );
}