import React from "react";

import clsx from "clsx";
import PaginationButton from "./PaginationButton/PaginationButton";
import Icon from "../Icon/Icon";
import Container from "../Container/Container";

export interface PaginationProps {
  page: string[] | string | number;
  totalPages: number;
  route?: string;
}

export default function Pagination({
  page,
  totalPages,
  route,
}: PaginationProps) {
  return (
    <Container>
      <div className="flex justify-center gap-[6px]">
        <PaginationButton
          href={`/${route}?page=1`}
          disabled={Number(page) === 1}
        >
          <Icon iconName="icon-arrow-left-2" width={18} height={18} />
        </PaginationButton>
        <PaginationButton
          href={`/${route}?page=${Number(page) - 1}`}
          disabled={Number(page) === 1}
        >
          <Icon iconName="icon-arrow-left" width={18} height={18} />
        </PaginationButton>
        {Array.from({ length: 3 }, (_, i) => {
          let pageNumber;

          if (Number(page) === 1) {
            pageNumber = i + 1;
          } else if (Number(page) === totalPages) {
            pageNumber = totalPages - (2 - i);
          } else {
            pageNumber = Number(page) - 1 + i;
          }
          return (
            <PaginationButton
              key={i}
              href={`/${route}?page=${pageNumber}`}
              disabled={Number(page) === pageNumber}
              className={clsx({
                "bg-[#f6b83d] text-white": Number(page) === pageNumber,
              })}
            >
              {`${pageNumber}`}
            </PaginationButton>
          );
        })}
        <PaginationButton
          href={`/${route}?page=${Number(page) + 1}`}
          disabled={Number(page) === totalPages}
        >
          <Icon iconName="icon-arrow-right" width={18} height={18} />
        </PaginationButton>
        <PaginationButton
          href={`/${route}?page=${totalPages}`}
          disabled={Number(page) === totalPages}
        >
          <Icon iconName="icon-arrow-right-2" width={18} height={18} />
        </PaginationButton>
      </div>
    </Container>
  );
}
