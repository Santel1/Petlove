import List from "@/components/list";
import NewsItem from "@/components/news-item";
import Title from "@/components/title";
import Image from "next/image";
import React from "react";

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <div className="px-[20px] pb-[20px] md:px-[32px] md:pb-[32px] xl:px-[64px]">
      <div className="flex flex-col gap-[20px] mb-[24px] md:mb-[44px] xl:mb-[60px] w-full md:flex-row md:justify-between ">
        <Title>News</Title>
        <div className="relative">
          <input
            className="w-full border-[#757575] border-[1px] rounded-[30px] p-[12px] md:p-[14px]"
            placeholder="Search"
          />
          <button
            type="submit"
            className="absolute top-[50%] -translate-y-[50%] right-[15px]"
          >
            <Image
              src="/icons/search.svg"
              width={20}
              height={20}
              alt="Search button"
            />
          </button>
        </div>
      </div>
      <List>
        <NewsItem
          src={"/images/imageitem.png"}
          alt={"News image"}
          title={"On Pets, Moral Logic and Love"}
          description={
            "In January, I fell in love with someone.It was the last thing I'd expect and caught me completely off guard. He has sandy blond hair with flecks of gray and gorgeous, sad eyes."
          }
          date={"15/03/2023"}
          buttonText={"Read more"}
        />
        <NewsItem
          src={"/images/imageitem.png"}
          alt={"News image"}
          title={"On Pets, Moral Logic and Love"}
          description={
            "In January, I fell in love with someone.It was the last thing I'd expect and caught me completely off guard. He has sandy blond hair with flecks of gray and gorgeous, sad eyes."
          }
          date={"15/03/2023"}
          buttonText={"Read more"}
        />
        <NewsItem
          src={"/images/imageitem.png"}
          alt={"News image"}
          title={"On Pets, Moral Logic and Love"}
          description={
            "In January, I fell in love with someone.It was the last thing I'd expect and caught me completely off guard. He has sandy blond hair with flecks of gray and gorgeous, sad eyes."
          }
          date={"15/03/2023"}
          buttonText={"Read more"}
        />
        <NewsItem
          src={"/images/imageitem.png"}
          alt={"News image"}
          title={"On Pets, Moral Logic and Love"}
          description={
            "In January, I fell in love with someone.It was the last thing I'd expect and caught me completely off guard. He has sandy blond hair with flecks of gray and gorgeous, sad eyes."
          }
          date={"15/03/2023"}
          buttonText={"Read more"}
        />
      </List>
    </div>
  );
}
