import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FcConferenceCall, FcOnlineSupport, FcApproval, FcList, FcRating } from "react-icons/fc";
import { Link } from 'react-router-dom';
import "./style.css";

import Student from '../components/images/student.jpg';
import Interview from '../components/images/interview.jpg';
import DemographicsSurvey1 from '../components/images/demographicssurvey1.png';
import DemographicsSurvey2 from '../components/images/demographicssurvey2.png';
import ReasonSurvey1 from "../components/images/reasonsurvey1.png";
import ProblemSurvey1 from "../components/images/problemsurvey1.png";
import Kyle from "../components/images/kyle.png";
import Karen from "../components/images/karen.png";

function Userstudy() {
    return (
        <div>
            <Header />
            <div className="content">
                <h2>Demographics <FcConferenceCall /></h2>
                <p className="subtitle">Who did we do our study on?</p>
                <p>
                Sedentary lifestyle is particularly prevalent amongst working adults and young adults in the midst of schooling. 
                As mentioned earlier, COVID-19 resulted in many of these people having to work from home and sit in 
                front of their desks for long periods of time. 
                </p>
                <img className="contentimage" src={Student}></img>
                <p className="caption">Roby doing research on our main target demographics</p>
                <div style={{
                    display: 'flex',
                    alignItems: "center",
                }}>
                    <p style={{
                        marginBottom: '0px',
                        marginTop: '0px'
                    }}>Our main target demographics will be</p>
                    <h3 style={{
                        marginLeft: '10px',
                        marginBottom: '0px',
                        marginTop: '0px'
                    }}>Office workers and university students.</h3>
                </div>
                <p>We specifically chose these people as our main demographics because we deduced that working / studying from home 
                is more likely to result in people adopting a sedentary lifestyle. Our main goal in this user study process would be to 
                find out the prevalence of sedentary lifestyle in our target demographics, and also to find out 
                what causes this lifestyle and problems that it brings.</p>
            </div>
            <div className="content">
                <h2>Interview <FcOnlineSupport /></h2>
                <p className="subtitle">How did we conduct our interview and what did we find?</p>
                <img src={Interview} className="contentimage"></img>
                <p className="caption">The team conducting the interview through zoom due to COVID-19 (name of participant blocked for privacy)</p>
                <p>
                    We decided to conduct interviews to get a better understanding of the problems that our main demographics face due to sedentary lifestyle.
                </p>
                <h3>Demographics</h3>
                <p>We interviewed 2 groups of people, students and working adults. The age of interviewees ranged from 
                21 to 25 years old. The students are either from NUS Computing or NTU Engineering while the working adults
                comprised of ex-colleagues.</p>
                <h3>Findings</h3>
                <p>
                    Interviewees spent an average of 6 hours daily in front of the computer. The average amongst students was found to be 
                    higher than working adults due to home-based learning. Most of the interviewees stated that the main reason for them being 
                    desk-bound is because of school / work. However, some also stated that they use computers for leisure. 
                </p>
                <h3>Detrimental effects</h3>
                <p>
                Most interviewees reported having muscle sores and back pain after spending a long time in front of the computer. Some cited having headaches 
                and neck stiffness as well. Some did not experience any detrimental effects, but they represent the minority.
                It can be concluded that this made the interviewees more restless during sedentary periods at work / study,  and ultimately 
                can be seen to negatively affect their daily lifestyle.
                </p>
                <h3>Proposed solution <FcApproval /></h3>
                <p>
                Interviewees mentioned that having some form of reminder to prompt them to take breaks in between their working hours would be ideal. 
                Some suggested that having something teach them to form better habits would also be good.
                </p>
            </div> 
            <div className="content">
                <h2>Survey <FcList /></h2>
                <p className="subtitle">How did we do our surveys and what did we find?</p>
                <p>
                    We decided to conduct survey too in order to validate the findings we obtained from the interviews.
                </p>
                <h3>Demographics</h3>
                <p>Most of the respondents are between the age of 19 to 25 and most are students with a few office managers and graphic designers.</p>
                <img className="contentimage" src={DemographicsSurvey1}></img>
                <p className="caption">Survey result showing the age demographics</p>
                <img className="contentimage" src={DemographicsSurvey2}></img>
                <p className="caption">Survey result showing the occupation demographics</p>
                <h3>Reason for being desk-bound</h3>
                <p>
                    We asked this question to confirm our findings from the interview that work is the main reason for people to become desk-bound.
                </p>
                <img className="contentimage" src={ReasonSurvey1}></img>
                <p className="caption">This survey result confirms that assignments / work is the main reason people are desk-bound</p>
                <h3>Detrimental effects</h3>
                <p>
                    We want to find out whether the main problems stated by our interviewees are also faced by a larger group of people.
                </p>
                <img className="contentimage src" src={ProblemSurvey1}></img>
                <p className="caption">This shows that majority of people feels restless and also experiencing muscle soreness and back pain</p>
                <p>
                    This survey result confirms that majority of people feels some sort of pain when living a sedentary lifestyle and therefore, this
                    shows that the problem that we are trying to solve occurs in most people.
                </p>
            </div>
            <div className="content">
                <h2>User persona <FcRating /></h2>
                <p className="subtitle">What are the final findings from our study?</p>
                <p>We created persona to represent the different user types that we have which are university student, and office worker. This way, we can formulate 
                solution based on the personas that we have created to prevent us from going off track. This should help us gain a better understanding of our users' needs, 
                experienced, behaviors, and goals.
                </p>
                <h3>Kyle persona</h3>
                <img className="contentimage" src={Kyle} style={{
                    width: '100%',
                    height: 'auto'
                }}></img>
                <p className="caption">Kyle, university student persona</p>
                <h3>Karen persona</h3>
                <img className="contentimage" src={Karen} style={{
                    width: '100%',
                    height: 'auto'
                }}></img>
                <p className="caption">Karen, office worker persona</p>
            </div>
            <div className="buttonContainer">
                <h4>Check out how we prototype our solution!</h4>
                <Link to="/portfolio/prototyping"><button>Creating prototypes</button></Link>
            </div>
            <Footer />
        </div> 
    );
}

export default Userstudy;
