import React, { Children } from "react";

export interface TitleProps {
  children: string;
}

export default function Title({ children }: TitleProps) {
  return (
    <h1 className="font-bold text-[28px] md:text-[54px] leading-none tracking-tight text-[#262626]">
      {children}
    </h1>
  );
}
