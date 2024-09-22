"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Sidebar from "./sidebar";
import clsx from "clsx";
import Image from "next/image";

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
    <header className="flex min-w-[320px] justify-between p-[20px] md:p-[32px] lg:p-[20px_64px]">
      <div>
        <Link href="/">
          <Image width={105} height={28} src="/icons/logo.svg" alt="logo" />
        </Link>
      </div>

      <ul className="hidden lg:flex gap-[10px]">
        <Navbar pathname="/news" current={pathname === "/news"}>
          News
        </Navbar>
        <Navbar pathname="/findpet" current={pathname === "/findpet"}>
          Find pet
        </Navbar>
        <Navbar pathname="/ourfriends" current={pathname === "/ourfriends"}>
          Our Friends
        </Navbar>
      </ul>
      <div className="flex gap-[10px]">
        <ul className="hidden md:flex lg:flex gap-[10px]">
          <Navbar pathname="signin" variant="yellow">
            Login
          </Navbar>
          <Navbar pathname="signup" variant="yellowLight">
            Registration
          </Navbar>
        </ul>
        <button
          className={clsx(visible && "hidden", "lg:hidden")}
          onClick={() => setVisible(!visible)}
        >
          <Image
            width={30}
            height={28}
            src="/icons/burger-menu.svg"
            alt="logo"
          />
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
