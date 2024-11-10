"use server";

import { buildUrl, sendRequest } from "@/lib/api";
import {
  getTokenFromCookies,
  removeTokenFromCookies,
  saveTokenToCookies,
} from "./cookies-session";

interface AuthResponse {
  token: string;
  email: string;
  name: string;
}

export interface User {
  email: string;
  name: string;
}

export const signup = async (name: string, email: string, password: string) => {
  const url = buildUrl("users", "signup");
  const body = JSON.stringify({ email, password, name });

  const data = await sendRequest<AuthResponse>(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
  });
  saveTokenToCookies(data.token);
  return data;
};

export const signin = async (email: string, password: string) => {
  const url = buildUrl("users", "signin");
  const body = JSON.stringify({ email, password });

  const data = await sendRequest<AuthResponse>(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
  });

  saveTokenToCookies(data.token);
  return data;
};

export const signout = async () => {
  const token = getTokenFromCookies();

  if (!token) {
    throw new Error("Unauthorized");
  }

  const url = buildUrl("users", "signout");

  await sendRequest<void>(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  removeTokenFromCookies();
};
