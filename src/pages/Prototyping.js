import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FcPortraitMode, FcReadingEbook, FcGallery, FcHome, FcCollaboration } from "react-icons/fc";
import { Link } from 'react-router-dom';
import "./style.css";

import Daryl from "../components/images/daryl.jpg";
import DarylHomepage from "../components/images/Homepage.png";
import DarylReminder from "../components/images/reminders.png";
import Roby from "../components/images/roby_4.jpg";
import RobyHomepage from "../components/images/robyhomepage.png";
import RobyReminder from "../components/images/robyreminders.png";
import Sean from "../components/images/sean.png";
import SeanHomepage from "../components/images/seanhomepage.png";
import SeanReminder from "../components/images/seanreminders.png";
import SeanProfile from "../components/images/seanprofile.png";
import XinPei from "../components/images/xinpeipic.jpg";
import XinPeiHomepage from "../components/images/xinpeihomepage.png";
import XinPeiTracker from "../components/images/xinpeitracker.png";
import DarylDiscussion from  "../components/images/daryldiscussion.jpg";

function Prototyping() {
    return (
        <div>
            <Header />
            <div className="content">
                <h2>Design thought process <FcPortraitMode /></h2>
                <p className="subtitle">What did we think about when developing our prototype?</p>
                <p>
                    We decided that each member should come up with 1 prototype. This allowed us to have a lot of 
                    alternative design choices when deciding what our final design prototype should look like. 
                    Afterwards, we discussed among ourselves the best aspects and problems from each prototype and 
                    finally, come up with a consolidated group prototype.
                </p>
            </div>
            <div className="content">
                <h2>Daryl's prototype <FcReadingEbook /></h2>
                <p className="subtitle">How did Daryl come up with his design?</p>
                <img className="contentimage" src={Daryl}></img>
                <p className="caption">"Keep it simple but don't be afraid to add more features" -Daryl</p>
                <a href="https://www.figma.com/file/Ufk4DElMg3CPWldccEm92t/Prototyping?node-id=28%3A5"><button style={{
                    marginLeft: "0px"
                }}>Daryl's prototype</button></a>
                <h3>Conception</h3>
                <p>
                My philosophy was to create an interface which would allow users to complete the main user flows in as little steps as possible. 
                This is such because I thought that if users are using an interface with such an intention, it has to be as easy and pleasant to use as possible, 
                such that it evokes a positive user experience which would encourage them to use it more. 
                </p>
                <h3>Designing</h3>
                <p>
                I started designing the dashboard with the idea of providing the essential information that the user would want to know. 
                I identified 3 areas to provide information, bearing in mind that the resolution would be small, considering that S.T.O.P.S 
                is supposed to be a windows application. This is reflected in the 3 distinct portions in the prototype. 
                </p>
                <img className="contentimage" style={{
                    width: '60%',
                    height: 'auto'
                }} src={DarylHomepage}></img>
                <p className="caption">Screenshot of Daryl's homepage</p>
                <p>
                The right consists of a timeline of reminders that are set to go off that day. I figured that a user would like to see what reminders they had in the day,
                as well as being able to toggle a reminder should there be a particular reminder they did not want that day. The bottom shows the 
                number of times a reminder has been successfully acted upon (the user has to acknowledge that they have done it), which allows them 
                to see their progress on that day. Lastly, the top would tell users how many types of reminders they set for the day, as well as a fun 
                fact of the day to enhance the user experience.
                </p>
                <img className="contentimage" style={{
                    width: '60%',
                    height: 'auto'
                }} src={DarylReminder}></img>
                <p className="caption">Screenshot of Daryl's reminder page</p>
                <p>
                The reminder page simply holds all the reminders set. Days are easy to toggle as I figured that users might want the flexibility 
                to toggle days according to their own schedule. Allowing users to customize through colour coding and choosing their own icon would 
                also help enhance the user experience.
                </p>
                <h3>Conclusion</h3>
                <p>
                Overall, my design is focused on making sure the interface is easy to use and pleasant to look at, and this 
                is reflected in the way the user flow is designed as well as the aesthetic design choices (negative space, colour palette, etc).
                </p>
            </div>
            <div className="content">
                <h2>Roby's prototype <FcReadingEbook /></h2>
                <p className="subtitle">What was Roby thinking when he designed his prototype?</p>
                <img className="contentimage" src={Roby}></img>
                <p className="caption">"Sometimes the craziest idea might just work!" -Roby</p>
                <a href="https://www.figma.com/file/Ufk4DElMg3CPWldccEm92t/Prototyping?node-id=0%3A1"><button style={{
                    marginLeft: "0px"
                }}>Roby's prototype</button></a>
                <h3>Conception</h3>
                <p>
                    I wanted to make a simple desktop app with minimal features so as not to overwhelm the users. However, I want the app 
                    to have a personality, things like welcome messages and personalized features. I believe that having these minor elements can greatly 
                    increase the appeal of the application.
                </p>
                <h3>Designing</h3>
                <p>
                I settled with having 3 pages: dashboard, reminder page, and profile page.
                </p>
                <img className="contentimage" style={{
                    width: '60%',
                    height: 'auto'
                }} src={RobyHomepage}></img>
                <p className="caption">Screenshot of Roby's homepage</p>
                <p>
                The dashboard is meant to be the main page where users are to spend the most time in. It contains all the necessary 
                information for that specific usage period such as Today’s Usage statistics which shows the reminders done for today. 
                The dashboard also contains reminders that the users have highlighted so that the important reminders can be easily found. 
                </p>
                <img className="contentimage" style={{
                    width: '60%',
                    height: 'auto'
                }} src={RobyReminder}></img>
                <p className="caption">Screenshot of Roby's reminder page</p>
                <p>
                The reminders page serves as a manager for the reminders. This page will display all the reminders that the user has 
                and also the Highlighted reminder tab which is the same as the one found in the dashboard. 
                The user can easily drag and drop the reminders into the Highlighted reminder tab so modify its contents. 
                This drag and drop feature makes reminder management a lot easier rather than clicking on individual reminders and modifying its location.
                </p>
                <h3>Conclusion</h3>
                <p>
                    Overall, I am trying to make the application as simple as possible. I make sure every page has as many familiar elements with one another as possible
                    but with clear indicator on each page so that users do not get confused.
                </p>
            </div>
            <div className="content">
                <h2>Sean's prototype <FcGallery /></h2>
                <p className="subtitle">What design choices did Sean take when creating his prototype?</p>
                <img className="contentimage" src={Sean}></img>
                <p className="caption">"Too many meaningless features can really bloat up your application" -Sean</p>
                <a href="https://www.figma.com/file/Ufk4DElMg3CPWldccEm92t/Prototyping?node-id=28%3A6"><button style={{
                    marginLeft: "0px"
                }}>Sean's prototype</button></a>
                <h3>Conception</h3>
                <p>
                I wanted to create a simplistic design which requires only a few simple functions to make it easy to navigate through the application.
                </p>
                <h3>Designing</h3>
                <img className="contentimage" style={{
                    width: '60%',
                    height: 'auto'
                }} src={SeanHomepage}></img>
                <p className="caption">Screenshot of Sean's homepage</p>
                <p>
                The main page consists of the progress made by the user, as well as reminders which can be toggled by the user easily. 
                I added a large plus button on the bottom right corner so as to allow users to easily add a new reminder.
                </p>
                <img className="contentimage" style={{
                    width: '60%',
                    height: 'auto'
                }} src={SeanReminder}></img>
                <p className="caption">Screenshot of Sean's reminder page</p>
                <p>
                Reminders and trackers will be added via simply add buttons and they can be customized easily when editing to determine the frequency of the reminder.
                </p>
                <p>
                However, I did not consider the fact that users would want reminders to fall on certain days on the week. For example, a stand-up reminder every tuesday and thursday. 
                It fails to account for specific user needs which we will mention more later on our decision for the final prototype to be used.
                </p>
                <img className="contentimage" style={{
                    width: '60%',
                    height: 'auto'
                }} src={SeanProfile}></img>
                <p className="caption">Screenshot of Sean's profile page</p>
                <p>
                Finally, user can view his or her profile by checking the statistics available based on the week and month. 
                This will be in the form of a graph so that the user can compare his/her progress as compared to other weeks / months.
                </p>
            </div>
            <div className="content">
                <h2>Xin Pei's prototype <FcHome /></h2>
                <p className="subtitle">What was the reasoning behind Xin Pei's prototype?</p>
                <img className="contentimage" src={XinPei}></img>
                <p className="caption">"User study should be properly conducted to prevent double work" -Xin Pei</p>
                <a href="https://www.figma.com/file/Ufk4DElMg3CPWldccEm92t/Prototyping?node-id=28%3A7"><button style={{
                    marginLeft: "0px"
                }}>Xin Pei's prototype</button></a>
                <h3>Conception</h3>
                <p>
                Our application may seem similar to a healthy and fitness application, although that is not what we have intended it to be. 
                This can cause users to be confused when using our application. Hence, I wish to make an intuitive application where users 
                feel comfortable using it with little to no learning curve.
                </p>
                <h3>Designing</h3>
                <p>I started prototyping from the main page thinking about what information and functions users would like to have direct access to in the application.</p>
                <img className="contentimage" style={{
                    width: '60%',
                    height: 'auto'
                }} src={XinPeiHomepage}></img>
                <p className="caption">Screenshot of Xin Pei's homepage</p>
                <p>
                From the homepage, it should be obvious and easy for users to navigate to the Tracker’s pages. 
                Hence, there are 2 ways users can access the tracker’s page, either via the Tracker section or the 
                navigation section located at the top of the application.
                </p>
                <img className="contentimage" style={{
                    width: '60%',
                    height: 'auto'
                }} src={XinPeiTracker}></img>
                <p className="caption">Screenshot of Xin Pei's tracker page</p>
                <p>
                In the Tracker’s page, users will be able to see additional statistics such as their monthly statistics and this sets the Trackers and main page apart. 
                </p>
                <h3>Remarks</h3>
                <p>
                Aesthetically, I have chosen a nudeish colour scheme which is comfortable to the eyes. Additionally, I have chosen icons that mimic the user's 
                actions such as the female icon drinking water in hope that this will prompt the user to drink water. Furthermore, 
                it will also be clear to the user which the icon means.
                </p>
            </div>
            <div className="content">
                <h2>Consolidated prototype <FcCollaboration /></h2>
                <p className="subtitle">What prototype did we finally decide on after group discussion?</p>
                <h3>Result of group discussion</h3>
                <p>
                We decided to go with Daryl’s prototype as our main design, and Roby’s prototype as our secondary design. 
                Both these designs sport a dashboard showcasing useful information. They were also more aesthetically pleasing 
                which would enhance the user experience.
                </p>
                <h3>Reason why we chose Daryl's prototype</h3>
                <img className="contentimage" src={DarylDiscussion}></img>
                <p className="caption">Daryl running us through his prototype once again</p>
                <p>
                We decided to make Dargo’s prototype as our main design because the dashboard contains a lot more 
                useful information as compared to Roby’s. The choice of having the reminders shown sequentially 
                according to their timing in the dashboard is a lot more helpful to the users as they can easily 
                keep track of how many and what reminders there are.
                </p>
                <p>
                The reminders page uses a lot more familiar design choices as it ties 
                into the mental model of how alarms are done in mobile devices. Moreover, 
                it allows users to turn off reminders which eliminates the needs to have a highlighted reminders section.
                </p>
                <h3>Roby's prototype's shortcomings</h3>
                <p>We decided to make Roby’s prototype as our alternative prototype because while 
                it is a competent design, it has some design flaws that could potentially result in discomfort when using.</p>
            </div>
            <div className="buttonContainer">
                <h4>Take a look at our evaluation method and results!</h4>
                <Link to="/portfolio/evaluation"><button>Evaluation</button></Link>
            </div>
            <Footer />
        </div> 
    );
}

export default Prototyping;
