import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
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
      <section className="industrial-surface py-24">
        <div className="container">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-amber-300">
            Contact Us
          </p>
          <h1 className="max-w-4xl text-balance text-5xl font-black tracking-tight text-white sm:text-6xl">
            Send your enquiry and get clear material guidance.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300">
            Share what you need, where the site is located, and when the material
            is required. We will help you move quickly.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <SectionHeading
              eyebrow="Talk to Sales"
              title="Fast contact for rental and supply requirements."
              description="For urgent dispatch, call or WhatsApp. For larger project requirements, send details through the form."
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
              </CardContent>
            </Card>
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
