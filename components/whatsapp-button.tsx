import { MessageCircle, Phone } from "lucide-react";

import { company } from "@/lib/data";

export function WhatsappButton() {
  return (
    <>
      <div className="fixed bottom-4 left-4 right-4 z-40 grid grid-cols-2 gap-3 sm:hidden">
        <a
          href={`tel:${company.phone}`}
          className="flex h-12 items-center justify-center gap-2 rounded-full bg-slate-950 text-sm font-black text-white shadow-2xl"
        >
          <Phone className="h-4 w-4" /> Call
        </a>
        <a
          href={company.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="flex h-12 items-center justify-center gap-2 rounded-full bg-green-500 text-sm font-black text-white shadow-2xl"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
      <a
        href={company.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Enquire on WhatsApp"
        className="fixed bottom-5 right-5 z-40 hidden h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-900/30 transition hover:-translate-y-1 hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 sm:flex"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
  );
}
