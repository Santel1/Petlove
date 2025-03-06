import React from "react";
import Icon from "@/shared/components/Icon/Icon";

export interface SearchBarInputProps {
  placeholder?: string;
}

export default function SearchBarInput({ placeholder }: SearchBarInputProps) {
  return (
    <div className="relative">
      <input
        type="text"
        name=""
        id=""
        className="rounded-[30px] p-[14px] outline-none"
        placeholder={placeholder}
      />
      <button
        type="submit"
        className="absolute top-[50%] -translate-y-[50%] right-[15px] fill-none stroke-black hover:stroke-[#f6b83d] cursor-pointer transition-all duration-300"
      >
        <Icon iconName="icon-search" width={20} height={20} />
      </button>
    </div>
  );
}
