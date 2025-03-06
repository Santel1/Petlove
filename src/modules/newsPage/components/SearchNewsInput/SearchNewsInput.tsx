import React from "react";
import Icon from "@/shared/components/Icon/Icon";
import Title from "@/shared/components/Title/Title";

export interface SearchNewsInputProps {}

export default function SearchNewsInput({}: SearchNewsInputProps) {
  return (
    <div className="flex flex-col gap-[20px] mb-[24px] md:mb-[44px] xl:mb-[60px] w-full md:flex-row md:justify-between ">
      <Title>News</Title>
      <div className="relative">
        <input
          className="w-full border-[#757575] border-[1px] rounded-[30px] p-[12px] md:p-[14px] outline-none"
          placeholder="Search"
        />
        <button
          type="submit"
          className="absolute top-[50%] -translate-y-[50%] right-[15px] fill-none stroke-black hover:stroke-[#f6b83d] cursor-pointer transition-all duration-300"
        >
          <Icon iconName="icon-search" width={20} height={20} />
        </button>
      </div>
    </div>
  );
}
