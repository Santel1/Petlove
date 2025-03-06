import React from "react";

import clsx from "clsx";
import PaginationButton from "./PaginationButton/PaginationButton";
import Icon from "../Icon/Icon";

export interface PaginationProps {
  page?: any;
  pageNumber?: any;
  goToFirstPage?: any;
  goToPreviousPage?: any;
  totalPages?: any;
  goToNextPage?: any;
  goToLastPage?: any;
}

export default function Pagination({
  page,
  pageNumber,
  goToFirstPage,
  goToPreviousPage,
  totalPages,
  goToNextPage,
  goToLastPage,
}: PaginationProps) {
  return (
    <div className="flex justify-center gap-[6px]">
      <PaginationButton onClick={goToFirstPage} disabled={page === 1}>
        <Icon iconName="icon-arrow-left-2" width={18} height={18} />
      </PaginationButton>
      <PaginationButton onClick={goToPreviousPage} disabled={page === 1}>
        <Icon iconName="icon-arrow-left" width={18} height={18} />
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
            // onClick={() => goToNumberPage(pageNumber)}
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
        <Icon iconName="icon-arrow-right" width={18} height={18} />
      </PaginationButton>
      <PaginationButton onClick={goToLastPage} disabled={page === totalPages}>
        <Icon iconName="icon-arrow-right-2" width={18} height={18} />
      </PaginationButton>
    </div>
  );
}
