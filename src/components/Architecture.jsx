import React, { useEffect } from "react";

import aos from "aos";
import "aos/dist/aos.css";

import img1 from "../images/architecture/arch1.jpeg";
import img2 from "../images/architecture/arch2.jpeg";
import img3 from "../images/architecture/arch3.jpeg";
import img4 from "../images/architecture/arch4.jpeg";
import img5 from "../images/architecture/arch5.png";
import img6 from "../images/architecture/arch6.png";
import img7 from "../images/architecture/arch7.png";
import img8 from "../images/architecture/arch8.png";

import Footer from "./Footer";

import "./Architecture.css";

function Architecture() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="architecture">
        <div className="heading heading1">
          <p className="heading--text heading--text1" data-aos="fade-right">
            --Innovative Designs
          </p>
          <p
            className="architecture--description architecture--description1"
            data-aos="fade-right"
          >
            Explore our portfolio of cutting-edge architectural designs.
          </p>
          <div className="heading--images--container">
            <div className="heading--images">
              <img
                src={img1}
                alt="build1"
                className="arch--images project--img"
                data-aos="fade-up"
              />
              <img
                src={img2}
                alt="build2"
                className="arch--images project--img"
                data-aos="fade-up"
              />
            </div>
            <p className="side--description" data-aos="fade-up">
              From contemporary to classic, we bring innovation to life.
            </p>
          </div>
        </div>

        <div className="heading heading2">
          <p className="heading--text heading--text2" data-aos="fade-right">
            --Sustainable Architecture
          </p>
          <p
            className="architecture--description architecture--description1"
            data-aos="fade-right"
          >
            Discover how we integrate sustainability into every design.
          </p>
          <div className="heading--images--container heading--images--container2">
            <p className="side--description" data-aos="fade-right">
              Committed to eco-friendly practices.
            </p>
            <div className="heading--images">
              <img
                src={img3}
                alt="build3"
                className="arch--images arch--image3 project--img"
                data-aos="fade-up"
              />
              <img
                src={img4}
                alt="build4"
                className="arch--images project--img"
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>

        <div className="heading heading3">
          <p className="heading--text heading--text2" data-aos="fade-up">
            --Spatial Efficiency
          </p>
          <div className="heading3--images">
            <div className="heading3--images--container">
              <img
                src={img7}
                alt="build5"
                className="arch--images project--img"
                data-aos="fade-right"
              />
              <p data-aos="fade-up">
                See how our designs enhance the utility of every square foot.
              </p>
            </div>
            <div className="heading3--images--container">
              <img
                src={img8}
                alt="build5"
                className="arch--images project--img"
                data-aos="fade-up"
              />
              <p data-aos="fade-up">
                Optimizing spaces for functionality and aesthetics.
              </p>
            </div>
          </div>
        </div>

        <div className="heading heading3 heading4">
          <p className="heading--text heading--text2" data-aos="fade-up">
            --Future-Ready Designs
          </p>
          <div className="heading3--images">
            <div className="heading3--images--container">
              <img
                src={img5}
                alt="build5"
                className="arch--images project--img"
                data-aos="fade-right"
              />
              <p data-aos="fade-down">
                Anticipating tomorrow's needs in today's designs.
              </p>
            </div>
            <div className="heading3--images--container">
              <img
                src={img6}
                alt="build5"
                className="arch--images project--img"
                data-aos="fade-up"
              />
              <p data-aos="fade-down">
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
