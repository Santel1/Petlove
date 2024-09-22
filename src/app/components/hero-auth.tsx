import Image from "next/image";
import React from "react";

export interface HeroAuthProps {
  imageUrl: string;
  imageAlt: string;
  name: string;
  birthday: string;
  description: string;
  emoji: string;
}

export default function HeroAuth({
  imageUrl,
  imageAlt,
  name,
  birthday,
  description,
  emoji,
}: HeroAuthProps) {
  return (
    <div
      className="bg-[#f6b83d] flex justify-center rounded-[34px] md:rounded-[60px] h-[280px] md:h-[302px] flex-wrap md:items-center overflow-hidden relative bg-[url('/images/rectangle.png')] bg-no-repeat
    bg-[length:80%_auto] 
    md:bg-[length:80%_auto]
    bg-[position:center_30px]
    lg:items-end
    lg:bg-[position:center_30px]
    lg:bg-[length:90%_100%]
    lg:h-full lg:flex-1"
    >
      <div className="hidden md:grid grid-flow-col gap-[8px] w-[294px] bg-white rounded-[20px] p-[16px] z-20 lg:absolute lg:left-[61px] lg:bottom-[97px]">
        <div className="w-[60px] h-[60px] items-center flex justify-center rounded-full bg-[#FFF4DF]">
          <p className="text-[32px] overflow-hidden leading-none">{emoji}</p>
        </div>
        <div className="flex flex-col gap-[8px]">
          <div className="flex items-center justify-between">
            <p className="font-[700] text-[16px] leading-tight text-[#f6b83d]">
              {name}
            </p>
            <p className=" font-[500] text-[12px] leading-[1.17] text-[#757575] tracking-tight">
              Birthday:&nbsp;
              <span className="text-[#262626]">{birthday}</span>
            </p>
          </div>
          <p className="font-[500] text-[12px] leading-[1.17] tracking-tight text-gray-800">
            {description}
          </p>
        </div>
      </div>
      <Image
        width={335}
        height={280}
        className="lg:w-[520px]"
        unoptimized
        src={imageUrl}
        alt={imageAlt}
      />
    </div>
  );
}
