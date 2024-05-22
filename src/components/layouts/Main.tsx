import { FaRegMoon } from "react-icons/fa";

const Main = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <nav className="w-full bg-gray-200 p-5 flex items-center justify-between shadow">
        <div className="font-extrabold">where in the world?</div>
        <div className="flex justify-center items-center">
          <FaRegMoon />
           dark mode
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Main;
