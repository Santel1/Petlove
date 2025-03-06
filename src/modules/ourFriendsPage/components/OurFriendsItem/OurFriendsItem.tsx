import Image from "next/image";
import React from "react";

export interface OurFriendsItemProps {
  src: string;
  alt: string;
  companyName: string;
  email: string;
  adress: string;
  phone: string;
  workTime: {
    _id: string;
    isOpen: boolean;
    from?: string;
    to?: string;
  }[];
}

export default function OurFriendsItem({
  src,
  alt,
  companyName,
  email,
  adress,
  phone,
  workTime,
}: OurFriendsItemProps) {
  const currentDay = new Date().getDay();

  return (
    <li className="relative w-full max-w-[335px] md:max-w-[350px] xl:max-w-[371px] flex gap-[14px] md:gap-[16px] xl:gap-[20px] p-[40px_20px]  bg-white rounded-[15px] justify-self-center items-center ">
      <Image
        src={src}
        width={80}
        height={80}
        alt={alt}
        className="md:w-[90px]"
      />
      <div className="flex flex-col gap-[14px] max-w-[196px]">
        <p className="font-bold text-[16px] leading-tight tracking-tighter text-[#262626] md:text-[20px] xl:mb-[12px]">
          {companyName}
        </p>
        <div className="flex flex-col gap-[8px]">
          <p className="font-medium text-[14px] leading-tight tracking-tight text-[#757575]">
            Email:
            {email ? (
              <a href={`mailto:${email}`} className="text-[#262626]">
                {email}
              </a>
            ) : (
              <a
                href={`mailto:${companyName.toLowerCase()}@gmail.com`}
                className="text-[#262626]"
              >
                {companyName.toLowerCase()}@gmail.com
              </a>
            )}
          </p>
          <p className="flex font-medium text-[14px] leading-tight tracking-tight text-[#757575]">
            Adress:
            {adress ? (
              <span className="text-[#262626] block overflow-hidden text-ellipsis whitespace-nowrap ">
                {adress}
              </span>
            ) : (
              <span className="text-[#262626]">Website only</span>
            )}
          </p>
          <p className="font-medium text-[14px] leading-tight tracking-tight text-[#757575]">
            Phone:
            {phone ? (
              <a href={`tel:${phone}`} className="text-[#262626]">
                {phone}
              </a>
            ) : (
              <span className="text-[#262626]">Email only</span>
            )}
          </p>
        </div>
      </div>
      {workTime ? (
        workTime.map(({ _id, isOpen, from, to }, index) => (
          <div key={_id}>
            {index === currentDay ? (
              isOpen ? (
                <p className="absolute rounded-[30px] p-[8px] font-medium text-[12px] leading-snug tracking-wide text-[#f6b83d] bg-[#fff4df] top-[12px] right-[12px]">
                  {from}&nbsp;{to}
                </p>
              ) : (
                <p className="absolute rounded-[30px] p-[8px] font-medium text-[12px] leading-snug tracking-wide text-red-600 bg-[#fff4df] top-[12px] right-[12px]">
                  Closed
                </p>
              )
            ) : null}
          </div>
        ))
      ) : (
        <p className="absolute rounded-[30px] p-[8px] font-medium text-[12px] leading-snug tracking-wide text-[#f6b83d] bg-[#fff4df] top-[12px] right-[12px]">
          Day and night
        </p>
      )}
    </li>
  );
}
