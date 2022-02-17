import React from "react"
import Draggable from "react-draggable"
import heart from "../images/assets/heart.svg"
import arrow from "../images/assets/hand-drawn-arrow.svg"
import lemon from "../images/assets/lemon.svg"
import cool from "../images/assets/cool.svg"
import planet from "../images/assets/planet.svg"
import coffee from "../images/assets/coffee.svg"
import peace from "../images/assets/peace.svg"


export default function Stickers() {
  return (
    <div className="stickers">
      <div className="sticker-text">
        <p>Decorate website</p>
        <img src={arrow} alt="" />
      </div>
      <div className="sticker-box">
        <p className="nice">Nice! <img src={peace} alt="Illustration of hand doing peace sign" /></p>
        <Draggable>
          <img
            src={coffee}
            draggable="false"
            className="sticker"
            id="coffee"
            alt=""
          />
        </Draggable>
        <Draggable>
          <img
            src={planet}
            draggable="false"
            className="sticker"
            id="planet"
            alt=""
          />
        </Draggable>
        <Draggable>
          <img
            src={heart}
            draggable="false"
            className="sticker"
            id="heart"
            alt=""
          />
        </Draggable>
        <Draggable>
          <img
            src={cool}
            draggable="false"
            className="sticker"
            id="cool"
            alt=""
          />
        </Draggable>
        <Draggable>
          <img
            src={lemon}
            draggable="false"
            className="sticker"
            id="lemon"
            alt=""
          />
        </Draggable>
      </div>
    </div>
  )
}
