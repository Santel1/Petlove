"use client";
import React, { useEffect, useState } from "react";

import { NewsResults } from "@/lib/api";
import NewsItem from "../NewsItem/NewsItem";
import List from "@/shared/components/List/List";
import Container from "@/shared/components/Container/Container";
import SearchNewsInput from "../SearchNewsInput/SearchNewsInput";

interface NewsPageProps {
  news: NewsResults[];
}

export default function NewsPage({ news }: NewsPageProps) {
  // const [news, setNews] = useState<NewsResults[]>([]);
  // const [page, setPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   // setLoading(true);
  //   getNews(page)
  //     .then((response) => {
  //       setNews(response.results);
  //       setTotalPages(response.totalPages);
  //       // setLoading(false);
  //       console.log(page);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       // setLoading(false);
  //     });
  // }, [page]);

  // const goToNextPage = () => setPage((prev) => Math.min(prev + 1, totalPages));
  // const goToPreviousPage = () => setPage((prev) => Math.max(prev - 1, 1));
  // const goToFirstPage = () => setPage(1);
  // const goToLastPage = () => setPage(totalPages);

  // const goToNumberPage = (pageNumber: number) => {
  //   getNews(pageNumber);
  //   setPage(pageNumber);
  // };

  return (
    <section>
      <Container>
        {news && (
          <>
            <SearchNewsInput />
            <div className="flex flex-col items-center">
              <List className="mb-[44px]">
                {news.map((newsItem) => (
                  <NewsItem
                    key={newsItem._id}
                    src={newsItem.imgUrl}
                    alt={newsItem.title || "News image"}
                    title={newsItem.title}
                    description={newsItem.text}
                    date={new Date(newsItem.date).toLocaleDateString()}
                    buttonText={"Read more"}
                  />
                ))}
              </List>
            </div>
          </>
        )}
      </Container>
    </section>
  );
}
