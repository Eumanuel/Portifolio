import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./Home/Home";

// Components
import Navbar from "./../components/Navbar/Navbar"


export default function Router() {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>

        </Routes>
    </>
  )
}
