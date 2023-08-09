import React from "react";
import "../assets/styles/Footer.css";
import Social from "../assets/img/footer/social-media.svg"
import Logo from "../assets/img/footer/logo.svg"
import Line from "../assets/img/footer/split-line.svg"


export const Footer = ({ className }) => {
    return (
        <div className={`footer ${className}`}>
            <div className="frame">
                <div className="language-block">
                    <div className="logo">
                        <img className="logo-img" alt="Logo" src={Logo} />
                        <div className="tagline">Achieve mastery through challenge.</div>
                    </div>
                    <div className="top-languages">
                        <div className="text">Top languages</div>
                        <div className="languages-list">
                            <div className="language-wrapper">
                                <div className="language-name">C</div>
                            </div>
                            <div className="language-wrapper">
                                <div className="language-name">C#</div>
                            </div>
                            <div className="language-wrapper">
                                <div className="language-name">C++</div>
                            </div>
                            <div className="language-wrapper">
                                <div className="language-name">Dart</div>
                            </div>
                            <div className="language-wrapper">
                                <div className="language-name">Go</div>
                            </div>
                            <div className="language-wrapper">
                                <div className="language-name">Haskell</div>
                            </div>
                            <div className="language-wrapper">
                                <div className="language-name">Java</div>
                            </div>
                            <div className="language-wrapper">
                                <div className="language-name">JavaScript</div>
                            </div>
                            <div className="language-wrapper">
                                <div className="language-name">Kotlin</div>
                            </div>
                            <div className="language-wrapper">
                                <div className="language-name">Lua</div>
                            </div>
                            <div className="language-wrapper">
                                <div className="language-name">PHP</div>
                            </div>
                            <div className="language-wrapper">
                                <div className="language-name">Python</div>
                            </div>
                            <div className="language-wrapper">
                                <div className="language-name">R</div>
                            </div>
                            <div className="language-wrapper">
                                <div className="language-name">Ruby</div>
                            </div>
                            <div className="language-wrapper">
                                <div className="language-name">SQL</div>
                            </div>
                            <div className="language-wrapper">
                                <div className="language-name">Scala</div>
                            </div>
                            <div className="language-wrapper">
                                <div className="language-name">Solidity</div>
                            </div>
                            <div className="language-wrapper">
                                <div className="language-name">Swift</div>
                            </div>
                            <div className="language-wrapper">
                                <div className="language-name">TypeScript</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-block">
                    <div className="category">
                        <div className="category-name">DOJO</div>
                        <div className="item">Kata Library</div>
                        <div className="item">Leaderboard</div>
                        <div className="item">Docs</div>
                    </div>
                    <div className="category">
                        <div className="category-name">DEVELOPERS</div>
                        <div className="item">Kata Library</div>
                        <div className="item">Leaderboard</div>
                        <div className="item">Docs</div>
                    </div>
                    <div className="category">
                        <div className="category-name">EDUCATORS</div>
                        <div className="item">Kata Library</div>
                        <div className="item">Leaderboard</div>
                        <div className="item">Docs</div>
                    </div>
                    <div className="category">
                        <div className="category-name">COMPANIES</div>
                        <div className="item">Kata Library</div>
                        <div className="item">Leaderboard</div>
                        <div className="item">Docs</div>
                    </div>
                </div>
            </div>
            <img className="split-line" alt="split-line" src={Line} />
            <div className="copyright-wrapper">
                <div className="copyright">
                    <div className="text">@LoremIpsum, Inc</div>
                    <div className="powered-by">Powered by LoremIpsum</div>
                    <div className="copyright-item">API</div>
                    <div className="copyright-item">Privacy Policy</div>
                    <div className="copyright-item">Terms of Service</div>
                    <div className="copyright-item">About</div>
                </div>
                <img className="social-media" alt="social-media" src={Social} />
            </div>
        </div>
    );
};
