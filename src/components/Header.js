import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../App";
import SwitchTheme from "./SwitchTheme/SwitchTheme";

const Header = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-row w-[100%] justify-between  ${
        theme ? "bg-slate-100" : "bg-black"
      } h-16 py-5 fixed px-10`}
    >
      <div className="flex flex-row">
        <nav
          className={`${
            theme ? "text-gray-900 " : "text-gray-200 "
          } text-xl cursor-pointer  hover:font-medium mr-5`}
          onClick={() => {
            navigate("/");
          }}
        >
          Scroll
        </nav>
        <nav
          className={`${
            theme ? "text-gray-900 " : "text-gray-200 "
          } text-xl cursor-pointer  hover:font-medium mr-5`}
          onClick={() => {
            navigate("/comments");
          }}
        >
          Comments
        </nav>
        <nav
          className={`${
            theme ? "text-gray-900 " : "text-gray-200 "
          } text-xl cursor-pointer  hover:font-medium mr-5`}
          onClick={() => {
            navigate("/live");
          }}
        >
          Live Chat
        </nav>
        <nav
          className={`${
            theme ? "text-gray-900 " : "text-gray-200 "
          } text-xl cursor-pointer  hover:font-medium mr-5`}
          onClick={() => {
            navigate("/search");
          }}
        >
          Search
        </nav>
      </div>
      <SwitchTheme />
    </div>
  );
};

export default Header;
