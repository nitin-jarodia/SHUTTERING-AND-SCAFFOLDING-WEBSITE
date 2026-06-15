import { mkdir, appendFile } from "fs/promises";
import { randomUUID } from "crypto";
import path from "path";

export type EnquiryPayload = {
  type: "contact" | "quote";
  name: string;
  phone: string;
  email?: string;
  company?: string;
  location?: string;
  duration?: string;
  products?: string[];
  message?: string;
  notes?: string;
};

export type EnquiryRecord = EnquiryPayload & {
  id: string;
  createdAt: string;
  source: "website";
};

const dataDirectory = path.join(process.cwd(), "data");
const enquiriesFile = path.join(dataDirectory, "enquiries.jsonl");

export async function saveEnquiry(payload: EnquiryPayload) {
  await mkdir(dataDirectory, { recursive: true });

  const record: EnquiryRecord = {
    ...payload,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    source: "website"
  };

  await appendFile(enquiriesFile, `${JSON.stringify(record)}\n`, "utf8");
  return record;
}

export function validateEnquiry(payload: Partial<EnquiryPayload>) {
  const errors: Record<string, string> = {};

  if (!payload.name?.trim()) {
    errors.name = "Name is required.";
  }

  if (!payload.phone?.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^[0-9+\-\s()]{8,18}$/.test(payload.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }

  if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (payload.type === "contact" && !payload.message?.trim()) {
    errors.message = "Please add enquiry details.";
  }

  if (payload.type === "quote") {
    if (!payload.location?.trim()) {
      errors.location = "Site location is required.";
    }

    if (!payload.products?.length && !payload.notes?.trim()) {
      errors.products = "Select at least one product or add requirement notes.";
    }
  }

  return errors;
}
