import React from "react";
import "../refactor/styles/Comment.css";

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
                    Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Aliquam arcu ligula, vehicula<br/>  a placerat a, fermentum
                    et <br/>arcu. Vestibulum vitae dolor<br/> arcu. Duis auctor nisl nunc, <br/>quis euismod lorem porttitor<br/> eu. Quisque aliquet
                    dui a<br/> magna facilisis pulvinar.<br/> Quisque bibendum rutrum <br/>tincidunt.
                </p>
            </div>
            <div className="read-full-otziv-wrapper">
                <div className="read-full-otziv">Read full otziv</div>
            </div>
        </div>
    );
};
