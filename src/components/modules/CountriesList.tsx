"use client";
import { useEffect } from "react";
import CountriesListItem from "./CountriesListItem";

const CountriesList = () => {
  useEffect(() => {
    getCountriesData();
  });

  const getCountriesData = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    console.log(res)
  };

  return (
    <div className="flex flex-wrap items-center justify-around">
      <CountriesListItem />
      <CountriesListItem />
      <CountriesListItem />
      <CountriesListItem />
      <CountriesListItem />
      <CountriesListItem />
      <CountriesListItem />
      <CountriesListItem />
      <CountriesListItem />
      <CountriesListItem />
      <CountriesListItem />
      <CountriesListItem />
      <CountriesListItem />
      <CountriesListItem />
      <CountriesListItem />
      <CountriesListItem />
      <CountriesListItem />
      <CountriesListItem />
      <CountriesListItem />
      <CountriesListItem />
      <CountriesListItem />
    </div>
  );
};

export default CountriesList;
