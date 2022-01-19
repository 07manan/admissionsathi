import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";

class FAQ extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="accordion container" id="accordionExample">
          <h1>FAQs</h1>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                What should you consider when choosing what and where to study?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                When considering what and where to study, Genisis higher Education
                counsellor will match your academic interests and your career
                goals with course information from universities and institutions
                across the world. It is very important that you think about the
                convenience of the study location for you, the institution’s
                ranking, the amount of time you would like to spend away from
                home and the total cost of studying and living overseas. Your
                counsellor will be able to guide you on the courses,
                institutions and locations that best meet your preferences.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                What financial Support is available?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                There are a limited number of scholarships and bursaries
                available for international students. The amount varies by level
                of study and by institution. Scholarships are competitive and
                you need to demonstrate exceptional academic achievements.
                Governments and other organisations also provide a number of
                scholarships and awards to help international students study
                overseas.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                What opportunities are there for working and studying at the
                same time?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                The opportunity for students to work part-time during their
                studies varies from country to country. Many universities have a
                dedicated job centre on-campus for students that advertise job
                opportunities to help students develop skills. The university
                careers service is also a useful source of information. If you
                pursue a course at degree level or above you may be permitted to
                work while on an international student visa.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingfour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefour"
                aria-expanded="false"
                aria-controls="collapsefour"
              >
                When should I begin the application process for my studies?
              </button>
            </h2>
            <div
              id="collapsefour"
              className="accordion-collapse collapse"
              aria-labelledby="headingfour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                It is recommended you begin your application process at least a
                year in advance to give enough time for your applications to be
                processed and to prepare for your time overseas.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingfive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefive"
                aria-expanded="false"
                aria-controls="collapsefive"
              >
                What documents are required?
              </button>
            </h2>
            <div
              id="collapsefive"
              className="accordion-collapse collapse"
              aria-labelledby="headingfive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                You would need your academic documents, passport copy, statement
                of purpose, letter of recommendations, essays (if any) to start
                the application process. Please consult your study abroad
                counsellor at Genisis Higher Education Consultants for guidance.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingsix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsesix"
                aria-expanded="false"
                aria-controls="collapsesix"
              >
                How much time does the entire procedure take?
              </button>
            </h2>
            <div
              id="collapsesix"
              className="accordion-collapse collapse"
              aria-labelledby="headingsix"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                The average time taken is anywhere between 8 to 12 weeks
                depending on the individual case, so the students need to apply
                for their application at least 3 months prior to their course
                commencement. The process can be quicker for certain countries.
                Please consult your study abroad counsellor at Genisis Higher
                Education Consultants for guidance.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingseven">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseseven"
                aria-expanded="false"
                aria-controls="collapseseven"
              >
                What are the various mode of payment accepted here?
              </button>
            </h2>
            <div
              id="collapseseven"
              className="accordion-collapse collapse"
              aria-labelledby="headingseven"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                You can make payment Via Cash, Master Card, Visa Card, Debit
                Cards, Cheques, Credit Card.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingeight">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseeight"
                aria-expanded="false"
                aria-controls="collapseeight"
              >
                Which is the nearest landmark ?
              </button>
            </h2>
            <div
              id="collapseeight"
              className="accordion-collapse collapse"
              aria-labelledby="headingeight"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                You can easily locate the establishment as it is in close
                proximity to Near Durgakund Mandir
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingnine">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsenine"
                aria-expanded="false"
                aria-controls="collapsenine"
              >
                What are its hours of operation ?
              </button>
            </h2>
            <div
              id="collapsenine"
              className="accordion-collapse collapse"
              aria-labelledby="headingnine"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                The establishment is functional on Monday: 10:00 AM - 9:00 Pm
                Tuesday: 10:00 AM - 9:00 pm Wednesday: 10:00 Am - 9:00 Pm
                Thursday: 10:00 AM - 9:00 pm Friday: 10:00 AM - 9:00 Pm
                Saturday: 10:00 Am - 9:00 Pm Sunday: 10:00 Am - 9:00 Pm
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default FAQ;
