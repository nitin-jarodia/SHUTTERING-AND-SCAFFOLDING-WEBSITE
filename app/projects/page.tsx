import type { Metadata } from "next";

import { CtaSection } from "@/components/cta-section";
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
      <section className="industrial-surface py-24">
        <div className="container">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-amber-300">
            Projects & Gallery
          </p>
          <h1 className="max-w-4xl text-balance text-5xl font-black tracking-tight text-white sm:text-6xl">
            Practical rental support across demanding site conditions.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300">
            Representative project placeholders showing the type of sites our
            scaffold and shuttering systems are built to support.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Showcase"
            title="Construction categories we support."
            description="Images are represented with clean industrial placeholders so real project photography can be added without changing the layout."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <Card key={project.title} className="overflow-hidden">
                <div className="relative h-72 bg-slate-900 bg-hero-radial">
                  <div className="absolute left-5 top-5 rounded-full bg-amber-400 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-slate-950">
                    {project.tag}
                  </div>
                  <div className="absolute bottom-5 right-5 text-7xl font-black text-white/10">
                    0{index + 1}
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
