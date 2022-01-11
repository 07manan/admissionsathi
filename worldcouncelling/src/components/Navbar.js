import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg px-2">
          <div className="container-fluid">
            {/* <NavLink className="navbar-brand" to="#">
              Genesis Student Education Consultency
            </NavLink> */}
             <NavLink class="navbar-brand" to="#">
      <img  className="img-fluid" width={250}  src="logo1.jpg" alt="" />

    </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse mx-2"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item mx-3">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item mx-3">
                  <NavLink className="nav-link" to="/about">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item mx-3">
                  <NavLink className="nav-link" to="/services">
                    Services
                  </NavLink>
                </li>
                <li className="nav-item mx-3">
                  <NavLink className="nav-link" to="/consult">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
