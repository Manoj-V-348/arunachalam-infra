import React from "react";

import img1 from "../images/additional/add1.png";
import img2 from "../images/additional/add2.png";
import img3 from "../images/additional/add3.png";
import img4 from "../images/additional/add4.png";
import img5 from "../images/additional/add5.png";
import img6 from "../images/additional/add6.png";
import img7 from "../images/additional/add7.png";
import img8 from "../images/additional/add8.png";
import img9 from "../images/additional/add9.png";
import img10 from "../images/additional/add10.png";

import Footer from "./Footer";

function Additional() {
  return (
    <>
      <div className="architecture">
        <div className="heading heading1">
          <p className="heading--text heading--text1">--Security Solutions</p>
          <p className="architecture--description architecture--description1">
            Integration of CCTV cameras with network servers for enhanced
            surveillance.
          </p>
          <div className="heading--images--container">
            <div className="heading--images">
              <img src={img1} alt="build1" />
              <img src={img2} alt="build2" />
            </div>
            <p className="side--description">
              Comprehensive security systems tailored for your needs.
            </p>
          </div>
        </div>

        <div className="heading heading3">
          <p className="heading--text heading--text2">--Network Servers</p>
          <div className="heading3--images">
            <div className="heading3--images--container">
              <img src={img3} alt="build5" />
              <p>Robust network servers ensuring seamless connectivity.</p>
            </div>
            <div className="heading3--images--container">
              <img src={img4} alt="build5" />
              <p>Customized solutions for efficient data management.</p>
            </div>
          </div>
        </div>

        <div className="heading heading2">
          <p className="heading--text heading--text2">--CCTV Installation</p>
          <p className="architecture--description architecture--description1">
            Professional installation of CCTV cameras for enhanced security.
          </p>
          <div className="heading--images--container heading--images--container2">
            <p className="side--description">
              Network connectivity for remote monitoring and surveillance.
            </p>
            <div className="heading--images">
              <img src={img5} alt="build3" />
              <img src={img6} alt="build4" />
            </div>
          </div>
        </div>

        <div className="heading heading3 heading4">
          <p className="heading--text heading--text2">--Laptop Providers</p>
          <div className="heading3--images">
            <div className="heading3--images--container">
              <img src={img7} alt="build5" />
              <p>High-quality laptops for personal and business use.</p>
            </div>
            <div className="heading3--images--container">
              <img src={img8} alt="build5" />
              <p>Tailored packages to meet your computing needs.</p>
            </div>
          </div>
        </div>

        <div className="heading heading1">
          <p className="heading--text heading--text1">
            --Solar Power Plants Installation
          </p>
          <p className="architecture--description architecture--description1">
            Expert installation for eco-friendly and cost-effective power
            generation.
          </p>
          <div className="heading--images--container">
            <div className="heading--images">
              <img src={img9} alt="build1" />
              <img src={img10} alt="build2" />
            </div>
            <p className="side--description">
              Sustainable energy solutions with solar power plants.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Additional;
