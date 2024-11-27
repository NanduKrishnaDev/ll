import React, { useContext } from "react";
import { ThemeContext } from "../App";

const AnimeCard = ({ anime }) => {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <div
      className={`shadow-slate-50 m-4  ${
        theme ? "border-slate-400" : "border-slate-800 bg-night"
      } border w-[300px]`}
    >
      <img
        className="h-[300px] w-[300px] object-cover"
        src={+anime?.images?.webp?.image_url || anime?.images?.jpg?.image_url}
      />
      <div className="p-2">
        <div
          className={`text-[20px] ${
            theme ? "text-slate-600" : "text-slate-200"
          } font-semibold mt-[10px]`}
        >
          {anime?.title_english}
        </div>
        <div
          className={`text-[16px] ${
            theme ? "text-slate-600" : "text-slate-200"
          } font mt-[10px]`}
        >
          {anime?.title_japanese}
        </div>
        <div
          className={`text-[14px] ${theme ? "" : "text-slate-100"}  mt-[10px]`}
        >
          Studio : {anime?.studios[0]?.name}
        </div>
        <div
          className={`text-[14px] ${theme ? "" : "text-slate-100"}  mt-[10px]`}
        >
          Genre : {anime?.genres[0]?.name}
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
