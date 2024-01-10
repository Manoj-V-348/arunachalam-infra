import React from "react";

import "./Advantages.css";

import vector from "../images/construction.png";

function Advantages() {
  return (
    <div className="advantages--wrapper">
      <p className="about--heading">//Advantages</p>

      <div className="advantages--container">
        <div className="advantages">
          <p className="advantages--heading">Rapid Construction</p>
          <p>
            "Experience swift project timelines with our advanced construction
            methods. At Arunachalam Infra, we prioritize efficiency without
            compromising quality, ensuring your vision becomes a reality
            promptly."
          </p>
        </div>

        <div className="advantages drawing">
          <img src={vector} alt="construction" />
        </div>

        <div className="advantages">
          <p className="advantages--heading">Build Anywhere</p>
          <p>
            "Choose freedom with Arunachalam Infra. Our expertise extends beyond
            geographical boundaries. Whether urban or remote, we bring our
            commitment to quality construction and design to your desired
            location."
          </p>
        </div>

        <div className="advantages security">
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
