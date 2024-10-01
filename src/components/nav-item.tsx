import clsx from "clsx";
import Link from "next/link";
import React from "react";

export interface NavItemProps {
  variant?: "gray" | "yellow" | "yellowLight";
  current?: boolean;
  pathname: string;
  children: React.ReactNode;
  onClose?: () => void;
}

export default function NavItem({
  variant = "gray",
  current,
  pathname,
  children,
  onClose,
}: NavItemProps) {
  const variantStyles = {
    gray: "w-[120px] xl:w-auto p-[15px] xl:p-[15px_20px] border border-[#757575] rounded-[30px] font-medium text-[14px] tracking-tight leading-[1.29] text-center focus:border-[#f6b83d] hover:border-[#f6b83d]",
    yellow:
      "p-[12px] md:w-[119px] xl:p-[15px_35px] rounded-[30px] font-[700] text-[14px] tracking-tight leading-[1.29] bg-[#f6b83d] text-white uppercase text-center focus:bg-[#f9b020] hover:bg-[#f9b020]",
    yellowLight:
      "p-[12px] md:w-[149px] xl:p-[15px_20px] rounded-[30px] font-[700] text-[14px] tracking-tight leading-[1.29] bg-[#fff4df] text-[#f6b83d] uppercase text-center focus:bg-[#fbe7c1] hover:bg-[#fbe7c1]",
  };

  return (
    <li>
      <Link
        href={pathname}
        className={clsx(
          variantStyles[variant],
          current && "border-[#f6b83d]",
          "flex flex-col gap-2px transition-all"
        )}
        onClick={onClose}
      >
        {children}
      </Link>
    </li>
  );
}
