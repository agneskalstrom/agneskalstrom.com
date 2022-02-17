import React from "react";
import nextArrow from "../images/svg/next-arrow.svg";
import prevArrow from "../images/svg/prev-arrow.svg"


function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        >
            <img src={nextArrow} alt="Arrow pointing left" />
        </div>
    );
  }
  
  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        >
            <img src={prevArrow} alt="Arrow pointing right" />
        </div>
    );
  }

  export {
    NextArrow,
    PrevArrow,
  }