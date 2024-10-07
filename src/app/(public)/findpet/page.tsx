import React from "react";
import Pets from "@/components/findPet";
import Title from "@/components/title";
import { Metadata } from "next";
export interface PageProps {}

export const metadata: Metadata = {
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
