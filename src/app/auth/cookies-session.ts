import "server-only";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const TOKEN_KEY = "session";

export const saveTokenToCookies = (token: string) => {
  cookies().set(TOKEN_KEY, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  redirect("/news");
};

export const getTokenFromCookies = () => {
  const cookieStore = cookies();
  const token = cookieStore.get(TOKEN_KEY)?.value;

  if (!token) {
    redirect("/signin");
  }

  return token || null;
};

export const removeTokenFromCookies = () => {
  cookies().delete(TOKEN_KEY);
  redirect("/signin");
};

export const sessionCookies = () => {
  const cookieStore = cookies();
  const token = cookieStore.get(TOKEN_KEY)?.value;

  return token || null;
};
