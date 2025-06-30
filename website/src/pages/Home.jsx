import React from "react";

import linkedinImage from "../images/linkedin.png";
import githubImage from "../images/github.png";

function Home() {
  return (
    <>
      <div className="container">
        <div id="home" className="background-image">
          <div className="dark-opacity">
            <div className="homepage">
              <h1>SCHUYLER MCCLEAN</h1>
              <h2>Software Developer | Computer Science Student</h2>
              <div className="connect">
                <div className="connect-items">
                  <a href="https://www.linkedin.com/in/schuylermcclean/">
                    <img src={linkedinImage} alt="LinkedIn Logo"></img>
                  </a>
                </div>
                <div className="connect-items">
                  <a href="https://github.com/SchuylerMcClean">
                    <img src={githubImage} alt="GitHub Logo"></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
