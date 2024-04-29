import React, { useEffect } from "react";

import aos from "aos";
import "aos/dist/aos.css";

import "./Advantages.css";

import vector from "../images/construction.png";

function Advantages() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="advantages--wrapper">
      <p className="about--heading" data-aos="fade-right">
        //Advantages
      </p>

      <div className="advantages--container">
        <div className="advantages">
          <p className="advantages--heading" data-aos="fade-right">
            Rapid Construction
          </p>
          <p data-aos="fade-right">
            "Experience swift project timelines with our advanced construction
            methods. At Arunachalam Infra, we prioritize efficiency without
            compromising quality, ensuring your vision becomes a reality
            promptly."
          </p>
        </div>

        <div className="advantages drawing" data-aos="fade-up">
          <img src={vector} alt="construction" />
        </div>

        <div className="advantages" data-aos="fade-down">
          <p className="advantages--heading">Build Anywhere</p>
          <p>
            "Choose freedom with Arunachalam Infra. Our expertise extends beyond
            geographical boundaries. Whether urban or remote, we bring our
            commitment to quality construction and design to your desired
            location."
          </p>
        </div>

        <div className="advantages security" data-aos="fade-down">
          <p className="advantages--heading">Best Security</p>
          <p>
            "Your safety is our priority. Arunachalam Infra integrates
            state-of-the-art security measures into each project, ensuring peace
            of mind with our comprehensive security solutions."
          </p>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
