import React, { useContext } from "react";
import { ThemeContext } from "../App";
import "./../index.css";

const Shimmer = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const arr = new Array(10).fill(0);

  return (
    <div className="flex flex-wrap justify-between ">
      {arr.map(() => (
        <div className="flex flex-col justify-items-center  my-5 shadow-slate-50 ">
          <div
            className={` w-[300px]  h-[300px] ${
              theme ? "shimmer-div" : "shimmer-div-dark"
            } `}
          ></div>
          <div className="py-2">
            <div
              className={`h-[20px] w-[250px] mt-[10px] ${
                theme ? "shimmer-div" : "shimmer-div-dark"
              } `}
            ></div>
            <div
              className={`h-[20px] w-[200px] mt-[10px] ${
                theme ? "shimmer-div" : "shimmer-div-dark"
              }`}
            ></div>
            <div
              className={`h-[20px] w-[300px] mt-[10px] ${
                theme ? "shimmer-div" : "shimmer-div-dark"
              }`}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
