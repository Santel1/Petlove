"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Icon from "@/shared/components/Icon/Icon";
import { petsApi as api } from "@/shared/services";
import { User } from "@/app/auth/auth";
import clsx from "clsx";

export interface FindPetItemProps {
  user: User | null;
  token: string | null;
  id: string;
  imgURL: string;
  petTitle: string;
  petName: string;
  petBirthday: string;
  petSex: string;
  petSpecies: string;
  petCategory: string;
  petDescription: string;
  popularity: string;
  textButton?: string;
}

export default function FindPetItem({
  user,
  token,
  id,
  imgURL,
  petTitle,
  petName,
  petBirthday,
  petSex,
  petSpecies,
  petCategory,
  petDescription,
  popularity,
  textButton = "Learn more",
}: FindPetItemProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (user) {
      setIsFavorite(user.noticesFavorites.some((pet) => pet._id === id));
    }
  }, [user, id]);

  const handleToggleFavorite = async () => {
    if (!user || !token) {
      alert("Пожалуйста, войдите в аккаунт!");
      return;
    }
    if (isFavorite) {
      await api.removePetFromFavorites(id, token);
      setIsFavorite(false);
    } else {
      await api.addPetToFavorites(id, token);
      setIsFavorite(true);
    }
  };

  return (
    <li className="flex flex-col max-w-[335px] p-[24px] bg-white rounded-[16px]">
      <h1 className="text-9xl"></h1>
      <Image
        src={imgURL}
        width={365}
        height={190}
        alt={
          petSpecies.charAt(0).toUpperCase() +
          petSpecies.slice(1).toLowerCase() +
          " image"
        }
        className="mb-[24px] max-h-[178px] object-cover w-full rounded-[16px] max-w-[287px] md:max-h-[226px] md:mb-[28px] md:rounded-[15px] md:max-w-[342px] md:h-[226px] xl:max-w-[361px]"
      />
      <div className="mb-[8px] flex justify-between">
        <p className="font-bold text-[16px] leading-tight text-[#2b2b2a]">
          {petTitle}
        </p>
        <div className="flex gap-[1px]">
          <Icon
            iconName="icon-star"
            width={16}
            height={16}
            className="fill-[#f6b83d]"
          />
          <p className="text-[14px] leading-tight font-medium text-[#2b2b2a]">
            {popularity}
          </p>
        </div>
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
        <button
          onClick={handleToggleFavorite}
          className="rounded-full bg-[#fff4df] p-[14px] fill-transparent stroke-[#f6b83d] hover:fill-[#f6b83d] transition-colors duration-300"
        >
          <Icon
            iconName="icon-heart"
            className={clsx(
              "w-[18px] h-[18px] transition-all duration-300",
              isFavorite && "fill-[#f6b83d] transform scale-[1.2]"
            )}
          />
        </button>
      </div>
    </li>
  );
}
