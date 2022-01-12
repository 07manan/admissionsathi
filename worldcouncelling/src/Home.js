import './App.css';
import React from 'react';
import Navbar from "./components/Navbar"
import Coursel from './components/Coursel';
import Footer from './components/Footer';

function Home() {
  return (
    <>
        <Navbar/>
        <Coursel/>
        <Footer/>
    </>
  );
}
 
export default Home;