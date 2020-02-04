import React, { useEffect } from "react";
import RubenWelcome from "../images/welcome/ruben-welcome.jpg";

function Welcome() {
  return (
    <div
      className="welcome-container"
      style={{ backgroundImage: `url(${RubenWelcome})` }}
    >
      <div className="text">
        <p>Hi! I'm</p>
        <h1>Ruben Perez</h1>
      </div>

      <div className="box-1">
        <a href="#portafolio">
          <div className="btn btn-one">
            <span>PORTAFOLIO</span>
          </div>
        </a>
        <a href="#skills">
          <div className="btn btn-one">
            <span>SKILLS</span>
          </div>
        </a>
        <a href="#resume">
          <div className="btn btn-one">
            <span>RESUME</span>
          </div>
        </a>
        <a href="#likes">
          <div className="btn btn-one">
            <span>LIKES</span>
          </div>
        </a>
        <a href="/contact"  target="_blanck">
          <div className="btn btn-one">
            <span>CONTACT</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Welcome;
