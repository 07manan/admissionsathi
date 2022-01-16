import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";

class About extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="about">
          <h3>About</h3>
          <h2>Who are we?</h2>
          <p>
            We assist students to select right career option according to
            interest, attitude ,abilities. First we check candidate interest and
            eligibility of his choosen course ,then offer him/her range of
            universities within India. After getting eligibility certificate ,we
            insist student to submit documents and fees in respective college
            account. We bring students and parents to the college when session
            starts and we facilitate them accommodation facilities like Hostel,
            bank account ,sim card, make introduction of senior Gujarati
            students,Staff ,Director and trusteesWe regularly visit campus and
            make small get to gather and celebrates party /Festival with
            students and pass messsagesto students attendance report ,Progress
            report to parents .
          </p>
          <p>
            Karnataka is famous and hot favourite destination for Education. It
            is well known for quality of education ,Faculties ,Placement and for
            infrastructure.The students first prefer to take admission in
            Banglore,Manglore,Davangere,Dharwad,Belgaum centrein karanataka.All
            Medical ,Dental ,Ayurvedic,Homeopathic ,Pharmacy ,Nursing colleges
            affiliated to Rajiv Gandhi University of Health Science ,Banglore.
          </p>
          <p>
            We also admit students in Management Quota at Pune ,Bombay
            ,Nasik,Kolhapur,Karad,Bhopal,Jaipur and Udaipur.We enrol students in
            premier institutions of India Like DY Patil University,Bharti
            Vidhyapeeth,MGM ,Krishna Karad,Ramaiyah /Dayanand Sagar ,PES
            /Rajarajeswari University Banglore,Sagar/Oriental University Bhopal,
            Geetanjai /Pacific University Udaipur ,Mahatma Gandhi /NIMS/JNU
            University in Jaipur .
          </p>
          <p>
            We offered full range of admission services packages including
            different National and different states Counselling form,Choce
            filling,Participation in different counselling round,Mop round,Stray
            Round till allotment letter of Confirmed admission and reporting of
            Institutions.
          </p>
        </div>
        <Footer />
      </>
    );
  }
}

export default About;
