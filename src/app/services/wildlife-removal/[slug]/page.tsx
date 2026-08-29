import { notFound } from "next/navigation";
import Link from "next/link";
import { WILDLIFE_SERVICES, getWildlifeBySlug } from "@/lib/wildlife-data";
import { BUSINESS } from "@/lib/constants";

export function generateStaticParams() {
  return WILDLIFE_SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const animal = getWildlifeBySlug(slug);
  if (!animal) return {};
  return {
    title: `${animal.label} | Cityview Pest Control`,
    description: animal.summary,
  };
}

export default async function WildlifeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const animal = getWildlifeBySlug(slug);
  if (!animal) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 md:px-6 py-12 md:py-16">
      <Link href="/services/wildlife-removal" className="text-sm text-slate hover:text-ink">
        ← All Wildlife Services
      </Link>

      <h1 className="font-display font-semibold uppercase text-4xl md:text-5xl tracking-tight mt-4 mb-3">
        {animal.label}
      </h1>
      <p className="text-signal-dark font-medium text-lg mb-8">{animal.tagline}</p>

      <div className="flex flex-wrap gap-3 mb-10">
        <a
          href={BUSINESS.phoneHref}
          className="px-5 py-3 bg-signal hover:bg-signal-dark text-ink font-display font-semibold uppercase text-sm tracking-wide transition-colors"
        >
          Call Now
        </a>
        <Link
          href={`/contact?service=${animal.slug}`}
          className="px-5 py-3 border-2 border-ink hover:bg-ink hover:text-paper font-display font-semibold uppercase text-sm tracking-wide transition-colors"
        >
          Get a Free Quote
        </Link>
      </div>

      {animal.details.map((paragraph, i) => (
        <p key={i} className="text-slate leading-relaxed mb-4">
          {paragraph}
        </p>
      ))}

      <div className="mt-8 border-t border-line pt-8">
        <h2 className="font-display font-semibold uppercase text-xl mb-4">
          Signs You Might Have {animal.label.replace(" Removal", "")} Activity
        </h2>
        <ul className="space-y-2">
          {animal.signs.map((sign) => (
            <li key={sign} className="flex gap-2 text-slate">
              <span className="text-signal-dark">✓</span>
              {sign}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}