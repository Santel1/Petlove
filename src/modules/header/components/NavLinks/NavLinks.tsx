"use client";
import NavItem from "@/shared/components/NavItem/NavItem";
import { usePathname } from "next/navigation";
import React from "react";

export interface NavLinksProps {}

export default function NavLinks({}: NavLinksProps) {
  const pathname = usePathname();
  return (
    <ul className="hidden xl:flex gap-[10px]">
      <NavItem pathname="/news" current={pathname === "/news"}>
        News
      </NavItem>
      <NavItem pathname="/findpet" current={pathname === "/findpet"}>
        Find pet
      </NavItem>
      <NavItem pathname="/ourfriends" current={pathname === "/ourfriends"}>
        Our Friends
      </NavItem>
    </ul>
  );
}
