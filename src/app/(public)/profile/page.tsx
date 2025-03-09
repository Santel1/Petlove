import { User } from "@/app/auth/auth";
import { getUser } from "@/app/auth/dal";
import React from "react";

export interface PageProps {}

export default async function Page({}: PageProps) {
  const user = await getUser();

  console.log(user);
  return (
    <div>
      <h1>User profile</h1>
      <p>{user?.name}</p>
      <p>{user?.email}</p>
    </div>
  );
}
