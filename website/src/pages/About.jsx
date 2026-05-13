import React from "react";
import CoursesTicker from "../components/CoursesTicker";

import pythonImg from "../images/pythonLogo.webp";
import cImg from "../images/cLogo.png";
import tsImg from "../images/typescriptLogo.png";
import javaImg from "../images/javaLogo.svg";
import javascriptImg from "../images/javascriptLogo.svg";
import sqlImg from "../images/sqlLogo.png";
import reactImg from "../images/reactLogo.webp";
import githubImg from "../images/github.png";
import gitImg from "../images/gitLogo.png";
import gitlabImg from "../images/gitlabLogo.svg";
import flutterImg from "../images/FlutterLogo.webp";
import supabaseImg from "../images/supabaseLogo.png";

function About() {
  return (
    <>
      <div id="about" className="container">
        <div className="page">
          <h3>About</h3>
          <h2>Let me introduce myself.</h2>

          <div className="glass-card">
            <div className="text">
              I am a 4.0 GPA Computer Science student at the University of
              Guelph pursuing an specialization in Artificial Intelligence and a
              Minor in Mathematics/Statistics. Last summer, I had the
              opportunity to work as a Software Developer at Tumblewire Inc,
              where I independently designed and developed my assigned project
              end-to-end. I am passionate about software development and am
              eager to apply my skills and knowledge to real-world projects!
            </div>

            <div className="sm-break"></div>

            <div className="text">
              I am proficient in the following languages and technologies:
            </div>

            <div className="sm-break"></div>

            <div className="logo-grid">
              <div className="logo-item" data-label="React">
                <img src={reactImg} alt="React Logo"></img>
              </div>

              <div
                className="logo-item"
                data-label="Java"
                style={{ scale: "1.2" }}
              >
                <img src={javaImg} alt="Java Logo"></img>
              </div>

              <div className="logo-item" data-label="Python">
                <img src={pythonImg} alt="Python Logo"></img>
              </div>

              <div className="logo-item" data-label="C">
                <img src={cImg} alt="C Logo"></img>
              </div>

              <div
                className="logo-item"
                data-label="TypeScript"
                style={{ scale: "0.9" }}
              >
                <img src={tsImg} alt="TypeScript Logo"></img>
              </div>

              <div
                className="logo-item"
                data-label="JavaScript"
                style={{ scale: "0.9" }}
              >
                <img src={javascriptImg} alt="JavaScript Logo"></img>
              </div>

              <div className="logo-item" data-label="SQL">
                <img src={sqlImg} alt="SQL Logo"></img>
              </div>

              <div className="logo-item" data-label="GitHub">
                <img src={githubImg} alt="GitHub Logo"></img>
              </div>

              <div className="logo-item" data-label="Git">
                <img src={gitImg} alt="Git Logo"></img>
              </div>

              <div className="logo-item" data-label="GitLab">
                <img src={gitlabImg} alt="Gitlab Logo"></img>
              </div>

              <div className="logo-item" data-label="Supabase">
                <img src={supabaseImg} alt="Supabase Logo"></img>
              </div>

              <div className="logo-item" data-label="Flutter">
                <img src={flutterImg} alt="Flutter Logo"></img>
              </div>
            </div>
          </div>
          <div className="sm-break"></div>
        </div>

        <div className="page">
          <h3>Relevant Coursework</h3>
          <div className="sm-break" style={{ height: "1vh" }}></div>
          <CoursesTicker />
        </div>
        <div className="sm-break"></div>
      </div>
    </>
  );
}

export default About;
