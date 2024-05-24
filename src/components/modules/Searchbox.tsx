"use client";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

const Searchbox = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: Function;
}) => {
  const [text, setText] = useState("");

  //delay for user has enough time for typing and after search function start
  useEffect(() => {
    const delayonChange = setTimeout(() => {
      setSearch(text);
    }, 1500);

    return () => clearTimeout(delayonChange);
  }, [text]);

  return (
    <div className="flex items-center bg-white dark:bg-gray-700  text-gray-400 dark:text-white p-2 my-2 rounded outline-transparent">
      <IoSearch className="mr-1 ml-3 text-[2.5vw] md:text-[1.2vw]" />
      <input
        type="text"
        placeholder="Search for a country..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="text-[2vw] md:text-[0.8vw] p-2 w-full md:w-56 bg-white dark:bg-gray-700  text-gray-400 dark:text-white dark:placeholder:text-white"
      />
    </div>
  );
};

export default Searchbox;
