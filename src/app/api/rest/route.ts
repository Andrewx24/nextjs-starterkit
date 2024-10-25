// /app/api/starwars/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  const baseURL = 'https://swapi.dev/api/people/';
  const url = id ? `${baseURL}${id}/` : baseURL;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return NextResponse.json({ message: 'Error fetching data' }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: 'Server error', error: (error as Error).message },
      { status: 500 }
    );
  }
}
