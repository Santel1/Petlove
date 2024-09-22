import React from "react";

export interface ListProps {
  children: React.ReactNode;
}

export default function List({ children }: ListProps) {
  return (
    <ul className="grid gap-[24px] md:gap-y-[32px] lg:gap-[40px_35px] justify-self-center grid-cols-1 min-w-[280px] md:grid-cols-2 lg:grid-cols-3">
      {children}
    </ul>
  );
}
