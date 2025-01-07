import React from "react";
import SearchInput from "./search-input";
import SearchSelect from "./search-select";
import SearchBtnFindpet from "./search-btn-findpet";

export interface SearchbarFindpetProps {}

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

export default function SearchbarFindpet({}: SearchbarFindpetProps) {
  return (
    <div className="p-[40px] bg-[#fff4df] flex flex-col rounded-[30px] w-full gap-[40px]">
      <div className="flex gap-[16px]">
        <SearchInput placeholder="Search" />
        <SearchSelect
          placeholder="Category"
          options={category}
          onSelect={() => {}}
        />
        <SearchSelect
          placeholder="By gender"
          options={category}
          onSelect={() => {}}
        />
        <SearchSelect
          placeholder="By type"
          options={category1}
          onSelect={() => {}}
        />
        <SearchInput placeholder="Location" />
      </div>
      <div className="flex gap-[8px]">
        <SearchBtnFindpet text="Popular" />
        <SearchBtnFindpet text="Unpopular" />
        <SearchBtnFindpet text="Cheap" />
        <SearchBtnFindpet text="Expensive" />
      </div>
    </div>
  );
}
