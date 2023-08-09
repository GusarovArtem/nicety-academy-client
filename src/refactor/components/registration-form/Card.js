import React from "react";
import { Logos } from "./Logos";
import "./styles.css";

export const Card = ({ className }) => {
    return (
        <div className={`card ${className}`}>
            <img className="logo" alt="Logo" src="logo.svg" />
            <div className="frame">
                <div className="sign-up-with">Sign Up With</div>
                <Logos className="logos-instance" logos="logos.svg" />
            </div>
            <div className="div">
                <img className="vector" alt="Vector" src="vector-2.svg" />
                <div className="or">or</div>
                <img className="vector" alt="Vector" src="vector-1.svg" />
            </div>
            <div className="frame-2">
                <div className="form">
                    <div className="div-wrapper">
                        <div className="text-wrapper">Username</div>
                    </div>
                    <div className="frame-3">
                        <div className="text-wrapper-2">Enter your Username</div>
                    </div>
                </div>
                <div className="form">
                    <div className="div-wrapper">
                        <div className="text-wrapper">Email</div>
                    </div>
                    <div className="frame-3">
                        <div className="text-wrapper-2">Enter your Email</div>
                    </div>
                </div>
                <div className="form">
                    <div className="div-wrapper">
                        <div className="text-wrapper">Password</div>
                    </div>
                    <div className="frame-3">
                        <div className="text-wrapper-2">Enter your Password</div>
                    </div>
                </div>
                <div className="form">
                    <div className="div-wrapper">
                        <div className="text-wrapper">Password confirm</div>
                    </div>
                    <div className="frame-3">
                        <div className="text-wrapper-2">Confirm your password</div>
                    </div>
                </div>
            </div>
            <img className="img" alt="Frame" src="frame-101.svg" />
            <div className="frame-4">
                <div className="sign-up-wrapper">
                    <div className="sign-up">Sign up</div>
                </div>
                <div className="log-in-wrapper">
                    <div className="log-in">Log in</div>
                </div>
            </div>
        </div>
    );
};
