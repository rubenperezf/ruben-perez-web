import React from "react";
import instagram from "../images/social-media/instagram.png"
import facebook from "../images/social-media/facebook.png"
import linkedin from "../images/social-media/linkedin.png"
import github from "../images/social-media/github.png"
import twitter from "../images/social-media/twitter.png"

function Footer() {
  return (
    <div className="footer-container">
      <h1>Let me show what I am be able to do.</h1>
      <p>&copy; 2020 Ruben Perez</p>
    <div className="social-media-container">
      <div class="btn_wrap">
        <span>Social Media</span>
        <div class="container">
            <a href="https://www.linkedin.com/in/rubenperezf/?locale=en_US"><i class="fab fa-linkedin-f"><img src={linkedin} alt="ruben linkedin account" width="40px"/></i></a>
            <a href="https://github.com/rubenperezf/"><i class="fab fa-github"><img src={github} alt="ruben github account" width="40px"/></i></a>
            <a href="https://twitter.com/rubenscalabrine"><i class="fab fa-twitter"><img src={twitter} alt="ruben twitter account" width="40px"/></i></a>
            <a href="https://www.instagram.com/rubenscalabrine/"><i class="fab fa-instagram"><img src={instagram} alt="ruben instagram account" width="40px"/></i></a>
        </div>
    </div>
    </div>
    </div>
  );
}

export default Footer;
