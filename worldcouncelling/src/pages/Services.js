import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import College from "../components/College";

class Services extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="services">
            <h1>Councelling</h1>
            <p>
              Counseling is a specific process of assistance extended by an
              expert in an individual situation to a needy person. Counseling
              aims at assisting the individual to develop such that he becomes
              psychologically mature and is capable at realizing his
              potentialities optimally. A professional counselor is a highly
              trained individual who is able to use a different range of
              counseling approaches. The process that occurs when a client and
              counselor set aside time, in order to explore difficulties; which
              may include the stressful or emotional feelings of the client.
            </p>
            <h5>Admission counseling</h5>
            <p>
              When deciding for higher studies, there are several questions pose
              in our mind. Through counseling, Genisis helps the education
              aspirants to subside their unlimited queries. Our experienced
              counselors spend valuable time with each student to understand
              their requirements, do the research, match the options and come to
              a best conclusion with suitable option. Genisis provides the best
              counseling and gives authentic and maximum information to the
              prospective students.
            </p>
            <p>Genesis assists students in the following process.</p>
            <ul>
              <li>
                We assist you in short-listing universities and departments
                based on your eligibility. We can evaluate your choice of
                schools and categorize them into safe, moderate and ambitious
                options with regard to admit chances. Our primary criterion on
                short listing is based on a combination of our 15+ years of
                experience, statistic records of our previous students and
                blogs+ web-support.
              </li>
              <li>
                We assist you in preparing your Essays, advise on choice of
                recommenders, financial statement, University specific forms,
                and all other documents pertaining to your application.
              </li>
              <li>
                We file your application Online on your behalf and ensure that
                you are in the loop and kept constantly updated on the process
                so that it becomes understandable to you at the time of your
                visa.
              </li>
              <li>
                We help you in arranging your hard copy documents and assist you
                in couriering the documents with apt documentation.
              </li>
              <li>
                We can assist you in correspondence with the university w.r.t
                missing documents, additional information, interviews (if
                any)..etc.
              </li>
              <li>
                Once you receive more than one offer, we can help you choose the
                right sort of university and most importantly try and connect
                you to our earlier batch of students so that you can take
                support from them too in deciding your university,
                accommodation, etc.
              </li>
              <li>
                We can assist you in planning your finances in the form of
                advise for educational loan, taxation, etc.
              </li>
            </ul>
            <h5>Career Counceling</h5>
            <p>
              While competition is increasing, opportunities and variety of
              careers are also increasing rapidly, there is no such thing as an
              “ideal” career with the best “scope.” If you choose your courses
              of study and your career based on what you are good at, you will
              always be successful. Very often we are pushed into jobs and
              careers which are not suitable for us. To succeed, progress and
              enjoy our work, it is necessary that we should have interest in
              what we are doing, and also have an aptitude for it. Career
              counseling is a professional educational service wherein
              practitioners strive to meet the needs of students in three basic
              educational domains: academic development, career development, and
              personal/social development. This is accomplished through the
              implementation of a comprehensive counseling program that promotes
              and enhances student achievement.
            </p>
            <p>
              Genisis helps the student to realise his / her potentials and
              interests in a particular field and plan the career in a smooth
              way. We help them in assessing their personal characteristics and
              needs, then connecting them with the job market and education
              systems. The career counseling includes a wide variety of
              professional activities which help people deal with career-related
              challenges. Mr. Santosh Neelangatil is an experienced and
              certified counselor in career counseling and an authorized
              Psychometric test administrator from Psytech International. Career
              counseling is offered in various settings, including in groups and
              individually. We work with those who seeking to explore career
              options, career changes and seeking employment.
            </p>
          </div>
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=919795141300 "
          target="_blank"
          rel="noreferrer"
          className="whatsapp-link"
        >
          <img className="whatsapp-link" src="whatsapp-link.png" alt="" />{" "}
        </a>
        <College />
        <Footer />
      </div>
    );
  }
}

export default Services;
