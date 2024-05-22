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
    console.log(res.data.length);
    setLoading(true);
  };

  return (
    <div className="flex flex-wrap items-center justify-between my-4">
      {loading ? (
        countries.length > 0 &&
        countries.map((item: any, index: number) => (
          <CountriesListItem
            key={index}
            name={item.name.common}
            flags={item.flags.png}
            population={item.population}
            region={item.region}
            capital={item.capital}
          />
        ))
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default CountriesList;
