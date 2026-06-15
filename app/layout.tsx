import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsappButton } from "@/components/whatsapp-button";
import { company } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://steelrise.example.com"),
  title: {
    default: `${company.name} | Scaffolding & Shuttering Rental`,
    template: `%s | ${company.shortName}`
  },
  description:
    "Premium scaffolding and shuttering rental company supplying cuplock systems, props, spans, shuttering plates, jacks, challi, couplers, and site-ready accessories.",
  keywords: [
    "scaffolding rental",
    "shuttering material",
    "cuplock system",
    "adjustable props",
    "shuttering plates",
    "construction equipment rental"
  ],
  openGraph: {
    title: `${company.name} | Scaffolding & Shuttering Rental`,
    description:
      "Trusted scaffold and shuttering rental support for contractors, builders, industrial plants, and infrastructure projects.",
    type: "website",
    locale: "en_IN",
    siteName: company.name,
    url: "/"
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Scaffolding & Shuttering Rental`,
    description:
      "Scaffold and shuttering rental support for contractors, builders, industrial plants, and infrastructure projects."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    telephone: company.phone,
    email: company.email,
    address: company.address,
    areaServed: company.location,
    openingHours: "Mo-Sa 08:00-19:00",
    description:
      "Scaffolding and shuttering rental, supply, and site support for construction projects."
  };

  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <SiteHeader />
        <main className="pb-20 sm:pb-0">{children}</main>
        <SiteFooter />
        <WhatsappButton />
      </body>
    </html>
  );
}
