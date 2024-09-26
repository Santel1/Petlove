import List from "@/components/list";
import Image from "next/image";
import React from "react";

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <div>
      <List>
        <li className="p-[24px] max-w-[335px] justify-self-center">
          <div className="mb-[24px]">
            <Image src={""} width={365} height={190} alt="" />
          </div>
          <div className="mb-[8px] flex justify-between">
            <p className="font-bold text-[16px] leading-tight text-[#2b2b2a]">
              Found Red-Eared Slider
            </p>
            <button>
              <Image src={""} width={20} height={20} alt="" />2
            </button>
          </div>
          <ul className="flex gap-[14px] mb-[16px]">
            <li className="font-medium text-[10px] leading-snug tracking-tight text-[#757575]">
              Name
              <p className="text-[12px] leading-tight tracking-tight text-[#262626]">
                Shelly
              </p>
            </li>
            <li className="font-medium text-[10px] leading-snug tracking-tight text-[#757575]">
              Birthday
              <p className="text-[12px] leading-tight tracking-tight text-[#262626]">
                12.08.2019
              </p>
            </li>
            <li className="font-medium text-[10px] leading-snug tracking-tight text-[#757575]">
              Sex
              <p className="text-[12px] leading-tight tracking-tight text-[#262626]">
                Unknown
              </p>
            </li>
            <li className="font-medium text-[10px] leading-snug tracking-tight text-[#757575]">
              Species
              <p className="text-[12px] leading-tight tracking-tight text-[#262626]">
                Turtle
              </p>
            </li>
            <li className="font-medium text-[10px] leading-snug tracking-tight text-[#757575]">
              Category
              <p className="text-[12px] leading-tight tracking-tight text-[#262626]">
                Found
              </p>
            </li>
          </ul>
          <p className="mb-[24px] font-medium text-[14px] leading-tight tracking-tight text-[ #2b2b2a]">
            Found this turtle near the pond. Contact if yours.
          </p>
          <div className="flex gap-[10px]">
            <button
              className="rounded-[30px] p-[14px] bg-[#f6b83d] font-medium text-[14px] leading-tight tracking-tight text-white flex-1
            "
            >
              Learn more
            </button>
            <button className="rounded-full bg-[#fff4df] p-[14px]">
              SS{/* <Image src={""} width={0} height={0} alt="" /> */}
            </button>
          </div>
        </li>
      </List>
    </div>
  );
}
