import React, { useEffect } from "react";

import aos from "aos";
import "aos/dist/aos.css";

import img1 from "../images/additional/add1.jpg";
import img2 from "../images/additional/add2.jpg";
import img3 from "../images/additional/add3.jpg";
import img4 from "../images/additional/add4.jpg";
import img5 from "../images/additional/add5.jpg";
import img6 from "../images/additional/add6.jpg";
import img7 from "../images/additional/add7.jpg";
import img8 from "../images/additional/add8.jpg";
import img9 from "../images/additional/add9.jpeg";
import img10 from "../images/additional/add10.jpeg";

import Footer from "./Footer";

function Additional() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="architecture">
        <div className="heading heading1">
          <p className="heading--text heading--text1" data-aos="fade-right">
            --Security Solutions
          </p>
          <p
            className="architecture--description architecture--description1"
            data-aos="fade-right"
          >
            Integration of CCTV cameras with network servers for enhanced
            surveillance.
          </p>
          <div className="heading--images--container">
            <div className="heading--images">
              <img
                src={img1}
                alt="build1"
                className="project--img"
                data-aos="fade-up"
              />
              <img
                src={img2}
                alt="build2"
                className="project--img"
                data-aos="fade-up"
              />
            </div>
            <p className="side--description" data-aos="fade-up">
              Comprehensive security systems tailored for your needs.
            </p>
          </div>
        </div>

        <div className="heading heading3">
          <p className="heading--text heading--text2" data-aos="fade-down">
            --Network Servers
          </p>
          <div className="heading3--images">
            <div className="heading3--images--container">
              <img
                src={img3}
                alt="build5"
                className="project--img"
                data-aos="fade-right"
              />
              <p data-aos="fade-up">
                Robust network servers ensuring seamless connectivity.
              </p>
            </div>
            <div className="heading3--images--container">
              <img
                src={img4}
                alt="build5"
                className="project--img"
                data-aos="fade-up"
              />
              <p data-aos="fade-up">
                Customized solutions for efficient data management.
              </p>
            </div>
          </div>
        </div>

        <div className="heading heading2">
          <p className="heading--text heading--text2" data-aos="fade-right">
            --CCTV Installation
          </p>
          <p
            className="architecture--description architecture--description1"
            data-aos="fade-right"
          >
            Professional installation of CCTV cameras for enhanced security.
          </p>
          <div className="heading--images--container heading--images--container2">
            <p className="side--description" data-aos="fade-up">
              Network connectivity for remote monitoring and surveillance.
            </p>
            <div className="heading--images">
              <img
                src={img5}
                alt="build3"
                className="project--img"
                data-aos="fade-down"
              />
              <img
                src={img6}
                alt="build4"
                className="project--img"
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>

        <div className="heading heading3 heading4">
          <p className="heading--text heading--text2">--Laptop Providers</p>
          <div className="heading3--images">
            <div className="heading3--images--container">
              <img
                src={img7}
                alt="build5"
                className="project--img"
                data-aos="fade-right"
              />
              <p data-aos="fade-up">
                High-quality laptops for personal and business use.
              </p>
            </div>
            <div className="heading3--images--container">
              <img
                src={img8}
                alt="build5"
                className="project--img"
                data-aos="fade-down"
              />
              <p data-aos="fade-up">
                Tailored packages to meet your computing needs.
              </p>
            </div>
          </div>
        </div>

        <div className="heading heading1">
          <p className="heading--text heading--text1" data-aos="fade-right">
            --Solar Power Plants Installation
          </p>
          <p
            className="architecture--description architecture--description1"
            data-aos="fade-right"
          >
            Expert installation for eco-friendly and cost-effective power
            generation.
          </p>
          <div className="heading--images--container">
            <div className="heading--images">
              <img
                src={img9}
                alt="build1"
                className="project--img"
                data-aos="fade-up"
              />
              <img
                src={img10}
                alt="build2"
                className="project--img"
                data-aos="fade-up"
              />
            </div>
            <p className="side--description" data-aos="fade-up">
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
