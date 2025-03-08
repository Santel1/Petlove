import { buildUrl, sendRequest } from "@/lib/api";
import { getTokenFromCookies } from "./cookies-session";
import { cache } from "react";
import { User } from "./auth";

export const getUser = cache(async () => {
  try {
    const token = getTokenFromCookies();

    if (!token) {
      throw new Error("Unauthorized");
    }

    const url = buildUrl("users", "current");

    return await sendRequest<User>(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error("Unauthorized:", error);
    return null;
  }
});
