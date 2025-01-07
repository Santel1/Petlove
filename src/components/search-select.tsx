import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";
import ArrowUp from "../../public/icons/arrow-up.svg";
import ArrowDown from "../../public/icons/arrow-down.svg";

export interface SearchSelectProps {
  options: string[];
  placeholder: string;
  onSelect: (value: string) => void;
}

export default function SearchSelect({
  options,
  placeholder,
  onSelect,
}: SearchSelectProps) {
  const [selected, setSelected] = useState("");
  const [openMenu, setOpenMenu] = useState(false);

  // const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelected(e.target.value);
  //   onSelect(e.target.value);
  //   setOpenMenu((prev) => !prev);
  // };

  const handleSelect = (value: string) => {
    setSelected(value);
    onSelect(value);
    setOpenMenu((prev) => !prev);
  };

  return (
    // <div className="relative">
    //   <select
    //     value={selected || ""}
    //     onChange={handleChange}
    //     className="rounded-[30px] p-[14px]"
    //   >
    //     <option value="" disabled hidden>
    //       {placeholder}
    //     </option>
    //     {options.map((option, index) => (
    //       <option key={index} value={option}>
    //         {option}
    //       </option>
    //     ))}
    //   </select>
    //   <span className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-red-600">
    //     ▼
    //   </span>
    // </div>
    <div className="relative">
      <div
        className="bg-white p-[14px] rounded-[30px]  stroke-black hover:stroke-[#f6b83d] cursor-pointer transition-all duration-300 stroke-2"
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
          <ArrowUp
            className={
              "absolute w-[30px] top-1/2 right-[10px] -translate-y-1/2"
            }
          />
        ) : (
          <ArrowDown
            className={
              "absolute w-[30px] top-1/2 right-[10px] -translate-y-1/2"
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
