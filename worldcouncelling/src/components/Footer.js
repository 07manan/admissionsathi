import React from 'react';
import "../App.css"

class Footer extends React.Component {
    render() { 
        return <>
        <div className="footer row ">
            <div className="contact col-lg-10">
                    <a target="_blank" rel="noreferrer" >Instagram</a>|
                    <a target="_blank" rel="noreferrer" >Facebook</a>|
                    <a href='mailto:g.c.consultants02gmail.com' target="_blank" rel="noreferrer" >g.c.consultants02gmail.com</a>|
                    <a href='tel:+919795141300' target="_blank" rel="noreferrer" >+91 9795141300</a>|
                    <a href='tel:+917985806900' target="_blank" rel="noreferrer" >+91 7985806900</a>
                    <br/>Copyright © 2022 <a href="#">SAHJANAND Consultancy </a>
            </div>
            <div className="col-lg-2">
                photo
            </div>
        </div>
        </>;
    }
}
 
export default Footer;