import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { company } from "@/lib/data";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  ctaLabel = "Request a Site Quote",
  ctaHref = "/request-quote"
}: PageHeroProps) {
  return (
    <section className="industrial-surface relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 bg-hero-radial" />
      <div className="absolute inset-0 bg-steel-grid bg-[size:38px_38px] opacity-30" />
      <div className="absolute -right-24 top-12 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
      <div className="container relative">
        <div className="max-w-4xl">
          <p className="mb-4 inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-amber-300">
            {eyebrow}
          </p>
          <h1 className="text-balance text-4xl font-black tracking-tight text-white sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href={ctaHref}>
                {ctaLabel} <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="light">
              <a href={`tel:${company.phone}`}>
                <Phone className="h-5 w-5" /> Speak to Sales
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
