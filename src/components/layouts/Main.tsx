import React from "react";

const Main = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <nav className="w-full bg-gray-100 p-5 flex items-center justify-between">
        <div className="font-extrabold">where in the world?</div>
        <div>dark mode</div>
      </nav>
      {children}
    </div>
  );
};

export default Main;
