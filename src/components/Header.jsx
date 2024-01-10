import React from "react";

import homeImg from "../images/Glasshouse.png";
import office from "../images/Homepage-img.png";

import "./Header.css";

function Header() {
  return (
    <div className="homepage">
      <div className="homepage--description--bottom">
        <p className="description--text">
          Transforming spaces with creativity and precision, we bring your
          architectural dreams to life.
        </p>
        <p className="big--text">Build Your Dreams.</p>
      </div>
      <div className="homepage--image--container">
        <div className="home--image--homepage">
          <img src={homeImg} alt="homeImg" />
          <p>
            "Crafting Dreams, Building Realities. Arunachalam Infra - Where
            Every Step Tells a Story of Elegance and Affordability."
          </p>
        </div>
        <div className="office--image--homepage">
          <p>
            "Strategic Spaces, Technological Heights. Arunachalam Infra -
            Shaping Corporate Realities with Precision and Style."
          </p>
          <img src={office} alt="office" />
        </div>
      </div>
    </div>
  );
}

export default Header;
