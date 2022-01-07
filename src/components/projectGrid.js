import React from "react"
import Box from "./box"
import allProjects from "./projectList"

export default function ProjectGrid() {
  return (
    <>
      <section className="projects-grid" id="work">
        <div className="projects-wrapper">
          {allProjects.map(project => {
            return (
              <Box
                key={project.id}
                image={project.img}
                title={project.title}
                alt={project.alt}
                link={project.link}
              />
            )
          })}
        </div>
      </section>
    </>
  )
}
