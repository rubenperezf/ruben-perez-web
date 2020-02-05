import React from "react";
import parentsHelpParents from "../images/portfolio/parents-help-parents.png";
import jollo from "../images/portfolio/jollo.png";
import matchingGame from "../images/portfolio/matching-game.png";
import cityProject from "../images/portfolio/city-project.png";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 800,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function Porfolio() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [openParents, setOpenParents] = React.useState(false);
  const [openJollo, setOpenJollo] = React.useState(false);
  const [openGame, setOpenGame] = React.useState(false);
  const [openCountries, setOpenCountries] = React.useState(false);
  const handleOpenParents = () => {
    setOpenParents(true);
  };

  const handleCloseParents = () => {
    setOpenParents(false);
  };
  const handleOpenJollo = () => {
    setOpenJollo(true);
  };

  const handleCloseJollo = () => {
    setOpenJollo(false);
  };
  const handleOpenGame = () => {
    setOpenGame(true);
  };

  const handleCloseGame = () => {
    setOpenGame(false);
  };
  const handleOpenCountries = () => {
    setOpenCountries(true);
  };

  const handleCloseCountries = () => {
    setOpenCountries(false);
  };

  return (
    <div className="portfolio-container" id="portfolio">
      <div className="portfolio-title">
        <h1>Portfolio</h1>
      </div>

      <div className="box-1">
        <div className="btn btn-one" onClick={handleOpenParents}>
          <span>Parents Help Parents</span>
        </div>
      </div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={openParents}
        onClose={handleCloseParents}
      >
        <div style={modalStyle} className={classes.paper}>
          <img
            src={parentsHelpParents}
            alt="parent help parents project"
            width="400"
          />

          <h1>Parents Help Parents</h1>
          <p>
            Final project at JRS Coding School. Parents Help Parents is an app
            that helps families connect with other families so they can
            collaborate with childcare at home.
          </p>
          <p>Tech Stack: React, Node.js, MongoDB, SendGrid, Auth0</p>
          <a href="https://github.com/rubenperezf/parents-help-parents">
            Github
          </a>
        </div>
      </Modal>

      <br></br>
      <br></br>

      <div className="box-1">
        <div className="btn btn-one" onClick={handleOpenJollo}>
          <span>Jollo</span>
        </div>
      </div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={openJollo}
        onClose={handleCloseJollo}
      >
        <div style={modalStyle} className={classes.paper}>
          <img src={jollo} alt="parent help parents project" width="400" />

          <h1>Jollo</h1>
          <p>
            Final group project at JRS Coding school. Jollo is an app where
            people can learn about and join social groups and events.
          </p>
          <p>Tech Stack: React, Node.js, MongoDB, SendGrid, Auth0</p>
          <a href="https://github.com/ColbyBurke/the-pregame-app">Github</a>
        </div>
      </Modal>

      <br></br>
      <br></br>

            <div className="box-1">
          <div className="btn btn-one" onClick={handleOpenGame}>
            <span>Matching Game</span>
          </div>
        </div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={openGame}
          onClose={handleCloseGame}
        >
          <div style={modalStyle} className={classes.paper}>
            <img
              src={matchingGame}
              alt="parent help parents project"
              width="400"
            />

            <h1>Matching Game</h1>
            <p>
              Game designed with JavaScript, HTML and CSS. The objective is to
              find the missing emoji symbol.
            </p>
            <p>Tech Stack: Html, CSS, JavaScript</p>
            <a href="https://github.com/rubenperezf/matching-game">Github</a>
          </div>
        </Modal>
<br></br>
<br></br>


        <div className="box-1">
          <div className="btn btn-one" onClick={handleOpenCountries}>
            <span>City Project</span>
          </div>
        </div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={openCountries}
          onClose={handleCloseCountries}
        >
          <div style={modalStyle} className={classes.paper}>
            <img
              src={cityProject}
              alt="parent help parents project"
              width="400"
            />

            <h1>City Project</h1>
            <p>Project about filter cities for continents. </p>
            <p>Tech Stack: React, Html, CSS, JavaScript, SQL</p>
            <a href="https://github.com/rubenperezf/city-project-app">Github</a>
          </div>
        </Modal>


      <div className="more-projects-container">
        <a href="https://github.com/rubenperezf/">Visit my Github for more</a>
      </div>
    </div>

  );
}
