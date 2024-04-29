import React, { useEffect } from "react";

import aos from "aos";
import "aos/dist/aos.css";

import homeImg from "../images/Home1.jpeg";
import office from "../images/Home2.jpeg";

import "./Header.css";

function Header() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="homepage">
      <div className="homepage--description--bottom">
        <p className="description--text" data-aos="fade-right">
          Transforming spaces with creativity and precision, we bring your
          architectural dreams to life.
        </p>
        <p className="big--text" data-aos="fade-right">
          Build Your Dreams.
        </p>
      </div>
      <div className="homepage--image--container">
        <div className="home--image--homepage">
          <img
            src={homeImg}
            alt="homeImg"
            className="project--img"
            data-aos="fade-right"
          />
          <p data-aos="fade-up">
            "Crafting Dreams, Building Realities. Arunachalam Infra - Where
            Every Step Tells a Story of Elegance and Affordability."
          </p>
        </div>
        <div className="office--image--homepage">
          <p data-aos="fade-up">
            "Strategic Spaces, Technological Heights. Arunachalam Infra -
            Shaping Corporate Realities with Precision and Style."
          </p>
          <img
            src={office}
            alt="office"
            className="project--img"
            data-aos="fade-up"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
