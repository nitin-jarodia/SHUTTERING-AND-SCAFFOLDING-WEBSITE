import type { Metadata } from "next";

import { CtaSection } from "@/components/cta-section";
import { MotionWrapper } from "@/components/motion-wrapper";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects & Gallery",
  description:
    "View representative scaffolding and shuttering project support across residential, industrial, warehouse, and infrastructure sites."
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects & Gallery"
        title="Rental support across real construction constraints."
        description="See how scaffold, shuttering, props, jacks, challi, and accessories support residential, industrial, warehouse, and infrastructure work."
      />

      <section className="premium-section py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Showcase"
            title="Project visuals built for future site photography."
            description="A polished project showcase for highlighting site categories, delivery constraints, material planning, and future project photography."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <MotionWrapper key={project.title} delay={index * 0.05}>
              <Card className="group overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-industrial">
                <div className="relative h-72 overflow-hidden bg-slate-900 bg-hero-radial">
                  <div className="absolute inset-0 bg-steel-grid bg-[size:32px_32px] opacity-20 transition group-hover:scale-105" />
                  <div className="absolute left-5 top-5 rounded-full bg-amber-400 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-slate-950">
                    {project.tag}
                  </div>
                  <div className="absolute bottom-5 right-5 text-7xl font-black text-white/10">
                    0{index + 1}
                  </div>
                  <div className="absolute bottom-5 left-5 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-white backdrop-blur">
                    {project.location}
                  </div>
                </div>
                <CardContent className="p-7">
                  <p className="text-sm font-bold text-amber-600">
                    {project.location}
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-slate-950">
                    {project.title}
                  </h2>
                  <p className="mt-4 leading-8 text-slate-600">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-700"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
