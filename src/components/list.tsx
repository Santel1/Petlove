import clsx from "clsx";
import React from "react";

export interface ListProps {
  children: React.ReactNode;
  className?: string;
}

export default function List({ children, className }: ListProps) {
  return (
    <ul
      className={clsx(
        "grid gap-[24px] md:grid-cols-2 md:gap-y-[32px] xl:grid-cols-3 xl:gap-[28px_20px]",
        className
      )}
    >
      {children}
    </ul>
  );
}
