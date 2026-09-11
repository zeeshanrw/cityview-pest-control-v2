import { notFound } from "next/navigation";
import Link from "next/link";
import { PEST_SERVICES, getServiceBySlug } from "@/lib/services-data";
import { BUSINESS } from "@/lib/constants";
import { pageMetadata, pestTitles } from "@/lib/seo";
import ServiceSchema from "@/components/ServiceSchema";

export function generateStaticParams() {
  return PEST_SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return pageMetadata(`${pestTitles[slug] ?? service.label} | Cityview Pest Control`, service.summary, `/services/${slug}`);
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 md:px-6 py-12 md:py-16">
      <ServiceSchema name={pestTitles[slug] ?? service.label} description={service.summary} path={`/services/${slug}`} />
      <Link href="/services" className="text-sm text-slate hover:text-ink">
        ← All Services
      </Link>

      <h1 className="font-display font-semibold uppercase text-4xl md:text-5xl tracking-tight mt-4 mb-3">
        {service.label}
      </h1>
      <p className="text-signal-dark font-medium text-lg mb-8">{service.tagline}</p>

      <div className="flex flex-wrap gap-3 mb-10">
        <a
          href={BUSINESS.phoneHref}
          className="px-5 py-3 bg-signal hover:bg-signal-dark text-ink font-display font-semibold uppercase text-sm tracking-wide transition-colors"
        >
          Call Now
        </a>
        <Link
          href={`/contact?service=${service.slug}`}
          className="px-5 py-3 border-2 border-ink hover:bg-ink hover:text-paper font-display font-semibold uppercase text-sm tracking-wide transition-colors"
        >
          Get a Free Quote
        </Link>
      </div>

      {service.details.map((paragraph, i) => (
        <p key={i} className="text-slate leading-relaxed mb-4">
          {paragraph}
        </p>
      ))}

      <div className="mt-8 border-t border-line pt-8">
        <h2 className="font-display font-semibold uppercase text-xl mb-4">
          Signs You Might Have {service.label}
        </h2>
        <ul className="space-y-2">
          {service.signs.map((sign) => (
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
