import React from 'react';
import './header.css';
import CTA from '../Header/CTA';
import ME from '../../assets/me.png';
import HeaderSocial from '../Header/headersocial';

function header() {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello! I'm</h5>
            <h1>Sandilya Kishlay</h1>
            <h5 className="text_light">Software Developer | @Signam Technologies pvt. ltd.</h5>
            <h5>Gurgaon, Haryana</h5>
            <CTA/>
            <HeaderSocial/>
            <div className="me">
                <img src={ME} alt = ""/>
            </div>
            <a href='#contact' className='scroll__down'>Scroll Down</a>
            
        </div>

    </header>
  )
}

export default header