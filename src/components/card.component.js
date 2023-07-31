import React from "react";
import "../styles/Card.css";
import Grommet from  "../img/grommet-icons-waypoint.svg"
import Time from  "../img/ri-time-fill.svg"
import Simple from  "../img/simple-icons-spring.svg"
import Stack from  "../img/ph-stack.svg"
import Device from  "../img/mingcute-device-fill.svg"
import Skill from  "../img/carbon-skill-level.svg"
import Money from  "../img/material-symbols-attach-money.svg"
export const Card = ({ className }) => {
    return (
        <div className={`card ${className}`}>
            <div className="frame">
                <div className="div">
                    <img className="simple-icons-spring" alt="Simple icons spring" src={Simple} />
                    <div className="restapi-spring">RestAPI - Spring</div>
                </div>
                <div className="lorem-ipsum-dolor-wrapper">
                    <p className="lorem-ipsum-dolor">
                        Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. <br/> Aliquam arcu ligula, vehicula a <br/> placerat a, fermentum et arcu.
                    </p>
                </div>
                <div className="frame-2">

                        <div className="frame-4">
                            <img className="img" alt="Ph stack" src={Stack} />
                            <div className="text-wrapper">Java</div>
                    </div>
                    <div className="frame-5">
                        <img className="img" alt="Mingcute device fill" src={Device} />
                        <div className="text-wrapper">Web</div>
                    </div>
                </div>
                <div className="frame-2">
                    <div className="frame-3">
                        <div className="frame-4">
                            <img className="img" alt="Carbon skill level" src={Skill} />
                            <div className="text-wrapper">Basic</div>
                        </div>
                        <div className="frame-4">
                            <img className="img" alt="Grommet icons" src={Grommet} />
                            <div className="text-wrapper">12 steps</div>
                        </div>
                    </div>
                    <div className="frame-3">
                        <div className="frame-4">
                            <img className="img" alt="Material symbols" src={Money} />
                            <div className="text-wrapper">Free</div>
                        </div>
                        <div className="frame-4">
                            <img className="img" alt="Ri time fill" src={Time} />
                            <div className="text-wrapper">15 h</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="frame-6">
                <div className="let-s-go-wrapper">
                    <div className="let-s-go">Let’s go</div>
                </div>
                <div className="more-wrapper">
                    <div className="more">More</div>
                </div>
            </div>
        </div>
    );
};
