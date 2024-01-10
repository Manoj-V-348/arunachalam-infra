import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

import project1 from "../images/projects/project1.png";
import project2 from "../images/projects/project2.png";
import project3 from "../images/projects/project3.png";
import project4 from "../images/projects/project4.png";
import project5 from "../images/projects/project5.png";

import "./ProjectsSlider.css";

const ProjectsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const showSlide = (n) => {
      const slides = document.getElementsByClassName("slide");

      if (n > slides.length) setCurrentSlide(1);
      if (n < 1) setCurrentSlide(slides.length);

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      slides[currentSlide - 1].style.display = "block";
    };

    showSlide(currentSlide);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide - 1);
  };

  return (
    <div className="projects--wrapper">
      <p className="about--heading">//Projects</p>
      <div className="projects-slider-container">
        {/* Navigation Buttons */}
        {currentSlide > 1 && (
          <button className="slider-btn left-btn" onClick={prevSlide}>
            <Icon icon="icon-park-solid:left-c" color="#262523" width="30" />
          </button>
        )}
        {currentSlide < 5 && (
          <button className="slider-btn right-btn" onClick={nextSlide}>
            <Icon icon="icon-park-solid:right-c" color="#262523" width="30" />
          </button>
        )}

        {/* Image Slider */}
        <div className="projects-slider">
          <div className="slide">
            <img src={project1} alt="Project 1" />
          </div>

          <div className="slide">
            <img src={project2} alt="Project 2" />
          </div>

          <div className="slide">
            <img src={project3} alt="Project 3" />
          </div>

          <div className="slide">
            <img src={project4} alt="Project 4" />
          </div>

          <div className="slide">
            <img src={project5} alt="Project 5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSlider;
