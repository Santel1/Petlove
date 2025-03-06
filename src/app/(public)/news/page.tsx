import React from "react";

import { Metadata } from "next";
import NewsPage from "@/modules/newsPage/components/NewsPage/NewsPage";
import { insideServerApi as api } from "@/shared/services";

export const metadata: Metadata = {
  title: "Petlove - News",
};

interface PageProps {}

export default async function Page({}: PageProps) {
  const news = await api.getNews();

  return (
    <>
      <NewsPage news={news.results} />
    </>
  );
}
