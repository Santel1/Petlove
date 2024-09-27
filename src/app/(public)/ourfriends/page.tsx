import Ourfriends from "@/components/ourfriends";
import Title from "@/components/title";
import React from "react";

export interface PageProps {}

export const metadata = {
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
