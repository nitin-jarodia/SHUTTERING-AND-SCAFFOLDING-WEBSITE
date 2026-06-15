"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Faq = {
  question: string;
  answer: string;
};

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="mx-auto grid max-w-4xl gap-4">
      {faqs.map((faq, index) => {
        const isOpen = open === index;

        return (
          <Card key={faq.question} className="overflow-hidden">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              <span className="text-lg font-black text-slate-950">
                {faq.question}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-amber-500 transition-transform",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                >
                  <p className="px-6 pb-6 leading-8 text-slate-600">
                    {faq.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </Card>
        );
      })}
    </div>
  );
}
