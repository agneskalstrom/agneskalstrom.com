import React from "react"
import Draggable from "react-draggable"
import balloon from "../images/assets/balloon.svg"
import controller from "../images/assets/controller.svg"
import heart from "../images/assets/heart.svg"
import icecream from "../images/assets/icecream.svg"
import pizza from "../images/assets/pizza.svg"
import planet from "../images/assets/planet.svg"
import rocket from "../images/assets/rocket.svg"
import lightning from "../images/assets/lightning.svg"
import dice from "../images/assets/dice.svg"
import burger from "../images/assets/burger.svg"
import fish from "../images/assets/fish.svg"
import diamond from "../images/assets/diamond.svg"
import arrow from "../images/assets/hand-drawn-arrow.svg"

export default function Stickers() {
  return (
    <div className="stickers">
      <div className="sticker-text">
        <p>Decorate my website</p>
        <img src={arrow} alt="" />
      </div>
      <div className="sticker-box">
        <p className="nice">Nice! ✌️</p>
        <Draggable>
          <img
            src={controller}
            draggable="false"
            className="sticker"
            id="controller"
            alt=""
          />
        </Draggable>
        <Draggable>
          <img
            src={pizza}
            draggable="false"
            className="sticker"
            id="pizza"
            alt=""
          />
        </Draggable>
        <Draggable>
          <img
            src={balloon}
            draggable="false"
            className="sticker"
            id="balloon"
            alt=""
          />
        </Draggable>
        <Draggable>
          <img
            src={icecream}
            draggable="false"
            className="sticker"
            id="icecream"
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
            src={planet}
            draggable="false"
            className="sticker"
            id="planet"
            alt=""
          />
        </Draggable>
        <Draggable>
          <img
            src={rocket}
            draggable="false"
            className="sticker"
            id="rocket"
            alt=""
          />
        </Draggable>
        <Draggable>
          <img
            src={dice}
            draggable="false"
            className="sticker"
            id="dice"
            alt=""
          />
        </Draggable>
        <Draggable>
          <img
            src={diamond}
            draggable="false"
            className="sticker"
            id="diamond"
            alt=""
          />
        </Draggable>
        <Draggable>
          <img
            src={fish}
            draggable="false"
            className="sticker"
            id="fish"
            alt=""
          />
        </Draggable>
        <Draggable>
          <img
            src={burger}
            draggable="false"
            className="sticker"
            id="burger"
            alt=""
          />
        </Draggable>
        <Draggable>
          <img
            src={lightning}
            draggable="false"
            className="sticker"
            id="lightning"
            alt=""
          />
        </Draggable>
      </div>
    </div>
  )
}
