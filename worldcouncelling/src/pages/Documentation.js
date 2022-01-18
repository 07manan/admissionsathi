import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";

class Documentation extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="documentation">
          <h2>Documentation</h2>
          <p>
            At MERIT, our documentation specialists will ensure that you have
            the proper documents and guide you through the process of preparing
            them at the beginning of the application process. In almost all
            countries the documents to be submitted are similar and should be
            sent to the universities in a particular format. Universities do not
            ask for any original documents.
          </p>
          <ol>
            <li>Degree certificate/ Provisional Certificate:</li>
            <p>
              The student has to either submit his degree or provisional degree
              certificate to the university. The Xerox copies of the
              certificates have to be attested by the Registrar/ Assistant
              Registrar/ Controller of Examinations of the university where the
              student has studied. This is mandatory for USA Universities, and
              the other Countries accept a photocopy of the document.
            </p>
            <li>Transcript:</li>
            <p>
              All universities issue transcripts to students in sealed
              envelopes. It is a single sheet containing all the semester marks
              in it. The student will have to submit the same for each
              university. For UK universities, except a few, this is not
              required.
            </p>
            <li>Semester mark sheets:</li>
            <p>
              Apart from the transcripts the university will also ask for each
              semester marks card which the student can get attested by the
              principal of his college and send it to the university. This
              attestation is not required for almost all the Countries except
              USA. For Germany, you can get the notarized documents.
            </p>
            <li>10+2 and 10:</li>
            <p>
              The photocopies of these mark sheets should be submitted and it
              should be notarized for German Universities.
            </p>
            <li>Recommendation letters:</li>
            <p>
              Recommendation letters should be got from at least 2/3 people.
              These should be from teachers, employers, project guides,
              internship head etc. The content of the letter should be different
              for each person. The same recommendation contents cannot be given
              by different people. There are two modes of recommendation letter
              submission. One is offline which is nothing but Paper
              recommendation letter. They should be typed on the official
              letterhead of the concerned person/institution and put into
              envelopes which must be sealed. The other one is online which is
              submitted electronically. Once the student initiates the online
              application, a recommendation request will be sent to the
              designated recommenders e-mail id. They need to log in and
              complete the required fields and submit it online. Here, the
              student needs to remind them to complete this process ASAP or
              before the application deadline.
            </p>
            <li>TOEFL/ GRE/ GMAT/ SAT/ IELTS:</li>
            <p>
              Photo copies of the score reports must be collected from the
              students.
            </p>
            <li> Statement of Purpose:</li>
            <p>
              This is an academic essay to be written by the student which has
              to describe the student’s interest for the field, preparedness and
              skills for the subject and goals and ambitious as future plans. It
              has to be typed and the length should be around 800-1000 words.
            </p>
            <li>Passport copy of your photo has to be submitted.</li>
            <li>Photographs are required Only for certain Universities.</li>
          </ol>
          <button className="formbutton" ><a href="/" target="_blank" rel="noreferrer" >Proceed to fill Form</a></button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Documentation;
