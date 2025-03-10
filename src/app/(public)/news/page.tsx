import React from "react";

import { Metadata } from "next";
import NewsPage from "@/modules/newsPage/components/NewsPage/NewsPage";
import { petsApi as api } from "@/shared/services";
import Pagination from "@/shared/components/Pagination/Pagination";
import { ROUTES } from "@/shared/constants";

export const metadata: Metadata = {
  title: "Petlove - News",
};

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Page({ searchParams }: PageProps) {
  const page = searchParams["page"] ?? 1;
  const news = await api.getNews(Number(page));
  // console.log(page);
  return (
    <>
      <NewsPage news={news.results} />
      <Pagination
        page={page}
        route={ROUTES.NEWS}
        // perPage={news.perPage}
        totalPages={news.totalPages}
      />
    </>
  );
}
