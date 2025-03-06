import React from "react";

export interface SearchBarButtonProps {
  text: string;
}

export default function SearchBarButton({ text }: SearchBarButtonProps) {
  return (
    <button className="rounded-[30px] p-[14px] bg-white text-[#262626] text-[16px] font-medium tracking-tight leading-tight">
      {text}
    </button>
  );
}
