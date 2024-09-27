import News from "@/components/news";
import SearchNewsInput from "@/components/searchNewsInput";
import React from "react";

export interface PageProps {}

export const metadata = {
  title: "Petlove - News",
};

export default function Page({}: PageProps) {
  return (
    <>
      <SearchNewsInput />
      <News />
    </>
  );
}
