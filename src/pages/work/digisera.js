import React from "react"
import ProjectIntro from "../../components/projectIntro"
import digisera from "../../images/digisera.jpg"
import digisera2 from "../../images/digisera-2.jpg"
import digisera3 from "../../images/digisera-3.svg"
import digisera4 from "../../images/digisera-4.svg"
import digisera5 from "../../images/digisera-5.svg"
import digisera6 from "../../images/digisera-6.svg"

export default function Digisera() {
  return (
    <>
      <ProjectIntro
        title="Digisera"
        case="Creating a new visual identity and website for Stockholm-based web agency Digisera."
        role="Designer and developer."
        problem="Digisera is a small company with loyal customers. How do you create a brand identity that radiates confidence yet still communicates that personal feeling?"
        approach="A joint brand workshop at the start of the project provided me with enough substance to create intitial sketches to base the design on. This was an iterative process where I made continuous revisions to a Figma prototype for the client to review and test."
        solution="A clean yet colorful design with an approachable feel."
        specs="Figma, Illustrator, InDesign, Photoshop, WordPress"
        linkPrefix="Website:"
        linkURL="https://digisera.se"
        linkText="https://digisera.se"
      />
      <section className="project-images wrapper">
        <div className="two-section">
          <img src={digisera} alt="Digisera website" />
          <img src={digisera5} alt="Digisera logo in light, dark and purple" />
        </div>
        <div className="two-section">
          <img src={digisera3} alt="Brand colors with hex codes" />
          <img src={digisera4} alt="Typography specs" />
        </div>
        <div className="two-section">
          <img src={digisera6} alt="Example of Social Media post" />
          <img src={digisera2} alt="Mockup of broschure for Digisera" />
        </div>
      </section>
    </>
  )
}
