import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Applywhat from "../components/Applywhat";
import Medicalclg from "../components/Medicalclg"
import { NavLink } from "react-router-dom";
import "../App.css";

class Medical extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Applywhat />
        <div className="container">
          <div className="ham">
            <h2>Medical</h2>
            <p>
              Jenesis studant Consultancy can help you to find best college
              according your result and intrest
            </p>
            <h2>Here The list of Medical Colleges</h2>
            <Medicalclg/>
            <h3>Assure Your admission in india's top medical Colleges.</h3>
            <div className="container d-flex justify-content-center">
              <NavLink to="/documentation">
                {" "}
                <img className="hambtn" src="apply.jpg" alt="" />{" "}
              </NavLink>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Medical;
