import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-[620px] ">
      <img
        className="absolute  w-full lg:h-[620px] h-screen object-cover bg-center"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a1543997-c1fd-4946-92d3-b0a3648b92c7/4a165001-9ba6-42b5-8df7-ff4b2fc8b82f/BD-en-20220808-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="netflix-cover"
      />

      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>

      <div className="w-full h-full px-4 py-24 fixed">
        <div className="max-w-[450px] h-[500px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-bold text-3xl text-center">Sign Up</h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col py-4 w-full "
            >
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                className="p-3 my-2 rounded bg-gray-700 text-sm outline-none hover:bg-border  hover:outline-red-600"
                autoComplete="email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                className="bg-gray-700 text-sm outline-none rounded p-3 my-2  hover:outline-red-600 "
                autoComplete="current-password"
              />

              <button className="bg-red-600 py-3 my-6 rounded ">Sign In</button>

              <div className="flex justify-between items-center text-gray-500 text-sm">
                <p>
                  {" "}
                  <input className="mr-1" type="checkbox" />
                  Remember me?
                </p>
                <p>Need help?</p>
              </div>
              <p className="my-8">
                <span className="text-gray-500 mr-1 underline">
                  Already subscribe to netflix?
                </span>
                <Link to="/login">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
