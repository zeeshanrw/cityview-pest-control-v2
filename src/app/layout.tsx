import type { Metadata } from "next";
import { Oswald, Inter, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import CallbackWidget from "@/components/CallbackWidget";
import FirstVisitAnts from "@/components/FirstVisitAnts";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Cityview Pest Control | GTA Exterminator & Wildlife Removal",
  description:
    "Family-owned, licensed pest control and humane wildlife removal in the Greater Toronto Area. Call or WhatsApp Cityview for a free quote.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-body">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-paper focus:px-5 focus:py-3">Skip to content</a>
        <Header />
        <Breadcrumbs />
        <CallbackWidget />
        <main id="main-content" tabIndex={-1} className="flex-1">{children}</main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: "Cityview Pest Control", url: SITE_URL, logo: `${SITE_URL}/logo/cityview_logo.png`, telephone: "+1-647-779-1770", email: "info@cityviewpestcontrol.ca", areaServed: "Greater Toronto Area, Ontario, Canada" }).replace(/</g, "\\u003c") }} />
        <Footer />
        <FirstVisitAnts />
      </body>
    </html>
  );
}
