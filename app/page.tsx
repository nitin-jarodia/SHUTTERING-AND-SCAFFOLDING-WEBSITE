import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Phone,
  Quote,
  Star
} from "lucide-react";

import { CtaSection } from "@/components/cta-section";
import { MotionWrapper } from "@/components/motion-wrapper";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  advantages,
  company,
  faqs,
  industries,
  locations,
  products,
  projects,
  stats,
  testimonials,
  trustHighlights
} from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <section className="industrial-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="absolute inset-0 bg-steel-grid bg-[size:42px_42px] opacity-40" />
        <div className="container relative grid min-h-[760px] items-center gap-12 pb-28 pt-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.26em] text-amber-300">
              Scaffold & Shuttering Rental
            </p>
            <h1 className="text-balance text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Site-ready material for stronger, faster construction cycles.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-300">
              {company.name} supplies reliable cuplock scaffolding, shuttering
              plates, props, spans, jacks, challi, and accessories for builders
              who cannot afford delays.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/request-quote">
                  Request a Quote <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="light" size="lg">
                <a href={`tel:${company.phone}`}>
                  <Phone className="h-5 w-5" /> Call Now
                </a>
              </Button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {trustHighlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white backdrop-blur"
                >
                  <item.icon className="mb-3 h-5 w-5 text-amber-300" />
                  <p className="font-bold">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] bg-slate-950 p-6">
                <div className="grid gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white p-5"
                    >
                      <div>
                        <p className="text-4xl font-black text-slate-950">
                          {stat.value}
                        </p>
                        <p className="text-sm font-semibold text-slate-500">
                          {stat.label}
                        </p>
                      </div>
                      <CheckCircle2 className="h-7 w-7 text-amber-500" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <MotionWrapper>
            <SectionHeading
              eyebrow="About SteelRise"
              title="Built for contractors who need reliable material, not excuses."
              description="We combine stocked rental inventory, practical site knowledge, and disciplined material checks so contractors get equipment that performs when the schedule is tight."
            />
            <Button asChild className="mt-8" variant="secondary">
              <Link href="/about">
                Learn About Us <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </MotionWrapper>
          <div className="grid gap-5 sm:grid-cols-2">
            {advantages.map((item, index) => (
              <MotionWrapper key={item.title} delay={index * 0.05}>
                <Card className="h-full p-2 transition hover:-translate-y-1 hover:shadow-industrial">
                  <CardContent className="p-6">
                    <item.icon className="mb-5 h-9 w-9 text-amber-500" />
                    <h3 className="text-xl font-black text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Featured Products"
              title="Core scaffold and shuttering stock for demanding sites."
              description="Choose from commonly rented and supplied systems, with accessories available for custom site conditions."
            />
            <Button asChild variant="outline">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((product, index) => (
              <MotionWrapper key={product.name} delay={index * 0.04}>
                <ProductCard product={product} />
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Industries Served"
            title="Rental support for concrete, access, maintenance, and structural work."
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Card key={industry.name} className="p-6 transition hover:-translate-y-1 hover:border-amber-300">
                <industry.icon className="mb-5 h-8 w-8 text-amber-500" />
                <h3 className="text-xl font-black text-slate-950">
                  {industry.name}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="industrial-surface py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Project Showcase"
            title="Material support across real-world site conditions."
            description="From high-rise slabs to industrial maintenance, our stock and dispatch process is built around active construction schedules."
            light
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden border-white/10 bg-white/10 text-white backdrop-blur">
                <div className="h-44 bg-slate-900 bg-hero-radial" />
                <CardContent className="p-6">
                  <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-amber-300">
                    {project.tag} | {project.location}
                  </p>
                  <h3 className="text-xl font-black">{project.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Client Feedback"
            title="Trusted by builders, procurement teams, and site engineers."
            align="center"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="p-7">
                <div className="mb-5 flex gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <Quote className="mb-5 h-8 w-8 text-slate-300" />
                <p className="leading-8 text-slate-700">{testimonial.quote}</p>
                <div className="mt-6">
                  <p className="font-black text-slate-950">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Service Locations"
            title="Supplying major construction zones across North India."
            description="Our delivery network supports Delhi NCR and nearby industrial corridors with coordinated dispatch and pickup."
          />
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {locations.map((location) => (
              <div
                key={location}
                className="rounded-2xl border border-slate-200 bg-white p-4 font-bold text-slate-800 shadow-sm"
              >
                {location}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <SectionHeading
            eyebrow="FAQ"
            title="Answers before you send an enquiry."
            align="center"
          />
          <div className="mx-auto mt-10 grid max-w-4xl gap-4">
            {faqs.map((faq) => (
              <Card key={faq.question} className="p-6">
                <h3 className="text-lg font-black text-slate-950">
                  {faq.question}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
