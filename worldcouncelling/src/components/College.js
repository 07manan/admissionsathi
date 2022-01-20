import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

class College extends React.Component {
  render() {
    return (
      <div className="row" id="list">
        <div className="collegesanddegrees  row">
          <h2 style={{ color: "aqua" }}>
            JEE (JOSSA), AKTU (UPSEE), COMED-K, MHCET, WBJEE & OTHER STATES
            COUNSELLING CENTRE
          </h2>
          <h5 style={{ fontFamily:"monospace" }}>
            DIRECT ADMISSION GUIDANCE IN TOP PRIVATE ENGINEERING COLLEGE IN
            PUNE, BANGLORE, GRETER NOIDA,
            CHENNAI, JAIPUR, LUCKNOW, ALLAHABAD, VARANASI ETC.
          </h5>
          <h1>Our courses</h1>
          <div className="degree col-lg-6 col-sm 12">
            <ul>
              <li>Engineering</li>
              <li>Polytechnic</li>
              <li>MBA/PGDM</li>
              <li>MCA</li>
              <li>BBA/BCA</li>
              <li>Hotel Management</li>
              <li>B. Pharma/M. Pharma</li>
              <li>Bio-tech</li>
            </ul>
          </div>
          <div className="degree col-lg-6 col-sm 12">
            <ul>
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
          <button className="formbutton">
            <NavLink to="/documentation">Apply Now</NavLink>
          </button>
        </div>
      </div>
    );
  }
}

export default College;
