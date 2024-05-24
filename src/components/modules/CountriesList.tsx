"use client";
import { useEffect, useState } from "react";
import CountriesListItem from "./CountriesListItem";
import axios from "axios";
import {
  axiosGetConfig,
  axiosGetConfig_FilterByRegion,
  axiosGetConfig_SearchByName,
} from "@/utils/axiosconfig";

const CountriesList = ({
  region,
  search,
}: {
  region: string;
  search: string;
}) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  //control first load data
  useEffect(() => {
    if (countries.length <= 0 && region === "" && search === "") {
      getCountriesData(region, search);
    }
  }, []);

  //control load data after user searching or filtering
  useEffect(() => {
    if (region !== "" || search !== "") {
      getCountriesData(region, search);
    }
    if (region === "" && search === "") {
      getCountriesData("", "");
    }
  }, [region, search]);

  //all of the data fetching is handle here
  const getCountriesData = async (region: string, search: string) => {
    if (region !== "" && search === "") {
      //filter by region
      setLoading(false);
      const res: any = await axios(axiosGetConfig_FilterByRegion(region));
      setCountries(res.data);
      setLoading(true);
      return;
    } else if (region === "" && search !== "") {
      //filter by search text
      setLoading(false);
      const res: any = await axios(axiosGetConfig_SearchByName(search));
      setCountries(res.data);
      setLoading(true);
      return;
    } else if (region !== "" && search !== "") {
      //filter by search text and region
      setLoading(false);
      const res: any = await axios(axiosGetConfig_FilterByRegion(region));

      const filtereddata = res?.data?.filter((item: any) => {
        return item?.name?.common?.toLowerCase().includes(search.toLowerCase());
      });

      if (filtereddata.length <= 0) {
        setCountries([]);
        setLoading(true);
        return;
      }

      setCountries(filtereddata);

      setLoading(true);
      return;
    } else {
      //normal data fetching without any filtering our searching
      setLoading(false);
      const res: any = await axios(axiosGetConfig());
      setCountries(res.data);
      setLoading(true);
      return;
    }
  };

  return (
    <div
      className={`flex flex-wrap ${
        countries.length < 3 ? "justify-center gap-5" : "justify-between"
      } my-4 w-full min-h-screen`}
    >
      {loading ? (
        countries.length > 0 ? (
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
            <div className="text-gray-400 font-semibold text-center">
              No country found
            </div>
          </div>
        )
      ) : (
        <div className="w-full flex justify-center items-center -mt-32">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};

export default CountriesList;
