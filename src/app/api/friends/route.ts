import { buildUrl, sendRequest, stringifyQueryParams } from "@/lib/api";
import { ROUTES } from "@/shared/constants";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const friendsData = await sendRequest(buildUrl(ROUTES.OUR_FRIENDS));
    return NextResponse.json(friendsData, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch our friends:", error);
    return NextResponse.json(
      { error: "Failed to fetch our friends" },
      { status: 500 }
    );
  }
}
