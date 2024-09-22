import Image from "next/image";
import React from "react";

export interface OurfriendsItemProps {
  src: string;
  alt: string;
  companyName: string;
  email: string;
  adress: string;
  phone: string;
  workTime: string;
}

export default function OurfriendsItem({
  src,
  alt,
  companyName,
  email,
  adress,
  phone,
  workTime,
}: OurfriendsItemProps) {
  return (
    <li className="relative w-full p-[40px_20px] max-w-[335px] md:max-w-[342px] lg:max-w-[371px] flex gap-[14px] bg-white rounded-[15px] justify-self-center items-center">
      <div className="relative flex rounded-full overflow-hidden w-[80px] h-[80px] md:w-[90px] md:h-[90px]">
        <Image src={src} fill alt={alt} />
      </div>
      <div>
        <p className="mb-[14px] font-bold text-[16px] leading-tight tracking-tighter text-[#262626] md:text-[20px] lg:mb-[20px]">
          {companyName}
        </p>
        <div className="flex flex-col gap-[8px]">
          <p className="font-medium text-[14px] leading-tight tracking-tight text-[#757575]">
            Email:<span className="text-[#262626]">{email}</span>
          </p>
          <p className="font-medium text-[14px] leading-tight tracking-tight text-[#757575]">
            Adress:
            <span className="text-[#262626]">{adress}</span>
          </p>
          <p className="font-medium text-[14px] leading-tight tracking-tight text-[#757575]">
            Phone:<span className="text-[#262626]">{phone}</span>
          </p>
        </div>
      </div>
      <p className="absolute rounded-[30px] p-[8px] font-medium text-[12px] leading-snug tracking-wide text-[#f6b83d] bg-[#fff4df] top-[12px] right-[12px]">
        {workTime}
      </p>
    </li>
  );
}
