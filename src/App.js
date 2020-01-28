import React from "react";
import ReactDOM from 'react-dom';
import "./styles/App.css";
import "./styles/Header.css"
import "./styles/Welcome.css"
import "./styles/Portafolio.css"
import "./styles/Likes.css"
import "./styles/Footer.css"
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";

import Header from "./components/Header"
import Welcome from "./components/Welcome"
import Portafolio from "./components/Portafolio"
import Likes from "./components/Likes"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Router history={history}>
      <Header />
      <Welcome/>
      <Portafolio/>
      <Likes/>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
