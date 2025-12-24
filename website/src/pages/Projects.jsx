import Gallery from "./Gallery";

import patagoniaHome from "../images/patagoniaHomepage.png";
import patagoniaActivities from "../images/patagoniaActivities.png";
import patagoniaActivities2 from "../images/patagoniaActivities2.png";
import patagoniaHiking from "../images/patagoniaHiking.png";
import oldWebsiteHome from "../images/oldWebsiteHome.png";
import oldWebsiteAbout from "../images/oldWebsiteAbout.png";
import oldWebsiteContact from "../images/oldWebsiteContact.png";
import newWebsiteHomepage from "../images/newWebsiteHomepage.png";
import gradeCalcImg1 from "../images/gradecalculator1.png";
import gradeCalcImg3 from "../images/gradecalculator3.png";
import gradeCalcImg4 from "../images/gradecalculator4.png";

function Projects() {
  const alteredH2Style = {
    color: "black",
  };
  const grade_calc_images = [gradeCalcImg1, gradeCalcImg3, gradeCalcImg4];
  const images_website_current = [newWebsiteHomepage];
  const images_website_old = [
    oldWebsiteHome,
    oldWebsiteAbout,
    oldWebsiteContact,
  ];
  const images_patagonia = [
    patagoniaHome,
    patagoniaActivities,
    patagoniaActivities2,
    patagoniaHiking,
  ];

  return (
    <>
      <div id="projects" className="container">
        <div className="projectspage">
          <div className="sm-break"></div>

          <h3>Projects</h3>
          <h2 style={alteredH2Style}>Check out some of my projects!</h2>

          <div className="sm-break"></div>

          <div className="projectbox">
            <div className="project-description">
              <h4>Grade Calculator</h4>
              <h5>Est. Dec 2025 | Not Maintained</h5>
              <div className="project-text">
                I designed and developed a grade calculator application using
                React Native and TypeScript. Built with a focus on learning the
                fundamentals of React Native development, this app displays
                real-time weighted grade calculations based on user input.
              </div>
            </div>
            <Gallery images={grade_calc_images} />
          </div>

          <div className="projectbox">
            <div className="project-description">
              <h4>SchuylerMcClean.com</h4>
              <h5>Est. May/June 2025 | Currently Maintained</h5>
              <div className="project-text">
                This website! I designed and built a dynamic React-based
                portfolio website using CSS and JavaScript, showcasing
                interactive visuals. To streamline development, I configured a
                continuous deployment pipeline via GitHub and AWS Amplify,
                automating updates and reducing deployment time. I also
                implemented HTTPS with TLS protocols and connected a custom
                domain through DNS settings to ensure secure and reliable
                access.
              </div>
            </div>
            <Gallery images={images_website_current} />
          </div>

          <div className="projectbox">
            <div className="project-description">
              <h4>SchuylerMcClean.com (old)</h4>
              <h5>Est. Dec 2024 | Not Maintained</h5>
              <div className="project-text">
                Similar to my updated website as featured above, this
                React-based portfolio uses CSS and JavaScript to showcase
                several pages, and utilizes a continuous deployment pipeline via
                GitHub and AWS Amplify. Additionally, HTTPS with TLS protocols
                are implemented as well as a custom domain name.
              </div>
            </div>
            <Gallery images={images_website_old} />
          </div>

          <div className="projectbox">
            <div className="project-description">
              <h4>Patagonia Informational Website</h4>
              <h5>Est. March 2025 | Not Maintained</h5>
              <div className="project-text">
                Crafted with HTML and CSS as part of a university assignment,
                this multi-page website offers an engaging and visually
                appealing guide to exploring the Patagonia region of South
                America. Each page highlights exciting activities—such as hiking
                through mountain trails, kayaking, and spotting unique
                wildlife—giving visitors a vivid sense of adventure and
                discovery.
              </div>
            </div>
            <Gallery images={images_patagonia} />
          </div>

          <div className="sm-break"></div>
        </div>
      </div>
    </>
  );
}

export default Projects;
