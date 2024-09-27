"use client";
import React, { useEffect, useState } from "react";
import List from "./list";
import NewsItem from "./news-item";
import { getNews, NewsResults } from "@/lib/api";

export interface NewsProps {}

export default function News({}: NewsProps) {
  const [news, setNews] = useState<NewsResults[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getNews(page)
      .then((response) => {
        setNews(response.results);
        setTotalPages(response.totalPages);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [page]);

  const goToNextPage = () => setPage((prev) => Math.min(prev + 1, totalPages));
  const goToPreviousPage = () => setPage((prev) => Math.max(prev - 1, 1));
  const goToFirstPage = () => setPage(1);
  const goToLastPage = () => setPage(totalPages);

  if (loading) return <p>Loading...</p>;

  return (
    <div className=" flex flex-col items-center">
      <List>
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

      <div className="flex justify-center mt-[44px] gap-[6px]">
        <button
          onClick={goToFirstPage}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded-l"
        >
          ««
        </button>
        <button
          onClick={goToPreviousPage}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200"
        >
          «
        </button>

        <span className="px-4 py-2 bg-gray-200">{page}</span>

        <button
          onClick={goToNextPage}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-200"
        >
          »
        </button>
        <button
          onClick={goToLastPage}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-200 rounded-r"
        >
          »»
        </button>
      </div>
    </div>
  );
}
