import { NextRequest, NextResponse } from "next/server";

export async function handler(req: NextRequest) {
  return NextResponse.json({ message: "Hello from route.ts" });
}
