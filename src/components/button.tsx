"use client";
import clsx from "clsx";
import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "yellow" | "yellowLight" | "gray" | "white" | "transparent";
  onClick?: () => void;
  disabled?: boolean;
  className?: string; // Дополнительные стили
}

export default function Button({
  variant = "yellow",
  onClick,
  disabled = false,
  children,
  className,
}: ButtonProps) {
  const baseStyles =
    "rounded-[30px] p-[12px] md:p-[16px] text-[14px] md:text-[16px] font-[700] leading-tight tracking-tight mb-[12px] md:mb-[16px] transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    yellow: "bg-[#f6b83d] text-white",
    yellowLight: "bg-[#fff4df] text-[#f6b83d]",
    gray: "bg-[#757575] text-black",
    white: "bg-white text-black",
    transparent:
      "bborder-solid border-[1px] border-[#757575] bg-transparent text-black",
  };

  return (
    <button
      className={clsx(baseStyles, variantStyles[variant], className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
