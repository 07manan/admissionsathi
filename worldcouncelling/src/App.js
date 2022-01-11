import React from "react";
import Home from "./Home";
import About from "./pages/About";
import Consult from "./pages/Consult";
import Services from "./pages/Services";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/consult" element={<Consult/>} />
        <Route path="/services" element={<Services/>}/>
      </Routes>
    </>
  );
}

export default App;
