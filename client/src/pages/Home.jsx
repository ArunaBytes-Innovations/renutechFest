import React from "react";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-full w-full bg-[#07042B]">
      <div className="h-full">
        <div className="mx-4 my-8 flex justify-center items-center">
          <img className="w-5/6" src="/renutech_branding.svg" alt="" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl text-white text-center font-bold">
            Comming Soon!
          </h1>
          <p className="text-white text-center my-2 w-4/6">
            Stay ahead of the curve with our latest news and updates delivered
            straight to your inbox. Don't miss out - subscribe now!"
          </p>
          <form action="" className="flex">
            <input
              type="email"
              placeholder="Enter Your Emial"
              className="p-2 w-60 md:w-80 rounded-md mr-2"
            />
            <input
              type="text"
              value="Subscribe"
              className="p-2 w-24 text-center rounded-md bg-[#8941A0] text-[#F7F7F7]"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
