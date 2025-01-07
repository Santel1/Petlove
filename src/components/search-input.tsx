import Image from "next/image";
import React from "react";

export interface SearchInputProps {
  placeholder?: string;
}

export default function SearchInput({ placeholder }: SearchInputProps) {
  return (
    <div className="relative">
      <input
        type="text"
        name=""
        id=""
        className="rounded-[30px] p-[14px]"
        placeholder={placeholder}
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
  );
}
