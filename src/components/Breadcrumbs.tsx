"use client";

import Link from "next/link";
import { useNavigationContext } from "@/lib/use-navigation-context";
import { SITE_URL } from "@/lib/seo";

export default function Breadcrumbs() {
  const { crumbs } = useNavigationContext();
  if (crumbs.length < 2) return null;

  return (
    <nav aria-label="Breadcrumb" className="border-b border-line bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: crumbs.map((crumb, index) => ({ "@type": "ListItem", position: index + 1, name: crumb.label, item: `${SITE_URL}${crumb.href}` })) }).replace(/</g, "\\u003c") }} />
      <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-2 gap-y-1 px-4 py-3 text-xs md:px-6 md:text-sm">
        {crumbs.map((crumb, index) => (
          <li key={`${crumb.href}-${index}`} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true" className="text-slate/60">›</span>}
            {index === crumbs.length - 1 ? (
              <span aria-current="page" className="font-medium text-ink">{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className="py-1 text-slate underline-offset-4 hover:text-ink hover:underline">{crumb.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
