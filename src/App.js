import React from "react";
import "./styles/App.css";
import "./styles/Header.css";
import "./styles/Welcome.css";
import "./styles/Portfolio.css";
import "./styles/Interests.css";
import "./styles/Skills.css";
import "./styles/Footer.css";
import "./styles/GeneralButton.css";
import "./styles/Resume.css";
import "./styles/Phone.css"
import "./styles/Footer.css"
import "./styles/Contact.css"
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
import Skills from "./components/Skills";
import Welcome from "./components/Welcome";
import Portfolio from "./components/Portfolio";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Contact from "./components/Contact"

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Route exact path="/"><Welcome /></Route>
        <Route exact path="/"><Portfolio /></Route>
        <Route exact path="/"><Skills /></Route>
        <Route exact path="/"><Resume /></Route>
        <Route exact path="/"><Interests /></Route>
        <Route exact path="/"><Footer /></Route>
        <Route exact path="/contact" component={Contact}><Contact /></Route>
      </Router>

    </div>
  );
}

export default App;
