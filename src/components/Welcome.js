import React from "react"
import RubenWelcome from "../images/welcome/ruben-welcome.jpg"

function Welcome() {
    return (
        <div className="welcome-container" style={{backgroundImage: `url(${RubenWelcome})`}}>
            <div className="text">
                <p>Hi! I'm</p>
                <h1>Ruben Perez</h1>
            </div>

        </div>
    )
}

export default Welcome