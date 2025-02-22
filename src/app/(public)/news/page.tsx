import News from "@/components/news";
import SearchNewsInput from "@/components/search-news-input";
import { Metadata } from "next";
import React from "react";

export interface PageProps {}

export const metadata: Metadata = {
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
