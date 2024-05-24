"use client";
import CountriesList from "@/components/modules/CountriesList";
import FilterRegion from "@/components/modules/FilterRegion";
import Searchbox from "@/components/modules/Searchbox";
import { useState } from "react";

const MainPage = () => {
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col justify-center items-center p-4 w-full md:w-[90vw] bg-gray-100 dark:bg-gray-800 text-black">
      {/* Filter and Search */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center z-10">
        <div className="w-full md:w-1/4">
          <Searchbox search={search} setSearch={setSearch} />
        </div>
        <div className="w-full md:w-1/4">
          <FilterRegion region={region} setRegion={setRegion} />
        </div>
      </div>
      {/* Countries List */}
      <div className="w-full">
        <CountriesList region={region} search={search} />
      </div>
    </div>
  );
};

export default MainPage;
