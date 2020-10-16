import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import './Home.css';

import Group from '../components/images/Group1.png';
import Idea from '../components/images/idea.png';

function Home() {
    return (
        <div>
            <Header />
            <div className="groupintro">
                <img src={Group}></img>
                <div className="quote">
                    <img src={Idea}></img>
                    <p>"To create a perfect design, we must look into our hearts" <br></br>-Sean Low Jun Kai</p>
                </div>
            </div>
            <div className="homecontent">
                <h1>Welcome to our cozy little website!</h1>
                <p>Your journey towards learning how S.T.O.P.S was created starts here. We hope that you have an enjoyable time here and
                hopefully learn more about how we created our project.</p>
                <Link to="/portfolio/conception"><button>Begin Journey</button></Link>
            </div>
        </div> 
    );
}

export default Home;