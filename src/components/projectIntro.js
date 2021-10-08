import React from "react"
import Link from "gatsby-link"
import { SplitText } from "@cyriacbr/react-split-text"

export default function ProjectIntro(props) {
  return (
    <section className="project-intro wrapper">
      <div className="project-presentation inner-wrapper">
        <div className="project-description">
          <h1><SplitText className="project-title">{props.title}</SplitText></h1>
          <p>{props.desc}</p>
          <p>
            {props.linkPrefix} <Link to={props.linkURL}>{props.linkText}</Link>
          </p>
        </div>
        <div className="project-details">
          <h2>Specs:</h2>
          <ul>
            <li>{props.detail1}</li>
            <li>{props.detail2}</li>
            <li>{props.detail3}</li>
            <li>{props.detail4}</li>
            <li>{props.detail5}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
