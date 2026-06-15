import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { ProductExplorer } from "@/components/product-explorer";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore cuplock scaffolding, shuttering plates, props, spans, jacks, steel challi, couplers, and accessories available for construction rental and supply."
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Range"
        title="Scaffolding and shuttering material organized by site need."
        description="Filter by scaffold systems, formwork, supports, platforms, and accessories. Every enquiry can be quoted with rental duration, delivery location, and approximate quantities."
      />

      <section className="py-20">
        <div className="container">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Available Stock"
              title="Find the right product category before you request a quote."
              description="The catalog is structured around real site workflows so contractors can quickly identify what to ask for."
            />
            <Button asChild>
              <Link href="/request-quote">
                Request Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-10">
            <ProductExplorer />
          </div>
        </div>
      </section>

      <section className="premium-section py-20">
        <div className="container grid gap-8 lg:grid-cols-3">
          {[
            "Rental planning for slab cycles",
            "Sale support for repeat-use inventory",
            "Bundled dispatch and replacement coordination"
          ].map((item) => (
            <Card key={item} className="p-7">
              <h2 className="text-2xl font-black text-slate-950">{item}</h2>
              <p className="mt-4 leading-7 text-slate-600">
                Share drawings, floor height, slab area, site location, and
                rental duration. Our team can recommend practical quantities and
                delivery sequencing.
              </p>
            </Card>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
