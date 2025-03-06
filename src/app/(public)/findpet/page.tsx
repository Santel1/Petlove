import React from "react";

import { Metadata } from "next";
import FindPetPage from "@/modules/findPetPage/components/FindPetPage/FindPetPage";
import { insideServerApi as api } from "@/shared/services";

export interface PageProps {}

export const metadata: Metadata = {
  title: "Petlove - Find your favorite pet",
};

export default async function Page({}: PageProps) {
  const pets = await api.getPets();
  return (
    <>
      <FindPetPage pets={pets.results} />
    </>
  );
}
