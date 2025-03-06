"use client";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { signout, User } from "@/app/auth/auth";
import Button from "@/shared/components/Button/Button";
import NavItem from "@/shared/components/NavItem/NavItem";
import Icon from "@/shared/components/Icon/Icon";
import MobileMenuBtn from "../MobileMenuBtn/MobileMenuBtn";
import { usePathname } from "next/navigation";

export interface MobileMenuProps {
  user?: User | null;
}

export default function MobileMenu({ user }: MobileMenuProps) {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const handleToggleVisible = () => {
    setVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        handleToggleVisible();
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <MobileMenuBtn visible={visible} onOpen={handleToggleVisible} />
      {visible && (
        <div
          className={clsx(
            "fixed inset-0 bg-black bg-opacity-50 z-40 xl:hidden"
          )}
          onClick={handleToggleVisible}
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
              onClose={handleToggleVisible}
            >
              News
            </NavItem>
            <NavItem
              pathname="/findpet"
              current={pathname === "/findpet"}
              onClose={handleToggleVisible}
            >
              Find pet
            </NavItem>
            <NavItem
              pathname="/ourfriends"
              current={pathname === "/ourfriends"}
              onClose={handleToggleVisible}
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
              <NavItem
                pathname="signin"
                variant="yellow"
                onClose={handleToggleVisible}
              >
                Login
              </NavItem>
              <NavItem
                pathname="signup"
                variant="yellowLight"
                onClose={handleToggleVisible}
              >
                Register
              </NavItem>
            </ul>
          )}
        </div>

        <button
          onClick={handleToggleVisible}
          className="absolute top-[39px] right-[32px] border border-transparent rounded-full transition-all hover:stroke-[#f6b83d] focus:stroke-[#f6b83d] stroke-black stroke-[3px]"
        >
          <Icon iconName="icon-cross-small" className="h-[32px] w-[32px]" />
        </button>
      </div>
    </>
  );
}
