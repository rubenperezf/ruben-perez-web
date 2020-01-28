import React from "react";
import rubenFishing from "../images/likes/ruben-lago.jpg";
import rubenChef from "../images/likes/ruben-chef.jpg"
import rubenBike from "../images/likes/ruben-bike.jpg"
import rubenTravel from "../images/likes/ruben-travel.jpg"
import rubenBasket from "../images/likes/ruben-basket.jpg"
import rubenCrabing from "../images/likes/ruben-crabing.jpeg"



function Likes() {

  return (
    <div className="likes-container">

    <div className="likes-title" id="hola">
      <h1>What I love...</h1>
      </div>

      <div className="likes-card-container">

      <div className="likes-card">
        <div className="image">
          <img src={rubenFishing} />
        </div>
        <div className="details">
          <div className="center">
            <h1>Relax</h1>
            <p>Look for a cool places to rest.</p>
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
            <p>Allways looking for new recepies.</p>
          </div>
        </div>
      </div>

      <div className="likes-card">
        <div className="image">
          <img src={rubenBike} />
        </div>
        <div className="details">
          <div className="center">
            <h1>Sport</h1>
            <p>Love to try new things.</p>
          </div>
        </div>
      </div>

      <div className="likes-card">
        <div className="image">
          <img src={rubenTravel} />
        </div>
        <div class="details">
          <div class="center">
            <h1>Travel</h1>
            <p>Spain is always in the first position but I love to travel.</p>
          </div>
        </div>
      </div>

      <div class="likes-card">
        <div class="image">
          <img src={rubenBasket} />
        </div>
        <div class="details">
          <div class="center">
            <h1>Basketball</h1>
            <p>Playing and watching.</p>
          </div>
        </div>
      </div>

      <div class="likes-card">
        <div class="image">
          <img src={rubenCrabing} />
        </div>
        <div class="details">
          <div class="center">
            <h1>Crabing</h1>
            <p>Bring food to my table.</p>
          </div>
        </div>
      </div>

    </div>
    </div>
  );
}

export default Likes;
