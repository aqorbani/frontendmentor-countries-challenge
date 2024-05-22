"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Information = ({ name }: { name: string }) => {
  const [country, setCountry] = useState([]);
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
    setCountry(res.data);
    console.log(res);
    setLoading(true);
  };

  return <div>{!loading ? <p>loading</p> : <p>{name}</p>}</div>;
};

export default Information;
