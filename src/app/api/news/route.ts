import { buildUrl, sendRequest, stringifyQueryParams } from "@/lib/api";
import { ROUTES } from "@/shared/constants";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page") || "1";

    const query = stringifyQueryParams({ page });
    const url = `${buildUrl(ROUTES.NEWS)}?${query}`;

    const newsData = await sendRequest(url);

    return NextResponse.json(newsData, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch news:", error);
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
