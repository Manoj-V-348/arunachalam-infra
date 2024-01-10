import React from "react";

import "./Header.css";

function About() {
  return (
    <div className="about--container--homepage">
      <div className="about--details">
        <p className="about--heading">//ABOUT</p>
        <p>
          "At <span className="bold--text">Arunachalam Infra</span>, we are not
          just builders; we are storytellers of architectural excellence. With a
          commitment to making design and construction accessible to all, we
          blend affordability with elegance. Our journey is marked by hundreds
          of successful projects, each a testament to our passion for crafting
          spaces that inspire. Explore the synergy of creativity and
          practicality with Arunachalam Infra - where innovation meets
          affordability, and your dream spaces come to life."
        </p>
        <div>
          <a href="#" className="button--styling">
            LEARN MORE
          </a>
        </div>
      </div>
      <div className="company--details--box--container">
        <div className="details--box completed--projects box--style1">
          <p className="big--text">20+</p>
          <p>Completed Projects</p>
        </div>
        <div className="details--box market--years box--style2">
          <p className="big--text">3+</p>
          <p>Years on the Market</p>
        </div>
        <div className="details--box trustworthy box--style2">
          <p className="big--text">100%</p>
          <p>Trustworthy</p>
        </div>
      </div>
    </div>
  );
}

export default About;
