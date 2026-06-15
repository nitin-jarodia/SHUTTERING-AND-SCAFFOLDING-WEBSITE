"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, Mail, MapPin, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { company, navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="hidden bg-slate-950 py-2 text-xs font-semibold text-slate-200 lg:block">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a className="flex items-center gap-2 hover:text-amber-300" href={`tel:${company.phone}`}>
              <Phone className="h-3.5 w-3.5" />
              {company.phone}
            </a>
            <a className="flex items-center gap-2 hover:text-amber-300" href={`mailto:${company.email}`}>
              <Mail className="h-3.5 w-3.5" />
              {company.email}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-amber-400" />
              {company.location}
            </span>
          </div>
          <span className="text-amber-300">Rental | Supply | Site Support</span>
        </div>
      </div>

      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-lg font-black text-amber-400 shadow-lg">
            SR
          </div>
          <div>
            <p className="text-lg font-black tracking-tight text-slate-950">
              {company.shortName}
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
              Scaffold & Shuttering
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950",
                pathname === link.href && "bg-amber-100 text-slate-950"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outline">
            <a href={company.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </Button>
          <Button asChild>
            <Link href="/request-quote">Request Quote</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle navigation menu"
          className="rounded-full border border-slate-200 p-3 text-slate-900 lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white p-4 shadow-xl lg:hidden">
          <nav className="grid gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-2xl px-4 py-3 font-bold text-slate-700",
                  pathname === link.href && "bg-amber-100 text-slate-950"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 grid gap-3">
            <Button asChild>
              <Link href="/request-quote" onClick={() => setOpen(false)}>
                Request Quote
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <a href={`tel:${company.phone}`}>Call Now</a>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
