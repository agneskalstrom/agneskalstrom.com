import React from "react"
import agnes from "../images/agnes.jpg"

export default function About() {
  return (
    <main id="about" className="wrapper">
      <section className="top-container">
        <div className="top-img">
          <img src={agnes} alt="Agnes sitting outside in a beer garden and smiling down at the black dog on her lap. The dog has its tongue out and she's trying to put sunglasses on it." />
        </div>
        <section className="top-right">
          <div className="about-me">
            <p>Hello <span role="img" aria-label="Waving hand emoji">👋</span></p>
            <p>
              I'm Agnes, an aspiring web developer and designer based in
              Stockholm, currently studying front-end development at Hyper
              Island. I like coffee, Animal Crossing, Bob Ross, dogs and my cat Zizou.
            </p>
          </div>
          <div className="skills">
            <p>
              Skills: HTML, CSS, JavaScript, SASS/SCSS, React, graphic and
              digital design, UX/UI, Adobe Photoshop, InDesign, XD, Figma
            </p>
          </div>
        </section>
      </section>
    </main>
  )
}
