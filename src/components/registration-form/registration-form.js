import React from "react";
import { Card } from "./Card";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "./styles.css";

export const RegForm = () => {
    return (
        <div className="screen">
            <Header
                catalogClassName="design-component-instance-node"
                className="header-instance"
                frame="frame-18-2.svg"
                libraryClassName="design-component-instance-node"
                myJourneyClassName="design-component-instance-node"
                vector="vector-1-3.svg"
            />
            <div className="body">
                <h1 className="h-1">Registration</h1>
                <div className="form-block">
                    <div className="card-wrapper">
                        <Card
                            className="card-instance"
                            frame="space-line.svg"
                            img="vector-1-4.svg"
                            logo="logo-2.svg"
                            logosLogos="logos-3.svg"
                            vector="vector-2-2.svg"
                        />
                    </div>
                </div>
            </div>
            <Footer
                className="footer-instance"
                frame="social.svg"
                icBaselineCamera="ic-baseline-camera-2.svg"
                vector="vector-2-3.svg"
            />
        </div>
    );
};
