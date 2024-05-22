import CountriesList from "@/components/modules/CountriesList";
import FilterRegion from "@/components/modules/FilterRegion";
import Searchbox from "@/components/modules/Searchbox";

const MainPage = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 w-full md:w-[90vw] bg-gray-100">
      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/4">
          <Searchbox />
        </div>
        <div className="w-full md:w-1/4">
          <FilterRegion />
        </div>
      </div>
      <div className="w-full">
        <CountriesList />
      </div>
    </div>
  );
};

export default MainPage;
