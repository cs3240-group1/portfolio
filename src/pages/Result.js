import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FcTimeline, FcShipped } from "react-icons/fc";
import { Link } from 'react-router-dom';
import "./style.css";

import AddReminderBefore from "../components/images/addreminderbefore.png";
import AddReminderAfter from "../components/images/addreminderafter.png";
import Discord from "../components/images/discord.png";
import XinPei from "../components/images/xinpei.jpg";

function Result() {
    return (
        <div>
            <Header />
            <div className="content">
                <h2>Changes from evaluation <FcTimeline /></h2>
                <p className="subtitle">What changes did we make to our main prototype?</p>
                <h3>Main changes</h3>
                <p>We found out that having the option to add reminder from the homepage can confuse some users and thus, we decided to remove this feature.
                Now, users are only able to manage their reminders from the reminders page.</p>
                <p>We also found out that the adding reminder popup has word choices that confused some people. 
                We switched the wording from "fixed reminder" to "permanent reminder".</p>
                <img className="contentimage" src={AddReminderBefore}></img>
                <p className="caption">We used fixed reminder before which some people find confusing</p>
                <img className="contentimage" src={AddReminderAfter}></img>
                <p className="caption">We changed it to permanent reminder which the evaluators agreed is clearer</p>
                <p>We also make it easier to set a reminder to only ring once. We found out that some people might only want a singular reminder.</p>
            </div>
            <div className="content">
                <h2>Final result <FcShipped /></h2>
                <p className="subtitle">How did our final product turn out?</p>
                <h3>Development</h3>
                <p>
                    We had the whole team working all nighters to fix our prototype based on the results of our evaluation. We wanted to make sure
                    that we make our prototype as interactive as possible due to the fact that we are unable to create a working front-end implementation
                    of the prototype due to time crunch.
                </p>
                <img className="contentimage" src={XinPei}></img>
                <p className="caption">Our team member Xin Pei attempting to implement working front-end prototype</p>        
                <p>
                    Ultimately, after long discussion, we decided not to go through with the front-end implementation due to very tight schedule from
                    other modules. 
                </p>        
                <img className="contentimage" src={Discord}></img>
                <p className="caption">The team discussing how to proceed on discord</p>
                <p>
                    Our final result is a high-fidelity prototype on figma which showcased our main features. 
                </p>
                <a href="https://www.figma.com/proto/Ufk4DElMg3CPWldccEm92t/Prototyping?node-id=188%3A5781&scaling=min-zoom"><button style={{
                    marginLeft: "0px"
                }}>Main prototype</button></a>
                <p>
                    This concludes our design portfolio. Thank you so much for going on this journey with us and for showing interest on the 
                    creation of S.T.O.P.S. By the way, if you are wondering what S.T.O.P.S means, it basically means Sitting Too Overrated Please Stand.
                </p>
            </div>
            <div className="buttonContainer">
                <h4>Take a look at the team behind S.T.O.P.S</h4>
                <Link to="/portfolio/aboutus"><button>About us</button></Link>
            </div>
            <Footer />
        </div> 
    );
}

export default Result;