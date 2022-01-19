import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Coursel from "./components/Coursel";
import Footer from "./components/Footer";
import College from "./components/College";
import Counter from "./components/Counter";
import Whoread from "./components/Whoread";

function Home() {
  return (
    <>
      <Navbar />
      <Coursel />
      <a
        href="https://api.whatsapp.com/send?phone=919795141300 "
        target="_blank"
        rel="noreferrer"
        className="whatsapp-link"
      >
        <img className="whatsapp-link" src="whatsapp-link.png" alt="" />{" "}
      </a>
      <Counter />
      <Whoread />

      <College />

      <Footer />
    </>
  );
}

export default Home;
