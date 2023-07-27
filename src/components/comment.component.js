import React from "react";
import "../styles/style.css";

export const Comment = ({ className }) => {
    return (
        <div className={`comment ${className}`}>
            <div className="frame">
                <div className="VP-wrapper">
                    <div className="VP">VP</div>
                </div>
                <div className="viktor-petrov">Viktor Petrov</div>
            </div>
            <div className="lorem-ipsum-dolor-wrapper">
                <p className="lorem-ipsum-dolor">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ligula, vehicula a placerat a, fermentum
                    et arcu. Vestibulum vitae dolor arcu. Duis auctor nisl nunc, quis euismod lorem porttitor eu. Quisque aliquet
                    dui a magna facilisis pulvinar. Quisque bibendum rutrum tincidunt.
                </p>
            </div>
            <div className="read-full-otziv-wrapper">
                <div className="read-full-otziv">Read full otziv</div>
            </div>
        </div>
    );
};
