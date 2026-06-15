import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

import { CtaSection } from "@/components/cta-section";
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
      <section className="industrial-surface py-24">
        <div className="container">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-amber-300">
            Insights
          </p>
          <h1 className="max-w-4xl text-balance text-5xl font-black tracking-tight text-white sm:text-6xl">
            Practical guidance for better scaffold and shuttering planning.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300">
            Short, useful articles for contractors, site engineers, and
            procurement teams planning rental material.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Latest Posts"
            title="Field-focused advice, not generic theory."
            description="Use these placeholder insight cards as a foundation for future SEO content and project education."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {insights.map((post) => (
              <Card key={post.title} className="overflow-hidden transition hover:-translate-y-1 hover:shadow-industrial">
                <div className="h-48 bg-slate-900 bg-hero-radial" />
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
                      Discuss This Topic <ArrowRight className="h-4 w-4" />
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
