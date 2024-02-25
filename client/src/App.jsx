import React from "react";
import { WebLayout, AdminLayout } from "./Layouts";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      {/* routes for admin */}
      <Route path="/admin/*" element={<AdminLayout />} />

      {/* routes for website */}
      <Route path="/*" element={<WebLayout />} />
    </Routes>
  );
};

export default App;
