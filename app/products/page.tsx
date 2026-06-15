import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CtaSection } from "@/components/cta-section";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore cuplock scaffolding, shuttering plates, props, spans, jacks, steel challi, couplers, and accessories available for construction rental and supply."
};

export default function ProductsPage() {
  return (
    <>
      <section className="industrial-surface py-24">
        <div className="container">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-amber-300">
            Product Range
          </p>
          <h1 className="max-w-4xl text-balance text-5xl font-black tracking-tight text-white sm:text-6xl">
            Scaffolding and shuttering material for active construction sites.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300">
            Rental and supply options for modular access, slab support, concrete
            formwork, and essential scaffold accessories.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Available Stock"
              title="Choose the material your site needs."
              description="Each product category can be quoted with rental duration, site location, transport, and approximate quantities."
            />
            <Button asChild>
              <Link href="/request-quote">
                Request Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container grid gap-8 lg:grid-cols-3">
          {[
            "Rental for short and long project cycles",
            "Sale support for repeat-use site inventory",
            "Bundled loading and dispatch coordination"
          ].map((item) => (
            <Card key={item} className="p-7">
              <h2 className="text-2xl font-black text-slate-950">{item}</h2>
              <p className="mt-4 leading-7 text-slate-600">
                Share your requirement and our team will recommend practical
                quantities based on floor height, slab area, schedule, and site
                access.
              </p>
            </Card>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
