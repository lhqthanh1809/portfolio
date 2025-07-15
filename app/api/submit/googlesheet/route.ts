import { appendToGoogleSheet } from "@/lib/action";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); 

    const result = await appendToGoogleSheet(body)

    if (!result) {
      throw new Error('Append failed');
    }
    return NextResponse.json({ message: 'Received', data: result}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
}