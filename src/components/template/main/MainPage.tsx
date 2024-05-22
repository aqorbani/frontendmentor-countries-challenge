import CountriesList from "@/components/modules/CountriesList";
import FilterRegion from "@/components/modules/FilterRegion";
import Searchbox from "@/components/modules/Searchbox";

const MainPage = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 w-full md:w-[90vw] bg-gray-100">
      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        <div>
          <Searchbox />
        </div>
        <div>
          <FilterRegion />
        </div>
      </div>
      <div>
        <CountriesList />
      </div>
    </div>
  );
};

export default MainPage;
