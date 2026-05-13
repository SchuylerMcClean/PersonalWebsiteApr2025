import React from "react";

import linkedinImage from "../images/linkedin.png";
import githubImage from "../images/github.png";

function Contact() {
  return (
    <>
      <div id="contact" className="container">
        <div className="page">
          <h3>Contact</h3>

          <div className="glass-card" style={{ textAlign: "center" }}>
            <p className="contact-name">Schuyler McClean</p>
            <p className="contact-detail">Toronto ON &nbsp;|&nbsp; Guelph ON</p>
            <p className="contact-detail">smcclean@uoguelph.ca</p>

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
    </>
  );
}

export default Contact;
