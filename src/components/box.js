import React from "react"
import Link from "gatsby-link"

export default function Box(props) {
  return (
    <div className="project-box" id={props.title}>
      <Link to={props.link}>
        <img src={props.image} />
      </Link>
    </div>
  )
}
