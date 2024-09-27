import React, { Children } from "react";

export interface TitleProps {
  children: string;
  className?: string;
}

export default function Title({ children, className }: TitleProps) {
  return (
    <h1
      className={`font-bold text-[28px] md:text-[54px] leading-none tracking-tight text-[#262626] ${className}`}
    >
      {children}
    </h1>
  );
}
