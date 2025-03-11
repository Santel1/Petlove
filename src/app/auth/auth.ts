"use server";

import { buildUrl, sendRequest } from "@/lib/api";
import {
  getTokenFromCookies,
  removeTokenFromCookies,
  saveTokenToCookies,
} from "./cookies-session";
import { ROUTES } from "@/shared/constants";

interface AuthResponse {
  token: string;
  email: string;
  name: string;
}

export interface NoticesFavorites {
  _id: string;
  species: string;
  category: string;
  title: string;
  name: string;
  birthday: string;
  comment: string;
  sex: string;
  location: string;
  imgURL: string;
  createdAt: string;
  user: string;
  popularity: number;
  updatedAt: string;
}

export interface User {
  email: string;
  name: string;
  noticesFavorites: NoticesFavorites[];
}

export const signup = async (name: string, email: string, password: string) => {
  const url = buildUrl(ROUTES.USERS, ROUTES.SIGNUP);
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
  const url = buildUrl(ROUTES.USERS, ROUTES.SIGNIN);
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

  const url = buildUrl(ROUTES.USERS, ROUTES.SIGNOUT);

  await sendRequest<void>(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  removeTokenFromCookies();
};
