import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Request";
const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <div className="w-full h-[580px] text-white">
      <div className="w-full h-full">
        <div className="w-full h-[580px] absolute bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover "
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />

        <div className="w-full p-4 md:p-8 absolute top-[20%]">
          <h1 className="text-3xl md:text-5xl text-white font-bold ">
            {movie?.title}
          </h1>

          <div className="my-4">
            <button className=" rounded  bg-red-600 py-2 px-6 ">Play</button>
            <button className=" border rounded  py-2 px-6 ml-4 text-white ">
              Watch
            </button>
          </div>
          <p className=" text-sm rounded ">{`Language: ${movie?.original_language}`}</p>
          <p className=" text-sm rounded ">{`Release-date: ${movie?.release_date}`}</p>
          <p className=" text-sm rounded ">{`Popularity: ${movie?.popularity}`}</p>
          <p className=" text-sm rounded ">{`Average vote:  ${movie?.vote_average}`}</p>
          <p className=" text-sm rounded ">{`Vote count:  ${movie?.vote_count}`}</p>
          <p className="text-gray-300 text-sm md:w-[70%] lg:w-[50%] xl:w-[35%]">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
