import { buildUrl, sendRequest, stringifyQueryParams } from "@/lib/api";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page") || "1";

    const query = stringifyQueryParams({ page });
    const url = `${buildUrl("notices")}?${query}`;

    const petsData = await sendRequest(url);

    return NextResponse.json(petsData, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch pets:", error);
    return NextResponse.json(
      { error: "Failed to fetch pets" },
      { status: 500 }
    );
  }
}
