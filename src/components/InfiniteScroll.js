import React, { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";
import Shimmer from "./Shimmer";

const InfiniteScroll = () => {
  const [p, setP] = useState(0);
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", scrollLoad);
  }, []);

  useEffect(() => {
    fetchAnime();
  }, [p]);

  const scrollLoad = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      setP((p) => p + 1);
    }
  };

  const fetchAnime = async () => {
    setLoading(true);
    const data = await fetch(`https://api.jikan.moe/v4/anime?page=${p + 1}`);
    const jsonData = await data.json();
    setAnimes((preAnimes) => [...preAnimes, ...jsonData.data]);
    setLoading(false);
  };

  if (animes.length === 0) return <Shimmer />;
  else
    return (
      <>
        <div className="flex flex-wrap py-10 pt-20 justify-between" id="scroll">
          {animes.map((anime, index) => (
            <AnimeCard anime={anime} key={index} />
          ))}
        </div>
        {loading && <Shimmer />}
      </>
    );
};

export default InfiniteScroll;
