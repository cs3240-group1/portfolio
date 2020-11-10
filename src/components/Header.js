import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Image from './images/logo.png';

function Header() {
    return (
        <div className='mainheader'>
            <div className='logo'>
                <img src={Image}></img>
                <h1>S.T.O.P.S</h1>
            </div>
            <div className="navbar">
                <Link to="/portfolio"><h1>Home</h1></Link>
                <Link to="/portfolio/conception"><h1>Conception</h1></Link>
                <Link to="/portfolio/userstudy"><h1>User study</h1></Link>
                <Link to="/portfolio/prototyping"><h1>Prototyping</h1></Link>
                <Link to="/portfolio/evaluation"><h1>Evaluation</h1></Link>
                <Link to="/portfolio/result"><h1>Result</h1></Link>
                <Link to="/portfolio/aboutus"><h1>About Us</h1></Link>
            </div>
        </div>
    );
}

export default Header;