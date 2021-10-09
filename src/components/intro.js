import React from "react"
import Link from "gatsby-link"
import { SplitText } from "@cyriacbr/react-split-text"

export default function Intro() {
  return (
    <main className="wrapper">
      <section className="intro inner-wrapper">
        <h1>
          <SplitText className="intro-text">
            Hello! I’m Agnes, a web developer and designer from Stockholm,
            Sweden.
          </SplitText>
        </h1>
        <div className="intro-links">
            <Link to="/about/">About me</Link>
            <span className="bullet">•</span>
            <Link to="#work">My work ↓</Link>
        </div>
      </section>
    </main>
  )
}
