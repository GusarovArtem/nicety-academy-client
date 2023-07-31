import React from "react";
import { Card } from "../components/card.component";
import { Footer } from "../components/footer.component";
import { Header } from "../components/header.component";
import "../styles/Catalog.css";
import Vector1 from "../img/vector-1.svg"
import Vector5 from "../img/vector-5.svg"
import Vector7 from "../img/vector-7.svg"
import Material from "../img/material-symbols-search.svg"
import ArrowDown from "../img/ri-arrow-down-s-line.svg"
import Plus from "../img/ic-baseline-plus.svg"
import DottedVector from "../img/dotted-vector.svg"
export const Catalog = () => {
    return (
        <div className="screen">
            <Header
                catalogClassName="design-component-instance-node"
                className="header-instance"
                frame="frame-18-2.svg"
                libraryClassName="design-component-instance-node"
                myJourneyClassName="design-component-instance-node"
                to="/u1082u1072u1090u1072u1083u1086u1075"
                vector="vector-1-3.svg"
            />
            <div className="view">
                <img className="vector-3" alt="Vector" src={Vector5} />
                <div className="text-wrapper-8">Main page</div>
                <img className="vector-4" alt="Vector" src={Vector7} />
                <div className="text-wrapper-9">Catalog</div>
                <img className="vector-5" alt="Vector" src={Vector1} />
            </div>
            <div className="frame-19">
                <h1 className="h-1">Catalog</h1>
                <div className="frame-20">
                    <div className="frame-21">
                        <div className="frame-22">
                            <img className="material-symbols" alt="Material symbols" src={Material} />
                            <div className="text-wrapper-10">Search any project</div>
                        </div>
                        <div className="frame-23">
                            <div className="text-wrapper-11">Language</div>
                            <img className="img-2" alt="Ri arrow down s line" src={ArrowDown} />
                        </div>
                        <div className="frame-23">
                            <div className="text-wrapper-11">Direction</div>
                            <img className="img-2" alt="Ri arrow down s line" src={ArrowDown} />
                        </div>
                        <div className="frame-23">
                            <div className="text-wrapper-11">Difficulty</div>
                            <img className="img-2" alt="Ri arrow down s line" src={ArrowDown} />
                        </div>
                        <div className="frame-23">
                            <div className="text-wrapper-11">Stack include</div>
                            <img className="img-2" alt="Ri arrow down s line" src={ArrowDown} />
                        </div>
                        <div className="frame-24">
                            <div className="text-wrapper-12">More</div>
                            <img className="img-2" alt="Ic baseline plus" src={Plus} />
                        </div>
                    </div>
                    <div className="frame-wrapper">
                        <div className="frame-25">
                            <Card
                                carbonSkillLevel="carbon-skill-level-2.svg"
                                className="card-instance"
                                grommetIcons="grommet-icons-waypoint-2.svg"
                                materialSymbols="material-symbols-attach-money-2.svg"
                                mingcuteDeviceFill="mingcute-device-fill-2.svg"
                                phStack="ph-stack-2.svg"
                                restapiSpringClassName="card-2"
                                riTimeFill="ri-time-fill-2.svg"
                                simpleIconsSpring="simple-icons-spring-2.svg"
                            />
                            <Card
                                carbonSkillLevel="carbon-skill-level-3.svg"
                                className="card-instance"
                                grommetIcons="grommet-icons-waypoint-3.svg"
                                materialSymbols="material-symbols-attach-money-3.svg"
                                mingcuteDeviceFill="mingcute-device-fill-3.svg"
                                phStack="ph-stack-3.svg"
                                restapiSpringClassName="card-2"
                                riTimeFill="ri-time-fill-3.svg"
                                simpleIconsSpring="simple-icons-spring-3.svg"
                            />
                            <Card
                                carbonSkillLevel="carbon-skill-level-4.svg"
                                className="card-instance"
                                grommetIcons="grommet-icons-waypoint-4.svg"
                                materialSymbols="material-symbols-attach-money-4.svg"
                                mingcuteDeviceFill="mingcute-device-fill-4.svg"
                                phStack="ph-stack-4.svg"
                                restapiSpringClassName="card-2"
                                riTimeFill="ri-time-fill-4.svg"
                                simpleIconsSpring="simple-icons-spring-4.svg"
                            />
                            <Card
                                carbonSkillLevel="carbon-skill-level-5.svg"
                                className="card-instance"
                                grommetIcons="grommet-icons-waypoint-5.svg"
                                materialSymbols="material-symbols-attach-money-5.svg"
                                mingcuteDeviceFill="mingcute-device-fill-5.svg"
                                phStack="ph-stack-5.svg"
                                restapiSpringClassName="card-2"
                                riTimeFill="ri-time-fill-5.svg"
                                simpleIconsSpring="simple-icons-spring-5.svg"
                            />
                            <Card
                                carbonSkillLevel="carbon-skill-level-6.svg"
                                className="card-instance"
                                grommetIcons="grommet-icons-waypoint-6.svg"
                                materialSymbols="material-symbols-attach-money-6.svg"
                                mingcuteDeviceFill="mingcute-device-fill-6.svg"
                                phStack="ph-stack-6.svg"
                                restapiSpringClassName="card-2"
                                riTimeFill="ri-time-fill-6.svg"
                                simpleIconsSpring="simple-icons-spring-6.svg"
                            />
                            <Card
                                carbonSkillLevel="carbon-skill-level-7.svg"
                                className="card-instance"
                                grommetIcons="grommet-icons-waypoint-7.svg"
                                materialSymbols="material-symbols-attach-money-7.svg"
                                mingcuteDeviceFill="mingcute-device-fill-7.svg"
                                phStack="ph-stack-7.svg"
                                restapiSpringClassName="card-2"
                                riTimeFill="ri-time-fill-7.svg"
                                simpleIconsSpring="simple-icons-spring-7.svg"
                            />
                            <img className="vector-5" alt="Vector" src={DottedVector}/>
                            <Card
                                carbonSkillLevel="carbon-skill-level-8.svg"
                                className="card-instance"
                                grommetIcons="grommet-icons-waypoint-8.svg"
                                materialSymbols="material-symbols-attach-money-8.svg"
                                mingcuteDeviceFill="mingcute-device-fill-8.svg"
                                phStack="ph-stack-8.svg"
                                restapiSpringClassName="card-2"
                                riTimeFill="ri-time-fill-8.svg"
                                simpleIconsSpring="simple-icons-spring-8.svg"
                            />
                            <Card
                                carbonSkillLevel="carbon-skill-level-9.svg"
                                className="card-instance"
                                grommetIcons="grommet-icons-waypoint-9.svg"
                                materialSymbols="material-symbols-attach-money-9.svg"
                                mingcuteDeviceFill="mingcute-device-fill-9.svg"
                                phStack="ph-stack-9.svg"
                                restapiSpringClassName="card-2"
                                riTimeFill="ri-time-fill-9.svg"
                                simpleIconsSpring="simple-icons-spring-9.svg"
                            />
                            <Card
                                carbonSkillLevel="carbon-skill-level-10.svg"
                                className="card-instance"
                                grommetIcons="grommet-icons-waypoint-10.svg"
                                materialSymbols="material-symbols-attach-money-10.svg"
                                mingcuteDeviceFill="mingcute-device-fill-10.svg"
                                phStack="ph-stack-10.svg"
                                restapiSpringClassName="card-2"
                                riTimeFill="ri-time-fill-10.svg"
                                simpleIconsSpring="simple-icons-spring-10.svg"
                            />
                            <Card
                                carbonSkillLevel="carbon-skill-level-11.svg"
                                className="card-instance"
                                grommetIcons="grommet-icons-waypoint-11.svg"
                                materialSymbols="material-symbols-attach-money-11.svg"
                                mingcuteDeviceFill="mingcute-device-fill-11.svg"
                                phStack="ph-stack-11.svg"
                                restapiSpringClassName="card-2"
                                riTimeFill="ri-time-fill-11.svg"
                                simpleIconsSpring="simple-icons-spring-11.svg"
                            />
                            <Card
                                carbonSkillLevel="carbon-skill-level-12.svg"
                                className="card-instance"
                                grommetIcons="grommet-icons-waypoint-12.svg"
                                materialSymbols="material-symbols-attach-money-12.svg"
                                mingcuteDeviceFill="mingcute-device-fill-12.svg"
                                phStack="ph-stack-12.svg"
                                restapiSpringClassName="card-2"
                                riTimeFill="ri-time-fill-12.svg"
                                simpleIconsSpring="simple-icons-spring-12.svg"
                            />
                            <Card
                                carbonSkillLevel="carbon-skill-level-13.svg"
                                className="card-instance"
                                grommetIcons="grommet-icons-waypoint-13.svg"
                                materialSymbols="material-symbols-attach-money-13.svg"
                                mingcuteDeviceFill="mingcute-device-fill-13.svg"
                                phStack="ph-stack-13.svg"
                                restapiSpringClassName="card-2"
                                riTimeFill="ri-time-fill-13.svg"
                                simpleIconsSpring="simple-icons-spring-13.svg"
                            />
                            <img className="vector-5" alt="Vector" src={DottedVector} />
                            <Card
                                carbonSkillLevel="carbon-skill-level-14.svg"
                                className="card-instance"
                                grommetIcons="grommet-icons-waypoint-14.svg"
                                materialSymbols="material-symbols-attach-money-14.svg"
                                mingcuteDeviceFill="mingcute-device-fill-14.svg"
                                phStack="ph-stack-14.svg"
                                restapiSpringClassName="card-2"
                                riTimeFill="ri-time-fill-14.svg"
                                simpleIconsSpring="simple-icons-spring-14.svg"
                            />
                            <Card
                                carbonSkillLevel="carbon-skill-level-15.svg"
                                className="card-instance"
                                grommetIcons="grommet-icons-waypoint-15.svg"
                                materialSymbols="material-symbols-attach-money-15.svg"
                                mingcuteDeviceFill="mingcute-device-fill-15.svg"
                                phStack="ph-stack-15.svg"
                                restapiSpringClassName="card-2"
                                riTimeFill="ri-time-fill-15.svg"
                                simpleIconsSpring="simple-icons-spring-15.svg"
                            />
                            <Card
                                carbonSkillLevel="carbon-skill-level-16.svg"
                                className="card-instance"
                                grommetIcons="grommet-icons-waypoint-16.svg"
                                materialSymbols="material-symbols-attach-money-16.svg"
                                mingcuteDeviceFill="mingcute-device-fill-16.svg"
                                phStack="ph-stack-16.svg"
                                restapiSpringClassName="card-2"
                                riTimeFill="ri-time-fill-16.svg"
                                simpleIconsSpring="simple-icons-spring-16.svg"
                            />
                            <Card
                                carbonSkillLevel="carbon-skill-level-17.svg"
                                className="card-instance"
                                grommetIcons="grommet-icons-waypoint-17.svg"
                                materialSymbols="material-symbols-attach-money-17.svg"
                                mingcuteDeviceFill="mingcute-device-fill-17.svg"
                                phStack="ph-stack-17.svg"
                                restapiSpringClassName="card-2"
                                riTimeFill="ri-time-fill-17.svg"
                                simpleIconsSpring="simple-icons-spring-17.svg"
                            />
                            <Card
                                carbonSkillLevel="carbon-skill-level-18.svg"
                                className="card-instance"
                                grommetIcons="grommet-icons-waypoint-18.svg"
                                materialSymbols="material-symbols-attach-money-18.svg"
                                mingcuteDeviceFill="mingcute-device-fill-18.svg"
                                phStack="ph-stack-18.svg"
                                restapiSpringClassName="card-2"
                                riTimeFill="ri-time-fill-18.svg"
                                simpleIconsSpring="simple-icons-spring-18.svg"
                            />
                            <Card
                                carbonSkillLevel="carbon-skill-level-19.svg"
                                className="card-instance"
                                grommetIcons="grommet-icons-waypoint-19.svg"
                                materialSymbols="material-symbols-attach-money-19.svg"
                                mingcuteDeviceFill="mingcute-device-fill-19.svg"
                                phStack="ph-stack-19.svg"
                                restapiSpringClassName="card-2"
                                riTimeFill="ri-time-fill-19.svg"
                                simpleIconsSpring="simple-icons-spring-19.svg"
                            />
                        </div>
                    </div>
                    <div className="frame-26">
                        <div className="frame-27">
                            <div className="text-wrapper-13">More projects</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer
                className="footer-instance"
                frame="frame-67-2.svg"
                icBaselineCamera="ic-baseline-camera-2.svg"
                vector="vector-2-3.svg"
            />
        </div>
    );
};
