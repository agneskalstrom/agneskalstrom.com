import React from "react"
import Draggable from "react-draggable"
import heart from "../images/svg/heart.svg"
import arrow from "../images/svg/hand-drawn-arrow.svg"
import lemon from "../images/svg/lemon.svg"
import cool from "../images/svg/cool.svg"
import planet from "../images/svg/planet.svg"
import coffee from "../images/svg/coffee.svg"
import peace from "../images/svg/peace.svg"


export default function Stickers() {
  return (
    <div className="stickers">
      <div className="sticker-text">
        <p>Decorate website</p>
        <img src={arrow} alt="" />
      </div>
      <div className="sticker-box">
        <img src={peace} alt="Illustration of hand doing peace sign" className="peace" />
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
