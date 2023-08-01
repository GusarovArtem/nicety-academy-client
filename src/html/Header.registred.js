import React from 'react';
import '../html/Header.css';

const HeaderRegistered = () => {
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
            <div className="buttons-registered">
                <button className="notification">
                    <img
                        src="../img/notification.svg"
                        alt="Not Found"
                    />
                </button>
                <button className="username">
                    <p className="name">AP</p>
                </button>
                <button className="menu-button">
                    <img
                        src="../img/menu.svg"
                        alt="Not Found"
                        className="menu-img"
                    />
                </button>
            </div>
        </div>
    );
};

export default HeaderRegistered;
