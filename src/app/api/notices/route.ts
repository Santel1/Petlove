import { getTokenFromCookies } from "@/app/auth/cookies-session";
import { buildUrl, sendRequest, stringifyQueryParams } from "@/lib/api";
import { ROUTES } from "@/shared/constants";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page") || "1";

    const query = stringifyQueryParams({ page });
    const url = `${buildUrl(ROUTES.PETS)}?${query}`;

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

export async function POST(request: Request) {
  try {
    const token = await getTokenFromCookies();
    if (!token) {
      return NextResponse.json(
        { error: "Unauthorized: Please log in" },
        { status: 401 }
      );
    }

    const { id } = await request.json(); // Получаем ID питомца из тела запроса
    if (!id) {
      return NextResponse.json(
        { error: "Pet ID is required" },
        { status: 400 }
      );
    }

    const url = buildUrl(`${ROUTES.ADD_TO_FAVORITE}/${id}`);
    const response = await sendRequest(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return NextResponse.json(
      { message: "Pet added to favorites", data: response },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to add pet to favorites:", error);
    return NextResponse.json(
      { error: "Failed to add pet to favorites", details: error },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const token = await getTokenFromCookies();
    if (!token) {
      return NextResponse.json(
        { error: "Unauthorized: Please log in" },
        { status: 401 }
      );
    }

    const { id } = await request.json(); // Получаем ID питомца из тела запроса
    if (!id) {
      return NextResponse.json(
        { error: "Pet ID is required" },
        { status: 400 }
      );
    }

    const url = buildUrl(`notices/favorites/remove/${id}`);
    const response = await sendRequest(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return NextResponse.json(
      { message: "Pet removed from favorites", data: response },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to remove pet from favorites:", error);
    return NextResponse.json(
      { error: "Failed to remove pet from favorites", details: error },
      { status: 500 }
    );
  }
}
