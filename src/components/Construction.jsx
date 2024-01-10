import React from "react";

import img1 from "../images/construction/const1.png";
import img2 from "../images/construction/const2.png";
import img3 from "../images/construction/const3.png";
import img4 from "../images/construction/const4.png";
import img5 from "../images/construction/const5.png";
import img6 from "../images/construction/const6.png";
import img7 from "../images/construction/const7.png";
import img8 from "../images/construction/const8.png";

import Footer from "./Footer";

import "./Construction.css";

function Construction() {
  return (
    <>
      <div className="architecture">
        <div className="heading heading1">
          <p className="heading--text heading--text1">--Iconic Landmarks</p>
          <p className="architecture--description architecture--description1">
            Contributing to cityscapes with iconic architectural landmarks.
          </p>
          <div className="heading--images--container">
            <div className="heading--images">
              <img src={img1} alt="build1" />
              <img src={img2} alt="build2" />
            </div>
            <p className="side--description">
              Each and every project of ours redefine skylines.
            </p>
          </div>
        </div>

        <div className="heading heading3">
          <p className="heading--text heading--text2">
            --Client-Centric Approach
          </p>
          <div className="heading3--images">
            <div className="heading3--images--container">
              <img src={img7} alt="build5" />
              <p>
                Experience architecture tailored to your unique requirements.
              </p>
            </div>
            <div className="heading3--images--container">
              <img src={img8} alt="build5" />
              <p>Your vision, our blueprint.</p>
            </div>
          </div>
        </div>

        <div className="heading heading2">
          <p className="heading--text heading--text2">
            --Materials & Craftsmanship
          </p>
          <p className="architecture--description architecture--description1">
            Unveiling the artistry behind our architectural creations.
          </p>
          <div className="heading--images--container heading--images--container2">
            <p className="side--description">
              Explore the choice of materials and meticulous craftsmanship.
            </p>
            <div className="heading--images">
              <img src={img3} alt="build3" />
              <img src={img4} alt="build4" />
            </div>
          </div>
        </div>

        <div className="heading heading3 heading4">
          <p className="heading--text heading--text2">
            --Modular and Sturdy Construction
          </p>
          <div className="heading3--images">
            <div className="heading3--images--container">
              <img src={img5} alt="build5" />
              <p>Our constructions can withstand almost every conditions.</p>
            </div>
            <div className="heading3--images--container">
              <img src={img6} alt="build5" />
              <p>Constructions that are Classy and Elegant.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Construction;
