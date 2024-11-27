import React, { useEffect, useState, useRef } from "react";
import AnimeCard from "./AnimeCard";
import Shimmer from "./Shimmer";

const InfiniteScrollB = () => {
  const [page, setPage] = useState(1);
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const intersectorRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setVisible(entry.isIntersecting);
      console.log(entry.isIntersecting);
    });
    if (intersectorRef.current) {
      observer.observe(intersectorRef.current);
    }
    fetchAnime();

    return () => {
      if (intersectorRef.current) observer.unobserve(intersectorRef.current);
    };
  }, []);

  useEffect(() => {
    if (visible) {
      console.log("clicked from bottom scroll");
      fetchAnime();
    }
  }, [visible]);

  const fetchAnime = async () => {
    setPage(page + 1);
    setLoading(true);
    const data = await fetch(`https://api.jikan.moe/v4/anime?page=${page}`);
    const jsonData = await data?.json();
    setAnimes((preAnimes) => [...preAnimes, ...jsonData?.data]);
    setLoading(false);
  };

  return (
    <>
      {animes.length === 0 && <Shimmer />}
      <div className="flex flex-wrap py-10 pt-20 justify-between" id="scroll">
        {animes.length !== 0 &&
          animes.map((anime, index) => <AnimeCard anime={anime} key={index} />)}
      </div>
      {loading && <Shimmer />}
      <div ref={intersectorRef} className="bg-black  w-[100%]"></div>
    </>
  );
};

export default InfiniteScrollB;
