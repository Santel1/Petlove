import React from "react";
import OurFriendsPage from "@/modules/ourFriendsPage/components/OurFriendsPage/OurFriendsPage";
import { Metadata } from "next";
import { insideServerApi as api } from "@/shared/services";

export interface PageProps {}

export const metadata: Metadata = {
  title: "Petlove - Our Friends",
};

export default async function Page({}: PageProps) {
  const ourFriends = await api.getOurFriends();
  return (
    <>
      <OurFriendsPage ourFriends={ourFriends} />
    </>
  );
}
