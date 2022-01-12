import React, { Component } from "react";

export class Contactusform extends Component {
  render() {
    return (
      <div className="enquiry row">
        <div className="col-lg-8 text-justify " style={{ color: "white" }}>
          <h1>Find us at:</h1>
          <p>
            We value your feedback for complains or Compliments. If you have and
            inquiry related our services please submit inquiry form.
          </p>
          {/* <img className="img-fluid" src="genesis.png" alt="" /> */}
          <div className="row address">
            <div className="col-1" style={{ margin: "10px 0px" }}>
              <i class="fas fa-search-location" />
            </div>
            <div className="col-11" style={{ margin: "10px 0px" }}>
              <b>Head Office</b>
              <br />
              Office No. 5F, Dayal Tower, Durgakund, Varanasi, UP
            </div>
            <div className="col-1" style={{ margin: "10px 0px" }}>
              <i class="fas fa-phone"></i>
            </div>
            <div className="col-11" style={{ margin: "10px 0px" }}>
              <b>Contact Person</b>
              <br />
              Sudhish Sharma
              <br />
              <a href="tel:+919795141300" target="_blank" rel="noreferrer">
                {" "}
                +91 9795141300{" "}
              </a>
              <a href="tel:+917985806900" target="_blank" rel="noreferrer">
                +91 7985806900
              </a>
            </div>
            <div className="col-1" style={{ margin: "10px 0px" }}>
              <i class="far fa-envelope"></i>
            </div>
            <div className="col-11" style={{ margin: "10px 0px" }}>
              <a
                href="mailto:g.c.consultants02gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                g.c.consultants02gmail.com{" "}
              </a>
            </div>
          </div>
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
              <p>
                Name:
                <input
                  type="text"
                  name="entry.2005620554"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Full Name"
                />
              </p>
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
