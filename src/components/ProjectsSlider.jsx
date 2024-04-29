import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

import aos from "aos";
import "aos/dist/aos.css";

import project1 from "../images/projects/Carousel1.jpeg";
import project2 from "../images/projects/Carousel2.jpeg";
import project3 from "../images/projects/Carousel3.jpeg";
import project4 from "../images/projects/Carousel4.jpeg";
import project5 from "../images/projects/Carousel5.jpeg";
import project6 from "../images/projects/Carousel6.jpeg";
import project7 from "../images/projects/Carousel7.jpeg";
import project8 from "../images/projects/Carousel8.jpeg";
import project9 from "../images/projects/Carousel9.jpeg";
import project10 from "../images/projects/Carousel10.jpeg";
import project11 from "../images/projects/Carousel11.jpeg";
import project12 from "../images/projects/Carousel12.jpeg";
import project13 from "../images/projects/Carousel13.jpeg";
import project14 from "../images/projects/Carousel14.jpeg";
import project15 from "../images/projects/Carousel15.jpeg";
import project16 from "../images/projects/Carousel16.jpeg";

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

  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="projects--wrapper">
      <p className="about--heading" data-aos="fade-right">
        //Projects
      </p>
      <div className="projects-slider-container">
        {/* Navigation Buttons */}
        {currentSlide > 1 && (
          <button className="slider-btn left-btn" onClick={prevSlide}>
            <Icon icon="icon-park-solid:left-c" color="#262523" width="30" />
          </button>
        )}
        {currentSlide < 16 && (
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

          <div className="slide">
            <img src={project6} alt="Project 6" />
          </div>

          <div className="slide">
            <img src={project7} alt="Project 7" />
          </div>

          <div className="slide">
            <img src={project8} alt="Project 8" />
          </div>

          <div className="slide">
            <img src={project9} alt="Project 9" />
          </div>

          <div className="slide">
            <img src={project10} alt="Project 10" />
          </div>

          <div className="slide">
            <img src={project11} alt="Project 11" />
          </div>

          <div className="slide">
            <img src={project12} alt="Project 12" />
          </div>

          <div className="slide">
            <img src={project13} alt="Project 13" />
          </div>

          <div className="slide">
            <img src={project14} alt="Project 14" />
          </div>

          <div className="slide">
            <img src={project15} alt="Project 15" />
          </div>

          <div className="slide">
            <img src={project16} alt="Project 16" />
          </div>

          {/*
            <div className="slide">
              <img src={project17} alt="Project 17" />
            </div>
          */}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSlider;
