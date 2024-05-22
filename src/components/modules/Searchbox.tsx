import React from "react";
import { IoSearch } from "react-icons/io5";

const Searchbox = () => {
  return (
    <div className="flex justify-center items-center bg-white p-2 rounded text-gray-400 outline-transparent">
      <IoSearch className="mx-5 text-[2.5vw] md:text-[1.2vw]" />
      <input
        type="text"
        placeholder="Search for a country..."
        className="text-[2vw] md:text-[0.8vw] p-2"
      />
    </div>
  );
};

export default Searchbox;
