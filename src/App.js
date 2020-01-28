import React from "react";
import "./styles/App.css";
import "./styles/Header.css"
import "./styles/Welcome.css"
import "./styles/Portafolio.css"
import "./styles/Likes.css"
import "./styles/Footer.css"

import Header from "./components/Header"
import Welcome from "./components/Welcome"
import Portafolio from "./components/Portafolio"
import Likes from "./components/Likes"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome/>
      <Portafolio/>
      <Likes/>
      <Footer />
    </div>
  );
}

export default App;
