import { MessageCircle } from "lucide-react";

import { company } from "@/lib/data";

export function WhatsappButton() {
  return (
    <a
      href={company.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Enquire on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-900/30 transition hover:-translate-y-1 hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
