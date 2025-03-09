import React from "react";

import { Metadata } from "next";
import FindPetPage from "@/modules/findPetPage/components/FindPetPage/FindPetPage";
import { insideServerApi as api } from "@/shared/services";
import Pagination from "@/shared/components/Pagination/Pagination";
import { ROUTES } from "@/shared/constants";

export interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export const metadata: Metadata = {
  title: "Petlove - Find your favorite pet",
};

export default async function Page({ searchParams }: PageProps) {
  const page = searchParams["page"] ?? 1;

  const pets = await api.getPets(Number(page));

  return (
    <>
      <FindPetPage pets={pets.results} />
      <Pagination
        page={page}
        route={ROUTES.PETS}
        totalPages={pets.totalPages}
      />
    </>
  );
}
