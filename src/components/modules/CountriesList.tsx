"use client";
import { useEffect, useState } from "react";
import CountriesListItem from "./CountriesListItem";
import axios from "axios";

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (countries.length <= 0) {
      getCountriesData();
    }
  });

  const getCountriesData = async () => {
    setLoading(false);
    const res: any = await axios.get("https://restcountries.com/v3.1/all");
    setCountries(res.data);
    console.log(res.data);
    setLoading(true);
  };

  return (
    <div className="flex flex-wrap items-center justify-around">
      {loading ? (
        countries.length > 0 &&
        countries.map((item: any, index: number) => (
          <CountriesListItem key={index} name={item.name.common} flags={item.flags.png} />
        ))
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default CountriesList;
