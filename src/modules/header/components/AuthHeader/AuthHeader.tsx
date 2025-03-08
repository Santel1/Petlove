"use client";

import Button from "@/shared/components/Button/Button";
import Icon from "@/shared/components/Icon/Icon";
import NavItem from "@/shared/components/NavItem/NavItem";

import Link from "next/link";

import { signout, User } from "@/app/auth/auth";

export interface AuthHeaderProps {
  user?: User | null;
}

export default function AuthHeader({ user }: AuthHeaderProps) {
  return (
    <div>
      {user ? (
        <div className="md:flex xl:flex gap-[10px] items-center">
          <Button
            className="hidden xl:flex xl:p-[15px_35px]"
            onClick={async () => {
              await signout();
            }}
          >
            LOG OUT
          </Button>
          <Link href="/profile" className="flex gap-[10px] group">
            <div className="rounded-full p-[10px] bg-[#fff4df] group-hover:bg-[#f6b83d] fill-[#f6b83d] stroke-[#f6b83d] group-hover:fill-[#fff4df] group-hover:stroke-[#fff4df] transition-all duration-500">
              <Icon iconName="icon-user" width={20} height={20} />
            </div>
            <p className="hidden font-[700] text-[20px] text-[#262626] md:flex items-center group-hover:text-[#f6b83d] transition-all duration-300">
              {user.name}
            </p>
          </Link>
        </div>
      ) : (
        <ul className="hidden md:flex xl:flex gap-[10px]">
          <NavItem pathname="signin" variant="yellow">
            Login
          </NavItem>
          <NavItem pathname="signup" variant="yellowLight">
            Registration
          </NavItem>
        </ul>
      )}
    </div>
  );
}
