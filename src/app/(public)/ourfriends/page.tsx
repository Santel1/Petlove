import Ourfriends from "@/components/ourfriends";
import Title from "@/components/title";
import { Metadata } from "next";
import React from "react";

export interface PageProps {}

export const metadata: Metadata = {
  title: "Petlove - Our Friends",
};

export default async function Page({}: PageProps) {
  return (
    <>
      <Title className="mb-[60px]">Our Friends</Title>
      <Ourfriends />
    </>
  );
}
