import React from 'react';
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';
import Contactusform from '../components/Contactusform';
import Applywhat from '../components/Applywhat';

class Consult extends React.Component {
    render() { 
        return <div>
            <Navbar/>
            <Applywhat/>
             <Contactusform/>
            <Footer/>
        </div>;
    }
}
 
export default Consult;