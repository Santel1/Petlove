import React from "react";
import Pets from "@/components/findPet";
import Title from "@/components/title";
export interface PageProps {}

export const metadata = {
  title: "Petlove - Find your favorite pet",
};

export default function Page({}: PageProps) {
  return (
    <>
      <Title className="mb-[40px]">Find your favorite pet</Title>
      <Pets />
    </>
  );
}
