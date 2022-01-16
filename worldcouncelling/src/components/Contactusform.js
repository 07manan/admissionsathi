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
              Office No. 5F, Dayal Tower, Durgakund Rd, opp. Durgakund, <br />
              Padampuri Colony, Durgakund, Jawahar Nagar Colony, Bhelupur,
              <br />
              Varanasi, Uttar Pradesh 221010
            </div>
            <div className="row">
              <div className="col-1" style={{ margin: "10px 0px" }}>
                <i class="fas fa-search-location" />
              </div>
              <div className="container-fluid col-lg-6 col-md-12 col-sm-12 row text-justify">
              <b>Google Maps</b>
                <iframe
                  title="map" className="maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.430158367781!2d82.99668859969674!3d25.289747852139985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e3107ec6c1035%3A0x5fd9f833ac7a1f1d!2sgenesis%20student%20consultants!5e0!3m2!1sen!2sin!4v1642012728609!5m2!1sen!2sin"
                  /* width={600} height={450} style={{border: 0}} */ allowFullScreen
                  loading="lazy"
                />
              </div>
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
