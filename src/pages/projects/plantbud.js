import React from "react"
import ProjectDisplay from "../../components/projectDisplay"
import plantbud from "../../images/plantbud.jpg"
import plantbud2 from "../../images/plantbud-2.jpg"

export default function datePlanner() {
  return (
    <ProjectDisplay
      topImg={plantbud}
      title="PlantBud"
      desc="During a 24 hour design sprint, we were challenged to come up with a
            business idea and create a design for a company website. I came up
            with PlantBud, a fictional online community where users can donate,
            swap and adopt house plants in their local area. I designed and
            coded a mock-up for a bright and simple landing page that encourages
            visitors to join the community."
      bottomImg={plantbud2}
    />
  )
}
