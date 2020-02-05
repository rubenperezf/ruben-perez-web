import React from "react";
import rubenFishing from "../images/likes/ruben-lago.jpg";
import rubenChef from "../images/likes/ruben-chef.jpg";
import rubenBike from "../images/likes/ruben-bike.jpg";
import rubenTravel from "../images/likes/ruben-travel.jpg";
import rubenBasket from "../images/likes/ruben-basket.jpg";
import rubenCrabing from "../images/likes/ruben-crabing.jpeg";

function Interests() {
  return (
    <div className="likes-container">
      <div className="likes-title" id="likes">
        <h1>What I love...</h1>
      </div>

      <div className="likes-card-container">
        <div className="likes-card">
          <div className="image">
            <img src={rubenFishing} />
          </div>
          <div className="details">
            <div className="center">
              <h1>Relaxing</h1>
              <p>Being in nature.</p>
            </div>
          </div>
        </div>

        <div className="likes-card">
          <div className="image">
            <img src={rubenChef} />
          </div>
          <div className="details">
            <div className="center">
              <h1>Cooking</h1>
              <p>Looking for new recipes.</p>
            </div>
          </div>
        </div>

        <div className="likes-card">
          <div className="image">
            <img src={rubenBike} />
          </div>
          <div className="details">
            <div className="center">
              <h1>Excercising</h1>
              <p>Playing different sports.</p>
            </div>
          </div>
        </div>

        <div className="likes-card">
          <div className="image">
            <img src={rubenTravel} />
          </div>
          <div className="details">
            <div className="center">
              <h1>Traveling</h1>
              <p>Going to Spain and discovering new places.</p>
            </div>
          </div>
        </div>

        <div className="likes-card">
          <div className="image">
            <img src={rubenBasket} />
          </div>
          <div className="details">
            <div className="center">
              <h1>Basketball</h1>
              <p>Playing and watching.</p>
            </div>
          </div>
        </div>

        <div className="likes-card">
          <div className="image">
            <img src={rubenCrabing} />
          </div>
          <div className="details">
            <div className="center">
              <h1>Crabbing</h1>
              <p>My favorite hobby.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interests;
