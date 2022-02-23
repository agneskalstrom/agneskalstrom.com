import React from "react"
import ProjectIntro from "../../components/projectIntro"
import plantbud from "../../images/projects/plantbud.jpg"
import plantbud2 from "../../images/projects/plantbud-2.svg"
import plantbud3 from "../../images/projects/plantbud-3.svg"
import plantbud4 from "../../images/projects/plantbud-4.svg"

export default function PlantBud () {
  return (
    <>
      <ProjectIntro
        title="PlantBud"
        case="During one of our design sprints at Hyper Island, we were challenged to come up with an idea and a website design for a made-up company in 24 hours. A year later I challenged myself to redo the design and refine the concept in the same amount of time."
        role="Designer."
        problem="Being a houseplant enthusiast who was in a position where I had to get rid of a large portion of my collection, I found myself searching for an app/website where I could make the plants I was donating available to other plant lovers around me."
        approach="Having the basic idea already figured out, I wanted to create a fun and welcoming website that would encourage people to join the community."
        solution="A friendly design with playful elements and patterns."
        tools="Figma, Illustrator"
        linkPrefix="Prototype:"
        linkURL="https://www.figma.com/proto/1PqfVng2eDVO32HWUw0eZ5/PlantBud?page-id=0%3A1&node-id=2%3A2&viewport=296%2C48%2C0.33&scaling=min-zoom&hotspot-hints=0&hide-ui=1"
        linkText="Click here"
      />
      <section className="project-images wrapper">
        <div className="two-section">
          <img src={plantbud} alt="PlantBud website" />
          <img src={plantbud2} alt="PlantBud typography" />
        </div>
        <div className="two-section">
          <img src={plantbud3} alt="Blobs with hex codes" />
          <img src={plantbud4} alt="Two stickers on top of a pattern" />
        </div>
      </section>
    </>
  )
}
