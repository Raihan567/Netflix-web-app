import React from "react";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="bg-black/60 left-0 top-0 fixed w-full h-[550px]"></div>
        <div className="top-[20%] p-4 md:p-8">
          <h1 className="font-bold text-3xl md:text-5xl">My shows</h1>
        </div>
      </div>
    </>
  );
};

export default Account;
