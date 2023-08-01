import React from "react";
import "../styles/Footer.css";
import Frame67 from "../img/frame-67.svg"
import Camera from "../img/ic-baseline-camera.svg"
import Vector2 from "../img/split-line.svg"

export const Footer = ({ className }) => {
    return (
        <div className={`footer ${className}`}>
            <div className="frame">
                <div className="language-block">
                    <div className="logo">
                        <img className="logo-img" alt="Logo" src={Camera} />
                        <div className="tagline">Achieve mastery through challenge.</div>
                    </div>
                    <div className="top-languages">
                        <div className="text">Top languages</div>
                        <div className="languages-list">
                            <div className="language-wrapper">
                                <div className="language-name">C</div>
                            </div>
                            <div className="div-wrapper">
                                <div className="text-wrapper-2">C#</div>
                            </div>
                            <div className="div-wrapper">
                                <div className="text-wrapper-2">C++</div>
                            </div>
                            <div className="div-wrapper">
                                <div className="text-wrapper-2">Dart</div>
                            </div>
                            <div className="div-wrapper">
                                <div className="text-wrapper-2">Go</div>
                            </div>
                            <div className="div-wrapper">
                                <div className="text-wrapper-2">Haskell</div>
                            </div>
                            <div className="div-wrapper">
                                <div className="text-wrapper-2">Java</div>
                            </div>
                            <div className="div-wrapper">
                                <div className="text-wrapper-2">JavaScript</div>
                            </div>
                            <div className="div-wrapper">
                                <div className="text-wrapper-2">Kotlin</div>
                            </div>
                            <div className="div-wrapper">
                                <div className="text-wrapper-2">Lua</div>
                            </div>
                            <div className="div-wrapper">
                                <div className="text-wrapper-2">PHP</div>
                            </div>
                            <div className="div-wrapper">
                                <div className="text-wrapper-2">Python</div>
                            </div>
                            <div className="div-wrapper">
                                <div className="text-wrapper-2">R</div>
                            </div>
                            <div className="div-wrapper">
                                <div className="text-wrapper-2">Ruby</div>
                            </div>
                            <div className="div-wrapper">
                                <div className="text-wrapper-2">SQL</div>
                            </div>
                            <div className="div-wrapper">
                                <div className="text-wrapper-2">Scala</div>
                            </div>
                            <div className="div-wrapper">
                                <div className="text-wrapper-2">Solidity</div>
                            </div>
                            <div className="div-wrapper">
                                <div className="text-wrapper-2">Swift</div>
                            </div>
                            <div className="div-wrapper">
                                <div className="text-wrapper-2">TypeScript</div>
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
            <img className="split-line" alt="split-line" src="../img/split-line.svg" />
            <div className="copyright-wrapper">
                <div className="copyright">
                    <div className="text">@LoremIpsum, Inc</div>
                    <div className="powered-by">Powered by LoremIpsum</div>
                    <div className="copyright-item">API</div>
                    <div className="copyright-item">Privacy Policy</div>
                    <div className="copyright-item">Terms of Service</div>
                    <div className="copyright-item">About</div>
                </div>
                <img className="social-media" alt="social-media" src={Frame67} />
            </div>
        </div>
    );
};
