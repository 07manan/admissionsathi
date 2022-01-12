import React from 'react';
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';
import College from '../components/College';

class Services extends React.Component {
    render() { 
        return <div>
            <Navbar/>
            <College/>
            <Footer/>
        </div>;
    }
}
 
export default Services;