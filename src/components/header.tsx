"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Sidebar from "./sidebar";
import clsx from "clsx";
import Image from "next/image";
import NavItem from "./nav-item";
import BurgerIcon from "../../public/icons/burger-menu.svg";

export interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  const pathname = usePathname();

  const handleExitClick = () => {
    router.push("/");
  };

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  return (
    <header
      className={clsx(
        "max-w-[1280px] mx-auto flex justify-between items-center min-w-[320px] p-[28px_20px_20px_20px] md:p-[32px] xl:p-[32px_64px]",
        {
          "mb-[34px] md:mb-[53px] xl:mb-[64px]":
            pathname === "/ourfriends" ||
            pathname === "/news" ||
            pathname === "/findpet",
        }
      )}
    >
      <div>
        <Link href="/">
          <Image
            width={105}
            height={28}
            priority
            src="/icons/logo-header.svg"
            alt="logo"
          />
        </Link>
      </div>

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
      <div className="flex gap-[10px]">
        <ul className="hidden md:flex xl:flex gap-[10px]">
          <NavItem pathname="signin" variant="yellow">
            Login
          </NavItem>
          <NavItem pathname="signup" variant="yellowLight">
            Registration
          </NavItem>
        </ul>
        <button
          className={clsx(
            "stroke-[#262626] hover:stroke-[#f6b83d] transition-all",
            visible && "hidden",
            "xl:hidden"
          )}
          onClick={() => setVisible(!visible)}
        >
          <BurgerIcon className="w-[32px] h-[32px] stroke-[3px]" />
        </button>
        <Sidebar
          pathname={pathname}
          visible={visible}
          onClose={() => setVisible(false)}
        />
      </div>
    </header>
  );
}
