import React from "react"
import { SplitText } from "@cyriacbr/react-split-text"

export default function About() {
  return (
    <main className="wrapper">
      <section className="about-intro inner-wrapper">
        <h1><SplitText className="intro-text">Nice to meet you! </SplitText></h1>
        <div className="about-me">
          <p>
            I'm Agnes, a front-end development student and digital designer from
            Stockholm, Sweden 🇸🇪. When I'm not coding, I like to drink coffee ☕, play
            Animal Crossing 🎮 and watch The Joy of Painting with Bob Ross 🎨. Sometimes simultaneously.
          </p>
          <p>
            I have knowledge of the following technologies and tools: HTML, CSS,
            JavaScript, SASS, React, Gatsby, Adobe Photoshop, InDesign,
            Illustrator, XD, Figma
          </p>
          <address>
            <h2>Contact me:</h2>
            <p>agnes.kalstrom [at] hyperisland.se</p>
            <p>+46 (0)70 736 73 66</p>
            <p><a href="https://www.linkedin.com/in/agnes-kalstrom">LinkedIn</a></p>
          </address>
        </div>
      </section>
    </main>
  )
}
