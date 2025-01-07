import React from "react";

export interface SearchBtnFindpetProps {
  text: string;
}

export default function SearchBtnFindpet({ text }: SearchBtnFindpetProps) {
  return (
    <button className="rounded-[30px] p-[14px] bg-white text-[#262626] text-[16px] font-medium tracking-tight leading-tight">
      {text}
    </button>
  );
}
