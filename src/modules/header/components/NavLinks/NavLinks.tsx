"use client";
import NavItem from "@/shared/components/NavItem/NavItem";
import { ROUTES } from "@/shared/constants";
import { usePathname } from "next/navigation";
import React from "react";

export interface NavLinksProps {}

export default function NavLinks({}: NavLinksProps) {
  const pathname = usePathname();
  return (
    <ul className="hidden xl:flex gap-[10px]">
      <NavItem pathname={ROUTES.NEWS} current={pathname === `/${ROUTES.NEWS}`}>
        News
      </NavItem>
      <NavItem pathname={ROUTES.PETS} current={pathname === `/${ROUTES.PETS}`}>
        Find pet
      </NavItem>
      <NavItem
        pathname={ROUTES.OUR_FRIENDS}
        current={pathname === `/${ROUTES.OUR_FRIENDS}`}
      >
        Our Friends
      </NavItem>
    </ul>
  );
}
