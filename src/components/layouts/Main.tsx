import { FaRegMoon } from "react-icons/fa";
import ThemeToggle from "../modules/ThemeToggle";

const Main = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <nav className="w-full bg-white p-5 flex items-center justify-between shadow">
        <div className="font-extrabold">where in the world?</div>
        <div className="flex justify-center items-center">
          {/* <FaRegMoon />
           dark mode */}
          <ThemeToggle />
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Main;
