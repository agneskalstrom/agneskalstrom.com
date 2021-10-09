import React from "react"
import Link from "gatsby-link"
import { SplitText } from "@cyriacbr/react-split-text"

export default function Intro() {
  return (
    <main className="wrapper">
      <section className="intro inner-wrapper">
        <h1><SplitText className="intro-text">
          Hello! I’m Agnes, a web developer and designer from Stockholm, Sweden.
        </SplitText></h1>
        <div className="intro-links">
          <ul>
            <li>
              <Link to="/about/">About me</Link>
            </li>
            <span className="bullet" aria-label="hidden">•</span>
            <li>
              <Link to="#work">My work ↓</Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
