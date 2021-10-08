import React from "react"
import allProjects from "../components/projectList"
import Box from "../components/box"

export default function Work() {
  return (
    <main className="projects-grid">
      <div className="projects-wrapper">
        {allProjects.map(project => {
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
    </main>
  )
}