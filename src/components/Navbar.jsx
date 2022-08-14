import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 sticky top-0 w-full z-[100] bg-black ">
      <Link to="/">
        <h1 className="font-bold text-red-600 uppercase text-4xl cursor-pointer  ">
          Netflix
        </h1>
      </Link>
      <div>
        <Link to="/login">
          <button className="mr-4 text-white ">Sign In</button>
        </Link>
        <Link to="/signup">
          <button className="bg-red-600 text-white py-2 px-6 rounded-md ">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
