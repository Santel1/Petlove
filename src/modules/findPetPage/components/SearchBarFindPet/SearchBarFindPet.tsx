"use client";
import React from "react";

import SearchBarSelect from "../SearchBarSelect/SearchBarSelect";
import SearchBarInput from "../SearchBarInput/SearchBarInput";
import SearchBarButton from "../SearchBarButton/SearchBarButton";

export interface SearchBarFindPetProps {}

const category = ["Show all", "dog", "cat", "wolf", "snake"];
const category1 = [
  "Show all",
  "dog",
  "cat",
  "wolf",
  "snake",
  "snake",
  "snake",
  "snake",
  "snake",
  "snake",
  "snake",
  "snake",
  "snake",
];

export default function SearchBarFindPet({}: SearchBarFindPetProps) {
  return (
    <div className="p-[40px] bg-[#fff4df] flex flex-col rounded-[30px] w-full gap-[40px]">
      <div className="flex gap-[16px]">
        <SearchBarInput placeholder="Search" />
        <SearchBarSelect
          placeholder="Category"
          options={category}
          onSelect={() => {}}
        />
        <SearchBarSelect
          placeholder="By gender"
          options={category}
          onSelect={() => {}}
        />
        <SearchBarSelect
          placeholder="By type"
          options={category1}
          onSelect={() => {}}
        />
        <SearchBarInput placeholder="Location" />
      </div>
      <div className="flex gap-[8px]">
        <SearchBarButton text="Popular" />
        <SearchBarButton text="Unpopular" />
        <SearchBarButton text="Cheap" />
        <SearchBarButton text="Expensive" />
      </div>
    </div>
  );
}
