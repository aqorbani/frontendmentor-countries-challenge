import { sp_latin } from "@/utils/number";
import { createSlug } from "@/utils/slug";
import Image from "next/image";
import Link from "next/link";

const CountriesListItem = ({
  name,
  flags,
  population,
  region,
  capital,
}: {
  name: string;
  flags: string;
  population: string;
  region: string;
  capital: string;
}) => {
  return (
    <Link href={`/country/` + createSlug(name)} className="w-full mx-10 md:mx-0 md:w-[300px]">
      <div className="flex flex-col my-3 bg-white dark:bg-gray-700  text-black dark:text-white shadow-md rounded-md w-full md:w-[300px]">
        <Image
          src={flags}
          alt={name}
          width={200}
          height={120}
          className="rounded-t-md w-full h-52 md:h-44"
        />
        <div className="ml-3 m-2">
          <p className="font-extrabold my-3 text-[2.5vw] md:text-[1vw]">{name}</p>
          <p className="text-[1.7vw] md:text-[0.8vw] my-1 mt-6">
            <span className="font-semibold">population: </span>
            {sp_latin(population)}
          </p>
          <p className="text-[1.7vw] md:text-[0.8vw] my-1">
            <span className="font-semibold">region: </span>
            {region}
          </p>
          <p className="text-[1.7vw] md:text-[0.8vw] my-1 mb-5">
            <span className="font-semibold">capital: </span>
            {capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountriesListItem;
