import Image from "next/image";

const CountriesListItem = () => {
  return (
    <div className="flex flex-col m-3 shadow-md rounded w-full md:w-[300px]">
      <Image
        src="https://flagcdn.com/aw.svg"
        alt="name"
        width={300}
        height={150}
        className="rounded-t-md w-full"
      />
      <div className="ml-3 m-2">
        <p className="font-extrabold my-3">title</p>
        <p>data01</p>
        <p>data02</p>
        <p>data03</p>
      </div>
    </div>
  );
};

export default CountriesListItem;
