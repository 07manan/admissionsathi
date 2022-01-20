import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Coursel from "./components/Coursel";
import Footer from "./components/Footer";
import College from "./components/College";
import Counter from "./components/Counter";
import Whoread from "./components/Whoread";
import Servicehome from "./components/Servicehome";
import Applywhat from "./components/Applywhat";


function Home() {
  return (
    <>
      <Navbar />
      <Coursel />
      <Applywhat/>
      <Counter />
      <Whoread />
      <Servicehome/>

      <College />

      <Footer />
    </>
  );
}

export default Home;
