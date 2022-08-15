import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
const SavedShow = () => {
  const [movies, setMovies] = useState([]);

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div>
      <h2 className="p-4 text-white font-bold md:text-xl ">My show</h2>
      <div className="flex items-center group ">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block absolute hidden"
          size={40}
        />
        <div>
          {movies.map((item) => (
            <div
              id="slider"
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] cursor-pointer p-2 inline-block relative"
            >
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
              />
              <div>
                <p>{item?.title}</p>
                <p className="">
                  <AiOutlineClose />
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block absolute hidden"
          size={40}
        />
      </div>
    </div>
  );
};

export default SavedShow;
