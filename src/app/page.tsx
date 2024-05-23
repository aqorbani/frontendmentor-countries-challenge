import MainPage from "@/components/template/main/MainPage";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex justify-center items-center bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
      <MainPage />
    </div>
  );
}
