import React from 'react';
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';
import Contactusform from '../components/Contactusform';
import Maps from '../components/Maps';

class Consult extends React.Component {
    render() { 
        return <div>
            <Navbar/>
             <Contactusform/>
             <Maps/>
            <Footer/>
        </div>;
    }
}
 
export default Consult;