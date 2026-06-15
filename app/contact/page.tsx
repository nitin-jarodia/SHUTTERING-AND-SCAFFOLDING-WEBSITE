import type { Metadata } from "next";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { company, locations } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact SteelRise for scaffolding rental, shuttering material supply, delivery coordination, and construction equipment enquiries."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Talk to a team that understands site urgency."
        description="Share what you need, where the site is located, and when material is required. For urgent stock movement, call or WhatsApp directly."
        ctaLabel="Request Quote Instead"
        ctaHref="/request-quote"
      />

      <section className="py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <SectionHeading
              eyebrow="Talk to Sales"
              title="Choose the fastest contact path for your enquiry."
              description="For urgent dispatch or replacement material, use call or WhatsApp. For planned requirements, the form gives our team the details needed for a cleaner response."
            />
            <Card>
              <CardContent className="space-y-5 p-6">
                <a className="flex gap-4 font-bold text-slate-800 hover:text-amber-600" href={`tel:${company.phone}`}>
                  <Phone className="h-5 w-5 text-amber-500" />
                  {company.phone}
                </a>
                <a className="flex gap-4 font-bold text-slate-800 hover:text-amber-600" href={`mailto:${company.email}`}>
                  <Mail className="h-5 w-5 text-amber-500" />
                  {company.email}
                </a>
                <p className="flex gap-4 font-bold text-slate-800">
                  <MapPin className="h-5 w-5 shrink-0 text-amber-500" />
                  {company.address}
                </p>
                <p className="flex gap-4 font-bold text-slate-800">
                  <Clock3 className="h-5 w-5 shrink-0 text-amber-500" />
                  {company.hours}
                </p>
              </CardContent>
            </Card>
            <div className="grid gap-3 sm:grid-cols-2">
              <Button asChild size="lg">
                <a href={`tel:${company.phone}`}>
                  <Phone className="h-4 w-4" /> Call Sales
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href={company.whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </Button>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6">
              <h2 className="font-black text-slate-950">Common Service Cities</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {locations.map((location) => (
                  <span
                    key={location}
                    className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm"
                  >
                    {location}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <Card className="p-2 shadow-industrial">
            <CardContent className="p-6 sm:p-8">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
