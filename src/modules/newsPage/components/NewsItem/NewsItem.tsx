import Image from "next/image";
import React from "react";

export interface NewsItemProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  date: string;
  buttonText: string;
}

export default function NewsItem({
  src,
  alt,
  title,
  description,
  date,
  buttonText,
}: NewsItemProps) {
  return (
    <li className="flex flex-col max-w-[335px] md:max-w-[342px] xl:max-w-[361px]">
      <Image
        className="relative max-h-[190px] object-cover w-full rounded-[30px] max-w-[335px] mb-[20px] md:max-h-[226px] md:mb-[28px] md:rounded-[15px] md:max-w-[342px] md:h-[226px] xl:max-w-[361px]"
        src={src}
        width={335}
        height={190}
        alt={alt}
      />
      <div className="flex flex-col gap-[12px] md:gap-[14px] mb-[19px] md:mb-[28px]">
        <p className="font-bold text-[16px] leading-tight tracking-tight text-[#262626] md:text-[20px]">
          {title}
        </p>
        <p className="font-medium text-[14px] leading-tight tracking-tight text-[#262626] md:text-[16px]">
          {description}
        </p>
      </div>
      <div className="flex justify-between flex-1 items-end">
        <p className="font-medium text-[14px] leading-tight tracking-tight text-[#757575] md:text-[16px]">
          {date}
        </p>
        <button className="font-medium text-[14px] leading-tight tracking-tight text-[#f6b83d] underline md:text-[16px] hover:bg-[#fbe7c1] transition-all">
          {buttonText}
        </button>
      </div>
    </li>
  );
}
