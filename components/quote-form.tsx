"use client";

import { FormEvent, useState } from "react";
import { ClipboardCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const productOptions = [
  "Cuplock System",
  "Shuttering Plates",
  "Adjustable Props",
  "Span / Acro Span",
  "Steel Challi",
  "Jacks, Couplers & Accessories"
];

type QuoteState = {
  name: string;
  phone: string;
  company: string;
  location: string;
  duration: string;
  products: string[];
  notes: string;
};

const initialState: QuoteState = {
  name: "",
  phone: "",
  company: "",
  location: "",
  duration: "",
  products: [],
  notes: ""
};

export function QuoteForm() {
  const [form, setForm] = useState<QuoteState>(initialState);
  const [status, setStatus] = useState("");

  function updateField(field: keyof QuoteState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function toggleProduct(product: string) {
    setForm((current) => ({
      ...current,
      products: current.products.includes(product)
        ? current.products.filter((item) => item !== product)
        : [...current.products, product]
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.location.trim()) {
      setStatus("Please add your name, phone number, and site location.");
      return;
    }
    setStatus(
      "Quote request captured. Our sales team will review the requirement and respond with availability."
    );
    setForm(initialState);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="quote-name">Name</Label>
          <Input
            id="quote-name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Your name"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="quote-phone">Phone</Label>
          <Input
            id="quote-phone"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="+91"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="quote-company">Company</Label>
          <Input
            id="quote-company"
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            placeholder="Company or contractor name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="quote-location">Site Location</Label>
          <Input
            id="quote-location"
            value={form.location}
            onChange={(event) => updateField("location", event.target.value)}
            placeholder="City / project location"
            required
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="quote-duration">Expected Rental Duration</Label>
          <Input
            id="quote-duration"
            value={form.duration}
            onChange={(event) => updateField("duration", event.target.value)}
            placeholder="Example: 45 days, 3 months, phase-wise"
          />
        </div>
      </div>

      <fieldset>
        <legend className="mb-3 text-sm font-bold text-slate-800">
          Material Required
        </legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {productOptions.map((product) => (
            <label
              key={product}
              className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm font-bold text-slate-700 transition hover:border-amber-300"
            >
              <input
                type="checkbox"
                checked={form.products.includes(product)}
                onChange={() => toggleProduct(product)}
                className="h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-500"
              />
              {product}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="space-y-2">
        <Label htmlFor="quote-notes">Requirement Notes</Label>
        <Textarea
          id="quote-notes"
          value={form.notes}
          onChange={(event) => updateField("notes", event.target.value)}
          placeholder="Add approximate quantities, drawings available, floor height, delivery timeline, or special instructions."
        />
      </div>

      {status ? (
        <p className="rounded-2xl bg-amber-50 p-4 text-sm font-semibold text-slate-800">
          {status}
        </p>
      ) : null}

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Submit Quote Request <ClipboardCheck className="h-4 w-4" />
      </Button>
    </form>
  );
}
