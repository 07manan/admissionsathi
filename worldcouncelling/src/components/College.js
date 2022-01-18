import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

class College extends React.Component {
  render() {
    return (
      <div className="row" id="list" >
        <div className="collegesanddegrees col-lg-8 col-sm-12 row">
          <div className="degree col-lg-6 col-sm 12">
            <h2>Assure your admission in</h2>
            <ul>
              <li>Engineering</li>
              <li>Polytechnic</li>
              <li>MBA/PGDM</li>
              <li>MCA</li>
              <li>BBA/BCA</li>
              <li>Hotel Management</li>
              <li>B. Pharma/M. Pharma</li>
              <li>Bio-tech</li>
              <li>Nursing</li>
              <li>Fashion Tech</li>
              <li>B. Ed</li>
              <li>MBBS</li>
              <li>BDS</li>
              <li>MS</li>
              <li>MD</li>
              <li>MDS and many more</li>
            </ul>
          </div>
          <div className="degree col-lg-6 col-sm-12">
              <h2>Get Your Admission in IIT-JEE<br/>AKTU/NEET</h2>
              <button className="formbutton" ><NavLink to="/documentation" >Apply Now</NavLink></button>
              
          </div>
        </div>
      </div>
    );
  }
}

export default College;
