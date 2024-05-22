"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Information = ({ name }: { name: string }) => {
  const [country, setCountry] = useState<any[]>([]);
  const [nativeName, setNativeName] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (country.length <= 0) {
      getCountriesData();
    }
  });

  const getCountriesData = async () => {
    setLoading(false);
    const res: any = await axios.get(
      "https://restcountries.com/v3.1/name/" + name + "?fullText=true"
    );
    setCountry(res.data as any);
    setNativeName(res?.data[0]?.name?.nativeName as any);

    let nativeNames: any = [];
    for (let key in res?.data[0]?.name?.nativeName as any) {
      const childObject = res?.data[0]?.name?.nativeName[key];

      const commonName = childObject.common;

      nativeNames.push(commonName);
    }

    setNativeName(nativeNames);

    let currencies: any = [];
    for (let key in res?.data[0]?.currencies as any) {
      const childObject = res?.data[0]?.currencies[key];

      const commonName = childObject.name;

      currencies.push(commonName);
    }

    setCurrencies(currencies);

    let languages: any = [];
    for (let key in res?.data[0]?.languages as any) {
      const childObject = res?.data[0]?.languages[key];

      const commonName = childObject;

      languages.push(commonName);
    }

    setLanguages(languages);

    setLoading(true);
  };

  return (
    <div>
      {!loading ? (
        <p>loading</p>
      ) : (
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-2/5 flex flex-col justify-center items-center min-h-[calc(100vh-200px)]">
            <Image
              src={country[0]?.flags.png}
              alt={name}
              width={200}
              height={120}
              className="w-[500px] h-[300px]"
            />
          </div>
          <div className="w-full md:w-3/5 flex flex-col justify-center items-start min-h-[calc(100vh-200px)]">
            <h3 className="font-extrabold my-3 text-[2.5vw] md:text-[1.8vw]">
              {country[0]?.name.common}
            </h3>
            <div className="flex w-full">
              <div className="w-full">
                <p className="mt-3 text-[1.5vw] md:text-[1vw]">
                  Native Name :{" "}
                  {nativeName.map((item, index) =>
                    nativeName.length === index + 1 ? item : item + " - "
                  )}
                </p>
                <p className="my-1 text-[1.5vw] md:text-[1vw]">
                  Population : {country[0]?.population}
                </p>
                <p className="my-1 text-[1.5vw] md:text-[1vw]">
                  Region : {country[0]?.region}
                </p>
                <p className="my-1 text-[1.5vw] md:text-[1vw]">
                  Sub Region : {country[0]?.subregion}
                </p>
                <p className="my-1 text-[1.5vw] md:text-[1vw]">
                  Capital : {country[0]?.capital}
                </p>
              </div>
              <div className="w-full">
                <p className="mt-3 text-[1.5vw] md:text-[1vw]">
                  Top Level Domain :{" "}
                  {country[0]?.tld.map((item: any, index: number) =>
                    country[0]?.tld.length === index + 1 ? item : item + " - "
                  )}
                </p>
                <p className="mt-3 text-[1.5vw] md:text-[1vw]">
                  Currencies :{" "}
                  {currencies.map((item, index) =>
                    currencies.length === index + 1 ? item : item + " - "
                  )}
                </p>
                <p className="mt-3 text-[1.5vw] md:text-[1vw]">
                  Languages :{" "}
                  {languages.map((item, index) =>
                    languages.length === index + 1 ? item : item + " - "
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Information;
