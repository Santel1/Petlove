import { cache } from "react";

export interface WorkDay {
  _id: string;
  isOpen: boolean;
}
export interface OurFriends {
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

const PROJECT_TOKEN = process.env.NEXT_PUBLIC_PROJECT_TOKEN;

const buildUrl = (...paths: string[]) =>
  `https://${PROJECT_TOKEN}/api/${paths.join("/")}`;

const stringifyQueryParams = (params: Record<string, string>) =>
  new URLSearchParams(params).toString();

const sendRequest = async <T>(url: string, init?: RequestInit) => {
  const res = await fetch(url, init);
  if (!res.ok) {
    throw new Error(await res.text());
  }

  return (await res.json()) as T;
};

export const getOurFriends = (init?: RequestInit) => {
  return sendRequest<OurFriends[]>(buildUrl("friends"), init);
};
