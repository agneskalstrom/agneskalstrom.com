import React from "react"
import Link from "gatsby-link"
import arrow from "../images/assets/left-arrow.svg"

export default function ProjectIntro(props) {
  return (
    <section className="wrapper">
      <div className="inner-wrapper intro-section">
        <Link to="/#work" className="back-arrow">
          <img src={arrow} alt="Go back" />
        </Link>
        <h1 className="project-title">Project: <span className="bold-text">{props.title}</span></h1>
        <div className="project-workflow">
          <p>
            <span className="bold-text">Case: </span>
            <span>{props.case}</span>
          </p>
          <p>
            <span className="bold-text">My role: </span>
            <span>{props.role}</span>
          </p>
          <p>
            <span className="bold-text">Problem: </span>
            <span>{props.problem}</span>
          </p>
          <p>
            <span className="bold-text">Approach: </span>
            <span>{props.approach}</span>
          </p>
          <p>
            <span className="bold-text">Solution: </span>
            <span>{props.solution}</span>
          </p>
          <p>
            <span className="bold-text">Tools: </span>
            <span>{props.tools}</span>
          </p>
          <p>
            <span className="bold-text">{props.linkPrefix}</span>{" "}
            <a href={props.linkURL}>{props.linkText}</a>
          </p>
        </div>
      </div>
    </section>
  )
}
