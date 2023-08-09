import React from 'react';
import '../assets/styles/Header.css'; // Assuming you have the CSS file in the appropriate location
import Logo from "../assets/img/header/header-logo.svg";

const HeaderGuest = () => {
    return (
        <div className="header">
            <img
                src={Logo}
                alt="Not Found"
                className="logo"
            />
            <div className="navbar">
                <button className="catalog">Catalog</button>
                <button className="library">Library</button>
                <button className="my-journey">My Journey</button>
            </div>
            <div className="buttons-guest">
                <button className="sign-up-button" type="button">Sign Up</button>
                <button className="log-in-button" type="button">Log In</button>
            </div>
        </div>
    );
};

export default HeaderGuest;
