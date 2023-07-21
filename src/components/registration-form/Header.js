import React from "react";
import "./styles.css";

export const Header = ({ className }) => {
    return (
        <div className={`header ${className}`}>
            <img className="frame" alt="Frame" src="frame-18.svg" />
            <div className="text-block">
                <div className="text-wrapper">Catalog</div>
                <div className="text-wrapper">Library</div>
                <div className="text-wrapper">My Journey</div>
            </div>
            <div className="div">
                <div className="sign-up-wrapper">
                    <div className="sign-up">Sign Up</div>
                </div>
                <div className="log-in-wrapper">
                    <div className="log-in">Log In</div>
                </div>
            </div>
            <img className="vector" alt="Vector" src="vector-1.svg" />
        </div>
    );
};
