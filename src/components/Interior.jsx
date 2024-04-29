import React, { useEffect } from "react";

import aos from "aos";
import "aos/dist/aos.css";

import img1 from "../images/interior/int1.jpeg";
import img2 from "../images/interior/int2.jpeg";
import img3 from "../images/interior/int3.jpeg";
import img4 from "../images/interior/int4.jpeg";
import img5 from "../images/interior/int6.jpeg";
import img6 from "../images/interior/int5.jpeg";
import img7 from "../images/interior/int7.jpeg";
import img8 from "../images/interior/int8.jpeg";
import img9 from "../images/interior/int9.jpeg";
import img10 from "../images/interior/int10.jpeg";
import img11 from "../images/interior/int11.jpeg";
import img12 from "../images/interior/int12.jpeg";
import img13 from "../images/interior/int13.jpeg";
import img14 from "../images/interior/int14.jpeg";
import img15 from "../images/interior/int15.jpeg";
import img16 from "../images/interior/int16.jpeg";

import Footer from "./Footer";

function Interior() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="architecture">
        <div className="heading heading1">
          <p className="heading--text heading--text1" data-aos="fade-right">
            --Customizable Interior Solutions
          </p>
          <p
            className="architecture--description architecture--description1"
            data-aos="fade-right"
          >
            Tailor-made designs to match your lifestyle.
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
              Conceptualization to execution for a seamless experience.
            </p>
          </div>
        </div>

        <div className="heading heading2">
          <p className="heading--text heading--text2" data-aos="fade-right">
            --Modular Kitchen Designs
          </p>
          <p
            className="architecture--description architecture--description1"
            data-aos="fade-right"
          >
            Stylish and efficient kitchen spaces.
          </p>
          <div className="heading--images--container heading--images--container2">
            <p className="side--description" data-aos="fade-up">
              Combining functionality with aesthetic appeal.
            </p>
            <div className="heading--images">
              <img
                src={img3}
                alt="build3"
                className="project--img"
                data-aos="fade-up"
              />
              <img
                src={img4}
                alt="build4"
                className="project--img"
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>

        <div className="heading heading3">
          <p className="heading--text heading--text2" data-aos="fade-down">
            --Elegant Panelling Works
          </p>
          <div className="heading3--images">
            <div className="heading3--images--container">
              <img
                src={img5}
                alt="build5"
                className="project--img"
                data-aos="fade-right"
              />
              <p data-aos="fade-up">
                Exquisite panelling for added sophistication.
              </p>
            </div>
            <div className="heading3--images--container">
              <img
                src={img6}
                alt="build5"
                className="project--img"
                data-aos="fade-up"
              />
              <p data-aos="fade-up">
                Classic wood or modern materials for varied styles.
              </p>
            </div>
          </div>
        </div>

        <div className="heading heading3 heading4">
          <p className="heading--text heading--text2" data-aos="fade-down">
            --Convertible Bedrooms
          </p>
          <div className="heading3--images">
            <div className="heading3--images--container">
              <img
                src={img7}
                alt="build5"
                className="project--img"
                data-aos="fade-right"
              />
              <p data-aos="fade-up">
                Multi-functional bedrooms adapting to your needs.
              </p>
            </div>
            <div className="heading3--images--container">
              <img
                src={img8}
                alt="build5"
                className="project--img"
                data-aos="fade-up"
              />
              <p data-aos="fade-up">
                Innovative solutions for space optimization.
              </p>
            </div>
          </div>
        </div>

        <div className="heading heading1">
          <p className="heading--text heading--text1" data-aos="fade-right">
            --Interior Lighting Concepts
          </p>
          <p
            className="architecture--description architecture--description1"
            data-aos="fade-right"
          >
            Creative lighting concepts for ambiance.
          </p>
          <div className="heading--images--container">
            <div className="heading--images">
              <img
                src={img9}
                alt="build1"
                className="project--img"
                data-aos="fade-right"
              />
              <img
                src={img10}
                alt="build2"
                className="project--img"
                data-aos="fade-right"
              />
            </div>
            <p className="side--description" data-aos="fade-down">
              Tailored solutions from ambient to task lighting.
            </p>
          </div>
        </div>

        <div className="heading heading2">
          <p className="heading--text heading--text2" data-aos="fade-right">
            --Stylish False Ceilings
          </p>
          <p
            className="architecture--description architecture--description1"
            data-aos="fade-right"
          >
            Concealing wiring and ducts with stylish designs.
          </p>
          <div className="heading--images--container heading--images--container2">
            <p className="side--description" data-aos="fade-up">
              Adding elegance and visual appeal to interiors.
            </p>
            <div className="heading--images">
              <img
                src={img11}
                alt="build3"
                className="project--img"
                data-aos="fade-down"
              />
              <img
                src={img12}
                alt="build4"
                className="project--img"
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>

        <div className="heading heading3">
          <p className="heading--text heading--text2" data-aos="fade-up">
            --Glass Design Construction and Jypboard
          </p>
          <div className="heading3--images">
            <div className="heading3--images--container">
              <img
                src={img13}
                alt="build5"
                className="project--img"
                data-aos="fade-right"
              />
              <p data-aos="fade-up">
                Modern design elements with glass constructions.
              </p>
            </div>
            <div className="heading3--images--container">
              <img
                src={img14}
                alt="build5"
                className="project--img"
                data-aos="fade-up"
              />
              <p data-aos="fade-up">Enhancing transparency and uniqueness.</p>
            </div>
          </div>
        </div>

        <div className="heading heading3 heading4">
          <p className="heading--text heading--text2" data-aos="fade-up">
            --Office Furniture Solutions
          </p>
          <div className="heading3--images">
            <div className="heading3--images--container">
              <img
                src={img15}
                alt="build5"
                className="project--img"
                data-aos="fade-right"
              />
              <p data-aos="fade-up">
                Productive and aesthetically pleasing workspaces.
              </p>
            </div>
            <div className="heading3--images--container">
              <img
                src={img16}
                alt="build5"
                className="project--img"
                data-aos="fade-up"
              />
              <p data-aos="fade-up">
                Ergonomic desks and stylish storage options.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Interior;
