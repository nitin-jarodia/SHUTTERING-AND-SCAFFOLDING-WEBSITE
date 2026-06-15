import Link from "next/link";
import { ArrowRight, PackageCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ProductCardProps = {
  product: {
    name: string;
    category?: string;
    badge?: string;
    description: string;
    useCase: string;
    specs?: string[];
  };
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group h-full overflow-hidden border-slate-200/80 bg-white/90 transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-industrial">
      <div className="relative h-40 overflow-hidden bg-slate-950 bg-hero-radial p-4">
        <div className="absolute inset-0 bg-steel-grid bg-[size:28px_28px] opacity-20" />
        <div className="relative flex h-full items-center justify-center rounded-2xl border border-white/10 bg-white/5">
          <PackageCheck className="h-12 w-12 text-amber-300 transition duration-300 group-hover:scale-110 group-hover:rotate-3" />
        </div>
        {product.badge ? (
          <span className="absolute left-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-slate-950">
            {product.badge}
          </span>
        ) : null}
      </div>
      <CardHeader>
        {product.category ? (
          <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-600">
            {product.category}
          </p>
        ) : null}
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="leading-7 text-slate-600">{product.description}</p>
        <div className="mt-5 rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">
            Key Use
          </p>
          <p className="mt-2 font-bold text-slate-900">{product.useCase}</p>
        </div>
        {product.specs?.length ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {product.specs.map((spec) => (
              <span
                key={spec}
                className="rounded-full border border-slate-200 px-3 py-1 text-xs font-bold text-slate-600"
              >
                {spec}
              </span>
            ))}
          </div>
        ) : null}
        <Button asChild variant="outline" className="mt-6 w-full">
          <Link href="/request-quote">
            Enquire Now <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
