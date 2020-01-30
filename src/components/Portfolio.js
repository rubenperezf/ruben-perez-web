import React from "react";
import parentsHelpParents from "../images/portfolio/parents-help-parents.png";
import jollo from "../images/portfolio/jollo.png";
import matchingGame from "../images/portfolio/matching-game.png";
import cityProject from "../images/portfolio/city-project.png";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-title" id="portafolio">
        <h1>-Portafolio-</h1>
      </div>
      <div className="projects-container">
        <div className="project-container">
          <div className="project-image-container">
            <Zoom>
              <img
                src={parentsHelpParents}
                alt="parent help parents project"
                width="400"
              />
            </Zoom>
          </div>
          <div className="project-text-container">
            <h1>Parents Help Parents</h1>
            <p>
              Final project at JRS Coding School. Parents Help Parents is an app
              that helps families connect with other families so they can
              collaborate with childcare at home.
            </p>
            <a href="https://github.com/rubenperezf/parents-help-parents">
              Github
            </a>
          </div>
          <div className="tech-stack-container">
            <p>Tech Stack: React, Node.js, MongoDB, SendGrid, Auth0</p>
          </div>
        </div>

        <div className="project-container">
          <div className="project-image-container">
            <Zoom>
              <img src={jollo} alt="parent help parents project" width="400" />
            </Zoom>
          </div>
          <div className="project-text-container">
            <h1>Jollo</h1>
            <p>
              Final project at JRS Coding School. Parents Help Parents is an app
              that helps families connect with other families so they can
              collaborate with childcare at home.
            </p>
            <a href="https://github.com/ColbyBurke/the-pregame-app">Github</a>
          </div>
          <div className="tech-stack-container">
            <p>Tech Stack: React, Node.js, MongoDB, Auth0, Material UI</p>
          </div>
        </div>

        <div className="project-container">
          <div className="project-image-container">
            <Zoom>
              <img src={matchingGame} alt="matching game project" width="400" />
            </Zoom>
          </div>
          <div className="project-text-container">
            <h1>Matching Game</h1>
            <p>
              Final project at JRS Coding School. Parents Help Parents is an app
              that helps families connect with other families so they can
              collaborate with childcare at home.
            </p>
            <a href="https://github.com/rubenperezf/matching-game">Github</a>
          </div>
          <div className="tech-stack-container">
            <p>Tech Stack: Html, CSS, JavaScript</p>
          </div>
        </div>

        <div className="project-container">
          <div className="project-image-container">
            <Zoom>
              <img
                src={cityProject}
                alt="city project using React"
                width="400"
              />
            </Zoom>
          </div>
          <div className="project-text-container">
            <h1>City Project</h1>
            <p>Project about filter cities for continents.</p>
            <a href="https://github.com/rubenperezf/city-project-app">Github</a>
          </div>
          <div className="tech-stack-container">
            <p>Tech Stack: React, Html, CSS, JavaScript, SQL</p>
          </div>
        </div>

      </div>

      <div className="more-projects-container">
        <a href="https://github.com/rubenperezf/">Visit my Github for more</a>
      </div>
    </div>
  );
}

export default Portfolio;
