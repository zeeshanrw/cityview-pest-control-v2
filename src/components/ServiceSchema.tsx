import { SITE_URL } from "@/lib/seo";
export default function ServiceSchema({ name, description, path }: { name: string; description: string; path: string }) {
  const schema = { "@context": "https://schema.org", "@type": "Service", name, description, url: `${SITE_URL}${path}`, areaServed: "Greater Toronto Area, Ontario, Canada", provider: { "@type": "Organization", name: "Cityview Pest Control", url: SITE_URL, telephone: "+1-647-779-1770" } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />;
}
