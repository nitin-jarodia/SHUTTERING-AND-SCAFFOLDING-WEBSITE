import Link from "next/link";
import { ArrowRight, PackageCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ProductCardProps = {
  product: {
    name: string;
    description: string;
    useCase: string;
  };
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group h-full overflow-hidden transition hover:-translate-y-1 hover:shadow-industrial">
      <div className="h-36 bg-slate-900 bg-hero-radial p-4">
        <div className="flex h-full items-center justify-center rounded-2xl border border-white/10 bg-white/5">
          <PackageCheck className="h-12 w-12 text-amber-300 transition group-hover:scale-110" />
        </div>
      </div>
      <CardHeader>
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
        <Button asChild variant="outline" className="mt-6 w-full">
          <Link href="/request-quote">
            Enquire Now <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
