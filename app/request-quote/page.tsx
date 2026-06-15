import type { Metadata } from "next";
import { Clock3, MessageCircle, PackageCheck, Phone, ShieldCheck } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Request Quote",
  description:
    "Request a quote for scaffolding and shuttering rental material including cuplock systems, props, spans, shuttering plates, jacks, challi, and accessories."
};

export default function RequestQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request Quote"
        title="Get pricing, availability, and dispatch guidance for your site."
        description="Add product needs, site location, rental duration, and quantity notes. The more detail you share, the faster we can quote accurately."
        ctaLabel="Start Quote Form"
        ctaHref="#quote-form"
      />

      <section className="py-20">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Card id="quote-form" className="p-2 shadow-industrial scroll-mt-28">
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
            <Card className="mt-6 border-amber-200 bg-amber-50 p-6">
              <h2 className="text-xl font-black text-slate-950">
                Need material urgently?
              </h2>
              <p className="mt-3 leading-7 text-slate-700">
                If dispatch timing is critical, call or WhatsApp after submitting
                the form so the team can check live stock faster.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Button asChild variant="secondary">
                  <a href={`tel:${company.phone}`}>
                    <Phone className="h-4 w-4" /> Call
                  </a>
                </Button>
                <Button asChild>
                  <a href={company.whatsapp} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
