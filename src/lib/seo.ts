import type { Metadata } from "next";

export const SITE_URL = "https://cityviewpestcontrol.ca";
export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title, description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "Cityview Pest Control", locale: "en_CA", type: "website", images: [{ url: `${SITE_URL}/logo/cityview_logo.png`, width: 1009, height: 354, alt: "Cityview Pest Control" }] },
    twitter: { card: "summary_large_image", title, description, images: [`${SITE_URL}/logo/cityview_logo.png`] },
  };
}

export const pestTitles: Record<string, string> = {
  "wasps-hornets": "Wasp & Hornet Removal", ants: "Ant Control", cockroaches: "Cockroach Control", spiders: "Spider Control", mosquitoes: "Mosquito Control", termites: "Termite Control", "bed-bugs": "Bed Bug Treatment", rodents: "Mouse & Rat Control", flies: "Fly Control", "fleas-ticks": "Flea & Tick Control", silverfish: "Silverfish Control",
};
