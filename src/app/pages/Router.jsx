import React from "react";

import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";

// Components
// import Navbar from "./../components/Navbar/Navbar";


export default function Router() {
  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}
