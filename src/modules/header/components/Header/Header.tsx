import React from "react";

import Link from "next/link";
import clsx from "clsx";

import Icon from "@/shared/components/Icon/Icon";
import AuthHeader from "../AuthHeader/AuthHeader";
import NavLinks from "../NavLinks/NavLinks";
import MobileMenu from "../MobileMenu/MobileMenu";

import { User } from "@/app/auth/auth";
import { getUser } from "@/app/auth/dal";

export interface HeaderProps {
  user?: User | null;
}

export default async function Header({ user }: HeaderProps) {
  return (
    <header
      className={clsx(
        "max-w-[1280px] mx-auto flex justify-between items-center min-w-[320px] p-[28px_20px_20px_20px] md:p-[32px] xl:p-[32px_64px]"
      )}
    >
      <div>
        <Link href="/">
          <Icon iconName="icon-logo" width={105} height={28} />
        </Link>
      </div>
      <NavLinks />
      <div className="flex gap-[20px]">
        <AuthHeader user={user} />
        <MobileMenu user={user} />
      </div>
    </header>
  );
}
