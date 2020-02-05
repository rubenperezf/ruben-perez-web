import React from "react";
import parentsHelpParents from "../images/portfolio/parents-help-parents.png";
import jollo from "../images/portfolio/jollo.png";
import matchingGame from "../images/portfolio/matching-game.png";
import cityProject from "../images/portfolio/city-project.png";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 800,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Porfolio() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="portfolio-container">
      <div className="portfolio-title">
        <h1>Portfolio</h1>
      </div>

      <div className="project-container">
      <div className="box-1" >
          <div className="btn btn-one" onClick={handleOpen}>
            <span>Parents Help Parents</span>
          </div>
        </div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
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
      </div>

      <div className="project-container">
      <div className="box-1" >
          <div className="btn btn-one" onClick={handleOpen}>
            <span>Jollo</span>
          </div>
        </div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>

    <img
                src={jollo}
                alt="parent help parents project"
                width="400"
              />
  

            <h1>Jollo</h1>
            <p>
            Final project at JRS Coding School. Parents Help Parents is an app
              that helps families connect with other families so they can
              collaborate with childcare at home.
            </p>
            <p>Tech Stack: React, Node.js, MongoDB, Auth0, Material UI</p>
            <a href="https://github.com/ColbyBurke/the-pregame-app">Github</a>
        </div>
      </Modal>
      </div>


      <div className="project-container">
      <div className="box-1" >
          <div className="btn btn-one" onClick={handleOpen}>
            <span>Matching Game</span>
          </div>
        </div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>

    <img
                src={matchingGame}
                alt="parent help parents project"
                width="400"
              />
  

            <h1>Matching Game</h1>
            <p>
            Game designed with JavaScript, HTML and CSS. The objective is to find the missing emoji symbol.
            </p>
            <p>Tech Stack: Html, CSS, JavaScript</p>
            <a href="https://github.com/rubenperezf/matching-game">Github</a>
        </div>
      </Modal>
      </div>

      <div className="project-container">
      <div className="box-1" >
          <div className="btn btn-one" onClick={handleOpen}>
            <span>City Project</span>
          </div>
        </div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>

    <img
                src={cityProject}
                alt="parent help parents project"
                width="400"
              />
  

            <h1>City Project</h1>
            <p>
            Project about filter cities for continents.            </p>
            <p>Tech Stack: React, Html, CSS, JavaScript, SQL</p>
            <a href="https://github.com/rubenperezf/city-project-app">Github</a>
        </div>
      </Modal>
      </div>

      <div className="more-projects-container">
        <a href="https://github.com/rubenperezf/">Visit my Github for more</a>
      </div>
      

      </div>
      
  

  );
}




