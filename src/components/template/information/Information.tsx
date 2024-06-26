"use client";
import { axiosGetConfig, axiosGetConfig_FullName } from "@/utils/axiosconfig";
import { sp_latin } from "@/utils/number";
import { createSlug } from "@/utils/slug";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const Information = ({ name }: { name: string }) => {
  const router = useRouter();
  const [country, setCountry] = useState<any[]>([]);
  const [nativeName, setNativeName] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [borders, setBorders] = useState([]);
  const [loading, setLoading] = useState(true);

  //get data function call
  useEffect(() => {
    if (country.length <= 0) {
      getCountriesData();
    }
  });

  // get single country data with exact searching by name
  const getCountriesData = async () => {

    //loading show
    setLoading(false);

    //fetching data
    const res: any = await axios(axiosGetConfig_FullName(name));
    setCountry(res.data as any);
    setNativeName(res?.data[0]?.name?.nativeName as any);

    //change native names structure for show
    let nativeNames: any = [];
    for (let key in res?.data[0]?.name?.nativeName as any) {
      const childObject = res?.data[0]?.name?.nativeName[key];

      const commonName = childObject.common;

      nativeNames.push(commonName);
    }
    setNativeName(nativeNames);

    //change countries structure for show
    let currencies: any = [];
    for (let key in res?.data[0]?.currencies as any) {
      const childObject = res?.data[0]?.currencies[key];

      const commonName = childObject.name;

      currencies.push(commonName);
    }
    setCurrencies(currencies);

    //change languages structure for show
    let languages: any = [];
    for (let key in res?.data[0]?.languages as any) {
      const childObject = res?.data[0]?.languages[key];

      const commonName = childObject;

      languages.push(commonName);
    }
    setLanguages(languages);

    //get border countries data
    await getBorderCountries(res?.data[0]?.borders);

    //loading show ended
    setLoading(true);
  };

  //function for get border countries data
  const getBorderCountries = async (BrdersList: Array<string>) => {

    //fetching data
    const res: any = await axios(axiosGetConfig());

    //change border countries structure for show
    let bordersList: any = [];
    for (let key in BrdersList) {
      res?.data?.map(
        (item: object, index: number) =>
          BrdersList[key] + "" === res?.data[index]?.cca3 + "" &&
          bordersList.push(item)
      );
    }
    setBorders(bordersList);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 text-black dark:text-white min-h-screen">
      <div className="w-full p-5">
        <button
          className="flex justify-center items-center text-[2.5vw] md:text-[1vw] btn-shadow py-1 px-3 rounded bg-white dark:bg-gray-700 text-black dark:text-white"
          onClick={() => router.back()}
        >
          <FaArrowLeftLong className="mx-2" />
          Back
        </button>
      </div>
      {!loading ? (
        <div className="w-full my-16 flex justify-center items-center">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row justify-center items-center p-5">
          <div className="w-full md:w-2/5 flex flex-col justify-center items-center mb-5">
            <Image
              src={country[0]?.flags.png ? country[0]?.flags.png : "/img/img-placeholder.jpg"}
              alt={name}
              width={200}
              height={120}
              priority={true}
              className="w-full max-w-[500px] max-h-[300px]"
            />
          </div>
          <div className="w-full md:w-3/5 flex flex-col justify-center items-start">
            <h3 className="font-extrabold my-3 text-[3.5vw] md:text-[1.8vw]">
              {country[0]?.name.common}
            </h3>
            <div className="flex flex-col md:flex-row w-full">
              <div className="w-full">
                <p className="mt-3 text-[2.2vw] md:text-[1vw]">
                  <span className="font-bold">Native Name : </span>
                  {nativeName.map((item, index) =>
                    nativeName.length === index + 1 ? item : item + " - "
                  )}
                </p>
                <p className="my-1 text-[2.2vw] md:text-[1vw]">
                  <span className="font-bold">Population : </span>
                  {country[0]?.population
                    ? sp_latin(country[0]?.population)
                    : country[0]?.population}
                </p>
                <p className="my-1 text-[2.2vw] md:text-[1vw]">
                  <span className="font-bold">Region : </span>
                  {country[0]?.region}
                </p>
                <p className="my-1 text-[2.2vw] md:text-[1vw]">
                  <span className="font-bold">Sub Region : </span>
                  {country[0]?.subregion}
                </p>
                <p className="my-1 text-[2.2vw] md:text-[1vw]">
                  <span className="font-bold">Capital : </span>
                  {country[0]?.capital}
                </p>
              </div>
              <div className="w-full">
                <p className="mt-1 md:mt-3 text-[2.2vw] md:text-[1vw]">
                  <span className="font-bold">Top Level Domain : </span>

                  {country[0]?.tld.map((item: any, index: number) =>
                    country[0]?.tld.length === index + 1 ? item : item + " - "
                  )}
                </p>
                <p className="my-1 text-[2.2vw] md:text-[1vw]">
                  <span className="font-bold">Currencies : </span>

                  {currencies.map((item, index) =>
                    currencies.length === index + 1 ? item : item + " - "
                  )}
                </p>
                <p className="my-1 text-[2.2vw] md:text-[1vw]">
                  <span className="font-bold">Languages : </span>

                  {languages.map((item, index) =>
                    languages.length === index + 1 ? item : item + " - "
                  )}
                </p>
              </div>
            </div>

            {borders && country[0]?.borders && (
              <>
                <p className="my-1 text-[2.2vw] md:text-[1vw]">
                  <span className="font-bold">Border countries : </span>
                </p>
                <span className="flex flex-wrap">
                  {borders.length > 0 &&
                    borders.map((item: any, index: number) => (
                      <button
                        key={index}
                        className="flex justify-center items-center text-[2.5vw] md:text-[1vw] btn-shadow py-1 px-3 rounded my-3 mr-2 bg-white dark:bg-gray-700 text-black dark:text-white"
                      >
                        <Link
                          href={`/country/` + createSlug(item?.name?.common)}
                        >
                          {item?.name?.common}
                        </Link>
                      </button>
                    ))}
                </span>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Information;
