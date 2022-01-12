import './App.css';
import React from 'react';
import Navbar from "./components/Navbar"
import Coursel from './components/Coursel';
import Footer from './components/Footer';
import College from './components/College';

function Home() {
  return (
    <>
        <Navbar/>
        <Coursel/>
        <College/>
        <Footer/>
    </>
  );
}
 
export default Home;