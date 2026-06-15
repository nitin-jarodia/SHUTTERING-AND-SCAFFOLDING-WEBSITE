import Link from "next/link";
import { BriefcaseBusiness, Camera, Globe2, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { company, navLinks, products } from "@/lib/data";

const socialLinks = [
  { href: "https://www.facebook.com/", label: "Facebook", icon: Globe2 },
  { href: "https://www.instagram.com/", label: "Instagram", icon: Camera },
  { href: "https://www.linkedin.com/", label: "LinkedIn", icon: BriefcaseBusiness }
];

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container grid gap-10 py-14 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-lg font-black text-slate-950">
              SR
            </div>
            <div>
              <p className="text-xl font-black">{company.name}</p>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
                Rental | Supply | Site Support
              </p>
            </div>
          </div>
          <p className="max-w-md leading-8 text-slate-300">
            Site-ready scaffolding and shuttering material for builders,
            contractors, factories, and infrastructure teams across North India.
          </p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-amber-400 hover:text-amber-300"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-amber-300">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm text-slate-300">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-amber-300">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/request-quote" className="hover:text-amber-300">
                Request Quote
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-amber-300">
            Products
          </h3>
          <ul className="space-y-3 text-sm text-slate-300">
            {products.slice(0, 7).map((product) => (
              <li key={product.name}>
                <Link href="/products" className="hover:text-amber-300">
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-amber-300">
            Contact
          </h3>
          <div className="space-y-4 text-sm leading-7 text-slate-300">
            <a className="flex gap-3 hover:text-amber-300" href={`tel:${company.phone}`}>
              <Phone className="mt-1 h-4 w-4 shrink-0 text-amber-400" />
              {company.phone}
            </a>
            <a className="flex gap-3 hover:text-amber-300" href={`mailto:${company.email}`}>
              <Mail className="mt-1 h-4 w-4 shrink-0 text-amber-400" />
              {company.email}
            </a>
            <p className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-amber-400" />
              {company.address}
            </p>
          </div>
          <Button asChild className="mt-6 w-full">
            <Link href="/contact">Send Enquiry</Link>
          </Button>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container flex flex-col gap-2 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {company.name}. All rights reserved.</p>
          <p>Original demo website content and design.</p>
        </div>
      </div>
    </footer>
  );
}
