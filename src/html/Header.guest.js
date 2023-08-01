import React from 'react';
import './Header.css'; // Assuming you have the CSS file named "HeaderGuest.css" in the same folder


const HeaderGuest = () => {
    return (
        <div className="header">
            <img
                src="../img/header-logo.svg"
                alt="Not Found"
                className="logo"
            />
            <div className="navbar">
                <p className="catalog">Catalog</p>
                <p className="library">Library</p>
                <p className="my-journey">My Journey</p>
            </div>
            <div className="buttons">
                <div className="sign-up-button" type="button">
                    <p>Sign Up</p>
                </div>
                <div className="log-in-button" type="button">
                    <p>Log In</p>
                </div>
            </div>
        </div>
    );
};

export default HeaderGuest;
