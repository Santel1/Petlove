import List from "@/app/components/list";
import OurfriendsItem from "@/app/components/our-friends-item";
import Image from "next/image";
import React from "react";

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <div className="px-[20px] pb-[20px] md:px-[32px] md:pb-[32px] lg:px-[64px]">
      <List>
        <OurfriendsItem
          src="/icons/friend.svg"
          alt="Company image"
          companyName="LKP`Lion`"
          email="Ikplev@gmail.com"
          adress="Promuslova Street,56"
          phone="(032) 293-30-41"
          workTime="Day and Night"
        />
        <OurfriendsItem
          src="/icons/friend.svg"
          alt="Company image"
          companyName="LKP`Lion`"
          email="Ikplev@gmail.com"
          adress="Promuslova Street,56"
          phone="(032) 293-30-41"
          workTime="Day and Night"
        />
        <OurfriendsItem
          src="/icons/friend.svg"
          alt="Company image"
          companyName="LKP`Lion`"
          email="Ikplev@gmail.com"
          adress="Promuslova Street,56"
          phone="(032) 293-30-41"
          workTime="Day and Night"
        />
        <OurfriendsItem
          src="/icons/friend.svg"
          alt="Company image"
          companyName="LKP`Lion`"
          email="Ikplev@gmail.com"
          adress="Promuslova Street,56"
          phone="(032) 293-30-41"
          workTime="Day and Night"
        />{" "}
        <OurfriendsItem
          src="/icons/friend.svg"
          alt="Company image"
          companyName="LKP`Lion`"
          email="Ikplev@gmail.com"
          adress="Promuslova Street,56"
          phone="(032) 293-30-41"
          workTime="Day and Night"
        />
      </List>
    </div>
  );
}
