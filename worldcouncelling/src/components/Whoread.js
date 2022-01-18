import React from 'react'
import { NavLink } from "react-router-dom";

export default function Whoread() {
    return (
        <div className="about row">
        <div className="col-8">   
        <h2>Who are we?</h2>
        <p>
          Genesis Students Consultants in Varanasi is one of the leading
          businesses in the Colleges. Also known for Colleges, D Pharma
          Colleges, Nursing Institutes, Pharmacy Colleges, Admission
          Consultants, Paramedical Institutes, B Sc Nursing Colleges,
          Polytechnic Colleges and much more. Find Address, Contact Number,
          Reviews & Ratings, Photos, Maps of Genesis Students Consultants,
          Varanasi.
        </p>
        <h2>Location and Overview:</h2>
        <p>
          Established in the year 2003, Genesis Students Consultants in
          Durgakund, Varanasi is a top player in the category Colleges in the
          Varanasi. This well-known establishment acts as a one-stop
          destination servicing customers both local and from other parts of
          Varanasi. Over the course of its journey, this business has
          established a firm foothold in it’s industry. The belief that
          customer satisfaction is as important as their products and
          services, have helped this establishment garner a vast base of
          customers, which continues to grow by the day. This business employs
          individuals that are dedicated towards their respective roles and
          put in a lot of effort to achieve the common vision and larger goals
          of the company. In the near future, this business aims to expand its
          line of products and services and cater to a larger client base. In
          Varanasi, this establishment occupies a prominent location in
          Durgakund. It is an effortless task in commuting to this
          establishment as there are various modes of transport readily
          available. It is at Durgakund Road, Near Durgakund Mandir, which
          makes it easy for first-time visitors in locating this
          establishment. It is known to provide top service in the following
          categories: Colleges, D Pharma Colleges, Nursing Institutes,
          Pharmacy Colleges, Admission Consultants, Paramedical Institutes, B
          Sc Nursing Colleges, Polytechnic Colleges. Read more about us <NavLink to="/about" >read more...</NavLink>
        </p>
        </div>
        <div className="col maps">
      <h2 className="text-center">Chairmain's message</h2>
      <div className="text-center"><img src="chair.jpg" alt="..." className='w-50 justify img-thumbnail' /></div>
      <p className='text-justify'>
        All 0f us have ability to delve deep into the realms of our mind and
        find our impression about this world as well as our experiences . Some
        of them turned into beautiful expression by the creative minded. Though
        unpolished ,a gem can be spotted by an expert. At Genesis we provide
        platform for the aspirants to get genuine guidance regarding their
        admission in professional courses .
      </p>
      <p className="text-justify">  
        We sincerely want to work together to give the students their choice of collage where they build the framework for their future
      </p>
    </div>
      </div>
    )
}
