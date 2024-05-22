import Image from "next/image";

const CountriesListItem = ({
  name,
  flags,
}: {
  name: string;
  flags: string;
}) => {
  return (
    <div className="flex flex-col m-3 shadow-md rounded w-full md:w-[300px]">
      <Image
        src={flags}
        alt="name"
        width={100}
        height={50}
        className="rounded-t-md w-full h-44"
      />
      <div className="ml-3 m-2">
        <p className="font-extrabold my-3">{name}</p>
        <p>data01</p>
        <p>data02</p>
        <p>data03</p>
      </div>
    </div>
  );
};

export default CountriesListItem;
