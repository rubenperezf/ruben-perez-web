import React, {useEffect} from "react"
import RubenWelcome from "../images/welcome/ruben-welcome.jpg"



function Welcome() {
    return (
   
        <div className="welcome-container" style={{backgroundImage: `url(${RubenWelcome})`}}>
            <div className="text">
                <p>Hi! I'm</p>
                <h1 >Ruben Perez</h1>
            </div>

            <div class="box-1">
  <div class="btn btn-one">
    <span>HOVER ME</span>
  </div>
  <div class="btn btn-one">
    <span>HOVER ME</span>
  </div>
  <div class="btn btn-one">
  <span>HOVER ME</span>
  </div>
  
</div>

        </div>


    )
}

export default Welcome