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
    type: "website"
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
        <main>{children}</main>
        <SiteFooter />
        <WhatsappButton />
      </body>
    </html>
  );
}
