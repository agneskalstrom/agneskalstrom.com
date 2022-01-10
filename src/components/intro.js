import React from "react"
import arrow from "../images/assets/down-arrow.svg"

export default function Intro() {
  return (
    <section className="intro">
      <div className="wrapper">
        <div className="intro-section">
          <h1 className="intro-text">Hello! I'm Agnes, a <span className="bold-text">web developer</span> and <span className="bold-text">digital designer</span> in Stockholm.</h1>
          <div className="about-me">
            <p>
              When I'm not coding, you'll probably find me reading, playing video games or
              watching The Joy of Painting with Bob Ross. Sometimes
              simultaneously.
            </p>
            <p>
              <span className="bold-text">
               Some of the technologies and tools I frequently work with:
              </span>{" "}
              HTML, CSS, JavaScript, React, Gatsby, Photoshop, InDesign,
              Illustrator, XD, Figma, Webflow
            </p>
            <p>
              <span className="bold-text">Contact me:</span>{" "}
              <a
                href="mailto:agnes.kalstrom@hyperisland.se"
                className="contact-link"
              >
                agnes.kalstrom [at] hyperisland.se
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/agnes-kalstrom/"
                className="contact-link"
              >
                LinkedIn
              </a>{" "}
              <a href="https://github.com/agneskalstrom" className="contact-link">
                GitHub
              </a>{" "}
              <a
                href="https://facebook.com/agnes.kalstrom"
                className="contact-link"
              >
                Facebook
              </a>{" "}
              <a
                href="https://www.instagram.com/agneskalstrom/"
                className="contact-link"
              >
                Instagram
              </a>
            </p>
          </div>
          <div className="work-link">
            <p className="large-link">
              <span className="bold-text">My work</span>{" "}
              <span className="down-arrow"><img src={arrow} alt="Arrow pointing down" /></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
