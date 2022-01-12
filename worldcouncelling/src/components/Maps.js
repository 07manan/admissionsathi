import React, { Component } from 'react'

export default class Maps extends Component {
    render() {
        return (
            <div className='container-fluid row maps text-justify'>
        <div className='col-lg-12 '></div>
                    <iframe title='map'  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.430158367781!2d82.99668859969674!3d25.289747852139985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e3107ec6c1035%3A0x5fd9f833ac7a1f1d!2sgenesis%20student%20consultants!5e0!3m2!1sen!2sin!4v1642012728609!5m2!1sen!2sin" /* width={600} height={450} style={{border: 0}} */ allowFullScreen loading="lazy" />
            </div>
        )
    }
}
