import React from 'react';
import Navbar from "../components/Navbar"
/* import Footer from '../components/Footer'; */
import Contactusform from '../components/Contactusform';

class Consult extends React.Component {
    render() { 
        return <div>
            <Navbar/>
             <Contactusform/>
            {/* <Footer/> */}
        </div>;
    }
}
 
export default Consult;