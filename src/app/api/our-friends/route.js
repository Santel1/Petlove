import { buildUrl, sendRequest, stringifyQueryParams } from "@/lib/api";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page") || "1";

    const query = stringifyQueryParams({ page });
    const url = `${buildUrl("friends")}?${query}`;

    const friendsData = await sendRequest(url);

    return NextResponse.json(friendsData, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch our friends:", error);
    return NextResponse.json(
      { error: "Failed to fetch our friends" },
      { status: 500 }
    );
  }
}
