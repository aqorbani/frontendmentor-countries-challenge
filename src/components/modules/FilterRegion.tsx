const FilterRegion = ({
  region,
  setRegion,
}: {
  region: string;
  setRegion: Function;
}) => {
  const filterRegion = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegion(e.target.value);
  };

  return (
    <div className="flex justify-center items-center bg-white rounded text-gray-400 outline-transparent my-4 w-full">
      <select
        name="region"
        className="w-full p-3 rounded"
        onChange={(e) => filterRegion(e as any)}
      >
        <option value="">Filter by Region</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Oceania">Oceania</option>
        <option value="Americas">Americas</option>
        <option value="Polar">Polar</option>
        <option value="Antarctic Ocean">Antarctic Ocean</option>
      </select>
    </div>
  );
};

export default FilterRegion;
