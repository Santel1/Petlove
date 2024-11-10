"use client";
import React, { useEffect, useState } from "react";
import List from "./list";
import NewsItem from "./news-item";
import { getNews, NewsResults } from "@/lib/api";
import PaginationButton from "./pagination-button";
import ArrowDoubleLeft from "../../public/icons/arrow-left-2.svg";
import ArrowDoubleRight from "../../public/icons/arrow-right-2.svg";
import ArrowRight from "../../public/icons/arrow-right.svg";
import ArrowLeft from "../../public/icons/arrow-left.svg";
import clsx from "clsx";
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
        console.log(page);
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

  const goToNumberPage = (pageNumber: number) => {
    getNews(pageNumber);
    setPage(pageNumber);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className=" flex flex-col items-center">
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

      <div className="flex justify-center gap-[6px]">
        <PaginationButton onClick={goToFirstPage} disabled={page === 1}>
          <ArrowDoubleLeft />
        </PaginationButton>
        <PaginationButton onClick={goToPreviousPage} disabled={page === 1}>
          <ArrowLeft />
        </PaginationButton>
        {Array.from({ length: 3 }, (_, i) => {
          let pageNumber;

          if (page === 1) {
            pageNumber = i + 1;
          } else if (page === totalPages) {
            pageNumber = totalPages - (2 - i);
          } else {
            pageNumber = page - 1 + i;
          }
          return (
            <PaginationButton
              key={i}
              onClick={() => goToNumberPage(pageNumber)}
              disabled={page === pageNumber}
              className={clsx({
                "bg-[#f6b83d] text-white": page === pageNumber,
              })}
            >
              {`${pageNumber}`}
            </PaginationButton>
          );
        })}
        <PaginationButton onClick={goToNextPage} disabled={page === totalPages}>
          <ArrowRight />
        </PaginationButton>
        <PaginationButton onClick={goToLastPage} disabled={page === totalPages}>
          <ArrowDoubleRight />
        </PaginationButton>
      </div>
    </div>
  );
}
