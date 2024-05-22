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
    <Link href={`country/` + name}>
      <div className="flex flex-col my-3 bg-white shadow-md rounded w-full md:w-[300px]">
        <Image
          src={flags}
          alt={name}
          width={100}
          height={50}
          className="rounded-t-md w-full h-44"
        />
        <div className="ml-3 m-2">
          <p className="font-extrabold my-3 text-[1vw]">{name}</p>
          <p className="text-[0.8vw]">population: {population}</p>
          <p className="text-[0.8vw]">region : {region}</p>
          <p className="text-[0.8vw] mb-2">capital : {capital}</p>
        </div>
      </div>
    </Link>
  );
};

export default CountriesListItem;
