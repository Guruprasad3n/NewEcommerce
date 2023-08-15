import React, { useState } from "react";
import Navbar from "./Components/Layout/Navbar";
import Layout from "./Components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Policy from "./Pages/Policy";
import PageNotFound from "./Pages/PageNotFound";
import Signup from "./Pages/Signup.jsx";
import Login from "./Pages/Login.jsx";

// import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
