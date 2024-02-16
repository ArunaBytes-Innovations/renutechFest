import React from 'react'
import "./App.css"
import { Routes, Route } from "react-router-dom";
import { WebLayout, InstDashLayout } from './Layouts';
import { Login, Register } from "./pages/index";

const App = () => {
  return (
    <>
      <Routes>
        {/* routes for auth */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* routes for website Layouts */}
        <Route path="/*" element={<WebLayout />}/> 
      </Routes>
    </>
  )
}

export default App