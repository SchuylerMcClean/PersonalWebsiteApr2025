import React from "react";

import linkedinImage from "../images/linkedin.png";
import githubImage from "../images/github.png";

function Contact() {
  return (
    <>
      <div id="contact" className="container">
        <div>
          <h3>Contact</h3>

          <div className="sm-break"></div>

          <h6>Schuyler McClean</h6>

          <h6>Toronto ON | Guelph ON</h6>

          <h6>smcclean@uoguelph.ca</h6>

          <div className="sm-break"></div>

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

          <div className="sm-break"></div>
          <div className="sm-break"></div>
        </div>
      </div>
    </>
  );
}

export default Contact;
