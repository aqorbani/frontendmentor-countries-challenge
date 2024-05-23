import React from "react";
import { IoSearch } from "react-icons/io5";

const Searchbox = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: Function;
}) => {
  return (
    <div className="flex justify-center items-center bg-white p-2 my-2 rounded text-gray-400 outline-transparent">
      <IoSearch className="mx-5 text-[2.5vw] md:text-[1.2vw]" />
      <input
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="text-[2vw] md:text-[0.8vw] p-2 w-full md:w-56"
      />
    </div>
  );
};

export default Searchbox;
