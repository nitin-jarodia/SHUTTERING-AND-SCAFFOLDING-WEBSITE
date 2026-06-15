import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

import { AnimatedCounter } from "@/components/animated-counter";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { advantages, processSteps, stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about SteelRise, a trusted scaffolding and shuttering rental supplier serving contractors and industrial construction sites."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Construction rental support shaped by real site pressure."
        description="SteelRise was built for contractors who need dependable scaffolding and shuttering material, accurate coordination, and practical answers before dispatch."
      />

      <section className="py-20">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Our Work"
            title="We keep scaffold and formwork movement disciplined from quote to return."
            description="Most delays happen in the gap between requirement, stock readiness, loading, and site coordination. Our operating rhythm closes that gap with checked material, clear quantities, and practical dispatch planning."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <Card key={stat.label} className="mesh-card p-6">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="text-4xl font-black text-slate-950"
                />
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
            title="Strong material is only half the job. Coordination is the other half."
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

      <section className="premium-section py-20">
        <div className="container">
          <SectionHeading
            eyebrow="How It Works"
            title="A quote process designed for working contractors."
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
