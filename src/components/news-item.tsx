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
    <li className="flex flex-col max-w-[335px] md:max-w-[340px] xl:max-w-[361px] justify-self-center">
      <div className="relative overflow-hidden rounded-[30px] max-w-[335px] h-[190px] mb-[20px] md:mb-[28px] md:rounded-[15px] md:max-w-[340px] md:h-[226px] xl:max-w-[361px]">
        <Image className="object-cover" src={src} fill alt={alt} />
      </div>
      <p className="font-bold text-[16px] leading-tight tracking-tight text-[#262626] mb-[12px] md:text-[20px] md:mb-[14px]">
        {title}
      </p>
      <p className="font-medium text-[14px] leading-tight tracking-tight text-[#262626] mb-[19px] md:text-[16px] md:mb-[28px]">
        {description}
      </p>
      <div className="flex justify-between">
        <p className="font-medium text-[14px] leading-tight tracking-tight text-[#757575] md:text-[16px]">
          {date}
        </p>
        <button className="font-medium text-[14px] leading-tight tracking-tight text-[#f6b83d] underline md:text-[16px]">
          {buttonText}
        </button>
      </div>
    </li>
  );
}
