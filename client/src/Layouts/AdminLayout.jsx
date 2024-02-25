import React from "react";

const InstDashLayout = () => {
  return (
    <div className="flex bg-gray-500 h-screen overflow-hidden">
      <div className="md:basis-2/12 absolute md:static">sidebar</div>
      <div className="md:basis-11/12 basis-12/12 w-full flex flex-col">
        <div className="basis-1/12 bg-red-400">
          <div className="w-1/2 ml-auto">dashboard header</div>
        </div>
        <div className="basis-11/12 overflow-scroll overflow-x-hidden">
          <div className="bg-green-500 h-full">body dashboard</div>
          <div className="bg-white">Footer</div>
        </div>
      </div>
    </div>
  );
};

export default InstDashLayout;
