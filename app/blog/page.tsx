import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { insights } from "@/lib/data";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical construction rental insights for scaffold planning, shuttering material enquiries, and site coordination."
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Practical planning guides for scaffold and shuttering decisions."
        description="Field-focused resources for contractors, site engineers, and procurement teams who need better rental planning, safer access, and cleaner material movement."
        ctaLabel="Ask for Planning Help"
        ctaHref="/contact"
      />

      <section className="py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Latest Posts"
            title="Useful content that can grow into a serious SEO channel."
            description="Each article topic targets real questions contractors ask before ordering scaffold, shuttering, props, jacks, and accessories."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {insights.map((post) => (
              <Card key={post.title} className="overflow-hidden transition hover:-translate-y-1 hover:shadow-industrial">
                <div className="relative h-48 bg-slate-900 bg-hero-radial">
                  <div className="absolute inset-0 bg-steel-grid bg-[size:28px_28px] opacity-20" />
                  <span className="absolute left-5 top-5 rounded-full bg-amber-400 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-slate-950">
                    {post.category}
                  </span>
                </div>
                <CardContent className="p-7">
                  <div className="mb-5 flex items-center gap-3 text-sm font-semibold text-slate-500">
                    <CalendarDays className="h-4 w-4 text-amber-500" />
                    {post.date} | {post.readTime}
                  </div>
                  <h2 className="text-2xl font-black tracking-tight text-slate-950">
                    {post.title}
                  </h2>
                  <p className="mt-4 leading-8 text-slate-600">{post.excerpt}</p>
                  <Button asChild variant="outline" className="mt-6">
                    <Link href="/contact">
                      Discuss Requirement <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
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
