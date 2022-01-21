import React from "react";
import Applywhat from "../components/Applywhat";
import Footer from "../components/Footer";
import Maps from "../components/Maps";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Privateeng from "../components/Privateeng";

export default function Engineering() {
  return (
    <div>
      <Navbar />
      <Applywhat />
      <div className="container">
      <div className="ham">
        <h2>Engineering</h2>
        <p>
          Engineering students design and develop applications or the structures
          of the machine or any other inventor, which is controlled by humans.
          Engineering is a responsible course which is having huge demand and
          the competition among the students, in this course is having many
          branches. For direct admission in top engineering colleges contact
          Pragati consultancy. It is one of the best engineering admission
          consultants in Bangalore. If you approach a right and best consultants
          will provide the right suggestion and give the right path for
          admissions to the students for building their career.
        </p>
        <p>Jenesis studant Consultancy can help you to find best college according your result and intrest.JEE (JOSSA), AKTU (UPSEE), COMED-K, MHCET, WBJEE & OTHER STATES
            COUNSELLING CENTRE. </p>
        
        <h2>Here The list of JoSAA  participating institutes</h2>
   <Maps/>
   <h2>Here The list of Top Pr participating institutes</h2>
   <Privateeng/>
   <h3>Assure Your admission in india's top engineering Colleges.</h3>
   <div className="container d-flex justify-content-center">
   <NavLink to="/documentation" > <img className="hambtn" src="apply.jpg" alt="" /> </NavLink>
  </div>
      </div>
      </div>
        <Footer />
    </div>
  );
}
