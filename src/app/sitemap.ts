import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { PEST_SERVICES } from "@/lib/services-data";
import { WILDLIFE_SERVICES } from "@/lib/wildlife-data";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/about", "/contact", "/privacy", "/services", "/services/wildlife-removal", ...PEST_SERVICES.map(item => `/services/${item.slug}`), ...WILDLIFE_SERVICES.map(item => `/services/wildlife-removal/${item.slug}`)].map(path => ({ url: `${SITE_URL}${path}` }));
}
