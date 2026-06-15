import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

import { CtaSection } from "@/components/cta-section";
import { MotionWrapper } from "@/components/motion-wrapper";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { advantages, company, processSteps, stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about SteelRise, a trusted scaffolding and shuttering rental supplier serving contractors and industrial construction sites."
};

export default function AboutPage() {
  return (
    <>
      <section className="industrial-surface relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="container relative">
          <MotionWrapper>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-amber-300">
              About Us
            </p>
            <h1 className="max-w-4xl text-balance text-5xl font-black tracking-tight text-white sm:text-6xl">
              Construction rental support shaped by real site pressure.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300">
              {company.name} was built for contractors who need dependable
              scaffolding and shuttering material, accurate coordination, and
              practical answers before dispatch.
            </p>
          </MotionWrapper>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Our Work"
            title="We keep scaffold and formwork movement simple, disciplined, and site-focused."
            description="From first enquiry to pickup after completion, our process is designed to reduce avoidable delays. We supply rental and sale material for building construction, factories, warehouses, infrastructure jobs, and maintenance teams."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <Card key={stat.label} className="p-6">
                <p className="text-4xl font-black text-slate-950">{stat.value}</p>
                <p className="mt-2 font-semibold text-slate-600">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Why Contractors Choose Us"
            title="Strong material, clean coordination, and practical site support."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => (
              <Card key={item.title} className="h-full p-6">
                <item.icon className="mb-5 h-9 w-9 text-amber-500" />
                <h3 className="text-xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <SectionHeading
            eyebrow="How It Works"
            title="A clear enquiry-to-dispatch process."
            align="center"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <Card key={step.title} className="relative p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-xl font-black text-slate-950">
                  {index + 1}
                </div>
                <h3 className="text-xl font-black text-slate-950">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{step.description}</p>
                <CheckCircle2 className="absolute right-6 top-6 h-6 w-6 text-amber-500" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
