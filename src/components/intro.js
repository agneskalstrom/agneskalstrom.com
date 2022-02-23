import React from "react"
import Spotify from "./spotify"

export default function Intro() {
  return (
    <section className="main-intro">
      <div className="wrapper">
        <div className="intro-section">
          <h1 className="intro-text">
            Hello! I'm Agnes, a <span className="highlight-text">web developer</span>{" "}
            and <span className="highlight-text">digital designer</span> in
            Stockholm.
          </h1>
          <div className="about-me">
            <p>
              <span className="bold-text">
                Some of the technologies and tools I frequently work with:
              </span>{" "}
              HTML, CSS, JavaScript, React, Gatsby, Netlify, GitHub, Photoshop,
              InDesign, Illustrator, XD, Figma, Webflow
            </p>
            <p>
              <span className="bold-text">Say hi:</span>{" "}
              <a
                href="mailto:agnes.kalstrom@hyperisland.se"
                className="contact-link"
              >
                E-mail
              </a>{" "}
              <a
                href="https://www.linkedin.com/in/agnes-kalstrom/"
                className="contact-link"
              >
                LinkedIn
              </a>{" "}
              <a
                href="https://www.github.com/agneskalstrom/"
                className="contact-link"
              >
                GitHub
              </a>{" "}
            </p>
            <Spotify />
          </div>
        </div>
      </div>
    </section>
  )
}
