import { getTokenFromCookies } from "@/app/auth/cookies-session";
import { ROUTES } from "@/shared/constants";
import { NextResponse } from "next/server";

export interface WorkDay {
  _id: string;
  isOpen: boolean;
}
export interface OurFriendsResults {
  _id: string;
  title: string;
  url: string;
  addressUrl: string;
  address: string;
  imageUrl: string;
  workDays: WorkDay[];
  phone: string;
  email: string;
}

export interface News {
  page: number;
  perPage: number;
  totalPages: number;
  results: NewsResults[];
}

export interface NewsResults {
  _id: string;
  imgUrl: string;
  title: string;
  text: string;
  date: string;
  url: string;
  id: string;
}

export interface Pets {
  page: number;
  perPage: number;
  totalPages: number;
  results: PetsResults[];
}

export interface PetsResults {
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
  popularity: string;
  updatedAt: string;
}

const PROJECT_TOKEN = process.env.NEXT_PUBLIC_PROJECT_TOKEN;

export const buildUrl = (...paths: string[]) =>
  `https://${PROJECT_TOKEN}/api/${paths.join("/")}`;

export const stringifyQueryParams = (params: Record<string, string>) =>
  new URLSearchParams(params).toString();

export const sendRequest = async <T>(url: string, init?: RequestInit) => {
  const res = await fetch(url, init);
  if (!res.ok) {
    throw new Error(await res.text());
  }

  return (await res.json()) as T;
};
