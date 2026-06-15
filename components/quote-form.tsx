"use client";

import { FormEvent, useMemo, useState } from "react";
import { AlertCircle, CheckCircle2, ClipboardCheck, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { products as productCatalog } from "@/lib/data";

type QuoteState = {
  name: string;
  phone: string;
  company: string;
  location: string;
  duration: string;
  products: string[];
  notes: string;
};

type FormErrors = Partial<Record<keyof QuoteState, string>>;

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
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const productOptions = useMemo(
    () => Array.from(new Set(productCatalog.map((product) => product.name))),
    []
  );

  function updateField(field: keyof QuoteState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function toggleProduct(product: string) {
    setErrors((current) => ({ ...current, products: undefined }));
    setForm((current) => ({
      ...current,
      products: current.products.includes(product)
        ? current.products.filter((item) => item !== product)
        : [...current.products, product]
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "quote", ...form })
      });

      const result = await response.json();

      if (!response.ok) {
        setErrors(result.errors ?? {});
        setStatus({
          type: "error",
          message: result.message ?? "Please check the form and try again."
        });
        return;
      }

      setStatus({ type: "success", message: result.message });
      setForm(initialState);
    } catch {
      setStatus({
        type: "error",
        message: "We could not submit the quote request. Please call or WhatsApp us directly."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function fieldError(field: keyof QuoteState) {
    if (!errors[field]) {
      return null;
    }

    return (
      <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-red-600">
        <AlertCircle className="h-4 w-4" />
        {errors[field]}
      </p>
    );
  }

  function fieldInvalid(field: keyof QuoteState) {
    return Boolean(errors[field]);
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
            aria-invalid={fieldInvalid("name")}
            required
          />
          {fieldError("name")}
        </div>
        <div className="space-y-2">
          <Label htmlFor="quote-phone">Phone</Label>
          <Input
            id="quote-phone"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="+91"
            aria-invalid={fieldInvalid("phone")}
            required
          />
          {fieldError("phone")}
        </div>
        <div className="space-y-2">
          <Label htmlFor="quote-company">Company</Label>
          <Input
            id="quote-company"
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            placeholder="Company or contractor name"
            aria-invalid={fieldInvalid("company")}
          />
          {fieldError("company")}
        </div>
        <div className="space-y-2">
          <Label htmlFor="quote-location">Site Location</Label>
          <Input
            id="quote-location"
            value={form.location}
            onChange={(event) => updateField("location", event.target.value)}
            placeholder="City / project location"
            aria-invalid={fieldInvalid("location")}
            required
          />
          {fieldError("location")}
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="quote-duration">Expected Rental Duration</Label>
          <Input
            id="quote-duration"
            value={form.duration}
            onChange={(event) => updateField("duration", event.target.value)}
            placeholder="Example: 45 days, 3 months, phase-wise"
            aria-invalid={fieldInvalid("duration")}
          />
          {fieldError("duration")}
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
        {fieldError("products")}
      </fieldset>

      <div className="space-y-2">
        <Label htmlFor="quote-notes">Requirement Notes</Label>
        <Textarea
          id="quote-notes"
          value={form.notes}
          onChange={(event) => updateField("notes", event.target.value)}
          placeholder="Add approximate quantities, drawings available, floor height, delivery timeline, or special instructions."
          aria-invalid={fieldInvalid("notes")}
        />
        {fieldError("notes")}
      </div>

      {status ? (
        <p className={`flex items-start gap-3 rounded-2xl p-4 text-sm font-semibold ${
          status.type === "success"
            ? "bg-emerald-50 text-emerald-800"
            : "bg-red-50 text-red-700"
        }`}>
          {status.type === "success" ? (
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
          ) : (
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          )}
          <span>{status.message}</span>
        </p>
      ) : null}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending Request
          </>
        ) : (
          <>
            Submit Quote Request <ClipboardCheck className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}
