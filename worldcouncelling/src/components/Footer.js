import React from 'react';
import "../App.css"

class Footer extends React.Component {
    render() { 
        return <>
        <div className="footer row ">
            <div className="contact col-lg-10">
                <ul>
                    <li><a target="_blank">Instagram</a></li>
                    <li><a target="_blank" >Facebook</a></li>
                    <li><a href='mailto:g.c.consultants02gmail.com' target="_blank">g.c.consultants02gmail.com</a></li>
                    <li><a href='tel:+919795141300' target="_blank">+91 9795141300</a></li>
                    <li><a href='tel:+917985806900' target="_blank">+91 7985806900</a></li>
                </ul>
            </div>
            <div className="col-lg-2">
                photo
            </div>
        </div>
        </>;
    }
}
 
export default Footer;