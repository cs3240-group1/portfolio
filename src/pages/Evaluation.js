import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FcOk, FcPaid, FcAbout, FcKindle, FcAdvance } from "react-icons/fc";
import { Link } from 'react-router-dom';
import "./style.css";

import SeanObserve from "../components/images/sean.jpg";
import MainHomepage from "../components/images/Homepage.png";
import AddReminder from "../components/images/addreminder.png";
import RobyHomepage from "../components/images/robyhomepage.png";

function Evaluation() {
    return (
        <div>
            <Header />
            <div className="content">
                <h2>Evaluation prototype <FcOk /></h2>
                <p className="subtitle">Which prototypes were chosen to be evaluated?</p>
                <p>
                Our actual prototype that we have decided to use for evaluation is based heavily on Dargo’s design. 
                We changed the profile page to include more useful information such as user’s height and weight, active 
                hours, and social media integration for users to share their usage and health statistics to others. 
                </p>
                <p>
                We also slightly modified how the reminder looked in the dashboard by making it look less like a button to prevent confusion.
                </p>
                <a href="https://www.figma.com/file/Ufk4DElMg3CPWldccEm92t/Prototyping?node-id=188%3A5339"><button style={{
                    marginLeft: "0px"
                }}>Main prototype</button></a>
                <p>
                    We also decided to use Roby's design as our alternative prototype to be evaluated so that we can get more insights on what works.
                    Roby's prototype is different enough from our main prototype and this allows us to present the evaluators with broader design choices and 
                    thus, giving us more insights on which design choices work best.
                    Any positive elements that we got for our alternative prototype can be used to enhance our main prototype. 
                </p>
                <a href="https://www.figma.com/file/Ufk4DElMg3CPWldccEm92t/Prototyping?node-id=99%3A1378"><button style={{
                    marginLeft: "0px"
                }}>Alternative prototype</button></a>
            </div>
            <div className="content">
                <h2>Evaluation method <FcPaid /></h2>
                <p className="subtitle">How did we conduct our evaluation?</p>
                <p>
                We have decided to conduct the evaluation over zoom with the team being assigned to evaluate our prototype. 
                We sent our evaluators the link to our prototype and we will give them a couple of tasks to do.
                </p>
                <h3>Tasks for the evaluators</h3>
                <p>
                    Evaluators will need to register as new user, add 3 reminders, make Sunday active on 3rd reminder, and finally delete the 3rd reminder.
                </p>
                <h3>Evaluation process</h3>
                <p>
                We conducted AB testing for both the main prototype and the alternative prototype, using zoom breakout rooms function to split the 
                participants into different rooms. Each room had an evaluator and a member of our team. We asked evaluators to share their screen 
                while attempting to complete the tasks given, taking down any observations we had.
                </p>
                <img className="contentimage" src={SeanObserve}></img>
                <p className="caption">Sean taking down any pain points faced by the evaluator</p>
                <p>
                We gave minimal assistance to the evaluators to test the intuitiveness of our prototype. After the evaluators 
                had completed all the tasks, we asked them some questions about their experience when using the prototype.
                </p>
                <h3>Questions for the evaluators</h3>
                <p>We split the questions into 2 sections, intuitiveness and aesthetics.</p>
                <p>We wanted to find out about the intuitiveness of the prototype because we wanted to know if an average user will have any issues
                when using the application. Any problems faced by the evaluators would have to be addressed and fixed. We also wanted to find out about 
                the aesthetics of the prototype because it plays an important part in the appeal of the application. An application that looks horrible is
                less likely to be used by people.</p>
            </div>
            <div className="content">
                <h2>Evaluation rationale <FcAbout /></h2>
                <p className="subtitle">Why did we chose that method of evaluation?</p>
                <p>Evaluation was conducted over zoom due COVID-19 limitations. Our evaluators were also on a tight schedule due to schoolwork. 
                Zoom meetings allowed us to work with the limitations we had. We felt that we were still able to properly observe our evaluators 
                when using the application through zoom using the screen sharing feature.</p>
                <h3>One on one observation</h3>
                <p>
                We split the evaluators into their own respective breakout rooms so that each of us could fully observe each evaluator’s attempt to complete the tasks.
                Minimal intervention allows us to fully observe an average user’s experience when interacting with the prototype, effectively enabling us to make 
                effective observations. Asking questions about the experience after testing also gives us insights as to what the user experience of our prototype was like.
                </p>
            </div>
            <div className="content">
                <h2>Evaluation result <FcKindle /></h2>
                <p className="subtitle">What did we gain from the evaluation?</p>
                <a href="https://docs.google.com/spreadsheets/d/12DLhtJmQGcC1aaCNpt5a-6rzlA4dMrSom-0DmYNhWK4/edit?usp=sharing">
                    <button style={{
                        marginLeft: "0px"
                    }}>Evaluation result</button>
                </a>
                <h3>Main prototype</h3>
                <img className="contentimage" style={{
                    width: '60%',
                    height: 'auto'
                }} src={MainHomepage}></img>
                <p className="caption">Screenshot of our main prototype's homepage</p>
                <p>
                    In terms of intuitiveness, majority of the evaluators stated that it was easy to use and very straight forward. However, 
                    one mentioned that the feature to add reminders on the homepage is easily missed. The intuitiveness of the application is based 
                    on how easy it is for the evaluators to perform the tasks that we gave them.
                </p>
                <img className="contentimage" src={AddReminder}></img>
                <p className="caption">Someone mentioned that the add reminder button could be removed or be made more obvious</p>
                <p>
                    In terms of aesthetics, majority of the evaluators agreed that the color scheme is beautiful with good organization. The prototype
                    looks clean with not too many components cluttering the pages. However, one mentioned that some statistics are difficult to understand
                    and that the clickable buttons could be made more obvious, especially on adding reminders. 
                </p>
                <p>
                    In terms of user flow (display of information and ease of navigability), majority stated that they can easily identify that there are 
                    more than one way to add the reminders. They also mentioned that the layout is intuitive enough that they can easily switch pages without
                    getting lost. 
                </p>
                <p>
                    We asked the evaluators whether they had any additional remarks. Majority supported the dashboard design of our homepage and appreciated the
                    straight-forward design of our onboarding process. However, one mentioned that it would be great if we allow users to switch position of elements around
                    to fit more people's tastes.
                </p>
                <h3>Alternative prototype</h3>
                <p>As for alternative prototype, we used Roby's original prototype.</p>
                <img className="contentimage" style={{
                    width: '60%',
                    height: 'auto'
                }} src={RobyHomepage}></img>
                <p className="caption">Screenshot of our alternative prototype's homepage</p>
                <p>
                    Most evaluators had the same opinion about our alternative prototype in terms of intuitiveness however, many mentioned that the first prototype just 
                    feels a lot better. 
                </p>
                <p>
                    In terms of aesthetics, some mentioned that the choice of bright purple of the color scheme is a bit jarring which could discourage prolonged use.
                    Overall, majority prefered the softer look of our main prototype. 
                </p>
                <p>
                    Majority agreed that while the design is simple enough to follow, it pales in comparison to the intuitiveness of our main prototype. The design
                    of the layout could use some improvement and many actually did not realize that they can add reminders in the reminders page.
                </p>
            </div>
            <div className="content">
                <h2>Conclusion <FcAdvance /></h2>
                <p className="subtitle">What is our main takeaway from the evaluation?</p>
                <p>Overall, we found out that our main prototype is doing a lot better compared to our alternative prototype, both in terms of intuitiveness
                and aesthetics. Therefore, after a brief discussion, we decided to work on our main prototype for our final result.</p>
            </div>
            <div className="buttonContainer">
                <h4>See the result of our hard work and effort!</h4>
                <Link to="/portfolio/result"><button>Final result</button></Link>
            </div>
            <Footer />
        </div> 
    );
}

export default Evaluation;