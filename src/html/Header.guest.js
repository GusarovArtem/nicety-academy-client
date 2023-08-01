import React from 'react';
import '../html/Header.css'; // Assuming you have the CSS file in the appropriate location

const HeaderGuest = () => {
    return (
        <div className="header">
            <img
                src="../img/header-logo.svg"
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
