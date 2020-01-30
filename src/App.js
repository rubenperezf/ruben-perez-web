import React from "react";
import "./styles/App.css";
import "./styles/Header.css";
import "./styles/Welcome.css";
import "./styles/Portfolio.css";
import "./styles/Likes.css";
import "./styles/Skills.css";
import "./styles/Footer.css";
import "./styles/GeneralButton.css";
import "./styles/Resume.css";
import "./styles/Phone.css"
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
import Skills from "./components/Skills";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Portfolio from "./components/Portfolio";
import Likes from "./components/Likes";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Welcome />
        <Portfolio />
        <Skills />
        <Resume />
        <Likes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
