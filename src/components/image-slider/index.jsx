import React, { useState } from "react";

import "./_index.scss";

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides, sliderData }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <div className="slider__images">
        {sliderData.map((slide, index) => {
          return (
            <div
              className={
                index === current
                  ? "slider__slide slider__slide_active"
                  : "slider__slide"
              }
              key={index}
            >
              {index === current && (
                <img src={slide} className="slider__image" />
              )}
            </div>
          );
        })}
        <div className="slider__arrows">
          <FaArrowAltCircleLeft
            className="slider__left-arrow"
            onClick={prevSlide}
          />
          <FaArrowAltCircleRight
            className="slider__right-arrow"
            onClick={nextSlide}
          />
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
