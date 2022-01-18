import React from 'react';
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';
import College from '../components/College';

class Services extends React.Component {
    render() { 
        return <div>
            <Navbar/>
            <a href="https://api.whatsapp.com/send?phone=919795141300 " target="_blank" rel="noreferrer" className="whatsapp-link"><img className="whatsapp-link" src="whatsapp-link.png" alt=""/> </a>
            <College/>
            <Footer/>
        </div>;
    }
}
 
export default Services;