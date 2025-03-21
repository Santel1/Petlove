import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface NotFoundProps {}

export default function NotFound({}: NotFoundProps) {
  return (
    <div className="min-h-[calc(100vh-110px)] min-w-[320px] pt-[32px] pr-[20px] pl-[20px] pb-[20px] flex flex-col md:p-[32px]">
      <div className="bg-[#f6b83d] rounded-[34px] flex flex-col items-center justify-center flex-grow p-[32px] md:rounded-[60px]">
        <div className="flex justify-center items-center gap-[8px] md:gap-0">
          <p className="text-[120px] font-[800] text-white md:text-[300px]">
            4
          </p>
          <Image
            width={109}
            height={109}
            unoptimized
            className="md:w-[280px] xl:w-[300px]"
            src="/images/IMG_404.png"
            alt="404 image"
          />
          <p className="text-[120px] font-[800] text-white md:text-[300px]">
            4
          </p>
        </div>
        <p className="text-[16px] font-[700] text-white text-center md:text-[24px]">
          Ooops! This page not found :(
        </p>
        <Link href={"/"}>
          <button className="bg-[#fff4df] rounded-[30px] py-[12px] px-[30px] text-[#f6b83d] text-[14px] font-[700] mt-[20px] md:text-[16px]">
            To home page
          </button>
        </Link>
      </div>
    </div>
  );
}
