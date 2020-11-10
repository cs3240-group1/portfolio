import React from 'react';
import Logo from "./images/logo.png";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footerContainer">
            <img src={Logo}></img>
            <div className="verticalLine"></div>
            <div className="footerContent">
                <p>All content of this website is property of Group 1 of CS3240 AY 2021 S1. Any attempt to 
                copy or reuse content from this website requires explicit permission from a member of this group.
                Failure to do so will result in legal actions taken against the offending personnel.</p>
                <p>All images used are either original images or taken from flaticons. Any attempt to misuse will result in legal actions.
                Keep in mind that in under no circumstances shall our original pictures be reused anywhere.
                Contact us at tanamaroby@gmail.com for requests or for any additional information.</p>
            </div>       
        </div>
    );
}

export default Footer;
