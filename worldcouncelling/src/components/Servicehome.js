import React from 'react';
import { NavLink } from "react-router-dom";

export default function Servicehome() {
  return <div className="row">
  <div className="row homeservices">
    
    <h1 style={{ color: "aqua" }}>Our Services</h1>
    <div className="col-lg-4 col-sm 12">
    <NavLink to="/services" > <img className="w-75  " src="consult.jpg" alt="" /></NavLink>
    <NavLink to="/services"><h2  to="/services" style={{ fontFamily:"monospace" , color:"aqua" , }}> Admission counseling</h2></NavLink>
    </div>
    <div className="col-lg-4 col-sm 12">
    <NavLink to="/services" > <img className="w-75 mt-2" src="career1.jpg" alt="" /> </NavLink>
    <NavLink to="/services"><h2  to="/services" style={{ fontFamily:"monospace" , color:"aqua" , }}>Career counseling</h2></NavLink>
    </div>
    <div className="col-lg-4 col-sm 12">
    <NavLink to="/services" > <img className="w-75 mt-2" src="education.jpg" alt="" /> </NavLink>
    <NavLink to="/services"><h2  to="/services" style={{ fontFamily:"monospace" , color:"aqua" , }}> Selection of Course</h2></NavLink>
    </div>
    
  </div>
</div>;
}
