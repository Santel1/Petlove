"use client";
import React, { useState } from "react";
import clsx from "clsx";
import Icon from "@/shared/components/Icon/Icon";

export interface SearchBarSelectProps {
  options: string[];
  placeholder: string;
  onSelect: (value: string) => void;
}

export default function SearchBarSelect({
  options,
  placeholder,
  onSelect,
}: SearchBarSelectProps) {
  const [selected, setSelected] = useState("");
  const [openMenu, setOpenMenu] = useState(false);

  const handleSelect = (value: string) => {
    setSelected(value);
    onSelect(value);
    setOpenMenu((prev) => !prev);
  };

  return (
    <div className="relative">
      <div
        className="bg-white p-[14px] rounded-[30px] fill-none stroke-black hover:stroke-[#f6b83d] cursor-pointer transition-all duration-300"
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        <p className="flex relative min-w-[190px]">
          <span
            className={clsx(
              "",
              selected !== ""
                ? "-translate-y-10 transition-all duration-300 absolute top-0 "
                : ""
            )}
          >
            {placeholder}
          </span>
          {selected}
        </p>
        {openMenu ? (
          <Icon
            iconName="icon-chevron-up"
            className={
              "absolute w-[30px] h-[30px] top-1/2 right-[10px] -translate-y-1/2"
            }
          />
        ) : (
          <Icon
            iconName="icon-chevron-down"
            className={
              "absolute w-[30px] h-[30px] top-1/2 right-[10px] -translate-y-1/2"
            }
          />
        )}
      </div>
      <div
        className={clsx(
          "absolute top-[60px] left-[0] bg-white p-[14px] rounded-[15px] w-full",
          openMenu ? "block" : "hidden"
        )}
      >
        <ul
          className={clsx(
            " bg-white w-full max-h-[216px] overflow-y-auto scroll-container flex flex-col gap-[8px]",
            openMenu ? "block" : "hidden"
          )}
        >
          {options.map((option, index) => (
            <li
              key={index}
              className="text-[#2b2b2b] hover:text-[#f6b83d] cursor-pointer transition-colors"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
