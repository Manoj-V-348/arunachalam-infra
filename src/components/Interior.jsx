import React from "react";

import img1 from "../images/interior/int1.png";
import img2 from "../images/interior/int2.png";
import img3 from "../images/interior/int3.png";
import img4 from "../images/interior/int4.png";
import img5 from "../images/interior/int5.png";
import img6 from "../images/interior/int6.png";
import img7 from "../images/interior/int7.png";
import img8 from "../images/interior/int8.png";
import img9 from "../images/interior/int9.png";
import img10 from "../images/interior/int10.png";
import img11 from "../images/interior/int11.png";
import img12 from "../images/interior/int12.png";
import img13 from "../images/interior/int13.png";
import img14 from "../images/interior/int14.png";
import img15 from "../images/interior/int15.png";
import img16 from "../images/interior/int16.png";

import Footer from "./Footer";

function Interior() {
  return (
    <>
      <div className="architecture">
        <div className="heading heading1">
          <p className="heading--text heading--text1">
            --Customizable Interior Solutions
          </p>
          <p className="architecture--description architecture--description1">
            Tailor-made designs to match your lifestyle.
          </p>
          <div className="heading--images--container">
            <div className="heading--images">
              <img src={img1} alt="build1" />
              <img src={img2} alt="build2" />
            </div>
            <p className="side--description">
              Conceptualization to execution for a seamless experience.
            </p>
          </div>
        </div>

        <div className="heading heading2">
          <p className="heading--text heading--text2">
            --Modular Kitchen Designs
          </p>
          <p className="architecture--description architecture--description1">
            Stylish and efficient kitchen spaces.
          </p>
          <div className="heading--images--container heading--images--container2">
            <p className="side--description">
              Combining functionality with aesthetic appeal.
            </p>
            <div className="heading--images">
              <img src={img3} alt="build3" />
              <img src={img4} alt="build4" />
            </div>
          </div>
        </div>

        <div className="heading heading3">
          <p className="heading--text heading--text2">
            --Elegant Panelling Works
          </p>
          <div className="heading3--images">
            <div className="heading3--images--container">
              <img src={img5} alt="build5" />
              <p>Exquisite panelling for added sophistication.</p>
            </div>
            <div className="heading3--images--container">
              <img src={img6} alt="build5" />
              <p>Classic wood or modern materials for varied styles.</p>
            </div>
          </div>
        </div>

        <div className="heading heading3 heading4">
          <p className="heading--text heading--text2">--Convertible Bedrooms</p>
          <div className="heading3--images">
            <div className="heading3--images--container">
              <img src={img7} alt="build5" />
              <p>Multi-functional bedrooms adapting to your needs.</p>
            </div>
            <div className="heading3--images--container">
              <img src={img8} alt="build5" />
              <p>Innovative solutions for space optimization.</p>
            </div>
          </div>
        </div>

        <div className="heading heading1">
          <p className="heading--text heading--text1">
            --Interior Lighting Concepts
          </p>
          <p className="architecture--description architecture--description1">
            Creative lighting concepts for ambiance.
          </p>
          <div className="heading--images--container">
            <div className="heading--images">
              <img src={img9} alt="build1" />
              <img src={img10} alt="build2" />
            </div>
            <p className="side--description">
              Tailored solutions from ambient to task lighting.
            </p>
          </div>
        </div>

        <div className="heading heading2">
          <p className="heading--text heading--text2">
            --Stylish False Ceilings
          </p>
          <p className="architecture--description architecture--description1">
            Concealing wiring and ducts with stylish designs.
          </p>
          <div className="heading--images--container heading--images--container2">
            <p className="side--description">
              Adding elegance and visual appeal to interiors.
            </p>
            <div className="heading--images">
              <img src={img11} alt="build3" />
              <img src={img12} alt="build4" />
            </div>
          </div>
        </div>

        <div className="heading heading3">
          <p className="heading--text heading--text2">
            --Glass Design Construction and Jypboard
          </p>
          <div className="heading3--images">
            <div className="heading3--images--container">
              <img src={img13} alt="build5" />
              <p>Modern design elements with glass constructions.</p>
            </div>
            <div className="heading3--images--container">
              <img src={img14} alt="build5" />
              <p>Enhancing transparency and uniqueness.</p>
            </div>
          </div>
        </div>

        <div className="heading heading3 heading4">
          <p className="heading--text heading--text2">
            --Office Furniture Solutions
          </p>
          <div className="heading3--images">
            <div className="heading3--images--container">
              <img src={img15} alt="build5" />
              <p>Productive and aesthetically pleasing workspaces.</p>
            </div>
            <div className="heading3--images--container">
              <img src={img16} alt="build5" />
              <p>Ergonomic desks and stylish storage options.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Interior;
