import React from "react"
import Box from "./box"
import allProjects from "./projectList"

export default function ProjectsGrid() {
  return (
    <main className="projects-wrapper">
      {allProjects.map(project => {
        return (
          <Box
            key={project.key}
            image={project.img}
            title={project.title}
            link={project.link}
          />
        )
      })}
    </main>
  )
}
