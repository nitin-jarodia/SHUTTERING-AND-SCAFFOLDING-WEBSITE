"use client";

import { FormEvent, useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type FormState = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", ...form })
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

      setStatus({
        type: "success",
        message: result.message
      });
      setForm(initialState);
    } catch {
      setStatus({
        type: "error",
        message: "We could not submit the form. Please call or WhatsApp us directly."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function fieldError(field: keyof FormState) {
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

  function fieldInvalid(field: keyof FormState) {
    return Boolean(errors[field]);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Your full name"
            aria-invalid={fieldInvalid("name")}
            required
          />
          {fieldError("name")}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="+91"
            aria-invalid={fieldInvalid("phone")}
            required
          />
          {fieldError("phone")}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
          placeholder="name@company.com"
          aria-invalid={fieldInvalid("email")}
        />
        {fieldError("email")}
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Enquiry Details</Label>
        <Textarea
          id="message"
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Tell us what material you need, site location, and expected rental duration."
          aria-invalid={fieldInvalid("message")}
          required
        />
        {fieldError("message")}
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
            <Loader2 className="h-4 w-4 animate-spin" /> Sending Enquiry
          </>
        ) : (
          <>
            Send Enquiry <Send className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}
