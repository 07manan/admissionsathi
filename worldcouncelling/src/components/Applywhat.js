import React from 'react';
import { NavLink } from "react-router-dom";


export default function Applywhat() {
  return <>
   <a
        href="https://api.whatsapp.com/send?phone=919795141300 "
        target="_blank"
        rel="noreferrer"
        className="whatsapp-link"
      >
        <img className="whatsapp-link" src="whatsapp-link.png" alt="" />{" "}
      </a>
      <NavLink to="/documentation" > <img className="apply" src="apply.jpg" alt="" /> </NavLink>
  </>;
}
