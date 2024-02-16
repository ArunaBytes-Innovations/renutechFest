import React from "react";
import { Home, About, Contact, NotFound } from "../pages";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Website/Navbar";
import Footer from "../components/Website/Footer";

//importing CSS
import "./styles/WebLayout.css";

const WebLayout = () => {
  const WebRoutes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];

  return (
    <div className="flex flex-col h-screen">
      <div className="basis-1/12">
        <Navbar />
      </div>
      <div className="basis-11/12 flex flex-col justify-between overflow-auto h-dvh">
        <div>
          <Routes>
            {WebRoutes.map(({ path, element }, index) => (
              <Route key={index} path={path} element={element} />
            ))}
          </Routes>
        </div>
        <Footer className="" />
      </div>
    </div>
  );
};

export default WebLayout;
