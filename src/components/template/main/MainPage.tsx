import CountriesList from "@/components/modules/CountriesList";

const MainPage = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 w-full md:w-[90vw]">
      <div>filter</div>
      <div>
        <CountriesList />
      </div>
    </div>
  );
};

export default MainPage;
