import React, { Component } from "react";

export class Contactusform extends Component {
  render() {
    return (
      <div className="enquiry row">
        <div className="col-lg-8 text-justify " style={{ color: "white" }}>
          <p>Div 1 rich us info</p>

          <img className="img-fluid" src="genesis.png" alt="" />
        </div>

        <div className="col-lg-4 text-justify">
          <form
            target="_blank"
            rel="noreferrer"
            action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSczKZFQ1VLscnUI1pg1ftNvwO0TSUMZUmkSuiI2M7avpKr74A/formResponse"
          >
              <h2>Quick Enquiry!</h2>
            <p>
              Hi there! Welcome to the genesis students consultant family. I am
              glad that you are doing enquiry for this.I am happy to help for
              achiving your career goal. Our team will contact you ASAP.
            </p>
            <div className="form-group">
              <p>Name:<input
                type="text"
                name="entry.2005620554"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Full Name"
              /></p>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail">Email:</label>
              <input
                type="email"
                name="entry.1045781291"
                className="form-control"
                id="exampleInputEmail"
                placeholder="Enter Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPhoneNo">Phone Number:</label>
              <input
                type="tel"
                className="form-control"
                name="entry.1166974658"
                id="exampleInputPhoneNumber"
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputAddress">Address:</label>
              <input
                type="text"
                name="entry.1065046570"
                className="form-control"
                id="exampleInputAddress"
                placeholder="Enter Address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputComments">Comments:</label>
              <input
                type="text"
                className="form-control"
                name="entry.839337160"
                id="exampleInputComments"
                placeholder="Enter Comments"
              />
            </div>
            <div className="container d-flex justify-content-center">
              <button
                type="submit"
                target="_blank"
                rel="noreferrer"
                className="submitbtn"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contactusform;
