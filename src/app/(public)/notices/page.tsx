import React from "react";

import { Metadata } from "next";
import FindPetPage from "@/modules/findPetPage/components/FindPetPage/FindPetPage";
import { petsApi as api } from "@/shared/services";
import Pagination from "@/shared/components/Pagination/Pagination";
import { ROUTES } from "@/shared/constants";
import { sessionCookies } from "@/app/auth/cookies-session";
import { getUser } from "@/app/auth/dal";

export interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export const metadata: Metadata = {
  title: "Petlove - Find your favorite pet",
};

export default async function Page({ searchParams }: PageProps) {
  const page = searchParams["page"] ?? 1;
  const pets = await api.getPets(Number(page));
  const token = await sessionCookies();
  const user = await getUser();
  return (
    <>
      <FindPetPage pets={pets.results} token={token} user={user} />
      <Pagination
        page={page}
        route={ROUTES.PETS}
        totalPages={pets.totalPages}
      />
    </>
  );
}
