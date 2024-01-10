import React from "react";

import img1 from "../images/architecture/arch1.png";
import img2 from "../images/architecture/arch2.png";
import img3 from "../images/architecture/arch3.png";
import img4 from "../images/architecture/arch4.png";
import img5 from "../images/architecture/arch5.png";
import img6 from "../images/architecture/arch6.png";
import img7 from "../images/architecture/arch7.png";
import img8 from "../images/architecture/arch8.png";

import Footer from "./Footer";

import "./Architecture.css";

function Architecture() {
  return (
    <>
      <div className="architecture">
        <div className="heading heading1">
          <p className="heading--text heading--text1">--Innovative Designs</p>
          <p className="architecture--description architecture--description1">
            Explore our portfolio of cutting-edge architectural designs.
          </p>
          <div className="heading--images--container">
            <div className="heading--images">
              <img src={img1} alt="build1" />
              <img src={img2} alt="build2" />
            </div>
            <p className="side--description">
              From contemporary to classic, we bring innovation to life.
            </p>
          </div>
        </div>

        <div className="heading heading2">
          <p className="heading--text heading--text2">
            --Sustainable Architecture
          </p>
          <p className="architecture--description architecture--description1">
            Discover how we integrate sustainability into every design.
          </p>
          <div className="heading--images--container heading--images--container2">
            <p className="side--description">
              Committed to eco-friendly practices.
            </p>
            <div className="heading--images">
              <img src={img3} alt="build3" />
              <img src={img4} alt="build4" />
            </div>
          </div>
        </div>

        <div className="heading heading3">
          <p className="heading--text heading--text2">--Spatial Efficiency</p>
          <div className="heading3--images">
            <div className="heading3--images--container">
              <img src={img7} alt="build5" />
              <p>
                See how our designs enhance the utility of every square foot.
              </p>
            </div>
            <div className="heading3--images--container">
              <img src={img8} alt="build5" />
              <p>Optimizing spaces for functionality and aesthetics.</p>
            </div>
          </div>
        </div>

        <div className="heading heading3 heading4">
          <p className="heading--text heading--text2">--Future-Ready Designs</p>
          <div className="heading3--images">
            <div className="heading3--images--container">
              <img src={img5} alt="build5" />
              <p>Anticipating tomorrow's needs in today's designs.</p>
            </div>
            <div className="heading3--images--container">
              <img src={img6} alt="build5" />
              <p>
                Join us in shaping the future through architectural innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Architecture;
