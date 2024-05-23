"use client";
import { useEffect, useState } from "react";
import CountriesListItem from "./CountriesListItem";
import axios from "axios";
import {
  axiosGetConfig,
  axiosGetConfig_FilterByRegion,
} from "@/utils/axiosconfig";

const CountriesList = ({ region }: { region: string }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (countries.length <= 0) {
      getCountriesData(region);
    }
  });

  useEffect(() => {
    if (region !== "") {
      getCountriesData(region);
    }
  }, [region]);

  const getCountriesData = async (region: string) => {
    if (region !== "") {
      setLoading(false);
      const res: any = await axios(axiosGetConfig_FilterByRegion(region));
      setCountries(res.data);
      setLoading(true);
      return;
    } else {
      setLoading(false);
      const res: any = await axios(axiosGetConfig());
      setCountries(res.data);
      setLoading(true);
      return;
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-between my-4 w-full min-h-screen">
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
        <div className="w-full flex justify-center items-center -mt-32">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};

export default CountriesList;
