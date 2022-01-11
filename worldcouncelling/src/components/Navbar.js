import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg px-2">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="#">
              World Consultency
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
                    to="#"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item mx-3">
                  <NavLink className="nav-link" to="#">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item mx-3">
                  <NavLink className="nav-link" to="#">
                    Services
                  </NavLink>
                </li>
                <li className="nav-item mx-3">
                  <NavLink className="nav-link" to="#">
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
