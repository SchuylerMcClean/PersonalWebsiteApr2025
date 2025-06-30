import React from "react";

import pythonImg from "../images/pythonLogo.webp";
import cImg from "../images/cLogo.png";
import cssImg from "../images/cssLogo.png";
import htmlImg from "../images/htmlLogo.webp";
import javaImg from "../images/javaLogo.svg";
import javascriptImg from "../images/javascriptLogo.svg";
import sqlImg from "../images/sqlLogo.png";
import reactImg from "../images/reactLogo.webp";
import githubImg from "../images/github.png";
import gitImg from "../images/gitLogo.png";
import gitlabImg from "../images/gitlabLogo.svg";
import linuxImg from "../images/linuxLogo.webp";

function About() {
  return (
    <>
      <div id="about" className="container">
        <div className="aboutpage">
          <div className="sm-break"></div>

          <h3>About</h3>
          <h2>Let me introduce myself.</h2>

          <div className="sm-break"></div>

          <div className="text">
            I am a software developer seeking a software-related Co-op position
            for summer 2026. I am an Honours Computer Science Co-op student at
            the University of Guelph pursuing an emphasis in Artificial
            Intelligence and a Minor in Mathematics.
          </div>

          <div className="sm-break"></div>

          <div className="text">
            I am proficient in the following languages and technologies:
          </div>

          <div className="sm-break"></div>

          <div className="logo-grid">
            <div className="logo-item">
              <img src={pythonImg} alt="Python Logo"></img>
            </div>

            <div className="logo-item">
              <img src={cImg} alt="C Logo"></img>
            </div>

            <div className="logo-item" style={{ scale: "1.2" }}>
              <img src={cssImg} alt="CSS Logo"></img>
            </div>

            <div className="logo-item" style={{ scale: "0.9" }}>
              <img src={javascriptImg} alt="JavaScript Logo"></img>
            </div>

            <div className="logo-item" style={{ scale: "1.2" }}>
              <img src={javaImg} alt="Java Logo"></img>
            </div>

            <div className="logo-item" style={{ scale: "1.1" }}>
              <img src={htmlImg} alt="HTML Logo"></img>
            </div>

            <div className="logo-item">
              <img src={sqlImg} alt="SQL Logo"></img>
            </div>

            <div className="logo-item">
              <img src={reactImg} alt="React Logo"></img>
            </div>

            <div className="logo-item">
              <img src={githubImg} alt="GitHub Logo"></img>
            </div>

            <div className="logo-item">
              <img src={gitImg} alt="Git Logo"></img>
            </div>

            <div className="logo-item">
              <img src={gitlabImg} alt="Gitlab Logo"></img>
            </div>

            <div className="logo-item" style={{ filter: "invert(1)" }}>
              <img src={linuxImg} alt="Linux Logo"></img>
            </div>
          </div>

          <div className="sm-break"></div>
        </div>
      </div>
    </>
  );
}

export default About;
