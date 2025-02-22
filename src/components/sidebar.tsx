"use client";

import React, { useEffect } from "react";
import clsx from "clsx";
import NavItem from "./nav-item";
import CrossIcon from "../../public/icons/cross-sidebar.svg";
import { signout, User } from "@/auth/auth";
import Button from "./button";

export interface SidebarProps {
  user?: User | null;
  pathname: string;
  visible: boolean;
  onClose: () => void;
}

export default function Sidebar({
  pathname,
  visible,
  onClose,
  user,
}: SidebarProps) {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        onClose();
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [onClose]);

  return (
    <>
      {visible && (
        <div
          className={clsx(
            "fixed inset-0 bg-black bg-opacity-50 z-40 xl:hidden"
          )}
          onClick={onClose}
        />
      )}
      <div
        className={clsx(
          "fixed top-0 right-0 p-[40px] w-[218px] md:w-[374px] h-full flex gap-[20px]  flex-col bg-white z-50 overflow-hidden transform transition-transform duration-300 xl:hidden",
          {
            "translate-x-0": visible,
            "translate-x-full": !visible,
          }
        )}
      >
        <div className="flex-grow flex flex-col justify-center gap-[20px]">
          <ul className="flex flex-col gap-[20px] items-center">
            <NavItem
              pathname="/news"
              current={pathname === "/news"}
              onClose={onClose}
            >
              News
            </NavItem>
            <NavItem
              pathname="/findpet"
              current={pathname === "/findpet"}
              onClose={onClose}
            >
              Find pet
            </NavItem>
            <NavItem
              pathname="/ourfriends"
              current={pathname === "/ourfriends"}
              onClose={onClose}
            >
              Our Friends
            </NavItem>
          </ul>
        </div>

        <div className="flex-shrink-0">
          {user ? (
            <div className="flex flex-col md:flex-row md:justify-center gap-[20px] md:gap-[10px]">
              <Button
                className="md:w-[120px]"
                onClick={async () => {
                  await signout();
                }}
              >
                LOG OUT
              </Button>
            </div>
          ) : (
            <ul className="flex flex-col md:flex-row md:justify-center gap-[20px] md:gap-[10px]">
              <NavItem pathname="signin" variant="yellow" onClose={onClose}>
                Login
              </NavItem>
              <NavItem
                pathname="signup"
                variant="yellowLight"
                onClose={onClose}
              >
                Register
              </NavItem>
            </ul>
          )}
        </div>

        <button
          onClick={onClose}
          className="absolute top-[39px] right-[32px] border border-transparent rounded-full transition-all hover:stroke-[#f6b83d] focus:stroke-[#f6b83d] stroke-black stroke-[3px]"
        >
          <CrossIcon className="h-[32px] w-[32px]" />
        </button>
      </div>
    </>
  );
}
