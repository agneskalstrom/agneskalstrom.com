import React from "react"
import Link from "gatsby-link"
import Box from "./box"
import allProjects from "./projectList"

export default function ProjectGrid() {
  const selectProjects = allProjects.slice(0, 6)
  return (
    <section className="projects-grid" id="work">
      <div className="projects-wrapper">
        {selectProjects.map(project => {
          return (
            <Box
              key={project.key}
              image={project.img}
              title={project.title}
              link={project.link}
              alt={project.alt}
            />
          )
        })}
      </div>
      <div className="see-more wrapper">
        <Link to="/work/" className="projects-link">
          See more →
        </Link>
      </div>
    </section>
  )
}
