import React from "react";
import rightArrow from "./icons/right-arrow.svg";
import leftArrow from './icons/left-arrow.svg'
export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide-main next" : "btn-slide-main prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}