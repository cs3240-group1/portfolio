import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FcCollaboration } from "react-icons/fc";
import { Link } from 'react-router-dom';
import './style.css';

import Sean from "../components/images/sean.png";
import Daryl from "../components/images/darylaboutus.jpg";
import XinPei from "../components/images/xinpeiaboutus.jpg";
import Roby from "../components/images/robyaboutus.jpg";

const AboutUs = () => {
    return(
        <div>
            <Header />
            <div className="content">
                <h2>Team creation <FcCollaboration /></h2>
                <p className="subtitle">How did this team came to be?</p>
                <p>We are all friends that wanted to learn more about designs and user interaction. This idea came from Roby's idea presentation
                during the first lecture which won 1st place in his breakout room. We decided to work on this idea from there because it's quite
                applicable to our daily lives.</p>
            </div>
            <div className="content">
                <h2>Team members</h2>
                <p className="subtitle">Who are the people behind S.T.O.P.S?</p>
                <h3>Daryl Goh Zheng Yuan</h3>
                <img className="contentimage" src={Daryl}></img>
                <p className="caption">Lead designer for this project</p>
                <p>Daryl Goh Zheng Yuan, armed with knowledge from previous design mods, gave us a lot of insights when it comes to designing.
                He managed to create a very competent prototype with sensible design choices which helped us a lot during our prototyping stage.
                If we were to say something about Daryl, it would be a crime to not mention his design skills.</p>
                <h3>Roby Tanama</h3>
                <img className="contentimage" src={Roby}></img>
                <p className="caption">Creative director in charge of ideas</p>
                <p>Roby Tanama, one of the most unusual member we have in our team. He always challenged us with outlandish ideas that pushes
                the boundaries of how we should design our project. He always keeps our morale up and his go-getter attitude helps us maintain our 
                progress throughout this whole semester.</p>
                <h3>Sean Low Jun Kai</h3>
                <img className="contentimage" src={Sean}></img>
                <p className="caption">Absolute hustler</p>
                <p>Sean Low Jun Kai is nothing if not hardworking and talented. He always volunteers to contribute to our project and his hardworking
                attitude motivates us to put in maximum effort in this project. Thank you Sean!</p>
                <h3>Ng Xin Pei</h3>
                <img className="contentimage" src={XinPei}></img>
                <p className="caption">Best teammate you could have ever asked for</p>
                <p>Ng Xin Pei always guides us when we are struggling with the in-lecture exercises. She pays extra attention to our lecture contents and
                helps us to understand them better to be applied on our project.</p>
            </div>
            <div className="buttonContainer">
                <h4>Thank you for reading our portfolio!</h4>
                <Link to="/portfolio"><button>Back to homepage</button></Link>
            </div> 
            <Footer />
        </div>
    )
}

export default AboutUs;
