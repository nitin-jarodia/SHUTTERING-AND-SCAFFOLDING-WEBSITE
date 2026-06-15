import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Gauge,
  Phone,
  Quote,
  Star
} from "lucide-react";

import { AnimatedCounter } from "@/components/animated-counter";
import { CtaSection } from "@/components/cta-section";
import { FaqAccordion } from "@/components/faq-accordion";
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
  servicePillars,
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
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="container relative grid min-h-[760px] items-center gap-12 pb-28 pt-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.26em] text-amber-300">
              Scaffold rental | Formwork supply | Site support
            </p>
            <h1 className="text-balance text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Site-ready scaffold and shuttering material without the delay drama.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-300">
              {company.name} helps contractors keep slab cycles, access work, and
              site maintenance moving with checked material, clear dispatch
              coordination, and practical rental guidance.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/request-quote">
                  Get Material Quote <ArrowRight className="h-5 w-5" />
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
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <item.icon className="mb-3 h-5 w-5 text-amber-300" />
                  <p className="font-bold">{item.label}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-300">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-8 hidden rounded-3xl border border-white/10 bg-white/10 p-4 text-white backdrop-blur lg:block">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                Dispatch desk
              </p>
              <p className="mt-1 text-sm text-slate-200">Stock, transport, pickup</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] bg-slate-950 p-6">
                <div className="mb-5 flex items-center justify-between text-white">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-300">
                      Site readiness score
                    </p>
                    <p className="mt-1 text-sm text-slate-400">Built around contractor speed</p>
                  </div>
                  <Gauge className="h-7 w-7 text-amber-300" />
                </div>
                <div className="grid gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white p-5"
                    >
                      <div>
                        <AnimatedCounter
                          value={stat.value}
                          suffix={stat.suffix}
                          className="text-4xl font-black text-slate-950"
                        />
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

      <section className="premium-section py-20">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <MotionWrapper>
            <SectionHeading
              eyebrow="About SteelRise"
              title="A rental partner built for real construction pressure."
              description="The difference between a smooth pour and a delayed pour often comes down to material readiness. We keep stock sorted, checked, and coordinated so your site team can focus on execution."
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
                <Card className="mesh-card h-full p-2 transition duration-300 hover:-translate-y-1 hover:shadow-industrial">
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

      <section className="py-20">
        <div className="container">
          <SectionHeading
            eyebrow="What We Handle"
            title="Everything your site needs to rent, move, use, and return material cleanly."
            description="A premium experience is not only visual. It is how fast your team gets the right stock, how clearly the dispatch is coordinated, and how few surprises happen at unloading."
            align="center"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {servicePillars.map((service, index) => (
              <MotionWrapper key={service.title} delay={index * 0.06}>
                <Card className="group h-full overflow-hidden p-7 transition duration-300 hover:-translate-y-1 hover:shadow-industrial">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-amber-300 transition group-hover:rotate-3 group-hover:scale-105">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-950">{service.title}</h3>
                  <p className="mt-4 leading-8 text-slate-600">{service.description}</p>
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
              title="Core rental stock organized for active site workflows."
              description="High-moving scaffold, formwork, support, and accessory items with clear use cases so enquiry decisions are faster."
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
            title="Trusted across concrete, access, maintenance, and infrastructure work."
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
            title="Project support that adapts to site constraints."
            description="From slab cycles to plant maintenance, our stock movement is planned around access, storage, transport, and work-front sequencing."
            light
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden border-white/10 bg-white/10 text-white backdrop-blur">
                <div className="relative h-44 bg-slate-900 bg-hero-radial">
                  <div className="absolute inset-0 bg-steel-grid bg-[size:26px_26px] opacity-20" />
                </div>
                <CardContent className="p-6">
                  <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-amber-300">
                    {project.tag} | {project.location}
                  </p>
                  <h3 className="text-xl font-black">{project.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.metrics.map((metric) => (
                      <span key={metric} className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-slate-300">
                        {metric}
                      </span>
                    ))}
                  </div>
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
            title="The kind of reliability contractors actually remember."
            align="center"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="p-7 transition hover:-translate-y-1 hover:shadow-industrial">
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
            title="Supplying major construction corridors across North India."
            description="Our delivery network supports Delhi NCR and nearby industrial corridors with coordinated dispatch, replacement, and pickup planning."
          />
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {locations.map((location) => (
              <div
                key={location}
                className="rounded-2xl border border-slate-200 bg-white p-4 font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-300"
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
          <div className="mt-10">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
