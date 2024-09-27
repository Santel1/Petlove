import Image from "next/image";
import React from "react";
import Title from "./title";

export interface SearchNewsInputProps {}

export default function SearchNewsInput({}: SearchNewsInputProps) {
  return (
    <div className="flex flex-col gap-[20px] mb-[24px] md:mb-[44px] xl:mb-[60px] w-full md:flex-row md:justify-between ">
      <Title>News</Title>
      <div className="relative">
        <input
          className="w-full border-[#757575] border-[1px] rounded-[30px] p-[12px] md:p-[14px]"
          placeholder="Search"
        />
        <button
          type="submit"
          className="absolute top-[50%] -translate-y-[50%] right-[15px]"
        >
          <Image
            src="/icons/search.svg"
            width={20}
            height={20}
            alt="Search button"
          />
        </button>
      </div>
    </div>
  );
}
