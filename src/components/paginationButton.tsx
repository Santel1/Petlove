import clsx from "clsx";
import React from "react";

export interface PaginationButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function PaginationButton({
  onClick,
  disabled,
  className,
  children,
}: PaginationButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "rounded-full p-[12px] border-[1px] w-[40px] h-[40px] md:w-[44px] md:h-[44px] flex items-center justify-center font-[700] text-[18px] leading-tight text-[#262626] fill-[#262626]",
        {
          "hover:bg-[#f6b83d] hover:text-white hover:fill-white transition-all":
            !disabled,
          "fill-gray-600": disabled,
        },
        className
      )}
    >
      {children}
    </button>
  );
}
