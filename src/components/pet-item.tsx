import React from "react";
import Heart from "../../public/icons/heart.svg";
import Image from "next/image";

export interface PetItemProps {
  imgURL: string;
  petTitle: string;
  petName: string;
  petBirthday: string;
  petSex: string;
  petSpecies: string;
  petCategory: string;
  petDescription: string;
  textButton?: string;
}

export default function PetItem({
  imgURL,
  petTitle,
  petName,
  petBirthday,
  petSex,
  petSpecies,
  petCategory,
  petDescription,
  textButton = "Learn more",
}: PetItemProps) {
  return (
    <li className="flex flex-col max-w-[335px]">
      <Image
        src={imgURL}
        width={365}
        height={190}
        alt={
          petSpecies.charAt(0).toUpperCase() +
          petSpecies.slice(1).toLowerCase() +
          " image"
        }
        className="mb-[24px]"
      />
      <div className="mb-[8px] flex justify-between">
        <p className="font-bold text-[16px] leading-tight text-[#2b2b2a]">
          {petTitle}
        </p>
        <button>STAR</button>
      </div>
      <ul className="flex gap-[14px] mb-[16px]">
        <li className="font-medium text-[10px] leading-snug tracking-tight text-[#757575]">
          Name
          <p className="text-[12px] leading-tight tracking-tight text-[#262626]">
            {petName}
          </p>
        </li>
        <li className="font-medium text-[10px] leading-snug tracking-tight text-[#757575]">
          Birthday
          <p className="text-[12px] leading-tight tracking-tight text-[#262626]">
            {petBirthday}
          </p>
        </li>
        <li className="font-medium text-[10px] leading-snug tracking-tight text-[#757575]">
          Sex
          <p className="text-[12px] leading-tight tracking-tight text-[#262626]">
            {petSex}
          </p>
        </li>
        <li className="font-medium text-[10px] leading-snug tracking-tight text-[#757575]">
          Species
          <p className="text-[12px] leading-tight tracking-tight text-[#262626]">
            {petSpecies}
          </p>
        </li>
        <li className="font-medium text-[10px] leading-snug tracking-tight text-[#757575]">
          Category
          <p className="text-[12px] leading-tight tracking-tight text-[#262626]">
            {petCategory}
          </p>
        </li>
      </ul>
      <p className="mb-[24px] font-medium text-[14px] leading-tight tracking-tight text-[ #2b2b2a]">
        {petDescription}
      </p>
      <div className="flex gap-[10px] flex-1 items-end">
        <button
          className="rounded-[30px] p-[14px] bg-[#f6b83d] font-medium text-[14px] leading-tight tracking-tight text-white flex-1
            "
        >
          {textButton}
        </button>
        <button className="rounded-full bg-[#fff4df] p-[14px] fill-none stroke-[#f6b83d] hover:fill-[#f6b83d] transition-all">
          <Heart className="w-[18px] h-[18px] " />
        </button>
      </div>
    </li>
  );
}
