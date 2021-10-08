import React from "react"
import ProjectIntro from "../../components/projectIntro"
import plantbud from "../../images/plantbud.jpg"
import plantbud2 from "../../images/plantbud-2.jpg"
import plantbudgif from "../../images/plantbudgif.gif"

export default function plantBud() {
  return (
    <>
      <ProjectIntro
        title="PlantBud"
        desc="PlantBud is the result of a 24 hour design sprint: a made-up online community for plant enthusiasts who wish to donate, swap and adopt house plants in their local area."
        detail1="Figma"
        detail2="Illustrator"
      />
      <section className="project-images wrapper">
        <div className="two-section">
          <img src={plantbud} />
          <img src={plantbudgif} />
        </div>
        <div className="long-section">
          <img src={plantbud2} />
        </div>
      </section>
    </>
  )
}
