import React from 'react';
import '../assets/styles/Header.css';
import Logo from "../assets/img/header/header-logo.svg";


const HeaderRegistered = () => {
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
            <div className="buttons-registered">
                <button className="notification">
                    <img
                        src="../assets/img/notification.svg"
                        alt="Not Found"
                    />
                </button>
                <button className="username">
                    <p className="name">AP</p>
                </button>
                <button className="menu-button">
                    <img
                        src="../assets/img/menu.svg"
                        alt="Not Found"
                        className="menu-img"
                    />
                </button>
            </div>
        </div>
    );
};

export default HeaderRegistered;
