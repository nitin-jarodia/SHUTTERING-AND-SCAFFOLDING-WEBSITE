import { NextResponse } from "next/server";

import { saveEnquiry, validateEnquiry, type EnquiryPayload } from "@/lib/enquiries";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Partial<EnquiryPayload>;

    if (payload.type !== "contact" && payload.type !== "quote") {
      return NextResponse.json(
        { ok: false, message: "Invalid enquiry type." },
        { status: 400 }
      );
    }

    const errors = validateEnquiry(payload);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please correct the highlighted fields.",
          errors
        },
        { status: 422 }
      );
    }

    const record = await saveEnquiry(payload as EnquiryPayload);

    return NextResponse.json({
      ok: true,
      id: record.id,
      message:
        "Enquiry received. Our team will review the requirement and contact you shortly."
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Something went wrong while saving your enquiry. Please call or WhatsApp us."
      },
      { status: 500 }
    );
  }
}
