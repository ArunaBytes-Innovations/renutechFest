import React from "react";
import { Home, About, Contact, Events } from "../pages";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";

const WebLayout = () => {
  //   page list
  const WebRoutes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/events",
      element: <Events />,
    },
  ];

  return (
    <div className="flex flex-col h-screen">
      {/* navigation menu  */}
      <div className="basis-1/12">
        <Navbar />
      </div>

      {/* Website body  */}
      <div className="basis-11/12 flex flex-col bg-slate-500 justify-between overflow-auto h-screen">
        <Routes>
          {WebRoutes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default WebLayout;
