import type { Metadata } from "next";
import { Clock3, PackageCheck, ShieldCheck } from "lucide-react";

import { QuoteForm } from "@/components/quote-form";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Request Quote",
  description:
    "Request a quote for scaffolding and shuttering rental material including cuplock systems, props, spans, shuttering plates, jacks, challi, and accessories."
};

export default function RequestQuotePage() {
  return (
    <>
      <section className="industrial-surface py-24">
        <div className="container">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-amber-300">
            Request Quote
          </p>
          <h1 className="max-w-4xl text-balance text-5xl font-black tracking-tight text-white sm:text-6xl">
            Get pricing, availability, and dispatch guidance for your site.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300">
            Add product needs, site location, rental duration, and quantity notes.
            The more detail you share, the faster we can quote accurately.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="p-2 shadow-industrial">
            <CardContent className="p-6 sm:p-8">
              <QuoteForm />
            </CardContent>
          </Card>
          <div>
            <SectionHeading
              eyebrow="Quote Details"
              title="What helps us respond faster?"
              description="A clear quote depends on product list, estimated quantity, site access, duration, and loading or delivery expectations."
            />
            <div className="mt-8 grid gap-5">
              {[
                {
                  icon: PackageCheck,
                  title: "Material List",
                  text: "Mention scaffold, shuttering, props, jacks, challi, couplers, or accessories required."
                },
                {
                  icon: Clock3,
                  title: "Rental Duration",
                  text: "Share expected usage period and whether dispatch will be full or phase-wise."
                },
                {
                  icon: ShieldCheck,
                  title: "Site Conditions",
                  text: "Add city, floor height, slab area, and any drawing or transport constraints."
                }
              ].map((item) => (
                <Card key={item.title} className="p-6">
                  <item.icon className="mb-4 h-7 w-7 text-amber-500" />
                  <h2 className="text-xl font-black text-slate-950">{item.title}</h2>
                  <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
