import React, { useState, useEffect, useCallback } from "react";
import imgDeveloper from "../images/skills/developer.jpg";
import imgJavaScript from "../images/skills/JavaScript.jpg";
import imgHTML from "../images/skills/html.png";
import imgCSS from "../images/skills/css.png";
import imgReact from "../images/skills/react.png";
import imgRedux from "../images/skills/redux.png";
import imgSQL from "../images/skills/sql.png";
import imgNode from "../images/skills/node.jpg";
import imgMongoDB from "../images/skills/mongodb.jpg";
import imgSpanish from "../images/skills/spanish.jpg";

const DEVELOPER = "developer";
const JAVASCRIPT = "javascript";
const HTML = "html";
const CSS = "css";
const REACTPICTURE = "reactpicture";
const REDUX = "redux";
const SQL = "sql";
const NODE = "node";
const MONGODB = "mongodb";
const SPANISH = "spanish";

const images = {
  [DEVELOPER]: { alt: "skills first image", src: imgDeveloper },
  [JAVASCRIPT]: { alt: "skill JavaScript", src: imgJavaScript },
  [HTML]: { alt: "skill html", src: imgHTML },
  [CSS]: { alt: "skill css", src: imgCSS },
  [REACTPICTURE]: { alt: "skill react", src: imgReact },
  [REDUX]: { alt: "skill redux", src: imgRedux },
  [SQL]: { alt: "skill sql", src: imgSQL },
  [NODE]: { alt: "skill node", src: imgNode },
  [MONGODB]: { alt: "skill mongodb", src: imgMongoDB },
  [SPANISH]: { alt: "skill spanish", src: imgSpanish }
};
function Skills() {
  const [selection, setSelection] = useState(DEVELOPER);
  const handleClickJavaScript = useCallback(() => {
    setSelection(JAVASCRIPT);
  }, []);
  const handleClickHTML = useCallback(() => {
    setSelection(HTML);
  }, []);
  const handleClickCSS = useCallback(() => {
    setSelection(CSS);
  }, []);
  const handleClickREACT = useCallback(() => {
    setSelection(REACTPICTURE);
  }, []);
  const handleClickREDUX = useCallback(() => {
    setSelection(REDUX);
  }, []);
  const handleClickSQL = useCallback(() => {
    setSelection(SQL);
  }, []);
  const handleClickNODE = useCallback(() => {
    setSelection(NODE);
  }, []);
  const handleClickMONGODB = useCallback(() => {
    setSelection(MONGODB);
  }, []);
  const handleClickSpanish = useCallback(() => {
    setSelection(SPANISH);
  }, []);

  const { alt, src } = images[selection];
  return (
    <div className="skills-container">
    <div className="skills-title" id="skills">
    <h1>My Skills</h1>
  </div>
    <div className="skills-picture-container">

      <div className="skills-picture">
        <img src={src} alt={alt} />
      </div>
      <div className="skills-bottoms">
        <div className="box-1">
          <div className="btn btn-one" onClick={handleClickJavaScript}>
            <span>JavaScript</span>
          </div>
        </div>
        <div className="box-1">
          <div className="btn btn-one" onClick={handleClickHTML}>
            <span>JavaScript</span>
          </div>
        </div>
        <div className="box-1">
          <div className="btn btn-one" onClick={handleClickCSS}>
            <span>CSS</span>
          </div>
        </div>
        <div className="box-1">
          <div className="btn btn-one" onClick={handleClickREACT}>
            <span>React</span>
          </div>
        </div>
        <div className="box-1">
          <div className="btn btn-one" onClick={handleClickREDUX}>
            <span>Redux</span>
          </div>
        </div>
        <div className="box-1">
          <div className="btn btn-one" onClick={handleClickSQL}>
            <span>imgSQL</span>
          </div>
        </div>
        <div className="box-1">
          <div className="btn btn-one" onClick={handleClickNODE}>
            <span>NODE</span>
          </div>
        </div>
        <div className="box-1">
          <div className="btn btn-one" onClick={handleClickMONGODB}>
            <span>MongoDB</span>
          </div>
        </div>
        <div className="box-1">
          <div className="btn btn-one" onClick={handleClickSpanish}>
            <span>Spanish</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Skills;
// function Skills() {
//   const [click1, setClick1] = useState(false);
//   const [click2, setClick2] = useState(false);
//   const [click3, setClick3] = useState(false);
//   const [click4, setClick4] = useState(false);
//   const [click5, setClick5] = useState(false);
//   const [click6, setClick6] = useState(false);
//   const [click7, setClick7] = useState(false);
//   const [click8, setClick8] = useState(false);
//   const [click9, setClick9] = useState(false);
//   console.log(1, click1);
//   console.log(2, click2);
//   console.log(3, click3);
//   console.log(4, click4);
//   console.log(5, click5);
//   console.log(6, click6);
//   console.log(7, click7);
//   console.log(8, click8);
//   console.log(9, click9);
//   useEffect(() => {
//     if (click1 === true) {
//       setClick2(false);
//       setClick3(false);
//       setClick4(false);
//       setClick5(false);
//       setClick6(false);
//       setClick7(false);
//       setClick8(false);
//       setClick9(false);
//     }

//     if (click2 === true) {
//       setClick1(false);
//       setClick3(false);
//       setClick4(false);
//       setClick5(false);
//       setClick6(false);
//       setClick7(false);
//       setClick8(false);
//       setClick9(false);
//     }
//     if (click3 === true) {
//       setClick1(false);
//       setClick2(false);
//       setClick4(false);
//       setClick5(false);
//       setClick6(false);
//       setClick7(false);
//       setClick8(false);
//       setClick9(false);
//     }
//     if (click4 === true) {
//       setClick1(false);
//       setClick2(false);
//       setClick3(false);
//       setClick5(false);
//       setClick6(false);
//       setClick7(false);
//       setClick8(false);
//       setClick9(false);
//     }
//     if (click5 === true) {
//       setClick1(false);
//       setClick2(false);
//       setClick3(false);
//       setClick4(false);
//       setClick6(false);
//       setClick7(false);
//       setClick8(false);
//       setClick9(false);
//     }
//     if (click6 === true) {
//       setClick1(false);
//       setClick2(false);
//       setClick3(false);
//       setClick4(false);
//       setClick5(false);
//       setClick7(false);
//       setClick8(false);
//       setClick9(false);
//     }
//     if (click7 === true) {
//       setClick1(false);
//       setClick2(false);
//       setClick3(false);
//       setClick4(false);
//       setClick5(false);
//       setClick6(false);
//       setClick8(false);
//       setClick9(false);
//     }
//     if (click8 === true) {
//       setClick1(false);
//       setClick2(false);
//       setClick3(false);
//       setClick4(false);
//       setClick5(false);
//       setClick6(false);
//       setClick7(false);
//       setClick9(false);
//     }
//     if (click9 === true) {
//       setClick1(false);
//       setClick2(false);
//       setClick3(false);
//       setClick4(false);
//       setClick5(false);
//       setClick6(false);
//       setClick7(false);
//       setClick8(false);
//     }
//   });
//   if (click1 === true) {
//     return (
//       <div className="skills-container">
//         <div className="skills-title" id="skills">
//           <h1>My Skills</h1>
//         </div>
//         <div className="pictures-text-container">
//           <div className="skills-picture">
//             <img src={JavaScript} alt="javascript skill" />
//           </div>
//           <div className="skills-buttons">
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick1(true)}>
//                 <span>JavaScript</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick2(true)}>
//                 <span>HTML</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick3(true)}>
//                 <span>CSS</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick4(true)}>
//                 <span>React</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick5(true)}>
//                 <span>Redux</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick6(true)}>
//                 <span>SQL</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick7(true)}>
//                 <span>Node.js</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick8(true)}>
//                 <span>MongoDB</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick9(true)}>
//                 <span>Spanish</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   } else if (click2 === true) {
//     return (
//       <div className="skills-container">
//         <div className="skills-title" id="skills">
//           <h1>My Skills</h1>
//         </div>
//         <div className="pictures-text-container">
//           <div className="skills-picture">
//             <img src={HTML} alt="ruben riding a bike" />
//           </div>
//           <div className="skills-buttons">
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick1(true)}>
//                 <span>JavaScript</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick2(true)}>
//                 <span>HTML</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick3(true)}>
//                 <span>CSS</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick4(true)}>
//                 <span>React</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick5(true)}>
//                 <span>Redux</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick6(true)}>
//                 <span>SQL</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick7(true)}>
//                 <span>Node.js</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick8(true)}>
//                 <span>MongoDB</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick9(true)}>
//                 <span>Spanish</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   } else if (click4 === true) {
//     return (
//       <div className="skills-container">
//         <div className="skills-title" id="skills">
//           <h1>My Skills</h1>
//         </div>
//         <div className="pictures-text-container">
//           <div className="skills-picture">
//             <img src={ReactPicture} alt="ruben riding a bike" />
//           </div>
//           <div className="skills-buttons">
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick1(true)}>
//                 <span>JavaScript</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick2(true)}>
//                 <span>HTML</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick3(true)}>
//                 <span>CSS</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick4(true)}>
//                 <span>React</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick5(true)}>
//                 <span>Redux</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick6(true)}>
//                 <span>SQL</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick7(true)}>
//                 <span>Node.js</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick8(true)}>
//                 <span>MongoDB</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick9(true)}>
//                 <span>Spanish</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   } else if (click5 === true) {
//     return (
//       <div className="skills-container">
//         <div className="skills-title" id="skills">
//           <h1>My Skills</h1>
//         </div>
//         <div className="pictures-text-container">
//           <div className="skills-picture">
//             <img src={Redux} alt="ruben riding a bike" />
//           </div>
//           <div className="skills-buttons">
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick1(true)}>
//                 <span>JavaScript</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick2(true)}>
//                 <span>HTML</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick3(true)}>
//                 <span>CSS</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick4(true)}>
//                 <span>React</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick5(true)}>
//                 <span>Redux</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick6(true)}>
//                 <span>SQL</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick7(true)}>
//                 <span>Node.js</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick8(true)}>
//                 <span>MongoDB</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick9(true)}>
//                 <span>Spanish</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   } else if (click6 === true) {
//     return (
//       <div className="skills-container">
//         <div className="skills-title" id="skills">
//           <h1>My Skills</h1>
//         </div>
//         <div className="pictures-text-container">
//           <div className="skills-picture">
//             <img src={SQL} alt="ruben riding a bike" />
//           </div>
//           <div className="skills-buttons">
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick1(true)}>
//                 <span>JavaScript</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick2(true)}>
//                 <span>HTML</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick3(true)}>
//                 <span>CSS</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick4(true)}>
//                 <span>React</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick5(true)}>
//                 <span>Redux</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick6(true)}>
//                 <span>SQL</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick7(true)}>
//                 <span>Node.js</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick8(true)}>
//                 <span>MongoDB</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick9(true)}>
//                 <span>Spanish</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   } else if (click7 === true) {
//     return (
//       <div className="skills-container">
//         <div className="skills-title" id="skills">
//           <h1>My Skills</h1>
//         </div>
//         <div className="pictures-text-container">
//           <div className="skills-picture">
//             <img src={Node} alt="ruben riding a bike" />
//           </div>
//           <div className="skills-buttons">
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick1(true)}>
//                 <span>JavaScript</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick2(true)}>
//                 <span>HTML</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick3(true)}>
//                 <span>CSS</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick4(true)}>
//                 <span>React</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick5(true)}>
//                 <span>Redux</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick6(true)}>
//                 <span>SQL</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick7(true)}>
//                 <span>Node.js</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick8(true)}>
//                 <span>MongoDB</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick9(true)}>
//                 <span>Spanish</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   } else if (click8 === true) {
//     return (
//       <div className="skills-container">
//         <div className="skills-title" id="skills">
//           <h1>My Skills</h1>
//         </div>
//         <div className="pictures-text-container">
//           <div className="skills-picture">
//             <img src={MongoDB} alt="ruben riding a bike" />
//           </div>
//           <div className="skills-buttons">
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick1(true)}>
//                 <span>JavaScript</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick2(true)}>
//                 <span>HTML</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick3(true)}>
//                 <span>CSS</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick4(true)}>
//                 <span>React</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick5(true)}>
//                 <span>Redux</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick6(true)}>
//                 <span>SQL</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick7(true)}>
//                 <span>Node.js</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick8(true)}>
//                 <span>MongoDB</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick9(true)}>
//                 <span>Spanish</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   } else if (click9 === true) {
//     return (
//       <div className="skills-container">
//         <div className="skills-title" id="skills">
//           <h1>My Skills</h1>
//         </div>
//         <div className="pictures-text-container">
//           <div className="skills-picture">
//             <img src={Spanish} alt="ruben riding a bike" />
//           </div>
//           <div className="skills-buttons">
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick1(true)}>
//                 <span>JavaScript</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick2(true)}>
//                 <span>HTML</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick3(true)}>
//                 <span>CSS</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick4(true)}>
//                 <span>React</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick5(true)}>
//                 <span>Redux</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick6(true)}>
//                 <span>SQL</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick7(true)}>
//                 <span>Node.js</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick8(true)}>
//                 <span>MongoDB</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick9(true)}>
//                 <span>Spanish</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   } else {
//     return (
//       <div className="skills-container">
//         <div className="skills-title" id="skills">
//           <h1>My Skills</h1>
//         </div>
//         <div className="pictures-text-container">
//           <div className="skills-picture">
//             <img src={Developer} alt="ruben riding a bike" />
//           </div>
//           <div className="skills-buttons">
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick1(true)}>
//                 <span>JavaScript</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick2(true)}>
//                 <span>HTML</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick3(true)}>
//                 <span>CSS</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick4(true)}>
//                 <span>React</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick5(true)}>
//                 <span>Redux</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick6(true)}>
//                 <span>SQL</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick7(true)}>
//                 <span>Node.js</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick8(true)}>
//                 <span>MongoDB</span>
//               </div>
//             </div>
//             <div className="box-1">
//               <div className="btn btn-one" onClick={() => setClick9(true)}>
//                 <span>Spanish</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Skills;
