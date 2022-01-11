import React, { Component } from 'react'

export class Contactusform extends Component {
    render() {
        return (
            <div className='container row' >
                <div className="col-lg-9 text-justify " style={{color:'white'}}>
                    <p>
                        Div 1 rich us info 
                    </p>
 
<img  className="img-fluid"  src="genesis.png" alt="" />
                </div>

                   <div className="col-lg-3 text-justify">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSczKZFQ1VLscnUI1pg1ftNvwO0TSUMZUmkSuiI2M7avpKr74A/viewform?embedded=true" width={440} height={500} frameBorder={2} marginHeight={0} marginWidth={0}>Loading…</iframe>
                </div>
            </div>
        )
    }
}

export default Contactusform

