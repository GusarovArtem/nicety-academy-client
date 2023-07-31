import React from "react";
import { Card } from "../components/card.component";
import { Comment } from "../components/comment.component";
import { Footer } from "../components/footer.component";
import { Header } from "../components/header.component";
import "../styles/main.css";
import Photo from "../img/projects.png"
import Photo5 from "../img/lection.png"
import Photo2 from "../img/practice.png"
import Photo3 from "../img/discard.png"
import Photo4 from "../img/review.png"
import Photo6 from "../img/join.png"
import Arrow from "../img/arrow.png"
import Vector3 from  "../img/vector-3.svg"




export const MainPage = () => {
    return (
        <div className="screen">
            <Header
                catalogClassName="design-component-instance-node"
                className="header-instance"
                frame="logo.svg"
                libraryClassName="design-component-instance-node"
                myJourneyClassName="design-component-instance-node"
                to="/u1075u1083u1072u1074u1085u1072u1103-u1089u1090u1088u1072u1085u1080u1094u1072"
                vector="line.svg"
            />
            <div className="get-started-bloc">
                <div className="text-block-2">
                    <h1 className="practice-code-by">
                        <span className="span">Practice code by doing</span>
                        <span className="text-wrapper-9">Projects</span>
                    </h1>
                    <p className="text-wrapper-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ligula, vehicula a placerat a,
                        fermentum et arcu. Vestibulum <br/> vitae dolor arcu.
                    </p>
                    <div className="explore-projects">
                        <div className="text-wrapper-11">Explore Projects</div>
                    </div>
                </div>
                <img className="photo" alt="Photo" src={Photo} />
            </div>
            <div className="projects-gallery">
                <img className="vector-3" alt="Vector" src={Vector3} />
                <div className="text-wrapper-12">Projects Gallery</div>
                <div className="catalog">
                    <div className="button-free">
                        <div className="text-wrapper-13">Free</div>
                    </div>
                    <div className="text-wrapper-14">Mobile</div>
                    <div className="text-wrapper-14">Desktop</div>
                    <div className="text-wrapper-14">Telegram</div>
                    <div className="text-wrapper-14">Web</div>
                </div>
                <div className="card-body">
                    <Card
                        carbonSkillLevel="carbon-skill-level.png"
                        className="card-instance"
                        frameClassName="card-3"
                        grommetIcons="grommet-icons-waypoint-2.svg"
                        materialSymbols="material-symbols-attach-money-2.svg"
                        mingcuteDeviceFill="mingcute-device-fill.png"
                        phStack="ph-stack-2.svg"
                        restapiSpringClassName="card-2"
                        riTimeFill="ri-time-fill-2.svg"
                        simpleIconsSpring="simple-icons-spring-2.svg"
                    />
                    <Card
                        carbonSkillLevel="carbon-skill-level-2.png"
                        className="card-instance"
                        grommetIcons="grommet-icons-waypoint-3.svg"
                        materialSymbols="material-symbols-attach-money-3.svg"
                        mingcuteDeviceFill="mingcute-device-fill-2.png"
                        phStack="ph-stack-3.svg"
                        restapiSpringClassName="card-2"
                        riTimeFill="ri-time-fill-3.svg"
                        simpleIconsSpring="simple-icons-spring-3.svg"
                    />
                    <Card
                        carbonSkillLevel="carbon-skill-level-3.png"
                        className="card-instance"
                        grommetIcons="grommet-icons-waypoint-4.svg"
                        materialSymbols="material-symbols-attach-money-4.svg"
                        mingcuteDeviceFill="mingcute-device-fill-3.png"
                        phStack="ph-stack-4.svg"
                        restapiSpringClassName="card-2"
                        riTimeFill="ri-time-fill-4.svg"
                        simpleIconsSpring="simple-icons-spring-4.svg"
                    />
                </div>
                <div className="div-wrapper-2">
                    <div className="button">
                        <div className="text-wrapper-11">More projects</div>
                    </div>
                </div>
            </div>
            <div className="your-journey">
                <div className="div-wrapper-2">
                    <div className="text-wrapper-15">Your Journey</div>
                </div>
                <div className="journey-body">
                    <div className="read-lection">
                        <div className="text-block-3">
                            <div className="text-wrapper-16">1/ Read Lection</div>
                            <div className="p-wrapper-2">
                                <p className="text-wrapper-17">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu <br/>ligula, vehicula a placerat a,
                                    fermentum et arcu. Vestibulum vitae dolor <br/> arcu. Duis auctor nisl nunc, quis euismod lorem porttitor
                                    eu. Quisque aliquet  <br/> dui a magna facilisis pulvinar. Quisque bibendum rutrum tincidunt. Class  <br/> aptent
                                    taciti sociosqu ad litora torquent per conubia nostra, per inceptos  <br/> himenaeos. Proin sodales semper
                                    sollicitudin. Quisque elit diam, finibus sit  <br/> amet diam vitae, pretium rutrum elit. Morbi rhoncus dolor
                                    ac tincidunt  <br/> rhoncus. In porta convallis finibus. Mauris ut dolor at nibh varius interdum  <br/>quis at
                                    turpis. Nam id porttitor urna. Aliquam a neque in mi egestas  <br/>malesuada. Pellentesque in auctor tortor,
                                    quis convallis ipsum. <br/> Pellentesque ut est venenatis, eleifend neque in, finibus dolor.
                                </p>
                            </div>
                            <div className="text">
                                <p className="text-wrapper-18">Something like a comments from devs</p>
                            </div>
                        </div>
                        <img className="photo-2" alt="Photo" src={Photo5} />
                    </div>
                    <div className="div-2">
                        <img className="photo-3" alt="Photo" src={Photo2} />
                        <div className="practice-code-text">
                            <p className="text-wrapper-16">2/ Practice code with our help</p>
                            <div className="p-wrapper-2">
                                <p className="text-wrapper-17">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam <br/> arcu ligula, vehicula a placerat a,
                                    fermentum et arcu. Vestibulum  <br/>vitae dolor arcu. Duis auctor nisl nunc, quis euismod lorem <br/>porttitor
                                    eu. Quisque aliquet dui a magna facilisis pulvinar.
                                </p>
                            </div>
                            <div className="text">
                                <p className="text-wrapper-18">Something like a comments from devs</p>
                            </div>
                        </div>
                    </div>
                    <div className="div-2">
                        <div className="discuss-text">
                            <div className="text-wrapper-16">3/ Discard the solution</div>
                            <div className="p-wrapper-2">
                                <p className="text-wrapper-17">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Aliquam arcu ligula, vehicula a placerat a,
                                    fermentum et <br/>arcu. Vestibulum vitae dolor arcu. Duis auctor nisl nunc, quis<br/> euismod lorem porttitor
                                    eu. Quisque aliquet dui a magna<br/> facilisis pulvinar. Quisque bibendum rutrum tincidunt. Class<br/> aptent
                                    taciti sociosqu ad litora torquent per conubia nostra,<br/> per inceptos himenaeos. Proin sodales semper
                                    sollicitudin. <br/>Quisque elit diam, finibus sit amet diam vitae, pretium<br/> rutrum elit.
                                </p>
                            </div>
                            <div className="text">
                                <p className="text-wrapper-18">Something like a comments from devs</p>
                            </div>
                        </div>
                        <img className="photo-4" alt="Photo" src={Photo3} />
                    </div>
                    <div className="div-wrapper-2">
                        <div className="text-wrapper-15">If you stuck</div>
                    </div>
                    <div className="div-2">
                        <img className="photo-5" alt="Photo" src={Photo4} />
                        <div className="review-your-code">
                            <p className="text-wrapper-16">Review your code with persons</p>
                            <div className="p-wrapper-2">
                                <p className="text-wrapper-17">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam<br/> arcu ligula, vehicula a placerat a,
                                    fermentum et arcu. Vestibulum <br/>vitae dolor arcu. Duis auctor nisl nunc, quis euismod lorem porttitor<br/>
                                    eu. Quisque aliquet dui a magna facilisis pulvinar. Quisque <br/> bibendum rutrum tincidunt. Class aptent
                                    taciti sociosqu ad litora <br/>torquent per conubia nostra, per inceptos himenaeos. Proin <br/>sodales semper
                                    sollicitudin. Quisque elit diam, finibus sit amet<br/> diam vitae, pretium rutrum elit. Morbi rhoncus dolor
                                    ac tincidunt<br/> rhoncus. In porta convallis finibus. Mauris ut dolor at nibh varius<br/> interdum quis at
                                    turpis. Nam id porttitor urna.
                                </p>
                            </div>
                            <div className="text">
                                <p className="text-wrapper-18">Something like a comments from devs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="feedback-block">
                <div className="text-wrapper-15">Feedback</div>
                <div className="feedback">
                    <div className="blocks">
                        <Comment className="comment-instance" frameClassName="comment-2" />
                        <Comment className="comment-3" frameClassName="comment-4" />
                        <Comment className="comment-3" frameClassName="comment-4" />
                        <Comment className="comment-instance" frameClassName="comment-2" />
                        <Comment className="comment-3" frameClassName="comment-4" />
                        <Comment className="comment-3" frameClassName="comment-4" />
                    </div>
                    <img className="arrow-photo" alt="Arrow photo" src={Arrow} />
                </div>
            </div>
            <div className="join-us-div">
                <div className="join-us-block">
                    <div className="join-us">
                        <div className="text-block-4">
                            <div className="text-wrapper-16">Join over 500’000 students</div>
                            <div className="p-wrapper-2">
                                <p className="text-wrapper-19">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ligula, vehicula a placerat a,
                                    fermentum et arcu. Vestibulum vitae dolor arcu. Duis auctor nisl nunc, quis euismod lorem porttitor eu.
                                    Quisque aliquet dui a magna facilisis pulvinar. Quisque bibendum rutrum tincidunt. Class aptent taciti
                                    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                </p>
                            </div>
                            <div className="button">
                                <div className="text-wrapper-11">Sign Up for free</div>
                            </div>
                        </div>
                        <img className="photo-6" alt="Photo" src={Photo6} />
                    </div>
                </div>
            </div>
            <Footer
                className="footer-instance"
                frame="frame-67.png"
                icBaselineCamera="ic-baseline-camera.png"
                vector="vector-2-2.svg"
            />
        </div>
    );
};
export default class Main {
}