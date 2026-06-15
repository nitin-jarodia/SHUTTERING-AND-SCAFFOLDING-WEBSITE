import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { company } from "@/lib/data";

export function CtaSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="industrial-surface relative overflow-hidden rounded-[2rem] p-8 shadow-industrial sm:p-12 lg:p-16">
          <div className="absolute inset-0 bg-hero-radial opacity-90" />
          <div className="absolute inset-0 bg-steel-grid bg-[size:34px_34px] opacity-40" />
          <div className="relative max-w-3xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-amber-300">
              Need material on site?
            </p>
            <h2 className="text-balance text-3xl font-black tracking-tight text-white sm:text-5xl">
              Get a practical quote for scaffold and shuttering material today.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Share your site location, rental duration, and required items. Our
              team will respond with availability, pricing, and dispatch support.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
          </div>
        </div>
      </div>
    </section>
  );
}
