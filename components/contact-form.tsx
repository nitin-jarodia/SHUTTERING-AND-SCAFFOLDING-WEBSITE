"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

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

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState("");

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      setStatus("Please add your name, phone number, and enquiry details.");
      return;
    }
    setStatus(
      "Thank you. Your enquiry is ready for submission and our team will contact you shortly."
    );
    setForm(initialState);
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
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="+91"
            required
          />
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
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Enquiry Details</Label>
        <Textarea
          id="message"
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Tell us what material you need, site location, and expected rental duration."
          required
        />
      </div>
      {status ? (
        <p className="rounded-2xl bg-amber-50 p-4 text-sm font-semibold text-slate-800">
          {status}
        </p>
      ) : null}
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Send Enquiry <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
