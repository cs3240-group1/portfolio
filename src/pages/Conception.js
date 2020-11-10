import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FcIdea, FcAutomatic } from "react-icons/fc";
import { Link } from 'react-router-dom';
import "./style.css";

import IntroPic1 from "../components/images/introductionpic.jpg";

function Conception() {
    return (
        <div>
            <Header />
            <div className="content">
                <h2>Introduction <FcIdea /></h2>
                <p className="subtitle">Why did we decide on this idea?</p>
                <img className="contentimage" src={IntroPic1}></img>
                <p className="caption">Our first-ever discussion conduction by Sean in the seminar room</p>
                <p>
                We have noticed that sedentary lifestyle during working hours is not uncommon amongst the 
                working and student population. However, this has been compounded as the new normal in 2020, 
                with the pandemic causing the majority of people to work from home as well as engage in home-based learning.
                </p>
                <p>
                We came together to generate an idea to alleviate those pains that come as a result of this increasingly prevalent lifestyle. 
                The portfolio we have now is a result of our research, ideation, prototyping and evaluation.
                </p>
            </div>
            <div className="content">
                <h2>Problem statement <FcAutomatic /></h2>
                <p className="subtitle">What are we trying to solve?</p>
                <p>
                The pandemic has resulted in a lot of students and office workers having to work from home. 
                As a result, they tend to spend most of their time at their desks, in front or their computers, 
                to complete the tasks necessary for the week. 
                </p>
                <p>
                This has resulted in a sedentary lifestyle, which may affect a person’s health detrimentally in 
                a number of ways. Effects such as dehydration, back pain, as well as leg cramps are some causes for
                discomfort that arise from a sedentary lifestyle.
                </p>
                <h3>Current market solution</h3>
                <p>
                On the market, there is a distinct lack of options available that targets the sedentary lifestyle of users. 
                Alternatives like health applications do not tackle the root cause of the problem, which is the sedentary nature of our active/working hours. 
                Applications primarily focus on exercise and health which simply would not work during active/working hours where one is in a state of concentration.
                </p>
            </div>
            <div className="buttonContainer">
                <h4>Find out how we research our target users!</h4>
                <Link to="/portfolio/userstudy"><button>Conducting user study</button></Link>
            </div>   
            <Footer />
        </div> 
    );
}

export default Conception;