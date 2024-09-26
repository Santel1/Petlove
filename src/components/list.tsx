import React from "react";

export interface ListProps {
  children: React.ReactNode;
}

export default function List({ children }: ListProps) {
  return (
    <ul className="grid gap-[24px] md:grid-cols-2 md:gap-y-[32px] md:max-w-[] xl:grid-cols-3 xl:gap-[28px_20px] xl:max-w-[1153px]">
      {children}
    </ul>
  );
}

// <ul className="grid gap-[24px] md:gap-y-[32px] xl:gap-[40px_35px] justify-self-center grid-cols-1 min-w-[280px] md:grid-cols-2 xl:grid-cols-3">
//   {children}
// </ul>
