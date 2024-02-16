import React from 'react'
import "./App.css"
import { Routes, Route } from "react-router-dom";
import { About, Contact, Home, Login, Register, NotFound } from "./pages/index";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App