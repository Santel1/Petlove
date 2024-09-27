import React from "react";

export interface ListProps {
  children: React.ReactNode;
}

export default function List({ children }: ListProps) {
  return (
    <ul className="grid gap-[24px] md:grid-cols-2 md:gap-y-[32px] xl:grid-cols-3 xl:gap-[28px_20px]">
      {children}
    </ul>
  );
}
