"use client";
import React, { useEffect, useState } from "react";
import { getPets, PetsResults } from "@/lib/api";
import PaginationButton from "./pagination-button";
import ArrowDoubleLeft from "../../public/icons/arrow-left-2.svg";
import ArrowDoubleRight from "../../public/icons/arrow-right-2.svg";
import ArrowRight from "../../public/icons/arrow-right.svg";
import ArrowLeft from "../../public/icons/arrow-left.svg";
import clsx from "clsx";
import PetItem from "./pet-item";
import List from "./list";
import Loader from "./loader";
import SearchbarFindpet from "./searchbar-findpet";

export interface PetsProps {}

export default function Pets({}: PetsProps) {
  const [pets, setPets] = useState<PetsResults[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPets(page)
      .then((response) => {
        setPets(response.results);
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
    getPets(pageNumber);
    setPage(pageNumber);
  };

  return (
    <div className="flex flex-col items-center">
      {loading ? (
        <Loader />
      ) : (
        <>
          <SearchbarFindpet />
          <List className="mb-[44px]">
            {pets.map((petsItem) => (
              <PetItem
                key={petsItem._id}
                imgURL={petsItem.imgURL}
                petTitle={petsItem.title}
                petName={petsItem.name}
                petBirthday={
                  petsItem.birthday
                    ? petsItem.birthday.split("-").reverse().join(".")
                    : "Unknown"
                }
                petSex={petsItem.sex}
                petSpecies={petsItem.species}
                petCategory={petsItem.category}
                petDescription={petsItem.comment}
                popularity={petsItem.popularity}
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
            <PaginationButton
              onClick={goToNextPage}
              disabled={page === totalPages}
            >
              <ArrowRight />
            </PaginationButton>
            <PaginationButton
              onClick={goToLastPage}
              disabled={page === totalPages}
            >
              <ArrowDoubleRight />
            </PaginationButton>
          </div>
        </>
      )}
    </div>
  );
}
